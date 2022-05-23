declare namespace _default {
    const name: string;
    function provide(): {
        GridInstance: {
            name: string;
            provide(): any;
            props: {
                col: {
                    type: NumberConstructor;
                    default: number;
                };
                square: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                padding: {
                    type: StringConstructor;
                    default: string;
                };
                center: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                border: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hover: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                resizeCount: number;
                handleResize: () => void;
            };
            computed: {
                classes(): {
                    'ivu-grid-center': any;
                    'ivu-grid-border': any;
                    'ivu-grid-hover': any;
                };
            };
            methods: {
                onResize(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    function provide(): {
        GridInstance: {
            name: string;
            provide(): any;
            props: {
                col: {
                    type: NumberConstructor;
                    default: number;
                };
                square: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                padding: {
                    type: StringConstructor;
                    default: string;
                };
                center: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                border: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hover: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                resizeCount: number;
                handleResize: () => void;
            };
            computed: {
                classes(): {
                    'ivu-grid-center': any;
                    'ivu-grid-border': any;
                    'ivu-grid-hover': any;
                };
            };
            methods: {
                onResize(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    namespace props {
        namespace col {
            export const type: NumberConstructor;
            const _default: number;
            export { _default as default };
        }
        namespace square {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace padding {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace center {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace border {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace hover {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
    }
    function data(): {
        resizeCount: number;
        handleResize: () => void;
    };
    function data(): {
        resizeCount: number;
        handleResize: () => void;
    };
    namespace computed {
        function classes(): {
            'ivu-grid-center': any;
            'ivu-grid-border': any;
            'ivu-grid-hover': any;
        };
        function classes(): {
            'ivu-grid-center': any;
            'ivu-grid-border': any;
            'ivu-grid-hover': any;
        };
    }
    namespace methods {
        function onResize(): void;
        function onResize(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
