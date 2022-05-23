declare namespace _default {
    const mixins: ({
        data(): {
            globalConfig: {};
        };
        created(): void;
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
    }
    namespace directives {
        export { clickOutside };
    }
    const emits: string[];
    function provide(): {
        PickerInstance: {
            mixins: ({
                data(): {
                    globalConfig: {};
                };
                created(): void;
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
            };
            directives: {
                clickOutside: {};
            };
            emits: string[];
            provide(): any;
            props: {
                format: {
                    type: StringConstructor;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                editable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirm: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                open: {
                    type: BooleanConstructor;
                    default: any;
                };
                multiple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                timePickerOptions: {
                    type: ObjectConstructor;
                    default: () => {};
                };
                splitPanels: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showWeekNumbers: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                startDate: {
                    type: DateConstructor;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                placeholder: {
                    type: StringConstructor;
                    default: string;
                };
                placement: {
                    validator(value: any): boolean;
                    default: string;
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
                steps: {
                    type: ArrayConstructor;
                    default: () => any[];
                };
                modelValue: {
                    type: (StringConstructor | DateConstructor | ArrayConstructor)[];
                };
                options: {
                    type: ObjectConstructor;
                    default: () => {};
                };
                separator: {
                    type: StringConstructor;
                    default: string;
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
                showClose: boolean;
                visible: boolean;
                internalValue: any;
                disableClickOutSide: boolean;
                disableCloseUnderTransfer: boolean;
                selectionMode: any;
                forceInputRerender: number;
                isFocused: boolean;
                focusedDate: any;
                focusedTime: {
                    column: number;
                    picker: number;
                    time: any;
                    active: boolean;
                };
                internalFocus: boolean;
                isValueNull: boolean;
                timeSpinnerList: any[];
                panelTableList: any[];
            };
            computed: {
                wrapperClasses(): (string | {
                    [x: string]: any;
                })[];
                publicVModelValue(): any;
                publicStringValue(): any;
                opened(): any;
                transition(): "slide-up" | "slide-down";
                visualValue(): any;
                isConfirm(): any;
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
                dropdownCls(): {
                    [x: string]: any;
                    [x: number]: any;
                };
            };
            methods: {
                onSelectionModeChange(type: any): any;
                handleTransferClick(): void;
                handleClose(e: any): boolean;
                handleFocus(e: any): void;
                handleBlur(e: any): void;
                handleKeydown(e: any): void;
                reset(): void;
                navigateTimePanel(direction: any): void;
                navigateDatePanel(direction: any, shift: any): void;
                handleInputChange(event: any): void;
                handleInputMouseenter(): void;
                handleInputMouseleave(): void;
                handleIconClick(e: any): void;
                handleClear(): void;
                emitChange(type: any): void;
                parseDate(val: any): any;
                formatDate(value: any): any;
                onPick(dates: any, visible: boolean, type: any): void;
                onPickSuccess(): void;
                focus(): void;
                updatePopper(): void;
                handleOnFocusInput(): void;
                handleOnUpdatePopper(): void;
            };
            watch: {
                visible(state: any): void;
                modelValue(val: any): void;
                open(val: any): void;
                type(type: any): void;
                publicVModelValue(now: any, before: any): void;
            };
            mounted(): void;
        };
    };
    function provide(): {
        PickerInstance: {
            mixins: ({
                data(): {
                    globalConfig: {};
                };
                created(): void;
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
            };
            directives: {
                clickOutside: {};
            };
            emits: string[];
            provide(): any;
            props: {
                format: {
                    type: StringConstructor;
                };
                readonly: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                editable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                clearable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                confirm: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                open: {
                    type: BooleanConstructor;
                    default: any;
                };
                multiple: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                timePickerOptions: {
                    type: ObjectConstructor;
                    default: () => {};
                };
                splitPanels: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showWeekNumbers: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                startDate: {
                    type: DateConstructor;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                placeholder: {
                    type: StringConstructor;
                    default: string;
                };
                placement: {
                    validator(value: any): boolean;
                    default: string;
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
                steps: {
                    type: ArrayConstructor;
                    default: () => any[];
                };
                modelValue: {
                    type: (StringConstructor | DateConstructor | ArrayConstructor)[];
                };
                options: {
                    type: ObjectConstructor;
                    default: () => {};
                };
                separator: {
                    type: StringConstructor;
                    default: string;
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
                showClose: boolean;
                visible: boolean;
                internalValue: any;
                disableClickOutSide: boolean;
                disableCloseUnderTransfer: boolean;
                selectionMode: any;
                forceInputRerender: number;
                isFocused: boolean;
                focusedDate: any;
                focusedTime: {
                    column: number;
                    picker: number;
                    time: any;
                    active: boolean;
                };
                internalFocus: boolean;
                isValueNull: boolean;
                timeSpinnerList: any[];
                panelTableList: any[];
            };
            computed: {
                wrapperClasses(): (string | {
                    [x: string]: any;
                })[];
                publicVModelValue(): any;
                publicStringValue(): any;
                opened(): any;
                transition(): "slide-up" | "slide-down";
                visualValue(): any;
                isConfirm(): any;
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
                dropdownCls(): {
                    [x: string]: any;
                    [x: number]: any;
                };
            };
            methods: {
                onSelectionModeChange(type: any): any;
                handleTransferClick(): void;
                handleClose(e: any): boolean;
                handleFocus(e: any): void;
                handleBlur(e: any): void;
                handleKeydown(e: any): void;
                reset(): void;
                navigateTimePanel(direction: any): void;
                navigateDatePanel(direction: any, shift: any): void;
                handleInputChange(event: any): void;
                handleInputMouseenter(): void;
                handleInputMouseleave(): void;
                handleIconClick(e: any): void;
                handleClear(): void;
                emitChange(type: any): void;
                parseDate(val: any): any;
                formatDate(value: any): any;
                onPick(dates: any, visible: boolean, type: any): void;
                onPickSuccess(): void;
                focus(): void;
                updatePopper(): void;
                handleOnFocusInput(): void;
                handleOnUpdatePopper(): void;
            };
            watch: {
                visible(state: any): void;
                modelValue(val: any): void;
                open(val: any): void;
                type(type: any): void;
                publicVModelValue(now: any, before: any): void;
            };
            mounted(): void;
        };
    };
    namespace props {
        namespace format {
            const type: StringConstructor;
        }
        namespace readonly {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
        namespace disabled {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace editable {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace clearable {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace confirm {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace open {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_5: any;
            export { _default_5 as default };
        }
        namespace multiple {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        namespace timePickerOptions {
            const type_8: ObjectConstructor;
            export { type_8 as type };
            function _default_7(): {};
            export { _default_7 as default };
        }
        namespace splitPanels {
            const type_9: BooleanConstructor;
            export { type_9 as type };
            const _default_8: boolean;
            export { _default_8 as default };
        }
        namespace showWeekNumbers {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_9: boolean;
            export { _default_9 as default };
        }
        namespace startDate {
            const type_11: DateConstructor;
            export { type_11 as type };
        }
        namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace placeholder {
            const type_12: StringConstructor;
            export { type_12 as type };
            const _default_10: string;
            export { _default_10 as default };
        }
        namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_11: string;
            export { _default_11 as default };
        }
        namespace transfer {
            const type_13: BooleanConstructor;
            export { type_13 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace name {
            const type_14: StringConstructor;
            export { type_14 as type };
        }
        namespace elementId {
            const type_15: StringConstructor;
            export { type_15 as type };
        }
        namespace steps {
            const type_16: ArrayConstructor;
            export { type_16 as type };
            function _default_12(): any[];
            export { _default_12 as default };
        }
        namespace modelValue {
            const type_17: (StringConstructor | DateConstructor | ArrayConstructor)[];
            export { type_17 as type };
        }
        namespace options {
            const type_18: ObjectConstructor;
            export { type_18 as type };
            function _default_13(): {};
            export { _default_13 as default };
        }
        namespace separator {
            const type_19: StringConstructor;
            export { type_19 as type };
            const _default_14: string;
            export { _default_14 as default };
        }
        namespace capture {
            const type_20: BooleanConstructor;
            export { type_20 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace transferClassName {
            const type_21: StringConstructor;
            export { type_21 as type };
        }
        namespace eventsEnabled {
            const type_22: BooleanConstructor;
            export { type_22 as type };
            const _default_15: boolean;
            export { _default_15 as default };
        }
    }
    function data(): {
        prefixCls: string;
        showClose: boolean;
        visible: boolean;
        internalValue: any;
        disableClickOutSide: boolean;
        disableCloseUnderTransfer: boolean;
        selectionMode: any;
        forceInputRerender: number;
        isFocused: boolean;
        focusedDate: any;
        focusedTime: {
            column: number;
            picker: number;
            time: any;
            active: boolean;
        };
        internalFocus: boolean;
        isValueNull: boolean;
        timeSpinnerList: any[];
        panelTableList: any[];
    };
    function data(): {
        prefixCls: string;
        showClose: boolean;
        visible: boolean;
        internalValue: any;
        disableClickOutSide: boolean;
        disableCloseUnderTransfer: boolean;
        selectionMode: any;
        forceInputRerender: number;
        isFocused: boolean;
        focusedDate: any;
        focusedTime: {
            column: number;
            picker: number;
            time: any;
            active: boolean;
        };
        internalFocus: boolean;
        isValueNull: boolean;
        timeSpinnerList: any[];
        panelTableList: any[];
    };
    namespace computed {
        function wrapperClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapperClasses(): (string | {
            [x: string]: any;
        })[];
        function publicVModelValue(): any;
        function publicVModelValue(): any;
        function publicStringValue(): any;
        function publicStringValue(): any;
        function opened(): any;
        function opened(): any;
        function transition(): "slide-up" | "slide-down";
        function transition(): "slide-up" | "slide-down";
        function visualValue(): any;
        function visualValue(): any;
        function isConfirm(): any;
        function isConfirm(): any;
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
        function onSelectionModeChange(type: any): any;
        function onSelectionModeChange(type: any): any;
        function handleTransferClick(): void;
        function handleTransferClick(): void;
        function handleClose(e: any): boolean;
        function handleClose(e: any): boolean;
        function handleFocus(e: any): void;
        function handleFocus(e: any): void;
        function handleBlur(e: any): void;
        function handleBlur(e: any): void;
        function handleKeydown(e: any): void;
        function handleKeydown(e: any): void;
        function reset(): void;
        function reset(): void;
        function navigateTimePanel(direction: any): void;
        function navigateTimePanel(direction: any): void;
        function navigateDatePanel(direction: any, shift: any): void;
        function navigateDatePanel(direction: any, shift: any): void;
        function handleInputChange(event: any): void;
        function handleInputChange(event: any): void;
        function handleInputMouseenter(): void;
        function handleInputMouseenter(): void;
        function handleInputMouseleave(): void;
        function handleInputMouseleave(): void;
        function handleIconClick(e: any): void;
        function handleIconClick(e: any): void;
        function handleClear(): void;
        function handleClear(): void;
        function emitChange(type: any): void;
        function emitChange(type: any): void;
        function parseDate(val: any): any;
        function parseDate(val: any): any;
        function formatDate(value: any): any;
        function formatDate(value: any): any;
        function onPick(dates: any, visible: boolean, type: any): void;
        function onPick(dates: any, visible: boolean, type: any): void;
        function onPickSuccess(): void;
        function onPickSuccess(): void;
        function focus(): void;
        function focus(): void;
        function updatePopper(): void;
        function updatePopper(): void;
        function handleOnFocusInput(): void;
        function handleOnFocusInput(): void;
        function handleOnUpdatePopper(): void;
        function handleOnUpdatePopper(): void;
    }
    namespace watch {
        function visible(state: any): void;
        function visible(state: any): void;
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        function open(val: any): void;
        function open(val: any): void;
        function type(type: any): void;
        function type(type: any): void;
        function publicVModelValue(now: any, before: any): void;
        function publicVModelValue(now: any, before: any): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
import iInput from "../../components/input/input.vue";
import Drop from "../../components/select/dropdown.vue";
import Icon from "../../components/icon/icon.vue";
import { directive as clickOutside } from "../../directives/v-click-outside-x";
