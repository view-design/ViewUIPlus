declare namespace _default {
    const name: string;
    namespace components {
        export { Select };
        export { Tree };
    }
    const emits: string[];
    const mixins: {
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
    }[];
    namespace props {
        namespace modelValue {
            const type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        }
        namespace data {
            const type_1: ArrayConstructor;
            export { type_1 as type };
            function _default(): any[];
            export { _default as default };
        }
        namespace multiple {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace showCheckbox {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace loadData {
            const type_4: FunctionConstructor;
            export { type_4 as type };
        }
        namespace transfer {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
    }
    function data(): {
        currentValue: any;
        isChangeValueInTree: boolean;
        isValueChangeByTree: boolean;
        isValueNull: boolean;
    };
    function data(): {
        currentValue: any;
        isChangeValueInTree: boolean;
        isValueChangeByTree: boolean;
        isValueNull: boolean;
    };
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        function data(): void;
        function data(): void;
    }
    namespace computed {
        function valueToArray(): any;
        function valueToArray(): any;
        function isCheckboxUsable(): any;
        function isCheckboxUsable(): any;
        function transferClassName(): "" | "ivu-tree-select-transfer";
        function transferClassName(): "" | "ivu-tree-select-transfer";
        function classes(): {
            'ivu-tree-select-with-checkbox': any;
        };
        function classes(): {
            'ivu-tree-select-with-checkbox': any;
        };
    }
    namespace methods {
        function handleSelectNode(selectedNodes: any, currentNode: any): void;
        function handleSelectNode(selectedNodes: any, currentNode: any): void;
        function handleUpdateTreeNodes(data: any, isInit?: boolean): void;
        function handleUpdateTreeNodes(data: any, isInit?: boolean): void;
        function handleUpdateSelectValue(value: any, label: any): void;
        function handleUpdateSelectValue(value: any, label: any): void;
        function handleChange(value: any): void;
        function handleChange(value: any): void;
        function handleOpenChange(status: any): void;
        function handleOpenChange(status: any): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
import Select from "../select/select.vue";
import Tree from "../tree/tree.vue";
