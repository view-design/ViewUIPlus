import type { DefineComponent } from 'vue';

export declare const PageHeader: DefineComponent<{
    /**
     * 自定义标题文字
     */
    title?: string;

    /**
     * 是否显示返回按钮
     */
    back?: boolean;

    /**
     * 自定义 logo
     */
    logo?: string;

    /**
     * 操作区，位于 title 行的行尾
     */
    action?: string;

    /**
     * 内容区
     */
    content?: string;

    /**
     * 额外内容区，位于 content 的右侧
     */
    extra?: string;

    /**
     * 面包屑数据，可支配的属性有：to、replace、target、title，详见 View UI Plus Breadcrumb 组件。
     */
    'breadcrumb-list'?: any[];

    /**
     * 是否关闭面包屑
     */
    'hidden-breadcrumb'?: boolean;

    /**
     * Tabs 选项卡数据，可支配属性有：label、name。
     */
    'tab-list'?: any[];

    /**
     * 当前高亮的 tab 项
     */
    'tab-active-key'?: string;

    /**
     * 是否定宽，开启后，最大宽度为 1200px，否则自适应宽度
     */
    wide?: boolean;

    /**
     * 切换 Tabs 选项卡时触发
     */
    onOnTabChange?: (event?: any) => any;

    /**
     * 点击返回按钮时触发
     */
    onOnBack?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义标题
         */
        title?: () => any;

        /**
         * 自定义返回区域
         */
        back?: () => any;

        /**
         * 自定义 logo
         */
        logo?: () => any;

        /**
         * 自定义操作区
         */
        action?: () => any;

        /**
         * 自定义内容区
         */
        content?: () => any;

        /**
         * 自定义额外内容区
         */
        extra?: () => any;

    };
}>
