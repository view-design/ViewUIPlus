declare namespace _default {
    const name: string;
    const emits: string[];
    function provide(): {
        FormInstance: {
            name: string;
            emits: string[];
            provide(): any;
            props: {
                model: {
                    type: ObjectConstructor;
                };
                rules: {
                    type: ObjectConstructor;
                };
                labelWidth: {
                    type: NumberConstructor;
                };
                labelPosition: {
                    validator(value: any): boolean;
                    default: string;
                };
                inline: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showMessage: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autocomplete: {
                    validator(value: any): boolean;
                    default: string;
                };
                hideRequiredMark: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                labelColon: {
                    type: (StringConstructor | BooleanConstructor)[];
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                fields: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                colon(): string;
            };
            methods: {
                resetFields(): void;
                validate(callback: any): Promise<any>;
                validateField(prop: any, cb: any): void;
                addField(field: any): void;
                removeField(field: any): void;
            };
            watch: {
                rules(): void;
            };
        };
    };
    function provide(): {
        FormInstance: {
            name: string;
            emits: string[];
            provide(): any;
            props: {
                model: {
                    type: ObjectConstructor;
                };
                rules: {
                    type: ObjectConstructor;
                };
                labelWidth: {
                    type: NumberConstructor;
                };
                labelPosition: {
                    validator(value: any): boolean;
                    default: string;
                };
                inline: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showMessage: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autocomplete: {
                    validator(value: any): boolean;
                    default: string;
                };
                hideRequiredMark: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                labelColon: {
                    type: (StringConstructor | BooleanConstructor)[];
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                fields: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                colon(): string;
            };
            methods: {
                resetFields(): void;
                validate(callback: any): Promise<any>;
                validateField(prop: any, cb: any): void;
                addField(field: any): void;
                removeField(field: any): void;
            };
            watch: {
                rules(): void;
            };
        };
    };
    namespace props {
        namespace model {
            const type: ObjectConstructor;
        }
        namespace rules {
            const type_1: ObjectConstructor;
            export { type_1 as type };
        }
        namespace labelWidth {
            const type_2: NumberConstructor;
            export { type_2 as type };
        }
        namespace labelPosition {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace inline {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace showMessage {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace autocomplete {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_3: string;
            export { _default_3 as default };
        }
        namespace hideRequiredMark {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace labelColon {
            const type_6: (StringConstructor | BooleanConstructor)[];
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace disabled {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
    }
    function data(): {
        fields: any[];
    };
    function data(): {
        fields: any[];
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function colon(): string;
        function colon(): string;
    }
    namespace methods {
        function resetFields(): void;
        function resetFields(): void;
        function validate(callback: any): Promise<any>;
        function validate(callback: any): Promise<any>;
        function validateField(prop: any, cb: any): void;
        function validateField(prop: any, cb: any): void;
        function addField(field: any): void;
        function addField(field: any): void;
        function removeField(field: any): void;
        function removeField(field: any): void;
    }
    namespace watch {
        function rules(): void;
        function rules(): void;
    }
}
export default _default;
