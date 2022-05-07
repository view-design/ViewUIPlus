<template>
    <div :class="classes" :name="name">
        <slot></slot>
    </div>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import { oneOf } from '../../utils/assist';
    import mixinsForm from '../../mixins/form';

    const prefixCls = 'ivu-radio-group';

    let seed = 0;
    const now = Date.now();
    const getUuid = () => `ivuRadioGroup_${now}_${seed++}`;

    export default {
        name: 'RadioGroup',
        mixins: [ mixinsForm ],
        emits: ['update:modelValue', 'on-change'],
        provide () {
            return {
                RadioGroupInstance: this
            }
        },
        props: {
            modelValue: {
                type: [String, Number],
                default: ''
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
            type: {
                validator (value) {
                    return oneOf(value, ['button']);
                }
            },
            vertical: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                default: getUuid
            },
            // 4.5.0
            buttonStyle: {
                validator (value) {
                    return oneOf(value, ['default', 'solid']);
                },
                default: 'default'
            }
        },
        data () {
            return {
                currentValue: this.modelValue,
                children: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`ivu-radio-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-button-${this.buttonStyle}`]: this.type === 'button' && this.buttonStyle !== 'default',
                        [`${prefixCls}-vertical`]: this.vertical
                    }
                ];
            }
        },
        methods: {
            change (data) {
                this.currentValue = data.value;
                this.$emit('update:modelValue', data.value);
                this.$emit('on-change', data.value);
                this.handleFormItemChange('change', data.value);
            }
        },
        watch: {
            modelValue () {
                if (this.currentValue !== this.modelValue) {
                    this.currentValue = this.modelValue;
                }
            }
        }
    };
</script>
