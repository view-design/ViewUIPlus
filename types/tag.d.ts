import type { DefineComponent } from 'vue';

export declare const Tag: DefineComponent<{
    /**
     * 标签是否可以关闭
     */
    closable?: boolean;

    /**
     * 标签是否可以选择
     */
    checkable?: boolean;

    /**
     * 标签的选中状态
     */
    checked?: boolean;

    /**
     * 标签的样式类型，可选值为 `border`、`dot`或不填
     */
    type?: '' | 'border' | 'dot';

    /**
     * 标签颜色，预设颜色值为`default`、`primary`、`success`、`warning`、`error`、`blue`、`green`、`red`、`yellow`、`pink`、`magenta`、`volcano`、`orange`、`gold`、`lime`、`cyan`、`geekblue`、`purple`，你也可以自定义颜色值。
     */
    color?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'blue' | 'green' | 'red' | 'yellow' | 'pink' | 'magenta' | 'volcano' | 'orange' | 'gold' | 'lime' | 'cyan' | 'geekblue' | 'purple';

    /**
     * 当前标签的名称，使用 v-for，并支持关闭时，会比较有用
     */
    name?: string | number;

    /**
     * 尺寸，可选值为 large、medium、default
     */
    size?: string;

    /**
     * 关闭时触发
     */
    onOnClose?: (event?: any) => any;

    /**
     * 切换选中状态时触发
     */
    onOnChange?: (event?: any) => any;

}>
