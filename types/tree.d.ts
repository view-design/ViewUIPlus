import type { DefineComponent } from 'vue';

export declare const Tree: DefineComponent<{
    /**
     * 可嵌套的节点属性的数组，生成 tree 的数据
     */
    data?: any[];

    /**
     * 是否支持多选
     */
    multiple?: boolean;

    /**
     * 是否显示多选框
     */
    'show-checkbox'?: boolean;

    /**
     * 没有数据时的提示
     */
    'empty-text'?: string;

    /**
     * 异步加载数据的方法，见示例
     */
    'load-data'?: Function;

    /**
     * 自定义渲染内容，见示例
     */
    render?: Function;

    /**
     * 定义子节点键
     */
    'children-key'?: string;

    /**
     * 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法
     */
    'check-strictly'?: boolean;

    /**
     * 开启后，在 show-checkbox 模式下，select 的交互也将转为 check
     */
    'check-directly'?: boolean;

    /**
     * 开启后，点击节点将使用单选效果
     */
    'select-node'?: boolean;

    /**
     * 开启后，点击节点将使用展开/收起子节点效果，该选项优先于 select-node
     */
    'expand-node'?: boolean;

    /**
     * 点击右键菜单项是否自动关闭右键菜单
     */
    'auto-close-contextmenu'?: boolean;

    /**
     * 点击树节点时触发
     */
    onOnSelectChange?: (event?: any) => any;

    /**
     * 点击复选框时触发
     */
    onOnCheckChange?: (event?: any) => any;

    /**
     * 展开和收起子列表时触发
     */
    onOnToggleExpand?: (event?: any) => any;

    /**
     * 当前节点点击右键时触发
     */
    onOnContextmenu?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 右键菜单，详见示例
         */
        contextMenu?: () => any;

    };
}>

export declare const TreeChildConfig: {
    /**
     * 标题
     */
    title?: string | Element;

    /**
     * 是否展开直子节点
     */
    expand?: boolean;

    /**
     * 禁掉响应
     */
    disabled?: boolean;

    /**
     * 禁掉 checkbox
     */
    disableCheckbox?: boolean;

    /**
     * 是否选中子节点
     */
    selected?: boolean;

    /**
     * 是否勾选(如果勾选，子节点也会全部勾选)
     */
    checked?: boolean;

    /**
     * 子节点属性数组
     */
    children?: any[];

    /**
     * 自定义当前节点渲染内容，见示例
     */
    render?: Function;

    /**
     * 是否支持右键菜单
     */
    contextmenu?: boolean;

}
