import type { DefineComponent } from 'vue';

export declare const Space: DefineComponent<{
    /**
     * 间距大小，当类型为 `String` 时，可选值有：`small`、`large`、`default`
     */
    size?: 'small' | 'large' | 'default' | number | [];

    /**
     * 布局方向，可选值有：`horizontal`、`vertical`
     */
    direction?: 'horizontal' | 'vertical';

    /**
     * 对齐方式，可选值有：`start`、`end`、`center`、`baseline`、`stretch`
     */
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';

    /**
     * 是否自动换行
     */
    wrap?: boolean;

    /**
     * 是否显示分隔符，值为 true 时显示默认的分隔符
     */
    split?: boolean;

    /**
     * Flex 布局类型，可选值有：`inline-flex`、`flex`，值为 `flex` 时，`align` 的默认值为 `stretch`
     */
    type?: 'inline-flex' | 'flex';

    'v-slots'?: {
        /**
         * 需要添加间距的元素
         */
        default?: () => any;

        /**
         * 自定义分隔符
         */
        split?: () => any;

    };
}>
