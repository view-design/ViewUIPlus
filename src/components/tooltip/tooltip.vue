<template>
    <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
        <div :class="[prefixCls + '-rel']" ref="reference">
            <slot></slot>
        </div>
        <teleport to="body" :disabled="!transfer">
            <transition name="fade">
                <div
                    ref="popper"
                    v-show="!disabled && (visible || always)"
                    :class="dropdownCls"
                    :style="dropStyles"
                    @mouseenter="handleShowPopper"
                    @mouseleave="handleClosePopper"
                >
                    <div :class="[prefixCls + '-content']">
                        <div :class="[prefixCls + '-arrow']"></div>
                        <div :class="innerClasses" :style="innerStyles"><slot name="content">{{ content }}</slot></div>
                    </div>
                </div>
            </transition>
        </teleport>
    </div>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import Popper from '../base/popper';
    import { oneOf } from '../../utils/assist';
    import { transferIndex, transferIncrease } from '../../utils/transfer-queue';

    const prefixCls = 'ivu-tooltip';

    export default {
        name: 'Tooltip',
        mixins: [ Popper ],
        props: {
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            content: {
                type: [String, Number],
                default: ''
            },
            delay: {
                type: Number,
                default: 100
            },
            disabled: {
                type: Boolean,
                default: false
            },
            controlled: {    // under this prop,Tooltip will not close when mouseleave
                type: Boolean,
                default: false
            },
            always: {
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
            theme: {
                validator (value) {
                    return oneOf(value, ['dark', 'light']);
                },
                default: 'dark'
            },
            maxWidth: {
                type: [String, Number]
            },
            transferClassName: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                tIndex: this.handleGetIndex()
            };
        },
        computed: {
            innerStyles () {
                const styles = {};
                if (this.maxWidth) styles['max-width'] = `${this.maxWidth}px`;
                return styles;
            },
            innerClasses () {
                return [
                    `${prefixCls}-inner`,
                    {
                        [`${prefixCls}-inner-with-width`]: !!this.maxWidth
                    }
                ];
            },
            dropStyles () {
                let styles = {};
                if (this.transfer) styles['z-index'] = 1060 + this.tIndex;

                return styles;
            },
            dropdownCls () {
                return [
                    `${prefixCls}-popper`,
                    `${prefixCls}-${this.theme}`,
                    {
                        [prefixCls + '-transfer']: this.transfer,
                        [this.transferClassName]: this.transferClassName
                    }
                ];
            }
        },
        watch: {
            content () {
                this.updatePopper();
            }
        },
        methods: {
            handleShowPopper() {
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, this.delay);
                this.tIndex = this.handleGetIndex();
            },
            handleClosePopper() {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    if (!this.controlled) {
                        this.timeout = setTimeout(() => {
                            this.visible = false;
                        }, 100);
                    }
                }
            },
            handleGetIndex () {
                transferIncrease();
                return transferIndex;
            },
        },
        mounted () {
            if (this.always) {
                this.updatePopper();
            }
        }
    };
</script>
