export declare class Timeline {
    /**
     * 指定是否最后一个节点为幽灵节点
     */
    pending: boolean;

}

export declare class TimelineItem {
    /**
     * 圆圈颜色，可选值为`blue`、`red`、`green`，或自定义色值
     */
    color: 'blue' | 'red' | 'green' | string;

    $slots: {
        /**
         * 自定义时间轴点内容
         */
        dot: [];

        /**
         * 基本内容
         */
        '': [];

    };
}
