declare namespace _default {
    const name: string;
    const mixins: {
        emits: string[];
        props: {
            eventsEnabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            placement: {
                type: StringConstructor;
                default: string;
            };
            boundariesPadding: {
                type: NumberConstructor;
                default: number;
            };
            reference: ObjectConstructor;
            popper: ObjectConstructor;
            offset: {
                default: number;
            };
            modelValue: {
                type: BooleanConstructor;
                default: boolean;
            };
            transition: StringConstructor;
            options: {
                type: ObjectConstructor;
                default(): {
                    modifiers: {
                        computeStyle: {
                            gpuAcceleration: boolean;
                        };
                        preventOverflow: {
                            boundariesElement: string;
                        };
                    };
                };
            };
        };
        data(): {
            visible: any;
        };
        watch: {
            modelValue: {
                immediate: boolean;
                handler(val: any): void;
            };
            visible(val: any): void;
        };
        methods: {
            createPopper(): void;
            updatePopper(): void;
            doDestroy(): void;
        };
        updated(): void;
        beforeUnmount(): void;
    }[];
    namespace props {
        namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace content {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace delay {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace disabled {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace controlled {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace always {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace transfer {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace theme {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_6: string;
            export { _default_6 as default };
        }
        namespace maxWidth {
            const type_6: (StringConstructor | NumberConstructor)[];
            export { type_6 as type };
        }
        namespace transferClassName {
            const type_7: StringConstructor;
            export { type_7 as type };
        }
    }
    function data(): {
        prefixCls: string;
        tIndex: any;
    };
    function data(): {
        prefixCls: string;
        tIndex: any;
    };
    namespace computed {
        function innerStyles(): {
            'max-width': string;
        };
        function innerStyles(): {
            'max-width': string;
        };
        function innerClasses(): (string | {
            [x: string]: boolean;
        })[];
        function innerClasses(): (string | {
            [x: string]: boolean;
        })[];
        function dropStyles(): {
            'z-index': any;
        };
        function dropStyles(): {
            'z-index': any;
        };
        function dropdownCls(): (string | {
            [x: string]: any;
            [x: number]: any;
        })[];
        function dropdownCls(): (string | {
            [x: string]: any;
            [x: number]: any;
        })[];
    }
    namespace watch {
        function content(): void;
        function content(): void;
    }
    namespace methods {
        function handleShowPopper(): void;
        function handleShowPopper(): void;
        function handleClosePopper(): void;
        function handleClosePopper(): void;
        function handleGetIndex(): number;
        function handleGetIndex(): number;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
