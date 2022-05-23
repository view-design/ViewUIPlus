declare namespace _default {
    const name: string;
    const mixins: ({
        methods: {
            t(...args: any[]): any;
        };
    } | {
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
    } | {
        emits: string[];
        props: {
            confirm: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
        methods: {
            iconBtnCls(direction: any, type?: string): string[];
            handleShortcutClick(shortcut: any): void;
            handlePickClear(): void;
            handlePickSuccess(): void;
            handlePickClick(): void;
            resetView(): void;
            handleClear(): void;
            handleConfirm(visible: any, type: any): void;
            onToggleVisibility(open: any): void;
        };
    })[];
    namespace components {
        export { TimeSpinner };
        export { Confirm };
    }
    const emits: string[];
    namespace props {
        namespace disabledDate {
            export const type: FunctionConstructor;
            export { returnFalse as default };
        }
        namespace steps {
            const type_1: ArrayConstructor;
            export { type_1 as type };
            function _default(): any[];
            export { _default as default };
        }
        namespace format {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace modelValue {
            const type_3: ArrayConstructor;
            export { type_3 as type };
            export const required: boolean;
        }
    }
    function data(): {
        prefixCls: string;
        timePrefixCls: string;
        date: any;
        showDate: boolean;
    };
    function data(): {
        prefixCls: string;
        timePrefixCls: string;
        date: any;
        showDate: boolean;
    };
    namespace computed {
        function showSeconds(): boolean;
        function showSeconds(): boolean;
        function visibleDate(): string;
        function visibleDate(): string;
        function timeSlots(): any[];
        function timeSlots(): any[];
        function disabledHMS(): {};
        function disabledHMS(): {};
    }
    namespace watch {
        function modelValue(dates: any): void;
        function modelValue(dates: any): void;
    }
    namespace methods {
        function handleChange(date: any, emit?: boolean): void;
        function handleChange(date: any, emit?: boolean): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
import TimeSpinner from "../../base/time-spinner.vue";
import Confirm from "../../base/confirm.vue";
declare function returnFalse(): boolean;
