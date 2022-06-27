import type { DefineComponent } from 'vue';

export declare const Notification: DefineComponent<{
    /**
     * 图标上的消息总数
     */
    count?: number;

    /**
     * 是否根基 Tab 的 count 自动计算 count，开启，则 count 无效
     */
    'auto-count'?: boolean;

    /**
     * Tab 的 count 是纯文本显示，还是 Badge 显示，可选值为 text 或 badge
     */
    'count-type'?: string;

    /**
     * 图标 (铃铛)，也有同名 slot
     */
    icon?: string;

    /**
     * 是否将弹层放置于 body 内
     */
    transfer?: boolean;

    /**
     * 弹窗的展开方向，支持 12 个方向
     */
    placement?: string;

    /**
     * 额外的 Badge 配置
     */
    'badge-props'?: object;

    /**
     * 点击清空按钮后关闭通知菜单
     */
    'clear-close'?: boolean;

    /**
     * 当前显示哪一个面板，基于 Tab 的 name
     */
    tab?: string;

    /**
     * 开启后，宽度是100%而不是默认的300px，在移动端等环境下使用较好
     */
    wide?: boolean;

    /**
     * 默认文案
     */
    locale?: object;

    /**
     * 点击清空时触发，返回 tab 内容，包含 name 和 title
     */
    onOnClear?: (event?: any) => any;

    /**
     * 点击加载更多时触发，返回 tab 内容
     */
    onOnLoadMore?: (event?: any) => any;

    /**
     * 切换页签时触发，返回 tab 内容
     */
    onOnTabChange?: (event?: any) => any;

    /**
     * 点击 item 项时触发，返回 tab 和 item（其中 item 返回的是 attrs 而不是 props）
     */
    onOnItemClick?: (event?: any) => any;

    /**
     * 菜单显示状态改变时调用
     */
    onOnVisibleChange?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义铃铛
         */
        icon?: () => any;

        /**
         * 底部附加信息，常见有设置、查看全部等功能
         */
        extra?: () => any;

    };
}>

export declare const NotificationTab: DefineComponent<{
    /**
     * 当前 tab 的消息总数
     */
    count?: number;

    /**
     * 消息分类的页签标题，必填
     */
    title?: string;

    /**
     * 当前 tab 标识
     */
    name?: string;

    /**
     * 没有通知的文案
     */
    'empty-text'?: string;

    /**
     * 没有通知的图标
     */
    'empty-image'?: string;

    /**
     * 已加载完所有消息
     */
    'loaded-all'?: boolean;

    /**
     * 是否显示已加载完所有消息
     */
    'show-loaded-all'?: boolean;

    /**
     * 当前 Tab 的加载状态
     */
    loading?: boolean;

    /**
     * 是否允许滚动到底部自动加载
     */
    'scroll-to-load'?: boolean;

    /**
     * 是否显示清空按钮
     */
    'show-clear'?: boolean;

    /**
     * 是否显示清空按钮前的图标
     */
    'show-clear-icon'?: boolean;

    'v-slots'?: {
        /**
         * 顶部，比如：这些人最近关注了你
         */
        top?: () => any;

        /**
         * 自定义通知为空时的内容
         */
        empty?: () => any;

        /**
         * 自定义加载中的内容
         */
        loading?: () => any;

        /**
         * 自定义加载更多的内容
         */
        'load-more'?: () => any;

        /**
         * 自定义已完成加载的内容
         */
        'loaded-all'?: () => any;

        /**
         * 自定义清空全部的内容
         */
        clear?: () => any;

    };
}>

export declare const NotificationItem: DefineComponent<{
    /**
     * Row 的配置，默认垂直居中
     */
    'row-props'?: object;

    /**
     * 是否已读，1 和 true 是已读，0 和 false 是未读
     */
    read?: boolean |  number;

    /**
     * 小图标
     */
    icon?: string;

    /**
     * 自定义小图标
     */
    'custom-icon'?: string;

    /**
     * 小图标的颜色
     */
    'icon-color'?: string;

    /**
     * 小图标尺寸，可选值为 small、default、large
     */
    'icon-size'?: string;

    /**
     * 头像地址
     */
    avatar?: string;

    /**
     * 头像形状，可选值为 circle 或 square
     */
    'avatar-shape'?: string;

    /**
     * 标题
     */
    title?: string;

    /**
     * 内容
     */
    content?: string;

    /**
     * 时间，会转为相对时间
     */
    time?: number |  Date |  string;

    /**
     * 相对时间配置
     */
    'time-props'?: object;

    /**
     * 标签
     */
    tag?: string;

    /**
     * 标签配置
     */
    'tag-props'?: object;

    /**
     * 点击列表项关闭通知菜单
     */
    'click-close'?: boolean;

    /**
     * 点击 item 项时触发，返回 item（item 返回的是 attrs 而不是 props）
     */
    onOnItemClick?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 如果想完全自定义 NotificationItem 内容，可以使用默认的 slot，否则不建议覆盖此 slot 内容
         */
        default?: () => any;

        /**
         * 自定义标题
         */
        title?: () => any;

        /**
         * 自定义内容
         */
        content?: () => any;

        /**
         * 自定义时间
         */
        time?: () => any;

    };
}>
