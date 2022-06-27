import type { DefineComponent } from 'vue';

export declare const Trend: DefineComponent<{
    /**
     * 上升下降标识，可选值为 up 或 down
     */
    flag?: string;

    /**
     * 是否以彩色显示
     */
    colorful?: boolean;

    /**
     * 是否颜色反转
     */
    'reverse-color'?: boolean;

    /**
     * 文字是否显示颜色（受 colorful 和 reverse-color 的影响）
     */
    'text-color'?: boolean;

}>
