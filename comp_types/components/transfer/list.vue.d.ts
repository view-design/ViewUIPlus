declare namespace _default {
    const name: string;
    namespace components {
        export { Search };
        export { Checkbox };
    }
    const inject: string[];
    const emits: string[];
    namespace props {
        const prefixCls: StringConstructor;
        const data: ArrayConstructor;
        const renderFormat: FunctionConstructor;
        const checkedKeys: ArrayConstructor;
        const listStyle: ObjectConstructor;
        const title: (StringConstructor | NumberConstructor)[];
        const filterable: BooleanConstructor;
        const filterPlaceholder: StringConstructor;
        const filterMethod: FunctionConstructor;
        const notFoundText: StringConstructor;
        const validKeysCount: NumberConstructor;
    }
    function data(): {
        showItems: any[];
        query: string;
        showFooter: boolean;
    };
    function data(): {
        showItems: any[];
        query: string;
        showFooter: boolean;
    };
    namespace watch {
        function data(): void;
        function data(): void;
    }
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function bodyClasses(): (string | {
            [x: string]: any;
        })[];
        function bodyClasses(): (string | {
            [x: string]: any;
        })[];
        function count(): string;
        function count(): string;
        function checkedAll(): boolean;
        function checkedAll(): boolean;
        function checkedAllDisabled(): boolean;
        function checkedAllDisabled(): boolean;
        function filterData(): any;
        function filterData(): any;
    }
    namespace methods {
        function itemClasses(item: any): (string | {
            [x: string]: any;
        })[];
        function itemClasses(item: any): (string | {
            [x: string]: any;
        })[];
        function showLabel(item: any): any;
        function showLabel(item: any): any;
        function isCheck(item: any): any;
        function isCheck(item: any): any;
        function select(item: any): void;
        function select(item: any): void;
        function updateFilteredData(): void;
        function updateFilteredData(): void;
        function toggleSelectAll(status: any): void;
        function toggleSelectAll(status: any): void;
        function handleQueryClear(): void;
        function handleQueryClear(): void;
        function handleQueryChange(val: any): void;
        function handleQueryChange(val: any): void;
    }
    function created(): void;
    function created(): void;
    function mounted(): void;
    function mounted(): void;
}
export default _default;
import Search from "./search.vue";
import Checkbox from "../checkbox/checkbox.vue";
