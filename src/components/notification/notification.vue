<template>
    <div class="ivu-notifications" ref="notice">
        <Dropdown trigger="custom" :visible="visible" :transfer="transfer" :placement="placement" :transfer-class-name="transferClasses" @on-visible-change="handleVisibleChange" @on-clickoutside="handleClickOutside">
            <div class="ivu-notifications-rel" @click.prevent.stop="handleToggleOpen">
                <Badge :count="finalCount" v-bind="badgeProps">
                    <slot name="icon"><Icon :type="icon" size="24"></Icon></slot>
                </Badge>
            </div>
            <template #list>
                <DropdownMenu v-if="$slots.default" @click.stop>
                    <div class="ivu-notifications-list" :class="{ 'ivu-notifications-list-wide': wide }">
                        <div class="ivu-notifications-tabs">
                            <Tabs :animated="false" :model-value="tab" @on-click="handleTabChange"><slot></slot></Tabs>
                        </div>
                    </div>
                    <div class="ivu-notifications-extra" v-if="$slots.extra"><slot name="extra"></slot></div>
                </DropdownMenu>
            </template>
        </Dropdown>
    </div>
</template>
<script>
    import { getCurrentInstance } from 'vue';

    import Dropdown from '../dropdown/dropdown.vue';
    import DropdownMenu from '../dropdown/dropdown-menu.vue';
    import Badge from '../badge/badge.vue';
    import Tabs from '../tabs/tabs.vue';

    import { oneOf } from '../../utils/assist.js';

    export default {
        name: 'Notification',
        components: { Dropdown, DropdownMenu, Badge, Tabs },
        emits: ['on-visible-change', 'on-item-click', 'on-clear', 'on-load-more', 'on-tab-change'],
        provide () {
            return {
                NotificationInstance: this
            };
        },
        props: {
            count: {
                type: Number,
            },
            // 是否根基 Tab 自动计算 count，开启，则 count 无效
            autoCount: {
                type: Boolean,
                default: false
            },
            // Tab 的 count 是纯文本显示，还是 Badge 显示
            countType: {
                validator (value) {
                    return oneOf(value, ['text', 'badge']);
                },
                default: 'text'
            },
            icon: {
                type: String,
                default: 'md-notifications-outline'
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? false : global.$VIEWUI.transfer;
                }
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            // 额外的 Badge 配置
            badgeProps: {
                type: Object,
                default () {
                    return {};
                }
            },
            // todo （考虑是否需要该功能） 弹出卡片加载状态
            // loading: {
            //     type: Boolean,
            //     default: false
            // },
            // 点击清空按钮后关闭通知菜单
            clearClose: {
                type: Boolean,
                default: false
            },
            // 默认文案
            locale: {
                type: Object,
                default () {
                    return {
                        loadedAll: '加载完毕',
                        loading: '加载中...',
                        loadMore: '加载更多',
                        clear: '清空'
                    };
                }
            },
            // 当前显示哪一个面板，基于 Tab 的 name
            tab: {
                type: String
            },
            // 开启后，宽度是100%而不是默认的300px，在移动端等环境下使用较好
            wide: {
                type: Boolean,
                default: false
            },
            transferClassName: {
                type: String
            }
        },
        data () {
            return{
                visible: false,
                countAll: 0,
                tabList: []
            };
        },
        computed: {
            finalCount () {
                return this.autoCount ? this.countAll : this.count;
            },
            transferClasses () {
                let classes = 'ivu-notifications-transfer';
                if (this.transferClassName) classes += ` ${this.transferClassName}`;

                return classes;
            }
        },
        watch: {
            visible (val) {
                this.$emit('on-visible-change', val);
            }
        },
        methods: {
            handleVisibleChange (visible) {
                this.visible = visible;
            },
            handleClickOutside (e) {
                if (this.$refs.notice.contains(e.target)) return;
                this.visible = false;
            },
            handleToggleOpen () {
                this.visible = !this.visible;
            },
            handleGetCountAll () {
                if (this.autoCount) {
                    const $tabs = this.tabList.map(item => item.tab);
                    let countAll = 0;
                    $tabs.forEach(item => {
                        if (item.count) countAll += item.count;
                    });

                    this.countAll = countAll;
                }
            },
            handleItemClick (tab, item) {
                this.$emit('on-item-click', tab, item);
            },
            handleClear (tab) {
                this.$emit('on-clear', tab);
                if (this.clearClose) this.handleClose();
            },
            handleLoadMore (tab) {
                this.$emit('on-load-more', tab);
            },
            handleClose () {
                this.visible = false;
            },
            handleTabChange (name) {
                const $tabs = this.tabList.map(item => item.tab);

                let tabInfo = {};

                $tabs.forEach(item => {
                    const tab = item.$refs.tab;
                    if (tab.currentName === name) {
                        tabInfo = item.handleGetTabBaseInfo();
                    }
                });

                this.$emit('on-tab-change', tabInfo);
            }
        }
    };
</script>
