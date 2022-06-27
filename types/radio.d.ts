import type { DefineComponent } from 'vue';

export declare const Radio: DefineComponent<{
    /**
     * 只在单独使用时有效。可以使用 `v-model` 双向绑定数据
     */
    'model-value'?: boolean;

    /**
     * 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目
     */
    label?: string | number;

    /**
     * 是否禁用当前项
     */
    disabled?: boolean;

    /**
     * 单选框的尺寸，可选值为 `large`、`small`、`default` 或者不设置
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
     * 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发
     */
    onOnChange?: (event?: any) => any;

}>

export declare const RadioGroup: DefineComponent<{
    /**
     * 指定当前选中的项目数据。可以使用 `v-model` 双向绑定数据
     */
    'model-value'?: string | number;

    /**
     * 可选值为 button 或不填，为 button 时使用按钮样式
     */
    type?: string;

    /**
     * 按钮样式，可选值为 default 和 solid
     */
    'button-style'?: string;

    /**
     * 尺寸，可选值为`large`、`small`、`default`或者不设置
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 是否垂直排列，按钮样式下无效
     */
    vertical?: boolean;

    /**
     * 在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发
     */
    onOnChange?: (event?: any) => any;

}>
