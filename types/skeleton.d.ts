import type { DefineComponent } from 'vue';

export declare const Skeleton: DefineComponent<{
    /**
     * 是否展示动画效果
     */
    animated?: boolean;

    /**
     * 为 true 时，显示占位，反之则直接展示子组件
     */
    loading?: boolean;

    /**
     * 为 true 时，段落显示圆角
     */
    round?: boolean;

    /**
     * 设置段落占位效果，为数字时，表示行数。另外，可以设置每行宽度，例如：`{ rows: 4, width: [100, 200, '300px', '50%'] }`，也可以为所有行设置相同宽度，例如：`{ rows: 4, width: 300 }`
     */
    paragraph?: number | object;

    /**
     * 是否显示标题占位，同时可以设置标题宽度，例如：`{ width: '100px' }`
     */
    title?: boolean | object;

    /**
     * 是否显示头像占位，同时可以设置头像的类型和尺寸，例如：`{ type: 'square', size: 'large' }`，`type` 可选值有：`circle`、`square`，`size` 可选值有：`small`、`large`、`default`
     */
    avatar?: boolean | object;

    'v-slots'?: {
        /**
         * 骨架屏消失后要渲染的内容
         */
        default?: () => any;

        /**
         * 自定义渲染骨架屏
         */
        template?: () => any;

    };
}>

export declare const SkeletonItem: DefineComponent<{
    /**
     * 是否展示动画效果
     */
    animated?: boolean;

    /**
     * 指定占位的类型，可选的值有：`circle`、`square`、`rect`、`image`
     */
    type?: 'circle' | 'square' | 'rect' | 'image';

    /**
     * 设置占位的尺寸，可选值有：`small`、`large`、`default`
     */
    size?: 'small' | 'large' | 'default';

    /**
     * 设置占位的宽度，当 `type` 为 `rect` 或 `image` 时有效
     */
    width?: string | number;

    /**
     * 设置占位的高度，当 `type` 为 `rect` 或 `image` 时有效
     */
    height?: string | number;

    /**
     * 是否独占一行
     */
    block?: boolean;

    /**
     * 设置占位的背景图，当 `type` 为 `image` 时有效
     */
    'img-src'?: string;

}>
