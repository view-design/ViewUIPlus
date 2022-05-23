declare namespace _default {
    const name: string;
    const mixins: {
        props: {
            lockScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
        methods: {
            checkScrollBar(): void;
            checkMaskInVisible(): boolean;
            setScrollBar(): void;
            resetScrollBar(): void;
            addScrollEffect(): void;
            removeScrollEffect(): void;
        };
    }[];
    namespace components {
        export { Icon };
    }
    const emits: string[];
    function provide(): {
        DrawerInstance: {
            name: string;
            mixins: {
                props: {
                    lockScroll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                };
                methods: {
                    checkScrollBar(): void;
                    checkMaskInVisible(): boolean;
                    setScrollBar(): void;
                    resetScrollBar(): void;
                    addScrollEffect(): void;
                    removeScrollEffect(): void;
                };
            }[];
            components: {
                Icon: {
                    name: string;
                    props: {
                        type: {
                            type: StringConstructor;
                            default: string;
                        };
                        size: (StringConstructor | NumberConstructor)[];
                        color: StringConstructor;
                        custom: {
                            type: StringConstructor;
                            default: string;
                        };
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: boolean;
                        })[];
                        styles(): {
                            'font-size': string;
                            color: any;
                        };
                    };
                };
            };
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                title: {
                    type: StringConstructor;
                };
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskClosable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                mask: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskStyle: {
                    type: ObjectConstructor;
                };
                styles: {
                    type: ObjectConstructor;
                };
                scrollable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placement: {
                    validator(value: any): boolean;
                    default: string;
                };
                zIndex: {
                    type: NumberConstructor;
                    default: number;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                className: {
                    type: StringConstructor;
                };
                inner: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                beforeClose: FunctionConstructor;
            };
            data(): {
                prefixCls: string;
                visible: any;
                wrapShow: boolean;
                showHead: boolean;
                canMove: boolean;
                dragWidth: any;
                dragHeight: any;
                wrapperWidth: any;
                wrapperHeight: any;
                wrapperLeft: number;
                minWidth: number;
                minHeight: number;
                id: string;
                tableList: any[];
                sliderList: any[];
            };
            computed: {
                wrapClasses(): (string | {
                    [x: string]: any;
                })[];
                mainStyles(): {};
                contentClasses(): (string | {
                    [x: string]: boolean;
                })[];
                classes(): (string | {
                    [x: string]: any;
                })[];
                maskClasses(): (string | {
                    [x: string]: any;
                })[];
                transitionName(): string;
            };
            methods: {
                close(): void;
                handleClose(): void;
                handleMask(): void;
                handleWrapClick(event: any): void;
                handleMousemove(event: any): void;
                handleSetWrapperWidth(): void;
                handleMouseup(): void;
                handleTriggerMousedown(): void;
                addDrawer(): void;
                removeDrawer(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
            watch: {
                modelValue(val: any): void;
                scrollable(val: any): void;
                title(val: any): void;
                width(val: any): void;
                height(val: any): void;
            };
        };
    };
    function provide(): {
        DrawerInstance: {
            name: string;
            mixins: {
                props: {
                    lockScroll: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                };
                methods: {
                    checkScrollBar(): void;
                    checkMaskInVisible(): boolean;
                    setScrollBar(): void;
                    resetScrollBar(): void;
                    addScrollEffect(): void;
                    removeScrollEffect(): void;
                };
            }[];
            components: {
                Icon: {
                    name: string;
                    props: {
                        type: {
                            type: StringConstructor;
                            default: string;
                        };
                        size: (StringConstructor | NumberConstructor)[];
                        color: StringConstructor;
                        custom: {
                            type: StringConstructor;
                            default: string;
                        };
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: boolean;
                        })[];
                        styles(): {
                            'font-size': string;
                            color: any;
                        };
                    };
                };
            };
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                title: {
                    type: StringConstructor;
                };
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskClosable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                mask: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskStyle: {
                    type: ObjectConstructor;
                };
                styles: {
                    type: ObjectConstructor;
                };
                scrollable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placement: {
                    validator(value: any): boolean;
                    default: string;
                };
                zIndex: {
                    type: NumberConstructor;
                    default: number;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                className: {
                    type: StringConstructor;
                };
                inner: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                beforeClose: FunctionConstructor;
            };
            data(): {
                prefixCls: string;
                visible: any;
                wrapShow: boolean;
                showHead: boolean;
                canMove: boolean;
                dragWidth: any;
                dragHeight: any;
                wrapperWidth: any;
                wrapperHeight: any;
                wrapperLeft: number;
                minWidth: number;
                minHeight: number;
                id: string;
                tableList: any[];
                sliderList: any[];
            };
            computed: {
                wrapClasses(): (string | {
                    [x: string]: any;
                })[];
                mainStyles(): {};
                contentClasses(): (string | {
                    [x: string]: boolean;
                })[];
                classes(): (string | {
                    [x: string]: any;
                })[];
                maskClasses(): (string | {
                    [x: string]: any;
                })[];
                transitionName(): string;
            };
            methods: {
                close(): void;
                handleClose(): void;
                handleMask(): void;
                handleWrapClick(event: any): void;
                handleMousemove(event: any): void;
                handleSetWrapperWidth(): void;
                handleMouseup(): void;
                handleTriggerMousedown(): void;
                addDrawer(): void;
                removeDrawer(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
            watch: {
                modelValue(val: any): void;
                scrollable(val: any): void;
                title(val: any): void;
                width(val: any): void;
                height(val: any): void;
            };
        };
    };
    namespace props {
        namespace modelValue {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace title {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace width {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace height {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace closable {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace maskClosable {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace mask {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace maskStyle {
            const type_7: ObjectConstructor;
            export { type_7 as type };
        }
        namespace styles {
            const type_8: ObjectConstructor;
            export { type_8 as type };
        }
        namespace scrollable {
            const type_9: BooleanConstructor;
            export { type_9 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_7: string;
            export { _default_7 as default };
        }
        namespace zIndex {
            const type_10: NumberConstructor;
            export { type_10 as type };
            const _default_8: number;
            export { _default_8 as default };
        }
        namespace transfer {
            const type_11: BooleanConstructor;
            export { type_11 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace className {
            const type_12: StringConstructor;
            export { type_12 as type };
        }
        namespace inner {
            const type_13: BooleanConstructor;
            export { type_13 as type };
            const _default_9: boolean;
            export { _default_9 as default };
        }
        namespace draggable {
            const type_14: BooleanConstructor;
            export { type_14 as type };
            const _default_10: boolean;
            export { _default_10 as default };
        }
        const beforeClose: FunctionConstructor;
    }
    function data(): {
        prefixCls: string;
        visible: any;
        wrapShow: boolean;
        showHead: boolean;
        canMove: boolean;
        dragWidth: any;
        dragHeight: any;
        wrapperWidth: any;
        wrapperHeight: any;
        wrapperLeft: number;
        minWidth: number;
        minHeight: number;
        id: string;
        tableList: any[];
        sliderList: any[];
    };
    function data(): {
        prefixCls: string;
        visible: any;
        wrapShow: boolean;
        showHead: boolean;
        canMove: boolean;
        dragWidth: any;
        dragHeight: any;
        wrapperWidth: any;
        wrapperHeight: any;
        wrapperLeft: number;
        minWidth: number;
        minHeight: number;
        id: string;
        tableList: any[];
        sliderList: any[];
    };
    namespace computed {
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function mainStyles(): {};
        function mainStyles(): {};
        function contentClasses(): (string | {
            [x: string]: boolean;
        })[];
        function contentClasses(): (string | {
            [x: string]: boolean;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function maskClasses(): (string | {
            [x: string]: any;
        })[];
        function maskClasses(): (string | {
            [x: string]: any;
        })[];
        function transitionName(): string;
        function transitionName(): string;
    }
    namespace methods {
        function close(): void;
        function close(): void;
        function handleClose(): void;
        function handleClose(): void;
        function handleMask(): void;
        function handleMask(): void;
        function handleWrapClick(event: any): void;
        function handleWrapClick(event: any): void;
        function handleMousemove(event: any): void;
        function handleMousemove(event: any): void;
        function handleSetWrapperWidth(): void;
        function handleSetWrapperWidth(): void;
        function handleMouseup(): void;
        function handleMouseup(): void;
        function handleTriggerMousedown(): void;
        function handleTriggerMousedown(): void;
        function addDrawer(): void;
        function addDrawer(): void;
        function removeDrawer(): void;
        function removeDrawer(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        const visible: any;
        function scrollable(val: any): void;
        function scrollable(val: any): void;
        function title(val: any): void;
        function title(val: any): void;
        function width(val: any): void;
        function width(val: any): void;
        function height(val: any): void;
        function height(val: any): void;
    }
}
export default _default;
import Icon from "../icon";
