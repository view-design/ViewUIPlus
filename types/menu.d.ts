export declare class Menu {
    /**
     * 菜单类型，可选值为 `horizontal`（水平） 和 `vertical`（垂直）
     */
    mode: 'horizontal' | 'vertical';

    /**
     * 主题，可选值为 `light`、`dark`、`primary`，其中 primary 只适用于 `mode="horizontal"`
     */
    theme: 'light' | 'dark' | 'primary';

    /**
     * 激活菜单的 name 值
     */
    'active-name': string | number;

    /**
     * 展开的 Submenu 的 name 集合
     */
    'open-names': [];

    /**
     * 是否开启手风琴模式，开启后每次至多展开一个子菜单
     */
    accordion: boolean;

    /**
     * 导航菜单的宽度，只在 `mode="vertical"` 时有效，如果使用 `Col` 等布局，建议设置为 `auto`
     */
    width: string;

    /**
     * 选择菜单（MenuItem）时触发
     */
    $emit(eventName: 'on-select'): this;

    /**
     * 当 展开/收起 子菜单时触发
     */
    $emit(eventName: 'on-open-change'): this;

}

export declare class MenuItem {
    /**
     * 菜单项的唯一标识，必填
     */
    name: string | number;

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
    target: '_blank' | '_self' | '_parent' | '_top';

    /**
     * 同 vue-router append
     */
    append: boolean;

}

export declare class Submenu {
    /**
     * 子菜单的唯一标识，必填
     */
    name: string | number;

    $slots: {
        /**
         * 菜单项
         */
        '': [];

        /**
         * 子菜单标题
         */
        title: [];

    };
}

export declare class MenuGroup {
    /**
     * 分组标题
     */
    title: string;

}
