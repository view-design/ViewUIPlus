import type { DefineComponent } from 'vue';

export declare const Breadcrumb: DefineComponent<{
    /**
     * 自定义分隔符
     */
    separator?: string | Element;

}>

export declare const BreadcrumbItem: DefineComponent<{
    /**
     * 链接，不传则没有链接，支持 vue-router 对象
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

}>
