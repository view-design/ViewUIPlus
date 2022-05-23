declare namespace _default {
    const name: string;
    const componentName: string;
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
        namespace SelectInstance {
            const _default: any;
            export { _default as default };
        }
        namespace OptionGroupInstance {
            const _default_1: any;
            export { _default_1 as default };
        }
    }
    namespace props {
        namespace value {
            const type: (StringConstructor | NumberConstructor)[];
            const required: boolean;
        }
        namespace label {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
        }
        namespace disabled {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace tag {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
        }
    }
    function data(): {
        searchLabel: string;
        autoComplete: boolean;
        id: string;
        instance: any;
    };
    function data(): {
        searchLabel: string;
        autoComplete: boolean;
        id: string;
        instance: any;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function showLabel(): any;
        function showLabel(): any;
        function optionLabel(): any;
        function optionLabel(): any;
        function isFocused(): boolean;
        function isFocused(): boolean;
        function isShow(): any;
        function isShow(): any;
        function selected(): any;
        function selected(): any;
    }
    namespace methods {
        function select(): boolean;
        function select(): boolean;
        function addOption(): void;
        function addOption(): void;
        function removeOption(): void;
        function removeOption(): void;
    }
    function created(): void;
    function created(): void;
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
