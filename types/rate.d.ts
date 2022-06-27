import type { DefineComponent } from 'vue';

export declare const Rate: DefineComponent<{
    /**
     * star 总数
     */
    count?: number;

    /**
     * 当前 star 数，可以使用 v-model 双向绑定数据
     */
    'model-value'?: number;

    /**
     * 是否允许半选
     */
    'allow-half'?: boolean;

    /**
     * 是否只读，无法进行交互
     */
    disabled?: boolean;

    /**
     * 是否显示提示文字
     */
    'show-text'?: boolean;

    /**
     * 是否可以取消选择
     */
    clearable?: boolean;

    /**
     * 自定义字符
     */
    character?: string;

    /**
     * 使用图标
     */
    icon?: string;

    /**
     * 使用自定义图标
     */
    'custom-icon'?: string;

    /**
     * 评分改变时触发
     */
    onOnChange?: (event?: any) => any;

}>
