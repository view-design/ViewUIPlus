import type { DefineComponent } from 'vue';

export declare const Ellipsis: DefineComponent<{
    /**
     * 文本
     */
    text?: string;

    /**
     * 限制的高度
     */
    height?: number;

    /**
     * 限制行数，将换算为 height。如果设置了 height，则直接使用 height 计算
     */
    lines?: number;

    /**
     * 按照指定长度截取
     */
    length?: number;

    /**
     * 是否将全角字符的长度视为2来计算字符串长度，适用于 length
     */
    'full-width-recognition'?: boolean;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否开启 tooltip
     */
    tooltip?: boolean;

    /**
     * tooltip 的 transfer 属性
     */
    transfer?: boolean;

    /**
     * tooltip 的 theme 属性，可选值为 light 或 dark
     */
    theme?: string;

    /**
     * tooltip 的 max-width 属性
     */
    'max-width'?: string |  number;

    /**
     * tooltip 的 placement 属性
     */
    placement?: string;

    /**
     * 文本全部展示的时候触发
     */
    onOnShow?: (event?: any) => any;

    /**
     * 文本省略的时候触发
     */
    onOnHide?: (event?: any) => any;

}>
