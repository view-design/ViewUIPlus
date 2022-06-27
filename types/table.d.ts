import type { DefineComponent } from 'vue';

export declare const Table: DefineComponent<{
    /**
     * 显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例**特定样式**。
     */
    data?: any[];

    /**
     * 表格列的配置描述，具体项见后文
     */
    columns?: any[];

    /**
     * 是否显示间隔斑马纹
     */
    stripe?: boolean;

    /**
     * 是否显示纵向边框
     */
    border?: boolean;

    /**
     * 是否显示表头
     */
    'show-header'?: boolean;

    /**
     * 表格宽度，单位 px
     */
    width?: number | string;

    /**
     * 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头
     */
    height?: number | string;

    /**
     * 表格最大高度，单位 px，设置后，如果表格内容大于此值，会固定表头
     */
    'max-height'?: number | string;

    /**
     * 表格是否加载中
     */
    loading?: boolean;

    /**
     * 禁用鼠标悬停时的高亮
     */
    'disabled-hover'?: boolean;

    /**
     * 是否支持高亮选中的行，即单选
     */
    'highlight-row'?: boolean;

    /**
     * 行的 className 的回调方法，传入参数：`row`：当前行数据 `index`：当前行的索引
     */
    'row-class-name'?: Function;

    /**
     * 表格尺寸，可选值为 `large`、`small`、`default` 或者不填
     */
    size?: string;

    /**
     * 数据为空时显示的提示内容
     */
    'no-data-text'?: string;

    /**
     * 筛选数据为空时显示的提示内容
     */
    'no-filtered-data-text'?: string;

    /**
     * 是否开启拖拽调整行顺序，需配合 @on-drag-drop 事件使用
     */
    draggable?: boolean;

    /**
     * 列使用 tooltip 时，配置它的主题，可选值为 dark 或 light
     */
    'tooltip-theme'?: string;

    /**
     * 列使用 tooltip 时，配置 Tooltip 的最大宽，默认是 300
     */
    'tooltip-max-width'?: number;

    /**
     * 是否强制使用内置的 row-key，开启后可能会影响性能
     */
    'row-key'?: boolean | string;

    /**
     * 合并行或列的计算方法
     */
    'span-method'?: Function;

    /**
     * 是否在表尾显示合计行
     */
    'show-summary'?: boolean;

    /**
     * 合计行第一列的文本
     */
    'sum-text'?: string;

    /**
     * 自定义的合计计算方法
     */
    'summary-method'?: Function;

    /**
     * 树形数据缩进宽度，单位 px
     */
    'indent-size'?: number;

    /**
     * 异步加载树形数据的方法，详见示例
     */
    'load-data'?: Function;

    /**
     * 展开树形数据时，是否需要更新 `_showChildren` 字段，使用异步树形数据时建议开启
     */
    'update-show-children'?: boolean;

    /**
     * 当前行点击右键是否会阻止默认行为
     */
    'context-menu'?: boolean;

    /**
     * 点击右键弹出菜单，需配合 slot `contextMenu` 一起使用，详见示例
     */
    'show-context-menu'?: boolean;

    /**
     * 列固定时，阴影显示规则，可选值为 `auto`、`show`、`hide`
     */
    'fixed-shadow'?: string;

    /**
     * 点击右键菜单项是否自动关闭右键菜单
     */
    'auto-close-contextmenu'?: boolean;

    /**
     * 开启 `highlight-row` 后有效，当表格的当前行发生变化的时候会触发
     */
    onOnCurrentChange?: (event?: any) => any;

    /**
     * 在多选模式下有效，选中某一项时触发
     */
    onOnSelect?: (event?: any) => any;

    /**
     * 在多选模式下有效，取消选中某一项时触发
     */
    onOnSelectCancel?: (event?: any) => any;

    /**
     * 在多选模式下有效，点击全选时触发
     */
    onOnSelectAll?: (event?: any) => any;

    /**
     * 在多选模式下有效，点击取消全选时触发
     */
    onOnSelectAllCancel?: (event?: any) => any;

    /**
     * 在多选模式下有效，只要选中项发生变化时就会触发
     */
    onOnSelectionChange?: (event?: any) => any;

    /**
     * 排序时有效，当点击排序时触发
     */
    onOnSortChange?: (event?: any) => any;

    /**
     * 筛选时有效，筛选条件发生变化时触发
     */
    onOnFilterChange?: (event?: any) => any;

    /**
     * 单击某一行时触发
     */
    onOnRowClick?: (event?: any) => any;

    /**
     * 双击某一行时触发
     */
    onOnRowDblclick?: (event?: any) => any;

    /**
     * 点击单元格时触发
     */
    onOnCellClick?: (event?: any) => any;

    /**
     * 展开或收起某一行时触发
     */
    onOnExpand?: (event?: any) => any;

    /**
     * 拖拽排序松开时触发，返回置换的两行数据索引
     */
    onOnDragDrop?: (event?: any) => any;

    /**
     * 拖拽调整列宽时触发
     */
    onOnColumnWidthResize?: (event?: any) => any;

    /**
     * 当前行点击右键时触发
     */
    onOnContextmenu?: (event?: any) => any;

    /**
     * 展开或收起子数据时触发
     */
    onOnExpandTree?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 表头
         */
        header?: () => any;

        /**
         * 页脚
         */
        footer?: () => any;

        /**
         * 加载中
         */
        loading?: () => any;

        /**
         * 右键菜单，详见示例
         */
        contextMenu?: () => any;

    };
}>

