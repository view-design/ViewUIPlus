declare namespace _default {
    const name: string;
    const mixins: {
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
        provide(): {
            PickerInstance: any;
        };
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
    }[];
    namespace props {
        namespace type {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
    }
    namespace components {
        export { DatePickerPanel };
        export { RangeDatePickerPanel };
    }
    namespace computed {
        function panel(): "DatePickerPanel" | "RangeDatePickerPanel";
        function panel(): "DatePickerPanel" | "RangeDatePickerPanel";
        function ownPickerProps(): any;
        function ownPickerProps(): any;
    }
}
export default _default;
import DatePickerPanel from "../panel/Date/date.vue";
import RangeDatePickerPanel from "../panel/Date/date-range.vue";
