import type { DefineComponent } from 'vue';

export declare const Title: DefineComponent<{
    /**
     * 重要程度，相当于 `h1`、`h2`、`h3`、`h4`、`h5`
     */
    level?: 1 | 2 | 3 | 4 | 5;

    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value'?: string;

    /**
     * 文本类型，可选值为 `secondary`、`success`、`warning`、`danger`
     */
    type?: '' | 'secondary' | 'success' | 'warning' | 'danger';

    /**
     * 是否可以拷贝
     */
    copyable?: boolean;

    /**
     * 自定义拷贝内容
     */
    'copy-text'?: string;

    /**
     * 拷贝配置项，支持全局配置
     */
    'copy-config'?: object;

    /**
     * 是否可以编辑
     */
    editable?: boolean;

    /**
     * 编辑配置项，支持全局配置
     */
    'edit-config'?: object;

    /**
     * 自动溢出省略
     */
    ellipsis?: boolean;

    /**
     * 自动溢出省略配置项，支持全局配置
     */
    'ellipsis-config'?: object;

    /**
     * 禁用文本
     */
    disabled?: boolean;

    /**
     * 添加代码样式
     */
    code?: boolean;

    /**
     * 添加删除线样式
     */
    delete?: boolean;

    /**
     * 添加键盘样式
     */
    keyboard?: boolean;

    /**
     * 添加标记样式
     */
    mark?: boolean;

    /**
     * 添加下划线样式
     */
    underline?: boolean;

    /**
     * 是否加粗
     */
    strong?: boolean;

    /**
     * 是否斜体
     */
    italic?: boolean;

    /**
     * 是否开启 Tooltip 的 transfer 属性，仅适用于 ellipsis 模式
     */
    transfer?: boolean;

    /**
     * Tooltip 的 theme 属性，仅适用于 ellipsis 模式
     */
    theme?: 'dark' | 'light';

    /**
     * Tooltip 的 max-width 属性，仅适用于 ellipsis 模式
     */
    'max-width'?: number | string;

    /**
     * Tooltip 的 placement 属性，仅适用于 ellipsis 模式
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 拷贝成功时触发
     */
    onOnCopySuccess?: (event?: any) => any;

    /**
     * 拷贝失败时触发
     */
    onOnCopyError?: (event?: any) => any;

    /**
     * 进入编辑状态时触发
     */
    onOnEditStart?: (event?: any) => any;

    /**
     * 结束编辑状态时触发，即保存
     */
    onOnEditEnd?: (event?: any) => any;

    /**
     * 编辑内容时触发
     */
    onOnEditChange?: (event?: any) => any;

    /**
     * 退出编辑时触发
     */
    onOnEditCancel?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 文本内容，优先级低于 model-value
         */
        default?: () => any;

        /**
         * 自定义拷贝图标，可选参数 copied
         */
        copyIcon?: () => any;

        /**
         * 自定义编辑图标
         */
        editIcon?: () => any;

        /**
         * 自定义回车图标
         */
        enterIcon?: () => any;

    };
}>

