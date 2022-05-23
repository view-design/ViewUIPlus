declare namespace _default {
    const name: string;
    const mixins: ({
        props: {
            to: {
                type: (ObjectConstructor | StringConstructor)[];
            };
            replace: {
                type: BooleanConstructor;
                default: boolean;
            };
            target: {
                type: StringConstructor;
                validator(value: any): boolean;
                default: string;
            };
            append: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        computed: {
            linkUrl(): any;
        };
        methods: {
            handleOpenTo(): void;
            handleClick(new_window?: boolean): void;
            handleCheckClick(event: any, new_window?: boolean): boolean;
        };
    } | {
        inject: {
            FormInstance: {
                default: string;
            };
            FormItemInstance: {
                default: any;
            };
        };
        computed: {
            itemDisabled(): boolean;
        };
        methods: {
            handleFormItemChange(type: any, data: any): void;
        };
    })[];
    namespace components {
        export { Icon };
    }
    const emits: string[];
    namespace props {
        namespace type {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace shape {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        const loading: BooleanConstructor;
        const disabled: BooleanConstructor;
        namespace htmlType {
            const _default_1: string;
            export { _default_1 as default };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
        }
        namespace icon {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace customIcon {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_3: string;
            export { _default_3 as default };
        }
        namespace long {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace ghost {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function showSlot(): boolean;
        function showSlot(): boolean;
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function isHrefPattern(): boolean;
        function isHrefPattern(): boolean;
        function tagName(): "a" | "button";
        function tagName(): "a" | "button";
        function tagProps(): {
            href: any;
            target: any;
            type?: undefined;
        } | {
            type: any;
            href?: undefined;
            target?: undefined;
        };
        function tagProps(): {
            href: any;
            target: any;
            type?: undefined;
        } | {
            type: any;
            href?: undefined;
            target?: undefined;
        };
    }
    namespace methods {
        function handleClickLink(event: any): void;
        function handleClickLink(event: any): void;
    }
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}
export default _default;
import Icon from "../icon";
