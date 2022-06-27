import type { DefineComponent } from 'vue';

export declare const Poptip: DefineComponent<{
    /**
     * 触发方式，可选值为`hover`（悬停）`click`（点击）`focus`（聚焦）,在 confirm 模式下，只有 click 有效
     */
    trigger?: string;

    /**
     * 显示的标题
     */
    title?: string | number;

    /**
     * 显示的正文内容，只在非 confirm 模式下有效
     */
    content?: string | number;

    /**
     * 提示框出现的位置，可选值为`top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end`
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px
     */
    width?: string | number;

    /**
     * 是否开启对话框模式
     */
    confirm?: boolean;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 确定按钮的文字，只在 confirm 模式下有效
     */
    'ok-text'?: string;

    /**
     * 取消按钮的文字，只在 confirm 模式下有效
     */
    'cancel-text'?: string;

    /**
     * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
     */
    transfer?: boolean;

    /**
     * 给 Poptip 设置 class-name，在使用 transfer 时会很有用
     */
    'popper-class'?: string;

    /**
     * 开启后，超出指定宽度文本将自动换行，并两端对齐
     */
    'word-wrap'?: boolean;

    /**
     * 自定义间距值
     */
    padding?: string;

    /**
     * 出现位置的偏移量
     */
    offset?: number;

    /**
     * 自定义 popper.js 的配置项，具体配置见 [popper.js 文档](https://popper.js.org/popper-documentation.html){target:"_blank"}
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

    /**
     * 点击确定的回调，只在 confirm 模式下有效
     */
    onOnOk?: (event?: any) => any;

    /**
     * 点击取消的回调，只在 confirm 模式下有效
     */
    onOnCancel?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 主体内容
         */
        default?: () => any;

        /**
         * 提示框标题，定义此 slot 时，会覆盖 props `title`
         */
        title?: () => any;

        /**
         * 提示框内容，定义此 slot 时，会覆盖 props `content`，只在非 confirm 模式下有效
         */
        content?: () => any;

    };
}>
