export declare class GlobalFooter {
    /**
     * 链接数据，各项内容见下表
     */
    links: [];

    /**
     * 版权信息
     */
    copyright: string;

    $slots: {
        /**
         * 自定义链接区域
         */
        links: [];

        /**
         * 自定义版权内容
         */
        copyright: [];

    };
}

export declare class Links {
    /**
     * 链接地址
     */
    href: string;

    /**
     * 是否新窗口打开
     */
    'blank-target': boolean;

    /**
     * 指定 key
     */
    key: string;

    /**
     * 内容
     */
    title: string;

    /**
     * 图标 type
     */
    icon: string;

    /**
     * 自定义图标
     */
    'custom-icon': string;

}
