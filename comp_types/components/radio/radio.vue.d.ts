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
        namespace RadioGroupInstance {
            const _default: any;
            export { _default as default };
        }
    }
    namespace props {
        export namespace modelValue {
            export const type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace trueValue {
            const type_1: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace falseValue {
            const type_2: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            export { type_2 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace label {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
        }
        export namespace disabled {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace name_1 {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        export { name_1 as name };
        export namespace border {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
    }
    function data(): {
        groupName: string;
        parent: any;
        focusWrapper: boolean;
        focusInner: boolean;
    };
    function data(): {
        groupName: string;
        parent: any;
        focusWrapper: boolean;
        focusInner: boolean;
    };
    namespace computed {
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function radioClasses(): (string | {
            [x: string]: any;
        })[];
        function radioClasses(): (string | {
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
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
    }
}
export default _default;
