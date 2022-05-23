declare namespace _default {
    const name: string;
    const inject: string[];
    function provide(): {
        FormItemInstance: {
            name: string;
            inject: string[];
            provide(): any;
            props: {
                label: {
                    type: StringConstructor;
                    default: string;
                };
                labelWidth: {
                    type: NumberConstructor;
                };
                prop: {
                    type: StringConstructor;
                };
                required: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                rules: {
                    type: (ObjectConstructor | ArrayConstructor)[];
                };
                error: {
                    type: StringConstructor;
                };
                validateStatus: {
                    type: BooleanConstructor;
                };
                showMessage: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                labelFor: {
                    type: StringConstructor;
                };
            };
            data(): {
                prefixCls: string;
                isRequired: boolean;
                validateState: string;
                validateMessage: string;
                validateDisabled: boolean;
                validator: {};
            };
            watch: {
                error: {
                    handler(val: any): void;
                    immediate: boolean;
                };
                validateStatus(val: any): void;
                rules(): void;
                required(n: any, o: any): void;
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                fieldValue(): any;
                labelStyles(): {
                    width: string;
                };
                contentStyles(): {
                    marginLeft: string;
                };
            };
            methods: {
                setRules(): void;
                getRules(): any[];
                getFilteredRule(trigger: any): any[];
                validate(trigger: any, callback?: () => void): boolean;
                resetField(): void;
                onFieldBlur(): void;
                onFieldChange(): void;
                formBlur(): void;
                formChange(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    function provide(): {
        FormItemInstance: {
            name: string;
            inject: string[];
            provide(): any;
            props: {
                label: {
                    type: StringConstructor;
                    default: string;
                };
                labelWidth: {
                    type: NumberConstructor;
                };
                prop: {
                    type: StringConstructor;
                };
                required: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                rules: {
                    type: (ObjectConstructor | ArrayConstructor)[];
                };
                error: {
                    type: StringConstructor;
                };
                validateStatus: {
                    type: BooleanConstructor;
                };
                showMessage: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                labelFor: {
                    type: StringConstructor;
                };
            };
            data(): {
                prefixCls: string;
                isRequired: boolean;
                validateState: string;
                validateMessage: string;
                validateDisabled: boolean;
                validator: {};
            };
            watch: {
                error: {
                    handler(val: any): void;
                    immediate: boolean;
                };
                validateStatus(val: any): void;
                rules(): void;
                required(n: any, o: any): void;
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                fieldValue(): any;
                labelStyles(): {
                    width: string;
                };
                contentStyles(): {
                    marginLeft: string;
                };
            };
            methods: {
                setRules(): void;
                getRules(): any[];
                getFilteredRule(trigger: any): any[];
                validate(trigger: any, callback?: () => void): boolean;
                resetField(): void;
                onFieldBlur(): void;
                onFieldChange(): void;
                formBlur(): void;
                formChange(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    namespace props {
        namespace label {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        namespace labelWidth {
            const type_1: NumberConstructor;
            export { type_1 as type };
        }
        namespace prop {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace required {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace rules {
            const type_4: (ObjectConstructor | ArrayConstructor)[];
            export { type_4 as type };
        }
        namespace error {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        namespace validateStatus {
            const type_6: BooleanConstructor;
            export { type_6 as type };
        }
        namespace showMessage {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace labelFor {
            const type_8: StringConstructor;
            export { type_8 as type };
        }
    }
    function data(): {
        prefixCls: string;
        isRequired: boolean;
        validateState: string;
        validateMessage: string;
        validateDisabled: boolean;
        validator: {};
    };
    function data(): {
        prefixCls: string;
        isRequired: boolean;
        validateState: string;
        validateMessage: string;
        validateDisabled: boolean;
        validator: {};
    };
    namespace watch {
        export namespace error_1 {
            function handler(val: any): void;
            function handler(val: any): void;
            const immediate: boolean;
        }
        export { error_1 as error };
        export function validateStatus(val: any): void;
        export function validateStatus(val: any): void;
        export function rules(): void;
        export function rules(): void;
        export function required(n: any, o: any): void;
        export function required(n: any, o: any): void;
    }
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function fieldValue(): any;
        function fieldValue(): any;
        function labelStyles(): {
            width: string;
        };
        function labelStyles(): {
            width: string;
        };
        function contentStyles(): {
            marginLeft: string;
        };
        function contentStyles(): {
            marginLeft: string;
        };
    }
    namespace methods {
        function setRules(): void;
        function setRules(): void;
        function getRules(): any[];
        function getRules(): any[];
        function getFilteredRule(trigger: any): any[];
        function getFilteredRule(trigger: any): any[];
        function validate(trigger: any, callback?: () => void): boolean;
        function validate(trigger: any, callback?: () => void): boolean;
        function resetField(): void;
        function resetField(): void;
        function onFieldBlur(): void;
        function onFieldBlur(): void;
        function onFieldChange(): void;
        function onFieldChange(): void;
        function formBlur(): void;
        function formBlur(): void;
        function formChange(): void;
        function formChange(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
