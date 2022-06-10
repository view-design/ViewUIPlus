export declare class Title {
    /**
     * 重要程度，相当于 `h1`、`h2`、`h3`、`h4`、`h5`
     */
    level: 1 | 2 | 3 | 4 | 5;

    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value': string;

    /**
     * 文本类型，可选值为 `secondary`、`success`、`warning`、`danger`
     */
    type: '' | 'secondary' | 'success' | 'warning' | 'danger';

    /**
     * 是否可以拷贝
     */
    copyable: boolean;

    /**
     * 自定义拷贝内容
     */
    'copy-text': string;

    /**
     * 拷贝配置项，支持全局配置
     */
    'copy-config': object;

    /**
     * 是否可以编辑
     */
    editable: boolean;

    /**
     * 编辑配置项，支持全局配置
     */
    'edit-config': object;

    /**
     * 自动溢出省略
     */
    ellipsis: boolean;

    /**
     * 自动溢出省略配置项，支持全局配置
     */
    'ellipsis-config': object;

    /**
     * 禁用文本
     */
    disabled: boolean;

    /**
     * 添加代码样式
     */
    code: boolean;

    /**
     * 添加删除线样式
     */
    delete: boolean;

    /**
     * 添加键盘样式
     */
    keyboard: boolean;

    /**
     * 添加标记样式
     */
    mark: boolean;

    /**
     * 添加下划线样式
     */
    underline: boolean;

    /**
     * 是否加粗
     */
    strong: boolean;

    /**
     * 是否斜体
     */
    italic: boolean;

    /**
     * 是否开启 Tooltip 的 transfer 属性，仅适用于 ellipsis 模式
     */
    transfer: boolean;

    /**
     * Tooltip 的 theme 属性，仅适用于 ellipsis 模式
     */
    theme: 'dark' | 'light';

    /**
     * Tooltip 的 max-width 属性，仅适用于 ellipsis 模式
     */
    'max-width': number | string;

    /**
     * Tooltip 的 placement 属性，仅适用于 ellipsis 模式
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 拷贝成功时触发
     */
    $emit(eventName: 'on-copy-success'): this;

    /**
     * 拷贝失败时触发
     */
    $emit(eventName: 'on-copy-error'): this;

    /**
     * 进入编辑状态时触发
     */
    $emit(eventName: 'on-edit-start'): this;

    /**
     * 结束编辑状态时触发，即保存
     */
    $emit(eventName: 'on-edit-end'): this;

    /**
     * 编辑内容时触发
     */
    $emit(eventName: 'on-edit-change'): this;

    /**
     * 退出编辑时触发
     */
    $emit(eventName: 'on-edit-cancel'): this;

    $slots: {
        /**
         * 文本内容，优先级低于 model-value
         */
        default: [];

        /**
         * 自定义拷贝图标，可选参数 copied
         */
        copyIcon: [];

        /**
         * 自定义编辑图标
         */
        editIcon: [];

        /**
         * 自定义回车图标
         */
        enterIcon: [];

    };
}

export declare class Text {
    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value': string;

    /**
     * 文本类型，可选值为 `secondary`、`success`、`warning`、`danger`
     */
    type: '' | 'secondary' | 'success' | 'warning' | 'danger';

    /**
     * 是否可以拷贝
     */
    copyable: boolean;

    /**
     * 自定义拷贝内容
     */
    'copy-text': string;

    /**
     * 拷贝配置项，支持全局配置
     */
    'copy-config': object;

    /**
     * 是否可以编辑
     */
    editable: boolean;

    /**
     * 编辑配置项，支持全局配置
     */
    'edit-config': object;

    /**
     * 自动溢出省略
     */
    ellipsis: boolean;

    /**
     * 自动溢出省略配置项，支持全局配置
     */
    'ellipsis-config': object;

    /**
     * 禁用文本
     */
    disabled: boolean;

    /**
     * 添加代码样式
     */
    code: boolean;

