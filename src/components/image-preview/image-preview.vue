<template>
    <teleport to="body" :disabled="!transfer">
        <transition name="fade">
            <div
                :class="[prefixCls + '-wrapper']"
                @mouseover.stop.prevent
                v-if="modelValue">
                <div
                    :class="[prefixCls + '-mark']" v-if="previewList.length > 0"
                    @click.stop="handleClickMark"
                >
                    <img
                        v-for="(item, index) in previewList"
                        :key="index"
                        :src="item"
                        v-show="index === currentIndex"
                        :style="imageStyle(index)"
                        :class="[[prefixCls + '-image']]"
                        @click.stop
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
                <Icon :class="[prefixCls + '-arrow-left']" type="ios-arrow-back" @click.stop="handleSwitch(false)" />
                <Icon :class="[prefixCls + '-arrow-right']" type="ios-arrow-forward" @click.stop="handleSwitch(true)" />
                <Icon @click.stop="handleClose" :class="[prefixCls + '-arrow-close']" type="md-close" />
            </div>
        </transition>
    </teleport>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import { on, off } from '../../utils/dom';
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-image-preview';
    import Icon from '../icon';
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
        emits: ['update:modelValue', 'on-close'],
        data() {
            return {
                prefixCls,
                operations: [
                    {label: this.t('i.image.zoomIn'), icon: '', value: 'enlarge'},
                    {label: this.t('i.image.zoomOut'), icon: '', value: 'narrow'},
                    {label: this.t('i.image.rotateLeft'), icon: '', value: 'leftRotation'},
                    {label: this.t('i.image.rotateRight'), icon: '', value: 'rightRotation'}
                ],
                currentIndex: this.initialIndex,
                scale: 1,
                degree: 0
            }
        },
        computed: {
            imageStyle() {
                return (index) => {
                    return {
                        transform: `
                            scale(${index === this.currentIndex ? this.scale : 1})
                            rotate(${index === this.currentIndex ? this.degree : 0}deg)
                        `
                    };
                }
            }
        },
        methods: {
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
            handleWheel(event) {
                const { deltaY } = event;
                this.handleOperation(deltaY > 0 ? 'enlarge' : 'narrow');
            }
        },
        mounted() {
            on(document, 'keydown', this.handleKeydown);
            on(document, 'wheel', this.handleWheel);
        },
        beforeUnmount() {
            off(document, 'keydown', this.handleKeydown);
            off(document, 'wheel', this.handleWheel);
        }
    }
</script>
