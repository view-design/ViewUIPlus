import type { DefineComponent } from 'vue';

export declare const UserName: DefineComponent<{
    /**
     * 默认值，设置后，初始化时会显示，`不能`使用 v-model
     */
    value?: string;

    /**
     * 自定义校验字段，`必填`
     */
    name?: string;

    /**
     * 校验规则，同 Form
     */
    rules?: object |  any[];

    /**
     * 是否在按下回车时提交
     */
    'enter-to-submit'?: boolean;

    /**
     * 数据改变时触发
     */
    onOnChange?: (event?: any) => any;

}>

export declare const Captcha: DefineComponent<{
    /**
     * 设置后，需要对应 name 的表单验证过才会触发
     */
    field?: string |  any[];

    /**
     * 倒计时时间，单位：秒，如果设置为 0，则不置为 disabled
     */
    'count-down'?: number;

    /**
     * 按钮文案，也支持同名 slot，且 slot 优先
     */
    text?: string;

    /**
     * 倒计时单位
     */
    'unit-text'?: string;

    /**
     * 返回 Promise 可以阻止点击
     */
    'before-click'?: Function;

    /**
     * 点击获取验证码时触发。
     */
    onOnGetCaptcha?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义按钮文案，比如是图片验证码，可做到点击切换验证码
         */
        text?: () => any;

    };
}>

export declare const Password: DefineComponent<{
    /**
     * 默认值，设置后，初始化时会显示，`不能`使用 v-model
     */
    value?: string;

    /**
     * 自定义校验字段，`必填`
     */
    name?: string;

    /**
     * 校验规则，同 Form
     */
    rules?: object |  any[];

    /**
     * 是否在按下回车时提交
     */
    'enter-to-submit'?: boolean;

    /**
     * 数据改变时触发
     */
    onOnChange?: (event?: any) => any;

}>

export declare const Email: DefineComponent<{
    /**
     * 默认值，设置后，初始化时会显示，`不能`使用 v-model
     */
    value?: string;

    /**
     * 自定义校验字段，`必填`
     */
    name?: string;

    /**
     * 校验规则，同 Form
     */
    rules?: object |  any[];

    /**
     * 是否在按下回车时提交
     */
    'enter-to-submit'?: boolean;

    /**
     * 数据改变时触发
     */
    onOnChange?: (event?: any) => any;

}>

export declare const Mobile: DefineComponent<{
    /**
     * 默认值，设置后，初始化时会显示，`不能`使用 v-model
     */
    value?: string;

    /**
     * 自定义校验字段，`必填`
     */
    name?: string;

    /**
     * 校验规则，同 Form
     */
    rules?: object |  any[];

    /**
     * 是否在按下回车时提交
     */
    'enter-to-submit'?: boolean;

    /**
     * 数据改变时触发
     */
    onOnChange?: (event?: any) => any;

}>

export declare const Submit: DefineComponent<{
}>

export declare const Login: DefineComponent<{
    /**
     * 提交时触发，返回值1 valid 为 表单验证是否通过，返回值2 data 包含了指定 Login 组件的绑定值
     */
    onOnSubmit?: (event?: any) => any;

}>
