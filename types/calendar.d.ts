export declare class Calendar {
    /**
     * 绑定当前日期的值，为空时默认显示今天，可使用 v-model 双向绑定数据
     */
    'model-value': Date |  string |  number;

    /**
     * 视图类型，可选值为 month (月视图) 或 year (年视图)
     */
    type: string;

    /**
     * 单元格高度，单位 px
     */
    'cell-height': number;

    /**
     * 是否显示顶部
     */
    'show-header': boolean;

    /**
     * 周起始日
     */
    'first-day-of-week': number;

    /**
     * 是否隐藏类型切换
     */
    'hide-type': boolean;

    /**
     * 默认文案
     */
    locale: object;

    /**
     * 选择日期发生变化时触发
     */
    $emit(eventName: 'on-change'): this;

    /**
     * 切换视图类型时触发
     */
    $emit(eventName: 'on-type-change'): this;

    /**
     * 点击单元格时触发
     */
    $emit(eventName: 'on-cell-click'): this;

    /**
     * 右键单元格时触发
     */
    $emit(eventName: 'on-cell-contextmenu'): this;

    /**
     * 切换上一个时触发
     */
    $emit(eventName: 'on-prev'): this;

    /**
     * 切换下一个时触发
     */
    $emit(eventName: 'on-next'): this;

    /**
     * 点击今日时触发
     */
    $emit(eventName: 'on-today'): this;

    $slots: {
        /**
         * 自定义顶部
         */
        header: [];

        /**
         * 自定义顶部标题
         */
        headerTitle: [];

    };
}
