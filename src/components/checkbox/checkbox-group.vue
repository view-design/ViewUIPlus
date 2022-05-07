<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import { oneOf } from '../../utils/assist';
    import mixinsForm from '../../mixins/form';
    const prefixCls = 'ivu-checkbox-group';

    export default {
        name: 'CheckboxGroup',
        mixins: [ mixinsForm ],
        emits: ['update:modelValue', 'on-change'],
        provide () {
            return {
                CheckboxGroupInstance: this
            }
        },
        props: {
            modelValue: {
                type: Array,
                default () {
                    return [];
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.size === '' ? 'default' : global.$VIEWUI.size;
                }
            }
        },
        data () {
            return {
                currentValue: this.modelValue || [],
                children: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`ivu-checkbox-${this.size}`]: !!this.size
                    }
                ];
            }
        },
        methods: {
            change (data) {
                this.currentValue = data;
                this.$emit('update:modelValue', data);
                this.$emit('on-change', data);
                this.handleFormItemChange('change', data);
            }
        }
    };
</script>
