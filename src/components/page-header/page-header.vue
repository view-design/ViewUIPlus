<template>
    <div class="ivu-page-header" :class="classes">
        <div class="ivu-page-header-breadcrumb" v-if="$slots.breadcrumb || !hiddenBreadcrumb">
            <slot name="breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem v-for="(item, index) in breadcrumbList" :key="index" :to="item.to" :replace="item.replace" :target="item.target">{{ item.title }}</BreadcrumbItem>
                </Breadcrumb>
            </slot>
        </div>
        <div class="ivu-page-header-detail">
            <div class="ivu-page-header-back" v-if="back || $slots.back" @click="handleBack">
                <slot name="back">
                    <Icon type="md-arrow-back" />
                </slot>
                <Divider type="vertical" />
            </div>
            <div class="ivu-page-header-logo" v-if="logo || $slots.logo">
                <slot name="logo">
                    <img :src="logo">
                </slot>
            </div>
            <div class="ivu-page-header-main">
                <div class="ivu-page-header-row">
                    <div class="ivu-page-header-back" v-if="back || $slots.back" @click="handleBack">
                        <slot name="back">
                            <Icon type="md-arrow-back" />
                        </slot>
                        <Divider type="vertical" />
                    </div>
                    <div class="ivu-page-header-title" v-if="title || $slots.title">
                        <slot name="title">{{ title }}</slot>
                    </div>
                    <div class="ivu-page-header-action" v-if="action || $slots.action">
                        <slot name="action">{{ action }}</slot>
                    </div>
                </div>
                <div class="ivu-page-header-row">
                    <div class="ivu-page-header-content" v-if="content || $slots.content">
                        <slot name="content">{{ content }}</slot>
                    </div>
                    <div class="ivu-page-header-extra" v-if="extra || $slots.extra">
                        <slot name="extra">{{ extra }}</slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="ivu-page-header-tabs" v-if="tabList && tabList.length">
            <Tabs :animated="false" :model-value="tabActiveKey" @on-click="handleTabChange">
                <TabPane v-for="(item, index) in tabList" :key="index" :label="item.label" :name="item.name"></TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
    import Breadcrumb from '../breadcrumb/breadcrumb.vue';
    import BreadcrumbItem from '../breadcrumb/breadcrumb-item.vue';
    import Divider from '../divider/divider.vue';
    import Icon from '../icon/icon.vue';
    import Tabs from '../tabs/tabs.vue';
    import TabPane from '../tabs/pane.vue';

    export default {
        name: 'PageHeader',
        components: { Breadcrumb, BreadcrumbItem, Divider, Icon, Tabs, TabPane },
        emits: ['on-tab-change', 'on-back'],
        props: {
            title: {
                type: String
            },
            back: {
                type: Boolean,
                default: false
            },
            logo: {
                type: String
            },
            action: {
                type: String
            },
            content: {
                type: String
            },
            extra: {
                type: String
            },
            breadcrumbList: {
                type: Array
            },
            hiddenBreadcrumb: {
                type: Boolean,
                default: false
            },
            tabList: {
                type: Array
            },
            tabActiveKey: {
                type: String
            },
            // 是否定宽
            wide: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes () {
                return {
                    'ivu-page-header-wide': this.wide
                };
            }
        },
        methods: {
            handleTabChange (name) {
                const tab = this.tabList.find(item => item.name === name);
                this.$emit('on-tab-change', JSON.parse(JSON.stringify(tab)));
            },
            handleBack () {
                this.$emit('on-back');
            }
        }
    };
</script>
