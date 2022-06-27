import type { DefineComponent } from 'vue';

export declare const TreeSelect: DefineComponent<{
    /**
     * 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array
     */
    'model-value'?: string |  number |  any[];

    /**
     * Tree 的数据，基本同 View UI Plus Tree，但要额外设置一个 `value` 字段，而且 `selected` 和 `checked` 字段需预先设置在 data 中，详见示例
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
     * 异步加载数据的方法，详见示例
     */
    'load-data'?: Function;

    /**
     * 是否将弹层放置于 body 内
     */
    transfer?: boolean;

    /**
     * 选项变化时触发
     */
    onOnChange?: (event?: any) => any;

    /**
     * 下拉框展开或收起时触发
     */
    onOnOpenChange?: (event?: any) => any;

}>
