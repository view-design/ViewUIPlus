import type { DefineComponent } from 'vue';

export declare const Tabs: DefineComponent<{
    /**
     * 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据
     */
    'model-value'?: string;

    /**
     * 页签的基本样式，可选值为 `line` 和 `card`
     */
    type?: 'line' | 'card';

    /**
     * 尺寸，可选值为 `default` 和 `small`，仅在 `type="line"` 时有效
     */
    size?: 'default' | 'small';

    /**
     * 是否可以关闭页签，仅在 `type="card"` 时有效
     */
    closable?: boolean;

    /**
     * 是否使用 CSS3 动画
     */
    animated?: boolean;

    /**
     * Tabs 内的表单类组件是否自动获得焦点
     */
    'capture-focus'?: boolean;

    /**
     * 关闭前的函数，返回 Promise 可阻止标签关闭
     */
    'before-remove'?: Function;

    /**
     * 当嵌套使用 Tabs，指定 name 区分层级
     */
    name?: string;

    /**
     * 开启可配合事件 @on-drag-drop 实现拖拽调整页签顺序，详见示例
     */
    draggable?: boolean;

    /**
     * 点击右键菜单项是否自动关闭右键菜单
     */
    'auto-close-contextmenu'?: boolean;

    /**
     * tab 被点击时触发
     */
    onOnClick?: (event?: any) => any;

    /**
     * tab 被关闭时触发
     */
    onOnTabRemove?: (event?: any) => any;

    /**
     * 当前页签点击右键时触发
     */
    onOnContextmenu?: (event?: any) => any;

    /**
     * 拖拽调整页签顺序时触发
     */
    onOnDragDrop?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 附加内容
         */
        extra?: () => any;

        /**
         * 右键菜单，详见示例
         */
        contextMenu?: () => any;

    };
}>

export declare const TabPane: DefineComponent<{
    /**
     * 用于标识当前面板，对应 value，默认为其索引值
     */
    name?: string;

    /**
     * 选项卡头显示文字，支持 Render 函数。
     */
    label?: string | Function;

    /**
     * 选项卡图标
     */
    icon?: string;

    /**
     * 是否禁用该选项卡
     */
    disabled?: boolean;

    /**
     * 是否可以关闭页签，仅在 `type="card"` 时有效
     */
    closable?: boolean;

    /**
     * 当嵌套使用 Tabs，设置该属性指向对应 Tabs 的 name 字段
     */
    tab?: string;

    /**
     * 在 TabPane 使用 v-if 时，并不会按照预先的顺序渲染，这时可设置 index，并从小到大排序(需大于 0)
     */
    index?: number;

    /**
     * 是否支持右键菜单
     */
    'context-menu'?: boolean;

}>
