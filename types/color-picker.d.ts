import type { DefineComponent } from 'vue';

export declare const ColorPicker: DefineComponent<{
    /**
     * 绑定的值，可使用 v-model 双向绑定
     */
    'model-value'?: string;

    /**
     * 是否禁用
     */
    disabled?: boolean;

    /**
     * 是否可以输入色值
     */
    editable?: boolean;

    /**
     * 是否支持透明度选择
     */
    alpha?: boolean;

    /**
     * 是否支持色彩选择
     */
    hue?: boolean;

    /**
     * 是否显示推荐的颜色预设
     */
    recommend?: boolean;

    /**
     * 自定义颜色预设
     */
    colors?: any[];

    /**
     * 颜色的格式，可选值为 hsl、hsv、hex、rgb
     */
    format?: 'hsl' | 'hsv' | 'hex' | 'rgb';

    /**
     * 尺寸，可选值为`large`、`small`、`default`或者不设置
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
     */
    transfer?: boolean;

    /**
     * 是否开启 capture 模式，也可通过全局配置
     */
    capture?: boolean;

    /**
     * 开启 transfer 时，给浮层添加额外的 class 名称
     */
    'transfer-class-name'?: string;

    /**
     * 是否开启 Popper 的 eventsEnabled 属性，开启可能会牺牲一定的性能
     */
    'events-enabled'?: boolean;

    /**
     * 当绑定值变化时触发
     */
    onOnChange?: (event?: any) => any;

    /**
     * 面板中当前显示的颜色发生改变时触发
     */
    onOnActiveChange?: (event?: any) => any;

    /**
     * 下拉框展开或收起时触发
     */
    onOnOpenChange?: (event?: any) => any;

}>
