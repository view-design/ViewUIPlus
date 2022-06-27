import type { DefineComponent } from 'vue';

export declare const Form: DefineComponent<{
    /**
     * 表单数据对象
     */
    model?: object;

    /**
     * 表单验证规则，具体配置查看 [async-validator](https://github.com/yiminghe/async-validator)
     */
    rules?: object;

    /**
     * 是否开启行内表单模式
     */
    inline?: boolean;

    /**
     * 表单域标签的位置，可选值为 `left`、`right`、`top`
     */
    'label-position'?: 'left' | 'right' | 'top';

    /**
     * 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
     */
    'label-width'?: number;

    /**
     * 是否显示校验错误信息
     */
    'show-message'?: boolean;

    /**
     * 原生的 autocomplete 属性，可选值为 off 或 on
     */
    autocomplete?: string;

    /**
     * 是否隐藏所有表单项的必选标记
     */
    'hide-required-mark'?: boolean;

    /**
     * 是否自动在 label 名称后添加冒号
     */
    'label-colon'?: boolean;

    /**
     * 是否禁用该表单内的所有组件（适用于具有 disabled 属性的表单类组件）
     */
    disabled?: boolean;

    /**
     * 任一表单项被校验后触发，返回表单项 prop、校验状态、错误消息
     */
    onOnValidate?: (event?: any) => any;

}>

export declare const FormItem: DefineComponent<{
    /**
     * 对应表单域 model 里的字段
     */
    prop?: string;

    /**
     * 标签文本
     */
    label?: string;

    /**
     * 表单域标签的的宽度
     */
    'label-width'?: number;

    /**
     * 指定原生的 label 标签的 for 属性，配合控件的 `element-id` 属性，可以点击 label 时聚焦控件。
     */
    'label-for'?: string;

    /**
     * 是否必填，如不设置，则会根据校验规则自动生成
     */
    required?: boolean;

    /**
     * 表单验证规则
     */
    rules?: object | any[];

    /**
     * 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息
     */
    error?: string;

    /**
     * 是否显示校验错误信息
     */
    'show-message'?: boolean;

    'v-slots'?: {
        /**
         * 内容
         */
        default?: () => any;

        /**
         * label 内容
         */
        label?: () => any;

    };
}>
