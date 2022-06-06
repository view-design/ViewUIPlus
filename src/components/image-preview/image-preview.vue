<template>
    <teleport to="body" :disabled="!transfer">
        <transition name="fade">
            <div
                :class="[prefixCls + '-wrapper']"
                v-if="modelValue">
                <div
                    :class="[prefixCls + '-mark']"
                    v-if="previewList.length > 0"
                    @click.stop="handleClickMark"
                >
                    <img
                        v-for="(item, index) in previewList"
                        :key="index"
                        :src="item"
                        v-show="index === currentIndex"
                        :style="imageStyle(index)"
                        :class="[prefixCls + '-image']"
                        @click.stop
                        @mousedown.stop.prevent="handleMousedown"
                    />
                </div>
                <ul :class="[prefixCls + '-operations']">
                    <li
                        :class="[prefixCls + '-operations-item']"
                        v-for="item in operations"
                        :key="item.value"
                        @click.stop="handleOperation(item.value)"
                    >
                        {{item.label}}
                    </li>
                </ul>
                <Icon :class="[prefixCls + '-arrow-left', { [prefixCls + '-arrow-disabled']: hasLeftSwitchEnd }]" type="ios-arrow-back" @click.stop="handleSwitch(false)" />
                <Icon :class="[prefixCls + '-arrow-right', { [prefixCls + '-arrow-disabled']: hasRightSwitchEnd }]" type="ios-arrow-forward" @click.stop="handleSwitch(true)" />
                <Icon @click.stop="handleClose" :class="[prefixCls + '-arrow-close']" type="md-close" />
            </div>
        </transition>
    </teleport>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import { on, off } from '../../utils/dom';
    import throttle from 'lodash.throttle';
    import Locale from '../../mixins/locale';
    import Icon from '../icon';

    const prefixCls = 'ivu-image-preview';

    export default {
        name: 'ImagePreview',
        mixins: [ Locale ],
        components: { Icon },
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
                operations: [
                    {label: this.t('i.image.zoomIn'), icon: '', value: 'enlarge'},
                    {label: this.t('i.image.zoomOut'), icon: '', value: 'narrow'},
                    {label: this.t('i.image.rotateLeft'), icon: '', value: 'leftRotation'},
                    {label: this.t('i.image.rotateRight'), icon: '', value: 'rightRotation'}
                ],
                currentIndex: 0,
                scale: 1,
                degree: 0,
                translate: { x: 0, y: 0 },
                startX: 0,
                startY: 0,
                moving: false
            }
        },
        computed: {
            hasRightSwitchEnd() {
                const { currentIndex, infinite, previewList} = this;
                const len = previewList.length;
                return infinite ? false : currentIndex >= len - 1;
            },
            hasLeftSwitchEnd() {
                const { currentIndex, infinite} = this;
                return infinite ? false : currentIndex === 0;
            }
        },
        methods: {
            imageStyle(index) {
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
                const styleObj = {
                    transform: `
                            scale(${index === this.currentIndex ? this.scale : 1})
                            rotate(${index === this.currentIndex ? this.degree : 0}deg)
                            translate(
                                ${index === this.currentIndex ? translateX : 0}px,
                                ${index === this.currentIndex ? translateY : 0}px
                            )
                        `
                };
                if (!this.moving) styleObj.transition = 'transform .3s ease';
                return styleObj;
            },
            handleClose() {
                this.$emit('update:modelValue', false);
                this.$emit('on-close')
            },
            handleClickMark() {
                if (!this.maskClosable) return;
                this.handleClose();
            },
            resetStyle() {
                this.scale = 1;
                this.degree = 0;
                this.translate.x = 0;
                this.translate.y = 0;
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
                this.$emit('on-switch', {currentIndex: this.currentIndex})
            },
            handleOperation(val) {
                if (val === 'enlarge' && this.scale < 6) this.scale += 0.25;
                if (val === 'narrow' && this.scale > 0.25) this.scale -= 0.25;
                if (val === 'leftRotation') this.degree -= 90;
                if (val === 'rightRotation') this.degree += 90;
            },
            handleKeydown(event) {
                const { keyCode } = event;
                // left
                if (keyCode === 37) this.handleSwitch(false);
                // right
                if (keyCode === 39) this.handleSwitch(true);
                // up
                if (keyCode === 38) this.handleOperation('enlarge');
                // down
                if (keyCode === 40) this.handleOperation('narrow');
            },
            handleKeyup(event) {
                const { keyCode } = event;
                // esc
                if (keyCode === 27) this.handleClose();
            },
            handleWheel(event) {
                const { deltaY } = event;
                this.handleOperation(deltaY < 0 ? 'enlarge' : 'narrow');
            },
            handleMousedown(event) {
                this.moving = true;
                const { pageX, pageY } = event;
                this.startX = pageX;
                this.startY = pageY;
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
                this.moving = false;
                off(document, 'mousemove', this.handleMousemove);
                off(document, 'mouseup', this.handleMouseup);
            }
        },
        watch: {
            modelValue(val) {
                if (val) {
                    if (this.currentIndex !== this.initialIndex) {
                        this.currentIndex = this.initialIndex;
                    }
                    this.resetStyle();
                }
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
