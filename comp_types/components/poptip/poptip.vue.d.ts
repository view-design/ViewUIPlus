declare namespace _default {
    const name: string;
    const mixins: ({
        methods: {
            t(...args: any[]): any;
        };
    } | {
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
    })[];
    const emits: string[];
    namespace directives {
        export { clickOutside };
    }
    namespace components {
        export { iButton };
    }
    namespace props {
        namespace trigger {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace title {
            const type: (StringConstructor | NumberConstructor)[];
        }
        namespace content {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace width {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
        }
        namespace confirm {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace okText {
            const type_4: StringConstructor;
            export { type_4 as type };
        }
        namespace cancelText {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        namespace transfer {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace popperClass {
            const type_7: StringConstructor;
            export { type_7 as type };
        }
        namespace wordWrap {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace padding {
            const type_9: StringConstructor;
            export { type_9 as type };
        }
        namespace disabled {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace capture {
            const type_11: BooleanConstructor;
            export { type_11 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace transferClassName {
            const type_12: StringConstructor;
            export { type_12 as type };
        }
    }
    function data(): {
        prefixCls: string;
        showTitle: boolean;
        isInput: boolean;
        disableCloseUnderTransfer: boolean;
        tIndex: any;
    };
    function data(): {
        prefixCls: string;
        showTitle: boolean;
        isInput: boolean;
        disableCloseUnderTransfer: boolean;
        tIndex: any;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function popperClasses(): (string | {
            [x: string]: any;
            [x: number]: any;
        })[];
        function popperClasses(): (string | {
            [x: string]: any;
            [x: number]: any;
        })[];
        function styles(): {
            width: string;
            'z-index': any;
        };
        function styles(): {
            width: string;
            'z-index': any;
        };
        function localeOkText(): any;
        function localeOkText(): any;
        function localeCancelText(): any;
        function localeCancelText(): any;
        function contentClasses(): (string | {
            [x: string]: any;
        })[];
        function contentClasses(): (string | {
            [x: string]: any;
        })[];
        function contentPaddingStyle(): {
            padding: any;
        };
        function contentPaddingStyle(): {
            padding: any;
        };
    }
    namespace methods {
        function handleClick(): boolean;
        function handleClick(): boolean;
        function handleTransferClick(): void;
        function handleTransferClick(): void;
        function handleClose(): boolean;
        function handleClose(): boolean;
        function handleFocus(fromInput?: boolean): boolean;
        function handleFocus(fromInput?: boolean): boolean;
        function handleBlur(fromInput?: boolean): boolean;
        function handleBlur(fromInput?: boolean): boolean;
        function handleMouseenter(): boolean;
        function handleMouseenter(): boolean;
        function handleMouseleave(): boolean;
        function handleMouseleave(): boolean;
        function cancel(): void;
        function cancel(): void;
        function ok(): void;
        function ok(): void;
        function getInputChildren(): any;
        function getInputChildren(): any;
        function handleGetIndex(): number;
        function handleGetIndex(): number;
        function handleIndexIncrease(): void;
        function handleIndexIncrease(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import clickOutside from "../../directives/clickoutside";
import iButton from "../button/button.vue";
