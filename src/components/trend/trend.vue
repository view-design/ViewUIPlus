<template>
    <div class="ivu-trend" :class="classes">
        <span class="ivu-trend-text"><slot></slot></span>
        <Icon :type="flagType" class="ivu-trend-flag" />
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';

    import { oneOf } from '../../utils/assist';

    export default {
        name: 'Trend',
        components: { Icon },
        props: {
            // 上升下降标识
            flag: {
                validator (value) {
                    return oneOf(value, ['up', 'down']);
                }
            },
            // 是否以彩色显示
            colorful: {
                type: Boolean,
                default: true
            },
            // 是否颜色反转
            reverseColor: {
                type: Boolean,
                default: false
            },
            // 数字是否显示颜色
            textColor: {
                type: Boolean,
                default: false
            },
            // 是否显示原生的 title，暂不提供
            showTitle: {
                type: [Boolean, String],
                default: false
            }
        },
        computed: {
            classes () {
                return [
                    {
                        ['ivu-trend-up']: this.flag === 'up',
                        ['ivu-trend-down']: this.flag === 'down',
                        ['ivu-trend-reverse-color']: this.reverseColor,
                        ['ivu-trend-colorful']: this.colorful,
                        ['ivu-trend-text-color']: this.textColor
                    }
                ];
            },
            flagType () {
                return this.flag === 'up' ? 'md-arrow-dropup' : this.flag === 'down' ? 'md-arrow-dropdown' : '';
            }
        }
    };
</script>
