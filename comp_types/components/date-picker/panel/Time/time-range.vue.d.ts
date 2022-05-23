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
        namespace steps {
            export const type: ArrayConstructor;
            function _default(): any[];
            export { _default as default };
        }
        namespace format {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace modelValue {
            const type_2: ArrayConstructor;
            export { type_2 as type };
            export const required: boolean;
        }
    }
    function data(): {
        prefixCls: string;
        timePrefixCls: string;
        showDate: boolean;
        dateStart: any;
        dateEnd: any;
    };
    function data(): {
        prefixCls: string;
        timePrefixCls: string;
        showDate: boolean;
        dateStart: any;
        dateEnd: any;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: () => boolean;
        })[];
        function classes(): (string | {
            [x: string]: () => boolean;
        })[];
        function showSeconds(): boolean;
        function showSeconds(): boolean;
        function leftDatePanelLabel(): any;
        function leftDatePanelLabel(): any;
        function rightDatePanelLabel(): any;
        function rightDatePanelLabel(): any;
    }
    namespace watch {
        function modelValue(dates: any): void;
        function modelValue(dates: any): void;
    }
    namespace methods {
        function panelLabelConfig(date: any): string;
        function panelLabelConfig(date: any): string;
        function handleChange(start: any, end: any, emit?: boolean): void;
        function handleChange(start: any, end: any, emit?: boolean): void;
        function handleStartChange(date: any): void;
        function handleStartChange(date: any): void;
        function handleEndChange(date: any): void;
        function handleEndChange(date: any): void;
        function updateScroll(): void;
        function updateScroll(): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
import TimeSpinner from "../../base/time-spinner.vue";
import Confirm from "../../base/confirm.vue";
