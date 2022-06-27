import type { DefineComponent } from 'vue';

export declare const Message: DefineComponent<{
    /**
     * 提示内容
     */
    content?: string;

    /**
     * 自定义描述内容，使用 Vue 的 Render 函数
     */
    render?: Function;

    /**
     * 自动关闭的延时，单位秒，不关闭可以写 0
     */
    duration?: number;

    /**
     * 关闭时的回调
     */
    onClose?: Function;

    /**
     * 是否显示关闭按钮
     */
    closable?: boolean;

    /**
     * 是否显示背景色
     */
    background?: boolean;

}>

export declare const MessageConfig: {
    /**
     * 提示组件距离顶端的距离，单位像素
     */
    top?: number;

    /**
     * 默认自动关闭的延时，单位秒
     */
    duration?: number;

}
