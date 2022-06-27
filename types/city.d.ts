import type { DefineComponent } from 'vue';

export declare const City: DefineComponent<{
    /**
     * 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。该值为城市 code，[查看全部城市 code](https://file.iviewui.com/iview-pro/city.json)
     */
    value?: string;

    /**
     * value 值可以设置为名称，比如北京（名称不含“市”字）
     */
    'use-name'?: boolean;

    /**
     * 预设城市，会出现在快捷选择区域，各项为城市 code
     */
    cities?: any[];

    /**
     * 是否禁用选择器
     */
    disabled?: boolean;

    /**
     * 是否显示后缀“市”，例如开启则显示“北京市”，否则显示“北京”
     */
    'show-suffix'?: boolean;

    /**
     * 选择框大小，可选值为`large`、`small`、`default` 或者不填
     */
    size?: string;

    /**
     * 是否将弹层放置于 body 内
     */
    transfer?: boolean;

    /**
     * 给表单元素设置 `id`，详见 Form 用法。
     */
    'element-id'?: string;

    /**
     * 默认的提示文字
     */
    placeholder?: string;

    /**
     * 搜索框默认文字
     */
    'search-placeholder'?: string;

    /**
     * 选择城市时触发，返回该城市的详细内容，包括城市 code (c)，对应省 code (p)，城市名 (n)，城市名首字母缩写 (l)
     */
    onOnChange?: (event?: any) => any;

}>
