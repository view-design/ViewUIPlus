<template>
    <label :class="wrapClasses">
        <span :class="radioClasses">
            <span :class="innerClasses"></span>
            <input
                type="radio"
                :class="inputClasses"
                :disabled="itemDisabled"
                :checked="currentValue"
                :name="groupName"
                @change="change"
                @focus="onFocus"
                @blur="onBlur">
        </span><slot>{{ label }}</slot>
    </label>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import { oneOf } from '../../utils/assist';
    import mixinsForm from '../../mixins/form';

    const prefixCls = 'ivu-radio';

    export default {
        name: 'Radio',
        mixins: [ mixinsForm ],
        emits: ['update:modelValue', 'on-change'],
        inject: {
            RadioGroupInstance: {
                default: null
            }
        },
        props: {
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
                type: [String, Number]
            },
            disabled: {
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
                groupName: this.name,
                parent: this.RadioGroupInstance,
                focusWrapper: false,
                focusInner: false
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
                        [`${prefixCls}-focus`]: this.focusWrapper,
                        [`${prefixCls}-border`]: this.border
                    }
                ];
            },
            radioClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.itemDisabled
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
                if (this.RadioGroupInstance) {
                    return this.RadioGroupInstance.currentValue === this.label;
                } else {
                    return this.modelValue === this.trueValue;
                }
            },
            group () {
                return !!this.RadioGroupInstance;
            }
        },
        mounted () {
            if (this.parent) {
                if (this.name && this.name !== this.parent.name) {
                    /* eslint-disable no-console */
                    if (console.warn) {
                        console.warn('[View UI] Name does not match Radio Group name.');
                    }
                    /* eslint-enable no-console */
                } else {
                    this.groupName = this.parent.name;
                }
            }
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
                    if (this.label !== undefined) {
                        this.parent.change({
                            value: this.label,
                            checked: this.modelValue
                        });
                    }
                } else {
                    this.$emit('on-change', value);
                    this.handleFormItemChange('change', value);
                }
            },
            onBlur () {
                this.focusWrapper = false;
                this.focusInner = false;
            },
            onFocus () {
                if (this.group && this.parent.type === 'button') {
                    this.focusWrapper = true;
                } else {
                    this.focusInner = true;
                }
            }
        },
        watch: {
            modelValue (val) {
                if (val === this.trueValue || val === this.falseValue) {
                    // this.updateValue();
                } else {
                    throw 'Value should be trueValue or falseValue.';
                }
            }
        }
    };
</script>