export declare const Text: DefineComponent<{
    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value'?: string;

    /**
     * 文本类型，可选值为 `secondary`、`success`、`warning`、`danger`
     */
    type?: '' | 'secondary' | 'success' | 'warning' | 'danger';

    /**
     * 是否可以拷贝
     */
    copyable?: boolean;

    /**
     * 自定义拷贝内容
     */
    'copy-text'?: string;

    /**
     * 拷贝配置项，支持全局配置
     */
    'copy-config'?: object;

    /**
     * 是否可以编辑
     */
    editable?: boolean;

    /**
     * 编辑配置项，支持全局配置
     */
    'edit-config'?: object;

    /**
     * 自动溢出省略
     */
    ellipsis?: boolean;

    /**
     * 自动溢出省略配置项，支持全局配置
     */
    'ellipsis-config'?: object;

    /**
     * 禁用文本
     */
    disabled?: boolean;

    /**
     * 添加代码样式
     */
    code?: boolean;

    /**
     * 添加删除线样式
     */
    delete?: boolean;

    /**
     * 添加键盘样式
     */
    keyboard?: boolean;

    /**
     * 添加标记样式
     */
    mark?: boolean;

    /**
     * 添加下划线样式
     */
    underline?: boolean;

    /**
     * 是否加粗
     */
    strong?: boolean;

    /**
     * 是否斜体
     */
    italic?: boolean;

    /**
     * 是否开启 Tooltip 的 transfer 属性，仅适用于 ellipsis 模式
     */
    transfer?: boolean;

    /**
     * Tooltip 的 theme 属性，仅适用于 ellipsis 模式
     */
    theme?: 'dark' | 'light';

    /**
     * Tooltip 的 max-width 属性，仅适用于 ellipsis 模式
     */
    'max-width'?: number | string;

    /**
     * Tooltip 的 placement 属性，仅适用于 ellipsis 模式
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 拷贝成功时触发
     */
    onOnCopySuccess?: (event?: any) => any;

    /**
     * 拷贝失败时触发
     */
    onOnCopyError?: (event?: any) => any;

    /**
     * 进入编辑状态时触发
     */
    onOnEditStart?: (event?: any) => any;

    /**
     * 结束编辑状态时触发，即保存
     */
    onOnEditEnd?: (event?: any) => any;

    /**
     * 编辑内容时触发
     */
    onOnEditChange?: (event?: any) => any;

    /**
     * 退出编辑时触发
     */
    onOnEditCancel?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 文本内容，优先级低于 model-value
         */
        default?: () => any;

        /**
         * 自定义拷贝图标，可选参数 copied
         */
        copyIcon?: () => any;

        /**
         * 自定义编辑图标
         */
        editIcon?: () => any;

        /**
         * 自定义回车图标
         */
        enterIcon?: () => any;

    };
}>

export declare const Paragraph: DefineComponent<{
    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value'?: string;

    /**
     * 文本类型，可选值为 `secondary`、`success`、`warning`、`danger`
     */
    type?: '' | 'secondary' | 'success' | 'warning' | 'danger';

    /**
     * 是否可以拷贝
     */
    copyable?: boolean;

    /**
     * 自定义拷贝内容
     */
    'copy-text'?: string;

    /**
     * 拷贝配置项，支持全局配置
     */
    'copy-config'?: object;

    /**
     * 是否可以编辑
     */
    editable?: boolean;

    /**
     * 编辑配置项，支持全局配置
     */
    'edit-config'?: object;

    /**
     * 自动溢出省略
     */
    ellipsis?: boolean;

    /**
     * 自动溢出省略配置项，支持全局配置
     */
    'ellipsis-config'?: object;

    /**
     * 禁用文本
     */
    disabled?: boolean;

    /**
     * 添加代码样式
     */
    code?: boolean;

    /**
     * 添加删除线样式
     */
    delete?: boolean;

    /**
     * 添加键盘样式
     */
    keyboard?: boolean;

    /**
     * 添加标记样式
     */
    mark?: boolean;

    /**
     * 添加下划线样式
     */
    underline?: boolean;

    /**
     * 是否加粗
     */
    strong?: boolean;

    /**
     * 是否斜体
     */
    italic?: boolean;

    /**
     * 是否开启 Tooltip 的 transfer 属性，仅适用于 ellipsis 模式
     */
    transfer?: boolean;

    /**
     * Tooltip 的 theme 属性，仅适用于 ellipsis 模式
     */
    theme?: 'dark' | 'light';

    /**
     * Tooltip 的 max-width 属性，仅适用于 ellipsis 模式
     */
    'max-width'?: number | string;

    /**
     * Tooltip 的 placement 属性，仅适用于 ellipsis 模式
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 拷贝成功时触发
     */
    onOnCopySuccess?: (event?: any) => any;

    /**
     * 拷贝失败时触发
     */
    onOnCopyError?: (event?: any) => any;

    /**
     * 进入编辑状态时触发
     */
    onOnEditStart?: (event?: any) => any;

    /**
     * 结束编辑状态时触发，即保存
     */
    onOnEditEnd?: (event?: any) => any;

    /**
     * 编辑内容时触发
     */
    onOnEditChange?: (event?: any) => any;

    /**
     * 退出编辑时触发
     */
    onOnEditCancel?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 文本内容，优先级低于 model-value
         */
        default?: () => any;

        /**
         * 自定义拷贝图标，可选参数 copied
         */
        copyIcon?: () => any;

        /**
         * 自定义编辑图标
         */
        editIcon?: () => any;

        /**
         * 自定义回车图标
         */
        enterIcon?: () => any;

    };
}>

