declare namespace _default {
    const mixins: ({
        methods: {
            t(...args: any[]): any;
        };
    } | {
        name: string;
        emits: string[];
        inject: string[];
        props: {
            tableDate: {
                type: DateConstructor;
                required: boolean;
            };
            disabledDate: {
                type: FunctionConstructor;
            };
            selectionMode: {
                type: StringConstructor;
                required: boolean;
            };
            modelValue: {
                type: ArrayConstructor;
                required: boolean;
            };
            rangeState: {
                type: ObjectConstructor;
                default: () => {
                    from: any;
                    to: any;
                    selecting: boolean;
                };
            };
            focusedDate: {
                type: DateConstructor;
                required: boolean;
            };
        };
        data(): {
            id: string;
        };
        computed: {
            dates(): any;
        };
        methods: {
            handleClick(cell: any, e: any): void;
            handleMouseMove(cell: any): void;
            addPanelTable(): void;
            removePanelTable(): void;
        };
        mounted(): void;
        beforeUnmount(): void;
    })[];
    namespace props {
        namespace showWeekNumbers {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
    }
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function calendar(): any;
        function calendar(): any;
        function headerDays(): any[];
        function headerDays(): any[];
        function cells(): any;
        function cells(): any;
    }
    namespace methods {
        function getCellCls(cell: any): (string | {
            [x: string]: any;
        })[];
        function getCellCls(cell: any): (string | {
            [x: string]: any;
        })[];
    }
}
export default _default;
