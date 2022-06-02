import { getCurrentInstance } from 'vue';
import { oneOf } from '../../utils/assist';
import mixinsLink from '../../mixins/link';

const defaultCopyConfig = {
    tooltips: ['复制', '复制成功'],
    showTip: true,
    successTip: '复制成功',
    errorTip: '复制失败'
};

const defaultEditConfig = {
    tooltip: false,
    editing: false,
    maxlength: '',
    autosize: false
};

export default {
    emits: ['update:modelValue'],
    mixins: [ mixinsLink ],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['secondary', 'success', 'warning', 'danger', '']);
            },
            default: ''
        },
        copyable: {
            type: Boolean,
            default: false
        },
        copyText: {
            type: String,
            default: ''
        },
        copyConfig: {
            type: Object,
            default () {
                const global = getCurrentInstance().appContext.config.globalProperties;
                return !global.$VIEWUI || global.$VIEWUI.typography.copyConfig === '' ? defaultCopyConfig : global.$VIEWUI.typography.copyConfig;
            }
        },
        editable: {
            type: Boolean,
            default: false
        },
        editConfig: {
            type: Object,
            default () {
                const global = getCurrentInstance().appContext.config.globalProperties;
                return !global.$VIEWUI || global.$VIEWUI.typography.editConfig === '' ? defaultEditConfig : global.$VIEWUI.typography.editConfig;
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        ellipsis: {
            type: Boolean,
            default: false
        },
        code: {
            type: Boolean,
            default: false
        },
        delete: {
            type: Boolean,
            default: false
        },
        keyboard: {
            type: Boolean,
            default: false
        },
        mark: {
            type: Boolean,
            default: false
        },
        strong: {
            type: Boolean,
            default: false
        },
        underline: {
            type: Boolean,
            default: false
        },
        italic: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: String,
            default: ''
        }
    },
    computed: {
        isHrefPattern () {
            const { to } = this;
            return !!to;
        },
        linkProps () {
            if (this.isHrefPattern) {
                const { linkUrl, target } = this;
                return { href: linkUrl, target };
            } else {
                return {};
            }
        },
        mergedCopyConfig () {
            return Object.assign({}, defaultCopyConfig, this.copyConfig);
        },
        mergedEditConfig () {
            return Object.assign({}, defaultEditConfig, this.editConfig);
        }
    },
    methods: {
        commonSlots () {
            const slots = {};

            if (this.$slots.default) slots.default = () => this.$slots.default();
            if (this.$slots.copyIcon) slots.copyIcon = (props) => this.$slots.copyIcon(props);

            return slots;
        }
    }
}
