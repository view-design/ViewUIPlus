<script>
    import { getCurrentInstance, h, Fragment, Comment, Text } from 'vue';
    import Divider from '../divider/divider.vue';
    import { oneOf } from '../../utils/assist';

    const spaceSize = {
        small: 8,
        default: 16,
        large: 24
    }

    export default {
        name: 'Space',
        props: {
            size: {
                type: [String, Number, Array],
                validator(value) {
                    const sizes = ['small', 'large', 'default'];
                    if (typeof value === 'string') {
                        return oneOf(value, sizes);
                    }
                    if (Array.isArray(value)) {
                        return value.length > 0 && value.every(i => typeof i === 'number' || oneOf(i, sizes));
                    }
                    return true;
                },
                default() {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || !global.$VIEWUI.space || global.$VIEWUI.space.size === ''
                        ? 'small' : global.$VIEWUI.space.size;
                }
            },
            direction: {
                type: String,
                validator(value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'horizontal'
            },
            align: {
                type: String,
                validator(value) {
                    return oneOf(value, ['start', 'end', 'center', 'baseline', 'stretch']);
                }
            },
            wrap: {
                type: Boolean,
                default: false
            },
            split: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                validator(value) {
                    return oneOf(value, ['inline-flex', 'flex']);
                },
                default: 'inline-flex'
            }
        },
        computed: {
            mergedAlign() {
                if (!this.align) {
                    if (this.direction === 'horizontal') return 'center';
                    if (this.type === 'flex') return 'stretch';
                }
                return this.align;
            },
            classes() {
                return [
                    'ivu-space',
                    `ivu-space-${this.direction}`,
                    {
                        'ivu-space-flex': this.type === 'flex',
                        'ivu-space-wrap': this.wrap,
                        [`ivu-space-${this.mergedAlign}`]: this.mergedAlign
                    }
                ];
            },
            styles() {
                const style = {};
                if (['number', 'string'].includes(typeof this.size)) {
                    style.gap = this.getSize(this.size);
                }
                if (Array.isArray(this.size)) {
                    if (this.size.length === 1) {
                        style.columnGap = this.getSize(this.size[0]);
                    } else if (this.size.length > 1) {
                        style.columnGap = this.getSize(this.size[0]);
                        style.rowGap = this.getSize(this.size[1]);
                    }
                }
                return style;
            }
        },
        methods: {
            getSize(size) {
                return `${typeof size === 'string' ? spaceSize[size] : size || 0}px`;
            },
            filterEmpty(children = []) {
                const res = [];
                children.forEach(child => {
                    if (Array.isArray(child)) {
                        res.push(...child);
                    } else if (child.type === Fragment) {
                        res.push(...child.children);
                    } else {
                        res.push(child);
                    }
                });
                return res.filter(c => !this.isEmptyElement(c));
            },
            isEmptyElement(c) {
                return c && (
                    c.type === Comment ||
                    (c.type === Fragment && c.children.length === 0) ||
                    (c.type === Text && c.children.trim() === '')
                );
            }
        },
        render() {
            const items = this.filterEmpty(this.$slots.default ? this.$slots.default() : []);
            const len = items.length;

            if (len === 0) return null;

            let split = null;

            if (this.split && !this.$slots.split) {
                split = h(Divider, { type: 'vertical' });
            } else if (this.$slots.split) {
                split = this.$slots.split();
            }

            return h(
                'div',

                { class: this.classes, style: this.styles },

                items.map((child, index) => {
                    const item = h('div', { class: 'ivu-space-item' }, [child]);

                    if (split && index + 1 < len) {
                        return [
                            item,
                            h('div', { class: 'ivu-space-split' }, [split])
                        ];
                    }

                    return item;
                })
            );
        }
    }
</script>
