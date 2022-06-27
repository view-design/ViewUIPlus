import type { DefineComponent } from 'vue';

export declare const Result: DefineComponent<{
    /**
     * 类型，不同类型自带对应的图标，可选值为 `success`、`error`、`warning`
     */
    type?: 'success' | 'error' | 'warning';

    /**
     * 标题
     */
    title?: string;

    /**
     * 结果描述
     */
    desc?: string;

    /**
     * 补充信息，有默认的灰色背景
     */
    extra?: string;

    'v-slots'?: {
        /**
         * 自定义标题
         */
        title?: () => any;

        /**
         * 自定义结果描述
         */
        desc?: () => any;

        /**
         * 自定义补充信息
         */
        extra?: () => any;

        /**
         * 操作建议，推荐放置跳转链接，按钮组等
         */
        actions?: () => any;

    };
}>
