import type { DefineComponent } from 'vue';

export declare const Row: DefineComponent<{
    /**
     * 栅格间距，单位 px，左右平分
     */
    gutter?: number;

    /**
     * flex 布局下的垂直对齐方式，可选值为 `top`、`middle`、`bottom`
     */
    align?: 'top' | 'middle' | 'bottom';

    /**
     * 布局下的水平排列方式，可选值为 `start`、`end`、`center`、`space-around`、`space-between`
     */
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';

    /**
     * 自定义的class名称
     */
    'class-name'?: string;

    /**
     * 是否自动换行
     */
    wrap?: boolean;

}>

export declare const Col: DefineComponent<{
    /**
     * 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 `display:none`
     */
    span?: number | string;

    /**
     * flex 布局属性
     */
    flex?: number | string;

    /**
     * 栅格的顺序，在 `flex` 布局模式下有效
     */
    order?: number | string;

    /**
     * 栅格左侧的间隔格数，间隔内不可以有栅格
     */
    offset?: number | string;

    /**
     * 栅格向右移动格数
     */
    push?: number | string;

    /**
     * 栅格向左移动格数
     */
    pull?: number | string;

    /**
     * 自定义的class名称
     */
    'class-name'?: string;

    /**
     * `&lt;576px` 响应式栅格，可为栅格数或一个包含其他属性的对象
     */
    xs?: string | object;

    /**
     * `&gt;=576px` 响应式栅格，可为栅格数或一个包含其他属性的对象
     */
    sm?: string | object;

    /**
     * `&gt;=768px` 响应式栅格，可为栅格数或一个包含其他属性的对象
     */
    md?: string | object;

    /**
     * `&gt;=992px` 响应式栅格，可为栅格数或一个包含其他属性的对象
     */
    lg?: string | object;

    /**
     * `&gt;=1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象
     */
    xl?: string | object;

    /**
     * `&gt;=1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象
     */
    xxl?: string | object;

}>
