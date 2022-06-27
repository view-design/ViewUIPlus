import type { DefineComponent } from 'vue';

export declare const TimePicker: DefineComponent<{
    /**
     * 显示类型，可选值为 `time`、`timerange`
     */
    type?: 'time' | 'timerange';

    /**
     * 时间，可以是 JavaScript 的 Date，例如 **new Date()** ，也可以是标准的时间格式，注意：model-value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用
     */
    'model-value'?: Date;

    /**
     * 展示的时间格式
     */
    format?: Date;

    /**
     * 下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。
     */
    steps?: any[];

    /**
     * 时间选择器出现的位置，可选值为`top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `left` `left-start` `left-end` `right` `right-start` `right-end`
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 占位文本
     */
    placeholder?: string;

    /**
     * 是否显示底部控制栏
     */
    confirm?: boolean;

    /**
     * 手动控制时间选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用
     */
    open?: boolean;

    /**
     * 尺寸，可选值为`large`、`small`、`default`或者不设置
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 是否禁用选择器
     */
    disabled?: boolean;

    /**
     * 是否显示清除按钮
     */
    clearable?: boolean;

    /**
     * 完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效
     */
    readonly?: boolean;

    /**
     * 文本框是否可以输入，只在没有使用 slot 时有效
     */
    editable?: boolean;

    /**
     * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
     */
    transfer?: boolean;

    /**
     * 给表单元素设置 `id`，详见 Form 用法。
     */
    'element-id'?: string;

    /**
     * 两个日期间的分隔符
     */
    separator?: string;

    /**
     * 是否开启 capture 模式，也可通过全局配置
     */
    capture?: boolean;

    /**
     * 开启 transfer 时，给浮层添加额外的 class 名称
     */
    'transfer-class-name'?: string;

    /**
     * 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能
     */
    'events-enabled'?: boolean;

    /**
     * 时间发生变化时触发
     */
    onOnChange?: (event?: any) => any;

    /**
     * 弹出浮层和关闭浮层时触发
     */
    onOnOpenChange?: (event?: any) => any;

    /**
     * 点击确定按钮时触发
     */
    onOnOk?: (event?: any) => any;

    /**
     * 在清空日期时触发
     */
    onOnClear?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例
         */
        default?: () => any;

    };
}>
