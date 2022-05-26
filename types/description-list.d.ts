export declare class DescriptionList {
    /**
     * 布局方式，可选值为 `horizontal` 或 `vertical`
     */
    layout: string;

    /**
     * 列表标题
     */
    title: string;

    /**
     * 列表项间距，单位为 `px`
     */
    gutter: number;

    /**
     * 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则（见下表）决定，可选值为 `1`、`2`、`3`、`4`
     */
    col: number;

    $slots: {
        /**
         * 自定义列标题
         */
        title: [];

        /**
         * 默认
         */
        default: [];

    };
}

export declare class Description {
    /**
     * 列表项标题
     */
    term: string;

    $slots: {
        /**
         * 自定义列表项标题
         */
        term: [];

        /**
         * 默认
         */
        default: [];

    };
}
