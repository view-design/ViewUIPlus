<template>
    <teleport to="body" :disabled="!transfer">
        <transition name="fade">
            <div :class="[prefixCls + '-wrapper']" v-if="modelValue">
                <div :class="[prefixCls + '-mark']" v-if="previewList.length > 0" @click.stop="handleClickMark">
                    <Spin
                        v-if="status === 'loading'"
                        size="large"
                    />
                    <div
                        v-else-if="status === 'failed'"
                        :class="[prefixCls + '-fail']"
                    >
                        <span>{{failLang}}</span>
                    </div>
                    <img
                        :src="currentSrc"
                        :key="currentIndex.toString()"
                        v-show="status === 'loaded'"
                        :style="imageStyle"
                        :class="imgClasses"
                        @click.stop
                        @mousedown.stop.prevent="handleMousedown"
                        @load="handleImageLoad"
                        @error="handleImageError"
                    />
                </div>
                <div :class="[prefixCls + '-operations']">
                    <Icon
                        type="ios-add-circle-outline"
                        :class="[prefixCls + '-operations-item']"
                        @click.stop="handleOperation('zoomIn')"
                    />
                    <Icon
                        type="ios-remove-circle-outline"
                        :class="[prefixCls + '-operations-item']"
                        @click.stop="handleOperation('zoomOut')"
                    />
                    <Icon
                        :type="this.original ? 'ios-barcode-outline' : 'ios-qr-scanner'"
                        :class="[prefixCls + '-operations-item']"
                        @click.stop="handleOperation('original')"
                    />
                    <Icon
                        type="ios-refresh"
                        :class="[prefixCls + '-operations-item']"
                        @click.stop="handleOperation('rotateLeft')"
                    />
                    <Icon
                        type="ios-refresh"
                        :class="[prefixCls + '-operations-item']"
                        @click.stop="handleOperation('rotateRight')"
                    />
                </div>
                <Icon
                    :class="[prefixCls + '-arrow-left', { [prefixCls + '-arrow-disabled']: hasLeftSwitchEnd }]"
                    type="ios-arrow-back"
                    @click.stop="handleSwitch(false)"
                />
                <Icon
                    :class="[prefixCls + '-arrow-right', { [prefixCls + '-arrow-disabled']: hasRightSwitchEnd }]"
                    type="ios-arrow-forward"
                    @click.stop="handleSwitch(true)"
                />
                <Icon
                    :class="[prefixCls + '-arrow-close']"
                    type="md-close"
                    @click.stop="handleClose"
                />
            </div>
        </transition>
    </teleport>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import { on, off } from '../../utils/dom';
    import throttle from 'lodash.throttle';
    import { isClient } from '../../utils';
    import Locale from '../../mixins/locale';
    import Icon from '../icon/icon.vue';
    import KeyCode from '../../utils/keyCode';
    import Spin  from '../spin/spin.vue';

    const prefixCls = 'ivu-image-preview';

    export default {
        name: 'ImagePreview',
        mixins: [ Locale ],
        components: { Icon, Spin },
        props: {
            modelValue: {
                type: Boolean,
                default: false
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? false : global.$VIEWUI.transfer;
                }
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            previewList: {
                type: Array,
                default() {
                    return []
                }
            },
            initialIndex: {
                type: Number,
                default: 0
            },
            infinite: {
                type: Boolean,
                default: true
            }
        },
        emits: ['update:modelValue', 'on-close', 'on-switch'],
        data() {
            return {
                prefixCls,
                currentIndex: 0,
                scale: 1,
                degree: 0,
                translate: { x: 0, y: 0 },
                startX: 0,
                startY: 0,
                transition: true,
                original: false, // display by original size
                prevOverflow: '', // prevent body scrolling
                status: 'loading' // image status
            }
        },
        computed: {
            operations() {
                return [
                    { icon: 'ios-add-circle-outline', value: 'zoomIn' },
                    { icon: 'ios-remove-circle-outline', value: 'zoomOut' },
                    { icon: this.original ? 'ios-barcode-outline' : 'ios-qr-scanner', value: 'original' },
                    { icon: 'ios-refresh', value: 'rotateLeft' },
                    { icon: 'ios-refresh', value: 'rotateRight' }
                ]
            },
            imgClasses() {
                return {
                    [prefixCls + '-image']: true,
                    [prefixCls + '-image-transition']: this.transition,
                    [prefixCls + '-image-limit']: !this.original
                };
            },
            imageStyle() {
                let translateX = this.translate.x / this.scale;
                let translateY = this.translate.y / this.scale;

                const mod = this.degree % 360;

                if ([90, -270].includes(mod)) {
                    [translateX, translateY] = [translateY, -translateX];
                }
                if ([180, -180].includes(mod)) {
                    [translateX, translateY] = [-translateX, -translateY];
                }
                if ([270, -90].includes(mod)) {
                    [translateX, translateY] = [-translateY, translateX];
                }
                return {
                    transform: `
                        scale(${this.scale})
                        rotate(${this.degree}deg)
                        translate(${translateX}px, ${translateY}px)
                    `
                };
            },
            hasRightSwitchEnd() {
                const { currentIndex, infinite, previewList} = this;
                const len = previewList.length;
                return infinite ? false : currentIndex >= len - 1;
            },
            hasLeftSwitchEnd() {
                const { currentIndex, infinite} = this;
                return infinite ? false : currentIndex === 0;
            },
            currentSrc() {
                return this.previewList[this.currentIndex];
            },
            failLang() {
                return this.t('i.image.fail');
            }
        },
        methods: {
            resetStyle() {
                this.scale = 1;
                this.degree = 0;
                this.translate.x = 0;
                this.translate.y = 0;
            },
            handleClose() {
                this.$emit('update:modelValue', false);
                this.$emit('on-close');
            },
            handleClickMark() {
                if (!this.maskClosable) return;
                this.handleClose();
            },
            handleSwitch(next) {
                if (next) {
                    if (this.currentIndex + 1 === this.previewList.length) {
                        if (this.infinite) {
                            this.resetStyle();
                            this.currentIndex = 0;
                        }
                    } else {
                        this.resetStyle();
                        this.currentIndex += 1;
                    }
                } else {
                    if (this.currentIndex === 0) {
                        if (this.infinite) {
                            this.resetStyle();
                            this.currentIndex = this.previewList.length - 1;
                        }
                    } else {
                        this.resetStyle();
                        this.currentIndex -= 1;
                    }
                }
                this.$emit('on-switch', { currentIndex: this.currentIndex });
            },
            handleOperation(val) {
                if (val === 'zoomIn' && this.scale < 6) this.scale += 0.25;
                if (val === 'zoomOut' && this.scale > 0.25) this.scale -= 0.25;
                if (val === 'rotateLeft') this.degree -= 90;
                if (val === 'rotateRight') this.degree += 90;
                if (val === 'original') {
                    this.original = !this.original;
                    this.transition = false;
                    this.resetStyle();
                    setTimeout(() => { this.transition = true; }, 0);
                }
            },
            handleKeydown(event) {
                event.preventDefault();
                const { keyCode } = event;
                if (keyCode === KeyCode.LEFT) this.handleSwitch(false);
                if (keyCode === KeyCode.RIGHT) this.handleSwitch(true);
                if (keyCode === KeyCode.UP) this.handleOperation('zoomIn');
                if (keyCode === KeyCode.DOWN) this.handleOperation('zoomOut');
                if (keyCode === KeyCode.SPACE) this.original = !this.original;
            },
            handleKeyup(event) {
                const { keyCode } = event;
                if (keyCode === KeyCode.ESC) this.handleClose();
            },
            handleWheel(event) {
                const { deltaY } = event;
                this.handleOperation(deltaY < 0 ? 'zoomIn' : 'zoomOut');
            },
            handleMousedown(event) {
                const { pageX, pageY, which } = event;
                if (which !== 1) return;
                this.startX = pageX;
                this.startY = pageY;
                this.transition = false;
                on(document, 'mousemove', this.handleMousemove);
                on(document, 'mouseup', this.handleMouseup);
            },
            handleMousemove: throttle(function(event) {
                event.stopPropagation();
                const { pageX, pageY } = event;
                this.translate.x += (pageX - this.startX);
                this.translate.y += (pageY - this.startY);
                this.startX = pageX;
                this.startY = pageY;
            }),
            handleMouseup() {
                this.transition = true;
                off(document, 'mousemove', this.handleMousemove);
                off(document, 'mouseup', this.handleMouseup);
            },
            getBodyOverflow() {
                return isClient ? document.body.style.overflow : '';
            },
            setBodyOverflow(val) {
                if (!isClient) return;
                document.body.style.overflow = val;
            },
            handleImageLoad() {
                this.status = 'loaded';
            },
            handleImageError() {
                this.status = 'failed';
            }
        },
        watch: {
            modelValue(val) {
                if (val) {
                    this.currentIndex = this.initialIndex;
                    this.resetStyle();
                    this.original = false;
                    this.prevOverflow = this.getBodyOverflow();
                    this.setBodyOverflow('hidden');
                } else {
                    this.setBodyOverflow(this.prevOverflow);
                }
            },
            currentIndex() {
                this.status = 'loading';
            }
        },
        mounted() {
            on(document, 'keydown', this.handleKeydown);
            on(document, 'keyup', this.handleKeyup);
            on(document, 'wheel', this.handleWheel);
        },
        beforeUnmount() {
            off(document, 'keydown', this.handleKeydown);
            off(document, 'keyup', this.handleKeyup);
            off(document, 'wheel', this.handleWheel);
        }
    }
</script>
