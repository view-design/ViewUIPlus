import type { DefineComponent } from 'vue';

export declare const Affix: DefineComponent<{
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    'offset-top'?: number;

    /**
     * 距离窗口底部达到指定偏移量后触发
     */
    'offset-bottom'?: number;

    /**
     * addEventListener 原生的 useCapture 选项
     */
    'use-capture'?: boolean;

    /**
     * 在固定状态发生改变时触发
     */
    onOnChange?: (event?: any) => any;

}>
