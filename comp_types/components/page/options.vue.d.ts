declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            t(...args: any[]): any;
        };
    }[];
    namespace components {
        export { iSelect };
        export { iOption };
    }
    const emits: string[];
    namespace props {
        const pageSizeOpts: ArrayConstructor;
        const showSizer: BooleanConstructor;
        const showElevator: BooleanConstructor;
        const current: NumberConstructor;
        const _current: NumberConstructor;
        const pageSize: NumberConstructor;
        const allPages: NumberConstructor;
        const isSmall: BooleanConstructor;
        const placement: StringConstructor;
        const transfer: BooleanConstructor;
        const disabled: BooleanConstructor;
        const eventsEnabled: BooleanConstructor;
    }
    function data(): {
        currentPageSize: any;
    };
    function data(): {
        currentPageSize: any;
    };
    namespace watch {
        function pageSize(val: any): void;
        function pageSize(val: any): void;
    }
    namespace computed {
        function size(): "default" | "small";
        function size(): "default" | "small";
        function optsClasses(): string[];
        function optsClasses(): string[];
        function sizerClasses(): string[];
        function sizerClasses(): string[];
        function ElevatorClasses(): string[];
        function ElevatorClasses(): string[];
    }
    namespace methods {
        function changeSize(): void;
        function changeSize(): void;
        function changePage(event: any): void;
        function changePage(event: any): void;
    }
}
export default _default;
import iSelect from "../../components/select/select.vue";
import iOption from "../../components/select/option.vue";
