import type { DefineComponent } from 'vue';

export declare const Slider: DefineComponent<{
    /**
     * 滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字
     */
    'model-value'?: number | any[];

    /**
     * 最小值
     */
    min?: number;

    /**
     * 最大值
     */
    max?: number;

    /**
     * 步长，取值建议能被（max - min）整除
     */
    step?: number;

    /**
     * 是否禁用滑块
     */
    disabled?: boolean;

    /**
     * 是否开启双滑块模式
     */
    range?: boolean;

    /**
     * 是否显示数字输入框，仅在单滑块模式下有效
     */
    'show-input'?: boolean;

    /**
     * 是否显示间断点，建议在 step 不密集时使用
     */
    'show-stops'?: boolean;

    /**
     * 提示的显示控制，可选值为 `hover`（悬停，默认）、`always`（总是可见）、`never`（不可见）
     */
    'show-tip'?: string;

    /**
     * Slider 会把当前值传给 `tip-format`，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip
     */
    'tip-format'?: Function;

    /**
     * 数字输入框的尺寸，可选值为`large`、`small`、`default`或者不填，仅在开启 show-input 时有效
     */
    'input-size'?: '' | 'large' | 'small' | 'default';

    /**
     * 同 InputNumber 的 active-change
     */
    'active-change'?: boolean;

    /**
     * 标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式
     */
    marks?: object;

    /**
     * 在松开滑动时触发，返回当前的选值，在滑动过程中不会触发
     */
    onOnChange?: (event?: any) => any;

    /**
     * 滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发
     */
    onOnInput?: (event?: any) => any;

}>
