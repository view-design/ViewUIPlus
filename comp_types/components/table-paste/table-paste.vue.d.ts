declare namespace _default {
    const name: string;
    namespace components {
        export { Row };
        export { Col };
        export { Input };
        export { Table };
    }
    const emits: string[];
    namespace props {
        namespace value {
            const type: StringConstructor;
        }
        namespace inputProps {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        namespace tableProps {
            const type_2: ObjectConstructor;
            export { type_2 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        namespace hideTable {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default: boolean;
            export { _default as default };
        }
    }
    function data(): {
        content: string;
        tableColumns: any[];
        tableData: any[];
    };
    function data(): {
        content: string;
        tableColumns: any[];
        tableData: any[];
    };
    namespace watch {
        export namespace value_1 {
            function handler(content: any): void;
            function handler(content: any): void;
            const immediate: boolean;
        }
        export { value_1 as value };
    }
    namespace methods {
        function handleContentChange(e: any): void;
        function handleContentChange(e: any): void;
        function handleResolveContent(content: any): void;
        function handleResolveContent(content: any): void;
        function handleGetErrorIndex(rows: any): any[];
        function handleGetErrorIndex(rows: any): any[];
        function contentToTable(rows: any): {
            columns: any;
            data: any;
        };
        function contentToTable(rows: any): {
            columns: any;
            data: any;
        };
    }
}
export default _default;
import Row from "../row/row.vue";
import Col from "../col/col.vue";
import Input from "../input/input.vue";
import Table from "../table/table.vue";
