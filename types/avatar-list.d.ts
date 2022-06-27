import type { DefineComponent } from 'vue';

export declare const AvatarList: DefineComponent<{
    /**
     * 指定头像的形状，可选值为 circle、square
     */
    shape?: 'circle' | 'square';

    /**
     * 设置头像的大小，可选值为 large、small、default
     */
    size?: 'large' | 'small' | 'default';

    /**
     * 图片类头像的资源地址
     */
    src?: string;

    /**
     * 设置头像的图标类型，参考 `Icon` 组件
     */
    icon?: string;

    /**
     * 自定义图标
     */
    'custom-icon'?: string;

    'v-slots'?: {
        /**
         * 自定义超出 max 后的内容
         */
        excess?: () => any;

        /**
         * 指定该 slot 后，无论超出 max 与否，都会显示自定义的额外信息，且 excess 失效
         */
        extra?: () => any;

    };
}>
