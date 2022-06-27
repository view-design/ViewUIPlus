import type { DefineComponent } from 'vue';

export declare const TablePaste: DefineComponent<{
    /**
     * 组件默认为左右结构，左边输入框，右边显示表格，如果想自定义输入框 (即使用 slot) 时，需设置该值
     */
    value?: string;

    /**
     * 是否隐藏右侧表格，开启后，只会显示输入框，这时用户可以根据事件自己渲染 Table
     */
    'hide-table'?: boolean;

    /**
     * 代理的 Input props
     */
    'input-props'?: object;

    /**
     * 代理的 Table props
     */
    'table-props'?: object;

    /**
     * 输入框内容变化时触发，返回内容
     */
    onOnChange?: (event?: any) => any;

    /**
     * 表格渲染正确时触发，返回表格数据 tableData (含 columns 和 data)
     */
    onOnSuccess?: (event?: any) => any;

    /**
     * 表格渲染错误时触发，返回表格数据 tableData (含 columns 和 data) 及 错误行序号 errorIndex (从 1 计数)
     */
    onOnError?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 默认为普通输入框，如果想使用其它输入控件，比如 [codemirror](https://codemirror.net/) 或 [Ace](https://ace.c9.io/)，可以自定义 slot，这时需传入 <code>value</code> 属性
         */
        default?: () => any;

    };
}>
