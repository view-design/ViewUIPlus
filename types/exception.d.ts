import type { DefineComponent } from 'vue';

export declare const Exception: DefineComponent<{
    /**
     * 页面类型，可选值为 404、403、500
     */
    type?: '404' | '403' | '500' | 404 | 403 | 500;

    /**
     * 标题，不填写会自动根据 type 获取
     */
    title?: string;

    /**
     * 补充描述，不填写会自动根据 type 获取
     */
    desc?: string;

    /**
     * 背景图片地址，不填写会自动根据 type 获取
     */
    img?: string;

    /**
     * 是否显示彩色的背景图片，设置 img 时无效
     */
    'img-color'?: boolean;

    /**
     * 默认的返回按钮文本
     */
    'back-text'?: string;

    /**
     * 返回按钮的跳转地址
     */
    redirect?: string;

    'v-slots'?: {
        /**
         * 自定义标题
         */
        title?: () => any;

        /**
         * 自定义补充描述
         */
        desc?: () => any;

        /**
         * 自定义操作区
         */
        actions?: () => any;

    };
}>
