import type { DefineComponent } from 'vue';

export declare const List: DefineComponent<{
    /**
     * 是否显示边框
     */
    border?: boolean;

    /**
     * 设置 ListItem 布局, 可选值为 horizontal（横排）或 vertical（竖直）
     */
    'item-layout'?: string;

    /**
     * 列表头部
     */
    header?: string;

    /**
     * 列表底部
     */
    footer?: string;

    /**
     * 列表是否正在加载
     */
    loading?: boolean;

    /**
     * 列表尺寸，可选值为 small、large、default
     */
    size?: string;

    /**
     * 是否展示分割线
     */
    split?: boolean;

    'v-slots'?: {
        /**
         * 自定义列表头部
         */
        header?: () => any;

        /**
         * 自定义列表底部
         */
        footer?: () => any;

        /**
         * 自定义加载中
         */
        loading?: () => any;

    };
}>

export declare const ListItemMeta: DefineComponent<{
    /**
     * 列表元素的图标
     */
    avatar?: string;

    /**
     * 列表元素的标题
     */
    title?: string;

    /**
     * 列表元素的描述内容
     */
    description?: string;

    'v-slots'?: {
        /**
         * 自定义列表元素的图标
         */
        avatar?: () => any;

        /**
         * 自定义列表元素的标题
         */
        title?: () => any;

        /**
         * 自定义列表元素的描述内容
         */
        description?: () => any;

    };
}>

export declare const ListItem: DefineComponent<{
    'v-slots'?: {
        /**
         * 列表操作组，根据 item-layout 的不同, 位置在卡片底部或者最右侧
         */
        action?: () => any;

        /**
         * 额外内容, 通常用在 item-layout 为 vertical 的情况下, 展示右侧内容; horizontal 展示在列表元素最右侧
         */
        extra?: () => any;

    };
}>
