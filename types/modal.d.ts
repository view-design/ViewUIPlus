import type { DefineComponent } from 'vue';

export declare const Modal: DefineComponent<{
    /**
     * 对话框是否显示，可使用 v-model 双向绑定数据。
     */
    'model-value'?: boolean;

    /**
     * 对话框标题，如果使用 slot 自定义了页头，则 title 无效
     */
    title?: string;

    /**
     * 是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭
     */
    closable?: boolean;

    /**
     * 是否允许点击遮罩层关闭
     */
    'mask-closable'?: boolean;

    /**
     * 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置`value`来关闭对话框
     */
    loading?: boolean;

    /**
     * 页面是否可以滚动
     */
    scrollable?: boolean;

    /**
     * 是否全屏显示
     */
    fullscreen?: boolean;

    /**
     * 是否可以拖拽移动
     */
    draggable?: boolean;

    /**
     * 拖拽时，是否吸附屏幕边缘
     */
    sticky?: boolean;

    /**
     * 拖拽时，自动吸附屏幕边缘的临界距离
     */
    'sticky-distance'?: number;

    /**
     * Modal 再次打开时，是否重置拖拽的位置
     */
    'reset-drag-position'?: boolean;

    /**
     * 是否显示遮罩层，<s>开启 draggable 时，强制不显示(4.6.0不再强制)</s>
     */
    mask?: boolean;

    /**
     * 确定按钮文字
     */
    'ok-text'?: string;

    /**
     * 取消按钮文字
     */
    'cancel-text'?: string;

    /**
     * 对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动`auto`。当其值不大于 100 时以百分比显示，大于 100 时为像素
     */
    width?: number;

    /**
     * 不显示底部
     */
    'footer-hide'?: boolean;

    /**
     * 设置浮层样式，调整浮层位置等，该属性设置的是`.ivu-modal`的样式
     */
    styles?: object;

    /**
     * 设置对话框容器`.ivu-modal-wrap`的类名，可辅助实现垂直居中等自定义效果
     */
    'class-name'?: string;

    /**
     * 层级
     */
    'z-index'?: number;

    /**
     * 自定义显示动画，第一项是模态框，第二项是背景
     */
    'transition-names'?: any[];

    /**
     * 是否将弹层放置于 body 内
     */
    transfer?: boolean;

    /**
     * 是否禁止对页面滚动条的修改
     */
    'lock-scroll'?: boolean;

    /**
     * 返回 Promise 可以阻止关闭
     */
    'before-close'?: Function;

    /**
     * 点击确定的回调
     */
    onOnOk?: (event?: any) => any;

    /**
     * 点击取消的回调
     */
    onOnCancel?: (event?: any) => any;

    /**
     * 显示状态发生变化时触发
     */
    onOnVisibleChange?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义页头
         */
        header?: () => any;

        /**
         * 自定义页脚内容
         */
        footer?: () => any;

        /**
         * 自定义右上角关闭内容
         */
        close?: () => any;

        /**
         * 对话框主体内容
         */
        default?: () => any;

    };
}>

export declare const ModalInstance: DefineComponent<{
    /**
     * 标题
     */
    title?: string | Element;

    /**
     * 内容
     */
    content?: string | Element;

    /**
     * 自定义内容，使用后不再限制类型， content 也无效。
     */
    render?: Function;

    /**
     * 宽度，单位 px
     */
    width?: number | string;

    /**
     * 确定按钮的文字
     */
    okText?: string;

    /**
     * 取消按钮的文字，只在`Modal.confirm()`下有效
     */
    cancelText?: string;

    /**
     * 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用`Modal.remove()`来关闭对话框
     */
    loading?: boolean;

    /**
     * 页面是否可以滚动
     */
    scrollable?: boolean;

    /**
     * 是否可以按 Esc 键关闭
     */
    closable?: boolean;

    /**
     * 点击确定的回调
     */
    onOk?: Function;

    /**
     * 点击取消的回调，只在`Modal.confirm()`下有效
     */
    onCancel?: Function;

    /**
     * 是否禁止对页面滚动条的修改
     */
    'lock-scroll'?: boolean;

}>
