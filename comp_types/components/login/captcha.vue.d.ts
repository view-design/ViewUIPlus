declare namespace _default {
    const name: string;
    const mixins: {
        inject: string[];
        emits: string[];
        props: {
            rules: {
                type: (ObjectConstructor | ArrayConstructor)[];
                default(props: any): {
                    required: boolean;
                    message: any;
                    trigger: string;
                }[];
            };
            value: {
                type: StringConstructor;
            };
            name: {
                type: StringConstructor;
                required: boolean;
            };
            enterToSubmit: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
        data(): {
            prop: string;
        };
        methods: {
            handleChange(val: any): void;
            handleEnter(): void;
            handleSetValue(): void;
            handleGetProps(): any;
        };
        render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        created(): void;
    }[];
    const emits: string[];
    namespace props {
        namespace field {
            const type: (StringConstructor | ArrayConstructor)[];
        }
        namespace countDown {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default: number;
            export { _default as default };
        }
        namespace text {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace unitText {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        const beforeClick: FunctionConstructor;
    }
    function data(): {
        className: string;
        prefix: string;
        placeholder: string;
        type: string;
        buttonDisabled: boolean;
        limitCountDown: number;
    };
    function data(): {
        className: string;
        prefix: string;
        placeholder: string;
        type: string;
        buttonDisabled: boolean;
        limitCountDown: number;
    };
    namespace methods {
        function handleClickCaptcha(): void;
        function handleClickCaptcha(): void;
        function handleBeforeGetCaptcha(): void;
        function handleBeforeGetCaptcha(): void;
        function handleGetCaptcha(): void;
        function handleGetCaptcha(): void;
        function handleCountDown(): void;
        function handleCountDown(): void;
    }
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
