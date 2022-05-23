declare namespace _default {
    const name: string;
    namespace components {
        export { Drop };
        export { RecommendColors };
        export { Saturation };
        export { Hue };
        export { Alpha };
        export { iInput };
        export { iButton };
        export { Icon };
    }
    namespace directives {
        export { clickOutside };
    }
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
    } | {
        data(): {
            prefixCls: string;
            inputPrefixCls: string;
            iconPrefixCls: string;
            transferPrefixCls: string;
        };
    })[];
    const emits: string[];
    function provide(): {
        ColorPickerInstance: {
            name: string;
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
                RecommendColors: {
                    name: string;
                    mixins: ({
                        inject: string[];
                        methods: {
                            handleEscape(e: any): void;
                        };
                    } | {
                        data(): {
                            prefixCls: string;
                            inputPrefixCls: string;
                            iconPrefixCls: string;
                            transferPrefixCls: string;
                        };
                    })[];
                    emits: string[];
                    props: {
                        list: {
                            type: ArrayConstructor;
                            default: any;
                        };
                    };
                    data(): {
                        left: number;
                        right: number;
                        up: number;
                        down: number;
                        powerKey: string;
                        grid: {
                            x: number;
                            y: number;
                        };
                        rows: number;
                        columns: number;
                    };
                    computed: {
                        hideClass(): string;
                        linearIndex(): any;
                        currentCircle(): any;
                    };
                    methods: {
                        getLinearIndex(grid: any): number;
                        getMaxLimit(axis: any): any;
                        handleArrow(e: any, axis: any, direction: any): void;
                        blurColor(): void;
                        focusColor(): void;
                        handleEnter(e: any): void;
                        handleClick(e: any, circle: any): void;
                        lineBreak(list: any, index: any): boolean;
                    };
                };
                Saturation: {
                    name: string;
                    mixins: ({
                        data(): {
                            prefixCls: string;
                            inputPrefixCls: string;
                            iconPrefixCls: string;
                            transferPrefixCls: string;
                        };
                    } | {
                        mixins: {
                            inject: string[];
                            methods: {
                                handleEscape(e: any): void;
                            };
                        }[];
                        props: {
                            focused: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            value: {
                                type: ObjectConstructor;
                                default: any;
                            };
                        };
                        created(): void;
                        beforeUnmount(): void;
                        methods: {
                            handleLeft(e: any): void;
                            handleRight(e: any): void;
                            handleUp(e: any): void;
                            handleDown(e: any): void;
                            handleMouseDown(e: any): void;
                            handleMouseUp(): void;
                            unbindEventListeners(): void;
                            getLeft(e: any): number;
                            getTop(e: any): number;
                        };
                    })[];
                    emits: string[];
                    data(): {
                        left: number;
                        right: number;
                        up: number;
                        down: number;
                        multiplier: number;
                        powerKey: string;
                    };
                    computed: {
                        bgColorStyle(): {
                            background: string;
                        };
                        pointerStyle(): {
                            top: string;
                            left: string;
                        };
                    };
                    methods: {
                        change(h: any, s: any, v: any, a: any): void;
                        handleSlide(e: any, direction: any, key: any): void;
                        handleChange(e: any): void;
                        handleMouseDown(e: any): void;
                        unbindEventListeners(e: any): void;
                    };
                };
                Hue: {
                    name: string;
                    mixins: ({
                        data(): {
                            prefixCls: string;
                            inputPrefixCls: string;
                            iconPrefixCls: string;
                            transferPrefixCls: string;
                        };
                    } | {
                        mixins: {
                            inject: string[];
                            methods: {
                                handleEscape(e: any): void;
                            };
                        }[];
                        props: {
                            focused: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            value: {
                                type: ObjectConstructor;
                                default: any;
                            };
                        };
                        created(): void;
                        beforeUnmount(): void;
                        methods: {
                            handleLeft(e: any): void;
                            handleRight(e: any): void;
                            handleUp(e: any): void;
                            handleDown(e: any): void;
                            handleMouseDown(e: any): void;
                            handleMouseUp(): void;
                            unbindEventListeners(): void;
                            getLeft(e: any): number;
                            getTop(e: any): number;
                        };
                    })[];
                    emits: string[];
                    data(): {
                        left: number;
                        right: number;
                        up: number;
                        down: number;
                        powerKey: string;
                        percent: any;
                    };
                    watch: {
                        value(): void;
                    };
                    methods: {
                        change(percent: any): void;
                        handleSlide(e: any, direction: any): void;
                        handleChange(e: any): void;
                    };
                };
                Alpha: {
                    name: string;
                    mixins: ({
                        data(): {
                            prefixCls: string;
                            inputPrefixCls: string;
                            iconPrefixCls: string;
                            transferPrefixCls: string;
                        };
                    } | {
                        mixins: {
                            inject: string[];
                            methods: {
                                handleEscape(e: any): void;
                            };
                        }[];
                        props: {
                            focused: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            value: {
                                type: ObjectConstructor;
                                default: any;
                            };
                        };
                        created(): void;
                        beforeUnmount(): void;
                        methods: {
                            handleLeft(e: any): void;
                            handleRight(e: any): void;
                            handleUp(e: any): void;
                            handleDown(e: any): void;
                            handleMouseDown(e: any): void;
                            handleMouseUp(): void;
                            unbindEventListeners(): void;
                            getLeft(e: any): number;
                            getTop(e: any): number;
                        };
                    })[];
                    emits: string[];
                    data(): {
                        left: number;
                        right: number;
                        up: number;
                        down: number;
                        powerKey: string;
                    };
                    computed: {
                        gradientStyle(): {
                            background: string;
                        };
                    };
                    methods: {
                        change(newAlpha: any): void;
                        handleSlide(e: any, direction: any): void;
                        handleChange(e: any): void;
                    };
                };
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
            } | {
                data(): {
                    prefixCls: string;
                    inputPrefixCls: string;
                    iconPrefixCls: string;
                    transferPrefixCls: string;
                };
            })[];
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: StringConstructor;
                    default: any;
                };
                hue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                alpha: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                recommend: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                format: {
                    type: StringConstructor;
                    validator(value: any): boolean;
                    default: any;
                };
                colors: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                hideDropDown: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placement: {
                    type: StringConstructor;
                    validator(value: any): boolean;
                    default: string;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                name: {
                    type: StringConstructor;
                    default: any;
                };
                editable: {
                    type: BooleanConstructor;
                    default: boolean;
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
                val: {
                    hsl: any;
                    hex: any;
                    rgba: any;
                    hsv: any;
                    oldHue: any;
                    source: any;
                    a: any;
                };
                currentValue: any;
                dragging: boolean;
                visible: boolean;
                recommendedColor: string[];
            };
            computed: {
                arrowClasses(): string[];
                transition(): "slide-up" | "fade";
                saturationColors: {
                    get(): any;
                    set(newVal: any): void;
                };
                classes(): (string | {
                    [x: string]: any;
                })[];
                wrapClasses(): (string | {
                    [x: string]: any;
                })[];
                inputClasses(): (string | {
                    [x: string]: any;
                })[];
                dropClasses(): {
                    [x: string]: any;
                    [x: number]: any;
                };
                displayedColorStyle(): {
                    backgroundColor: string;
                };
                formatColor(): any;
                confirmColorClasses(): (string | {
                    [x: string]: any;
                })[];
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
            };
            watch: {
                modelValue(newVal: any): void;
                visible(val: any): void;
            };
            methods: {
                setDragging(value: any): void;
                handleClose(event: any): void;
                toggleVisible(): void;
                childChange(data: any): void;
                colorChange(data: any, oldHue: any): void;
                closer(event: any): void;
                handleButtons(event: any, value: any): void;
                handleSuccess(event: any): void;
                handleClear(event: any): void;
                handleSelectColor(color: any): void;
                handleEditColor(event: any): void;
                handleFirstTab(event: any): void;
                handleLastTab(event: any): void;
                onTab(event: any): void;
                onEscape(event: any): void;
                onArrow(event: any): void;
                handleOnEscapeKeydown(e: any): void;
                handleOnDragging(value: any): void;
            };
        };
    };
    function provide(): {
        ColorPickerInstance: {
            name: string;
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
                RecommendColors: {
                    name: string;
                    mixins: ({
                        inject: string[];
                        methods: {
                            handleEscape(e: any): void;
                        };
                    } | {
                        data(): {
                            prefixCls: string;
                            inputPrefixCls: string;
                            iconPrefixCls: string;
                            transferPrefixCls: string;
                        };
                    })[];
                    emits: string[];
                    props: {
                        list: {
                            type: ArrayConstructor;
                            default: any;
                        };
                    };
                    data(): {
                        left: number;
                        right: number;
                        up: number;
                        down: number;
                        powerKey: string;
                        grid: {
                            x: number;
                            y: number;
                        };
                        rows: number;
                        columns: number;
                    };
                    computed: {
                        hideClass(): string;
                        linearIndex(): any;
                        currentCircle(): any;
                    };
                    methods: {
                        getLinearIndex(grid: any): number;
                        getMaxLimit(axis: any): any;
                        handleArrow(e: any, axis: any, direction: any): void;
                        blurColor(): void;
                        focusColor(): void;
                        handleEnter(e: any): void;
                        handleClick(e: any, circle: any): void;
                        lineBreak(list: any, index: any): boolean;
                    };
                };
                Saturation: {
                    name: string;
                    mixins: ({
                        data(): {
                            prefixCls: string;
                            inputPrefixCls: string;
                            iconPrefixCls: string;
                            transferPrefixCls: string;
                        };
                    } | {
                        mixins: {
                            inject: string[];
                            methods: {
                                handleEscape(e: any): void;
                            };
                        }[];
                        props: {
                            focused: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            value: {
                                type: ObjectConstructor;
                                default: any;
                            };
                        };
                        created(): void;
                        beforeUnmount(): void;
                        methods: {
                            handleLeft(e: any): void;
                            handleRight(e: any): void;
                            handleUp(e: any): void;
                            handleDown(e: any): void;
                            handleMouseDown(e: any): void;
                            handleMouseUp(): void;
                            unbindEventListeners(): void;
                            getLeft(e: any): number;
                            getTop(e: any): number;
                        };
                    })[];
                    emits: string[];
                    data(): {
                        left: number;
                        right: number;
                        up: number;
                        down: number;
                        multiplier: number;
                        powerKey: string;
                    };
                    computed: {
                        bgColorStyle(): {
                            background: string;
                        };
                        pointerStyle(): {
                            top: string;
                            left: string;
                        };
                    };
                    methods: {
                        change(h: any, s: any, v: any, a: any): void;
                        handleSlide(e: any, direction: any, key: any): void;
                        handleChange(e: any): void;
                        handleMouseDown(e: any): void;
                        unbindEventListeners(e: any): void;
                    };
                };
                Hue: {
                    name: string;
                    mixins: ({
                        data(): {
                            prefixCls: string;
                            inputPrefixCls: string;
                            iconPrefixCls: string;
                            transferPrefixCls: string;
                        };
                    } | {
                        mixins: {
                            inject: string[];
                            methods: {
                                handleEscape(e: any): void;
                            };
                        }[];
                        props: {
                            focused: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            value: {
                                type: ObjectConstructor;
                                default: any;
                            };
                        };
                        created(): void;
                        beforeUnmount(): void;
                        methods: {
                            handleLeft(e: any): void;
                            handleRight(e: any): void;
                            handleUp(e: any): void;
                            handleDown(e: any): void;
                            handleMouseDown(e: any): void;
                            handleMouseUp(): void;
                            unbindEventListeners(): void;
                            getLeft(e: any): number;
                            getTop(e: any): number;
                        };
                    })[];
                    emits: string[];
                    data(): {
                        left: number;
                        right: number;
                        up: number;
                        down: number;
                        powerKey: string;
                        percent: any;
                    };
                    watch: {
                        value(): void;
                    };
                    methods: {
                        change(percent: any): void;
                        handleSlide(e: any, direction: any): void;
                        handleChange(e: any): void;
                    };
                };
                Alpha: {
                    name: string;
                    mixins: ({
                        data(): {
                            prefixCls: string;
                            inputPrefixCls: string;
                            iconPrefixCls: string;
                            transferPrefixCls: string;
                        };
                    } | {
                        mixins: {
                            inject: string[];
                            methods: {
                                handleEscape(e: any): void;
                            };
                        }[];
                        props: {
                            focused: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                            value: {
                                type: ObjectConstructor;
                                default: any;
                            };
                        };
                        created(): void;
                        beforeUnmount(): void;
                        methods: {
                            handleLeft(e: any): void;
                            handleRight(e: any): void;
                            handleUp(e: any): void;
                            handleDown(e: any): void;
                            handleMouseDown(e: any): void;
                            handleMouseUp(): void;
                            unbindEventListeners(): void;
                            getLeft(e: any): number;
                            getTop(e: any): number;
                        };
                    })[];
                    emits: string[];
                    data(): {
                        left: number;
                        right: number;
                        up: number;
                        down: number;
                        powerKey: string;
                    };
                    computed: {
                        gradientStyle(): {
                            background: string;
                        };
                    };
                    methods: {
                        change(newAlpha: any): void;
                        handleSlide(e: any, direction: any): void;
                        handleChange(e: any): void;
                    };
                };
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
            } | {
                data(): {
                    prefixCls: string;
                    inputPrefixCls: string;
                    iconPrefixCls: string;
                    transferPrefixCls: string;
                };
            })[];
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: StringConstructor;
                    default: any;
                };
                hue: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                alpha: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                recommend: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                format: {
                    type: StringConstructor;
                    validator(value: any): boolean;
                    default: any;
                };
                colors: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                disabled: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                hideDropDown: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                placement: {
                    type: StringConstructor;
                    validator(value: any): boolean;
                    default: string;
                };
                transfer: {
                    type: BooleanConstructor;
                    default(): any;
                };
                name: {
                    type: StringConstructor;
                    default: any;
                };
                editable: {
                    type: BooleanConstructor;
                    default: boolean;
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
                val: {
                    hsl: any;
                    hex: any;
                    rgba: any;
                    hsv: any;
                    oldHue: any;
                    source: any;
                    a: any;
                };
                currentValue: any;
                dragging: boolean;
                visible: boolean;
                recommendedColor: string[];
            };
            computed: {
                arrowClasses(): string[];
                transition(): "slide-up" | "fade";
                saturationColors: {
                    get(): any;
                    set(newVal: any): void;
                };
                classes(): (string | {
                    [x: string]: any;
                })[];
                wrapClasses(): (string | {
                    [x: string]: any;
                })[];
                inputClasses(): (string | {
                    [x: string]: any;
                })[];
                dropClasses(): {
                    [x: string]: any;
                    [x: number]: any;
                };
                displayedColorStyle(): {
                    backgroundColor: string;
                };
                formatColor(): any;
                confirmColorClasses(): (string | {
                    [x: string]: any;
                })[];
                arrowType(): string;
                customArrowType(): string;
                arrowSize(): string;
            };
            watch: {
                modelValue(newVal: any): void;
                visible(val: any): void;
            };
            methods: {
                setDragging(value: any): void;
                handleClose(event: any): void;
                toggleVisible(): void;
                childChange(data: any): void;
                colorChange(data: any, oldHue: any): void;
                closer(event: any): void;
                handleButtons(event: any, value: any): void;
                handleSuccess(event: any): void;
                handleClear(event: any): void;
                handleSelectColor(color: any): void;
                handleEditColor(event: any): void;
                handleFirstTab(event: any): void;
                handleLastTab(event: any): void;
                onTab(event: any): void;
                onEscape(event: any): void;
                onArrow(event: any): void;
                handleOnEscapeKeydown(e: any): void;
                handleOnDragging(value: any): void;
            };
        };
    };
    namespace props {
        export namespace modelValue {
            export const type: StringConstructor;
            const _default: any;
            export { _default as default };
        }
        export namespace hue {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace alpha {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace recommend {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace format {
            const type_4: StringConstructor;
            export { type_4 as type };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_4: any;
            export { _default_4 as default };
        }
        export namespace colors {
            const type_5: ArrayConstructor;
            export { type_5 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        export namespace disabled {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace hideDropDown {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        export namespace placement {
            const type_8: StringConstructor;
            export { type_8 as type };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_7: string;
            export { _default_7 as default };
        }
        export namespace transfer {
            const type_9: BooleanConstructor;
            export { type_9 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace name_1 {
            const type_10: StringConstructor;
            export { type_10 as type };
            const _default_8: any;
            export { _default_8 as default };
        }
        export { name_1 as name };
        export namespace editable {
            const type_11: BooleanConstructor;
            export { type_11 as type };
            const _default_9: boolean;
            export { _default_9 as default };
        }
        export namespace capture {
            const type_12: BooleanConstructor;
            export { type_12 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace transferClassName {
            const type_13: StringConstructor;
            export { type_13 as type };
        }
        export namespace eventsEnabled {
            const type_14: BooleanConstructor;
            export { type_14 as type };
            const _default_10: boolean;
            export { _default_10 as default };
        }
    }
    function data(): {
        val: {
            hsl: any;
            hex: any;
            rgba: any;
            hsv: any;
            oldHue: any;
            source: any;
            a: any;
        };
        currentValue: any;
        dragging: boolean;
        visible: boolean;
        recommendedColor: string[];
    };
    function data(): {
        val: {
            hsl: any;
            hex: any;
            rgba: any;
            hsv: any;
            oldHue: any;
            source: any;
            a: any;
        };
        currentValue: any;
        dragging: boolean;
        visible: boolean;
        recommendedColor: string[];
    };
    namespace computed {
        function arrowClasses(): string[];
        function arrowClasses(): string[];
        function transition(): "slide-up" | "fade";
        function transition(): "slide-up" | "fade";
        namespace saturationColors {
            function get(): any;
            function get(): any;
            function set(newVal: any): void;
            function set(newVal: any): void;
        }
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function inputClasses(): (string | {
            [x: string]: any;
        })[];
        function inputClasses(): (string | {
            [x: string]: any;
        })[];
        function dropClasses(): {
            [x: string]: any;
            [x: number]: any;
        };
        function dropClasses(): {
            [x: string]: any;
            [x: number]: any;
        };
        function displayedColorStyle(): {
            backgroundColor: string;
        };
        function displayedColorStyle(): {
            backgroundColor: string;
        };
        function formatColor(): any;
        function formatColor(): any;
        function confirmColorClasses(): (string | {
            [x: string]: any;
        })[];
        function confirmColorClasses(): (string | {
            [x: string]: any;
        })[];
        function arrowType(): string;
        function arrowType(): string;
        function customArrowType(): string;
        function customArrowType(): string;
        function arrowSize(): string;
        function arrowSize(): string;
    }
    namespace watch {
        function modelValue(newVal: any): void;
        function modelValue(newVal: any): void;
        function visible(val: any): void;
        function visible(val: any): void;
    }
    namespace methods {
        function setDragging(value: any): void;
        function setDragging(value: any): void;
        function handleClose(event: any): void;
        function handleClose(event: any): void;
        function toggleVisible(): void;
        function toggleVisible(): void;
        function childChange(data: any): void;
        function childChange(data: any): void;
        function colorChange(data: any, oldHue: any): void;
        function colorChange(data: any, oldHue: any): void;
        function closer(event: any): void;
        function closer(event: any): void;
        function handleButtons(event: any, value: any): void;
        function handleButtons(event: any, value: any): void;
        function handleSuccess(event: any): void;
        function handleSuccess(event: any): void;
        function handleClear(event: any): void;
        function handleClear(event: any): void;
        function handleSelectColor(color: any): void;
        function handleSelectColor(color: any): void;
        function handleEditColor(event: any): void;
        function handleEditColor(event: any): void;
        function handleFirstTab(event: any): void;
        function handleFirstTab(event: any): void;
        function handleLastTab(event: any): void;
        function handleLastTab(event: any): void;
        function onTab(event: any): void;
        function onTab(event: any): void;
        function onEscape(event: any): void;
        function onEscape(event: any): void;
        function onArrow(event: any): void;
        function onArrow(event: any): void;
        function handleOnEscapeKeydown(e: any): void;
        function handleOnEscapeKeydown(e: any): void;
        function handleOnDragging(value: any): void;
        function handleOnDragging(value: any): void;
    }
}
export default _default;
import Drop from "../../components/select/dropdown.vue";
import RecommendColors from "./recommend-colors.vue";
import Saturation from "./saturation.vue";
import Hue from "./hue.vue";
import Alpha from "./alpha.vue";
import iInput from "../input/input.vue";
import iButton from "../button/button.vue";
import Icon from "../icon/icon.vue";
import { directive as clickOutside } from "../../directives/v-click-outside-x";
