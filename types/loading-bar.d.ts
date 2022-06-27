import type { DefineComponent } from 'vue';

export declare const LoadingBar: DefineComponent<{
    /**
     * 开始从 0 显示进度条，并自动加载进度
     */
    start(): void;

    /**
     * 结束进度条，自动补全剩余进度
     */
    finish(): void;

    /**
     * 以错误的类型结束进度条，自动补全剩余进度
     */
    error(): void;

    /**
     * 精确加载到指定的进度
     */
    update(percent?: number): void;

}>

export declare const LoadingBarConfig: {
    /**
     * 进度条的颜色，默认为 View UI Plus 主色
     */
    color?: string;

    /**
     * 失败时的进度条颜色，默认为 View UI Plus 主色
     */
    failedColor?: string;

    /**
     * 进度条高度，单位 px
     */
    height?: number;

    /**
     * 隐藏时的持续时间，单位 ms
     */
    duration?: number;

}
