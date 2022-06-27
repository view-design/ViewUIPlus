import type { DefineComponent } from 'vue';

export declare const Tooltip: DefineComponent<{
    /**
     * 显示的内容
     */
    content?: string | number;

    /**
     * 提示框出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`，2.12.0 版本开始支持自动识别
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 是否禁用提示框
     */
    disabled?: boolean;

    /**
     * 延迟显示，单位毫秒
     */
    delay?: number;

    /**
     * 是否总是可见
     */
    always?: boolean;

    /**
     * 主题，可选值为 dark 或 light
     */
    theme?: string;

    /**
     * 最大宽度，超出最大值后，文本将自动换行，并两端对齐
     */
    'max-width'?: string | number;

    /**
     * 出现位置的偏移量
     */
    offset?: number;

    /**
     * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
     */
    transfer?: boolean;

    /**
     * 自定义 popper.js 的配置项，具体配置见 [popper.js 文档](https://popper.js.org/popper-documentation.html)
     */
    options?: object;

    /**
     * 开启 transfer 时，给浮层添加额外的 class 名称
     */
    'transfer-class-name'?: string;

    /**
     * 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能
     */
    'events-enabled'?: boolean;

    /**
     * 在提示框显示时触发
     */
    onOnPopperShow?: (event?: any) => any;

    /**
     * 在提示框消失时触发
     */
    onOnPopperHide?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 主体内容
         */
        default?: () => any;

        /**
         * 提示框的内容，定义此 slot 时，会覆盖 props `content`。
         */
        content?: () => any;

    };
}>
