declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            t(...args: any[]): any;
        };
    }[];
    namespace components {
        export { TreeNode };
        export { Dropdown };
        export { DropdownMenu };
    }
    const emits: string[];
    function provide(): {
        TreeInstance: {
            name: string;
            mixins: {
                methods: {
                    t(...args: any[]): any;
                };
            }[];
            components: {
                TreeNode: {
                    name: string;
                    inject: string[];
                    components: {
                        Checkbox: {
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
                            inject: {
                                CheckboxGroupInstance: {
                                    default: any;
                                };
                            };
                            props: {
                                disabled: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                                modelValue: {
                                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                                    default: boolean;
                                };
                                trueValue: {
                                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                                    default: boolean;
                                };
                                falseValue: {
                                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                                    default: boolean;
                                };
                                label: {
                                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                                };
                                indeterminate: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                                size: {
                                    validator(value: any): boolean;
                                    default(): any;
                                };
                                name: {
                                    type: StringConstructor;
                                };
                                border: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                            };
                            data(): {
                                showSlot: boolean;
                                focusInner: boolean;
                                model: any[];
                            };
                            computed: {
                                wrapClasses(): (string | {
                                    [x: string]: any;
                                })[];
                                checkboxClasses(): (string | {
                                    [x: string]: any;
                                })[];
                                innerClasses(): (string | {
                                    [x: string]: any;
                                })[];
                                inputClasses(): string;
                                currentValue(): boolean;
                                group(): boolean;
                            };
                            mounted(): void;
                            methods: {
                                change(event: any): boolean;
                                onBlur(): void;
                                onFocus(): void;
                            };
                            watch: {
                                modelValue(val: any): void;
                                'CheckboxGroupInstance.modelValue': {
                                    handler(val: any): void;
                                    immediate: boolean;
                                };
                            };
                        };
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
                        Render: {
                            name: string;
                            props: {
                                render: FunctionConstructor;
                                data: ObjectConstructor;
                                node: ArrayConstructor;
                            };
                            render(): any;
                        };
                    };
                    props: {
                        data: {
                            type: ObjectConstructor;
                            default: () => void;
                        };
                        multiple: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        childrenKey: {
                            type: StringConstructor;
                            default: string;
                        };
                        showCheckbox: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        appear: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        prefixCls: string;
                        appearByClickArrow: boolean;
                        globalConfig: {};
                    };
                    computed: {
                        classes(): string[];
                        selectedCls(): {
                            [x: string]: any;
                        }[];
                        arrowClasses(): (string | {
                            [x: string]: any;
                        })[];
                        titleClasses(): (string | {
                            [x: string]: any;
                        })[];
                        showArrow(): any;
                        showLoading(): any;
                        isParentRender(): any;
                        parentRender(): any;
                        node(): any[];
                        children(): any;
                        arrowType(): string;
                        customArrowType(): string;
                        arrowSize(): string;
                    };
                    methods: {
                        handleExpand(): void;
                        handleClickNode(): void;
                        handleSelect(): void;
                        handleCheck(): void;
                        handleContextmenu(data: any, event: any): void;
                        handlePreventSelect(data: any, event: any): void;
                    };
                    created(): void;
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
            emits: string[];
            provide(): any;
            props: {
                data: {
                    type: ArrayConstructor;
                    default: () => any[];
                };
                multiple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showCheckbox: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                checkStrictly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                checkDirectly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                emptyText: {
                    type: StringConstructor;
                };
                childrenKey: {
                    type: StringConstructor;
                    default: string;
                };
                loadData: {
                    type: FunctionConstructor;
                };
                render: {
                    type: FunctionConstructor;
                };
                selectNode: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                expandNode: {
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
                stateTree: () => any;
                flatState: any[];
                contextMenuVisible: boolean;
                contextMenuStyles: {
                    top: number;
                    left: number;
                };
            };
            watch: {
                data: {
                    deep: boolean;
                    handler(): void;
                };
            };
            computed: {
                localeEmptyText(): any;
            };
            methods: {
                compileFlatState(): any[];
                updateTreeUp(nodeKey: any): void;
                rebuildTree(): void;
                getSelectedNodes(): any;
                getCheckedNodes(): any;
                getCheckedAndIndeterminateNodes(): any;
                updateTreeDown(node: any, changes?: {}): void;
                handleSelect(nodeKey: any): void;
                handleCheck({ checked, nodeKey }: {
                    checked: any;
                    nodeKey: any;
                }): void;
                handleContextmenu({ data, event }: {
                    data: any;
                    event: any;
                }): void;
                handleClickContextMenuOutside(): void;
                handleOnCheck(param: any): void;
                handleOnSelected(param: any): void;
                handleToggleExpand(node: any): void;
                handleOnContextmenu(param: any): void;
                closeContextMenu(): void;
                handleClickDropdownItem(): void;
            };
            created(): void;
        };
    };
    function provide(): {
        TreeInstance: {
            name: string;
            mixins: {
                methods: {
                    t(...args: any[]): any;
                };
            }[];
            components: {
                TreeNode: {
                    name: string;
                    inject: string[];
                    components: {
                        Checkbox: {
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
                            inject: {
                                CheckboxGroupInstance: {
                                    default: any;
                                };
                            };
                            props: {
                                disabled: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                                modelValue: {
                                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                                    default: boolean;
                                };
                                trueValue: {
                                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                                    default: boolean;
                                };
                                falseValue: {
                                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                                    default: boolean;
                                };
                                label: {
                                    type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                                };
                                indeterminate: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                                size: {
                                    validator(value: any): boolean;
                                    default(): any;
                                };
                                name: {
                                    type: StringConstructor;
                                };
                                border: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                            };
                            data(): {
                                showSlot: boolean;
                                focusInner: boolean;
                                model: any[];
                            };
                            computed: {
                                wrapClasses(): (string | {
                                    [x: string]: any;
                                })[];
                                checkboxClasses(): (string | {
                                    [x: string]: any;
                                })[];
                                innerClasses(): (string | {
                                    [x: string]: any;
                                })[];
                                inputClasses(): string;
                                currentValue(): boolean;
                                group(): boolean;
                            };
                            mounted(): void;
                            methods: {
                                change(event: any): boolean;
                                onBlur(): void;
                                onFocus(): void;
                            };
                            watch: {
                                modelValue(val: any): void;
                                'CheckboxGroupInstance.modelValue': {
                                    handler(val: any): void;
                                    immediate: boolean;
                                };
                            };
                        };
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
                        Render: {
                            name: string;
                            props: {
                                render: FunctionConstructor;
                                data: ObjectConstructor;
                                node: ArrayConstructor;
                            };
                            render(): any;
                        };
                    };
                    props: {
                        data: {
                            type: ObjectConstructor;
                            default: () => void;
                        };
                        multiple: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        childrenKey: {
                            type: StringConstructor;
                            default: string;
                        };
                        showCheckbox: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        appear: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        prefixCls: string;
                        appearByClickArrow: boolean;
                        globalConfig: {};
                    };
                    computed: {
                        classes(): string[];
                        selectedCls(): {
                            [x: string]: any;
                        }[];
                        arrowClasses(): (string | {
                            [x: string]: any;
                        })[];
                        titleClasses(): (string | {
                            [x: string]: any;
                        })[];
                        showArrow(): any;
                        showLoading(): any;
                        isParentRender(): any;
                        parentRender(): any;
                        node(): any[];
                        children(): any;
                        arrowType(): string;
                        customArrowType(): string;
                        arrowSize(): string;
                    };
                    methods: {
                        handleExpand(): void;
                        handleClickNode(): void;
                        handleSelect(): void;
                        handleCheck(): void;
                        handleContextmenu(data: any, event: any): void;
                        handlePreventSelect(data: any, event: any): void;
                    };
                    created(): void;
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
            emits: string[];
            provide(): any;
            props: {
                data: {
                    type: ArrayConstructor;
                    default: () => any[];
                };
                multiple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showCheckbox: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                checkStrictly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                checkDirectly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                emptyText: {
                    type: StringConstructor;
                };
                childrenKey: {
                    type: StringConstructor;
                    default: string;
                };
                loadData: {
                    type: FunctionConstructor;
                };
                render: {
                    type: FunctionConstructor;
                };
                selectNode: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                expandNode: {
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
                stateTree: () => any;
                flatState: any[];
                contextMenuVisible: boolean;
                contextMenuStyles: {
                    top: number;
                    left: number;
                };
            };
            watch: {
                data: {
                    deep: boolean;
                    handler(): void;
                };
            };
            computed: {
                localeEmptyText(): any;
            };
            methods: {
                compileFlatState(): any[];
                updateTreeUp(nodeKey: any): void;
                rebuildTree(): void;
                getSelectedNodes(): any;
                getCheckedNodes(): any;
                getCheckedAndIndeterminateNodes(): any;
                updateTreeDown(node: any, changes?: {}): void;
                handleSelect(nodeKey: any): void;
                handleCheck({ checked, nodeKey }: {
                    checked: any;
                    nodeKey: any;
                }): void;
                handleContextmenu({ data, event }: {
                    data: any;
                    event: any;
                }): void;
                handleClickContextMenuOutside(): void;
                handleOnCheck(param: any): void;
                handleOnSelected(param: any): void;
                handleToggleExpand(node: any): void;
                handleOnContextmenu(param: any): void;
                closeContextMenu(): void;
                handleClickDropdownItem(): void;
            };
            created(): void;
        };
    };
    namespace props {
        namespace data {
            export const type: ArrayConstructor;
            function _default(): any[];
            export { _default as default };
        }
        namespace multiple {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace showCheckbox {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace checkStrictly {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace checkDirectly {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace emptyText {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        namespace childrenKey {
            const type_6: StringConstructor;
            export { type_6 as type };
            const _default_5: string;
            export { _default_5 as default };
        }
        namespace loadData {
            const type_7: FunctionConstructor;
            export { type_7 as type };
        }
        namespace render {
            const type_8: FunctionConstructor;
            export { type_8 as type };
        }
        namespace selectNode {
            const type_9: BooleanConstructor;
            export { type_9 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        namespace expandNode {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        namespace autoCloseContextmenu {
            const type_11: BooleanConstructor;
            export { type_11 as type };
            const _default_8: boolean;
            export { _default_8 as default };
        }
    }
    function data(): {
        prefixCls: string;
        stateTree: () => any;
        flatState: any[];
        contextMenuVisible: boolean;
        contextMenuStyles: {
            top: number;
            left: number;
        };
    };
    function data(): {
        prefixCls: string;
        stateTree: () => any;
        flatState: any[];
        contextMenuVisible: boolean;
        contextMenuStyles: {
            top: number;
            left: number;
        };
    };
    namespace watch {
        export namespace data_1 {
            const deep: boolean;
            function handler(): void;
            function handler(): void;
        }
        export { data_1 as data };
    }
    namespace computed {
        function localeEmptyText(): any;
        function localeEmptyText(): any;
    }
    namespace methods {
        function compileFlatState(): any[];
        function compileFlatState(): any[];
        function updateTreeUp(nodeKey: any): void;
        function updateTreeUp(nodeKey: any): void;
        function rebuildTree(): void;
        function rebuildTree(): void;
        function getSelectedNodes(): any;
        function getSelectedNodes(): any;
        function getCheckedNodes(): any;
        function getCheckedNodes(): any;
        function getCheckedAndIndeterminateNodes(): any;
        function getCheckedAndIndeterminateNodes(): any;
        function updateTreeDown(node: any, changes?: {}): void;
        function updateTreeDown(node: any, changes?: {}): void;
        function handleSelect(nodeKey: any): void;
        function handleSelect(nodeKey: any): void;
        function handleCheck({ checked, nodeKey }: {
            checked: any;
            nodeKey: any;
        }): void;
        function handleCheck({ checked, nodeKey }: {
            checked: any;
            nodeKey: any;
        }): void;
        function handleContextmenu({ data, event }: {
            data: any;
            event: any;
        }): void;
        function handleContextmenu({ data, event }: {
            data: any;
            event: any;
        }): void;
        function handleClickContextMenuOutside(): void;
        function handleClickContextMenuOutside(): void;
        function handleOnCheck(param: any): void;
        function handleOnCheck(param: any): void;
        function handleOnSelected(param: any): void;
        function handleOnSelected(param: any): void;
        function handleToggleExpand(node: any): void;
        function handleToggleExpand(node: any): void;
        function handleOnContextmenu(param: any): void;
        function handleOnContextmenu(param: any): void;
        function closeContextMenu(): void;
        function closeContextMenu(): void;
        function handleClickDropdownItem(): void;
        function handleClickDropdownItem(): void;
    }
    function created(): void;
    function created(): void;
}
export default _default;
import TreeNode from "./node.vue";
import Dropdown from "../dropdown/dropdown.vue";
import DropdownMenu from "../dropdown/dropdown-menu.vue";
