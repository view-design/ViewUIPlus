declare namespace _default {
    const name: string;
    const mixins: ({
        methods: {
            t(...args: any[]): any;
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
    } | {
        props: {
            showTime: {
                type: BooleanConstructor;
                default: boolean;
            };
            format: {
                type: StringConstructor;
                default: string;
            };
            selectionMode: {
                type: StringConstructor;
                validator(value: any): boolean;
                default: string;
            };
            shortcuts: {
                type: ArrayConstructor;
                default: () => any[];
            };
            disabledDate: {
                type: FunctionConstructor;
                default: () => boolean;
            };
            modelValue: {
                type: ArrayConstructor;
                default: () => Date[];
            };
            timePickerOptions: {
                default: () => {};
                type: ObjectConstructor;
            };
            showWeekNumbers: {
                type: BooleanConstructor;
                default: boolean;
            };
            startDate: {
                type: DateConstructor;
            };
            pickerType: {
                type: StringConstructor;
                require: boolean;
            };
            focusedDate: {
                type: DateConstructor;
                required: boolean;
            };
        };
        computed: {
            isTime(): boolean;
        };
        methods: {
            handleToggleTime(): void;
        };
    })[];
    namespace components {
        export { Icon };
        export { DateTable };
        export { YearTable };
        export { MonthTable };
        export { TimePicker };
        export { Confirm };
        export { datePanelLabel };
    }
    const emits: string[];
    namespace props {
        namespace multiple {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
    }
    function data(): {
        prefixCls: string;
        datePrefixCls: string;
        currentView: any;
        pickerTable: any;
        dates: any;
        panelDate: any;
    };
    function data(): {
        prefixCls: string;
        datePrefixCls: string;
        currentView: any;
        pickerTable: any;
        dates: any;
        panelDate: any;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function panelPickerHandlers(): any;
        function panelPickerHandlers(): any;
        function datePanelLabel(): {
            separator: any;
            labels: {
                label: any;
                type: string;
            }[];
        };
        function datePanelLabel(): {
            separator: any;
            labels: {
                label: any;
                type: string;
            }[];
        };
        function timeDisabled(): boolean;
        function timeDisabled(): boolean;
    }
    namespace watch {
        function modelValue(newVal: any): void;
        function modelValue(newVal: any): void;
        function currentView(currentView: any): void;
        function currentView(currentView: any): void;
        function selectionMode(type: any): void;
        function selectionMode(type: any): void;
        function focusedDate(date: any): void;
        function focusedDate(date: any): void;
    }
    namespace methods {
        function reset(): void;
        function reset(): void;
        function changeYear(dir: any): void;
        function changeYear(dir: any): void;
        function getTableType(currentView: any): string;
        function getTableType(currentView: any): string;
        function changeMonth(dir: any): void;
        function changeMonth(dir: any): void;
        function handlePreSelection(value: any): void;
        function handlePreSelection(value: any): void;
        function handlePick(value: any, type: any): void;
        function handlePick(value: any, type: any): void;
    }
}
export default _default;
import Icon from "../../../icon/icon.vue";
import DateTable from "../../base/date-table.vue";
import YearTable from "../../base/year-table.vue";
import MonthTable from "../../base/month-table.vue";
import TimePicker from "../Time/time.vue";
import Confirm from "../../base/confirm.vue";
import datePanelLabel from "./date-panel-label.vue";
