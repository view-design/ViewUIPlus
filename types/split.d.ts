export declare class Split {
    /**
     * 面板位置，可以是 0~1 代表百分比，或具体数值的像素，可用 v-model 双向绑定
     */
    'model-value': number | string;

    /**
     * 类型，可选值为 horizontal 或 vertical
     */
    mode: 'horizontal' | 'vertical';

    /**
     * 最小阈值
     */
    min: number | string;

    /**
     * 最大阈值
     */
    max: number | string;

    /**
     * 拖拽开始
     */
    $emit(eventName: 'on-move-start'): this;

    /**
     * 拖拽中
     */
    $emit(eventName: 'on-moving'): this;

    /**
     * 拖拽结束
     */
    $emit(eventName: 'on-move-end'): this;

    $slots: {
        /**
         * mode 为 horizontal 时可用，左边面板
         */
        left: [];

        /**
         * mode 为 horizontal 时可用，右边面板
         */
        right: [];

        /**
         * mode 为 vertical 时可用，上边面板
         */
        top: [];

        /**
         * mode 为 vertical 时可用，下边面板
         */
        bottom: [];

        /**
         * 自定义分割拖拽节点
         */
        trigger: [];

    };
}
