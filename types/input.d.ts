import type { DefineComponent } from 'vue';

export declare const Input: DefineComponent<{
    /**
     * 输入框类型，可选值为 `text`、`password`、`textarea`、`url`、`email`、`date`、`number`、`tel`
     */
    type?: 'text' | 'password' | 'textarea' | 'url' | 'email' | 'date' | 'number' | 'tel';

    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value'?: string | number;

    /**
     * 输入框尺寸，可选值为`large`、`small`、`default`或者不设置
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 占位文本
     */
    placeholder?: string;

    /**
     * 是否显示清空按钮
     */
    clearable?: boolean;

    /**
     * 是否显示边框
     */
    border?: boolean;

    /**
     * 设置输入框为禁用状态
     */
    disabled?: boolean;

    /**
     * 设置输入框为只读
     */
    readonly?: boolean;

    /**
     * 最大输入长度
     */
    maxlength?: number;

    /**
     * 是否显示输入字数统计，可以配合 maxlength 使用
     */
    'show-word-limit'?: boolean;

    /**
     * 是否显示切换密码图标
     */
    password?: boolean;

    /**
     * 输入框尾部图标，仅在 text 类型下有效
     */
    icon?: string;

    /**
     * 输入框头部图标
     */
    prefix?: string;

    /**
     * 输入框尾部图标
     */
    suffix?: string;

    /**
     * 是否显示为搜索型输入框
     */
    search?: boolean;

    /**
     * 开启 search 时可用，是否有确认按钮，可设为按钮文字
     */
    'enter-button'?: boolean | string;

    /**
     * 文本域默认行数，仅在 textarea 类型下有效
     */
    rows?: number;

    /**
     * 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 }
     */
    autosize?: boolean | object;

    /**
     * 将用户的输入转换为 Number 类型
     */
    number?: boolean;

    /**
     * 自动获取焦点
     */
    autofocus?: boolean;

    /**
     * 原生的自动完成功能
     */
    autocomplete?: string;

    /**
     * 给表单元素设置 `id`，详见 Form 用法。
     */
    'element-id'?: string;

    /**
     * 原生的 spellcheck 属性
     */
    spellcheck?: boolean;

    /**
     * 原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效
     */
    wrap?: 'hard' | 'soft';

    /**
     * 按下回车键时触发
     */
    onOnEnter?: (event?: any) => any;

    /**
     * 设置 icon 属性后，点击图标时触发
     */
    onOnClick?: (event?: any) => any;

    /**
     * 数据改变时触发
     */
    onOnChange?: (event?: any) => any;

    /**
     * 输入框聚焦时触发
     */
    onOnFocus?: (event?: any) => any;

    /**
     * 输入框失去焦点时触发
     */
    onOnBlur?: (event?: any) => any;

    /**
     * 原生的 keyup 事件
     */
    onOnKeyup?: (event?: any) => any;

    /**
     * 原生的 keydown 事件
     */
    onOnKeydown?: (event?: any) => any;

    /**
     * 原生的 keypress 事件
     */
    onOnKeypress?: (event?: any) => any;

    /**
     * 开启 search 时可用，点击搜索或按下回车键时触发
     */
    onOnSearch?: (event?: any) => any;

    /**
     * 开启 clearable 时可用，点击清空按钮时触发
     */
    onOnClear?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 前置内容，仅在 text 类型下有效
         */
        prepend?: () => any;

        /**
         * 后置内容，仅在 text 类型下有效
         */
        append?: () => any;

        /**
         * 输入框头部图标
         */
        prefix?: () => any;

        /**
         * 输入框尾部图标
         */
        suffix?: () => any;

    };
}>
