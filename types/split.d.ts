import type { DefineComponent } from 'vue';

export declare const Split: DefineComponent<{
    /**
     * 面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定
     */
    'model-value'?: number | string;

    /**
     * 类型，可选值为 horizontal 或 vertical
     */
    mode?: 'horizontal' | 'vertical';

    /**
     * 最小阈值
     */
    min?: number | string;

    /**
     * 最大阈值
     */
    max?: number | string;

    /**
     * 拖拽开始
     */
    onOnMoveStart?: (event?: any) => any;

    /**
     * 拖拽中
     */
    onOnMoving?: (event?: any) => any;

    /**
     * 拖拽结束
     */
    onOnMoveEnd?: (event?: any) => any;

    'v-slots'?: {
        /**
         * mode 为 horizontal 时可用，左边面板
         */
        left?: () => any;

        /**
         * mode 为 horizontal 时可用，右边面板
         */
        right?: () => any;

        /**
         * mode 为 vertical 时可用，上边面板
         */
        top?: () => any;

        /**
         * mode 为 vertical 时可用，下边面板
         */
        bottom?: () => any;

        /**
         * 自定义分割拖拽节点
         */
        trigger?: () => any;

    };
}>
