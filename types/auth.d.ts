import type { DefineComponent } from 'vue';

export declare const Auth: DefineComponent<{
    /**
     * 准入权限，详见示例
     */
    authority?: string |  any[] |  Function |  boolean;

    /**
     * 用户权限
     */
    access?: string |  any[];

    /**
     * 是否开启阻止模式，开启后，不会返回 noMatch 的 slot，而是阻止组件内的点击，反而给一个 $Message 提示，常用于 Button 操作
     */
    prevent?: boolean;

    /**
     * 在 prevent 开启时有效，点击提示的内容，当开启 custom-tip 时无效
     */
    message?: string;

    /**
     * 在 prevent 开启时有效，通过监听 @click 自定义提示
     */
    'custom-tip'?: boolean;

    /**
     * 设置包裹组件的 display 类型，包裹组件是一个 div 元素
     */
    display?: string;

    /**
     * 开启后，当鉴权不通过时，直接跳转到指定路由
     */
    to?: object |  string;

    /**
     * 路由跳转时，开启 replace 将不会向 history 添加新记录
     */
    replace?: boolean;

    /**
     * 同 vue-router append
     */
    append?: boolean;

    /**
     * 当开启 prevent，且鉴权不通过时，点击会触发
     */
    onClick?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义标题
         */
        default?: () => any;

        /**
         * 自定义补充描述
         */
        noMatch?: () => any;

    };
}>
