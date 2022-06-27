import type { DefineComponent } from 'vue';

export declare const Spin: DefineComponent<{
    /**
     * 用于动画控制显/隐
     */
    show?: boolean;

    /**
     * Spin尺寸，可选值为`large`和`small`或者不设置
     */
    size?: '' | 'large' | 'small';

    /**
     * 是否固定，需要父级有`relative`或`absolute`
     */
    fix?: boolean;

    'v-slots'?: {
        /**
         * 自定义 Spin 的内容，设置slot后，默认的样式不生效
         */
        default?: () => any;

    };
}>
