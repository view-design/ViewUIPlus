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
    const props: {};
    namespace computed {
        function classes(): string[];
        function classes(): string[];
        function cells(): any[];
        function cells(): any[];
    }
    namespace methods {
        function getCellCls(cell: any): (string | {
            [x: string]: any;
        })[];
        function getCellCls(cell: any): (string | {
            [x: string]: any;
        })[];
        function tCell(nr: any): any;
        function tCell(nr: any): any;
    }
}
export default _default;
