declare namespace _default {
    const name: string;
    const emits: string[];
    const inject: string[];
    namespace props {
        namespace tableDate {
            const type: DateConstructor;
            const required: boolean;
        }
        namespace disabledDate {
            const type_1: FunctionConstructor;
            export { type_1 as type };
        }
        namespace selectionMode {
            const type_2: StringConstructor;
            export { type_2 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace modelValue {
            const type_3: ArrayConstructor;
            export { type_3 as type };
            const required_2: boolean;
            export { required_2 as required };
        }
        namespace rangeState {
            const type_4: ObjectConstructor;
            export { type_4 as type };
            function _default(): {
                from: any;
                to: any;
                selecting: boolean;
            };
            export { _default as default };
        }
        namespace focusedDate {
            const type_5: DateConstructor;
            export { type_5 as type };
            const required_3: boolean;
            export { required_3 as required };
        }
    }
    function data(): {
        id: string;
    };
    function data(): {
        id: string;
    };
    namespace computed {
        function dates(): any;
        function dates(): any;
    }
    namespace methods {
        function handleClick(cell: any, e: any): void;
        function handleClick(cell: any, e: any): void;
        function handleMouseMove(cell: any): void;
        function handleMouseMove(cell: any): void;
        function addPanelTable(): void;
        function addPanelTable(): void;
        function removePanelTable(): void;
        function removePanelTable(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
