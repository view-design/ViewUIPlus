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

    const prefixCls = 'ivu-image-preview';
    import Icon from '../icon';
    export default {
        name: 'ImagePreview',
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
                    {label: '放大', icon: '', value: 'enlarge'},
                    {label: '缩小', icon: '', value: 'narrow'},
                    {label: '左旋转', icon: '', value: 'leftRotation'},
                    {label: '右旋转', icon: '', value: 'rightRotation'}
                ],
                currentIndex: this.initialIndex,
                scale: 1,
                degree: 0,
            }
        },
        computed: {
            imageStyle() {
                return (index) => {
                    return {
                        transform: `
                            scale(${index === this.currentIndex ? this.scale : 1})
                            rotate(${index === this.currentIndex ? this.degree : 0}deg)
                        `,
                    };
                }
            },
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
                if (keyCode === 37) this.handleSwitch(false);
                if (keyCode === 39) this.handleSwitch(true);
                if (keyCode === 38) this.handleOperation('enlarge');
                if (keyCode === 40) this.handleOperation('narrow');
            }
        },
        mounted() {
            on(document, 'keydown', this.handleKeydown)
        },
        beforeUnmount() {
            off(document, 'keydown', this.handleKeydown)
        }
    }
</script>
