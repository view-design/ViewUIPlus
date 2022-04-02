<template>
    <li :class="classes">
        {{ data.label }}
        <Icon :type="arrowType" :custom="customArrowType" :size="arrowSize" v-if="showArrow" />
        <i v-if="showLoading" class="ivu-icon ivu-icon-ios-loading ivu-load-loop ivu-cascader-menu-item-loading"></i>
    </li>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import globalConfig from '../../mixins/globalConfig';

    export default {
        name: 'Casitem',
        components: { Icon },
        mixins: [ globalConfig ],
        props: {
            data: Object,
            prefixCls: String,
            tmpItem: Object
        },
        computed: {
            classes () {
                return [
                    `${this.prefixCls}-menu-item`,
                    {
                        [`${this.prefixCls}-menu-item-active`]: this.tmpItem.value === this.data.value,
                        [`${this.prefixCls}-menu-item-disabled`]: this.data.disabled
                    }
                ];
            },
            showArrow () {
                return (this.data.children && this.data.children.length) || ('loading' in this.data && !this.data.loading);
            },
            showLoading () {
                return 'loading' in this.data && this.data.loading;
            },
            // 3.4.0, global setting customArrow 有值时，arrow 赋值空
            arrowType () {
                const config = this.globalConfig;
                let type = 'ios-arrow-forward';

                if (config) {
                    if (config.cascader.customItemArrow) {
                        type = '';
                    } else if (config.cascader.itemArrow) {
                        type = config.cascader.itemArrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            customArrowType () {
                const config = this.globalConfig;
                let type = '';

                if (config) {
                    if (config.cascader.customItemArrow) {
                        type = config.cascader.customItemArrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            arrowSize () {
                const config = this.globalConfig;
                let size = '';

                if (config) {
                    if (config.cascader.itemArrowSize) {
                        size = config.cascader.itemArrowSize;
                    }
                }
                return size;
            }
        }
    };
</script>
