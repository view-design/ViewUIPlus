export declare class Result {
    /**
     * 类型，不同类型自带对应的图标，可选值为 success 或 error
     */
    type: 'success' | 'error';

    /**
     * 标题
     */
    title: string;

    /**
     * 结果描述
     */
    desc: string;

    /**
     * 补充信息，有默认的灰色背景
     */
    extra: string;

    $slots: {
        /**
         * 自定义标题
         */
        title: [];

        /**
         * 自定义结果描述
         */
        desc: [];

        /**
         * 自定义补充信息
         */
        extra: [];

        /**
         * 操作建议，推荐放置跳转链接，按钮组等
         */
        actions: [];

    };
}
