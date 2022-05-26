import { createApp, h, getCurrentInstance } from 'vue';
import Modal from './modal.vue';
import Button from '../button/button.vue';
import Locale from '../../mixins/locale';
import { isClient } from '../../utils/index';

const prefixCls = 'ivu-modal-confirm';

Modal.newInstance = properties => {
    if (!isClient) return;
    const _props = properties || {};

    const container = document.createElement('div');
    document.body.appendChild(container);

    let _instance = null;

    const Instance = createApp({
        mixins: [ Locale ],
        data () {
            return Object.assign({}, _props, {
                visible: false,
                width: 416,
                title: '',
                body: '',
                iconType: '',
                iconName: '',
                okText: undefined,
                cancelText: undefined,
                showCancel: false,
                loading: false,
                buttonLoading: false,
                scrollable: false,
                closable: false,
                closing: false // 关闭有动画，期间使用此属性避免重复点击
            });
        },
        render () {
            let footerVNodes = [];
            if (this.showCancel) {
                footerVNodes.push(h(Button, {
                    type: 'text',
                    onClick: this.cancel
                }, () => this.localeCancelText));
            }
            footerVNodes.push(h(Button, {
                type: 'primary',
                loading: this.buttonLoading,
                onClick: this.ok
            }, () => this.localeOkText));

            // render content
            let body_render;
            if (this.render) {
                body_render = h('div', {
                    class: `${prefixCls}-body ${prefixCls}-body-render`
                }, [this.render(h)]);
            } else {
                body_render = h('div', {
                    class: `${prefixCls}-body`
                }, [
                    h('div', {
                        innerHTML: this.body
                    })
                ]);
            }

            // when render with no title, hide head
            let head_render;
            if (this.title) {
                head_render = h('div', {
                    class: `${prefixCls}-head`
                }, [
                    h('div', {
                        class: this.iconTypeCls
                    }, [
                        h('i', {
                            class: this.iconNameCls
                        })
                    ]),
                    h('div', {
                        class: `${prefixCls}-head-title`,
                        innerHTML: this.title
                    })
                ]);
            }

            return h(Modal, Object.assign({}, _props, {
                width: this.width,
                scrollable: this.scrollable,
                closable: this.closable,
                ref: 'modal'
            }, {
                modelValue: this.visible,
                'onUpdate:modelValue': (status) => this.visible = status,
                'onOn-cancel': this.cancel
            }),
                () => h('div', {
                    class: prefixCls
                }, [
                    head_render,
                    body_render,
                    h('div', {
                        class: `${prefixCls}-footer`
                    }, footerVNodes)
                ])
            );
        },
        computed: {
            iconTypeCls () {
                return [
                    `${prefixCls}-head-icon`,
                    `${prefixCls}-head-icon-${this.iconType}`
                ];
            },
            iconNameCls () {
                return [
                    'ivu-icon',
                    `ivu-icon-${this.iconName}`
                ];
            },
            localeOkText () {
                if (this.okText) {
                    return this.okText;
                } else {
                    return this.t('i.modal.okText');
                }
            },
            localeCancelText () {
                if (this.cancelText) {
                    return this.cancelText;
                } else {
                    return this.t('i.modal.cancelText');
                }
            }
        },
        methods: {
            cancel () {
                if (this.closing) return;
                this.$refs.modal.visible = false;
                this.buttonLoading = false;
                this.onCancel();
                this.remove();
            },
            ok () {
                if (this.closing) return;
                if (this.loading) {
                    this.buttonLoading = true;
                } else {
                    this.$refs.modal.visible = false;
                    this.remove();
                }
                this.onOk();
            },
            remove () {
                this.closing = true;
                setTimeout(() => {
                    this.closing = false;
                    this.destroy();
                }, 300);
            },
            destroy () {
                Instance.unmount();
                document.body.removeChild(container);
                this.onRemove();
            },
            onOk () {},
            onCancel () {},
            onRemove () {}
        },
        created () {
            _instance = getCurrentInstance();
        }
    });

    Instance.mount(container);
    const modal = _instance.refs.modal;

    return {
        show (props) {
            modal.$parent.showCancel = props.showCancel;
            modal.$parent.iconType = props.icon;

            switch (props.icon) {
                case 'info':
                    modal.$parent.iconName = 'ios-information-circle';
                    break;
                case 'success':
                    modal.$parent.iconName = 'ios-checkmark-circle';
                    break;
                case 'warning':
                    modal.$parent.iconName = 'ios-alert';
                    break;
                case 'error':
                    modal.$parent.iconName = 'ios-close-circle';
                    break;
                case 'confirm':
                    modal.$parent.iconName = 'ios-help-circle';
                    break;
            }

            if ('width' in props) {
                modal.$parent.width = props.width;
            }

            if ('closable' in props) {
                modal.$parent.closable = props.closable;
            }

            if ('title' in props) {
                modal.$parent.title = props.title;
            }

            if ('content' in props) {
                modal.$parent.body = props.content;
            }

            if ('okText' in props) {
                modal.$parent.okText = props.okText;
            }

            if ('cancelText' in props) {
                modal.$parent.cancelText = props.cancelText;
            }

            if ('onCancel' in props) {
                modal.$parent.onCancel = props.onCancel;
            }

            if ('onOk' in props) {
                modal.$parent.onOk = props.onOk;
            }

            // async for ok
            if ('loading' in props) {
                modal.$parent.loading = props.loading;
            }

            if ('scrollable' in props) {
                modal.$parent.scrollable = props.scrollable;
            }

            // notice when component destroy
            modal.$parent.onRemove = props.onRemove;

            modal.visible = true;
        },
        remove () {
            modal.visible = false;
            modal.$parent.buttonLoading = false;
            modal.$parent.remove();
        },
        component: modal
    };
};

export default Modal;
