import type { DefineComponent } from 'vue';

export declare const Collapse: DefineComponent<{
    /**
     * 当前激活的面板的 name，可以使用 v-model 双向绑定
     */
    'model-value'?: any[];

    /**
     * 是否开启手风琴模式，开启后每次至多展开一个面板
     */
    accordion?: boolean;

    /**
     * 是否开启简洁模式
     */
    simple?: boolean;

    /**
     * 切换面板时触发，返回当前已展开的面板的 key，格式为数组
     */
    onOnChange?: (event?: any) => any;

}>

export declare const Panel: DefineComponent<{
    /**
     * 当前面板的 name，与 Collapse的 `value` 对应，不填为索引值
     */
    name?: string;

    /**
     * 隐藏箭头
     */
    'hide-arrow'?: boolean;

    'v-slots'?: {
        /**
         * 面板头内容
         */
        default?: () => any;

        /**
         * 描述内容
         */
        content?: () => any;

    };
}>
