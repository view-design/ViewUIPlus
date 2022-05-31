import { getCurrentInstance } from 'vue';
import { oneOf } from '../../utils/assist';

export default {
    emits: ['update:modelValue'],
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
        copyConfig: {
            type: Object,
            default () {
                const global = getCurrentInstance().appContext.config.globalProperties;
                return !global.$VIEWUI || global.$VIEWUI.typography.copyConfig === '' ? {
                    showTip: true,
                    successTip: '复制成功',
                    errorTip: '复制失败'
                } : global.$VIEWUI.typography.copyConfig;
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
                return !global.$VIEWUI || global.$VIEWUI.typography.editConfig === '' ? {
                    tooltip: false,
                    editing: false,
                    maxlength: '',
                    autosize: false
                } : global.$VIEWUI.typography.editConfig;
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
        modelValue: {
            type: String,
            default: ''
        }
    },
    methods: {
        defaultSlots () {
            return this.$slots.default ? () => this.$slots.default() : '';
        }
    }
}
