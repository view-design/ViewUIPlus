import type { DefineComponent } from 'vue';

export declare const Circle: DefineComponent<{
    /**
     * 百分比
     */
    percent?: number;

    /**
     * 图表的宽度和高度，单位 px
     */
    size?: number;

    /**
     * 进度环顶端的形状，可选值为`square`（方）和`round`（圆）
     */
    'stroke-linecap'?: 'square' | 'round';

    /**
     * 进度环的线宽，单位 px
     */
    'stroke-width'?: number;

    /**
     * 进度环的颜色，4.0.0 版本开始支持传入数组显示为渐变色
     */
    'stroke-color'?: string | any[];

    /**
     * 进度环背景的线宽，单位 px
     */
    'trail-width'?: number;

    /**
     * 进度环背景的颜色
     */
    'trail-color'?: string;

    /**
     * 是否显示为仪表盘
     */
    dashboard?: boolean;

    'v-slots'?: {
        /**
         * 自定义显示中间内容，内容默认垂直居中
         */
        default?: () => any;

    };
}>
