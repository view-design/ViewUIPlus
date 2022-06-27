import type { DefineComponent } from 'vue';

export declare const CountUp: DefineComponent<{
    /**
     * 起始值
     */
    start?: number;

    /**
     * 结束值，必填
     */
    end?: number;

    /**
     * 小数位数
     */
    decimals?: number;

    /**
     * 持续时间，单位：秒
     */
    duration?: number;

    /**
     * [countup.js](https://github.com/inorganik/countUp.js) 设置项
     */
    options?: object;

    /**
     * 回调函数
     */
    callback?: Function;

}>
