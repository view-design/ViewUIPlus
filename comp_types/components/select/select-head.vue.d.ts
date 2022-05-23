declare namespace _default {
    const name: string;
    const mixins: ({
        data(): {
            globalConfig: {};
        };
        created(): void;
    } | {
        methods: {
            t(...args: any[]): any;
        };
    })[];
    namespace components {
        export { Icon };
    }
    const emits: string[];
    const inject: string[];
    namespace props {
        namespace disabled {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace filterable {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace multiple {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace remote {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace initialLabel {
            const type_4: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            export { type_4 as type };
        }
        namespace values {
            const type_5: ArrayConstructor;
            export { type_5 as type };
            function _default_4(): any[];
            export { _default_4 as default };
        }
        namespace clearable {
            const type_6: (FunctionConstructor | BooleanConstructor)[];
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace inputElementId {
            const type_7: StringConstructor;
            export { type_7 as type };
        }
        namespace placeholder {
            const type_8: StringConstructor;
            export { type_8 as type };
        }
        namespace queryProp {
            const type_9: StringConstructor;
            export { type_9 as type };
            const _default_6: string;
            export { _default_6 as default };
        }
        namespace prefix {
            const type_10: StringConstructor;
            export { type_10 as type };
        }
        namespace maxTagCount {
            const type_11: NumberConstructor;
            export { type_11 as type };
        }
        namespace maxTagPlaceholder {
            const type_12: FunctionConstructor;
            export { type_12 as type };
        }
        namespace allowCreate {
            const type_13: BooleanConstructor;
            export { type_13 as type };
        }
        namespace showCreateItem {
            const type_14: BooleanConstructor;
            export { type_14 as type };
        }
    }
    function data(): {
        prefixCls: string;
        query: string;
        inputLength: number;
        remoteInitialLabel: any;
        preventRemoteCall: boolean;
    };
    function data(): {
        prefixCls: string;
        query: string;
        inputLength: number;
        remoteInitialLabel: any;
        preventRemoteCall: boolean;
    };
    namespace computed {
        function singleDisplayClasses(): {
            [x: string]: boolean | (() => any);
        }[];
        function singleDisplayClasses(): {
            [x: string]: boolean | (() => any);
        }[];
        function singleDisplayValue(): string | (() => any);
        function singleDisplayValue(): string | (() => any);
        function showPlaceholder(): boolean;
        function showPlaceholder(): boolean;
        function resetSelect(): any;
        function resetSelect(): any;
        function inputStyle(): {
            width: string;
        };
        function inputStyle(): {
            width: string;
        };
        function localePlaceholder(): any;
        function localePlaceholder(): any;
        function selectedSingle(): any;
        function selectedSingle(): any;
        function selectedMultiple(): any;
        function selectedMultiple(): any;
        function headCls(): {
            [x: string]: () => any;
        };
        function headCls(): {
            [x: string]: () => any;
        };
        function arrowType(): string;
        function arrowType(): string;
        function customArrowType(): string;
        function customArrowType(): string;
        function showPrefix(): any;
        function showPrefix(): any;
        function arrowSize(): string;
        function arrowSize(): string;
    }
    namespace methods {
        function onInputFocus(): void;
        function onInputFocus(): void;
        function onInputBlur(): void;
        function onInputBlur(): void;
        function removeTag(value: any): boolean;
        function removeTag(value: any): boolean;
        function resetInputState(): void;
        function resetInputState(): void;
        function handleInputDelete(e: any): void;
        function handleInputDelete(e: any): void;
        function handleInputEnter(e: any): void;
        function handleInputEnter(e: any): void;
        function onHeaderClick(e: any): void;
        function onHeaderClick(e: any): void;
        function onClear(): void;
        function onClear(): void;
    }
    namespace watch {
        function values([value]: [any]): void;
        function values([value]: [any]): void;
        const query: any;
        function queryProp(query: any): void;
        function queryProp(query: any): void;
    }
}
export default _default;
import Icon from "../icon";
