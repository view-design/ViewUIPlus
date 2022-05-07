<template>
    <Select
        ref="select"
        v-bind="$attrs"
        :multiple="multiple"
        class="ivu-tree-select"
        :class="classes"
        :transfer-class-name="transferClassName"
        @on-change="handleChange"
        @on-open-change="handleOpenChange"
        hideNotFound
        :transfer="transfer"
    >
        <Tree
            :data="data"
            :multiple="multiple"
            @on-select-change="handleSelectNode"
            @on-check-change="handleSelectNode"
            check-strictly
            :show-checkbox="multiple && showCheckbox"
            check-directly
            :load-data="loadData"
        ></Tree>
    </Select>
</template>
<script>
    import { getCurrentInstance, nextTick } from 'vue';
    import Select from '../select/select.vue';
    import Tree from '../tree/tree.vue';

    import mixinsForm from '../../mixins/form';

    export default {
        name: 'TreeSelect',
        components: { Select, Tree },
        emits: ['on-change', 'update:modelValue', 'on-open-change'],
        mixins: [ mixinsForm ],
        props: {
            modelValue: {
                type: [String, Number, Array]
            },
            // Tree 的数据
            data: {
                type: Array,
                default: () => []
            },
            // multiple 模式下，value 为 Array
            multiple: {
                type: Boolean,
                default: false
            },
            showCheckbox: {
                type: Boolean,
                default: false
            },
            loadData: {
                type: Function
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? false : global.$VIEWUI.transfer;
                }
            },
        },
        data () {
            let value = this.modelValue;
            if (value === null) {
                if (this.multiple) value = [];
                else value = '';
            }

            return {
                currentValue: value,
                isChangeValueInTree: false,  // 如果是点击 Tree 里改变的数据，临时置为 true，避免在 watch 的 value 中重复修改 Select 数据
                isValueChangeByTree: false,  // 多选时，用于判定是否是从 Select 的 Tag 关闭的标签
                isValueNull: false // hack：解决 value 置为 null 时，$emit:input 不是 null
            };
        },
        watch: {
            modelValue (val) {
                if (this.isChangeValueInTree) {
                    this.isChangeValueInTree = false;
                } else {
                    let value = val;
                    if (value === null) {
                        this.isValueNull = true;
                        if (this.multiple) value = [];
                        else value = '';
                    }
                    this.currentValue = value;
                    this.$refs.select.reset();
                    this.handleUpdateTreeNodes(this.data, true);
                }
            },
            data () {
                if (this.isChangeValueInTree) {
                    this.isChangeValueInTree = false;
                } else {
                    this.$refs.select.reset();
                    this.handleUpdateTreeNodes(this.data, true);
                }
            }
        },
        computed: {
            valueToArray () {
                return (typeof this.currentValue === 'object') ? this.currentValue : [this.currentValue];
            },
            isCheckboxUsable () {
                return this.multiple && this.showCheckbox;
            },
            transferClassName () {
                return this.transfer ? 'ivu-tree-select-transfer' : '';
            },
            classes () {
                return {
                    'ivu-tree-select-with-checkbox': this.showCheckbox
                };
            }
        },
        methods: {
            handleSelectNode (selectedNodes, currentNode) {
                if (this.multiple) {
                    if (selectedNodes.length) {
                        this.currentValue = selectedNodes.map(item => item.value);

                        this.handleUpdateSelectValue(currentNode.value, currentNode.title);
                    } else {
                        this.currentValue = [];
                        this.handleUpdateSelectValue('', '');
                    }
                } else {
                    if (selectedNodes.length) {
                        const node = selectedNodes[0];
                        this.currentValue = node.value;

                        this.handleUpdateSelectValue(node.value, node.title);
                    } else {
                        this.currentValue = '';
                        this.handleUpdateSelectValue('', '');
                    }
                }

                this.isChangeValueInTree = true;
                this.$emit('update:modelValue', this.currentValue);
                this.$emit('on-change', this.currentValue);
                this.handleFormItemChange('change', this.currentValue);
            },
            handleUpdateTreeNodes (data, isInit = false) {
                /**
                 * 当开启 showCheckbox 时，不能选择，只能勾选，且只有在多选时支持 showCheckbox 属性
                 * */
                data.forEach(item => {
                    if (this.valueToArray.indexOf(item.value) >= 0) {
                        if (this.isCheckboxUsable) {
                            item.checked = true;
                        } else {
                            item.selected = true;
                        }
                        this.handleUpdateSelectValue(item.value, item.title);
                    } else {
                        if (this.isCheckboxUsable) {
                            item.checked = false;
                        } else {
                            item.selected = false;
                        }
                    }

                    if (item.children && item.children.length) {
                        this.handleUpdateTreeNodes(item.children);
                    }
                });

                // Select 在 onOptionClick 方法中，如果是多选，会强制将 isFocused 设置为 true，初始时会有一个蓝框
                if (isInit) this.$refs.select.isFocused = false;
            },
            handleUpdateSelectValue (value, label) {
                if (value === '') {
                    this.$refs.select.reset();
                } else {
                    this.isValueChangeByTree = true;
                    this.$refs.select.onOptionClick({
                        value,
                        label
                    });
                }
            },
            handleChange (value) {
                if (this.isValueChangeByTree) {
                    this.isValueChangeByTree = false;
                } else {
                    this.currentValue = value;

                    if (this.isValueNull) {
                        this.isValueNull = false;
                        this.$emit('update:modelValue', null);
                    } else {
                        this.$emit('update:modelValue', value);
                    }

                    this.$emit('on-change', value);
                    this.handleFormItemChange('change', value);
                    this.$refs.select.reset();
                    this.handleUpdateTreeNodes(this.data, true);
                    nextTick(() => {
                        this.isValueChangeByTree = false;
                    });
                }
            },
            handleOpenChange (status) {
                this.$emit('on-open-change', status);
            }
        },
        mounted () {
            this.handleUpdateTreeNodes(this.data, true);
        }
    };
</script>
