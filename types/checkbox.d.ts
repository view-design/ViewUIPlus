import type { DefineComponent } from 'vue';

export declare const Checkbox: DefineComponent<{
    /**
     * 只在单独使用时有效。可以使用 v-model 双向绑定数据
     */
    'model-value'?: boolean;

    /**
     * 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中
     */
    label?: string;

    /**
     * 是否禁用当前项
     */
    disabled?: boolean;

    /**
     * 设置 indeterminate 状态，只负责样式控制
     */
    indeterminate?: boolean;

    /**
     * 多选框的尺寸，可选值为 `large`、`small`、`default` 或者不设置
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 是否显示边框
     */
    border?: boolean;

    /**
     * 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
     */
    'true-value'?: string |  number |  boolean;

    /**
     * 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用
     */
    'false-value'?: string |  number |  boolean;

    /**
     * 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发
     */
    onOnChange?: (event?: any) => any;

}>

export declare const CheckboxGroup: DefineComponent<{
    /**
     * 指定选中项目的集合，可以使用 v-model 双向绑定数据
     */
    'model-value'?: any[];

    /**
     * 多选框组的尺寸，可选值为 `large`、`small`、`default` 或者不设置
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发
     */
    onOnChange?: (event?: any) => any;

}>
