<template>
    <teleport to="body" :disabled="!transfer">
        <transition name="fade">
            <div v-if="modelValue" :class="[prefixCls + '-mask']" :style="maskStyle"></div>
        </transition>
        <transition name="fade">
            <div :class="[prefixCls + '-wrap']" v-if="modelValue" :style="maskStyle">
                <div :class="[prefixCls]" v-bind="$attrs" @click.stop="handleClickMask">
                    <Spin v-if="status === 'loading'" size="large" :class="[prefixCls + '-loading']" />
                    <div v-else-if="status === 'failed'" :class="[prefixCls + '-fail']">
                        <span>{{failLang}}</span>
                    </div>
                    <img
                        :src="currentSrc"
                        :key="currentIndex.toString()"
                        :style="imageStyle"
                        :class="imageClasses"
                        @click.stop
                        @mousedown.stop.prevent="handleMousedown"
                        @load="handleImageLoad"
                        @error="handleImageError"
                    />
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
    import { transferIndex, transferIncrease } from '../../utils/transfer-queue';

    const prefixCls = 'ivu-image-preview';

    export default {
        name: 'ImagePreview',
        mixins: [ Locale ],
        components: { Icon, Spin },
        inheritAttrs: false,
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
                status: 'loading', // image status
                zIndex: 1000,
                maskIndex: this.getMaskIndex()
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
            imageClasses() {
                return [
                    prefixCls + '-image',
                    {
                        [prefixCls + '-hidden']: this.status === 'failed',
                        [prefixCls + '-transition']: this.transition,
                        [prefixCls + '-limit']: !this.original
                    }
                ];
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
            maskStyle() {
                return {
                    zIndex: this.maskIndex + this.zIndex
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
            handleClickMask() {
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
                const topPreview = this.getTopPreview();
                if (!topPreview.modelValue) return;
                const { keyCode } = event;
                if (keyCode === KeyCode.LEFT) topPreview.handleSwitch(false);
                if (keyCode === KeyCode.RIGHT) topPreview.handleSwitch(true);
                if (keyCode === KeyCode.UP) topPreview.handleOperation('zoomIn');
                if (keyCode === KeyCode.DOWN) topPreview.handleOperation('zoomOut');
                if (keyCode === KeyCode.SPACE) {
                    event.preventDefault();
                    topPreview.original = !topPreview.original;
                }
            },
            handleKeyup(event) {
                const topPreview = this.getTopPreview();
                if (!topPreview.modelValue) return;
                const { keyCode } = event;
                if (keyCode === KeyCode.ESC) {
                    topPreview.handleClose();
                }
            },
            handleWheel(event) {
                const topPreview = this.getTopPreview();
                if (!topPreview.modelValue) return;
                const { deltaY } = event;
                topPreview.handleOperation(deltaY < 0 ? 'zoomIn' : 'zoomOut');
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
            },
            getMaskIndex() {
                transferIncrease();
                return transferIndex;
            },
            addImagePreview() {
                const root = this.$root;
                if (!root.imagePreviewList) root.imagePreviewList = [];
                root.imagePreviewList.push({
                    id: this.id,
                    modal: this
                });
            },
            removeImagePreview() {
                const root = this.$root;
                if (!root.imagePreviewList) return;
                const index = root.imagePreviewList.findIndex(item => item.id === this.id);
                root.imagePreviewList.splice(index, 1);
            },
            getTopPreview() {
                const previews = this.$root.imagePreviewList.map(item => item.modal).filter(item => item.modelValue);

                const topPreview = previews.sort((a, b) => {
                    return a.$data.maskIndex < b.$data.maskIndex ? 1 : -1;
                })[0];

                return topPreview && topPreview.maskIndex === this.maskIndex ? topPreview : {};
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
            this.maskIndex = this.getMaskIndex();
            this.addImagePreview();
            on(document, 'keydown', this.handleKeydown);
            on(document, 'keyup', this.handleKeyup);
            on(document, 'wheel', this.handleWheel);
        },
        beforeUnmount() {
            this.removeImagePreview();
            off(document, 'keydown', this.handleKeydown);
            off(document, 'keyup', this.handleKeyup);
            off(document, 'wheel', this.handleWheel);
        }
    }
</script>
