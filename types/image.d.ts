import type { DefineComponent } from 'vue';

export declare const Image: DefineComponent<{
    /**
     * 图片地址
     */
    src?: string;

    /**
     * 图片描述
     */
    alt?: string;

    /**
     * 原生属性
     */
    'referrer-policy'?: string;

    /**
     * 宽度
     */
    width?: string | number;

    /**
     * 高度
     */
    height?: string | number;

    /**
     * 图片适配容器模式包含：`fill`，`contain`，`cover`，`none`，`scale-down`
     */
    fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

    /**
     * 是否懒加载
     */
    lazy?: boolean;

    /**
     * 加载容器
     */
    'scroll-container'?: string | HTMLElement;

    /**
     * 是否将弹层放置于 body 内
     */
    transfer?: boolean;

    /**
     * 是否允许点击遮罩层关闭
     */
    'mask-closable'?: boolean;

    /**
     * 是否显示预览提示和遮罩
     */
    'preview-tip'?: boolean;

    /**
     * 是否图片预览
     */
    preview?: boolean;

    /**
     * 图片预览列表
     */
    'preview-list'?: any[];

    /**
     * 是否循环切换
     */
    infinite?: boolean;

    /**
     * 打开预览的第一项
     */
    'initial-index'?: number;

    /**
     * 图片预览操作栏选项，按数组顺序排序
     */
    toolbar?: any[];

    /**
     * 图片加载成功
     */
    onOnLoad?: (event?: any) => any;

    /**
     * 图片加载失败
     */
    onOnError?: (event?: any) => any;

    /**
     * 图片预览切换
     */
    onOnSwitch?: (event?: any) => any;

    /**
     * 图片预览关闭
     */
    onOnClose?: (event?: any) => any;

    /**
     * 图片点击
     */
    onOnClick?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义图片加载中
         */
        placeholder?: () => any;

        /**
         * 自定义图片加载失败
         */
        error?: () => any;

        /**
         * 自定义图片预览
         */
        preview?: () => any;

    };
}>

export declare const ImagePreview: DefineComponent<{
    /**
     * 是否显示，可使用 v-model 双向绑定
     */
    'model-value'?: boolean;

    /**
     * 图片预览列表
     */
    'preview-list'?: any[];

    /**
     * 打开预览的第一项
     */
    'initial-index'?: number;

    /**
     * 是否循环切换
     */
    infinite?: boolean;

    /**
     * 是否允许点击遮罩层关闭
     */
    'mask-closable'?: boolean;

    /**
     * 是否将弹层放置于 body 内
     */
    transfer?: boolean;

    /**
     * 操作栏选项，按数组顺序排序
     */
    toolbar?: any[];

    /**
     * 图片预览切换
     */
    onOnSwitch?: (event?: any) => any;

    /**
     * 图片预览关闭
     */
    onOnClose?: (event?: any) => any;

}>
