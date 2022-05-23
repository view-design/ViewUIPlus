declare namespace _default {
    const name: string;
    const emits: string[];
    function provide(): {
        CollapseInstance: {
            name: string;
            emits: string[];
            provide(): any;
            props: {
                accordion: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modelValue: {
                    type: (StringConstructor | ArrayConstructor)[];
                };
                simple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                currentValue: any;
                panelCount: number;
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
            };
            methods: {
                getActiveKey(): any;
                toggle(data: any): void;
            };
            watch: {
                modelValue(val: any): void;
            };
        };
    };
    function provide(): {
        CollapseInstance: {
            name: string;
            emits: string[];
            provide(): any;
            props: {
                accordion: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modelValue: {
                    type: (StringConstructor | ArrayConstructor)[];
                };
                simple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                currentValue: any;
                panelCount: number;
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
            };
            methods: {
                getActiveKey(): any;
                toggle(data: any): void;
            };
            watch: {
                modelValue(val: any): void;
            };
        };
    };
    namespace props {
        namespace accordion {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace modelValue {
            const type_1: (StringConstructor | ArrayConstructor)[];
            export { type_1 as type };
        }
        namespace simple {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
    }
    function data(): {
        currentValue: any;
        panelCount: number;
    };
    function data(): {
        currentValue: any;
        panelCount: number;
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
        function getActiveKey(): any;
        function getActiveKey(): any;
        function toggle(data: any): void;
        function toggle(data: any): void;
    }
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
    }
}
export default _default;
