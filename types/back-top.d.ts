import type { DefineComponent } from 'vue';

export declare const BackTop: DefineComponent<{
    /**
     * 页面滚动高度达到该值时才显示`BackTop`组件
     */
    height?: number;

    /**
     * 组件距离底部的距离
     */
    bottom?: number;

    /**
     * 组件距离右部的距离
     */
    right?: number;

    /**
     * 滚动动画持续时间，单位 毫秒
     */
    duration?: number;

    /**
     * 点击按钮时触发
     */
    onOnClick?: (event?: any) => any;

}>
