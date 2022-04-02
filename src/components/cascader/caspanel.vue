<template>
    <span>
        <ul v-if="data && data.length" :class="[prefixCls + '-menu']">
            <Casitem
                v-for="(item, index) in data"
                :key="index"
                :prefix-cls="prefixCls"
                :data="item"
                :tmp-item="tmpItem"
                @click.stop="handleClickItem(item)"
                @mouseenter.stop="handleHoverItem(item)"></Casitem>
        </ul><Caspanel v-if="sublist && sublist.length" :prefix-cls="prefixCls" :data="sublist" :disabled="disabled" :trigger="trigger" :change-on-select="changeOnSelect"></Caspanel>
    </span>
</template>
<script>
    import { nextTick } from 'vue';
    import Casitem from './casitem.vue';
    import { findComponentUpward } from '../../utils/assist';
    import random from '../../utils/random_str';

    let key = 1;

    export default {
        name: 'Caspanel',
        components: { Casitem },
        inject: ['CascaderInstance'],
        provide () {
            return {
                CaspanelInstance: this
            }
        },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            disabled: Boolean,
            changeOnSelect: Boolean,
            trigger: String,
            prefixCls: String
        },
        data () {
            return {
                tmpItem: {},
                result: [],
                sublist: [],
                id: random(6),
                childCaspanelList: []
            };
        },
        watch: {
            data () {
                this.sublist = [];
            }
        },
        methods: {
            handleClickItem (item) {
                if (this.trigger !== 'click' && item.children && item.children.length) return;  // #1922
                this.handleTriggerItem(item, false, true);
            },
            handleHoverItem (item) {
                if (this.trigger !== 'hover' || !item.children || !item.children.length) return;  // #1922
                this.handleTriggerItem(item, false, true);
            },
            handleTriggerItem (item, fromInit = false, fromUser = false) {
                if (item.disabled) return;

                const cascader = findComponentUpward(this, 'Cascader');
                if (item.loading !== undefined && !item.children.length) {
                    if (cascader && cascader.loadData) {
                        cascader.loadData(item, () => {
                            // todo
                            if (fromUser) {
                                cascader.isLoadedChildren = true;
                            }
                            if (item.children.length) {
                                this.handleTriggerItem(item);
                            }
                        });
                        return;
                    }
                }

                // return value back recursion  // 向上递归，设置临时选中值（并非真实选中）
                const backItem = this.getBaseItem(item);
                // #5021 for this.changeOnSelect，加 if 是因为 #4472
                if (
                    this.changeOnSelect ||
                    (backItem.label !== this.tmpItem.label || backItem.value !== this.tmpItem.value) ||
                    (backItem.label === this.tmpItem.label && backItem.value === this.tmpItem.value)
                ) {
                    this.tmpItem = backItem;
                    this.emitUpdate([backItem]);
                }

                if (item.children && item.children.length){
                    this.sublist = item.children;

                    this.CascaderInstance.handleOnResultChange({
                        lastValue: false,
                        changeOnSelect: this.changeOnSelect,
                        fromInit: fromInit
                    });

                    // #1553
                    if (this.changeOnSelect) {
                        if (this.childCaspanelList.length) {
                            const Caspanel = this.childCaspanelList[0].caspanel;
                            Caspanel.handleOnClear(true);
                        }
                    }
                } else {
                    this.sublist = [];
                    this.CascaderInstance.handleOnResultChange({
                        lastValue: true,
                        changeOnSelect: this.changeOnSelect,
                        fromInit: fromInit
                    });
                }

                if (cascader) {
                    cascader.$refs.drop.update();
                }
            },
            updateResult (item) {
                this.result = [this.tmpItem].concat(item);
                this.emitUpdate(this.result);
            },
            getBaseItem (item) {
                let backItem = Object.assign({}, item);
                if (backItem.children) {
                    delete backItem.children;
                }

                return backItem;
            },
            emitUpdate (result) {
                if (this.$parent.$options.name === 'Caspanel') {
                    this.$parent.updateResult(result);
                } else {
                    this.CascaderInstance.updateResult(result);
                }
            },
            getKey () {
                return key++;
            },
            handleOnFindSelected (params) {
                const val = params.value;
                let value = [...val];
                for (let i = 0; i < value.length; i++) {
                    for (let j = 0; j < this.data.length; j++) {
                        if (value[i] === this.data[j].value) {
                            this.handleTriggerItem(this.data[j], true);
                            value.splice(0, 1);
                            nextTick(() => {
                                if (this.childCaspanelList.length) {
                                    const Caspanel = this.childCaspanelList[0].caspanel;
                                    Caspanel.handleOnFindSelected({
                                        value
                                    });
                                }
                            });
                            return false;
                        }
                    }
                }
            },
            handleOnClear (deep = false) {
                this.sublist = [];
                this.tmpItem = {};
                if (deep) {
                    if (this.childCaspanelList.length) {
                        const Caspanel = this.childCaspanelList[0].caspanel;
                        Caspanel.handleOnClear(true);
                    }
                }
            },
            addCaspanel () {
                const root = this.CascaderInstance;
                if (!root.caspanelList) root.caspanelList = [];
                root.caspanelList.push({
                    id: this.id,
                    caspanel: this
                });

                const parentCaspanel = findComponentUpward(this, 'Caspanel');
                if (parentCaspanel) {
                    if (!parentCaspanel.childCaspanelList) parentCaspanel.childCaspanelList = [];
                    parentCaspanel.childCaspanelList.push({
                        id: this.id,
                        caspanel: this
                    });
                }
            },
            removeCaspanel () {
                const root = this.CascaderInstance;
                if (root.caspanelList && root.caspanelList.length) {
                    const index = root.caspanelList.findIndex(item => item.id === this.id);
                    root.caspanelList.splice(index, 1);
                }

                const parentCaspanel = findComponentUpward(this, 'Caspanel');
                if (parentCaspanel) {
                    if (parentCaspanel.childCaspanelList && parentCaspanel.childCaspanelList.length) {
                        const index = parentCaspanel.childCaspanelList.findIndex(item => item.id === this.id);
                        parentCaspanel.childCaspanelList.splice(index, 1);
                    }
                }
            }
        },
        mounted () {
            this.addCaspanel();
        },
        beforeUnmount () {
            this.removeCaspanel();
        }
    };
</script>