export declare const TableColumnConfig: {
    /**
     * 列类型，可选值为 index、selection、expand、html
     */
    type?: 'index' | 'selection' | 'expand' | 'html';

    /**
     * 列头显示文字
     */
    title?: string;

    /**
     * 对应列内容的字段名
     */
    key?: string;

    /**
     * 列宽
     */
    width?: number;

    /**
     * 最小列宽
     */
    minWidth?: number;

    /**
     * 最大列宽
     */
    maxWidth?: number;

    /**
     * 对齐方式，可选值为 `left` 左对齐、`right` 右对齐和 `center` 居中对齐
     */
    align?: 'left' | 'right' | 'center';

    /**
     * 列的样式名称
     */
    className?: string;

    /**
     * 列是否固定在左侧或者右侧，可选值为 `left` 左侧和 `right` 右侧
     */
    fixed?: 'left' | 'right';

    /**
     * 开启后，文本将不换行，超出部分显示为省略号
     */
    ellipsis?: boolean;

    /**
     * 开启后，文本将不换行，超出部分显示为省略号，并用 Tooltip 组件显示完整内容
     */
    tooltip?: boolean;

    /**
     * 配置 Tooltip 的主题，可选值为 dark 或 light
     */
    tooltipTheme?: string;

    /**
     * 配置 Tooltip 的最大宽，默认是 300
     */
    tooltipMaxWidth?: number;

    /**
     * 自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。
     */
    render?: Function;

    /**
     * 自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 `column` 和 `index`，分别为当前列数据和当前列索引。
     */
    renderHeader?: Function;

    /**
     * type 为 index 时可用，自定义序号
     */
    indexMethod?: Function;

    /**
     * 对应列是否可以排序，如果设置为 `custom`，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件
     */
    sortable?: boolean | 'custom';

    /**
     * 自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 `sortable: true` 时有效。type 值为 asc 和 desc
     */
    sortMethod?: Function;

    /**
     * 设置初始化排序。值为 asc 和 desc
     */
    sortType?: 'asc' | 'desc';

    /**
     * 过滤数据的选项，格式为数组，数组中每项包含 `label` 和 `value` 属性，使用过滤，必须同时配置 filterMethod
     */
    filters?: any[];

    /**
     * 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示
     */
    filterMethod?: Function;

    /**
     * 数据过滤的选项是否多选
     */
    filterMultiple?: boolean;

    /**
     * 在初始化时使用过滤，数组，值为需要过滤的 value 集合
     */
    filteredValue?: any[];

    /**
     * 使用远程过滤
     */
    filterRemote?: Function;

    /**
     * 表头分组
     */
    children?: any[];

    /**
     * 该列是否允许拖拽调整宽度，需开启 border 属性，且设置 width
     */
    resizable?: boolean;

    /**
     * 指定该列为显示展开/收起图标，树形数据时使用
     */
    tree?: boolean;

    /**
     * 使用 slot 自定义列时，列的渲染模式。可选值为 block、inline、inline-block，当使用树形数据时，建议使用 inline 或 inline-block
     */
    display?: string;

}
