import type { DefineComponent } from 'vue';

export declare const Switch: DefineComponent<{
    /**
     * 指定当前是否选中，可以使用 v-model 双向绑定数据
     */
    'model-value'?: boolean;

    /**
     * 开关的尺寸，可选值为`large`、`small`、`default`或者不写。建议开关如果使用了2个汉字的文字，使用 large。
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 禁用开关
     */
    disabled?: boolean;

    /**
     * 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
     */
    'true-value'?: string |  number |  boolean;

    /**
     * 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
     */
    'false-value'?: string |  number |  boolean;

    /**
     * 自定义打开时的背景色
     */
    'true-color'?: string;

    /**
     * 自定义关闭时的背景色
     */
    'false-color'?: string;

    /**
     * 返回 Promise 可以阻止切换
     */
    'before-change'?: Function;

    /**
     * 加载中的开关
     */
    loading?: boolean;

    /**
     * 开关变化时触发，返回当前的状态
     */
    onOnChange?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义显示打开时的内容
         */
        open?: () => any;

        /**
         * 自定义显示关闭时的内容
         */
        close?: () => any;

    };
}>
