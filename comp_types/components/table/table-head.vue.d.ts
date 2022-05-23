declare namespace _default {
    const name: string;
    const mixins: ({
        methods: {
            t(...args: any[]): any;
        };
    } | {
        methods: {
            alignCls(column: any, row?: {}): (string | {
                [x: string]: any;
            })[];
            isPopperShow(column: any): boolean;
            setCellWidth(column: any): string;
        };
    })[];
    namespace components {
        export { CheckboxGroup };
        export { Checkbox };
        export { Poptip };
        export { iButton };
        export { renderHeader };
    }
    namespace props {
        const prefixCls: StringConstructor;
        const styleObject: ObjectConstructor;
        const columns: ArrayConstructor;
        const objData: ObjectConstructor;
        const data: ArrayConstructor;
        const columnsWidth: ObjectConstructor;
        namespace fixed {
            export const type: (StringConstructor | BooleanConstructor)[];
            const _default: boolean;
            export { _default as default };
        }
        const columnRows: ArrayConstructor;
        const fixedColumnRows: ArrayConstructor;
    }
    function data(): {
        draggingColumn: any;
        dragging: boolean;
        dragState: {};
    };
    function data(): {
        draggingColumn: any;
        dragging: boolean;
        dragState: {};
    };
    namespace computed {
        function styles(): any;
        function styles(): any;
        function isSelectAll(): boolean;
        function isSelectAll(): boolean;
        function headRows(): any;
        function headRows(): any;
        function isSelectDisabled(): boolean;
        function isSelectDisabled(): boolean;
    }
    namespace methods {
        function cellClasses(column: any): (string | {
            [x: string]: boolean;
        })[];
        function cellClasses(column: any): (string | {
            [x: string]: boolean;
        })[];
        function scrollBarCellClass(): {
            [x: string]: boolean;
        }[];
        function scrollBarCellClass(): {
            [x: string]: boolean;
        }[];
        function itemClasses(column: any, item: any): (string | {
            [x: string]: boolean;
        })[];
        function itemClasses(column: any, item: any): (string | {
            [x: string]: boolean;
        })[];
        function itemAllClasses(column: any): (string | {
            [x: string]: boolean;
        })[];
        function itemAllClasses(column: any): (string | {
            [x: string]: boolean;
        })[];
        function selectAll(): void;
        function selectAll(): void;
        function handleSort(index: any, type: any): void;
        function handleSort(index: any, type: any): void;
        function handleSortByHead(index: any): void;
        function handleSortByHead(index: any): void;
        function handleFilter(index: any): void;
        function handleFilter(index: any): void;
        function handleSelect(index: any, value: any): void;
        function handleSelect(index: any, value: any): void;
        function handleReset(index: any): void;
        function handleReset(index: any): void;
        function handleFilterHide(index: any): void;
        function handleFilterHide(index: any): void;
        function getColumn(rowIndex: any, index: any): any;
        function getColumn(rowIndex: any, index: any): any;
        function handleMouseDown(column: any, event: any): void;
        function handleMouseDown(column: any, event: any): void;
        function handleMouseMove(column: any, event: any): void;
        function handleMouseMove(column: any, event: any): void;
        function handleMouseOut(): void;
        function handleMouseOut(): void;
        function isChildrenSelected(objData: any, isSelectAll: any): any;
        function isChildrenSelected(objData: any, isSelectAll: any): any;
        function isChildrenAllDisabledAndUnSelected(objData: any, isAllDisabledAndUnSelected: any): any;
        function isChildrenAllDisabledAndUnSelected(objData: any, isAllDisabledAndUnSelected: any): any;
        function isChildrenDisabled(objData: any, isSelectDisabled: any): any;
        function isChildrenDisabled(objData: any, isSelectDisabled: any): any;
    }
}
export default _default;
import CheckboxGroup from "../checkbox/checkbox-group.vue";
import Checkbox from "../checkbox/checkbox.vue";
import Poptip from "../poptip/poptip.vue";
import iButton from "../button/button.vue";
import renderHeader from "./header";
