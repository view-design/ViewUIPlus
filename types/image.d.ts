export declare class Image {
    /**
     * 图片地址
     */
    src: string;

    /**
     * 图片描述
     */
    alt: string;

    /**
     * 原生属性
     */
    'referrer-policy': string;

    /**
     * 宽度
     */
    width: string | number;

    /**
     * 高度
     */
    height: string | number;

    /**
     * 图片适配容器模式包含：`fill`，`contain`，`cover`，`none`，`scale-down`
     */
    fit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

    /**
     * 是否懒加载
     */
    lazy: boolean;

    /**
     * 加载容器
     */
    'scroll-container': string | HTMLElement;

    /**
     * 是否将弹层放置于 body 内
     */
    transfer: boolean;

    /**
     * 是否允许点击遮罩层关闭
     */
    'mask-closable': boolean;

    /**
     * 是否图片预览
     */
    preview: boolean;

    /**
     * 图片预览列表
     */
    'preview-list': [];

    /**
     * 是否循环切换
     */
    infinite: boolean;

    /**
     * 打开预览的第一项
     */
    'initial-index': number;

    /**
     * 图片加载成功
     */
    $emit(eventName: 'on-load'): this;

    /**
     * 图片加载失败
     */
    $emit(eventName: 'on-error'): this;

    /**
     * 图片预览切换
     */
    $emit(eventName: 'on-switch'): this;

    /**
     * 图片预览关闭
     */
    $emit(eventName: 'on-close'): this;

    /**
     * 图片点击
     */
    $emit(eventName: 'on-click'): this;

    $slots: {
        /**
         * 自定义图片加载中
         */
        placeholder: [];

        /**
         * 自定义图片加载失败
         */
        error: [];

        /**
         * 自定义图片预览
         */
        preview: [];

    };
}

export declare class ImagePreview {
    /**
     * 是否将弹层放置于 body 内
     */
    transfer: boolean;

    /**
     * 是否允许点击遮罩层关闭
     */
    'mask-closable': boolean;

    /**
     * 是否图片预览
     */
    preview: boolean;

    /**
     * 图片预览列表
     */
    'preview-list': [];

    /**
     * 是否循环切换
     */
    infinite: boolean;

    /**
     * 打开预览的第一项
     */
    'initial-index': number;

    /**
     * 图片预览切换
     */
    $emit(eventName: 'on-switch'): this;

    /**
     * 图片预览关闭
     */
    $emit(eventName: 'on-close'): this;

}
