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
    const emits: string[];
    namespace props {
        export namespace type {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        export namespace modelValue {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace placeholder {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        export namespace maxlength {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
        }
        export namespace disabled {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export const icon: StringConstructor;
        export namespace autosize {
            const type_5: (ObjectConstructor | BooleanConstructor)[];
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace rows {
            const type_6: NumberConstructor;
            export { type_6 as type };
            const _default_5: number;
            export { _default_5 as default };
        }
        export namespace readonly {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        export namespace name_1 {
            const type_8: StringConstructor;
            export { type_8 as type };
        }
        export { name_1 as name };
        export namespace number {
            const type_9: BooleanConstructor;
            export { type_9 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        export namespace autofocus {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_8: boolean;
            export { _default_8 as default };
        }
        export namespace spellcheck {
            const type_11: BooleanConstructor;
            export { type_11 as type };
            const _default_9: boolean;
            export { _default_9 as default };
        }
        export namespace autocomplete {
            const type_12: StringConstructor;
            export { type_12 as type };
            const _default_10: string;
            export { _default_10 as default };
        }
        export namespace clearable {
            const type_13: BooleanConstructor;
            export { type_13 as type };
            const _default_11: boolean;
            export { _default_11 as default };
        }
        export namespace elementId {
            const type_14: StringConstructor;
            export { type_14 as type };
        }
        export namespace wrap {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_12: string;
            export { _default_12 as default };
        }
        export namespace prefix {
            const type_15: StringConstructor;
            export { type_15 as type };
            const _default_13: string;
            export { _default_13 as default };
        }
        export namespace suffix {
            const type_16: StringConstructor;
            export { type_16 as type };
            const _default_14: string;
            export { _default_14 as default };
        }
        export namespace search {
            const type_17: BooleanConstructor;
            export { type_17 as type };
            const _default_15: boolean;
            export { _default_15 as default };
        }
        export namespace enterButton {
            const type_18: (StringConstructor | BooleanConstructor)[];
            export { type_18 as type };
            const _default_16: boolean;
            export { _default_16 as default };
        }
        export namespace showWordLimit {
            const type_19: BooleanConstructor;
            export { type_19 as type };
            const _default_17: boolean;
            export { _default_17 as default };
        }
        export namespace password {
            const type_20: BooleanConstructor;
            export { type_20 as type };
            const _default_18: boolean;
            export { _default_18 as default };
        }
        export namespace border {
            const type_21: BooleanConstructor;
            export { type_21 as type };
            const _default_19: boolean;
            export { _default_19 as default };
        }
    }
    function data(): {
        currentValue: any;
        prefixCls: string;
        slotReady: boolean;
        textareaStyles: {};
        isOnComposition: boolean;
        showPassword: boolean;
        clearableIconOffset: number;
    };
    function data(): {
        currentValue: any;
        prefixCls: string;
        slotReady: boolean;
        textareaStyles: {};
        isOnComposition: boolean;
        showPassword: boolean;
        clearableIconOffset: number;
    };
    namespace computed {
        function currentType(): any;
        function currentType(): any;
        function prepend(): boolean;
        function prepend(): boolean;
        function append(): boolean;
        function append(): boolean;
        function showPrefix(): boolean;
        function showPrefix(): boolean;
        function showSuffix(): boolean;
        function showSuffix(): boolean;
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function inputClasses(): (string | {
            [x: string]: any;
        })[];
        function inputClasses(): (string | {
            [x: string]: any;
        })[];
        function textareaClasses(): (string | {
            [x: string]: any;
        })[];
        function textareaClasses(): (string | {
            [x: string]: any;
        })[];
        function upperLimit(): any;
        function upperLimit(): any;
        function textLength(): any;
        function textLength(): any;
        function clearableStyles(): {
            transform: string;
        };
        function clearableStyles(): {
            transform: string;
        };
    }
    namespace methods {
        function handleEnter(event: any): void;
        function handleEnter(event: any): void;
        function handleKeydown(event: any): void;
        function handleKeydown(event: any): void;
        function handleKeypress(event: any): void;
        function handleKeypress(event: any): void;
        function handleKeyup(event: any): void;
        function handleKeyup(event: any): void;
        function handleIconClick(event: any): void;
        function handleIconClick(event: any): void;
        function handleFocus(event: any): void;
        function handleFocus(event: any): void;
        function handleBlur(event: any): void;
        function handleBlur(event: any): void;
        function handleComposition(event: any): void;
        function handleComposition(event: any): void;
        function handleInput(event: any): void;
        function handleInput(event: any): void;
        function handleChange(event: any): void;
        function handleChange(event: any): void;
        function setCurrentValue(value: any): void;
        function setCurrentValue(value: any): void;
        function resizeTextarea(): boolean;
        function resizeTextarea(): boolean;
        function focus(option: any): void;
        function focus(option: any): void;
        function blur(): void;
        function blur(): void;
        function handleClear(): void;
        function handleClear(): void;
        function handleSearch(): boolean;
        function handleSearch(): boolean;
        function handleToggleShowPassword(): boolean;
        function handleToggleShowPassword(): boolean;
        function handleCalcIconOffset(): void;
        function handleCalcIconOffset(): void;
    }
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        function type(): void;
        function type(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function updated(): void;
    function updated(): void;
}
export default _default;
