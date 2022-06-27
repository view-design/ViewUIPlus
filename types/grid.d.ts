import type { DefineComponent } from 'vue';

export declare const Grid: DefineComponent<{
    /**
     * 最大支持的列数
     */
    col?: number;

    /**
     * 是否宽高一致
     */
    square?: boolean;

    /**
     * 内容的间距
     */
    padding?: string;

    /**
     * 内容是否垂直居中，GridItem 需有高度
     */
    center?: boolean;

    /**
     * 是否显示边框
     */
    border?: boolean;

    /**
     * 是否开启鼠标悬停效果
     */
    hover?: boolean;

}>

export declare const GridItem: DefineComponent<{
    'v-slots'?: {
        /**
         * 默认插槽内容
         */
        default?: () => any;

    };
}>
