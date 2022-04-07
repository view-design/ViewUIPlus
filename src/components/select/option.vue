<template>
    <li
        :class="classes"
        @click.stop="select"
        @mousedown.prevent
    ><slot>{{ showLabel }}</slot></li>
</template>
<script>
    import mixinsForm from '../../mixins/form';
    import { findComponentUpward } from '../../utils/assist';
    import random from '../../utils/random_str';

    const prefixCls = 'ivu-select-item';

    export default {
        name: 'iOption',
        componentName: 'select-item',
        mixins: [ mixinsForm ],
        emits: ['on-select-selected'],
        inject: {
            SelectInstance: {
                default: null
            },
            OptionGroupInstance: {
                default: null
            }
        },
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            },
            isFocused: {
                type: Boolean,
                default: false
            },
            // 4.0.0
            tag: {
                type: [String, Number]
            }
        },
        data () {
            return {
                searchLabel: '',  // the slot value (textContent)
                autoComplete: false,
                id: random(6)
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-selected`]: this.selected && !this.autoComplete,
                        [`${prefixCls}-focus`]: this.isFocused
                    }
                ];
            },
            showLabel () {
                return (this.label) ? this.label : this.value;
            },
            optionLabel(){
                return this.label || (this.$el && this.$el.textContent);
            }
        },
        methods: {
            select () {
                if (this.itemDisabled) return false;

                this.SelectInstance.handleOnSelectSelected({
                    value: this.value,
                    label: this.optionLabel,
                    tag: this.tag
                });
                this.$emit('on-select-selected', {
                    value: this.value,
                    label: this.optionLabel,
                    tag: this.tag
                });
            },
            addOption () {
                if (this.OptionGroupInstance) {
                    const group = this.OptionGroupInstance;
                    group.optionList.push({
                        id: this.id,
                        option: this,
                        tag: 'option'
                    });
                } else {
                    const select = this.SelectInstance;
                    select.slotOptions.push({
                        id: this.id,
                        option: this,
                        tag: 'option'
                    });
                }
            },
            removeOption () {
                if (this.OptionGroupInstance) {
                    const group = this.OptionGroupInstance;
                    const index = group.optionList.findIndex(item => item.id === this.id);
                    group.optionList.splice(index, 1);
                } else {
                    const select = this.SelectInstance;
                    const index = select.slotOptions.findIndex(item => item.id === this.id);
                    select.slotOptions.splice(index, 1);
                }
            }
        },
        mounted () {
            this.addOption();
            const Select = findComponentUpward(this, 'iSelect');
            if (Select) this.autoComplete = Select.autoComplete;
        },
        beforeUnmount () {
            this.removeOption();
        }
    };
</script>
