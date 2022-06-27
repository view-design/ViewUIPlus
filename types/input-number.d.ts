import type { DefineComponent } from 'vue';

export declare const InputNumber: DefineComponent<{
    /**
     * 最大值
     */
    max?: number;

    /**
     * 最小值
     */
    min?: number;

    /**
     * 当前值，可以使用 v-model 双向绑定数据
     */
    'model-value'?: number;

    /**
     * 按钮位置是否置于两侧
     */
    'controls-outside'?: boolean;

    /**
     * 每次改变的步伐，可以是小数
     */
    step?: number;

    /**
     * 输入框尺寸，可选值为`large`、`small`、`default`或者不填
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 设置禁用状态
     */
    disabled?: boolean;

    /**
     * 占位文本
     */
    placeholder?: string;

    /**
     * 指定输入框展示值的格式
     */
    formatter?: Function;

    /**
     * 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用
     */
    parser?: Function;

    /**
     * 是否设置为只读
     */
    readonly?: boolean;

    /**
     * 是否可编辑
     */
    editable?: boolean;

    /**
     * 数值精度
     */
    precision?: number;

    /**
     * 给表单元素设置 `id`，详见 Form 用法。
     */
    'element-id'?: string;

    /**
     * 是否实时响应数据，设置为 false 时，只会在失焦时更改数据
     */
    'active-change'?: boolean;

    /**
     * 数值改变时的回调，返回当前值
     */
    onOnChange?: (event?: any) => any;

    /**
     * 聚焦时触发
     */
    onOnFocus?: (event?: any) => any;

    /**
     * 失焦时触发
     */
    onOnBlur?: (event?: any) => any;

}>
