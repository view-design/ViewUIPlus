import type { DefineComponent } from 'vue';

export declare const Card: DefineComponent<{
    /**
     * 是否显示边框，建议在灰色背景下使用
     */
    bordered?: boolean;

    /**
     * 禁用鼠标悬停显示阴影
     */
    'dis-hover'?: boolean;

    /**
     * 卡片阴影，建议在灰色背景下使用
     */
    shadow?: boolean;

    /**
     * 卡片内部间距，单位 px
     */
    padding?: number;

    /**
     * 标题
     */
    title?: string;

    /**
     * 标题前的图标
     */
    icon?: string;

    /**
     * 跳转的链接，支持 vue-router 对象
     */
    to?: string | object;

    /**
     * 路由跳转时，开启 replace 将不会向 history 添加新记录
     */
    replace?: boolean;

    /**
     * 相当于 a 链接的 target 属性
     */
    target?: string;

    /**
     * 同 vue-router append
     */
    append?: boolean;

    'v-slots'?: {
        /**
         * 自定义卡片标题，如果是简单文字，可以使用`&lt;p&gt;`标签包裹
         */
        title?: () => any;

        /**
         * 额外显示的内容，默认位置在右上角
         */
        extra?: () => any;

        /**
         * 卡片主体内容
         */
        default?: () => any;

    };
}>
