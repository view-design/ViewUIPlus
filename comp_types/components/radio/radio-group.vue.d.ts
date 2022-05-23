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
    function provide(): {
        RadioGroupInstance: {
            name: string;
            mixins: {
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
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: string;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                type: {
                    validator(value: any): boolean;
                };
                vertical: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                name: {
                    type: StringConstructor;
                    default: () => string;
                };
                buttonStyle: {
                    validator(value: any): boolean;
                    default: string;
                };
            };
            data(): {
                currentValue: any;
                children: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
            };
            methods: {
                change(data: any): void;
            };
            watch: {
                modelValue(): void;
            };
        };
    };
    function provide(): {
        RadioGroupInstance: {
            name: string;
            mixins: {
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
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: string;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                type: {
                    validator(value: any): boolean;
                };
                vertical: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                name: {
                    type: StringConstructor;
                    default: () => string;
                };
                buttonStyle: {
                    validator(value: any): boolean;
                    default: string;
                };
            };
            data(): {
                currentValue: any;
                children: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
            };
            methods: {
                change(data: any): void;
            };
            watch: {
                modelValue(): void;
            };
        };
    };
    namespace props {
        export namespace modelValue {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: string;
            export { _default as default };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace type_1 {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        export { type_1 as type };
        export namespace vertical {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace name_1 {
            const type_3: StringConstructor;
            export { type_3 as type };
            export { getUuid as default };
        }
        export { name_1 as name };
        export namespace buttonStyle {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_2: string;
            export { _default_2 as default };
        }
    }
    function data(): {
        currentValue: any;
        children: any[];
    };
    function data(): {
        currentValue: any;
        children: any[];
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
    }
    namespace methods {
        function change(data: any): void;
        function change(data: any): void;
    }
    namespace watch {
        function modelValue(): void;
        function modelValue(): void;
    }
}
export default _default;
declare function getUuid(): string;
