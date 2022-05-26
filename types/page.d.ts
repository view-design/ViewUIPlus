export declare class Page {
    /**
     * 当前页码, 可以使用 v-model来进行双向绑定
     */
    'model-value': number;

    /**
     * 数据总数
     */
    total: number;

    /**
     * 每页条数
     */
    'page-size': number;

    /**
     * 每页条数切换的配置
     */
    'page-size-opts': [];

    /**
     * 条数切换弹窗的展开方向，可选值为 `bottom` 和 `top`
     */
    placement: string;

    /**
     * 可选值为`small`（迷你版）、`default`（默认）或不填
     */
    size: string;

    /**
     * 简洁版
     */
    simple: boolean;

    /**
     * 显示总数
     */
    'show-total': boolean;

    /**
     * 显示电梯，可以快速切换到某一页
     */
    'show-elevator': boolean;

    /**
     * 显示分页，用来改变`page-size`
     */
    'show-sizer': boolean;

    /**
     * 自定义 class 名称
     */
    'class-name': string;

    /**
     * 自定义 style 样式
     */
    styles: object;

    /**
     * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
     */
    transfer: boolean;

    /**
     * 替代图标显示的上一页文字
     */
    'prev-text': string;

    /**
     * 替代图标显示的下一页文字
     */
    'next-text': string;

    /**
     * 是否禁用
     */
    disabled: boolean;

    /**
     * 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能
     */
    'events-enabled': boolean;

    /**
     * 页码改变的回调，返回改变后的页码
     */
    $emit(eventName: 'on-change'): this;

    /**
     * 切换每页条数时的回调，返回切换后的每页条数
     */
    $emit(eventName: 'on-page-size-change'): this;

    /**
     * 切换上一页时触发，返回切换后的页码
     */
    $emit(eventName: 'on-prev'): this;

    /**
     * 切换下一页时触发，返回切换后的页码
     */
    $emit(eventName: 'on-next'): this;

    $slots: {
        /**
         * 自定义显示总数的内容
         */
        '': [];

    };
}
