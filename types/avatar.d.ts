import type { DefineComponent } from 'vue';

export declare const Avatar: DefineComponent<{
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

    /**
     * 在设置 src 且图片加载不成功时触发
     */
    onOnError?: (event?: any) => any;

}>
