import type { DefineComponent } from 'vue';

export declare const Sider: DefineComponent<{
    /**
     * 是否收起, 可以使用 v-model来进行双向绑定
     */
    'model-value'?: boolean;

    /**
     * 触发响应式布局的断点，可选值为`xs`,`sm`,`md`,`lg`,`xl`或`xxl`，若不设此属性则不会触发响应式布局。
     */
    breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

    /**
     * 宽度
     */
    width?: number;

    /**
     * 是否可收起，设为`false`后，默认触发器会隐藏，且响应式布局不会触发
     */
    collapsible?: boolean;

    /**
     * 收缩宽度，设置为 0 会出现特殊 trigger
     */
    'collapsed-width'?: number;

    /**
     * 隐藏默认触发器
     */
    'hide-trigger'?: boolean;

    /**
     * 是否默认收起，设置了`collapsible`后设置此属性侧边栏仍会收起。
     */
    'default-collapsed'?: boolean;

    /**
     * 改变侧边栏触发器箭头方向，和改变侧边栏收起方向，当Sider在右边时可以使用。
     */
    'reverse-arrow'?: boolean;

    /**
     * 展开-收起时的回调
     */
    onOnCollapse?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义触发器
         */
        trigger?: () => any;

    };
}>

export declare const Layout: DefineComponent<{
    'v-slots'?: {
        /**
         * 默认插槽内容
         */
        default?: () => any;

    };
}>

export declare const Content: DefineComponent<{
    'v-slots'?: {
        /**
         * 默认插槽内容
         */
        default?: () => any;

    };
}>

export declare const Footer: DefineComponent<{
    'v-slots'?: {
        /**
         * 默认插槽内容
         */
        default?: () => any;

    };
}>

export declare const Header: DefineComponent<{
    'v-slots'?: {
        /**
         * 默认插槽内容
         */
        default?: () => any;

    };
}>
