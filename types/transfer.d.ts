import type { DefineComponent } from 'vue';

export declare const Transfer: DefineComponent<{
    /**
     * 数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外。
     */
    data?: any[];

    /**
     * 显示在右侧框数据的key集合
     */
    'target-keys'?: any[];

    /**
     * 每行数据渲染函数，该函数的入参为 `data` 中的项
     */
    'render-format'?: Function;

    /**
     * 设置哪些项应该被选中
     */
    'selected-keys'?: any[];

    /**
     * 两个穿梭框的自定义样式
     */
    'list-style'?: object;

    /**
     * 标题集合，顺序从左至右
     */
    titles?: any[];

    /**
     * 操作文案集合，顺序从上至下
     */
    operations?: any[];

    /**
     * 是否颠倒两个操作按钮的上下顺序
     */
    'reverse-operation'?: boolean;

    /**
     * 是否显示搜索框
     */
    filterable?: boolean;

    /**
     * 搜索框的占位
     */
    'filter-placeholder'?: string;

    /**
     * 自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词
     */
    'filter-method'?: Function;

    /**
     * 当列表为空时显示的内容
     */
    'not-found-text'?: string;

    /**
     * 选项在两栏之间转移时的回调函数
     */
    onOnChange?: (event?: any) => any;

    /**
     * 选中项发生变化时触发
     */
    onOnSelectedChange?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义底部内容
         */
        default?: () => any;

    };
}>
