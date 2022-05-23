declare namespace _default {
    const name: string;
    const mixins: {
        data(): {
            globalConfig: {};
        };
        created(): void;
    }[];
    const emits: string[];
    namespace components {
        export { Icon };
        export { Render };
        export { Dropdown };
        export { DropdownMenu };
    }
    function provide(): {
        TabsInstance: {
            name: string;
            mixins: {
                data(): {
                    globalConfig: {};
                };
                created(): void;
            }[];
            emits: string[];
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
                Render: {
                    name: string;
                    props: {
                        render: FunctionConstructor;
                    };
                    render(): any;
                };
                Dropdown: {
                    name: string;
                    directives: {
                        clickOutside: {
                            beforeMount(el: any, binding: any, vnode: any): void;
                            unmounted(el: any, binding: any): void;
                        };
                    };
                    components: {
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
                    };
                    emits: string[];
                    props: {
                        trigger: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        placement: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        visible: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        transfer: {
                            type: BooleanConstructor;
                            default(): any;
                        };
                        transferClassName: {
                            type: StringConstructor;
                        };
                        stopPropagation: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        capture: {
                            type: BooleanConstructor;
                            default(): any;
                        };
                        eventsEnabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        boundariesElement: {
                            type: (StringConstructor | {
                                new (): HTMLElement;
                                prototype: HTMLElement;
                            })[];
                            default: string;
                        };
                    };
                    computed: {
                        transition(): "slide-up" | "fade";
                        dropdownCls(): {
                            [x: string]: any;
                            [x: number]: any;
                        };
                        relClasses(): (string | {
                            [x: string]: boolean;
                        })[];
                    };
                    data(): {
                        prefixCls: string;
                        currentVisible: any;
                        timeout: any;
                    };
                    watch: {
                        visible(val: any): void;
                    };
                    methods: {
                        handleClick(): boolean;
                        handleRightClick(): boolean;
                        handleMouseenter(): boolean;
                        handleMouseleave(): boolean;
                        onClickoutside(e: any): void;
                        handleClose(): boolean;
                        handleRightClose(): boolean;
                        hasParent(): any;
                        handleHaschildClick(): void;
                        handleItemClick(key: any): void;
                        handleHoverClick(): void;
                    };
                };
                DropdownMenu: {
                    name: string;
                };
            };
            provide(): any;
            props: {
                modelValue: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                type: {
                    validator(value: any): boolean;
                    default: string;
                };
                size: {
                    validator(value: any): boolean;
                    default: string;
                };
                animated: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                captureFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                beforeRemove: FunctionConstructor;
                name: {
                    type: StringConstructor;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoCloseContextmenu: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                prefixCls: string;
                navList: any[];
                barWidth: number;
                barOffset: number;
                activeKey: any;
                focusedKey: any;
                showSlot: boolean;
                navStyle: {
                    transform: string;
                };
                scrollable: boolean;
                transitioning: boolean;
                contextMenuVisible: boolean;
                contextMenuStyles: {
                    top: number;
                    left: number;
                };
                paneList: any[];
                tableList: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: boolean;
                })[];
                contentClasses(): (string | {
                    [x: string]: any;
                })[];
                barClasses(): (string | {
                    [x: string]: any;
                })[];
                contentStyle(): {};
                barStyle(): {
                    visibility: string;
                    width: string;
                };
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
            };
            methods: {
                getTabs(): any[];
                updateNav(): void;
                updateBar(): void;
                updateStatus(): void;
                tabCls(item: any): (string | {
                    [x: string]: any;
                })[];
                handleChange(index: any): void;
                handleDblclick(index: any): void;
                handleContextmenu(index: any, event: any): void;
                handleClickContextMenuOutside(): void;
                handlePreventSelect(index: any, event: any): void;
                handleTabKeyNavigation(e: any): void;
                handleTabKeyboardSelect(init?: boolean): void;
                handleRemove(index: any): void;
                handleRemoveTab(index: any): void;
                showClose(item: any): any;
                scrollPrev(): void;
                scrollNext(): void;
                getCurrentScrollOffset(): number;
                getTabIndex(name: any): any;
                setOffset(value: any): void;
                scrollToActiveTab(): void;
                updateNavScroll(): void;
                handleScroll(e: any): void;
                handleResize(): void;
                isInsideHiddenElement(): any;
                updateVisibility(index: any): void;
                handleDrag(index: any, event: any): void;
                handleDrop(index: any, event: any): void;
                closeContextMenu(): void;
                handleClickDropdownItem(): void;
            };
            watch: {
                modelValue(val: any): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    function provide(): {
        TabsInstance: {
            name: string;
            mixins: {
                data(): {
                    globalConfig: {};
                };
                created(): void;
            }[];
            emits: string[];
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
                Render: {
                    name: string;
                    props: {
                        render: FunctionConstructor;
                    };
                    render(): any;
                };
                Dropdown: {
                    name: string;
                    directives: {
                        clickOutside: {
                            beforeMount(el: any, binding: any, vnode: any): void;
                            unmounted(el: any, binding: any): void;
                        };
                    };
                    components: {
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
                    };
                    emits: string[];
                    props: {
                        trigger: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        placement: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        visible: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        transfer: {
                            type: BooleanConstructor;
                            default(): any;
                        };
                        transferClassName: {
                            type: StringConstructor;
                        };
                        stopPropagation: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        capture: {
                            type: BooleanConstructor;
                            default(): any;
                        };
                        eventsEnabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        boundariesElement: {
                            type: (StringConstructor | {
                                new (): HTMLElement;
                                prototype: HTMLElement;
                            })[];
                            default: string;
                        };
                    };
                    computed: {
                        transition(): "slide-up" | "fade";
                        dropdownCls(): {
                            [x: string]: any;
                            [x: number]: any;
                        };
                        relClasses(): (string | {
                            [x: string]: boolean;
                        })[];
                    };
                    data(): {
                        prefixCls: string;
                        currentVisible: any;
                        timeout: any;
                    };
                    watch: {
                        visible(val: any): void;
                    };
                    methods: {
                        handleClick(): boolean;
                        handleRightClick(): boolean;
                        handleMouseenter(): boolean;
                        handleMouseleave(): boolean;
                        onClickoutside(e: any): void;
                        handleClose(): boolean;
                        handleRightClose(): boolean;
                        hasParent(): any;
                        handleHaschildClick(): void;
                        handleItemClick(key: any): void;
                        handleHoverClick(): void;
                    };
                };
                DropdownMenu: {
                    name: string;
                };
            };
            provide(): any;
            props: {
                modelValue: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                type: {
                    validator(value: any): boolean;
                    default: string;
                };
                size: {
                    validator(value: any): boolean;
                    default: string;
                };
                animated: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                captureFocus: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                closable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                beforeRemove: FunctionConstructor;
                name: {
                    type: StringConstructor;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoCloseContextmenu: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                prefixCls: string;
                navList: any[];
                barWidth: number;
                barOffset: number;
                activeKey: any;
                focusedKey: any;
                showSlot: boolean;
                navStyle: {
                    transform: string;
                };
                scrollable: boolean;
                transitioning: boolean;
                contextMenuVisible: boolean;
                contextMenuStyles: {
                    top: number;
                    left: number;
                };
                paneList: any[];
                tableList: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: boolean;
                })[];
                contentClasses(): (string | {
                    [x: string]: any;
                })[];
                barClasses(): (string | {
                    [x: string]: any;
                })[];
                contentStyle(): {};
                barStyle(): {
                    visibility: string;
                    width: string;
                };
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
            };
            methods: {
                getTabs(): any[];
                updateNav(): void;
                updateBar(): void;
                updateStatus(): void;
                tabCls(item: any): (string | {
                    [x: string]: any;
                })[];
                handleChange(index: any): void;
                handleDblclick(index: any): void;
                handleContextmenu(index: any, event: any): void;
                handleClickContextMenuOutside(): void;
                handlePreventSelect(index: any, event: any): void;
                handleTabKeyNavigation(e: any): void;
                handleTabKeyboardSelect(init?: boolean): void;
                handleRemove(index: any): void;
                handleRemoveTab(index: any): void;
                showClose(item: any): any;
                scrollPrev(): void;
                scrollNext(): void;
                getCurrentScrollOffset(): number;
                getTabIndex(name: any): any;
                setOffset(value: any): void;
                scrollToActiveTab(): void;
                updateNavScroll(): void;
                handleScroll(e: any): void;
                handleResize(): void;
                isInsideHiddenElement(): any;
                updateVisibility(index: any): void;
                handleDrag(index: any, event: any): void;
                handleDrop(index: any, event: any): void;
                closeContextMenu(): void;
                handleClickDropdownItem(): void;
            };
            watch: {
                modelValue(val: any): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    namespace props {
        export namespace modelValue {
            const type: (StringConstructor | NumberConstructor)[];
        }
        export namespace type_1 {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        export { type_1 as type };
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        export namespace animated {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace captureFocus {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace closable {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export const beforeRemove: FunctionConstructor;
        export namespace name_1 {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        export { name_1 as name };
        export namespace draggable {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace autoCloseContextmenu {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
    }
    function data(): {
        prefixCls: string;
        navList: any[];
        barWidth: number;
        barOffset: number;
        activeKey: any;
        focusedKey: any;
        showSlot: boolean;
        navStyle: {
            transform: string;
        };
        scrollable: boolean;
        transitioning: boolean;
        contextMenuVisible: boolean;
        contextMenuStyles: {
            top: number;
            left: number;
        };
        paneList: any[];
        tableList: any[];
    };
    function data(): {
        prefixCls: string;
        navList: any[];
        barWidth: number;
        barOffset: number;
        activeKey: any;
        focusedKey: any;
        showSlot: boolean;
        navStyle: {
            transform: string;
        };
        scrollable: boolean;
        transitioning: boolean;
        contextMenuVisible: boolean;
        contextMenuStyles: {
            top: number;
            left: number;
        };
        paneList: any[];
        tableList: any[];
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function contentClasses(): (string | {
            [x: string]: any;
        })[];
        function contentClasses(): (string | {
            [x: string]: any;
        })[];
        function barClasses(): (string | {
            [x: string]: any;
        })[];
        function barClasses(): (string | {
            [x: string]: any;
        })[];
        function contentStyle(): {};
        function contentStyle(): {};
        function barStyle(): {
            visibility: string;
            width: string;
        };
        function barStyle(): {
            visibility: string;
            width: string;
        };
        function arrowType(): string;
        function arrowType(): string;
        function customArrowType(): string;
        function customArrowType(): string;
        function arrowSize(): string;
        function arrowSize(): string;
    }
    namespace methods {
        function getTabs(): any[];
        function getTabs(): any[];
        function updateNav(): void;
        function updateNav(): void;
        function updateBar(): void;
        function updateBar(): void;
        function updateStatus(): void;
        function updateStatus(): void;
        function tabCls(item: any): (string | {
            [x: string]: any;
        })[];
        function tabCls(item: any): (string | {
            [x: string]: any;
        })[];
        function handleChange(index: any): void;
        function handleChange(index: any): void;
        function handleDblclick(index: any): void;
        function handleDblclick(index: any): void;
        function handleContextmenu(index: any, event: any): void;
        function handleContextmenu(index: any, event: any): void;
        function handleClickContextMenuOutside(): void;
        function handleClickContextMenuOutside(): void;
        function handlePreventSelect(index: any, event: any): void;
        function handlePreventSelect(index: any, event: any): void;
        function handleTabKeyNavigation(e: any): void;
        function handleTabKeyNavigation(e: any): void;
        function handleTabKeyboardSelect(init?: boolean): void;
        function handleTabKeyboardSelect(init?: boolean): void;
        function handleRemove(index: any): void;
        function handleRemove(index: any): void;
        function handleRemoveTab(index: any): void;
        function handleRemoveTab(index: any): void;
        function showClose(item: any): any;
        function showClose(item: any): any;
        function scrollPrev(): void;
        function scrollPrev(): void;
        function scrollNext(): void;
        function scrollNext(): void;
        function getCurrentScrollOffset(): number;
        function getCurrentScrollOffset(): number;
        function getTabIndex(name: any): any;
        function getTabIndex(name: any): any;
        function setOffset(value: any): void;
        function setOffset(value: any): void;
        function scrollToActiveTab(): void;
        function scrollToActiveTab(): void;
        function updateNavScroll(): void;
        function updateNavScroll(): void;
        function handleScroll(e: any): void;
        function handleScroll(e: any): void;
        function handleResize(): void;
        function handleResize(): void;
        function isInsideHiddenElement(): any;
        function isInsideHiddenElement(): any;
        function updateVisibility(index: any): void;
        function updateVisibility(index: any): void;
        function handleDrag(index: any, event: any): void;
        function handleDrag(index: any, event: any): void;
        function handleDrop(index: any, event: any): void;
        function handleDrop(index: any, event: any): void;
        function closeContextMenu(): void;
        function closeContextMenu(): void;
        function handleClickDropdownItem(): void;
        function handleClickDropdownItem(): void;
    }
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        const activeKey: any;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import Icon from "../icon/icon.vue";
import Render from "../base/render";
import Dropdown from "../dropdown/dropdown.vue";
import DropdownMenu from "../dropdown/dropdown-menu.vue";
