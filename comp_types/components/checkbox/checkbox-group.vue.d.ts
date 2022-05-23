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
        CheckboxGroupInstance: {
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
                    type: ArrayConstructor;
                    default(): any[];
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
            };
            data(): {
                currentValue: any;
                children: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: boolean;
                })[];
            };
            methods: {
                change(data: any): void;
            };
        };
    };
    function provide(): {
        CheckboxGroupInstance: {
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
                    type: ArrayConstructor;
                    default(): any[];
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
            };
            data(): {
                currentValue: any;
                children: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: boolean;
                })[];
            };
            methods: {
                change(data: any): void;
            };
        };
    };
    namespace props {
        namespace modelValue {
            export const type: ArrayConstructor;
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
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
            [x: string]: boolean;
        })[];
        function classes(): (string | {
            [x: string]: boolean;
        })[];
    }
    namespace methods {
        function change(data: any): void;
        function change(data: any): void;
    }
}
export default _default;
