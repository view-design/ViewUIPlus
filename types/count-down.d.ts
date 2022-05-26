export declare class CountDown {
    /**
     * 目标时间
     */
    target: Date |  number;

    /**
     * 自动倒计时间隔，单位：毫秒
     */
    interval: number;

    /**
     * 自定义显示格式
     */
    format: Function;

    /**
     * 倒计时结束时触发
     */
    $emit(eventName: 'on-end'): this;

}
