<script>
    import { h, createApp, getCurrentInstance } from 'vue';
    import Icon from '../icon/icon';
    import Tooltip from '../tooltip/tooltip';
    import Copy from '../copy/';

    import baseProps from './props';

    export default {
        name: 'TypographyBase',
        mixins: [ baseProps ],
        emits: ['on-copy-success', 'on-copy-error'],
        // inheritAttrs: false,
        props: {
            component: {
                type: String,
                default: 'div'
            }
        },
        data () {
            return {
                currentContent: this.modelValue,
                copied: false,
                copyTimeout: null
            }
        },
        watch: {
            modelValue (val) {
                this.currentContent = val;
            }
        },
        computed: {
            classes () {
                return [
                    'ivu-typography',
                    {
                        [`ivu-typography-${this.type}`]: this.type,
                        [`ivu-typography-disabled`]: this.disabled
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
            handleClickLink (event) {
                if (!this.isHrefPattern && this.component !== 'a') return;
                const openInNewWindow = event.ctrlKey || event.metaKey;
                this.handleCheckClick(event, openInNewWindow);
            },
            handleCopy () {
                const container = document.createElement('div');
                document.body.appendChild(container);
                let Instance = null;
                let _instance = null;

                let content = '';
                if (this.copyText) content = this.copyText;
                else if (this.currentContent) content = this.currentContent;
                else if (this.$slots.default) {
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
                }

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
            }
        },
        render () {
            let contentNodes = [];

            const textNode = this.wrapperDecorations();
            contentNodes.push(textNode);

            if (this.copyable) {
                const copyDefaultIconNode = h(Icon, {
                    type: this.copied ? 'md-checkmark' : 'md-copy'
                });

                const copyIconNode = this.$slots.copyIcon ? this.$slots.copyIcon({ copied: this.copied }) : copyDefaultIconNode;

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

            return h(this.component, {
                class: this.classes,
                ...this.linkProps,
                onClick: this.handleClickLink
            }, contentNodes);
        }
    }
</script>
