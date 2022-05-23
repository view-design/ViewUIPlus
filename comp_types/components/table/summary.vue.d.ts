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
    namespace props {
        const prefixCls: StringConstructor;
        const styleObject: ObjectConstructor;
        const columns: ArrayConstructor;
        const data: ObjectConstructor;
        const columnsWidth: ObjectConstructor;
        namespace fixed {
            export const type: (StringConstructor | BooleanConstructor)[];
            const _default: boolean;
            export { _default as default };
        }
    }
    namespace methods {
        function cellCls(column: any): {
            "ivu-table-hidden": boolean;
        }[];
        function cellCls(column: any): {
            "ivu-table-hidden": boolean;
        }[];
    }
}
export default _default;