export declare const Link: DefineComponent<{
    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value'?: string;

    /**
     * 跳转的链接，支持 vue-router 对象
     */
    to?: string | object;

    /**
     * 路由跳转时，开启 replace 将不会向 history 添加新记录
     */
    replace?: boolean;

    /**
     * 相当于 a 链接的 target 属性
     */
    target?: string;

    /**
     * 同 vue-router append
     */
    append?: boolean;

    /**
     * 文本类型，可选值为 `secondary`、`success`、`warning`、`danger`
     */
    type?: '' | 'secondary' | 'success' | 'warning' | 'danger';

    /**
     * 是否可以拷贝
     */
    copyable?: boolean;

    /**
     * 自定义拷贝内容
     */
    'copy-text'?: string;

    /**
     * 拷贝配置项，支持全局配置
     */
    'copy-config'?: object;

    /**
     * 是否可以编辑
     */
    editable?: boolean;

    /**
     * 编辑配置项，支持全局配置
     */
    'edit-config'?: object;

    /**
     * 自动溢出省略
     */
    ellipsis?: boolean;

    /**
     * 自动溢出省略配置项，支持全局配置
     */
    'ellipsis-config'?: object;

    /**
     * 禁用文本
     */
    disabled?: boolean;

    /**
     * 添加代码样式
     */
    code?: boolean;

    /**
     * 添加删除线样式
     */
    delete?: boolean;

    /**
     * 添加键盘样式
     */
    keyboard?: boolean;

    /**
     * 添加标记样式
     */
    mark?: boolean;

    /**
     * 添加下划线样式
     */
    underline?: boolean;

    /**
     * 是否加粗
     */
    strong?: boolean;

    /**
     * 是否斜体
     */
    italic?: boolean;

    /**
     * 是否开启 Tooltip 的 transfer 属性，仅适用于 ellipsis 模式
     */
    transfer?: boolean;

    /**
     * Tooltip 的 theme 属性，仅适用于 ellipsis 模式
     */
    theme?: 'dark' | 'light';

    /**
     * Tooltip 的 max-width 属性，仅适用于 ellipsis 模式
     */
    'max-width'?: number | string;

    /**
     * Tooltip 的 placement 属性，仅适用于 ellipsis 模式
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 拷贝成功时触发
     */
    onOnCopySuccess?: (event?: any) => any;

    /**
     * 拷贝失败时触发
     */
    onOnCopyError?: (event?: any) => any;

    /**
     * 进入编辑状态时触发
     */
    onOnEditStart?: (event?: any) => any;

    /**
     * 结束编辑状态时触发，即保存
     */
    onOnEditEnd?: (event?: any) => any;

    /**
     * 编辑内容时触发
     */
    onOnEditChange?: (event?: any) => any;

    /**
     * 退出编辑时触发
     */
    onOnEditCancel?: (event?: any) => any;

    'v-slots'?: {
        /**
         * 文本内容，优先级低于 model-value
         */
        default?: () => any;

        /**
         * 自定义拷贝图标，可选参数 copied
         */
        copyIcon?: () => any;

        /**
         * 自定义编辑图标
         */
        editIcon?: () => any;

        /**
         * 自定义回车图标
         */
        enterIcon?: () => any;

    };
}>

export declare const CopyConfig: {
    /**
     * Tooltip 显示内容，为 false 则不显示
     */
    tooltips?: boolean | any[];

    /**
     * 是否显示复制成功的通知
     */
    showTip?: boolean;

    /**
     * 复制成功时的通知
     */
    successTip?: string;

    /**
     * 复制失败时的通知
     */
    errorTip?: string;

}

export declare const EditConfig: {
    /**
     * Tooltip 显示内容，为 false 则不显示
     */
    tooltip?: boolean | string;

    /**
     * 是否默认进入编辑状态
     */
    editing?: boolean;

    /**
     * 最大输入长度
     */
    maxlength?: number;

    /**
     * 自适应内容高度
     */
    autosize?: object;

    /**
     * 触发方式，可选值为 `icon`、`text`、`both`
     */
    triggerType?: 'icon' | 'text' | 'both';

}

export declare const EllipsisConfig: {
    /**
     * 最多显示的行数
     */
    rows?: number;

    /**
     * 是否以 Tooltip 显示完整内容或自定义内容
     */
    tooltip?: boolean | string;

}
