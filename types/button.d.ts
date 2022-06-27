import type { DefineComponent } from 'vue';

export declare const Button: DefineComponent<{
    /**
     * 按钮类型，可选值为 `default`、`primary`、`dashed`、`text`、`info`、`success`、`warning`、`error`或者不设置
     */
    type?: '' | 'default' | 'primary' | 'dashed' | 'text' | 'info' | 'success' | 'warning' | 'error';

    /**
     * 幽灵属性，使按钮背景透明
     */
    ghost?: boolean;

    /**
     * 按钮大小，可选值为 `large`、`small`、`default` 或者不设置
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 按钮形状，可选值为 `circle` 或者不设置
     */
    shape?: string;

    /**
     * 开启后，按钮的长度为 100%
     */
    long?: boolean;

    /**
     * 设置 `button` 原生的 `type`，可选值为 `button`、`submit`、`reset`
     */
    'html-type'?: 'button' | 'submit' | 'reset';

    /**
     * 设置按钮为禁用状态
     */
    disabled?: boolean;

    /**
     * 设置按钮为加载中状态
     */
    loading?: boolean;

    /**
     * 设置按钮的图标类型
     */
    icon?: string;

    /**
     * 设置按钮的自定义图标
     */
    'custom-icon'?: string;

    /**
     * 跳转的链接，支持 vue-router 对象
     */
    to?: string | object;

    /**
     * 路由跳转时，开启 replace 将不会向 history 添加新记录
     */
    replace?: boolean;

    /**
     * 相当于 a 链接的 target 属性
     */
    target?: '_blank' | '_self' | '_parent' | '_top';

    /**
     * 同 vue-router append
     */
    append?: boolean;

    /**
     * 点击时触发
     */
    onClick?: (event?: any) => any;

}>

export declare const ButtonGroup: DefineComponent<{
    /**
     * 按钮组合大小，可选值为 `large`、`small`、`default` 或者不设置
     */
    size?: 'large' | 'small' | 'default';

    /**
     * 按钮组合形状，可选值为 `circle` 或者不设置
     */
    shape?: '' | 'circle';

    /**
     * 是否纵向排列按钮组
     */
    vertical?: boolean;

}>
