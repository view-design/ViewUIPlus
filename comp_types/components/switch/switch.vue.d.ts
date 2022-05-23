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
        export namespace modelValue {
            export const type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            const _default: boolean;
            export { _default as default };
        }
        export namespace trueValue {
            const type_1: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace falseValue {
            const type_2: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace disabled {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace name_1 {
            const type_4: StringConstructor;
            export { type_4 as type };
        }
        export { name_1 as name };
        export namespace loading {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace trueColor {
            const type_6: StringConstructor;
            export { type_6 as type };
        }
        export namespace falseColor {
            const type_7: StringConstructor;
            export { type_7 as type };
        }
        export const beforeChange: FunctionConstructor;
    }
    function data(): {
        currentValue: any;
    };
    function data(): {
        currentValue: any;
    };
    namespace computed {
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapStyles(): {
            'border-color': any;
            'background-color': any;
        };
        function wrapStyles(): {
            'border-color': any;
            'background-color': any;
        };
        function innerClasses(): string;
        function innerClasses(): string;
    }
    namespace methods {
        function handleToggle(): void;
        function handleToggle(): void;
        function toggle(event: any): false | void;
        function toggle(event: any): false | void;
    }
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
    }
}
export default _default;
