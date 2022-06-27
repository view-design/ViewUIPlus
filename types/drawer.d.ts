import type { DefineComponent } from 'vue';

export declare const Drawer: DefineComponent<{
    /**
     * 抽屉是否显示，可使用 v-model 双向绑定数据
     */
    'model-value'?: boolean;

    /**
     * 抽屉标题，如果使用 slot 自定义了页头，则 title 无效
     */
    title?: string;

    /**
     * 抽屉宽度，左、右方向时可用。当其值不大于 100 时以百分比显示，大于 100 时为像素
     */
    width?: number | string;

    /**
     * 抽屉高度，上、下方向时可用。当其值不大于 100 时以百分比显示，大于 100 时为像素
     */
    height?: number | string;

    /**
     * 是否显示右上角的关闭按钮
     */
    closable?: boolean;

    /**
     * 是否允许点击遮罩层关闭
     */
    'mask-closable'?: boolean;

    /**
     * 是否显示遮罩层
     */
    mask?: boolean;

    /**
     * 遮罩层样式
     */
    'mask-style'?: object;

    /**
     * 抽屉中间层的样式
     */
    styles?: object;

    /**
     * 页面是否可以滚动
     */
    scrollable?: boolean;

    /**
     * 抽屉的方向，可选值为 left、right、top、bottom
     */
    placement?: 'left' | 'right' | 'top' | 'bottom';

    /**
     * 设置 Drawer 的 z-index
     */
    'z-index'?: number;

    /**
     * 是否将抽屉放置于 body 内
     */
    transfer?: boolean;

    /**
     * 设置抽屉容器.ivu-drawer-wrap的类名
     */
    'class-name'?: string;

    /**
     * 是否设置抽屉在某个元素内打开，开启此属性时，应当关闭 transfer 属性
     */
    inner?: boolean;

    /**
     * 是否开启拖拽调整宽度
     */
    draggable?: boolean;

    /**
     * 返回 Promise 可以阻止关闭
     */
    'before-close'?: Function;

    /**
     * 是否禁止对页面滚动条的修改
     */
    'lock-scroll'?: boolean;

    /**
     * 关闭抽屉时触发
     */
    onOnClose?: (event?: any) => any;

    /**
     * 显示状态发生变化时触发
     */
    onOnVisibleChange?: (event?: any) => any;

    /**
     * 调整宽度时触发
     */
    onOnResizeWidth?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义标题栏
         */
        header?: () => any;

        /**
         * 自定义右上角关闭内容
         */
        close?: () => any;

        /**
         * 自定义调整宽度节点
         */
        trigger?: () => any;

        /**
         * 抽屉主体内容
         */
        default?: () => any;

    };
}>
