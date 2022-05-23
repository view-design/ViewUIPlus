declare namespace _default {
    const name: string;
    const mixins: ({
        data(): {
            globalConfig: {};
        };
        created(): void;
    } | {
        inject: {
            MenuInstance: {
                default: any;
            };
            SubmenuInstance: {
                default: any;
            };
        };
        data(): {
            menu: any;
        };
        computed: {
            hasParentSubmenu(): boolean;
            parentSubmenuNum(): any;
            mode(): any;
        };
    })[];
    namespace components {
        export { Icon };
        export { Drop };
        export { CollapseTransition };
    }
    function provide(): {
        SubmenuInstance: {
            name: string;
            mixins: ({
                data(): {
                    globalConfig: {};
                };
                created(): void;
            } | {
                inject: {
                    MenuInstance: {
                        default: any;
                    };
                    SubmenuInstance: {
                        default: any;
                    };
                };
                data(): {
                    menu: any;
                };
                computed: {
                    hasParentSubmenu(): boolean;
                    parentSubmenuNum(): any;
                    mode(): any;
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
                Drop: {
                    name: string;
                    emits: string[];
                    props: {
                        placement: {
                            type: StringConstructor;
                            default: string;
                        };
                        className: {
                            type: StringConstructor;
                        };
                        transfer: {
                            type: BooleanConstructor;
                        };
                        eventsEnabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        visible: {
                            type: BooleanConstructor;
                        };
                        classes: {
                            type: ObjectConstructor;
                            default: () => void;
                        };
                        styles: {
                            type: ObjectConstructor;
                            default: () => void;
                        };
                        transitionName: {
                            type: StringConstructor;
                            default: string;
                        };
                        boundariesElement: {
                            type: (StringConstructor | {
                                new (): HTMLElement;
                                prototype: HTMLElement;
                            })[];
                            default: string;
                        };
                    };
                    data(): {
                        popper: any;
                        width: string;
                        popperStatus: boolean;
                        tIndex: any;
                    };
                    computed: {
                        mergedStyle(): any;
                        mergedClass(): any;
                    };
                    methods: {
                        update(): void;
                        destroy(): void;
                        resetTransformOrigin(): void;
                        handleGetIndex(): number;
                        handleMouseenter(e: any): void;
                        handleMouseleave(e: any): void;
                        handleOnUpdatePopper(): void;
                        handleOnDestroyPopper(): void;
                        handleClick(event: any): void;
                    };
                    beforeUnmount(): void;
                };
                CollapseTransition: import("vue").DefineComponent<{
                    ready: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }, {
                    on: {
                        beforeEnter(el: any): void;
                        enter(el: any): void;
                        afterEnter(el: any): void;
                        beforeLeave(el: any): void;
                        leave(el: any): void;
                        afterLeave(el: any): void;
                    };
                }, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    ready: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>>, {
                    ready: boolean;
                }>;
            };
            provide(): any;
            props: {
                name: {
                    type: (StringConstructor | NumberConstructor)[];
                    required: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                prefixCls: string;
                active: boolean;
                opened: boolean;
                dropWidth: number;
                id: string;
                childSubmenuList: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                accordion(): any;
                dropStyle(): {
                    minWidth: string;
                };
                titleStyle(): {
                    paddingLeft: string;
                } | {
                    paddingLeft?: undefined;
                };
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
            };
            methods: {
                handleMouseenter(): void;
                handleMouseleave(): void;
                handleClick(): void;
                addSubmenu(): void;
                removeSubmenu(): void;
                handleMenuItemSelect(name: any): void;
                handleUpdateActiveName(status: any): void;
            };
            watch: {
                mode(val: any): void;
                opened(val: any): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    function provide(): {
        SubmenuInstance: {
            name: string;
            mixins: ({
                data(): {
                    globalConfig: {};
                };
                created(): void;
            } | {
                inject: {
                    MenuInstance: {
                        default: any;
                    };
                    SubmenuInstance: {
                        default: any;
                    };
                };
                data(): {
                    menu: any;
                };
                computed: {
                    hasParentSubmenu(): boolean;
                    parentSubmenuNum(): any;
                    mode(): any;
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
                Drop: {
                    name: string;
                    emits: string[];
                    props: {
                        placement: {
                            type: StringConstructor;
                            default: string;
                        };
                        className: {
                            type: StringConstructor;
                        };
                        transfer: {
                            type: BooleanConstructor;
                        };
                        eventsEnabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        visible: {
                            type: BooleanConstructor;
                        };
                        classes: {
                            type: ObjectConstructor;
                            default: () => void;
                        };
                        styles: {
                            type: ObjectConstructor;
                            default: () => void;
                        };
                        transitionName: {
                            type: StringConstructor;
                            default: string;
                        };
                        boundariesElement: {
                            type: (StringConstructor | {
                                new (): HTMLElement;
                                prototype: HTMLElement;
                            })[];
                            default: string;
                        };
                    };
                    data(): {
                        popper: any;
                        width: string;
                        popperStatus: boolean;
                        tIndex: any;
                    };
                    computed: {
                        mergedStyle(): any;
                        mergedClass(): any;
                    };
                    methods: {
                        update(): void;
                        destroy(): void;
                        resetTransformOrigin(): void;
                        handleGetIndex(): number;
                        handleMouseenter(e: any): void;
                        handleMouseleave(e: any): void;
                        handleOnUpdatePopper(): void;
                        handleOnDestroyPopper(): void;
                        handleClick(event: any): void;
                    };
                    beforeUnmount(): void;
                };
                CollapseTransition: import("vue").DefineComponent<{
                    ready: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }, {
                    on: {
                        beforeEnter(el: any): void;
                        enter(el: any): void;
                        afterEnter(el: any): void;
                        beforeLeave(el: any): void;
                        leave(el: any): void;
                        afterLeave(el: any): void;
                    };
                }, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    ready: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                }>>, {
                    ready: boolean;
                }>;
            };
            provide(): any;
            props: {
                name: {
                    type: (StringConstructor | NumberConstructor)[];
                    required: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                prefixCls: string;
                active: boolean;
                opened: boolean;
                dropWidth: number;
                id: string;
                childSubmenuList: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                accordion(): any;
                dropStyle(): {
                    minWidth: string;
                };
                titleStyle(): {
                    paddingLeft: string;
                } | {
                    paddingLeft?: undefined;
                };
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
            };
            methods: {
                handleMouseenter(): void;
                handleMouseleave(): void;
                handleClick(): void;
                addSubmenu(): void;
                removeSubmenu(): void;
                handleMenuItemSelect(name: any): void;
                handleUpdateActiveName(status: any): void;
            };
            watch: {
                mode(val: any): void;
                opened(val: any): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    namespace props {
        export namespace name_1 {
            const type: (StringConstructor | NumberConstructor)[];
            const required: boolean;
        }
        export { name_1 as name };
        export namespace disabled {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
    }
    function data(): {
        prefixCls: string;
        active: boolean;
        opened: boolean;
        dropWidth: number;
        id: string;
        childSubmenuList: any[];
    };
    function data(): {
        prefixCls: string;
        active: boolean;
        opened: boolean;
        dropWidth: number;
        id: string;
        childSubmenuList: any[];
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function accordion(): any;
        function accordion(): any;
        function dropStyle(): {
            minWidth: string;
        };
        function dropStyle(): {
            minWidth: string;
        };
        function titleStyle(): {
            paddingLeft: string;
        } | {
            paddingLeft?: undefined;
        };
        function titleStyle(): {
            paddingLeft: string;
        } | {
            paddingLeft?: undefined;
        };
        function arrowType(): string;
        function arrowType(): string;
        function customArrowType(): string;
        function customArrowType(): string;
        function arrowSize(): string;
        function arrowSize(): string;
    }
    namespace methods {
        function handleMouseenter(): void;
        function handleMouseenter(): void;
        function handleMouseleave(): void;
        function handleMouseleave(): void;
        function handleClick(): void;
        function handleClick(): void;
        function addSubmenu(): void;
        function addSubmenu(): void;
        function removeSubmenu(): void;
        function removeSubmenu(): void;
        function handleMenuItemSelect(name: any): void;
        function handleMenuItemSelect(name: any): void;
        function handleUpdateActiveName(status: any): void;
        function handleUpdateActiveName(status: any): void;
    }
    namespace watch {
        function mode(val: any): void;
        function mode(val: any): void;
        function opened(val: any): void;
        function opened(val: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import Icon from "../icon/icon.vue";
import Drop from "../select/dropdown.vue";
import CollapseTransition from "../base/collapse-transition.vue";
