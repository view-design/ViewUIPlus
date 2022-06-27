import type { DefineComponent } from 'vue';

export declare const Cascader: DefineComponent<{
    /**
     * 可选项的数据源，格式参照示例说明
     */
    data?: any[];

    /**
     * 当前已选项的数据，格式参照示例说明
     */
    'model-value'?: any[];

    /**
     * 选择后展示的函数，用于自定义显示格式
     */
    'render-format'?: Function;

    /**
     * 是否禁用选择器
     */
    disabled?: boolean;

    /**
     * 是否支持清除
     */
    clearable?: boolean;

    /**
     * 输入框占位符
     */
    placeholder?: string;

    /**
     * 次级菜单展开方式，可选值为 `click` 或 `hover`
     */
    trigger?: 'click' | 'hover';

    /**
     * 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例
     */
    'change-on-select'?: boolean;

    /**
     * 输入框大小，可选值为`large`和`small`或者不填
     */
    size?: '' | 'large' | 'small';

    /**
     * 动态获取数据，数据源需标识 loading
     */
    'load-data'?: Function;

    /**
     * 是否支持搜索
     */
    filterable?: boolean;

    /**
     * 当搜索列表为空时显示的内容
     */
    'not-found-text'?: string;

    /**
     * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
     */
    transfer?: boolean;

    /**
     * 给表单元素设置 `id`，详见 Form 用法。
     */
    'element-id'?: string;

    /**
     * 开启 transfer 时，给浮层添加额外的 class 名称
     */
    'transfer-class-name'?: string;

    /**
     * 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能
     */
    'events-enabled'?: boolean;

    /**
     * 选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据
     */
    onOnChange?: (event?: any) => any;

    /**
     * 展开和关闭弹窗时触发
     */
    onOnVisibleChange?: (event?: any) => any;

}>
