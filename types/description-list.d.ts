import type { DefineComponent } from 'vue';

export declare const DescriptionList: DefineComponent<{
    /**
     * 布局方式，可选值为 `horizontal` 或 `vertical`
     */
    layout?: string;

    /**
     * 列表标题
     */
    title?: string;

    /**
     * 列表项间距，单位为 `px`
     */
    gutter?: number;

    /**
     * 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则（见下表）决定，可选值为 `1`、`2`、`3`、`4`
     */
    col?: number;

    'v-slots'?: {
        /**
         * 自定义列标题
         */
        title?: () => any;

        /**
         * 默认
         */
        default?: () => any;

    };
}>

export declare const Description: DefineComponent<{
    /**
     * 列表项标题
     */
    term?: string;

    'v-slots'?: {
        /**
         * 自定义列表项标题
         */
        term?: () => any;

        /**
         * 默认
         */
        default?: () => any;

    };
}>
