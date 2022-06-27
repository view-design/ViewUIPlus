import type { DefineComponent } from 'vue';

export declare const Notice: DefineComponent<{
    /**
     * 通知提醒的标题
     */
    title?: string;

    /**
     * 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式
     */
    desc?: string;

    /**
     * 自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容
     */
    render?: Function;

    /**
     * 自动关闭的延时，单位秒，不关闭可以写 0
     */
    duration?: number;

    /**
     * 当前通知的唯一标识
     */
    name?: string;

    /**
     * 关闭时的回调
     */
    onClose?: Function;

}>

export declare const NoticeConfig: {
    /**
     * 通知组件距离顶端的距离，单位像素
     */
    top?: number;

    /**
     * 默认自动关闭的延时，单位秒
     */
    duration?: number;

}
