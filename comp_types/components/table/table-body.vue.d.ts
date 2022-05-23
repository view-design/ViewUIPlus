declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            alignCls(column: any, row?: {}): (string | {
                [x: string]: any;
            })[];
            isPopperShow(column: any): boolean;
            setCellWidth(column: any): string;
        };
    }[];
    namespace components {
        export { TableCell };
        export { Expand };
        export { TableTr };
    }
    namespace props {
        const prefixCls: StringConstructor;
        const styleObject: ObjectConstructor;
        const columns: ArrayConstructor;
        const data: ArrayConstructor;
        const objData: ObjectConstructor;
        const columnsWidth: ObjectConstructor;
        namespace fixed {
            export const type: (StringConstructor | BooleanConstructor)[];
            const _default: boolean;
            export { _default as default };
        }
        namespace draggable {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace rowKey {
            const type_2: (StringConstructor | BooleanConstructor)[];
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
    }
    namespace computed {
        function expandRender(): () => string;
        function expandRender(): () => string;
    }
    namespace methods {
        function rowChecked(_index: any): any;
        function rowChecked(_index: any): any;
        function rowDisabled(_index: any): any;
        function rowDisabled(_index: any): any;
        function rowExpanded(_index: any): any;
        function rowExpanded(_index: any): any;
        function rowStatusByRowKey(type: any, rowKey: any): any;
        function rowStatusByRowKey(type: any, rowKey: any): any;
        function handleMouseIn(_index: any, event: any, rowKey: any): void;
        function handleMouseIn(_index: any, event: any, rowKey: any): void;
        function handleMouseOut(_index: any, event: any, rowKey: any): void;
        function handleMouseOut(_index: any, event: any, rowKey: any): void;
        function clickCurrentRow(_index: any, event: any, rowKey: any): void;
        function clickCurrentRow(_index: any, event: any, rowKey: any): void;
        function dblclickCurrentRow(_index: any, event: any, rowKey: any): void;
        function dblclickCurrentRow(_index: any, event: any, rowKey: any): void;
        function clickCell(row: any, column: any, key: any, event: any): void;
        function clickCell(row: any, column: any, key: any, event: any): void;
        function contextmenuCurrentRow(_index: any, event: any, rowKey: any): void;
        function contextmenuCurrentRow(_index: any, event: any, rowKey: any): void;
        function selectStartCurrentRow(): void;
        function selectStartCurrentRow(): void;
        function getSpan(row: any, column: any, rowIndex: any, columnIndex: any): {
            rowspan: number;
            colspan: number;
        } | {
            rowspan?: undefined;
            colspan?: undefined;
        };
        function getSpan(row: any, column: any, rowIndex: any, columnIndex: any): {
            rowspan: number;
            colspan: number;
        } | {
            rowspan?: undefined;
            colspan?: undefined;
        };
        function showWithSpan(row: any, column: any, rowIndex: any, columnIndex: any): boolean;
        function showWithSpan(row: any, column: any, rowIndex: any, columnIndex: any): boolean;
        function isTrShow(rowKey: any): any;
        function isTrShow(rowKey: any): any;
        function getTrStatus(rowKey: any, data: any, parentStatus: any): any;
        function getTrStatus(rowKey: any, data: any, parentStatus: any): any;
        function getLevel(rowKey: any): any;
        function getLevel(rowKey: any): any;
        function getChildLevel(data: any, rowKey: any, level: any): any;
        function getChildLevel(data: any, rowKey: any, level: any): any;
        function getChildNode(h: any, data: any, nodes: any): any;
        function getChildNode(h: any, data: any, nodes: any): any;
    }
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}
export default _default;
import TableCell from "./cell.vue";
import Expand from "./expand.js";
import TableTr from "./table-tr.vue";
