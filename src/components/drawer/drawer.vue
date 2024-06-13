<template>
    <teleport to="body" :disabled="!transfer">
        <div ref="drawer">
            <transition name="fade">
                <div :class="maskClasses" :style="maskStyle" v-show="visible" v-if="mask" @click="handleMask"></div>
            </transition>
            <div :class="wrapClasses" :style="wrapStyles" @click="handleWrapClick">
                <transition :name="transitionName">
                    <div :class="classes" :style="mainStyles" v-show="visible">
                        <div :class="contentClasses" ref="content">
                            <a class="ivu-drawer-close" v-if="closable" @click="close">
                                <slot name="close">
                                    <Icon type="ios-close"></Icon>
                                </slot>
                            </a>
                            <div :class="[prefixCls + '-header']" v-if="showHead"><slot name="header"><div :class="[prefixCls + '-header-inner']">{{ title }}</div></slot></div>
                            <div :class="[prefixCls + '-body']" :style="styles"><slot></slot></div>
                        </div>
                        <div class="ivu-drawer-drag" :class="'ivu-drawer-drag-' + placement" v-if="draggable && (placement === 'left' || placement === 'right')" @mousedown="handleTriggerMousedown">
                            <slot name="trigger">
                                <div class="ivu-drawer-drag-move-trigger">
                                    <div class="ivu-drawer-drag-move-trigger-point">
                                        <i></i><i></i><i></i><i></i><i></i>
                                    </div>
                                </div>
                            </slot>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </teleport>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';
    import ScrollbarMixins from '../modal/mixins-scrollbar';

    import { on, off } from '../../utils/dom';
    import random from '../../utils/random_str';
    import { isClient } from '../../utils/index';

    const prefixCls = 'ivu-drawer';

    export default {
        name: 'Drawer',
        mixins: [ ScrollbarMixins ],
        components: { Icon },
        emits: ['on-close', 'on-resize-width', 'on-visible-change', 'update:modelValue', 'on-drag'],
        provide () {
            return {
                DrawerInstance: this
            }
        },
        props: {
            modelValue: {
                type: Boolean,
                default: false
            },
            title: {
                type: String
            },
            width: {
                type: [Number, String],
                default: 256
            },
            // 4.6.0
            height: {
                type: [Number, String],
                default: 256
            },
            closable: {
                type: Boolean,
                default: true
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            mask: {
                type: Boolean,
                default: true
            },
            maskStyle: {
                type: Object
            },
            styles: {
                type: Object
            },
            scrollable: {
                type: Boolean,
                default: false
            },
            // 4.6.0 add top, bottom
            placement: {
                validator (value) {
                    return oneOf(value, ['left', 'right', 'top', 'bottom']);
                },
                default: 'right'
            },
            zIndex: {
                type: Number,
                default: 1000
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? true : global.$VIEWUI.transfer;
                }
            },
            className: {
                type: String
            },
            inner: {
                type: Boolean,
                default: false
            },
            // Whether drag and drop is allowed to adjust width
            draggable: {
                type: Boolean,
                default: false
            },
            beforeClose: Function,
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: this.modelValue,
                wrapShow: false,
                showHead: true,
                canMove: false,
                dragWidth: this.width,
                dragHeight: this.height,
                wrapperWidth: this.width,
                wrapperHeight: this.height,
                wrapperLeft: 0,
                minWidth: 256,
                minHeight: 256,
                id: random(6),
                tableList: [],
                sliderList: []
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrap`,
                    {
                        [`${prefixCls}-hidden`]: !this.wrapShow,
                        [`${this.className}`]: !!this.className,
                        [`${prefixCls}-no-mask`]: !this.mask,
                        [`${prefixCls}-wrap-inner`]: this.inner,
                        [`${prefixCls}-wrap-dragging`]: this.canMove
                    }
                ];
            },
            wrapStyles () {
                return {
                    zIndex: this.zIndex
                }
            },
            mainStyles () {
                let style = {};

                if (this.placement === 'left' || this.placement === 'right') {
                    const width = parseInt(this.dragWidth);

                    const styleWidth = {
                        width: width <= 100 ? `${width}%` : `${width}px`
                    };

                    Object.assign(style, styleWidth);
                } else {
                    const height = parseInt(this.dragHeight);

                    const styleHeight = {
                        height: height <= 100 ? `${height}%` : `${height}px`
                    };

                    Object.assign(style, styleHeight);
                }

                return style;
            },
            contentClasses () {
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-content-no-mask`]: !this.mask
                    }
                ];
            },
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.placement}`,
                    {
                        [`${prefixCls}-no-header`]: !this.showHead,
                        [`${prefixCls}-inner`]: this.inner
                    }
                ];
            },
            maskClasses () {
                return [
                    `${prefixCls}-mask`,
                    {
                        [`${prefixCls}-mask-inner`]: this.inner
                    }
                ];
            },
            transitionName () {
                if (this.placement === 'left' || this.placement === 'right') return `move-${this.placement}`;
                else if (this.placement === 'top') return 'move-up';
                else return 'move-down';
            }
        },
        methods: {
            close () {
                if (!this.beforeClose) {
                    return this.handleClose();
                }

                const before = this.beforeClose();

                if (before && before.then) {
                    before.then(() => {
                        this.handleClose();
                    });
                } else {
                    this.handleClose();
                }
            },
            handleClose () {
                this.visible = false;
                this.$emit('update:modelValue', false);
                this.$emit('on-close');
            },
            handleMask () {
                if (this.maskClosable && this.mask) {
                    this.close();
                }
            },
            handleWrapClick (event) {
                // use indexOf,do not use === ,because ivu-modal-wrap can have other custom className
                const className = event.target.getAttribute('class');
                if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.handleMask();
            },
            handleMousemove (event) {
                if (!this.canMove || !this.draggable) return;
                // 更新容器宽度和距离左侧页面距离，如果是window则距左侧距离为0
                this.handleSetWrapperWidth();
                const left = event.pageX - this.wrapperLeft;
                // 如果抽屉方向为右边，宽度计算需用容器宽度减去left
                let width = this.placement === 'right' ? this.wrapperWidth - left : left;
                // 限定最小宽度
                width = Math.max(width, parseFloat(this.minWidth));
                event.atMin = width === parseFloat(this.minWidth);
                // 如果当前width不大于100，视为百分比
                if (width <= 100) width = (width / this.wrapperWidth) * 100;
                this.dragWidth = width;
                this.$emit('on-resize-width', parseInt(this.dragWidth));
                this.$emit('on-drag', 'dragging', parseInt(this.dragWidth));
            },
            handleSetWrapperWidth () {
                const {
                    width,
                    left
                } = this.$refs.drawer.getBoundingClientRect();
                this.wrapperWidth = width;
                this.wrapperLeft = left;
            },
            handleMouseup () {
                if (!this.draggable) return;
                this.canMove = false;
                this.$emit('on-drag', 'end');
            },
            handleTriggerMousedown () {
                this.canMove = true;
                // 防止鼠标选中抽屉中文字，造成拖动trigger触发浏览器原生拖动行为
                window.getSelection().removeAllRanges();
                this.$emit('on-drag', 'start');
            },
            addDrawer () {
                const root = this.$root;
                if (!root.drawerList) root.drawerList = [];
                root.drawerList.push({
                    id: this.id,
                    drawer: this
                });
            },
            removeDrawer () {
                const root = this.$root;
                if (!root.drawerList) return;
                const index = root.drawerList.findIndex(item => item.id === this.id);
                root.drawerList.splice(index, 1);
            }
        },
        mounted () {
            if (this.visible) {
                this.wrapShow = true;
            }

            let showHead = true;

            if (this.$slots.header === undefined && !this.title) {
                showHead = false;
            }

            this.showHead = showHead;

            this.addDrawer();

            on(document, 'mousemove', this.handleMousemove);
            on(document, 'mouseup', this.handleMouseup);
            this.handleSetWrapperWidth();
        },
        beforeUnmount () {
            this.removeDrawer();
            off(document, 'mousemove', this.handleMousemove);
            off(document, 'mouseup', this.handleMouseup);
            this.removeScrollEffect();
        },
        watch: {
            modelValue (val) {
                this.visible = val;
            },
            visible (val) {
                if (val === false) {
                    this.timer = setTimeout(() => {
                        this.wrapShow = false;
                        // #4831 Check if there are any drawers left at the parent level
                        const drawers = this.$root.drawerList.map(item => item.drawer);
                        const otherDrawers = drawers.filter(item => item.id !== this.id);

                        const isScrollDrawer = otherDrawers.some(item => item.visible && !item.scrollable);

                        if (!isScrollDrawer) {
                            this.removeScrollEffect();
                        }
                    }, 300);
                } else {
                    if (this.timer) clearTimeout(this.timer);
                    this.wrapShow = true;
                    if (!this.scrollable) {
                        this.addScrollEffect();
                    }
                }

                // #2852
                this.tableList.forEach(item => {
                    item.table.handleOnVisibleChange(val);
                });
                this.sliderList.forEach(item => {
                    item.slider.handleOnVisibleChange(val);
                });

                this.$emit('on-visible-change', val);
            },
            scrollable (val) {
                if (!val) {
                    this.addScrollEffect();
                } else {
                    this.removeScrollEffect();
                }
            },
            title (val) {
                if (this.$slots.header === undefined) {
                    this.showHead = !!val;
                }
            },
            width (val) {
                this.dragWidth = val;
            },
            height (val) {
                this.dragHeight = val;
            }
        }
    };
</script>
