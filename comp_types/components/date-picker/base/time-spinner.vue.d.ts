declare namespace _default {
    const name: string;
    const mixins: {
        props: {
            disabledHours: {
                type: ArrayConstructor;
                default(): any[];
            };
            disabledMinutes: {
                type: ArrayConstructor;
                default(): any[];
            };
            disabledSeconds: {
                type: ArrayConstructor;
                default(): any[];
            };
            hideDisabledOptions: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
    }[];
    const emits: string[];
    const inject: string[];
    namespace props {
        namespace hours {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: number;
            export { _default as default };
        }
        namespace minutes {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace seconds {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace showSeconds {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace steps {
            const type_4: ArrayConstructor;
            export { type_4 as type };
            function _default_4(): any[];
            export { _default_4 as default };
        }
    }
    function data(): {
        spinerSteps: number[];
        prefixCls: string;
        compiled: boolean;
        focusedColumn: number;
        focusedTime: number[];
        id: string;
    };
    function data(): {
        spinerSteps: number[];
        prefixCls: string;
        compiled: boolean;
        focusedColumn: number;
        focusedTime: number[];
        id: string;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function hoursList(): any[];
        function hoursList(): any[];
        function minutesList(): any[];
        function minutesList(): any[];
        function secondsList(): any[];
        function secondsList(): any[];
    }
    namespace methods {
        function getCellCls(cell: any): (string | {
            [x: string]: any;
        })[];
        function getCellCls(cell: any): (string | {
            [x: string]: any;
        })[];
        function chooseValue(values: any): void;
        function chooseValue(values: any): void;
        function handleClick(type: any, cell: any): void;
        function handleClick(type: any, cell: any): void;
        function emitChange(changes: any): void;
        function emitChange(changes: any): void;
        function scroll(type: any, index: any): void;
        function scroll(type: any, index: any): void;
        function getScrollIndex(type: any, index: any): any;
        function getScrollIndex(type: any, index: any): any;
        function updateScroll(): void;
        function updateScroll(): void;
        function formatTime(text: any): any;
        function formatTime(text: any): any;
        function updateFocusedTime(col: any, time: any): void;
        function updateFocusedTime(col: any, time: any): void;
        function addTimeSpinner(): void;
        function addTimeSpinner(): void;
        function removeTimeSpinner(): void;
        function removeTimeSpinner(): void;
    }
    namespace watch {
        function hours(val: any): void;
        function hours(val: any): void;
        function minutes(val: any): void;
        function minutes(val: any): void;
        function seconds(val: any): void;
        function seconds(val: any): void;
        function focusedTime(updated: any, old: any): void;
        function focusedTime(updated: any, old: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
