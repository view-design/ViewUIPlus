import type { DefineComponent } from 'vue';

export declare const Cell: DefineComponent<{
    /**
     * 用来标识这一项
     */
    name?: string | number;

    /**
     * 左侧标题
     */
    title?: string;

    /**
     * 标题下方的描述信息
     */
    label?: string;

    /**
     * 右侧额外内容
     */
    extra?: string;

    /**
     * 禁用该项
     */
    disabled?: boolean;

    /**
     * 标记该项为选中状态
     */
    selected?: boolean;

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

    'v-slots'?: {
        /**
         * 相当于 title
         */
        default?: () => any;

        /**
         * 标题前的 Icon
         */
        icon?: () => any;

        /**
         * 相当于 label
         */
        label?: () => any;

        /**
         * 相当于 extra
         */
        extra?: () => any;

        /**
         * 有链接时，可自定义右侧箭头
         */
        arrow?: () => any;

    };
}>

export declare const CellGroup: DefineComponent<{
    /**
     * 点击单元格时触发
     */
    onOnClick?: (event?: any) => any;

}>
