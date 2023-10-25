<template>
    <div class="ivu-notifications-item" :class="classes" @click="handleClick">
        <slot>
            <Row v-bind="rowProps">
                <Col span="4" class="ivu-notifications-item-icon" v-if="icon || customIcon || avatar || $slots.avatar">
                    <slot name="avatar">
                        <Avatar v-if="icon" :icon="icon" :shape="avatarShape" :size="iconSize" :style="iconStyle" />
                        <Avatar v-else-if="customIcon" :custom-icon="customIcon" :shape="avatarShape" :size="iconSize" :style="iconStyle" />
                        <Avatar v-else-if="avatar" :src="avatar" :shape="avatarShape" :size="iconSize" :style="iconStyle" />
                    </slot>
                </Col>
                <Col :span="contentSpan" class="ivu-notifications-item-content">
                    <div class="ivu-notifications-item-title">
                        <h4 v-if="title || $slots.title">
                            <slot name="title">{{ title }}</slot>
                            <div class="ivu-notifications-item-tag" v-if="tag">
                                <Tag v-bind="tagProps">{{ tag }}</Tag>
                            </div>
                        </h4>
                    </div>
                    <div class="ivu-notifications-item-desc" v-if="content || $slots.content"><slot name="content">{{ content }}</slot></div>
                    <div class="ivu-notifications-item-time" v-if="time || $slots.time"><slot name="time"><Time :time="time" v-bind="timeProps" /></slot></div>
                </Col>
            </Row>
        </slot>
    </div>
</template>
<script>
    import Row from '../row/row.vue';
    import Col from '../col/col.vue';
    import Avatar from '../avatar/avatar.vue';
    import Tag from '../tag/tag.vue';
    import Time from '../time/time.vue';

    import { oneOf } from '../../utils/assist.js';
    import random from '../../utils/random_str';

    export default {
        name: 'NotificationItem',
        inject: ['NotificationTabInstance', 'NotificationInstance'],
        components: { Row, Col, Avatar, Tag, Time },
        emits: ['on-item-click'],
        props: {
            // Row 的配置，默认垂直居中
            rowProps: {
                type: Object,
                default () {
                    return {
                        type: 'flex',
                        justify: 'center',
                        align: 'middle'
                    };
                }
            },
            // 是否已读，1 和 true 是已读，0 和 false 是未读
            read: {
                type: [Boolean, Number],
                default: false
            },
            // 小图标
            icon: {
                type: String
            },
            // 自定义图标
            customIcon: {
                type: String
            },
            // 小图标颜色
            iconColor: {
                type: String
            },
            iconSize: {
                validator (value) {
                    return oneOf(value, ['small', 'default', 'large']);
                },
                default: 'default'
            },
            // 头像地址
            avatar: {
                type: String
            },
            // 图标或头像类型
            avatarShape: {
                validator (value) {
                    return oneOf(value, ['circle', 'square']);
                },
                default: 'circle'
            },
            // 标题
            title: {
                type: String
            },
            // 内容
            content: {
                type: String
            },
            // 时间，会转为相对时间
            time: {
                type: [Number, Date, String]
            },
            // 相对时间配置
            timeProps: {
                type: Object,
                default () {
                    return {};
                }
            },
            // 标签
            tag: {
                type: String
            },
            // 标签配置
            tagProps: {
                type: Object,
                default () {
                    return {};
                }
            },
            // 点击列表项关闭通知菜单
            clickClose: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                id: random(6)
            }
        },
        computed: {
            classes () {
                return {
                    'ivu-notifications-item-unread': this.read === false || this.read === 0
                };
            },
            contentSpan () {
                return this.icon || this.customIcon || this.avatar || this.$slots.avatar ? 20 : 24;
            },
            iconStyle () {
                let style= {};
                if (this.iconColor) {
                    style = {
                        'background-color': this.iconColor
                    };
                }
                return style;
            }
        },
        methods: {
            handleClick () {
                this.$emit('on-item-click', this.$attrs);
                this.NotificationTabInstance.handleItemClick(this.$attrs);

                if (this.clickClose) {
                    this.NotificationInstance.handleClose();
                }
            },
            addItem () {
                const target = this.NotificationTabInstance;
                target.itemList.push({
                    id: this.id,
                    item: this
                });
            },
            removeItem () {
                const target = this.NotificationTabInstance;
                const index = target.itemList.findIndex(item => item.id === this.id);
                target.itemList.splice(index, 1);
            }
        },
        mounted () {
            this.addItem();
            this.NotificationTabInstance.handleGetItems();
        },
        unmounted () {
            this.NotificationTabInstance.handleGetItems();
        },
        beforeUnmount () {
            this.removeItem();
        }
    };
</script>
