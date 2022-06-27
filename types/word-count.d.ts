import type { DefineComponent } from 'vue';

export declare const WordCount: DefineComponent<{
    /**
     * 统计的文本内容
     */
    'model-value'?: string |  number;

    /**
     * 总字数
     */
    total?: number;

    /**
     * 是否隐藏总字数
     */
    'hide-total'?: boolean;

    /**
     * 当超出 total 时，是否显示为溢出的个数
     */
    overflow?: boolean;

    /**
     * 是否以圆环的形式显示
     */
    circle?: boolean;

    /**
     * circle 模式下的尺寸
     */
    size?: string |  number;

    'v-slots'?: {
        /**
         * 前缀
         */
        prefix?: () => any;

        /**
         * 溢出时的前缀
         */
        'prefix-overflow'?: () => any;

        /**
         * 后缀
         */
        suffix?: () => any;

        /**
         * 溢出时的后缀
         */
        'suffix-overflow'?: () => any;

        /**
         * 内容长度，支持 slot-scope， 参数：length
         */
        length?: () => any;

        /**
         * 总字数，支持 slot-scope，参数：total
         */
        total?: () => any;

        /**
         * 自定义分隔符
         */
        separator?: () => any;

    };
}>
