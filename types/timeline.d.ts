import type { DefineComponent } from 'vue';

export declare const Timeline: DefineComponent<{
    /**
     * 指定是否最后一个节点为幽灵节点
     */
    pending?: boolean;

}>

export declare const TimelineItem: DefineComponent<{
    /**
     * 圆圈颜色，可选值为`blue`、`red`、`green`，或自定义色值
     */
    color?: 'blue' | 'red' | 'green' | string;

    'v-slots'?: {
        /**
         * 自定义时间轴点内容
         */
        dot?: () => any;

        /**
         * 基本内容
         */
        default?: () => any;

    };
}>
