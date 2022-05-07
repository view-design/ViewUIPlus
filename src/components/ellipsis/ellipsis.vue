<template>
    <div class="ivu-ellipsis">
        <slot name="prefix" class="ivu-ellipsis-prefix"></slot>
        <template v-if="computedReady">
            <Tooltip v-if="tooltip" :content="text" :theme="theme" :max-width="maxWidth" :placement="placement" :transfer="transfer">
                <span class="ivu-ellipsis-text" ref="text">{{text}}</span>
                <span class="ivu-ellipsis-more" ref="more" v-show="oversize"><slot name="more">...</slot></span>
                <slot name="suffix" class="ivu-ellipsis-suffix"></slot>
            </Tooltip>
            <template v-else>
                <span class="ivu-ellipsis-text" ref="text">{{text}}</span>
                <span class="ivu-ellipsis-more" ref="more" v-show="oversize"><slot name="more">...</slot></span>
                <slot name="suffix" class="ivu-ellipsis-suffix"></slot>
            </template>
        </template>
        <div class="ivu-ellipsis-hidden" v-else>
            <span class="ivu-ellipsis-text" ref="text">{{text}}</span>
            <span class="ivu-ellipsis-more" ref="more" v-show="oversize"><slot name="more">...</slot></span>
            <slot name="suffix" class="ivu-ellipsis-suffix"></slot>
        </div>
    </div>
</template>
<script>
    import { nextTick, getCurrentInstance } from 'vue';
    import Tooltip from '../tooltip/tooltip.vue';

    import { oneOf, getStyle } from '../../utils/assist';

    const getStrFullLength = (str = '') =>
        str.split('').reduce((pre, cur) => {
            const charCode = cur.charCodeAt(0);
            if (charCode >= 0 && charCode <= 128) {
                return pre + 1;
            }
            return pre + 2;
        }, 0);

    const cutStrByFullLength = (str = '', maxLength) => {
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
        components: { Tooltip },
        emits: ['on-show', 'on-hide'],
        props: {
            text: {
                type: String
            },
            // 限制高度
            height: {
                type: Number
            },
            // 限制行数，将换算为 height。如果设置了 height，则直接使用 height 计算
            lines: {
                type: Number
            },
            // 按照指定长度截取
            length: {
                type: Number
            },
            // 是否将全角字符的长度视为2来计算字符串长度，适用于 length
            fullWidthRecognition: {
                type: Boolean,
                default: false
            },
            // todo 是否自动根据外层宽度动态改变
            autoResize: {
                type: Boolean,
                default: false
            },
            // 是否禁用
            disabled: {
                type: Boolean,
                default: false
            },
            // 是否开启 tooltip
            tooltip: {
                type: Boolean,
                default: false
            },
            // 以下是 tooltip 部分选项
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
                type: [String, Number],
                default: 250
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
        },
        data() {
            return {
                oversize: false,
                computedReady: false,  // 先隐形计算，计算好后，再根据配置显示
                computedText: '',  // 计算后的 text 内容
            };
        },
        watch: {
            disabled () {
                this.init();
            },
            text () {
                this.init();
            },
            height () {
                this.init();
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init () {
                if (!this.disabled) {
                    this.computeText();
                    this.limitShow();
                }
            },
            computeText () {
                this.oversize = false;
                this.computedReady = false;

                nextTick(() => {
                    let $text = this.$refs.text;
                    let $el = this.$el;
                    let $more = this.$refs.more;
                    let n = 1000;
                    let text = this.text;
                    let height = this.height;
                    // 当 height 未定义，且 lines 定义时，计算真实高度，否则使用 this.height
                    if (!height && this.lines) {
                        const lineHeight = parseInt(getStyle($el, 'lineHeight'), 10);
                        height = lineHeight * this.lines;
                    }

                    if($text) {
                        // 指定 length，则按具体字数剪裁
                        if (this.length) {
                            const textLength = this.fullWidthRecognition ? getStrFullLength(text) : text.length;
                            if (textLength > this.length) {
                                this.oversize = true;
                                $more.style.display = 'inline-block';
                                text = this.fullWidthRecognition ? cutStrByFullLength(text, this.length) : text.slice(0, this.length);
                            }
                        } else {
                            if($el.offsetHeight > height) {
                                this.oversize = true;
                                $more.style.display = 'inline-block';

                                while ($el.offsetHeight > height && n > 0) {
                                    if($el.offsetHeight > height * 3) {
                                        $text.innerText = text = text.substring(0, Math.floor(text.length / 2));
                                    } else {
                                        $text.innerText = text = text.substring(0, text.length - 1);
                                    }
                                    n--;
                                }
                            }
                        }
                    }

                    this.computedText = text;
                });
            },
            limitShow () {
                this.computedReady = true;

                nextTick(() => {
                    let $text = this.$refs.text;
                    let $el = this.$el;

                    if ($text) {
                        $text.innerText = this.computedText;
                        if ($el.offsetHeight > this.height) {
                            this.$emit('on-hide');
                        } else {
                            this.$emit('on-show');
                        }
                    }
                });
            }
        }
    };
</script>
