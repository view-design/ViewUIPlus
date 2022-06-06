<script>
    import { h, createApp, getCurrentInstance, nextTick } from 'vue';
    import elementResizeDetectorMaker from 'element-resize-detector';
    import Icon from '../icon/icon';
    import Tooltip from '../tooltip/tooltip';
    import Copy from '../copy/';
    import Input from '../input/input';

    import baseProps from './props';
    import KeyCode from '../../utils/keyCode';

    export default {
        name: 'TypographyBase',
        mixins: [ baseProps ],
        emits: ['on-copy-success', 'on-copy-error', 'on-edit-start', 'on-edit-end', 'on-edit-change', 'on-edit-cancel'],
        // inheritAttrs: false,
        props: {
            component: {
                type: String,
                default: 'div'
            },
            level: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                currentContent: this.modelValue,
                copied: false,
                copyTimeout: null,
                editing: false,
                editContent: '',
                lastKeyCode: '',
                isEditESC: false,
                ellipsisText: '',
                ellipsisContent: '',
                isEllipsis: false,
                ellipsisExpanded: false,
                observer: null
            }
        },
        created () {
            this.editing = this.mergedEditConfig.editing || false;
            if (this.editing) this.editContent = this.currentContent ? this.currentContent : this.handleGetContent();
        },
        watch: {
            modelValue (val) {
                this.currentContent = val;
            },
            editing (val) {
                if (!val) {
                    nextTick(() => {
                        this.handleRemoveObserver();
                        this.handleCreateObserver();
                    });
                }
            },
            isEllipsis () {
                nextTick(() => {
                    this.handleRemoveObserver();
                    this.handleCreateObserver();
                });
            },
            ellipsis: {
                handler (val) {
                    if (val) {
                        nextTick(() => {
                            this.handleUpdateEllipsisStatus();
                            this.handleCreateObserver();
                        });
                    } else {
                        this.handleRemoveObserver();
                    }
                },
                immediate: true
            }
        },
        computed: {
            classes () {
                return [
                    'ivu-typography',
                    {
                        [`ivu-typography-${this.type}`]: this.type,
                        [`ivu-typography-disabled`]: this.disabled,
                        ['ivu-typography-ellipsis-line-clamp']: this.ellipsis && !this.ellipsisExpanded,
                        ['ivu-typography-ellipsis-single-line']: this.ellipsis && !this.ellipsisExpanded && this.mergedEllipsisConfig.rows === 1
                    }
                ]
            }
        },
        methods: {
            wrapperDecorations () {
                let content = this.currentContent ? this.currentContent : this.$slots.default ? this.$slots.default() : '';

                function wrap (needed, tag) {
                    if (!needed) return;

                    content = h(tag, content);
                }

                wrap(this.strong, 'strong');
                wrap(this.underline, 'u');
                wrap(this.delete, 'del');
                wrap(this.code, 'code');
                wrap(this.mark, 'mark');
                wrap(this.keyboard, 'kbd');
                wrap(this.italic, 'i');

                return content;
            },
            handleClickContent (event) {
                if (!this.isHrefPattern && this.component !== 'a') {
                    const triggerType = this.mergedEditConfig.triggerType;
                    if (this.editable && (triggerType === 'text' || triggerType === 'both')) this.handleEdit();
                } else {
                    const openInNewWindow = event.ctrlKey || event.metaKey;
                    this.handleCheckClick(event, openInNewWindow);
                }
            },
            handleGetContent () {
                const container = document.createElement('div');
                document.body.appendChild(container);

                let Instance = null;
                let _instance = null;
                let content = '';

                const textNode = this.wrapperDecorations();

                Instance = createApp({
                    render () {
                        return h('div', {
                            ref: 'text',
                            style: {
                                display: 'none'
                            }
                        }, textNode);
                    },
                    created () {
                        _instance = getCurrentInstance();
                    }
                });
                Instance.mount(container);
                content = _instance.refs.text.innerText;
                Instance.unmount();
                document.body.removeChild(container);
                return content;
            },
            handleCopy () {
                let content = '';
                if (this.copyText) content = this.copyText;
                else if (this.currentContent) content = this.currentContent;
                else if (this.$slots.default) content = this.handleGetContent();

                Copy({
                    text: this.copyText ? this.copyText : content,
                    showTip: this.mergedCopyConfig.showTip,
                    successTip: this.mergedCopyConfig.successTip,
                    errorTip: this.mergedCopyConfig.errorTip,
                    success: () => {
                        this.$emit('on-copy-success');
                        this.copied = true;
                        if (this.copyTimeout) clearTimeout(this.copyTimeout);
                        this.copyTimeout = setTimeout(() => {
                            this.copied = false;
                        }, 3000);
                    },
                    error: () => {
                        this.$emit('on-copy-error');
                    }
                });
            },
            handleEdit () {
                this.editContent = this.currentContent ? this.currentContent : this.handleGetContent();

                nextTick(() => {
                    this.editing = true;
                    this.$emit('on-edit-start');
                    nextTick(() => {
                        this.$refs.edit.focus({
                            cursor: 'end'
                        });
                    });
                });
            },
            handleEditBlur () {
                if (this.isEditESC) {
                    this.isEditESC = false;
                    return;
                }
                this.handleEditSave();
                this.$emit('on-edit-end', this.editContent);
            },
            handleEditChange (event) {
                const value = event.target.value;
                this.editContent = value;
                this.$emit('on-edit-change', value);
            },
            handleEditSave () {
                this.$emit('update:modelValue', this.editContent);
                this.editing = false;
            },
            handleEditKeydown (e) {
                const { keyCode } = e;

                if (keyCode === KeyCode.ENTER) e.preventDefault();

                this.lastKeyCode = keyCode;
            },
            handleEditKeyup (e) {
                const { keyCode, ctrlKey, altKey, metaKey, shiftKey } = e;

                if (this.lastKeyCode === keyCode && !ctrlKey && !altKey && !metaKey && !shiftKey) {
                    if (keyCode === KeyCode.ENTER) {
                        this.handleEditSave();
                        this.$emit('on-edit-end', this.editContent);
                    } else if (keyCode === KeyCode.ESC) {
                        this.isEditESC = true;
                        this.$emit('on-edit-cancel');
                        this.editing = false;
                    }
                }
            },
            handleUpdateEllipsisStatus () {
                if (this.ellipsis && !this.ellipsisExpanded) {
                    const $el = this.$refs.typography;
                    this.isEllipsis = $el.scrollHeight > $el.clientHeight;
                } else {
                    this.isEllipsis = false;
                }
            },
            handleCreateObserver () {
                if (this.ellipsis && !this.ellipsisExpanded) {
                    this.observer = elementResizeDetectorMaker();
                    this.observer.listenTo(this.$refs.typography, this.handleUpdateEllipsisStatus);
                }
            },
            handleRemoveObserver () {
                if (this.observer) {
                    this.observer.removeListener(this.$refs.typography, this.handleUpdateEllipsisStatus);
                    this.observer = null;
                }
            }
        },
        render () {
            let contentNodes = [];

            const textNode = this.wrapperDecorations();
            contentNodes.push(textNode);

            if (this.editable) {
                const triggerType = this.mergedEditConfig.triggerType;

                if (triggerType === 'icon' || triggerType === 'both') {
                    const editIconNode = this.$slots.editIcon ? this.$slots.editIcon() : h(Icon, { type: 'md-create'});

                    const editButtonNode = h('div', {
                        class: 'ivu-typography-edit',
                        onClick: this.handleEdit
                    }, editIconNode);

                    if (this.mergedEditConfig.tooltip) {
                        const editTooltipNode = h(Tooltip, {
                            content: this.mergedEditConfig.tooltip,
                            placement: 'top'
                        }, () => editButtonNode);
                        contentNodes.push(editTooltipNode);
                    } else {
                        contentNodes.push(editButtonNode);
                    }
                }
            }

            if (this.copyable) {
                const copyIconNode = this.$slots.copyIcon ? this.$slots.copyIcon({ copied: this.copied }) : h(Icon, { type: this.copied ? 'md-checkmark' : 'md-copy' });

                const copyButtonNode = h('div', {
                    class: [
                        'ivu-typography-copy',
                        {
                            'ivu-typography-copy-success': this.copied
                        }
                    ],
                    onClick: this.handleCopy
                }, copyIconNode);

                if (this.mergedCopyConfig.tooltips instanceof Array && this.mergedCopyConfig.tooltips.length === 2) {
                    const copyTooltipNode = h(Tooltip, {
                        content: this.copied ? this.mergedCopyConfig.tooltips[1] : this.mergedCopyConfig.tooltips[0],
                        placement: 'top'
                    }, () => copyButtonNode);
                    contentNodes.push(copyTooltipNode);
                } else {
                    contentNodes.push(copyButtonNode);
                }
            }

            if (this.editing) {
                const textareaNode = h(Input, {
                    ref: 'edit',
                    modelValue: this.editContent,
                    type: 'textarea',
                    autosize: this.mergedEditConfig.autosize,
                    maxlength: this.mergedEditConfig.maxlength,
                    'onOn-blur': this.handleEditBlur,
                    'onOn-keydown': this.handleEditKeydown,
                    'onOn-keyup': this.handleEditKeyup,
                    'onOn-change': this.handleEditChange,
                });

                const enterIconNode = this.$slots.enterIcon ? this.$slots.enterIcon() : h(Icon, { type: 'md-return-left' });

                const confirmNode = h('span', {
                    class: 'ivu-typography-edit-content-confirm'
                }, enterIconNode);

                return h('div', {
                    class: [
                        'ivu-typography',
                        'ivu-typography-edit-content',
                        {
                            [`ivu-typography-h${this.level}`]: this.level,
                            ['ivu-typography-div']: !this.level
                        }
                    ]
                }, [textareaNode, confirmNode]);
            } else {
                const style = {};

                if (this.ellipsis && !this.ellipsisExpanded) {
                    style['-webkit-line-clamp'] = this.mergedEllipsisConfig.rows;
                }

                let ellipsisExtraNode = null;
                // let ellipsisSuffixNode = '';
                // let ellipsisExpandNode = null;

                // todo
                // if (this.ellipsis && this.mergedEllipsisConfig.suffix) {
                //     ellipsisSuffixNode = h('span', {
                //         class: 'ivu-typography-ellipsis-suffix'
                //     }, this.mergedEllipsisConfig.suffix);
                // }

                // if (this.ellipsis && !this.ellipsisExpanded && this.isEllipsis && this.mergedEllipsisConfig.expandable) {
                //     ellipsisExpandNode = h('a', {
                //         class: ['ivu-typography', 'ivu-typography-ellipsis-expand']
                //     }, this.mergedEllipsisConfig.symbol);
                // }
                //
                // if (ellipsisExpandNode) {
                //     const moreNode = h('span', '...');
                //     ellipsisExtraNode = h('span', {
                //         class: 'ivu-typography-ellipsis-extra'
                //     }, [moreNode, ellipsisExpandNode]);
                // }

                const baseNode = h(this.component, {
                    ref: 'typography',
                    class: this.classes,
                    ...this.linkProps,
                    style,
                    onClick: this.handleClickContent
                }, [contentNodes, ellipsisExtraNode]);

                if (this.ellipsis && !this.ellipsisExpanded && this.isEllipsis && this.mergedEllipsisConfig.tooltip) {
                    return h(Tooltip, {
                        content: this.mergedEllipsisConfig.tooltip === true ? this.handleGetContent() : this.mergedEllipsisConfig.tooltip,
                        placement: this.placement,
                        transfer: this.transfer,
                        theme: this.theme,
                        maxWidth: this.maxWidth
                    }, () => baseNode);
                } else {
                    return baseNode;
                }
            }
        },
        beforeUnmount () {
            this.handleRemoveObserver();
        }
    }
</script>
