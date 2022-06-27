import type { DefineComponent } from 'vue';

export declare const Anchor: DefineComponent<{
    /**
     * 固定模式
     */
    affix?: boolean;

    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    'offset-top'?: number;

    /**
     * 距离窗口底部达到指定偏移量后触发
     */
    'offset-bottom'?: number;

    /**
     * 锚点区域边界，单位：px
     */
    bounds?: number;

    /**
     * 点击滚动的额外距离
     */
    'scroll-offset'?: number;

    /**
     * 指定滚动的容器
     */
    container?: string | HTMLElement;

    /**
     * 是否显示小圆点
     */
    'show-ink'?: boolean;

    /**
     * 点击锚点时触发，返回链接
     */
    onOnSelect?: (event?: any) => any;

    /**
     * 链接改变时触发，返回新链接和旧链接
     */
    onOnChange?: (event?: any) => any;

}>

export declare const AnchorLink: DefineComponent<{
    /**
     * 锚点链接
     */
    href?: string;

    /**
     * 文字内容
     */
    title?: string;

    /**
     * 点击滚动的额外距离
     */
    'scroll-offset'?: number;

}>
