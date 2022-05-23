declare namespace _default {
    const inheritAttrs: boolean;
    const name: string;
    const mixins: ({
        methods: {
            t(...args: any[]): any;
        };
    } | {
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
    })[];
    namespace components {
        export { Icon };
        export { iButton };
    }
    const emits: string[];
    function provide(): {
        ModalInstance: {
            inheritAttrs: boolean;
            name: string;
            mixins: ({
                methods: {
                    t(...args: any[]): any;
                };
            } | {
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
            })[];
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
                iButton: {
                    name: string;
                    mixins: ({
                        props: {
                            to: {
                                type: (ObjectConstructor | StringConstructor)[];
                            };
                            replace: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            target: {
                                type: StringConstructor;
                                validator(value: any): boolean;
                                default: string;
                            };
                            append: {
                                type: BooleanConstructor;
                                required: boolean;
                                default: boolean;
                            };
                        };
                        computed: {
                            linkUrl(): any;
                        };
                        methods: {
                            handleOpenTo(): void;
                            handleClick(new_window?: boolean): void;
                            handleCheckClick(event: any, new_window?: boolean): boolean;
                        };
                    } | {
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
                    })[];
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
                    props: {
                        type: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        shape: {
                            validator(value: any): boolean;
                        };
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        loading: BooleanConstructor;
                        disabled: BooleanConstructor;
                        htmlType: {
                            default: string;
                            validator(value: any): boolean;
                        };
                        icon: {
                            type: StringConstructor;
                            default: string;
                        };
                        customIcon: {
                            type: StringConstructor;
                            default: string;
                        };
                        long: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        ghost: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    computed: {
                        showSlot(): boolean;
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                        isHrefPattern(): boolean;
                        tagName(): "a" | "button";
                        tagProps(): {
                            href: any;
                            target: any;
                            type?: undefined;
                        } | {
                            type: any;
                            href?: undefined;
                            target?: undefined;
                        };
                    };
                    methods: {
                        handleClickLink(event: any): void;
                    };
                    render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>;
                };
            };
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskClosable: {
                    type: BooleanConstructor;
                    default(): any;
                };
                title: {
                    type: StringConstructor;
                };
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                okText: {
                    type: StringConstructor;
                };
                cancelText: {
                    type: StringConstructor;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                styles: {
                    type: ObjectConstructor;
                    default(): {};
                };
                className: {
                    type: StringConstructor;
                };
                footerHide: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                transitionNames: {
                    type: ArrayConstructor;
                    default(): string[];
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                fullscreen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                mask: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                sticky: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                stickyDistance: {
                    type: NumberConstructor;
                    default: number;
                };
                resetDragPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                zIndex: {
                    type: NumberConstructor;
                    default: number;
                };
                beforeClose: FunctionConstructor;
                render: FunctionConstructor;
            };
            data(): {
                prefixCls: string;
                wrapShow: boolean;
                showHead: boolean;
                buttonLoading: boolean;
                visible: any;
                dragData: any;
                modalIndex: any;
                isMouseTriggerIn: boolean;
                id: string;
                tableList: any[];
                sliderList: any[];
            };
            computed: {
                wrapClasses(): (string | {
                    [x: string]: boolean;
                })[];
                wrapStyles(): {
                    zIndex: any;
                };
                maskClasses(): string;
                classes(): (string | {
                    [x: string]: any;
                })[];
                contentClasses(): (string | {
                    [x: string]: any;
                })[];
                mainStyles(): {};
                contentStyles(): {
                    left: string;
                    top: string;
                };
                localeOkText(): any;
                localeCancelText(): any;
                showMask(): any;
            };
            methods: {
                close(): void;
                handleClose(): void;
                handleMask(): void;
                handleWrapClick(event: any): void;
                handleMousedown(): void;
                cancel(): void;
                ok(): void;
                EscClose(e: any): void;
                animationFinish(): void;
                handleMoveStart(event: any): boolean;
                handleMoveMove(event: any): boolean;
                handleMoveEnd(): void;
                handleGetModalIndex(): number;
                handleClickModal(): void;
                addModal(): void;
                removeModal(): void;
            };
            watch: {
                modelValue(val: any): void;
                loading(val: any): void;
                scrollable(val: any): void;
                title(val: any): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    function provide(): {
        ModalInstance: {
            inheritAttrs: boolean;
            name: string;
            mixins: ({
                methods: {
                    t(...args: any[]): any;
                };
            } | {
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
            })[];
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
                iButton: {
                    name: string;
                    mixins: ({
                        props: {
                            to: {
                                type: (ObjectConstructor | StringConstructor)[];
                            };
                            replace: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            target: {
                                type: StringConstructor;
                                validator(value: any): boolean;
                                default: string;
                            };
                            append: {
                                type: BooleanConstructor;
                                required: boolean;
                                default: boolean;
                            };
                        };
                        computed: {
                            linkUrl(): any;
                        };
                        methods: {
                            handleOpenTo(): void;
                            handleClick(new_window?: boolean): void;
                            handleCheckClick(event: any, new_window?: boolean): boolean;
                        };
                    } | {
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
                    })[];
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
                    props: {
                        type: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        shape: {
                            validator(value: any): boolean;
                        };
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        loading: BooleanConstructor;
                        disabled: BooleanConstructor;
                        htmlType: {
                            default: string;
                            validator(value: any): boolean;
                        };
                        icon: {
                            type: StringConstructor;
                            default: string;
                        };
                        customIcon: {
                            type: StringConstructor;
                            default: string;
                        };
                        long: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        ghost: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    computed: {
                        showSlot(): boolean;
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                        isHrefPattern(): boolean;
                        tagName(): "a" | "button";
                        tagProps(): {
                            href: any;
                            target: any;
                            type?: undefined;
                        } | {
                            type: any;
                            href?: undefined;
                            target?: undefined;
                        };
                    };
                    methods: {
                        handleClickLink(event: any): void;
                    };
                    render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>;
                };
            };
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                maskClosable: {
                    type: BooleanConstructor;
                    default(): any;
                };
                title: {
                    type: StringConstructor;
                };
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                okText: {
                    type: StringConstructor;
                };
                cancelText: {
                    type: StringConstructor;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                styles: {
                    type: ObjectConstructor;
                    default(): {};
                };
                className: {
                    type: StringConstructor;
                };
                footerHide: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                transitionNames: {
                    type: ArrayConstructor;
                    default(): string[];
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                fullscreen: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                mask: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                sticky: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                stickyDistance: {
                    type: NumberConstructor;
                    default: number;
                };
                resetDragPosition: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                zIndex: {
                    type: NumberConstructor;
                    default: number;
                };
                beforeClose: FunctionConstructor;
                render: FunctionConstructor;
            };
            data(): {
                prefixCls: string;
                wrapShow: boolean;
                showHead: boolean;
                buttonLoading: boolean;
                visible: any;
                dragData: any;
                modalIndex: any;
                isMouseTriggerIn: boolean;
                id: string;
                tableList: any[];
                sliderList: any[];
            };
            computed: {
                wrapClasses(): (string | {
                    [x: string]: boolean;
                })[];
                wrapStyles(): {
                    zIndex: any;
                };
                maskClasses(): string;
                classes(): (string | {
                    [x: string]: any;
                })[];
                contentClasses(): (string | {
                    [x: string]: any;
                })[];
                mainStyles(): {};
                contentStyles(): {
                    left: string;
                    top: string;
                };
                localeOkText(): any;
                localeCancelText(): any;
                showMask(): any;
            };
            methods: {
                close(): void;
                handleClose(): void;
                handleMask(): void;
                handleWrapClick(event: any): void;
                handleMousedown(): void;
                cancel(): void;
                ok(): void;
                EscClose(e: any): void;
                animationFinish(): void;
                handleMoveStart(event: any): boolean;
                handleMoveMove(event: any): boolean;
                handleMoveEnd(): void;
                handleGetModalIndex(): number;
                handleClickModal(): void;
                addModal(): void;
                removeModal(): void;
            };
            watch: {
                modelValue(val: any): void;
                loading(val: any): void;
                scrollable(val: any): void;
                title(val: any): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    namespace props {
        namespace modelValue {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace closable {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace maskClosable {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace title {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace width {
            const type_4: (StringConstructor | NumberConstructor)[];
            export { type_4 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace okText {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        namespace cancelText {
            const type_6: StringConstructor;
            export { type_6 as type };
        }
        namespace loading {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace styles {
            const type_8: ObjectConstructor;
            export { type_8 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        namespace className {
            const type_9: StringConstructor;
            export { type_9 as type };
        }
        namespace footerHide {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace scrollable {
            const type_11: BooleanConstructor;
            export { type_11 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace transitionNames {
            const type_12: ArrayConstructor;
            export { type_12 as type };
            function _default(): string[];
            function _default(): string[];
            export { _default as default };
        }
        namespace transfer {
            const type_13: BooleanConstructor;
            export { type_13 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace fullscreen {
            const type_14: BooleanConstructor;
            export { type_14 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        namespace mask {
            const type_15: BooleanConstructor;
            export { type_15 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        namespace draggable {
            const type_16: BooleanConstructor;
            export { type_16 as type };
            const _default_8: boolean;
            export { _default_8 as default };
        }
        namespace sticky {
            const type_17: BooleanConstructor;
            export { type_17 as type };
            const _default_9: boolean;
            export { _default_9 as default };
        }
        namespace stickyDistance {
            const type_18: NumberConstructor;
            export { type_18 as type };
            const _default_10: number;
            export { _default_10 as default };
        }
        namespace resetDragPosition {
            const type_19: BooleanConstructor;
            export { type_19 as type };
            const _default_11: boolean;
            export { _default_11 as default };
        }
        namespace zIndex {
            const type_20: NumberConstructor;
            export { type_20 as type };
            const _default_12: number;
            export { _default_12 as default };
        }
        const beforeClose: FunctionConstructor;
        const render: FunctionConstructor;
    }
    function data(): {
        prefixCls: string;
        wrapShow: boolean;
        showHead: boolean;
        buttonLoading: boolean;
        visible: any;
        dragData: any;
        modalIndex: any;
        isMouseTriggerIn: boolean;
        id: string;
        tableList: any[];
        sliderList: any[];
    };
    function data(): {
        prefixCls: string;
        wrapShow: boolean;
        showHead: boolean;
        buttonLoading: boolean;
        visible: any;
        dragData: any;
        modalIndex: any;
        isMouseTriggerIn: boolean;
        id: string;
        tableList: any[];
        sliderList: any[];
    };
    namespace computed {
        function wrapClasses(): (string | {
            [x: string]: boolean;
        })[];
        function wrapClasses(): (string | {
            [x: string]: boolean;
        })[];
        function wrapStyles(): {
            zIndex: any;
        };
        function wrapStyles(): {
            zIndex: any;
        };
        function maskClasses(): string;
        function maskClasses(): string;
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function contentClasses(): (string | {
            [x: string]: any;
        })[];
        function contentClasses(): (string | {
            [x: string]: any;
        })[];
        function mainStyles(): {};
        function mainStyles(): {};
        function contentStyles(): {
            left: string;
            top: string;
        };
        function contentStyles(): {
            left: string;
            top: string;
        };
        function localeOkText(): any;
        function localeOkText(): any;
        function localeCancelText(): any;
        function localeCancelText(): any;
        function showMask(): any;
        function showMask(): any;
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
        function handleMousedown(): void;
        function handleMousedown(): void;
        function cancel(): void;
        function cancel(): void;
        function ok(): void;
        function ok(): void;
        function EscClose(e: any): void;
        function EscClose(e: any): void;
        function animationFinish(): void;
        function animationFinish(): void;
        function handleMoveStart(event: any): boolean;
        function handleMoveStart(event: any): boolean;
        function handleMoveMove(event: any): boolean;
        function handleMoveMove(event: any): boolean;
        function handleMoveEnd(): void;
        function handleMoveEnd(): void;
        function handleGetModalIndex(): number;
        function handleGetModalIndex(): number;
        function handleClickModal(): void;
        function handleClickModal(): void;
        function addModal(): void;
        function addModal(): void;
        function removeModal(): void;
        function removeModal(): void;
    }
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        const visible: any;
        function loading(val: any): void;
        function loading(val: any): void;
        function scrollable(val: any): void;
        function scrollable(val: any): void;
        function title(val: any): void;
        function title(val: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import Icon from "../icon";
import iButton from "../button/button.vue";
