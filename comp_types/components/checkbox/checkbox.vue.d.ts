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
    namespace inject {
        namespace CheckboxGroupInstance {
            const _default: any;
            export { _default as default };
        }
    }
    namespace props {
        export namespace disabled {
            export const type: BooleanConstructor;
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace modelValue {
            const type_1: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace trueValue {
            const type_2: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            export { type_2 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace falseValue {
            const type_3: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            export { type_3 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace label {
            const type_4: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            export { type_4 as type };
        }
        export namespace indeterminate {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace name_1 {
            const type_6: StringConstructor;
            export { type_6 as type };
        }
        export { name_1 as name };
        export namespace border {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
    }
    function data(): {
        showSlot: boolean;
        focusInner: boolean;
        model: any[];
    };
    function data(): {
        showSlot: boolean;
        focusInner: boolean;
        model: any[];
    };
    namespace computed {
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function checkboxClasses(): (string | {
            [x: string]: any;
        })[];
        function checkboxClasses(): (string | {
            [x: string]: any;
        })[];
        function innerClasses(): (string | {
            [x: string]: any;
        })[];
        function innerClasses(): (string | {
            [x: string]: any;
        })[];
        function inputClasses(): string;
        function inputClasses(): string;
        function currentValue(): boolean;
        function currentValue(): boolean;
        function group(): boolean;
        function group(): boolean;
    }
    function mounted(): void;
    function mounted(): void;
    namespace methods {
        function change(event: any): boolean;
        function change(event: any): boolean;
        function onBlur(): void;
        function onBlur(): void;
        function onFocus(): void;
        function onFocus(): void;
    }
    const watch: {
        modelValue(val: any): void;
        'CheckboxGroupInstance.modelValue': {
            handler(val: any): void;
            immediate: boolean;
        };
    };
}
export default _default;
