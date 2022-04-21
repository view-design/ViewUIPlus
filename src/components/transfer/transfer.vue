<script>
    import { h } from 'vue';
    import List from './list.vue';
    import Operation from './operation.vue';
    import Locale from '../../mixins/locale';
    import mixinsForm from '../../mixins/form';

    const prefixCls = 'ivu-transfer';

    export default {
        name: 'Transfer',
        mixins: [ Locale, mixinsForm ],
        emits: ['on-change', 'on-selected-change'],
        provide () {
            return {
                TransferInstance: this
            }
        },
        render () {
            const defaultSlot = this.$slots.default ? this.$slots.default() : '';

            return h('div', {
                'class': this.classes
            }, [
                h(List, {
                    ref: 'left',
                    prefixCls: this.prefixCls + '-list',
                    data: this.leftData,
                    renderFormat: this.renderFormat,
                    checkedKeys: this.leftCheckedKeys,
                    validKeysCount: this.leftValidKeysCount,
                    listStyle: this.listStyle,
                    title: this.localeTitles[0],
                    filterable: this.filterable,
                    filterPlaceholder: this.localeFilterPlaceholder,
                    filterMethod: this.filterMethod,
                    notFoundText: this.localeNotFoundText,
                    'onOn-checked-keys-change':this.handleLeftCheckedKeysChange
                }, () => defaultSlot),

                h(Operation, {
                    prefixCls: this.prefixCls,
                    operations: this.operations,
                    leftActive: this.leftValidKeysCount > 0,
                    rightActive: this.rightValidKeysCount > 0,
                    reverseOperation: this.reverseOperation
                }),

                h(List, {
                    ref: 'right',
                    prefixCls: this.prefixCls + '-list',
                    data: this.rightData,
                    renderFormat: this.renderFormat,
                    checkedKeys: this.rightCheckedKeys,
                    validKeysCount: this.rightValidKeysCount,
                    listStyle: this.listStyle,
                    title: this.localeTitles[1],
                    filterable: this.filterable,
                    filterPlaceholder: this.localeFilterPlaceholder,
                    filterMethod: this.filterMethod,
                    notFoundText: this.localeNotFoundText,
                    'onOn-checked-keys-change':this.handleRightCheckedKeysChange
                }, () => defaultSlot)
            ]);
        },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            renderFormat: {
                type: Function,
                default (item) {
                    return item.label || item.key;
                }
            },
            targetKeys: {
                type: Array,
                default () {
                    return [];
                }
            },
            selectedKeys: {
                type: Array,
                default () {
                    return [];
                }
            },
            listStyle: {
                type: Object,
                default () {
                    return {};
                }
            },
            titles: {
                type: Array
            },
            operations: {
                type: Array,
                default () {
                    return [];
                }
            },
            filterable: {
                type: Boolean,
                default: false
            },
            filterPlaceholder: {
                type: String
            },
            filterMethod: {
                type: Function,
                default (data, query) {
                    const type = ('label' in data) ? 'label' : 'key';
                    return data[type].indexOf(query) > -1;
                }
            },
            notFoundText: {
                type: String
            },
            // 4.2.0
            // 反转两个按钮
            reverseOperation: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                leftData: [],
                rightData: [],
                leftCheckedKeys: [],
                rightCheckedKeys: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`
                ];
            },
            leftValidKeysCount () {
                return this.getValidKeys('left').length;
            },
            rightValidKeysCount () {
                return this.getValidKeys('right').length;
            },
            localeFilterPlaceholder () {
                if (this.filterPlaceholder === undefined) {
                    return this.t('i.transfer.filterPlaceholder');
                } else {
                    return this.filterPlaceholder;
                }
            },
            localeNotFoundText () {
                if (this.notFoundText === undefined) {
                    return this.t('i.transfer.notFoundText');
                } else {
                    return this.notFoundText;
                }
            },
            localeTitles () {
                if (this.titles === undefined) {
                    return [this.t('i.transfer.titles.source'), this.t('i.transfer.titles.target')];
                } else {
                    return this.titles;
                }
            }
        },
        methods: {
            getValidKeys (direction) {
                return this[`${direction}Data`].filter(data => !data.disabled && this[`${direction}CheckedKeys`].indexOf(data.key) > -1).map(data => data.key);
            },
            splitData (init = false) {
                this.leftData = [...this.data];
                this.rightData = [];
                if (this.targetKeys.length > 0) {
                    this.targetKeys.forEach((targetKey) => {
                        const filteredData = this.leftData.filter((data, index) => {
                            if (data.key === targetKey) {
                                this.leftData.splice(index, 1);
                                return true;
                            }
                            return false;
                        });
                        if (filteredData && filteredData.length > 0) this.rightData.push(filteredData[0]);
                    });
                }
                if (init) {
                    this.splitSelectedKey();
                }
            },
            splitSelectedKey () {
                const selectedKeys = this.selectedKeys;
                if (selectedKeys.length > 0) {
                    this.leftCheckedKeys = this.leftData
                            .filter(data => selectedKeys.indexOf(data.key) > -1)
                            .map(data => data.key);
                    this.rightCheckedKeys = this.rightData
                            .filter(data => selectedKeys.indexOf(data.key) > -1)
                            .map(data => data.key);
                }
            },
            moveTo (direction) {
                const targetKeys = this.targetKeys;
                const opposite = direction === 'left' ? 'right' : 'left';
                const moveKeys = this.getValidKeys(opposite);
                const newTargetKeys = direction === 'right' ?
                        moveKeys.concat(targetKeys) :
                        targetKeys.filter(targetKey => !moveKeys.some(checkedKey => targetKey === checkedKey));

                this.$refs[opposite].toggleSelectAll(false);
                this.$emit('on-change', newTargetKeys, direction, moveKeys);

                this.handleFormItemChange('change', {
                    tarketKeys: newTargetKeys,
                    direction: direction,
                    moveKeys: moveKeys
                });
            },
            handleLeftCheckedKeysChange (keys) {
                this.leftCheckedKeys = keys;
            },
            handleRightCheckedKeysChange (keys) {
                this.rightCheckedKeys = keys;
            },
            handleCheckedKeys () {
                const sourceSelectedKeys = this.getValidKeys('left');
                const targetSelectedKeys = this.getValidKeys('right');
                this.$emit('on-selected-change', sourceSelectedKeys, targetSelectedKeys);
            }
        },
        watch: {
            targetKeys () {
                this.splitData(false);
            },
            data () {
                this.splitData(false);
            }
        },
        mounted () {
            this.splitData(true);
        }
    };
</script>
