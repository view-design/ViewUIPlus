<script>
    import { h } from 'vue';
    import baseProps from './props';

    export default {
        name: 'TypographyBase',
        mixins: [ baseProps ],
        props: {
            component: {
                type: String,
                default: 'div'
            }
        },
        data () {
            return {
                currentContent: this.modelValue
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
        render () {
            const textNode = this.wrapperDecorations();

            return h(this.component, {
                class: this.classes
            }, textNode);
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

                return content;
            }
        }
    }
</script>
