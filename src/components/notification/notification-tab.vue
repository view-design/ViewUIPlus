<template>
    <TabPane :label="currentTitle" :name="name" ref="tab" class="ivu-notifications-tab">
        <div class="ivu-notifications-container" @scroll="handleScroll" ref="scroll">
            <slot name="top"></slot>
            <div class="ivu-notifications-container-list">
                <slot></slot>
            </div>
            <div class="ivu-notifications-tab-empty" v-if="!loading && itemCount === 0">
                <slot name="empty">
                    <img class="ivu-notifications-tab-empty-img" v-if="emptyImage" :src="emptyImage">
                    <div class="ivu-notifications-tab-empty-text">{{ emptyText }}</div>
                </slot>
            </div>
            <div class="ivu-notifications-tab-loading">
                <div class="ivu-notifications-tab-loading-item ivu-notifications-tab-loading-show" v-if="loading">
                    <slot name="loading"><Icon type="ios-loading" class="ivu-load-loop" /> {{ NotificationInstance.locale.loading }}</slot>
                </div>
                <div class="ivu-notifications-tab-loading-item ivu-notifications-tab-loading-more" v-else-if="!loadedAll" @click="handleLoadMore">
                    <slot name="load-more">{{ NotificationInstance.locale.loadMore }}</slot>
                </div>
                <div class="ivu-notifications-tab-loading-item ivu-notifications-tab-loading-all" v-else-if="showLoadedAll && loadedAll">
                    <slot name="loaded-all">{{ NotificationInstance.locale.loadedAll }}</slot>
                </div>
            </div>
        </div>
        <div class="ivu-notifications-tab-clear" v-if="showClear && itemCount !== 0" @click="handleClear">
            <slot name="clear">
                <Icon type="md-done-all" v-if="showClearIcon" />
                <span>{{ NotificationInstance.locale.clear }}{{ title }}</span>
            </slot>
        </div>
    </TabPane>
</template>
<script>
    import TabPane from '../tabs/pane.vue';
    import Icon from '../icon/icon.vue';
    import Badge from '../badge/badge.vue';

    import random from '../../utils/random_str';

    export default {
        name: 'NotificationTab',
        inject: ['NotificationInstance'],
        components: { TabPane, Icon },
        provide () {
            return {
                NotificationTabInstance: this
            };
        },
        props: {
            count: {
                type: Number,
            },
            title: {
                type: String,
                required: true
            },
            // 标识
            name: {
                type: String
            },
            emptyText: {
                type: String,
                default: '目前没有通知'
            },
            emptyImage: {
                type: String,
                default: 'https://file.iviewui.com/iview-pro/icon-no-message.svg'
            },
            // data: {
            //     type: Array,
            //     default () {
            //         return [];
            //     }
            // },
            // 已加载完所有消息
            loadedAll: {
                type: Boolean,
                default: true
            },
            // 是否显示已加载完所有消息
            showLoadedAll: {
                type: Boolean,
                default: true
            },
            // 当前 Tab 的加载状态
            loading: {
                type: Boolean,
                default: false
            },
            // 是否允许滚动到底部自动加载
            scrollToLoad: {
                type: Boolean,
                default: true
            },
            // 是否显示清空按钮
            showClear: {
                type: Boolean,
                default: true
            },
            showClearIcon: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                customLabel: (h) => {
                    return h('div', [
                        h('span', this.title),
                        h(Badge, {
                            count: this.count
                        })
                    ]);
                },
                // 有多少个 NotificationItem，
                itemCount: 0,
                itemList: [],
                id: random(6)
            };
        },
        computed: {
            // eslint-disable-next-line vue/return-in-computed-property
            currentTitle () {
                const countType = this.NotificationInstance.countType;
                if (countType === 'text') {
                    const count = this.count ? `(${this.count})` : '';
                    return `${this.title} ${count}`;
                } else if (countType === 'badge') {
                    return this.customLabel;
                }
            }
        },
        watch: {
            count: {
                handler () {
                    this.NotificationInstance.handleGetCountAll();
                },
                immediate: true
            }
        },
        methods: {
            handleGetTabBaseInfo () {
                return {
                    name: this.name,
                    title: this.title
                };
            },
            handleGetItems () {
                const items = this.itemList.map(item => item.item);
                this.itemCount = items.length;
            },
            handleItemClick (item) {
                this.NotificationInstance.handleItemClick(this.handleGetTabBaseInfo(), item);
            },
            handleClear () {
                this.NotificationInstance.handleClear(this.handleGetTabBaseInfo());
            },
            handleLoadMore () {
                this.NotificationInstance.handleLoadMore(this.handleGetTabBaseInfo());
            },
            handleScroll () {
                if (!this.scrollToLoad) return;
                const $scroll = this.$refs.scroll;
                const displacement = $scroll.scrollHeight - $scroll.clientHeight - $scroll.scrollTop;

                if (!this.loading && displacement === 0) {
                    this.handleLoadMore();
                }
            },
            addTab () {
                const target = this.NotificationInstance;
                target.tabList.push({
                    id: this.id,
                    tab: this
                });
            },
            removeTab () {
                const target = this.NotificationInstance;
                const index = target.tabList.findIndex(item => item.id === this.id);
                target.tabList.splice(index, 1);
            }
        },
        mounted () {
            this.addTab();
        },
        beforeUnmount () {
            this.removeTab();
        }
    };
</script>
