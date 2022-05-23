declare namespace _default {
    const name: string;
    const mixins: {
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
    }[];
    const emits: string[];
    namespace props {
        namespace authority {
            export const type: (FunctionConstructor | StringConstructor | BooleanConstructor | ArrayConstructor)[];
            const _default: boolean;
            export { _default as default };
        }
        namespace access {
            const type_1: (StringConstructor | ArrayConstructor)[];
            export { type_1 as type };
        }
        namespace prevent {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace message {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace customTip {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace display {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
    }
    namespace computed {
        function isPermission(): any;
        function isPermission(): any;
        function options(): {
            class: {
                'ivu-auth': boolean;
                'ivu-auth-permission': () => any;
                'ivu-auth-no-math': boolean;
                'ivu-auth-redirect': any;
                'ivu-auth-prevent': any;
            };
            style: {
                display: any;
            };
        };
        function options(): {
            class: {
                'ivu-auth': boolean;
                'ivu-auth-permission': () => any;
                'ivu-auth-no-math': boolean;
                'ivu-auth-redirect': any;
                'ivu-auth-prevent': any;
            };
            style: {
                display: any;
            };
        };
    }
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    namespace methods {
        function handlePreventClick(event: any): void;
        function handlePreventClick(event: any): void;
    }
    function created(): void;
    function created(): void;
}
export default _default;
