<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">
            <span :class="innerClasses"></span>
            <input
                v-if="group"
                type="checkbox"
                :class="inputClasses"
                :disabled="itemDisabled"
                :value="label"
                v-model="model"
                :name="name"
                @change="change"
                @focus="onFocus"
                @blur="onBlur">
            <input
                v-else
                type="checkbox"
                :class="inputClasses"
                :disabled="itemDisabled"
                :checked="currentValue"
                :name="name"
                @change="change"
                @focus="onFocus"
                @blur="onBlur">
        </span>
        <span class="ivu-checkbox-label-text" v-if="showSlot"><slot>{{ label }}</slot></span>
    </label>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import { oneOf } from '../../utils/assist';
    import mixinsForm from '../../mixins/form';

    const prefixCls = 'ivu-checkbox';

    export default {
        name: 'Checkbox',
        mixins: [ mixinsForm ],
        emits: ['update:modelValue', 'on-change'],
        inject: {
            CheckboxGroupInstance: {
                default: null
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            modelValue: {
                type: [String, Number, Boolean],
                default: false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            label: {
                type: [String, Number, Boolean]
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.size === '' ? 'default' : global.$VIEWUI.size;
                }
            },
            name: {
                type: String
            },
            // 4.0.0
            border: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showSlot: true,
                focusInner: false,
                model: []
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: this.itemDisabled,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-border`]: this.border
                    }
                ];
            },
            checkboxClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-indeterminate`]: this.indeterminate
                    }
                ];
            },
            innerClasses () {
                return [
                    `${prefixCls}-inner`,
                    {
                        [`${prefixCls}-focus`]: this.focusInner
                    }
                ];
            },
            inputClasses () {
                return `${prefixCls}-input`;
            },
            currentValue () {
                if (this.CheckboxGroupInstance) {
                    let modelValue = this.CheckboxGroupInstance.modelValue;
                    modelValue = Array.isArray(modelValue) ? modelValue : []
                    return modelValue.indexOf(this.label) >= 0;
                } else {
                    return this.modelValue === this.trueValue;
                }
            },
            group () {
                return !!this.CheckboxGroupInstance;
            }
        },
        mounted () {
            if (!this.CheckboxGroupInstance) this.showSlot = this.$slots.default !== undefined;
        },
        methods: {
            change (event) {
                if (this.itemDisabled) {
                    return false;
                }

                const checked = event.target.checked;

                const value = checked ? this.trueValue : this.falseValue;
                this.$emit('update:modelValue', value);

                if (this.group) {
                    this.CheckboxGroupInstance.change(this.model);
                } else {
                    this.$emit('on-change', value);
                    this.handleFormItemChange('change', value);
                }
            },
            onBlur () {
                this.focusInner = false;
            },
            onFocus () {
                this.focusInner = true;
            }
        },
        watch: {
            modelValue (val) {
                if (val === this.trueValue || val === this.falseValue) {
                    // this.updateModel();
                } else {
                    throw 'Value should be trueValue or falseValue.';
                }
            },
            'CheckboxGroupInstance.modelValue': {
                handler (val) {
                    this.model = val || [];
                },
                immediate: true
            }
        }
    };
</script>
