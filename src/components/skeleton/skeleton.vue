<template>
    <div :class="classes" v-if="loading" v-bind="$attrs">
        <slot name="template" v-if="loading">
            <Row>
                <Col flex="0" v-if="showAvatar">
                    <SkeletonItem
                        :type="avatarType"
                        :size="avatarSize"
                        :animated="animated"
                        style="margin-right:16px"
                    />
                </Col>
                <Col flex="1">
                    <SkeletonItem
                        v-for="row in rowsCount"
                        :key="row"
                        :class="rowClasses"
                        :style="rowStyle(row)"
                        :animated="animated"
                        type="rect"
                        size="small"
                        :width="rowWidth(row)"
                        height="16px"
                        block
                    />
                </Col>
            </Row>
        </slot>
    </div>
    <slot v-else></slot>
</template>

<script>
    import { oneOf } from '../../utils/assist';
    import SkeletonItem from '../skeleton-item';
    import Row from '../row';
    import Col from '../col';

    const prefixCls = 'ivu-skeleton';

    export default {
        name: 'Skeleton',
        components: { SkeletonItem, Row, Col },
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
        computed: {
            classes() {
                return {
                    [prefixCls]: true
                };
            },
            rows() {
                if (typeof this.paragraph === 'number') {
                    return this.paragraph;
                }
                return this.paragraph.rows;
            },
            rowsCount() {
                return this.rows + (this.showTitle ? 2 : 1);
            },
            rowWidth() {
                return (row) => {
                    return this.showTitle && row === 1
                        ? (this.titleWidth || '38%')
                        : (row === this.rowsCount ? '62%' : '100%');
                };
            },
            rowClasses() {
                return {
                    [prefixCls + '-item-round']: this.round
                };
            },
            rowStyle() {
                return (row) => {
                    const styleObj = {};
                    if (typeof this.paragraph === 'object') {
                        if (typeof this.paragraph.width === 'string') {
                            styleObj.width = this.paragraph.width;
                        }
                        if (typeof this.paragraph.width === 'number') {
                            styleObj.width = `${this.paragraph.width}px`;
                        }
                        if (Array.isArray(this.paragraph.width) && this.paragraph.width[row-1]) {
                            if (typeof this.paragraph.width[row-1] === 'string') {
                                styleObj.width = this.paragraph.width[row-1];
                            }
                            styleObj.width = `${this.paragraph.width[row-1]}px`;
                        }
                    }
                    if (this.showTitle && row === 1) {
                        styleObj.marginBottom = '28px';
                    }
                    return styleObj;
                }
            },
            showTitle() {
                return Boolean(this.title);
            },
            titleWidth() {
                if (typeof this.title === 'object' && this.title.width) {
                    return typeof this.title.width === 'string' ? this.title.width : `${this.title.width}px`;
                }
                return null;
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
        }
    }
</script>
