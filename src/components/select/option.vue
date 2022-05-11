<template>
    <li
        :class="classes"
        @click.stop="select"
        v-show="isShow"
        @mousedown.prevent
    ><slot>{{ showLabel }}</slot></li>
</template>
<script>
    import mixinsForm from '../../mixins/form';
    import { findComponentUpward } from '../../utils/assist';
    import random from '../../utils/random_str';
    import { getCurrentInstance } from 'vue';
    import { nextTick } from 'vue';
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
            // 4.0.0
            tag: {
                type: [String, Number]
            }
        },
        data () {
            return {
                searchLabel: '',  // the slot value (textContent)
                autoComplete: false,
                id: random(6),
                instance: null
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
            },
            isFocused(){
                const SelectInstance = this.SelectInstance;
                let slotOptions = SelectInstance.slotOptions || [];
                const focusIndex = SelectInstance.focusIndex;

                // when autoComplete the slotsOption index sort error
                // use the parent default slots to get right slotsOption index
                const defaultSlot = SelectInstance.$slots.default;
                if (this.autoComplete && defaultSlot) {
                    slotOptions = [];
                    let vNodes = defaultSlot();
                    while(vNodes.length > 0) {
                        const vNode = vNodes.shift();
                        if (vNode.type && typeof vNode.type === 'object' && vNode.type.name ==='iOption' ) {
                            slotOptions.push(vNode);
                        }else {
                            if (Array.isArray(vNode.children)) {
                                vNodes = vNodes.concat(vNode.children)
                            }
                        }           
                    }
                }
                const focusOption = slotOptions[focusIndex]
                return focusOption && focusOption.props && focusOption.props.value === this.value;
            },
            isShow(){
                const SelectInstance = this.SelectInstance;
                const filterable = SelectInstance.filterable;
                const query = SelectInstance.query.toLowerCase().trim();
                const filterByLabel = SelectInstance.filterByLabel;
                const slotOptions = SelectInstance.slotOptions || [];
                // 输入创建
                const showCreateItem = SelectInstance.showCreateItem;
                const allowCreate = SelectInstance.allowCreate;
                const { props } = slotOptions.find(item => item.props && item.props.value === this.value) || { props: {} };
                const label = this.label || this.$el && this.$el.textContent
                let filterOption = (label || props.value || '').toLowerCase();
                if (filterByLabel) {
                    filterOption = (label || '').toLowerCase();
                }
                const showFilterOption = filterOption.includes(query);
                return !filterable || filterable && showFilterOption || !showCreateItem && allowCreate
            },
            selected(){
                const SelectInstance = this.SelectInstance;
                const values = SelectInstance.values || [];
                return values.find(item => item.value === this.value)
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
            },
            addOption () {
                const select = this.SelectInstance;
                const group = this.OptionGroupInstance;
                if (group) {
                    group.optionList.push({
                        ...this.instance,
                        id: this.id,
                        tag: 'option'
                    });
                }
                if (select){
                    select.slotOptions.push({
                        ...this.instance,
                        id: this.id,
                        tag: 'option'
                    });
                }
            },
            removeOption () {
                const group = this.OptionGroupInstance;
                const select = this.SelectInstance;
                if (group) {
                    const index = group.optionList.findIndex(item => item.id === this.id);
                    index !== -1 && group.optionList.splice(index, 1);
                }
                if( select ){
                    const select = this.SelectInstance;
                    const index = select.slotOptions.findIndex(item => item.id === this.id);
                    index !== -1 && select.slotOptions.splice(index, 1);
                }
            }
        },
        created(){
            this.instance = getCurrentInstance();
        },
        mounted () {
            this.addOption();
            const Select = findComponentUpward(this, 'iSelect');
            if (Select) {
                this.autoComplete = Select.autoComplete;
            }
        },
        beforeUnmount () {
            // fix AutoComplete. when suggest the word, the dropdown will hide
            nextTick(() => {
                this.removeOption();
                this.instance = null;
            })
        }
    };
</script>
