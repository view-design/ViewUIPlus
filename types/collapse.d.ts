export declare class Collapse {
    /**
     * 当前激活的面板的 name，可以使用 v-model 双向绑定
     */
    'model-value': [];

    /**
     * 是否开启手风琴模式，开启后每次至多展开一个面板
     */
    accordion: boolean;

    /**
     * 是否开启简洁模式
     */
    simple: boolean;

    /**
     * 切换面板时触发，返回当前已展开的面板的 key，格式为数组
     */
    $emit(eventName: 'on-change'): this;

}

export declare class Panel {
    /**
     * 当前面板的 name，与 Collapse的 `value` 对应，不填为索引值
     */
    name: string;

    /**
     * 隐藏箭头
     */
    'hide-arrow': boolean;

    $slots: {
        /**
         * 面板头内容
         */
        '': [];

        /**
         * 描述内容
         */
        content: [];

    };
}