    /**
     * 添加删除线样式
     */
    delete: boolean;

    /**
     * 添加键盘样式
     */
    keyboard: boolean;

    /**
     * 添加标记样式
     */
    mark: boolean;

    /**
     * 添加下划线样式
     */
    underline: boolean;

    /**
     * 是否加粗
     */
    strong: boolean;

    /**
     * 是否斜体
     */
    italic: boolean;

    /**
     * 是否开启 Tooltip 的 transfer 属性，仅适用于 ellipsis 模式
     */
    transfer: boolean;

    /**
     * Tooltip 的 theme 属性，仅适用于 ellipsis 模式
     */
    theme: 'dark' | 'light';

    /**
     * Tooltip 的 max-width 属性，仅适用于 ellipsis 模式
     */
    'max-width': number | string;

    /**
     * Tooltip 的 placement 属性，仅适用于 ellipsis 模式
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 拷贝成功时触发
     */
    $emit(eventName: 'on-copy-success'): this;

    /**
     * 拷贝失败时触发
     */
    $emit(eventName: 'on-copy-error'): this;

    /**
     * 进入编辑状态时触发
     */
    $emit(eventName: 'on-edit-start'): this;

    /**
     * 结束编辑状态时触发，即保存
     */
    $emit(eventName: 'on-edit-end'): this;

    /**
     * 编辑内容时触发
     */
    $emit(eventName: 'on-edit-change'): this;

    /**
     * 退出编辑时触发
     */
    $emit(eventName: 'on-edit-cancel'): this;

    $slots: {
        /**
         * 文本内容，优先级低于 model-value
         */
        default: [];

        /**
         * 自定义拷贝图标，可选参数 copied
         */
        copyIcon: [];

        /**
         * 自定义编辑图标
         */
        editIcon: [];

        /**
         * 自定义回车图标
         */
        enterIcon: [];

    };
}

export declare class Paragraph {
    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value': string;

    /**
     * 文本类型，可选值为 `secondary`、`success`、`warning`、`danger`
     */
    type: '' | 'secondary' | 'success' | 'warning' | 'danger';

    /**
     * 是否可以拷贝
     */
    copyable: boolean;

    /**
     * 自定义拷贝内容
     */
    'copy-text': string;

    /**
     * 拷贝配置项，支持全局配置
     */
    'copy-config': object;

    /**
     * 是否可以编辑
     */
    editable: boolean;

    /**
     * 编辑配置项，支持全局配置
     */
    'edit-config': object;

    /**
     * 自动溢出省略
     */
    ellipsis: boolean;

    /**
     * 自动溢出省略配置项，支持全局配置
     */
    'ellipsis-config': object;

    /**
     * 禁用文本
     */
    disabled: boolean;

    /**
     * 添加代码样式
     */
    code: boolean;

    /**
     * 添加删除线样式
     */
    delete: boolean;

    /**
     * 添加键盘样式
     */
    keyboard: boolean;

    /**
     * 添加标记样式
     */
    mark: boolean;

    /**
     * 添加下划线样式
     */
    underline: boolean;

    /**
     * 是否加粗
     */
    strong: boolean;

    /**
     * 是否斜体
     */
    italic: boolean;

    /**
     * 是否开启 Tooltip 的 transfer 属性，仅适用于 ellipsis 模式
     */
    transfer: boolean;

    /**
     * Tooltip 的 theme 属性，仅适用于 ellipsis 模式
     */
    theme: 'dark' | 'light';

    /**
     * Tooltip 的 max-width 属性，仅适用于 ellipsis 模式
     */
    'max-width': number | string;

    /**
     * Tooltip 的 placement 属性，仅适用于 ellipsis 模式
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 拷贝成功时触发
     */
    $emit(eventName: 'on-copy-success'): this;

    /**
     * 拷贝失败时触发
     */
    $emit(eventName: 'on-copy-error'): this;

