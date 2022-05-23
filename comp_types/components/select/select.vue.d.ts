declare namespace _default {
    const name: string;
    const mixins: ({
        methods: {
            t(...args: any[]): any;
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
    namespace components {
        export { Drop };
        export { SelectHead };
        export { Icon };
    }
    namespace directives {
        export { clickOutside };
    }
    const emits: string[];
    function provide(): {
        SelectInstance: {
            name: string;
            mixins: ({
                methods: {
                    t(...args: any[]): any;
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
                SelectHead: {
                    name: string;
                    mixins: ({
                        data(): {
                            globalConfig: {};
                        };
                        created(): void;
                    } | {
                        methods: {
                            t(...args: any[]): any;
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
                    inject: string[];
                    props: {
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        filterable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        multiple: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        remote: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        initialLabel: {
                            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                        };
                        values: {
                            type: ArrayConstructor;
                            default: () => any[];
                        };
                        clearable: {
                            type: (FunctionConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        inputElementId: {
                            type: StringConstructor;
                        };
                        placeholder: {
                            type: StringConstructor;
                        };
                        queryProp: {
                            type: StringConstructor;
                            default: string;
                        };
                        prefix: {
                            type: StringConstructor;
                        };
                        maxTagCount: {
                            type: NumberConstructor;
                        };
                        maxTagPlaceholder: {
                            type: FunctionConstructor;
                        };
                        allowCreate: {
                            type: BooleanConstructor;
                        };
                        showCreateItem: {
                            type: BooleanConstructor;
                        };
                    };
                    data(): {
                        prefixCls: string;
                        query: string;
                        inputLength: number;
                        remoteInitialLabel: any;
                        preventRemoteCall: boolean;
                    };
                    computed: {
                        singleDisplayClasses(): {
                            [x: string]: boolean | (() => any);
                        }[];
                        singleDisplayValue(): string | (() => any);
                        showPlaceholder(): boolean;
                        resetSelect(): any;
                        inputStyle(): {
                            width: string;
                        };
                        localePlaceholder(): any;
                        selectedSingle(): any;
                        selectedMultiple(): any;
                        headCls(): {
                            [x: string]: () => any;
                        };
                        arrowType(): string;
                        customArrowType(): string;
                        showPrefix(): any;
                        arrowSize(): string;
                    };
                    methods: {
                        onInputFocus(): void;
                        onInputBlur(): void;
                        removeTag(value: any): boolean;
                        resetInputState(): void;
                        handleInputDelete(e: any): void;
                        handleInputEnter(e: any): void;
                        onHeaderClick(e: any): void;
                        onClear(): void;
                    };
                    watch: {
                        values([value]: [any]): void;
                        queryProp(query: any): void;
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
            };
            directives: {
                clickOutside: {};
            };
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                    default: string;
                };
                label: {
                    type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                    default: string;
                };
                defaultLabel: {
                    type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                    default: string;
                };
                multiple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: {
                    type: StringConstructor;
                };
                filterable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                filterMethod: {
                    type: FunctionConstructor;
                };
                remoteMethod: {
                    type: FunctionConstructor;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loadingText: {
                    type: StringConstructor;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                labelInValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                notFoundText: {
                    type: StringConstructor;
                };
                placement: {
                    validator(value: any): boolean;
                    default: string;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                autoComplete: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                name: {
                    type: StringConstructor;
                };
                elementId: {
                    type: StringConstructor;
                };
                transferClassName: {
                    type: StringConstructor;
                };
                prefix: {
                    type: StringConstructor;
                };
                maxTagCount: {
                    type: NumberConstructor;
                };
                maxTagPlaceholder: {
                    type: FunctionConstructor;
                };
                allowCreate: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                capture: {
                    type: BooleanConstructor;
                    default(): any;
                };
                filterByLabel: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                eventsEnabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideNotFound: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            mounted(): void;
            data(): {
                prefixCls: string;
                values: any[];
                dropDownWidth: number;
                visible: boolean;
                focusIndex: number;
                isFocused: boolean;
                query: string;
                initialLabel: any;
                hasMouseHoverHead: boolean;
                slotOptions: any[];
                caretPosition: number;
                lastRemoteQuery: string;
                unchangedQuery: boolean;
                hasExpectedValue: boolean;
                isTyping: boolean;
                preventRemoteCall: boolean;
                filterQueryChange: boolean;
                slotOptionsMap: Map<any, any>;
                isLocking: boolean;
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                dropdownCls(): {
                    [x: string]: any;
                    [x: number]: any;
                    "ivu-auto-complete": any;
                };
                selectionCls(): {
                    [x: string]: any;
                };
                localeNotFoundText(): any;
                localeLoadingText(): any;
                showCreateItem(): boolean;
                transitionName(): "slide-up" | "slide-down";
                dropVisible(): boolean;
                showNotFoundLabel(): boolean;
                publicValue(): any;
                canBeCleared(): any;
                selectTabindex(): -1 | 0;
                remote(): boolean;
            };
            methods: {
                setQuery(query: any): void;
                clearSingleSelect(): void;
                getOptionData(value: any): {
                    value: any;
                    label: any;
                    disabled: any;
                };
                getInitialValue(): any[];
                validateOption({ children, elm, propsData }: {
                    children: any;
                    elm: any;
                    propsData: any;
                }): boolean;
                toggleMenu(e: any, force: any): boolean;
                hideMenu(): void;
                onClickOutside(event: any): void;
                reset(): void;
                handleKeydown(e: any): void;
                navigateOptions(direction: any): void;
                onOptionClick(option: any): void;
                onQueryChange(query: any): void;
                toggleHeaderFocus({ type }: {
                    type: any;
                }): void;
                checkUpdateStatus(): void;
                handleCreateItem(): void;
                handleOnSelectSelected(options: any): void;
                focus(): void;
                lazyUpdateValue(): void;
            };
            watch: {
                modelValue(value: any): void;
                isFocused(focused: any): void;
                dropVisible(open: any): void;
                visible(state: any): void;
            };
        };
    };
    function provide(): {
        SelectInstance: {
            name: string;
            mixins: ({
                methods: {
                    t(...args: any[]): any;
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
                SelectHead: {
                    name: string;
                    mixins: ({
                        data(): {
                            globalConfig: {};
                        };
                        created(): void;
                    } | {
                        methods: {
                            t(...args: any[]): any;
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
                    inject: string[];
                    props: {
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        filterable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        multiple: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        remote: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        initialLabel: {
                            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                        };
                        values: {
                            type: ArrayConstructor;
                            default: () => any[];
                        };
                        clearable: {
                            type: (FunctionConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        inputElementId: {
                            type: StringConstructor;
                        };
                        placeholder: {
                            type: StringConstructor;
                        };
                        queryProp: {
                            type: StringConstructor;
                            default: string;
                        };
                        prefix: {
                            type: StringConstructor;
                        };
                        maxTagCount: {
                            type: NumberConstructor;
                        };
                        maxTagPlaceholder: {
                            type: FunctionConstructor;
                        };
                        allowCreate: {
                            type: BooleanConstructor;
                        };
                        showCreateItem: {
                            type: BooleanConstructor;
                        };
                    };
                    data(): {
                        prefixCls: string;
                        query: string;
                        inputLength: number;
                        remoteInitialLabel: any;
                        preventRemoteCall: boolean;
                    };
                    computed: {
                        singleDisplayClasses(): {
                            [x: string]: boolean | (() => any);
                        }[];
                        singleDisplayValue(): string | (() => any);
                        showPlaceholder(): boolean;
                        resetSelect(): any;
                        inputStyle(): {
                            width: string;
                        };
                        localePlaceholder(): any;
                        selectedSingle(): any;
                        selectedMultiple(): any;
                        headCls(): {
                            [x: string]: () => any;
                        };
                        arrowType(): string;
                        customArrowType(): string;
                        showPrefix(): any;
                        arrowSize(): string;
                    };
                    methods: {
                        onInputFocus(): void;
                        onInputBlur(): void;
                        removeTag(value: any): boolean;
                        resetInputState(): void;
                        handleInputDelete(e: any): void;
                        handleInputEnter(e: any): void;
                        onHeaderClick(e: any): void;
                        onClear(): void;
                    };
                    watch: {
                        values([value]: [any]): void;
                        queryProp(query: any): void;
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
            };
            directives: {
                clickOutside: {};
            };
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                    default: string;
                };
                label: {
                    type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                    default: string;
                };
                defaultLabel: {
                    type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
                    default: string;
                };
                multiple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placeholder: {
                    type: StringConstructor;
                };
                filterable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                filterMethod: {
                    type: FunctionConstructor;
                };
                remoteMethod: {
                    type: FunctionConstructor;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loadingText: {
                    type: StringConstructor;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                labelInValue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                notFoundText: {
                    type: StringConstructor;
                };
                placement: {
                    validator(value: any): boolean;
                    default: string;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                autoComplete: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                name: {
                    type: StringConstructor;
                };
                elementId: {
                    type: StringConstructor;
                };
                transferClassName: {
                    type: StringConstructor;
                };
                prefix: {
                    type: StringConstructor;
                };
                maxTagCount: {
                    type: NumberConstructor;
                };
                maxTagPlaceholder: {
                    type: FunctionConstructor;
                };
                allowCreate: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                capture: {
                    type: BooleanConstructor;
                    default(): any;
                };
                filterByLabel: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                eventsEnabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideNotFound: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            mounted(): void;
            data(): {
                prefixCls: string;
                values: any[];
                dropDownWidth: number;
                visible: boolean;
                focusIndex: number;
                isFocused: boolean;
                query: string;
                initialLabel: any;
                hasMouseHoverHead: boolean;
                slotOptions: any[];
                caretPosition: number;
                lastRemoteQuery: string;
                unchangedQuery: boolean;
                hasExpectedValue: boolean;
                isTyping: boolean;
                preventRemoteCall: boolean;
                filterQueryChange: boolean;
                slotOptionsMap: Map<any, any>;
                isLocking: boolean;
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                dropdownCls(): {
                    [x: string]: any;
                    [x: number]: any;
                    "ivu-auto-complete": any;
                };
                selectionCls(): {
                    [x: string]: any;
                };
                localeNotFoundText(): any;
                localeLoadingText(): any;
                showCreateItem(): boolean;
                transitionName(): "slide-up" | "slide-down";
                dropVisible(): boolean;
                showNotFoundLabel(): boolean;
                publicValue(): any;
                canBeCleared(): any;
                selectTabindex(): -1 | 0;
                remote(): boolean;
            };
            methods: {
                setQuery(query: any): void;
                clearSingleSelect(): void;
                getOptionData(value: any): {
                    value: any;
                    label: any;
                    disabled: any;
                };
                getInitialValue(): any[];
                validateOption({ children, elm, propsData }: {
                    children: any;
                    elm: any;
                    propsData: any;
                }): boolean;
                toggleMenu(e: any, force: any): boolean;
                hideMenu(): void;
                onClickOutside(event: any): void;
                reset(): void;
                handleKeydown(e: any): void;
                navigateOptions(direction: any): void;
                onOptionClick(option: any): void;
                onQueryChange(query: any): void;
                toggleHeaderFocus({ type }: {
                    type: any;
                }): void;
                checkUpdateStatus(): void;
                handleCreateItem(): void;
                handleOnSelectSelected(options: any): void;
                focus(): void;
                lazyUpdateValue(): void;
            };
            watch: {
                modelValue(value: any): void;
                isFocused(focused: any): void;
                dropVisible(open: any): void;
                visible(state: any): void;
            };
        };
    };
    namespace props {
        export namespace modelValue {
            export const type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            const _default: string;
            export { _default as default };
        }
        export namespace label {
            const type_1: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        export namespace defaultLabel {
            const type_2: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        export namespace multiple {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace disabled {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace clearable {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace placeholder {
            const type_6: StringConstructor;
            export { type_6 as type };
        }
        export namespace filterable {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        export namespace filterMethod {
            const type_8: FunctionConstructor;
            export { type_8 as type };
        }
        export namespace remoteMethod {
            const type_9: FunctionConstructor;
            export { type_9 as type };
        }
        export namespace loading {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        export namespace loadingText {
            const type_11: StringConstructor;
            export { type_11 as type };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace labelInValue {
            const type_12: BooleanConstructor;
            export { type_12 as type };
            const _default_8: boolean;
            export { _default_8 as default };
        }
        export namespace notFoundText {
            const type_13: StringConstructor;
            export { type_13 as type };
        }
        export namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_9: string;
            export { _default_9 as default };
        }
        export namespace transfer {
            const type_14: BooleanConstructor;
            export { type_14 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace autoComplete {
            const type_15: BooleanConstructor;
            export { type_15 as type };
            const _default_10: boolean;
            export { _default_10 as default };
        }
        export namespace name_1 {
            const type_16: StringConstructor;
            export { type_16 as type };
        }
        export { name_1 as name };
        export namespace elementId {
            const type_17: StringConstructor;
            export { type_17 as type };
        }
        export namespace transferClassName {
            const type_18: StringConstructor;
            export { type_18 as type };
        }
        export namespace prefix {
            const type_19: StringConstructor;
            export { type_19 as type };
        }
        export namespace maxTagCount {
            const type_20: NumberConstructor;
            export { type_20 as type };
        }
        export namespace maxTagPlaceholder {
            const type_21: FunctionConstructor;
            export { type_21 as type };
        }
        export namespace allowCreate {
            const type_22: BooleanConstructor;
            export { type_22 as type };
            const _default_11: boolean;
            export { _default_11 as default };
        }
        export namespace capture {
            const type_23: BooleanConstructor;
            export { type_23 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace filterByLabel {
            const type_24: BooleanConstructor;
            export { type_24 as type };
            const _default_12: boolean;
            export { _default_12 as default };
        }
        export namespace eventsEnabled {
            const type_25: BooleanConstructor;
            export { type_25 as type };
            const _default_13: boolean;
            export { _default_13 as default };
        }
        export namespace hideNotFound {
            const type_26: BooleanConstructor;
            export { type_26 as type };
            const _default_14: boolean;
            export { _default_14 as default };
        }
    }
    function mounted(): void;
    function mounted(): void;
    function data(): {
        prefixCls: string;
        values: any[];
        dropDownWidth: number;
        visible: boolean;
        focusIndex: number;
        isFocused: boolean;
        query: string;
        initialLabel: any;
        hasMouseHoverHead: boolean;
        slotOptions: any[];
        caretPosition: number;
        lastRemoteQuery: string;
        unchangedQuery: boolean;
        hasExpectedValue: boolean;
        isTyping: boolean;
        preventRemoteCall: boolean;
        filterQueryChange: boolean;
        slotOptionsMap: Map<any, any>;
        isLocking: boolean;
    };
    function data(): {
        prefixCls: string;
        values: any[];
        dropDownWidth: number;
        visible: boolean;
        focusIndex: number;
        isFocused: boolean;
        query: string;
        initialLabel: any;
        hasMouseHoverHead: boolean;
        slotOptions: any[];
        caretPosition: number;
        lastRemoteQuery: string;
        unchangedQuery: boolean;
        hasExpectedValue: boolean;
        isTyping: boolean;
        preventRemoteCall: boolean;
        filterQueryChange: boolean;
        slotOptionsMap: Map<any, any>;
        isLocking: boolean;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function dropdownCls(): {
            [x: string]: any;
            [x: number]: any;
            "ivu-auto-complete": any;
        };
        function dropdownCls(): {
            [x: string]: any;
            [x: number]: any;
            "ivu-auto-complete": any;
        };
        function selectionCls(): {
            [x: string]: any;
        };
        function selectionCls(): {
            [x: string]: any;
        };
        function localeNotFoundText(): any;
        function localeNotFoundText(): any;
        function localeLoadingText(): any;
        function localeLoadingText(): any;
        function showCreateItem(): boolean;
        function showCreateItem(): boolean;
        function transitionName(): "slide-up" | "slide-down";
        function transitionName(): "slide-up" | "slide-down";
        function dropVisible(): boolean;
        function dropVisible(): boolean;
        function showNotFoundLabel(): boolean;
        function showNotFoundLabel(): boolean;
        function publicValue(): any;
        function publicValue(): any;
        function canBeCleared(): any;
        function canBeCleared(): any;
        function selectTabindex(): -1 | 0;
        function selectTabindex(): -1 | 0;
        function remote(): boolean;
        function remote(): boolean;
    }
    namespace methods {
        function setQuery(query: any): void;
        function setQuery(query: any): void;
        function clearSingleSelect(): void;
        function clearSingleSelect(): void;
        function getOptionData(value: any): {
            value: any;
            label: any;
            disabled: any;
        };
        function getOptionData(value: any): {
            value: any;
            label: any;
            disabled: any;
        };
        function getInitialValue(): any[];
        function getInitialValue(): any[];
        function validateOption({ children, elm, propsData }: {
            children: any;
            elm: any;
            propsData: any;
        }): boolean;
        function validateOption({ children, elm, propsData }: {
            children: any;
            elm: any;
            propsData: any;
        }): boolean;
        function toggleMenu(e: any, force: any): boolean;
        function toggleMenu(e: any, force: any): boolean;
        function hideMenu(): void;
        function hideMenu(): void;
        function onClickOutside(event: any): void;
        function onClickOutside(event: any): void;
        function reset(): void;
        function reset(): void;
        function handleKeydown(e: any): void;
        function handleKeydown(e: any): void;
        function navigateOptions(direction: any): void;
        function navigateOptions(direction: any): void;
        function onOptionClick(option: any): void;
        function onOptionClick(option: any): void;
        function onQueryChange(query: any): void;
        function onQueryChange(query: any): void;
        function toggleHeaderFocus({ type }: {
            type: any;
        }): void;
        function toggleHeaderFocus({ type }: {
            type: any;
        }): void;
        function checkUpdateStatus(): void;
        function checkUpdateStatus(): void;
        function handleCreateItem(): void;
        function handleCreateItem(): void;
        function handleOnSelectSelected(options: any): void;
        function handleOnSelectSelected(options: any): void;
        function focus(): void;
        function focus(): void;
        function lazyUpdateValue(): void;
        function lazyUpdateValue(): void;
    }
    namespace watch {
        function modelValue(value: any): void;
        function modelValue(value: any): void;
        const values: any;
        const query: any;
        function isFocused(focused: any): void;
        function isFocused(focused: any): void;
        const focusIndex: any;
        function dropVisible(open: any): void;
        function dropVisible(open: any): void;
        function visible(state: any): void;
        function visible(state: any): void;
    }
}
export default _default;
import Drop from "./dropdown.vue";
import SelectHead from "./select-head.vue";
import Icon from "../icon";
import { directive as clickOutside } from "../../directives/v-click-outside-x";
