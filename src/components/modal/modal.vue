<template>
    <teleport to="body" :disabled="!transfer">
        <transition :name="transitionNames[1]">
            <div :class="maskClasses" :style="wrapStyles" v-show="visible" v-if="showMask" @click="handleMask"></div>
        </transition>
        <div :class="wrapClasses" :style="wrapStyles" @click="handleWrapClick">
            <transition :name="transitionNames[0]" @after-leave="animationFinish">
                <div v-bind="$attrs" :class="classes" :style="mainStyles" v-show="visible" @mousedown="handleMousedown">
                    <div :class="contentClasses" ref="content" :style="contentStyles" @click="handleClickModal">
                        <a :class="[prefixCls + '-close']" v-if="closable" @click="close">
                            <slot name="close">
                                <Icon type="ios-close"></Icon>
                            </slot>
                        </a>
                        <div :class="[prefixCls + '-header']"
                             @mousedown="handleMoveStart"
                             v-if="showHead"
                        ><slot name="header"><div :class="[prefixCls + '-header-inner']">{{ title }}</div></slot></div>
                        <div :class="[prefixCls + '-body']"><slot></slot></div>
                        <div :class="[prefixCls + '-footer']" v-if="!footerHide">
                            <slot name="footer">
                                <i-button type="text" @click="cancel">{{ localeCancelText }}</i-button>
                                <i-button type="primary" :loading="buttonLoading" @click="ok">{{ localeOkText }}</i-button>
                            </slot>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </teleport>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import Icon from '../icon';
    import iButton from '../button/button.vue';
    import Locale from '../../mixins/locale';
    import ScrollbarMixins from './mixins-scrollbar';

    import { on, off } from '../../utils/dom';
    import { deepCopy } from '../../utils/assist';
    import random from '../../utils/random_str';
    import { isClient } from '../../utils/index';

    import { transferIndex as modalIndex, transferIncrease as modalIncrease, lastVisibleIndex, lastVisibleIncrease } from '../../utils/transfer-queue';

    const prefixCls = 'ivu-modal';

    const dragData = {
        x: null,
        y: null,
        dragX: null,
        dragY: null,
        dragging: false,
        rect: null
    };

    export default {
        inheritAttrs: false,
        name: 'Modal',
        mixins: [ Locale, ScrollbarMixins ],
        components: { Icon, iButton },
        emits: ['on-cancel', 'on-ok', 'on-hidden', 'on-visible-change', 'update:modelValue'],
        provide () {
            return {
                ModalInstance: this
            }
        },
        props: {
            modelValue: {
                type: Boolean,
                default: false
            },
            closable: {
                type: Boolean,
                default: true
            },
            maskClosable: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.modal.maskClosable === '' ? true : global.$VIEWUI.modal.maskClosable;
                }
            },
            title: {
                type: String
            },
            width: {
                type: [Number, String],
                default: 520
            },
            okText: {
                type: String
            },
            cancelText: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            },
            styles: {
                type: Object,
                default () {
                    return {};
                }
            },
            className: {
                type: String
            },
            // for instance
            footerHide: {
                type: Boolean,
                default: false
            },
            scrollable: {
                type: Boolean,
                default: false
            },
            transitionNames: {
                type: Array,
                default () {
                    return ['ease', 'fade'];
                }
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? true : global.$VIEWUI.transfer;
                }
            },
            fullscreen: {
                type: Boolean,
                default: false
            },
            mask: {
                type: Boolean,
                default: true
            },
            draggable: {
                type: Boolean,
                default: false
            },
            // 4.6.0
            sticky: {
                type: Boolean,
                default: false
            },
            // 4.6.0
            stickyDistance: {
                type: Number,
                default: 10
            },
            // 4.6.0
            resetDragPosition: {
                type: Boolean,
                default: false
            },
            zIndex: {
                type: Number,
                default: 1000
            },
            beforeClose: Function,
            render: Function
        },
        data () {
            return {
                prefixCls: prefixCls,
                wrapShow: false,
                showHead: true,
                buttonLoading: false,
                visible: this.modelValue,
                dragData: deepCopy(dragData),
                modalIndex: this.handleGetModalIndex(),  // for Esc close the top modal
                isMouseTriggerIn: false, // #5800
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
                        [`${prefixCls}-no-mask`]: !this.showMask
                    }
                ];
            },
            wrapStyles () {
                return {
                    zIndex: this.modalIndex + this.zIndex
                };
            },
            maskClasses () {
                return `${prefixCls}-mask`;
            },
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-fullscreen`]: this.fullscreen,
                        [`${prefixCls}-fullscreen-no-header`]: this.fullscreen && !this.showHead,
                        [`${prefixCls}-fullscreen-no-footer`]: this.fullscreen && this.footerHide
                    }
                ];
            },
            contentClasses () {
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-content-no-mask`]: !this.showMask,
                        [`${prefixCls}-content-drag`]: this.draggable && !this.fullscreen,
                        [`${prefixCls}-content-dragging`]: this.draggable && this.dragData.dragging
                    }
                ];
            },
            mainStyles () {
                let style = {};

                const width = parseInt(this.width);
                const styleWidth = this.dragData.x !== null ? {
                    top: 0
                } : {
                    width: width <= 100 ? `${width}%` : `${width}px`
                };

                const customStyle = this.styles ? this.styles : {};

                Object.assign(style, styleWidth, customStyle);

                return style;
            },
            contentStyles () {
                let style = {};

                if (this.draggable && !this.fullscreen) {
                    const customTop = this.styles.top ? parseFloat(this.styles.top) : 0;
                    const customLeft = this.styles.left ? parseFloat(this.styles.left) : 0;
                    if (this.dragData.x !== null) style.left = `${this.dragData.x - customLeft}px`;
                    if (this.dragData.y !== null) style.top = `${this.dragData.y}px`;
                    if (this.dragData.y !== null) style.top = `${this.dragData.y - customTop}px`;

                    const width = parseInt(this.width);
                    const styleWidth = {
                        width: width <= 100 ? `${width}%` : `${width}px`
                    };

                    Object.assign(style, styleWidth);
                }

                return style;
            },
            localeOkText () {
                if (this.okText === undefined) {
                    return this.t('i.modal.okText');
                } else {
                    return this.okText;
                }
            },
            localeCancelText () {
                if (this.cancelText === undefined) {
                    return this.t('i.modal.cancelText');
                } else {
                    return this.cancelText;
                }
            },
            showMask () {
                return this.mask;
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
                this.$emit('on-cancel');
            },
            handleMask () {
                if (this.maskClosable && this.showMask) {
                    this.close();
                }
            },
            handleWrapClick (event) {
                if (this.isMouseTriggerIn) {
                    this.isMouseTriggerIn = false;
                    return;
                }
                // use indexOf,do not use === ,because ivu-modal-wrap can have other custom className
                const className = event.target.getAttribute('class');
                if (className && className.indexOf(`${prefixCls}-wrap`) > -1) this.handleMask();
            },
            handleMousedown () {
                this.isMouseTriggerIn = true;
            },
            cancel () {
                this.close();
            },
            ok () {
                if (this.loading) {
                    this.buttonLoading = true;
                } else {
                    this.visible = false;
                    this.$emit('update:modelValue', false);
                }
                this.$emit('on-ok');
            },
            EscClose (e) {
                if (this.visible && this.closable) {
                    if (e.keyCode === 27) {
                        const $Modals = this.$root.modalList.map(item => item.modal).filter(item => item.$data.visible && item.$props.closable);

                        const $TopModal = $Modals.sort((a, b) => {
                            return a.$data.modalIndex < b.$data.modalIndex ? 1 : -1;
                        })[0];

                        setTimeout(() => {
                            $TopModal.close();
                        }, 0);
                    }
                }
            },
            animationFinish() {
                this.$emit('on-hidden');
            },
            handleMoveStart (event) {
                if (!this.draggable || this.fullscreen) return false;

                const $content = this.$refs.content;
                const rect = $content.getBoundingClientRect();

                this.dragData.rect = rect;
                this.dragData.x = rect.x || rect.left;
                this.dragData.y = rect.y || rect.top;

                const distance = {
                    x: event.clientX,
                    y: event.clientY
                };

                this.dragData.dragX = distance.x;
                this.dragData.dragY = distance.y;

                this.dragData.dragging = true;

                on(window, 'mousemove', this.handleMoveMove);
                on(window, 'mouseup', this.handleMoveEnd);
            },
            handleMoveMove (event) {
                if (!this.dragData.dragging || this.fullscreen) return false;

                const distance = {
                    x: event.clientX,
                    y: event.clientY
                };

                const diff_distance = {
                    x: distance.x - this.dragData.dragX,
                    y: distance.y - this.dragData.dragY
                };

                if (isClient && this.sticky) {
                    const clientWidth = document.documentElement.clientWidth;
                    const clientHeight = document.documentElement.clientHeight;

                    if ((this.dragData.x + diff_distance.x <= this.stickyDistance) && diff_distance.x < 0) {
                        this.dragData.x = 0;
                    } else if ((this.dragData.x + this.dragData.rect.width - clientWidth > -this.stickyDistance) && diff_distance.x > 0) {
                        this.dragData.x = clientWidth - this.dragData.rect.width;
                    } else {
                        this.dragData.x += diff_distance.x;
                    }

                    if ((this.dragData.y + diff_distance.y <= this.stickyDistance) && diff_distance.y < 0) {
                        this.dragData.y = 0;
                    } else if ((this.dragData.y + this.dragData.rect.height - clientHeight > -this.stickyDistance) && diff_distance.y > 0) {
                        this.dragData.y = clientHeight - this.dragData.rect.height;
                    } else {
                        this.dragData.y += diff_distance.y;
                    }
                } else {
                    this.dragData.x += diff_distance.x;
                    this.dragData.y += diff_distance.y;
                }

                this.dragData.dragX = distance.x;
                this.dragData.dragY = distance.y;
            },
            handleMoveEnd () {
                this.dragData.dragging = false;
                off(window, 'mousemove', this.handleMoveMove);
                off(window, 'mouseup', this.handleMoveEnd);
            },
            handleGetModalIndex () {
                modalIncrease();
                return modalIndex;
            },
            handleClickModal () {
                if (this.draggable) {
                    if (lastVisibleIndex !== this.lastVisibleIndex){
                        this.lastVisibleIndex = lastVisibleIndex;
                        return;
                    }
                    this.modalIndex = this.handleGetModalIndex();
                }
            },
            addModal () {
                const root = this.$root;
                if (!root.modalList) root.modalList = [];
                root.modalList.push({
                    id: this.id,
                    modal: this
                });
            },
            removeModal () {
                const root = this.$root;
                if (!root.modalList) return;
                const index = root.modalList.findIndex(item => item.id === this.id);
                root.modalList.splice(index, 1);
            }
        },
        watch: {
            modelValue (val) {
                this.visible = val;
            },
            visible (val) {
                if (val === false) {
                    this.buttonLoading = false;
                    this.timer = setTimeout(() => {
                        this.wrapShow = false;
                        this.removeScrollEffect();
                    }, 300);
                } else {
                    if (this.lastVisible !== val) {
                        this.modalIndex = this.handleGetModalIndex();
                        lastVisibleIncrease();
                    }

                    if (this.timer) clearTimeout(this.timer);
                    this.wrapShow = true;
                    if (!this.scrollable) {
                        this.addScrollEffect();
                    }
                }

                this.tableList.forEach(item => {
                    item.table.handleOnVisibleChange(val);
                });
                this.sliderList.forEach(item => {
                    item.slider.handleOnVisibleChange(val);
                });

                this.$emit('on-visible-change', val);
                this.lastVisible = val;
                this.lastVisibleIndex = lastVisibleIndex;
                if (val && this.resetDragPosition) {
                    this.dragData = deepCopy(dragData);
                }
            },
            loading (val) {
                if (!val) {
                    this.buttonLoading = false;
                }
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

            // add instance to root for esc close
            this.addModal();

            // ESC close
            isClient && document.addEventListener('keydown', this.EscClose);
        },
        beforeUnmount () {
            this.removeModal();
            isClient && document.removeEventListener('keydown', this.EscClose);
            this.removeScrollEffect();
        }
    };
</script>
