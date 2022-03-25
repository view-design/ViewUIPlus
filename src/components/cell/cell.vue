<template>
    <div :class="classes">
        <a
            v-if="to"
            :href="linkUrl"
            :target="target"
            class="ivu-cell-link"
            @click.exact="handleClickItem($event, false)"
            @click.ctrl="handleClickItem($event, true)"
            @click.meta="handleClickItem($event, true)">
            <CellItem :title="title" :label="label" :extra="extra">
                <template #icon><slot name="icon"></slot></template>
                <template #default><slot></slot></template>
                <template #extra><slot name="extra"></slot></template>
                <template #label><slot name="label"></slot></template>
            </CellItem>
        </a>
        <div class="ivu-cell-link" v-else @click="handleClickItem">
            <CellItem :title="title" :label="label" :extra="extra">
                <template #icon><slot name="icon"></slot></template>
                <template #default><slot></slot></template>
                <template #extra><slot name="extra"></slot></template>
                <template #label><slot name="label"></slot></template>
            </CellItem>
        </div>
        <div class="ivu-cell-arrow" v-if="to">
            <slot name="arrow">
                <Icon :type="arrowType" :custom="customArrowType" :size="arrowSize" />
            </slot>
        </div>
    </div>
</template>
<script>
    import CellItem from './cell-item.vue';
    import Icon from '../icon/icon.vue';
    import mixinsLink from '../../mixins/link';
    import globalConfig from '../../mixins/globalConfig';

    const prefixCls = 'ivu-cell';

    export default {
        name: 'Cell',
        inject: ['CellGroupInstance'],
        mixins: [ mixinsLink, globalConfig ],
        components: { CellItem, Icon },
        props: {
            name: {
                type: [String, Number]
            },
            title: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            extra: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-selected`]: this.selected,
                        [`${prefixCls}-with-link`]: this.to
                    }
                ];
            },
            // 3.4.0, global setting customArrow 有值时，arrow 赋值空
            arrowType () {
                const config = this.globalConfig;
                let type = 'ios-arrow-forward';

                if (config) {
                    if (config.cell.customArrow) {
                        type = '';
                    } else if (config.cell.arrow) {
                        type = config.cell.arrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            customArrowType () {
                const config = this.globalConfig;
                let type = '';

                if (config) {
                    if (config.cell.customArrow) {
                        type = config.cell.customArrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            arrowSize () {
                const config = this.globalConfig;
                let size = '';

                if (config) {
                    if (config.cell.arrowSize) {
                        size = config.cell.arrowSize;
                    }
                }
                return size;
            }
        },
        methods: {
            handleClickItem (event, new_window) {
                this.CellGroupInstance.handleClick(this.name);
                this.handleCheckClick(event, new_window);
            }
        }
    };
</script>
