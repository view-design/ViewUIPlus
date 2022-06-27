import type { DefineComponent } from 'vue';

export declare const Select: DefineComponent<{
    /**
     * 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array|String | Number | Array
     */
    'model-value'?: '';

    /**
     * 是否支持多选
     */
    multiple?: boolean;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否可以清空选项，只在单选时有效
     */
    clearable?: boolean;

    /**
     * 是否支持搜索
     */
    filterable?: boolean;

    /**
     * 在搜索时，是否只按照 label 进行搜索
     */
    'filter-by-label'?: boolean;

    /**
     * 远程搜索的方法
     */
    'remote-method'?: Function;

    /**
     * 当前是否正在远程搜索
     */
    loading?: boolean;

    /**
     * 远程搜索中的文字提示
     */
    'loading-text'?: string;

    /**
     * 远程搜索时，显示默认 label，详见示例
     */
    'default-label'?: string | number | any[];

    /**
     * 选择框大小，可选值为`large`、`small`、`default`或者不填
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 选择框默认文字
     */
    placeholder?: string;

    /**
     * 当下拉列表为空时显示的内容
     */
    'not-found-text'?: string;

    /**
     * 在返回选项时，是否将 label 和 value 一并返回，默认只返回 value
     */
    'label-in-value'?: boolean;

    /**
     * 弹窗的展开方向，可选值为 `top`、`bottom`、`top-start`、`bottom-start`、`top-end`、`bottom-end`
     */
    placement?: 'bottom' | 'top' | 'top-start' | 'bottom-start' | 'top-end' | 'bottom-end';

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
     * 在 Select 内显示图标
     */
    prefix?: string;

    /**
     * 多选时最多显示多少个 tag
     */
    'max-tag-count'?: number;

    /**
     * 隐藏 tag 时显示的内容，参数是剩余项数量
     */
    'max-tag-placeholder'?: Function;

    /**
     * 是否允许用户创建新条目，需开启 filterable
     */
    'allow-create'?: boolean;

    /**
     * 是否开启 capture 模式，也可通过全局配置
     */
    capture?: boolean;

    /**
     * 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能
     */
    'events-enabled'?: boolean;

    /**
     * 选中的`Option`变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性
     */
    onOnChange?: (event?: any) => any;

    /**
     * 搜索词改变时触发
     */
    onOnQueryChange?: (event?: any) => any;

    /**
     * 点击清空按钮时触发
     */
    onOnClear?: (event?: any) => any;

    /**
     * 下拉框展开或收起时触发
     */
    onOnOpenChange?: (event?: any) => any;

    /**
     * 新建条目时触发
     */
    onOnCreate?: (event?: any) => any;

    /**
     * 选择项目时触发
     */
    onOnSelect?: (event?: any) => any;

    /**
     * 配合 default-label 使用，详见示例
     */
    onOnSetDefaultOptions?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 自定义 Select 内头部图标
         */
        prefix?: () => any;

    };
}>

export declare const Option: DefineComponent<{
    /**
     * 选项值，默认根据此属性值进行筛选，必填
     */
    value?: string | number;

    /**
     * 选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。
     */
    label?: string;

    /**
     * 是否禁用当前项
     */
    disabled?: boolean;

    /**
     * 设置后，在多选时，标签内容会优先显示设置的值
     */
    tag?: string | number;

}>

export declare const OptionGroup: DefineComponent<{
    /**
     * 分组的组名
     */
    label?: string;

}>
