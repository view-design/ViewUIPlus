import type { DefineComponent } from 'vue';

export declare const Scroll: DefineComponent<{
    /**
     * 滚动区域的高度，单位像素
     */
    height?: string | number;

    /**
     * 加载中的文案
     */
    'loading-text'?: string;

    /**
     * 滚动至顶部时触发，需返回 Promise
     */
    'on-reach-top'?: Function;

    /**
     * 滚动至底部时触发，需返回 Promise
     */
    'on-reach-bottom'?: Function;

    /**
     * 滚动至顶部或底部时触发，需返回 Promise
     */
    'on-reach-edge'?: Function;

    /**
     * 从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。
     */
    'distance-to-edge'?: number | any[];

}>
