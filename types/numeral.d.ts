import type { DefineComponent } from 'vue';

export declare const Numeral: DefineComponent<{
    /**
     * 数值, 也可以直接使用 v-model
     */
    'model-value'?: number |  string;

    /**
     * 格式， [查看所有格式](https://run.iviewui.com/preview/d7868Je4)
     */
    format?: string;

    /**
     * 前缀
     */
    prefix?: string |  number;

    /**
     * 后缀
     */
    suffix?: string |  number;

    /**
     * 格式化好时触发，返回格式化后的内容
     */
    onOnChange?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义前缀
         */
        prefix?: () => any;

        /**
         * 自定义后缀
         */
        suffix?: () => any;

    };
}>
