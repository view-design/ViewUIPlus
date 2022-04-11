<script>
    import { getStyle } from '../../utils/assist.js';

    const isSupportLineClamp = document.body.style.webkitLineClamp !== undefined;

    const TooltipOverlayStyle = { // eslint-disable-line
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
    };

    export const getStrFullLength = (str = '') =>
        str.split('').reduce((pre, cur) => {
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                return pre + 1;
            }
            return pre + 2;
        }, 0);

    export const cutStrByFullLength = (str = '', maxLength) => {
        let showLength = 0;
        return str.split('').reduce((pre, cur) => {
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                showLength += 1;
            } else {
                showLength += 2;
            }
            if (showLength <= maxLength) {
                return pre + cur;
            }
            return pre;
        }, '');
    };

    export default {
        name: 'Ellipsis',
        props: {
            // 是否显示 Tooltip
            tooltip: {
                type: Boolean,
                default: false
            },
            length: {
                type: Number
            },
            lines: {
                type: Number
            },
            fullWidthRecognition: {
                type: Boolean
            }
        },
        data () {
            return {
                text: '',
                targetCount: 0
            };
        },
        methods: {
            computeLine () {
                const { lines } = this;
                if (lines && !isSupportLineClamp) {
                    const text = this.$refs.text.innerText || this.$refs.text.textContent;
                    const lineHeight = parseInt(getStyle(this.$refs.text, 'lineHeight'), 10);
                    const targetHeight = lines * lineHeight;
                    this.content.style.height = `${targetHeight}px`;
                    const totalHeight = this.$refs.text.offsetHeight;
                    const shadowNode = this.shadow.firstChild;

                    if (totalHeight <= targetHeight) {
                        this.text = text;
                        this.targetCount = text.length;
                        return;
                    }

                    // bisection
                    const len = text.length;
                    const mid = Math.ceil(len / 2);

                    const count = this.bisection(targetHeight, mid, 0, len, text, shadowNode);

                    this.text = text;
                    this.targetCount = count;
                }
            },
            bisection () {

            },
            getTooltip (h, { title, children }) {
                if (this.tooltip) {
                    return h('Tooltip', [
                        children,
                        h('div', {
                            slot: 'content'
                        }, title)
                    ]);
                } else {
                    return children;
                }
            },
            // 渲染为普通文本
            EllipsisText (h, { text, length }) {
                if (typeof text !== 'string') {
                    throw new Error('[iView Pro Warn] Ellipsis children must be string.');
                }

                const textLength = this.fullWidthRecognition ? getStrFullLength(text) : text.length;

                if (textLength <= length || length < 0) {
                    return h('span', text);
                }

                const tail = '...';
                let displayText;
                if (length - tail.length <= 0) {
                    displayText = '';
                } else {
                    displayText = this.fullWidthRecognition ? cutStrByFullLength(text, length) : text.slice(0, length);
                }

                return this.getTooltip(h, {
                    title: text,
                    children: h('span', displayText + tail)
                });
            },
        },
        render (h) {
            const children = this.$slots.default;

            if (!this.lines && !this.length) {
                return h('span', children);
            }

            // length
            if (!this.lines) {
                return this.EllipsisText(h, {
                    text: children || '',
                    length: this.length
                });
            }
        }
    };
</script>
