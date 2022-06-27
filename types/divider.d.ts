import type { DefineComponent } from 'vue';

export declare const Divider: DefineComponent<{
    /**
     * 水平还是垂直类型，可选值为 horizontal 或 vertical
     */
    type?: 'horizontal' | 'vertical';

    /**
     * 分割线标题的位置，可选值为 left、right 或 center
     */
    orientation?: 'left' | 'right' | 'center';

    /**
     * 是否虚线
     */
    dashed?: boolean;

    /**
     * 文字是否显示为普通正文样式
     */
    plain?: boolean;

    /**
     * 尺寸，可选值为 small 或 default
     */
    size?: string;

}>
