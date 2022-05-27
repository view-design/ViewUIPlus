export declare class Dropdown {
    /**
     * 触发方式，可选值为 `hover`（悬停）`click`（点击）`contextMenu`（右键）`custom`（自定义），使用 custom 时，需配合 visible 一起使用
     */
    trigger: 'hover' | 'click' | 'custom' | 'contextMenu';

    /**
     * 手动控制下拉框的显示，在 trigger = 'custom' 时使用
     */
    visible: boolean;

    /**
     * 下拉菜单出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`, 2.12.0 版本开始支持自动识别
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
     */
    transfer: boolean;

    /**
     * 开启 transfer 时，给浮层添加额外的 class 名称
     */
    'transfer-class-name': string;

    /**
     * 是否开启 stop-propagation
     */
    'stop-propagation': boolean;

    /**
     * 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能
     */
    'events-enabled': boolean;

    /**
     * 设置 Popper 的 boundaries-element，比如 viewport
     */
    'boundaries-element': string | HTMLElement;

    /**
     * 点击菜单项时触发
     */
    $emit(eventName: 'on-click'): this;

    /**
     * 菜单显示状态改变时调用
     */
    $emit(eventName: 'on-visible-change'): this;

    /**
     * 点击外部关闭下拉菜单时触发
     */
    $emit(eventName: 'on-clickoutside'): this;

    $slots: {
        /**
         * 主体内容
         */
        '': [];

        /**
         * 列表内容，一般由 `DropdownMenu` 承担
         */
        list: [];

    };
}

export declare class DropdownItem {
    /**
     * 用来标识这一项
     */
    name: string;

    /**
     * 禁用该项
     */
    disabled: boolean;

    /**
     * 显示分割线
     */
    divided: boolean;

    /**
     * 标记该项为选中状态
     */
    selected: boolean;

}
