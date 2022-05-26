export declare class NumberInfo {
    /**
     * 标题
     */
    title: string;

    /**
     * 子标题
     */
    'sub-title': string;

    /**
     * 总量
     */
    total: string |  number;

    /**
     * 子总量
     */
    'sub-total': string |  number;

    /**
     * 增加状态，可选值为 up 或 down
     */
    status: string;

    /**
     * 设置数字和描述之间的间距，单位：px
     */
    gap: string |  number;

    $slots: {
        /**
         * 自定义标题
         */
        title: [];

        /**
         * 自定义子标题
         */
        subTitle: [];

        /**
         * 自定义总量
         */
        total: [];

        /**
         * 自定义子总量
         */
        subTotal: [];

    };
}
