declare namespace _default {
    const name: string;
    namespace components {
        export { Dropdown };
        export { DropdownMenu };
        export { Badge };
        export { Tabs };
    }
    const emits: string[];
    function provide(): {
        NotificationInstance: {
            name: string;
            components: {
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
                Badge: {
                    name: string;
                    props: {
                        count: NumberConstructor;
                        dot: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        overflowCount: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: number;
                        };
                        className: StringConstructor;
                        showZero: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        text: {
                            type: StringConstructor;
                            default: string;
                        };
                        status: {
                            validator(value: any): boolean;
                        };
                        type: {
                            validator(value: any): boolean;
                        };
                        offset: {
                            type: ArrayConstructor;
                        };
                        color: {
                            type: StringConstructor;
                        };
                    };
                    computed: {
                        classes(): string;
                        dotClasses(): string;
                        countClasses(): (string | {
                            [x: string]: boolean | (() => boolean);
                        })[];
                        customCountClasses(): (string | {
                            [x: string]: boolean;
                        })[];
                        statusClasses(): (string | {
                            [x: string]: boolean;
                        })[];
                        statusStyles(): {
                            backgroundColor?: undefined;
                        } | {
                            backgroundColor: any;
                        };
                        styles(): {
                            'margin-top': string;
                            'margin-right': string;
                        };
                        finalCount(): any;
                        badge(): any;
                        hasCount(): boolean;
                        alone(): boolean;
                    };
                };
                Tabs: {
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
                    provide(): {
                        TabsInstance: any;
                    };
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
            emits: string[];
            provide(): any;
            props: {
                count: {
                    type: NumberConstructor;
                };
                autoCount: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                countType: {
                    validator(value: any): boolean;
                    default: string;
                };
                icon: {
                    type: StringConstructor;
                    default: string;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                placement: {
                    validator(value: any): boolean;
                    default: string;
                };
                badgeProps: {
                    type: ObjectConstructor;
                    default(): {};
                };
                clearClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                locale: {
                    type: ObjectConstructor;
                    default(): {
                        loadedAll: string;
                        loading: string;
                        loadMore: string;
                        clear: string;
                    };
                };
                tab: {
                    type: StringConstructor;
                };
                wide: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                transferClassName: {
                    type: StringConstructor;
                };
            };
            data(): {
                visible: boolean;
                countAll: number;
                tabList: any[];
            };
            computed: {
                finalCount(): any;
                transferClasses(): string;
            };
            watch: {
                visible(val: any): void;
            };
            methods: {
                handleVisibleChange(visible: any): void;
                handleClickOutside(e: any): void;
                handleToggleOpen(): void;
                handleGetCountAll(): void;
                handleItemClick(tab: any, item: any): void;
                handleClear(tab: any): void;
                handleLoadMore(tab: any): void;
                handleClose(): void;
                handleTabChange(name: any): void;
            };
        };
    };
    function provide(): {
        NotificationInstance: {
            name: string;
            components: {
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
                Badge: {
                    name: string;
                    props: {
                        count: NumberConstructor;
                        dot: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        overflowCount: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: number;
                        };
                        className: StringConstructor;
                        showZero: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        text: {
                            type: StringConstructor;
                            default: string;
                        };
                        status: {
                            validator(value: any): boolean;
                        };
                        type: {
                            validator(value: any): boolean;
                        };
                        offset: {
                            type: ArrayConstructor;
                        };
                        color: {
                            type: StringConstructor;
                        };
                    };
                    computed: {
                        classes(): string;
                        dotClasses(): string;
                        countClasses(): (string | {
                            [x: string]: boolean | (() => boolean);
                        })[];
                        customCountClasses(): (string | {
                            [x: string]: boolean;
                        })[];
                        statusClasses(): (string | {
                            [x: string]: boolean;
                        })[];
                        statusStyles(): {
                            backgroundColor?: undefined;
                        } | {
                            backgroundColor: any;
                        };
                        styles(): {
                            'margin-top': string;
                            'margin-right': string;
                        };
                        finalCount(): any;
                        badge(): any;
                        hasCount(): boolean;
                        alone(): boolean;
                    };
                };
                Tabs: {
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
                    provide(): {
                        TabsInstance: any;
                    };
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
            emits: string[];
            provide(): any;
            props: {
                count: {
                    type: NumberConstructor;
                };
                autoCount: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                countType: {
                    validator(value: any): boolean;
                    default: string;
                };
                icon: {
                    type: StringConstructor;
                    default: string;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                placement: {
                    validator(value: any): boolean;
                    default: string;
                };
                badgeProps: {
                    type: ObjectConstructor;
                    default(): {};
                };
                clearClose: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                locale: {
                    type: ObjectConstructor;
                    default(): {
                        loadedAll: string;
                        loading: string;
                        loadMore: string;
                        clear: string;
                    };
                };
                tab: {
                    type: StringConstructor;
                };
                wide: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                transferClassName: {
                    type: StringConstructor;
                };
            };
            data(): {
                visible: boolean;
                countAll: number;
                tabList: any[];
            };
            computed: {
                finalCount(): any;
                transferClasses(): string;
            };
            watch: {
                visible(val: any): void;
            };
            methods: {
                handleVisibleChange(visible: any): void;
                handleClickOutside(e: any): void;
                handleToggleOpen(): void;
                handleGetCountAll(): void;
                handleItemClick(tab: any, item: any): void;
                handleClear(tab: any): void;
                handleLoadMore(tab: any): void;
                handleClose(): void;
                handleTabChange(name: any): void;
            };
        };
    };
    namespace props {
        namespace count {
            const type: NumberConstructor;
        }
        namespace autoCount {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
        namespace countType {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace icon {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace transfer {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_3: string;
            export { _default_3 as default };
        }
        namespace badgeProps {
            const type_4: ObjectConstructor;
            export { type_4 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        namespace clearClose {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace locale {
            const type_6: ObjectConstructor;
            export { type_6 as type };
            function _default(): {
                loadedAll: string;
                loading: string;
                loadMore: string;
                clear: string;
            };
            function _default(): {
                loadedAll: string;
                loading: string;
                loadMore: string;
                clear: string;
            };
            export { _default as default };
        }
        namespace tab {
            const type_7: StringConstructor;
            export { type_7 as type };
        }
        namespace wide {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace transferClassName {
            const type_9: StringConstructor;
            export { type_9 as type };
        }
    }
    function data(): {
        visible: boolean;
        countAll: number;
        tabList: any[];
    };
    function data(): {
        visible: boolean;
        countAll: number;
        tabList: any[];
    };
    namespace computed {
        function finalCount(): any;
        function finalCount(): any;
        function transferClasses(): string;
        function transferClasses(): string;
    }
    namespace watch {
        function visible(val: any): void;
        function visible(val: any): void;
    }
    namespace methods {
        function handleVisibleChange(visible: any): void;
        function handleVisibleChange(visible: any): void;
        function handleClickOutside(e: any): void;
        function handleClickOutside(e: any): void;
        function handleToggleOpen(): void;
        function handleToggleOpen(): void;
        function handleGetCountAll(): void;
        function handleGetCountAll(): void;
        function handleItemClick(tab: any, item: any): void;
        function handleItemClick(tab: any, item: any): void;
        function handleClear(tab: any): void;
        function handleClear(tab: any): void;
        function handleLoadMore(tab: any): void;
        function handleLoadMore(tab: any): void;
        function handleClose(): void;
        function handleClose(): void;
        function handleTabChange(name: any): void;
        function handleTabChange(name: any): void;
    }
}
export default _default;
import Dropdown from "../dropdown/dropdown.vue";
import DropdownMenu from "../dropdown/dropdown-menu.vue";
import Badge from "../badge/badge.vue";
import Tabs from "../tabs/tabs.vue";
