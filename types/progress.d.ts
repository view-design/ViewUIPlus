import type { DefineComponent } from 'vue';

export declare const Progress: DefineComponent<{
    /**
     * 百分比
     */
    percent?: number;

    /**
     * 状态，可选值为`normal`、`active`、`wrong`、`success`
     */
    status?: 'normal' | 'active' | 'wrong' | 'success';

    /**
     * 进度条的线宽，单位 px
     */
    'stroke-width'?: number;

    /**
     * 进度条的颜色，支持传入数组，显示为渐变色
     */
    'stroke-color'?: string | any[];

    /**
     * 隐藏数值或状态图标
     */
    'hide-info'?: boolean;

    /**
     * 是否在垂直方向显示
     */
    vertical?: boolean;

    /**
     * 已完成的分段百分比
     */
    'success-percent'?: number;

    /**
     * 百分比是否置于进度条内
     */
    'text-inside'?: boolean;

    'v-slots'?: {
        /**
         * 自定义显示状态内容
         */
        default?: () => any;

    };
}>
