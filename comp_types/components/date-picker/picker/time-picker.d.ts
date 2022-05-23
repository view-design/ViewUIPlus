declare namespace _default {
    const mixins: any[];
    namespace components {
        export { TimePickerPanel };
        export { RangeTimePickerPanel };
    }
    namespace props {
        namespace type {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
    }
    namespace computed {
        function panel(): "RangeTimePickerPanel" | "TimePickerPanel";
        function panel(): "RangeTimePickerPanel" | "TimePickerPanel";
        function ownPickerProps(): {
            disabledHours: any;
            disabledMinutes: any;
            disabledSeconds: any;
            hideDisabledOptions: any;
        };
        function ownPickerProps(): {
            disabledHours: any;
            disabledMinutes: any;
            disabledSeconds: any;
            hideDisabledOptions: any;
        };
    }
    namespace watch {
        function visible(visible: any): void;
        function visible(visible: any): void;
    }
}
export default _default;
