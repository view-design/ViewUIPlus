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
    function data(): {
        className: string;
        prefix: string;
        placeholder: string;
        type: string;
    };
    function data(): {
        className: string;
        prefix: string;
        placeholder: string;
        type: string;
    };
}
export default _default;
