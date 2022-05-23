declare namespace _default {
    namespace props {
        namespace showTime {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace format {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace selectionMode {
            const type_2: StringConstructor;
            export { type_2 as type };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace shortcuts {
            const type_3: ArrayConstructor;
            export { type_3 as type };
            function _default_3(): any[];
            export { _default_3 as default };
        }
        namespace disabledDate {
            const type_4: FunctionConstructor;
            export { type_4 as type };
            function _default_4(): boolean;
            export { _default_4 as default };
        }
        namespace modelValue {
            const type_5: ArrayConstructor;
            export { type_5 as type };
            function _default_5(): Date[];
            export { _default_5 as default };
        }
        namespace timePickerOptions {
            function _default_6(): {};
            export { _default_6 as default };
            const type_6: ObjectConstructor;
            export { type_6 as type };
        }
        namespace showWeekNumbers {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        namespace startDate {
            const type_8: DateConstructor;
            export { type_8 as type };
        }
        namespace pickerType {
            const type_9: StringConstructor;
            export { type_9 as type };
            export const require: boolean;
        }
        namespace focusedDate {
            const type_10: DateConstructor;
            export { type_10 as type };
            export const required: boolean;
        }
    }
    namespace computed {
        function isTime(): boolean;
        function isTime(): boolean;
    }
    namespace methods {
        function handleToggleTime(): void;
        function handleToggleTime(): void;
    }
}
export default _default;
