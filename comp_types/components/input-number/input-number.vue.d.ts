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
        export namespace max {
            export const type: NumberConstructor;
            const _default: number;
            export { _default as default };
        }
        export namespace min {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        export namespace step {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        export namespace activeChange {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace modelValue {
            const type_4: NumberConstructor;
            export { type_4 as type };
            const _default_4: number;
            export { _default_4 as default };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace disabled {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace autofocus {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        export namespace readonly {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        export namespace editable {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            const _default_8: boolean;
            export { _default_8 as default };
        }
        export namespace name_1 {
            const type_9: StringConstructor;
            export { type_9 as type };
        }
        export { name_1 as name };
        export namespace precision {
            const type_10: NumberConstructor;
            export { type_10 as type };
        }
        export namespace elementId {
            const type_11: StringConstructor;
            export { type_11 as type };
        }
        export namespace formatter {
            const type_12: FunctionConstructor;
            export { type_12 as type };
        }
        export namespace parser {
            const type_13: FunctionConstructor;
            export { type_13 as type };
        }
        export namespace placeholder {
            const type_14: StringConstructor;
            export { type_14 as type };
            const _default_9: string;
            export { _default_9 as default };
        }
        export namespace controlsOutside {
            const type_15: BooleanConstructor;
            export { type_15 as type };
            const _default_10: boolean;
            export { _default_10 as default };
        }
    }
    function data(): {
        focused: boolean;
        upDisabled: boolean;
        downDisabled: boolean;
        currentValue: any;
    };
    function data(): {
        focused: boolean;
        upDisabled: boolean;
        downDisabled: boolean;
        currentValue: any;
    };
    namespace computed {
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function handlerClasses(): string;
        function handlerClasses(): string;
        function upClasses(): (string | {
            [x: string]: any;
        })[];
        function upClasses(): (string | {
            [x: string]: any;
        })[];
        function innerUpClasses(): string;
        function innerUpClasses(): string;
        function downClasses(): (string | {
            [x: string]: any;
        })[];
        function downClasses(): (string | {
            [x: string]: any;
        })[];
        function innerDownClasses(): string;
        function innerDownClasses(): string;
        function inputWrapClasses(): string;
        function inputWrapClasses(): string;
        function inputClasses(): string;
        function inputClasses(): string;
        function precisionValue(): any;
        function precisionValue(): any;
        function formatterValue(): any;
        function formatterValue(): any;
    }
    namespace methods {
        function preventDefault(e: any): void;
        function preventDefault(e: any): void;
        function up(e: any): boolean;
        function up(e: any): boolean;
        function down(e: any): boolean;
        function down(e: any): boolean;
        function changeStep(type: any, e: any): boolean;
        function changeStep(type: any, e: any): boolean;
        function setValue(val: any): void;
        function setValue(val: any): void;
        function focus(event: any): void;
        function focus(event: any): void;
        function blur(): void;
        function blur(): void;
        function keyDown(e: any): void;
        function keyDown(e: any): void;
        function change(event: any): void;
        function change(event: any): void;
        function changeVal(val: any): void;
        function changeVal(val: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        const currentValue: any;
        function min(): void;
        function min(): void;
        function max(): void;
        function max(): void;
    }
}
export default _default;
