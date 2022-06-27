import type { DefineComponent } from 'vue';

export declare const AutoComplete: DefineComponent<{
    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value'?: string | number;

    /**
     * 自动完成的数据源
     */
    data?: any[];

    /**
     * 是否可以清空选项
     */
    clearable?: boolean;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 占位文本
     */
    placeholder?: string;

    /**
     * 输入框尺寸，可选值为 `large`、`small`、`default` 或者不设置
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 输入框尾部图标
     */
    icon?: string;

    /**
     * 是否根据输入项进行筛选。当其为一个函数时，会接收 `value` 和 `option` 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false
     */
    'filter-method'?: Function | boolean;

    /**
     * 弹窗的展开方向，可选值为 `bottom`、`top`、`top-start`、`bottom-start`、`top-end`、`bottom-end`，2.12.0 版本开始支持自动识别
     */
    placement?: string;

    /**
     * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
     */
    transfer?: boolean;

    /**
     * 给表单元素设置 `id`，详见 Form 用法。
     */
    'element-id'?: string;

    /**
     * 开启 transfer 时，给浮层添加额外的 class 名称
     */
    'transfer-class-name'?: string;

    /**
     * 是否开启 capture 模式，也可通过全局配置
     */
    capture?: boolean;

    /**
     * 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能
     */
    'events-enabled'?: boolean;

    /**
     * 选中 option，或 input 的 value 变化时，调用此函数
     */
    onOnChange?: (event?: any) => any;

    /**
     * 被选中时调用，参数为选中项的 value 值
     */
    onOnSelect?: (event?: any) => any;

    /**
     * 搜索补全项的时候调用
     */
    onOnSearch?: (event?: any) => any;

    /**
     * 聚焦时触发
     */
    onOnFocus?: (event?: any) => any;

    /**
     * 失焦时触发
     */
    onOnBlur?: (event?: any) => any;

    /**
     * 清空时触发
     */
    onOnClear?: (event?: any) => any;

}>
