declare namespace _default {
    const name: string;
    namespace components {
        export { Form };
    }
    const emits: string[];
    function provide(): {
        LoginInstance: {
            name: string;
            components: {
                Form: {
                    name: string;
                    emits: string[];
                    provide(): {
                        FormInstance: any;
                    };
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
            emits: string[];
            provide(): any;
            props: {};
            data(): {
                formValidate: {};
            };
            methods: {
                handleSubmit(): void;
                handleValidate(fields: any, cb: any): void;
            };
        };
    };
    function provide(): {
        LoginInstance: {
            name: string;
            components: {
                Form: {
                    name: string;
                    emits: string[];
                    provide(): {
                        FormInstance: any;
                    };
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
            emits: string[];
            provide(): any;
            props: {};
            data(): {
                formValidate: {};
            };
            methods: {
                handleSubmit(): void;
                handleValidate(fields: any, cb: any): void;
            };
        };
    };
    const props: {};
    function data(): {
        formValidate: {};
    };
    function data(): {
        formValidate: {};
    };
    namespace methods {
        function handleSubmit(): void;
        function handleSubmit(): void;
        function handleValidate(fields: any, cb: any): void;
        function handleValidate(fields: any, cb: any): void;
    }
}
export default _default;
import Form from "../form/form.vue";
