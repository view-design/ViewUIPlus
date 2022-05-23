declare namespace _default {
    const name: string;
    const mixins: {
        inject: {
            FormInstance: {
                default: string;
            };
            FormItemInstance: {
                default: any;
            };
        };
        computed: {
            itemDisabled(): boolean;
        };
        methods: {
            handleFormItemChange(type: any, data: any): void;
        };
    }[];
    namespace components {
        export { iSelect };
        export { iOption };
        export { iInput };
    }
    const emits: string[];
    namespace props {
        export namespace modelValue {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: string;
            export { _default as default };
        }
        export namespace label {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        export namespace data {
            const type_2: ArrayConstructor;
            export { type_2 as type };
            function _default_2(): any[];
            export { _default_2 as default };
        }
        export namespace disabled {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace clearable {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace placeholder {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace icon {
            const type_6: StringConstructor;
            export { type_6 as type };
        }
        export namespace filterMethod {
            const type_7: (FunctionConstructor | BooleanConstructor)[];
            export { type_7 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_6: string;
            export { _default_6 as default };
        }
        export namespace transfer {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace name_1 {
            const type_9: StringConstructor;
            export { type_9 as type };
        }
        export { name_1 as name };
        export namespace elementId {
            const type_10: StringConstructor;
            export { type_10 as type };
        }
        export namespace transferClassName {
            const type_11: StringConstructor;
            export { type_11 as type };
        }
        export namespace capture {
            const type_12: BooleanConstructor;
            export { type_12 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace eventsEnabled {
            const type_13: BooleanConstructor;
            export { type_13 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
    }
    function data(): {
        currentValue: any;
        disableEmitChange: boolean;
    };
    function data(): {
        currentValue: any;
        disableEmitChange: boolean;
    };
    namespace computed {
        function inputIcon(): string;
        function inputIcon(): string;
        function filteredData(): any;
        function filteredData(): any;
    }
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        const currentValue: any;
    }
    namespace methods {
        function remoteMethod(query: any): void;
        function remoteMethod(query: any): void;
        function handleSelect(option: any): void;
        function handleSelect(option: any): void;
        function handleFocus(event: any): void;
        function handleFocus(event: any): void;
        function handleBlur(event: any): void;
        function handleBlur(event: any): void;
        function handleClear(): void;
        function handleClear(): void;
        function handleClickOutside(): void;
        function handleClickOutside(): void;
    }
}
export default _default;
import iSelect from "../select/select.vue";
import iOption from "../select/option.vue";
import iInput from "../input/input.vue";
