declare namespace _default {
    const name: string;
    const mixins: ({
        data(): {
            globalConfig: {};
        };
        created(): void;
    } | {
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
        export { iInput };
        export { Drop };
        export { Icon };
        export { Caspanel };
    }
    namespace directives {
        export { clickOutside };
    }
    const emits: string[];
    function provide(): {
        CascaderInstance: {
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
                iInput: {
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
                    props: {
                        type: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        modelValue: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: string;
                        };
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        placeholder: {
                            type: StringConstructor;
                            default: string;
                        };
                        maxlength: {
                            type: (StringConstructor | NumberConstructor)[];
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        icon: StringConstructor;
                        autosize: {
                            type: (ObjectConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        rows: {
                            type: NumberConstructor;
                            default: number;
                        };
                        readonly: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        name: {
                            type: StringConstructor;
                        };
                        number: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autofocus: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        spellcheck: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autocomplete: {
                            type: StringConstructor;
                            default: string;
                        };
                        clearable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        elementId: {
                            type: StringConstructor;
                        };
                        wrap: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        prefix: {
                            type: StringConstructor;
                            default: string;
                        };
                        suffix: {
                            type: StringConstructor;
                            default: string;
                        };
                        search: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        enterButton: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        showWordLimit: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        password: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        border: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        currentValue: any;
                        prefixCls: string;
                        slotReady: boolean;
                        textareaStyles: {};
                        isOnComposition: boolean;
                        showPassword: boolean;
                        clearableIconOffset: number;
                    };
                    computed: {
                        currentType(): any;
                        prepend(): boolean;
                        append(): boolean;
                        showPrefix(): boolean;
                        showSuffix(): boolean;
                        wrapClasses(): (string | {
                            [x: string]: any;
                        })[];
                        inputClasses(): (string | {
                            [x: string]: any;
                        })[];
                        textareaClasses(): (string | {
                            [x: string]: any;
                        })[];
                        upperLimit(): any;
                        textLength(): any;
                        clearableStyles(): {
                            transform: string;
                        };
                    };
                    methods: {
                        handleEnter(event: any): void;
                        handleKeydown(event: any): void;
                        handleKeypress(event: any): void;
                        handleKeyup(event: any): void;
                        handleIconClick(event: any): void;
                        handleFocus(event: any): void;
                        handleBlur(event: any): void;
                        handleComposition(event: any): void;
                        handleInput(event: any): void;
                        handleChange(event: any): void;
                        setCurrentValue(value: any): void;
                        resizeTextarea(): boolean;
                        focus(option: any): void;
                        blur(): void;
                        handleClear(): void;
                        handleSearch(): boolean;
                        handleToggleShowPassword(): boolean;
                        handleCalcIconOffset(): void;
                    };
                    watch: {
                        modelValue(val: any): void;
                        type(): void;
                    };
                    mounted(): void;
                    updated(): void;
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
                Caspanel: {
                    name: string;
                    components: {
                        Casitem: {
                            name: string;
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
                            mixins: {
                                data(): {
                                    globalConfig: {};
                                };
                                created(): void;
                            }[];
                            props: {
                                data: ObjectConstructor;
                                prefixCls: StringConstructor;
                                tmpItem: ObjectConstructor;
                            };
                            computed: {
                                classes(): (string | {
                                    [x: string]: any;
                                })[];
                                showArrow(): any;
                                showLoading(): any;
                                arrowType(): string;
                                customArrowType(): string;
                                arrowSize(): string;
                            };
                        };
                    };
                    inject: string[];
                    provide(): {
                        CaspanelInstance: any;
                    };
                    props: {
                        data: {
                            type: ArrayConstructor;
                            default(): any[];
                        };
                        disabled: BooleanConstructor;
                        changeOnSelect: BooleanConstructor;
                        trigger: StringConstructor;
                        prefixCls: StringConstructor;
                    };
                    data(): {
                        tmpItem: {};
                        result: any[];
                        sublist: any[];
                        id: string;
                        childCaspanelList: any[];
                    };
                    watch: {
                        data(): void;
                    };
                    methods: {
                        handleClickItem(item: any): void;
                        handleHoverItem(item: any): void;
                        handleTriggerItem(item: any, fromInit?: boolean, fromUser?: boolean): void;
                        updateResult(item: any): void;
                        getBaseItem(item: any): any;
                        emitUpdate(result: any): void;
                        getKey(): number;
                        handleOnFindSelected(params: any): boolean;
                        handleOnClear(deep?: boolean): void;
                        addCaspanel(): void;
                        removeCaspanel(): void;
                    };
                    mounted(): void;
                    beforeUnmount(): void;
                };
            };
            directives: {
                clickOutside: {
                    beforeMount(el: any, binding: any, vnode: any): void;
                    unmounted(el: any, binding: any): void;
                };
            };
            emits: string[];
            provide(): any;
            props: {
                data: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                modelValue: {
                    type: ArrayConstructor;
                    default(): any[];
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
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                trigger: {
                    validator(value: any): boolean;
                    default: string;
                };
                changeOnSelect: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderFormat: {
                    type: FunctionConstructor;
                    default(label: any): any;
                };
                loadData: {
                    type: FunctionConstructor;
                };
                filterable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                notFoundText: {
                    type: StringConstructor;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                name: {
                    type: StringConstructor;
                };
                elementId: {
                    type: StringConstructor;
                };
                capture: {
                    type: BooleanConstructor;
                    default(): any;
                };
                transferClassName: {
                    type: StringConstructor;
                };
                eventsEnabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                prefixCls: string;
                selectPrefixCls: string;
                visible: boolean;
                selected: any[];
                tmpSelected: any[];
                updatingValue: boolean;
                currentValue: any;
                query: string;
                validDataStr: string;
                isLoadedChildren: boolean;
                isValueNull: boolean;
                caspanelList: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                showCloseIcon(): boolean;
                displayRender(): any;
                displayInputRender(): "" | (() => any);
                localePlaceholder(): any;
                inputPlaceholder(): () => any;
                localeNotFoundText(): any;
                querySelections(): any[];
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
                dropdownCls(): {
                    [x: string]: any;
                    [x: number]: any;
                };
            };
            methods: {
                clearSelect(): boolean;
                handleClose(): void;
                toggleOpen(): boolean;
                onFocus(): void;
                updateResult(result: any): void;
                updateSelected(init?: boolean, changeOnSelectDataChange?: boolean): void;
                emitValue(val: any, oldVal: any): void;
                handleInput(event: any): void;
                handleSelectItem(index: any): boolean;
                handleFocus(): void;
                getValidData(data: any): any;
                handleOnResultChange(params: any): void;
            };
            created(): void;
            mounted(): void;
            watch: {
                visible(val: any): void;
                modelValue(val: any): void;
                data: {
                    deep: boolean;
                    handler(): void;
                };
            };
        };
    };
    function provide(): {
        CascaderInstance: {
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
                iInput: {
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
                    props: {
                        type: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        modelValue: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: string;
                        };
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        placeholder: {
                            type: StringConstructor;
                            default: string;
                        };
                        maxlength: {
                            type: (StringConstructor | NumberConstructor)[];
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        icon: StringConstructor;
                        autosize: {
                            type: (ObjectConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        rows: {
                            type: NumberConstructor;
                            default: number;
                        };
                        readonly: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        name: {
                            type: StringConstructor;
                        };
                        number: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autofocus: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        spellcheck: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        autocomplete: {
                            type: StringConstructor;
                            default: string;
                        };
                        clearable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        elementId: {
                            type: StringConstructor;
                        };
                        wrap: {
                            validator(value: any): boolean;
                            default: string;
                        };
                        prefix: {
                            type: StringConstructor;
                            default: string;
                        };
                        suffix: {
                            type: StringConstructor;
                            default: string;
                        };
                        search: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        enterButton: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        showWordLimit: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        password: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        border: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        currentValue: any;
                        prefixCls: string;
                        slotReady: boolean;
                        textareaStyles: {};
                        isOnComposition: boolean;
                        showPassword: boolean;
                        clearableIconOffset: number;
                    };
                    computed: {
                        currentType(): any;
                        prepend(): boolean;
                        append(): boolean;
                        showPrefix(): boolean;
                        showSuffix(): boolean;
                        wrapClasses(): (string | {
                            [x: string]: any;
                        })[];
                        inputClasses(): (string | {
                            [x: string]: any;
                        })[];
                        textareaClasses(): (string | {
                            [x: string]: any;
                        })[];
                        upperLimit(): any;
                        textLength(): any;
                        clearableStyles(): {
                            transform: string;
                        };
                    };
                    methods: {
                        handleEnter(event: any): void;
                        handleKeydown(event: any): void;
                        handleKeypress(event: any): void;
                        handleKeyup(event: any): void;
                        handleIconClick(event: any): void;
                        handleFocus(event: any): void;
                        handleBlur(event: any): void;
                        handleComposition(event: any): void;
                        handleInput(event: any): void;
                        handleChange(event: any): void;
                        setCurrentValue(value: any): void;
                        resizeTextarea(): boolean;
                        focus(option: any): void;
                        blur(): void;
                        handleClear(): void;
                        handleSearch(): boolean;
                        handleToggleShowPassword(): boolean;
                        handleCalcIconOffset(): void;
                    };
                    watch: {
                        modelValue(val: any): void;
                        type(): void;
                    };
                    mounted(): void;
                    updated(): void;
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
                Caspanel: {
                    name: string;
                    components: {
                        Casitem: {
                            name: string;
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
                            mixins: {
                                data(): {
                                    globalConfig: {};
                                };
                                created(): void;
                            }[];
                            props: {
                                data: ObjectConstructor;
                                prefixCls: StringConstructor;
                                tmpItem: ObjectConstructor;
                            };
                            computed: {
                                classes(): (string | {
                                    [x: string]: any;
                                })[];
                                showArrow(): any;
                                showLoading(): any;
                                arrowType(): string;
                                customArrowType(): string;
                                arrowSize(): string;
                            };
                        };
                    };
                    inject: string[];
                    provide(): {
                        CaspanelInstance: any;
                    };
                    props: {
                        data: {
                            type: ArrayConstructor;
                            default(): any[];
                        };
                        disabled: BooleanConstructor;
                        changeOnSelect: BooleanConstructor;
                        trigger: StringConstructor;
                        prefixCls: StringConstructor;
                    };
                    data(): {
                        tmpItem: {};
                        result: any[];
                        sublist: any[];
                        id: string;
                        childCaspanelList: any[];
                    };
                    watch: {
                        data(): void;
                    };
                    methods: {
                        handleClickItem(item: any): void;
                        handleHoverItem(item: any): void;
                        handleTriggerItem(item: any, fromInit?: boolean, fromUser?: boolean): void;
                        updateResult(item: any): void;
                        getBaseItem(item: any): any;
                        emitUpdate(result: any): void;
                        getKey(): number;
                        handleOnFindSelected(params: any): boolean;
                        handleOnClear(deep?: boolean): void;
                        addCaspanel(): void;
                        removeCaspanel(): void;
                    };
                    mounted(): void;
                    beforeUnmount(): void;
                };
            };
            directives: {
                clickOutside: {
                    beforeMount(el: any, binding: any, vnode: any): void;
                    unmounted(el: any, binding: any): void;
                };
            };
            emits: string[];
            provide(): any;
            props: {
                data: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                modelValue: {
                    type: ArrayConstructor;
                    default(): any[];
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
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                trigger: {
                    validator(value: any): boolean;
                    default: string;
                };
                changeOnSelect: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                renderFormat: {
                    type: FunctionConstructor;
                    default(label: any): any;
                };
                loadData: {
                    type: FunctionConstructor;
                };
                filterable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                notFoundText: {
                    type: StringConstructor;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                name: {
                    type: StringConstructor;
                };
                elementId: {
                    type: StringConstructor;
                };
                capture: {
                    type: BooleanConstructor;
                    default(): any;
                };
                transferClassName: {
                    type: StringConstructor;
                };
                eventsEnabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                prefixCls: string;
                selectPrefixCls: string;
                visible: boolean;
                selected: any[];
                tmpSelected: any[];
                updatingValue: boolean;
                currentValue: any;
                query: string;
                validDataStr: string;
                isLoadedChildren: boolean;
                isValueNull: boolean;
                caspanelList: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                showCloseIcon(): boolean;
                displayRender(): any;
                displayInputRender(): "" | (() => any);
                localePlaceholder(): any;
                inputPlaceholder(): () => any;
                localeNotFoundText(): any;
                querySelections(): any[];
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
                dropdownCls(): {
                    [x: string]: any;
                    [x: number]: any;
                };
            };
            methods: {
                clearSelect(): boolean;
                handleClose(): void;
                toggleOpen(): boolean;
                onFocus(): void;
                updateResult(result: any): void;
                updateSelected(init?: boolean, changeOnSelectDataChange?: boolean): void;
                emitValue(val: any, oldVal: any): void;
                handleInput(event: any): void;
                handleSelectItem(index: any): boolean;
                handleFocus(): void;
                getValidData(data: any): any;
                handleOnResultChange(params: any): void;
            };
            created(): void;
            mounted(): void;
            watch: {
                visible(val: any): void;
                modelValue(val: any): void;
                data: {
                    deep: boolean;
                    handler(): void;
                };
            };
        };
    };
    namespace props {
        export namespace data {
            export const type: ArrayConstructor;
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        export namespace modelValue {
            const type_1: ArrayConstructor;
            export { type_1 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        export namespace disabled {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default: boolean;
            export { _default as default };
        }
        export namespace clearable {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace placeholder {
            const type_4: StringConstructor;
            export { type_4 as type };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace trigger {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_2: string;
            export { _default_2 as default };
        }
        export namespace changeOnSelect {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace renderFormat {
            const type_6: FunctionConstructor;
            export { type_6 as type };
            function _default(label: any): any;
            function _default(label: any): any;
            export { _default as default };
        }
        export namespace loadData {
            const type_7: FunctionConstructor;
            export { type_7 as type };
        }
        export namespace filterable {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace notFoundText {
            const type_9: StringConstructor;
            export { type_9 as type };
        }
        export namespace transfer {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace name_1 {
            const type_11: StringConstructor;
            export { type_11 as type };
        }
        export { name_1 as name };
        export namespace elementId {
            const type_12: StringConstructor;
            export { type_12 as type };
        }
        export namespace capture {
            const type_13: BooleanConstructor;
            export { type_13 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace transferClassName {
            const type_14: StringConstructor;
            export { type_14 as type };
        }
        export namespace eventsEnabled {
            const type_15: BooleanConstructor;
            export { type_15 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
    }
    function data(): {
        prefixCls: string;
        selectPrefixCls: string;
        visible: boolean;
        selected: any[];
        tmpSelected: any[];
        updatingValue: boolean;
        currentValue: any;
        query: string;
        validDataStr: string;
        isLoadedChildren: boolean;
        isValueNull: boolean;
        caspanelList: any[];
    };
    function data(): {
        prefixCls: string;
        selectPrefixCls: string;
        visible: boolean;
        selected: any[];
        tmpSelected: any[];
        updatingValue: boolean;
        currentValue: any;
        query: string;
        validDataStr: string;
        isLoadedChildren: boolean;
        isValueNull: boolean;
        caspanelList: any[];
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function showCloseIcon(): boolean;
        function showCloseIcon(): boolean;
        function displayRender(): any;
        function displayRender(): any;
        function displayInputRender(): "" | (() => any);
        function displayInputRender(): "" | (() => any);
        function localePlaceholder(): any;
        function localePlaceholder(): any;
        function inputPlaceholder(): () => any;
        function inputPlaceholder(): () => any;
        function localeNotFoundText(): any;
        function localeNotFoundText(): any;
        function querySelections(): any[];
        function querySelections(): any[];
        function arrowType(): string;
        function arrowType(): string;
        function customArrowType(): string;
        function customArrowType(): string;
        function arrowSize(): string;
        function arrowSize(): string;
        function dropdownCls(): {
            [x: string]: any;
            [x: number]: any;
        };
        function dropdownCls(): {
            [x: string]: any;
            [x: number]: any;
        };
    }
    namespace methods {
        function clearSelect(): boolean;
        function clearSelect(): boolean;
        function handleClose(): void;
        function handleClose(): void;
        function toggleOpen(): boolean;
        function toggleOpen(): boolean;
        function onFocus(): void;
        function onFocus(): void;
        function updateResult(result: any): void;
        function updateResult(result: any): void;
        function updateSelected(init?: boolean, changeOnSelectDataChange?: boolean): void;
        function updateSelected(init?: boolean, changeOnSelectDataChange?: boolean): void;
        function emitValue(val: any, oldVal: any): void;
        function emitValue(val: any, oldVal: any): void;
        function handleInput(event: any): void;
        function handleInput(event: any): void;
        function handleSelectItem(index: any): boolean;
        function handleSelectItem(index: any): boolean;
        function handleFocus(): void;
        function handleFocus(): void;
        function getValidData(data: any): any;
        function getValidData(data: any): any;
        function handleOnResultChange(params: any): void;
        function handleOnResultChange(params: any): void;
    }
    function created(): void;
    function created(): void;
    function mounted(): void;
    function mounted(): void;
    namespace watch {
        export function visible(val: any): void;
        export function visible(val: any): void;
        export function modelValue(val: any): void;
        export function modelValue(val: any): void;
        export const currentValue: any;
        export namespace data_1 {
            const deep: boolean;
            function handler(): void;
            function handler(): void;
        }
        export { data_1 as data };
    }
}
export default _default;
import iInput from "../input/input.vue";
import Drop from "../select/dropdown.vue";
import Icon from "../icon/icon.vue";
import Caspanel from "./caspanel.vue";
import clickOutside from "../../directives/clickoutside";
