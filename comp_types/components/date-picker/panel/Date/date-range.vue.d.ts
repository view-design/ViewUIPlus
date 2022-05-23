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
    namespace props {
        namespace splitPanels {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
    }
    function data(): {
        prefixCls: string;
        datePrefixCls: string;
        dates: any;
        rangeState: {
            from: any;
            to: any;
            selecting: boolean;
        };
        currentView: any;
        leftPickerTable: string;
        rightPickerTable: string;
        leftPanelDate: any;
        rightPanelDate: Date;
    };
    function data(): {
        prefixCls: string;
        datePrefixCls: string;
        dates: any;
        rangeState: {
            from: any;
            to: any;
            selecting: boolean;
        };
        currentView: any;
        leftPickerTable: string;
        rightPickerTable: string;
        leftPanelDate: any;
        rightPanelDate: Date;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function panelBodyClasses(): (string | {
            [x: string]: any;
        })[];
        function panelBodyClasses(): (string | {
            [x: string]: any;
        })[];
        function leftDatePanelLabel(): any;
        function leftDatePanelLabel(): any;
        function rightDatePanelLabel(): any;
        function rightDatePanelLabel(): any;
        function leftDatePanelView(): any;
        function leftDatePanelView(): any;
        function rightDatePanelView(): any;
        function rightDatePanelView(): any;
        function timeDisabled(): boolean;
        function timeDisabled(): boolean;
        function preSelecting(): {
            left: boolean;
            right: boolean;
        };
        function preSelecting(): {
            left: boolean;
            right: boolean;
        };
        function panelPickerHandlers(): {
            left: any;
            right: any;
        };
        function panelPickerHandlers(): {
            left: any;
            right: any;
        };
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
        function setPanelDates(leftPanelDate: any): void;
        function setPanelDates(leftPanelDate: any): void;
        function panelLabelConfig(direction: any): {
            separator: any;
            labels: {
                label: any;
                type: string;
            }[];
        };
        function panelLabelConfig(direction: any): {
            separator: any;
            labels: {
                label: any;
                type: string;
            }[];
        };
        function prevYear(panel: any): void;
        function prevYear(panel: any): void;
        function nextYear(panel: any): void;
        function nextYear(panel: any): void;
        function prevMonth(panel: any): void;
        function prevMonth(panel: any): void;
        function nextMonth(panel: any): void;
        function nextMonth(panel: any): void;
        function changePanelDate(panel: any, type: any, increment: any, updateOtherPanel?: boolean): void;
        function changePanelDate(panel: any, type: any, increment: any, updateOtherPanel?: boolean): void;
        function showYearPicker(panel: any): void;
        function showYearPicker(panel: any): void;
        function showMonthPicker(panel: any): void;
        function showMonthPicker(panel: any): void;
        function handlePreSelection(panel: any, value: any): void;
        function handlePreSelection(panel: any, value: any): void;
        function handleRangePick(val: any, type: any): void;
        function handleRangePick(val: any, type: any): void;
        function handleChangeRange(val: any): void;
        function handleChangeRange(val: any): void;
    }
}
export default _default;
import Icon from "../../../icon/icon.vue";
import DateTable from "../../base/date-table.vue";
import YearTable from "../../base/year-table.vue";
import MonthTable from "../../base/month-table.vue";
import TimePicker from "../Time/time-range.vue";
import Confirm from "../../base/confirm.vue";
import datePanelLabel from "./date-panel-label.vue";