    /**
     * 进入编辑状态时触发
     */
    $emit(eventName: 'on-edit-start'): this;

    /**
     * 结束编辑状态时触发，即保存
     */
    $emit(eventName: 'on-edit-end'): this;

    /**
     * 编辑内容时触发
     */
    $emit(eventName: 'on-edit-change'): this;

    /**
     * 退出编辑时触发
     */
    $emit(eventName: 'on-edit-cancel'): this;

    $slots: {
        /**
         * 文本内容，优先级低于 model-value
         */
        default: [];

        /**
         * 自定义拷贝图标，可选参数 copied
         */
        copyIcon: [];

        /**
         * 自定义编辑图标
         */
        editIcon: [];

        /**
         * 自定义回车图标
         */
        enterIcon: [];

    };
}

export declare class Link {
    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value': string;

    /**
     * 跳转的链接，支持 vue-router 对象
     */
    to: string | object;

    /**
     * 路由跳转时，开启 replace 将不会向 history 添加新记录
     */
    replace: boolean;

    /**
     * 相当于 a 链接的 target 属性
     */
    target: string;

    /**
     * 同 vue-router append
     */
    append: boolean;

    /**
     * 文本类型，可选值为 `secondary`、`success`、`warning`、`danger`
     */
    type: '' | 'secondary' | 'success' | 'warning' | 'danger';

    /**
     * 是否可以拷贝
     */
    copyable: boolean;

    /**
     * 自定义拷贝内容
     */
    'copy-text': string;

    /**
     * 拷贝配置项，支持全局配置
     */
    'copy-config': object;

    /**
     * 是否可以编辑
     */
    editable: boolean;

    /**
     * 编辑配置项，支持全局配置
     */
    'edit-config': object;

    /**
     * 自动溢出省略
     */
    ellipsis: boolean;

    /**
     * 自动溢出省略配置项，支持全局配置
     */
    'ellipsis-config': object;

    /**
     * 禁用文本
     */
    disabled: boolean;

    /**
     * 添加代码样式
     */
    code: boolean;

    /**
     * 添加删除线样式
     */
    delete: boolean;

    /**
     * 添加键盘样式
     */
    keyboard: boolean;

    /**
     * 添加标记样式
     */
    mark: boolean;

    /**
     * 添加下划线样式
     */
    underline: boolean;

    /**
     * 是否加粗
     */
    strong: boolean;

    /**
     * 是否斜体
     */
    italic: boolean;

    /**
     * 是否开启 Tooltip 的 transfer 属性，仅适用于 ellipsis 模式
     */
    transfer: boolean;

    /**
     * Tooltip 的 theme 属性，仅适用于 ellipsis 模式
     */
    theme: 'dark' | 'light';

    /**
     * Tooltip 的 max-width 属性，仅适用于 ellipsis 模式
     */
    'max-width': number | string;

    /**
     * Tooltip 的 placement 属性，仅适用于 ellipsis 模式
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';

    /**
     * 拷贝成功时触发
     */
    $emit(eventName: 'on-copy-success'): this;

    /**
     * 拷贝失败时触发
     */
    $emit(eventName: 'on-copy-error'): this;

    /**
     * 进入编辑状态时触发
     */
    $emit(eventName: 'on-edit-start'): this;

    /**
     * 结束编辑状态时触发，即保存
     */
    $emit(eventName: 'on-edit-end'): this;

    /**
     * 编辑内容时触发
     */
    $emit(eventName: 'on-edit-change'): this;

    /**
     * 退出编辑时触发
     */
    $emit(eventName: 'on-edit-cancel'): this;

    $slots: {
        /**
         * 文本内容，优先级低于 model-value
         */
        default: [];

        /**
         * 自定义拷贝图标，可选参数 copied
         */
        copyIcon: [];

        /**
         * 自定义编辑图标
         */
        editIcon: [];

        /**
         * 自定义回车图标
         */
        enterIcon: [];

    };
}
