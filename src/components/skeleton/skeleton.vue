<template>
    <div
        v-if="loading"
        v-bind="$attrs"
        :class="[prefixCls, {[prefixCls + '-with-title']: showTitle, [prefixCls + '-with-avatar']: showAvatar}]"
    >
        <slot name="template" v-if="loading">
            <Row>
                <Col flex="0" v-if="showAvatar">
                    <SkeletonItem
                        :type="avatarType"
                        :size="avatarSize"
                        :animated="animated"
                        :class="prefixCls + '-item-avatar'"
                    />
                </Col>
                <Col flex="1">
                    <SkeletonItem
                        v-for="row in rowsCount"
                        :key="row"
                        :class="{[prefixCls + '-item-round']: round, [prefixCls + '-item-title']: showTitle && row === 1}"
                        :animated="animated"
                        :width="rowWidth(row)"
                        height="16px"
                        block
                    />
                </Col>
            </Row>
        </slot>
    </div>
    <slot v-else v-bind="$attrs"></slot>
</template>

<script>
    import { oneOf } from '../../utils/assist';
    import SkeletonItem from './skeleton-item.vue';
    import Row from '../row/row.vue';
    import Col from '../col/col.vue';

    const prefixCls = 'ivu-skeleton';

    export default {
        name: 'Skeleton',
        components: { SkeletonItem, Row, Col },
        provide () {
            return {
                SkeletonInstance : this
            };
        },
        props: {
            animated: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            paragraph: {
                validator (value) {
                    if (typeof value === 'number' ) {
                        return value >= 1;
                    }
                    return typeof value.rows === 'number' && value.rows >= 1;
                },
                type: [Number, Object],
                default: 3
            },
            title: {
                validator(value) {
                    if (typeof value === 'object') {
                        if (value.width) return ['number', 'string'].includes(typeof value.width);
                    }
                    return true;
                },
                type: [Boolean, Object],
                default: true
            },
            avatar: {
                validator(value) {
                    if (typeof value === 'object') {
                        if (value.type) return oneOf(value.type, ['circle', 'square']);
                        if (value.size) return oneOf(value.size, ['small', 'large', 'default']);
                    }
                    return true;
                },
                type: [Boolean, Object],
                default: false
            }
        },
        data() {
            return {
                prefixCls
            };
        },
        computed: {
            rows() {
                if (typeof this.paragraph === 'number') {
                    return this.paragraph;
                }
                return this.paragraph.rows;
            },
            rowsCount() {
                return this.rows + Number(this.showTitle);
            },
            showTitle() {
                return Boolean(this.title);
            },
            titleWidth() {
                if (typeof this.title === 'object' && this.title.width) {
                    return typeof this.title.width === 'string' ? this.title.width : `${this.title.width}px`;
                }
                return '';
            },
            showAvatar() {
                return Boolean(this.avatar);
            },
            avatarType() {
                if (typeof this.avatar === 'object' && this.avatar.type) return this.avatar.type;
                return 'circle';
            },
            avatarSize() {
                if (typeof this.avatar === 'object' && this.avatar.size) return this.avatar.size;
                return !this.$VIEWUI || this.$VIEWUI.size === '' ? 'default' : this.$VIEWUI.size;
            }
        },
        methods: {
            rowWidth(row) {
                if (this.showTitle && row === 1) {
                    return this.titleWidth || '38%';
                }
                if (typeof this.paragraph === 'object') {
                    if (typeof this.paragraph.width === 'string') {
                        return this.paragraph.width;
                    }
                    if (typeof this.paragraph.width === 'number') {
                        return `${this.paragraph.width}px`;
                    }
                    const index = row - 1 - Number(this.showTitle);
                    if (Array.isArray(this.paragraph.width) && this.paragraph.width[index]) {
                        if (typeof this.paragraph.width[index] === 'number') {
                            return `${this.paragraph.width[index]}px`;
                        } else {
                            return this.paragraph.width[index];
                        }
                    }
                }
                return row === this.rowsCount ? '62%' : '100%';
            }
        }
    }
</script>
