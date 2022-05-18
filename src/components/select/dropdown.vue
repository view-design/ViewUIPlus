<template>
    <teleport to="body" :disabled="!transfer">
        <transition :name="transitionName">
            <div
                v-show="visible"
                class="ivu-select-dropdown"
                ref="drop"
                :class="mergedClass"
                :style="mergedStyle"
                v-bind="$attrs"
                @mouseenter="handleMouseenter"
                @mouseleave="handleMouseleave"
                @click.stop="handleClick"
            ><slot></slot></div>
        </transition>
    </teleport>
</template>
<script>
    import { nextTick } from 'vue';
    // import Vue from 'vue';
    // const isServer = Vue.prototype.$isServer;
    import { getStyle } from '../../utils/assist';
    // const Popper = isServer ? function() {} : require('popper.js/dist/umd/popper.js');  // eslint-disable-line
    import Popper from 'popper.js/dist/umd/popper.js';

    import { transferIndex, transferIncrease } from '../../utils/transfer-queue';

    export default {
        name: 'Drop',
        emits: ['mouseenter', 'mouseleave', 'click'],
        props: {
            placement: {
                type: String,
                default: 'bottom-start'
            },
            className: {
                type: String
            },
            transfer: {
                type: Boolean
            },
            // 4.6.0
            eventsEnabled: {
                type: Boolean,
                default: false
            },
            visible: {
                type: Boolean
            },
            classes: {
                type: Object,
                default: () => {}
            },
            styles: {
                type: Object,
                default: () => {}
            },
            transitionName: {
                type: String,
                default: 'transition-drop'
            },
            boundariesElement: {
                // type: [String, HTMLElement],
                default: 'window'
            }
        },
        data () {
            return {
                popper: null,
                width: '',
                popperStatus: false,
                tIndex: this.handleGetIndex()
            };
        },
        computed: {
            mergedStyle () {
                let style = {};
                if (this.width) style.minWidth = `${this.width}px`;

                if (this.transfer) style['z-index'] = 1060 + this.tIndex;

                return Object.assign({}, this.styles, style);
            },
            mergedClass () {
                return Object.assign({}, this.classes, {
                    [this.className]: this.className
                });
            }
        },
        methods: {
            update () {
                // if (isServer) return;
                nextTick(() => {
                    if (this.popper) {
                        this.popper.update();
                        this.popperStatus = true;
                    } else {
                        this.popper = new Popper(this.$parent.$refs.reference, this.$refs.drop, {
                            eventsEnabled: this.eventsEnabled,
                            placement: this.placement,
                            modifiers: {
                                computeStyle:{
                                    gpuAcceleration: false
                                },
                                preventOverflow :{
                                    boundariesElement: this.boundariesElement
                                }
                            },
                            onCreate:()=>{
                                this.resetTransformOrigin();
                                nextTick(this.popper.update());
                            },
                            onUpdate:()=>{
                                this.resetTransformOrigin();
                            }
                        });
                    }
                    // set a height for parent is Modal and Select's width is 100%
                    if (this.$parent.$options.name === 'iSelect') {
                        this.width = parseInt(getStyle(this.$parent.$el, 'width'));
                    }
                    this.tIndex = this.handleGetIndex();
                });
            },
            destroy () {
                if (this.popper) {
                    setTimeout(() => {
                        if (this.popper && !this.popperStatus) {
                            //fix:#910
                            this.popper.popper.style.display = 'none';
                            this.popper.destroy();
                            this.popper = null;
                        }
                        this.popperStatus = false;
                    }, 300);
                }
            },
            resetTransformOrigin() {
                // 不判断，Select 会报错，不知道为什么
                if (!this.popper) return;

                let x_placement = this.popper.popper.getAttribute('x-placement');
                let placementStart = x_placement.split('-')[0];
                let placementEnd = x_placement.split('-')[1];
                const leftOrRight = x_placement === 'left' || x_placement === 'right';
                if(!leftOrRight){
                    this.popper.popper.style.transformOrigin = placementStart==='bottom' || ( placementStart !== 'top' && placementEnd === 'start') ? 'center top' : 'center bottom';
                }
            },
            handleGetIndex () {
                transferIncrease();
                return transferIndex;
            },
            handleMouseenter (e) {
                this.$emit('mouseenter', e);
            },
            handleMouseleave (e) {
                this.$emit('mouseleave', e);
            },
            handleOnUpdatePopper () {
                this.update();
            },
            handleOnDestroyPopper () {
                this.destroy();
            },
            handleClick (event) {
                this.$emit('click', event)
            }
        },
        beforeUnmount () {
            if (this.popper) {
                this.popper.destroy();
                this.popper = null;
            }
        }
    };
</script>
