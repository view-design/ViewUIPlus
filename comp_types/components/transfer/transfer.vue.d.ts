declare namespace _default {
    const name: string;
    const mixins: ({
        methods: {
            t(...args: any[]): any;
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
    const emits: string[];
    function provide(): {
        TransferInstance: {
            name: string;
            mixins: ({
                methods: {
                    t(...args: any[]): any;
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
            emits: string[];
            provide(): any;
            render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            props: {
                data: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                renderFormat: {
                    type: FunctionConstructor;
                    default(item: any): any;
                };
                targetKeys: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                selectedKeys: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                listStyle: {
                    type: ObjectConstructor;
                    default(): {};
                };
                titles: {
                    type: ArrayConstructor;
                };
                operations: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                filterable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                filterPlaceholder: {
                    type: StringConstructor;
                };
                filterMethod: {
                    type: FunctionConstructor;
                    default(data: any, query: any): boolean;
                };
                notFoundText: {
                    type: StringConstructor;
                };
                reverseOperation: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                prefixCls: string;
                leftData: any[];
                rightData: any[];
                leftCheckedKeys: any[];
                rightCheckedKeys: any[];
            };
            computed: {
                classes(): string[];
                leftValidKeysCount(): any;
                rightValidKeysCount(): any;
                localeFilterPlaceholder(): any;
                localeNotFoundText(): any;
                localeTitles(): any;
            };
            methods: {
                getValidKeys(direction: any): any;
                splitData(init?: boolean): void;
                splitSelectedKey(): void;
                moveTo(direction: any): void;
                handleLeftCheckedKeysChange(keys: any): void;
                handleRightCheckedKeysChange(keys: any): void;
                handleCheckedKeys(): void;
            };
            watch: {
                targetKeys(): void;
                data(): void;
            };
            mounted(): void;
        };
    };
    function provide(): {
        TransferInstance: {
            name: string;
            mixins: ({
                methods: {
                    t(...args: any[]): any;
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
            emits: string[];
            provide(): any;
            render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>;
            props: {
                data: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                renderFormat: {
                    type: FunctionConstructor;
                    default(item: any): any;
                };
                targetKeys: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                selectedKeys: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                listStyle: {
                    type: ObjectConstructor;
                    default(): {};
                };
                titles: {
                    type: ArrayConstructor;
                };
                operations: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                filterable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                filterPlaceholder: {
                    type: StringConstructor;
                };
                filterMethod: {
                    type: FunctionConstructor;
                    default(data: any, query: any): boolean;
                };
                notFoundText: {
                    type: StringConstructor;
                };
                reverseOperation: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                prefixCls: string;
                leftData: any[];
                rightData: any[];
                leftCheckedKeys: any[];
                rightCheckedKeys: any[];
            };
            computed: {
                classes(): string[];
                leftValidKeysCount(): any;
                rightValidKeysCount(): any;
                localeFilterPlaceholder(): any;
                localeNotFoundText(): any;
                localeTitles(): any;
            };
            methods: {
                getValidKeys(direction: any): any;
                splitData(init?: boolean): void;
                splitSelectedKey(): void;
                moveTo(direction: any): void;
                handleLeftCheckedKeysChange(keys: any): void;
                handleRightCheckedKeysChange(keys: any): void;
                handleCheckedKeys(): void;
            };
            watch: {
                targetKeys(): void;
                data(): void;
            };
            mounted(): void;
        };
    };
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    namespace props {
        namespace data {
            export const type: ArrayConstructor;
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace renderFormat {
            const type_1: FunctionConstructor;
            export { type_1 as type };
            function _default(item: any): any;
            function _default(item: any): any;
            export { _default as default };
        }
        namespace targetKeys {
            const type_2: ArrayConstructor;
            export { type_2 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace selectedKeys {
            const type_3: ArrayConstructor;
            export { type_3 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace listStyle {
            const type_4: ObjectConstructor;
            export { type_4 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        namespace titles {
            const type_5: ArrayConstructor;
            export { type_5 as type };
        }
        namespace operations {
            const type_6: ArrayConstructor;
            export { type_6 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace filterable {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default: boolean;
            export { _default as default };
        }
        namespace filterPlaceholder {
            const type_8: StringConstructor;
            export { type_8 as type };
        }
        namespace filterMethod {
            const type_9: FunctionConstructor;
            export { type_9 as type };
            function _default(data: any, query: any): boolean;
            function _default(data: any, query: any): boolean;
            export { _default as default };
        }
        namespace notFoundText {
            const type_10: StringConstructor;
            export { type_10 as type };
        }
        namespace reverseOperation {
            const type_11: BooleanConstructor;
            export { type_11 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
    }
    function data(): {
        prefixCls: string;
        leftData: any[];
        rightData: any[];
        leftCheckedKeys: any[];
        rightCheckedKeys: any[];
    };
    function data(): {
        prefixCls: string;
        leftData: any[];
        rightData: any[];
        leftCheckedKeys: any[];
        rightCheckedKeys: any[];
    };
    namespace computed {
        function classes(): string[];
        function classes(): string[];
        function leftValidKeysCount(): any;
        function leftValidKeysCount(): any;
        function rightValidKeysCount(): any;
        function rightValidKeysCount(): any;
        function localeFilterPlaceholder(): any;
        function localeFilterPlaceholder(): any;
        function localeNotFoundText(): any;
        function localeNotFoundText(): any;
        function localeTitles(): any;
        function localeTitles(): any;
    }
    namespace methods {
        function getValidKeys(direction: any): any;
        function getValidKeys(direction: any): any;
        function splitData(init?: boolean): void;
        function splitData(init?: boolean): void;
        function splitSelectedKey(): void;
        function splitSelectedKey(): void;
        function moveTo(direction: any): void;
        function moveTo(direction: any): void;
        function handleLeftCheckedKeysChange(keys: any): void;
        function handleLeftCheckedKeysChange(keys: any): void;
        function handleRightCheckedKeysChange(keys: any): void;
        function handleRightCheckedKeysChange(keys: any): void;
        function handleCheckedKeys(): void;
        function handleCheckedKeys(): void;
    }
    namespace watch {
        function targetKeys(): void;
        function targetKeys(): void;
        function data(): void;
        function data(): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
