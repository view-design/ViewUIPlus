declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            t(...args: any[]): any;
        };
    }[];
    namespace components {
        export { tableHead };
        export { tableBody };
        export { tableSummary };
        export { Spin };
        export { Dropdown };
        export { DropdownMenu };
    }
    const emits: string[];
    function provide(): {
        TableInstance: {
            name: string;
            mixins: {
                methods: {
                    t(...args: any[]): any;
                };
            }[];
            components: {
                tableHead: {
                    name: string;
                    mixins: ({
                        methods: {
                            t(...args: any[]): any;
                        };
                    } | {
                        methods: {
                            alignCls(column: any, row?: {}): (string | {
                                [x: string]: any;
                            })[];
                            isPopperShow(column: any): boolean;
                            setCellWidth(column: any): string;
                        };
                    })[];
                    components: {
                        CheckboxGroup: {
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
                            provide(): {
                                CheckboxGroupInstance: any;
                            };
                            props: {
                                modelValue: {
                                    type: ArrayConstructor;
                                    default(): any[];
                                };
                                size: {
                                    validator(value: any): boolean;
                                    default(): any;
                                };
                            };
                            data(): {
                                currentValue: any;
                                children: any[];
                            };
                            computed: {
                                classes(): (string | {
                                    [x: string]: boolean;
                                })[];
                            };
                            methods: {
                                change(data: any): void;
                            };
                        };
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
                        Poptip: {
                            name: string;
                            mixins: ({
                                methods: {
                                    t(...args: any[]): any;
                                };
                            } | {
                                emits: string[];
                                props: {
                                    eventsEnabled: {
                                        type: BooleanConstructor;
                                        default: boolean;
                                    };
                                    placement: {
                                        type: StringConstructor;
                                        default: string;
                                    };
                                    boundariesPadding: {
                                        type: NumberConstructor;
                                        default: number;
                                    };
                                    reference: ObjectConstructor;
                                    popper: ObjectConstructor;
                                    offset: {
                                        default: number;
                                    };
                                    modelValue: {
                                        type: BooleanConstructor;
                                        default: boolean;
                                    };
                                    transition: StringConstructor;
                                    options: {
                                        type: ObjectConstructor;
                                        default(): {
                                            modifiers: {
                                                computeStyle: {
                                                    gpuAcceleration: boolean;
                                                };
                                                preventOverflow: {
                                                    boundariesElement: string;
                                                };
                                            };
                                        };
                                    };
                                };
                                data(): {
                                    visible: any;
                                };
                                watch: {
                                    modelValue: {
                                        immediate: boolean;
                                        handler(val: any): void;
                                    };
                                    visible(val: any): void;
                                };
                                methods: {
                                    createPopper(): void;
                                    updatePopper(): void;
                                    doDestroy(): void;
                                };
                                updated(): void;
                                beforeUnmount(): void;
                            })[];
                            emits: string[];
                            directives: {
                                clickOutside: {
                                    beforeMount(el: any, binding: any, vnode: any): void;
                                    unmounted(el: any, binding: any): void;
                                };
                            };
                            components: {
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
                            props: {
                                trigger: {
                                    validator(value: any): boolean;
                                    default: string;
                                };
                                placement: {
                                    validator(value: any): boolean;
                                    default: string;
                                };
                                title: {
                                    type: (StringConstructor | NumberConstructor)[];
                                };
                                content: {
                                    type: (StringConstructor | NumberConstructor)[];
                                    default: string;
                                };
                                width: {
                                    type: (StringConstructor | NumberConstructor)[];
                                };
                                confirm: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                                okText: {
                                    type: StringConstructor;
                                };
                                cancelText: {
                                    type: StringConstructor;
                                };
                                transfer: {
                                    type: BooleanConstructor;
                                    default(): any;
                                };
                                popperClass: {
                                    type: StringConstructor;
                                };
                                wordWrap: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                                padding: {
                                    type: StringConstructor;
                                };
                                disabled: {
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
                            };
                            data(): {
                                prefixCls: string;
                                showTitle: boolean;
                                isInput: boolean;
                                disableCloseUnderTransfer: boolean;
                                tIndex: any;
                            };
                            computed: {
                                classes(): (string | {
                                    [x: string]: any;
                                })[];
                                popperClasses(): (string | {
                                    [x: string]: any;
                                    [x: number]: any;
                                })[];
                                styles(): {
                                    width: string;
                                    'z-index': any;
                                };
                                localeOkText(): any;
                                localeCancelText(): any;
                                contentClasses(): (string | {
                                    [x: string]: any;
                                })[];
                                contentPaddingStyle(): {
                                    padding: any;
                                };
                            };
                            methods: {
                                handleClick(): boolean;
                                handleTransferClick(): void;
                                handleClose(): boolean;
                                handleFocus(fromInput?: boolean): boolean;
                                handleBlur(fromInput?: boolean): boolean;
                                handleMouseenter(): boolean;
                                handleMouseleave(): boolean;
                                cancel(): void;
                                ok(): void;
                                getInputChildren(): any;
                                handleGetIndex(): number;
                                handleIndexIncrease(): void;
                            };
                            mounted(): void;
                            beforeUnmount(): void;
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
                        renderHeader: {
                            name: string;
                            props: {
                                render: FunctionConstructor;
                                column: ObjectConstructor;
                                index: NumberConstructor;
                            };
                            render(): any;
                        };
                    };
                    props: {
                        prefixCls: StringConstructor;
                        styleObject: ObjectConstructor;
                        columns: ArrayConstructor;
                        objData: ObjectConstructor;
                        data: ArrayConstructor;
                        columnsWidth: ObjectConstructor;
                        fixed: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        columnRows: ArrayConstructor;
                        fixedColumnRows: ArrayConstructor;
                    };
                    data(): {
                        draggingColumn: any;
                        dragging: boolean;
                        dragState: {};
                    };
                    computed: {
                        styles(): any;
                        isSelectAll(): boolean;
                        headRows(): any;
                        isSelectDisabled(): boolean;
                    };
                    methods: {
                        cellClasses(column: any): (string | {
                            [x: string]: boolean;
                        })[];
                        scrollBarCellClass(): {
                            [x: string]: boolean;
                        }[];
                        itemClasses(column: any, item: any): (string | {
                            [x: string]: boolean;
                        })[];
                        itemAllClasses(column: any): (string | {
                            [x: string]: boolean;
                        })[];
                        selectAll(): void;
                        handleSort(index: any, type: any): void;
                        handleSortByHead(index: any): void;
                        handleFilter(index: any): void;
                        handleSelect(index: any, value: any): void;
                        handleReset(index: any): void;
                        handleFilterHide(index: any): void;
                        getColumn(rowIndex: any, index: any): any;
                        handleMouseDown(column: any, event: any): void;
                        handleMouseMove(column: any, event: any): void;
                        handleMouseOut(): void;
                        isChildrenSelected(objData: any, isSelectAll: any): any;
                        isChildrenAllDisabledAndUnSelected(objData: any, isAllDisabledAndUnSelected: any): any;
                        isChildrenDisabled(objData: any, isSelectDisabled: any): any;
                    };
                };
                tableBody: {
                    name: string;
                    mixins: {
                        methods: {
                            alignCls(column: any, row?: {}): (string | {
                                [x: string]: any;
                            })[];
                            isPopperShow(column: any): boolean;
                            setCellWidth(column: any): string;
                        };
                    }[];
                    components: {
                        TableCell: {
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
                                TableExpand: {
                                    name: string;
                                    props: {
                                        row: ObjectConstructor;
                                        render: FunctionConstructor;
                                        index: NumberConstructor;
                                        column: {
                                            type: ObjectConstructor;
                                            default: any;
                                        };
                                    };
                                    render(): any;
                                };
                                TableSlot: {
                                    name: string;
                                    inject: string[];
                                    props: {
                                        row: ObjectConstructor;
                                        index: NumberConstructor;
                                        column: {
                                            type: ObjectConstructor;
                                            default: any;
                                        };
                                        display: {
                                            type: StringConstructor;
                                            default: string;
                                        };
                                    };
                                    render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                        [key: string]: any;
                                    }>;
                                };
                                Tooltip: {
                                    name: string;
                                    mixins: {
                                        emits: string[];
                                        props: {
                                            eventsEnabled: {
                                                type: BooleanConstructor;
                                                default: boolean;
                                            };
                                            placement: {
                                                type: StringConstructor;
                                                default: string;
                                            };
                                            boundariesPadding: {
                                                type: NumberConstructor;
                                                default: number;
                                            };
                                            reference: ObjectConstructor;
                                            popper: ObjectConstructor;
                                            offset: {
                                                default: number;
                                            };
                                            modelValue: {
                                                type: BooleanConstructor;
                                                default: boolean;
                                            };
                                            transition: StringConstructor;
                                            options: {
                                                type: ObjectConstructor;
                                                default(): {
                                                    modifiers: {
                                                        computeStyle: {
                                                            gpuAcceleration: boolean;
                                                        };
                                                        preventOverflow: {
                                                            boundariesElement: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        data(): {
                                            visible: any;
                                        };
                                        watch: {
                                            modelValue: {
                                                immediate: boolean;
                                                handler(val: any): void;
                                            };
                                            visible(val: any): void;
                                        };
                                        methods: {
                                            createPopper(): void;
                                            updatePopper(): void;
                                            doDestroy(): void;
                                        };
                                        updated(): void;
                                        beforeUnmount(): void;
                                    }[];
                                    props: {
                                        placement: {
                                            validator(value: any): boolean;
                                            default: string;
                                        };
                                        content: {
                                            type: (StringConstructor | NumberConstructor)[];
                                            default: string;
                                        };
                                        delay: {
                                            type: NumberConstructor;
                                            default: number;
                                        };
                                        disabled: {
                                            type: BooleanConstructor;
                                            default: boolean;
                                        };
                                        controlled: {
                                            type: BooleanConstructor;
                                            default: boolean;
                                        };
                                        always: {
                                            type: BooleanConstructor;
                                            default: boolean;
                                        };
                                        transfer: {
                                            type: BooleanConstructor;
                                            default(): any;
                                        };
                                        theme: {
                                            validator(value: any): boolean;
                                            default: string;
                                        };
                                        maxWidth: {
                                            type: (StringConstructor | NumberConstructor)[];
                                        };
                                        transferClassName: {
                                            type: StringConstructor;
                                        };
                                    };
                                    data(): {
                                        prefixCls: string;
                                        tIndex: any;
                                    };
                                    computed: {
                                        innerStyles(): {
                                            'max-width': string;
                                        };
                                        innerClasses(): (string | {
                                            [x: string]: boolean;
                                        })[];
                                        dropStyles(): {
                                            'z-index': any;
                                        };
                                        dropdownCls(): (string | {
                                            [x: string]: any;
                                            [x: number]: any;
                                        })[];
                                    };
                                    watch: {
                                        content(): void;
                                    };
                                    methods: {
                                        handleShowPopper(): void;
                                        handleClosePopper(): void;
                                        handleGetIndex(): number;
                                    };
                                    mounted(): void;
                                };
                            };
                            inject: string[];
                            props: {
                                prefixCls: StringConstructor;
                                row: ObjectConstructor;
                                column: ObjectConstructor;
                                naturalIndex: NumberConstructor;
                                index: NumberConstructor;
                                checked: BooleanConstructor;
                                disabled: BooleanConstructor;
                                expanded: BooleanConstructor;
                                fixed: {
                                    type: (StringConstructor | BooleanConstructor)[];
                                    default: boolean;
                                };
                                treeNode: BooleanConstructor;
                                treeLevel: {
                                    type: NumberConstructor;
                                    default: number;
                                };
                            };
                            data(): {
                                renderType: string;
                                uid: number;
                                context: any;
                                showTooltip: boolean;
                            };
                            computed: {
                                classes(): (string | {
                                    [x: string]: any;
                                })[];
                                expandCls(): (string | {
                                    [x: string]: any;
                                })[];
                                showChildren(): boolean;
                                showTreeNode(): boolean;
                                showLevel(): boolean;
                                treeLevelStyle(): {
                                    'padding-left': string;
                                };
                                childrenExpand(): any;
                                childrenLoading(): any;
                            };
                            methods: {
                                toggleSelect(): void;
                                toggleExpand(): void;
                                handleClick(): void;
                                handleTooltipIn(): void;
                                handleToggleTree(): void;
                            };
                            created(): void;
                        };
                        Expand: {
                            name: string;
                            props: {
                                row: ObjectConstructor;
                                render: FunctionConstructor;
                                index: NumberConstructor;
                                column: {
                                    type: ObjectConstructor;
                                    default: any;
                                };
                            };
                            render(): any;
                        };
                        TableTr: {
                            props: {
                                row: ObjectConstructor;
                                prefixCls: StringConstructor;
                                draggable: BooleanConstructor;
                                isChildren: BooleanConstructor;
                            };
                            computed: {
                                objData(): any;
                            };
                            methods: {
                                onDrag(e: any, index: any): void;
                                onDrop(e: any, index: any): void;
                                allowDrop(e: any): void;
                                rowClasses(_index: any): any[];
                                rowClsName(_index: any): any;
                            };
                        };
                    };
                    props: {
                        prefixCls: StringConstructor;
                        styleObject: ObjectConstructor;
                        columns: ArrayConstructor;
                        data: ArrayConstructor;
                        objData: ObjectConstructor;
                        columnsWidth: ObjectConstructor;
                        fixed: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        draggable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        rowKey: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                    };
                    computed: {
                        expandRender(): () => string;
                    };
                    methods: {
                        rowChecked(_index: any): any;
                        rowDisabled(_index: any): any;
                        rowExpanded(_index: any): any;
                        rowStatusByRowKey(type: any, rowKey: any): any;
                        handleMouseIn(_index: any, event: any, rowKey: any): void;
                        handleMouseOut(_index: any, event: any, rowKey: any): void;
                        clickCurrentRow(_index: any, event: any, rowKey: any): void;
                        dblclickCurrentRow(_index: any, event: any, rowKey: any): void;
                        clickCell(row: any, column: any, key: any, event: any): void;
                        contextmenuCurrentRow(_index: any, event: any, rowKey: any): void;
                        selectStartCurrentRow(): void;
                        getSpan(row: any, column: any, rowIndex: any, columnIndex: any): {
                            rowspan: number;
                            colspan: number;
                        } | {
                            rowspan?: undefined;
                            colspan?: undefined;
                        };
                        showWithSpan(row: any, column: any, rowIndex: any, columnIndex: any): boolean;
                        isTrShow(rowKey: any): any;
                        getTrStatus(rowKey: any, data: any, parentStatus: any): any;
                        getLevel(rowKey: any): any;
                        getChildLevel(data: any, rowKey: any, level: any): any;
                        getChildNode(h: any, data: any, nodes: any): any;
                    };
                    render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>;
                };
                tableSummary: {
                    name: string;
                    mixins: {
                        methods: {
                            alignCls(column: any, row?: {}): (string | {
                                [x: string]: any;
                            })[];
                            isPopperShow(column: any): boolean;
                            setCellWidth(column: any): string;
                        };
                    }[];
                    props: {
                        prefixCls: StringConstructor;
                        styleObject: ObjectConstructor;
                        columns: ArrayConstructor;
                        data: ObjectConstructor;
                        columnsWidth: ObjectConstructor;
                        fixed: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                    };
                    methods: {
                        cellCls(column: any): {
                            "ivu-table-hidden": boolean;
                        }[];
                    };
                };
                Spin: {
                    name: string;
                    mixins: {
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
                    }[];
                    props: {
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        fix: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        fullscreen: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        show: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        showText: boolean;
                        visible: boolean;
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                        mainClasses(): string;
                        dotClasses(): string;
                        textClasses(): string;
                        fullscreenVisible(): any;
                    };
                    watch: {
                        visible(val: any): void;
                    };
                    mounted(): void;
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
            inject: {
                TabsInstance: {
                    default: any;
                };
                ModalInstance: {
                    default: any;
                };
                DrawerInstance: {
                    default: any;
                };
            };
            props: {
                data: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                columns: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                maxHeight: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                stripe: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                border: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showHeader: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                highlightRow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                rowClassName: {
                    type: FunctionConstructor;
                    default(): string;
                };
                context: {
                    type: ObjectConstructor;
                };
                noDataText: {
                    type: StringConstructor;
                };
                noFilteredDataText: {
                    type: StringConstructor;
                };
                disabledHover: {
                    type: BooleanConstructor;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                tooltipTheme: {
                    validator(value: any): boolean;
                    default: string;
                };
                tooltipMaxWidth: {
                    type: NumberConstructor;
                    default: number;
                };
                rowKey: {
                    type: (StringConstructor | BooleanConstructor)[];
                    default: boolean;
                };
                spanMethod: {
                    type: FunctionConstructor;
                };
                showSummary: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                summaryMethod: {
                    type: FunctionConstructor;
                };
                sumText: {
                    type: StringConstructor;
                };
                indentSize: {
                    type: NumberConstructor;
                    default: number;
                };
                loadData: {
                    type: FunctionConstructor;
                };
                updateShowChildren: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contextMenu: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showContextMenu: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                fixedShadow: {
                    validator(value: any): boolean;
                    default: string;
                };
                autoCloseContextmenu: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                ready: boolean;
                tableWidth: number;
                columnsWidth: {};
                prefixCls: string;
                compiledUids: any[];
                objData: any;
                rebuildData: any[];
                cloneColumns: any;
                columnRows: any;
                leftFixedColumnRows: any;
                rightFixedColumnRows: any;
                allColumns: any[];
                showSlotHeader: boolean;
                showSlotFooter: boolean;
                bodyHeight: number;
                scrollBarWidth: any;
                currentContext: any;
                cloneData: any;
                showVerticalScrollBar: boolean;
                showHorizontalScrollBar: boolean;
                headerWidth: number;
                headerHeight: number;
                showResizeLine: boolean;
                contextMenuVisible: boolean;
                contextMenuStyles: {
                    top: number;
                    left: number;
                };
                scrollOnTheLeft: boolean;
                scrollOnTheRight: boolean;
                id: string;
            };
            computed: {
                localeNoDataText(): any;
                localeNoFilteredDataText(): any;
                localeSumText(): any;
                wrapClasses(): (string | {
                    [x: string]: any;
                })[];
                classes(): (string | {
                    [x: string]: any;
                })[];
                fixedTableClasses(): (string | {
                    [x: string]: boolean;
                })[];
                fixedRightTableClasses(): (string | {
                    [x: string]: boolean;
                })[];
                fixedHeaderClasses(): (string | {
                    [x: string]: boolean;
                })[];
                styles(): {
                    height: string;
                    maxHeight: string;
                    width: string;
                };
                tableStyle(): {
                    width: string;
                };
                tableHeaderStyle(): {
                    width: string;
                };
                fixedTableStyle(): {
                    width: string;
                };
                fixedRightTableStyle(): {
                    width: string;
                    right: string;
                };
                fixedRightHeaderStyle(): {
                    width: string;
                    height: string;
                };
                bodyStyle(): {
                    height: string;
                    maxHeight: string;
                };
                fixedBodyStyle(): {
                    height: string;
                    maxHeight: string;
                };
                leftFixedColumns(): any[];
                rightFixedColumns(): any[];
                isLeftFixed(): any;
                isRightFixed(): any;
                summaryData(): {};
            };
            methods: {
                rowClsName(index: any): any;
                handleResize(): void;
                handleMouseIn(_index: any, rowKey: any): void;
                handleMouseOut(_index: any, rowKey: any): void;
                handleCurrentRow(type: any, _index: any, rowKey: any): void;
                handleResetChildrenRow(objData: any): any;
                highlightCurrentRow(_index: any, rowKey: any): void;
                clearCurrentRow(): void;
                clickCurrentRow(_index: any, rowKey: any): void;
                dblclickCurrentRow(_index: any, rowKey: any): void;
                contextmenuCurrentRow(_index: any, rowKey: any, event: any): void;
                getSelection(): any;
                getSelectionChildrenRowKeys(objData: any, selectionRowKeys: any): any;
                getSelectionChildren(data: any, selection: any, selectionRowKeys: any): any;
                toggleSelect(_index: any, rowKey: any): void;
                toggleExpand(_index: any): void;
                toggleTree(rowKey: any): void;
                /**
                 * @description 当修改某内置属性，如 _isShowChildren 时，因当将原 data 对应 _showChildren 也修改，否则修改 data 时，状态会重置
                 * @param rowKey rowKey
                 * @param key 原数据对应的字段
                 * @param value 修改的值
                 * */
                updateDataStatus(rowKey: any, key: any, value: any): void;
                getDataByRowKey(rowKey: any, objData?: any): any;
                getChildrenByRowKey(rowKey: any, objData: any): any;
                getBaseDataByRowKey(rowKey: any, sourceData?: any): any;
                getChildrenDataByRowKey(rowKey: any, cloneData: any): any;
                selectAll(status: any): void;
                selectAllChildren(data: any, status: any): void;
                fixedHeader(): void;
                fixedBody(): void;
                hideColumnFilter(): void;
                handleBodyScroll(event: any): void;
                handleFixedMousewheel(event: any): void;
                handleMouseWheel(event: any): void;
                sortData(data: any, type: any, index: any): any;
                handleSort(_index: any, type: any): void;
                handleFilterHide(index: any): void;
                filterData(data: any, column: any): any;
                filterOtherData(data: any, index: any): any;
                handleFilter(index: any): void;
                /**
                 * #2832
                 * 应该区分当前表头的 column 是左固定还是右固定
                 * 否则执行到 $parent 时，方法的 index 与 cloneColumns 的 index 是不对应的
                 * 左固定和右固定，要区分对待
                 * 所以，此方法用来获取正确的 index
                 * */
                GetOriginalIndex(_index: any): any;
                handleFilterSelect(_index: any, value: any): void;
                handleFilterReset(_index: any): void;
                makeData(): any;
                makeChildrenData(data: any): any;
                makeDataWithSort(): any;
                makeDataWithFilter(): any;
                makeDataWithSortAndFilter(): any;
                makeObjBaseData(row: any): any;
                makeObjData(): {};
                makeChildrenObjData(data: any): any;
                makeColumnsId(columns: any): any;
                makeColumns(cols: any): any[];
                makeColumnRows(fixedType: any, cols: any): any[][];
                exportCsv(params: any): void;
                dragAndDrop(a: any, b: any): void;
                handleClickContextMenuOutside(): void;
                handleOnVisibleChange(val: any): void;
                addTable(instance: any): void;
                removeTable(instance: any): void;
                closeContextMenu(): void;
                handleClickDropdownItem(): void;
            };
            created(): void;
            mounted(): void;
            beforeUnmount(): void;
            watch: {
                data: {
                    handler(): void;
                    deep: boolean;
                };
                columns: {
                    handler(): void;
                    deep: boolean;
                };
                height(): void;
                maxHeight(): void;
                showHorizontalScrollBar(): void;
                showVerticalScrollBar(): void;
            };
        };
    };
    function provide(): {
        TableInstance: {
            name: string;
            mixins: {
                methods: {
                    t(...args: any[]): any;
                };
            }[];
            components: {
                tableHead: {
                    name: string;
                    mixins: ({
                        methods: {
                            t(...args: any[]): any;
                        };
                    } | {
                        methods: {
                            alignCls(column: any, row?: {}): (string | {
                                [x: string]: any;
                            })[];
                            isPopperShow(column: any): boolean;
                            setCellWidth(column: any): string;
                        };
                    })[];
                    components: {
                        CheckboxGroup: {
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
                            provide(): {
                                CheckboxGroupInstance: any;
                            };
                            props: {
                                modelValue: {
                                    type: ArrayConstructor;
                                    default(): any[];
                                };
                                size: {
                                    validator(value: any): boolean;
                                    default(): any;
                                };
                            };
                            data(): {
                                currentValue: any;
                                children: any[];
                            };
                            computed: {
                                classes(): (string | {
                                    [x: string]: boolean;
                                })[];
                            };
                            methods: {
                                change(data: any): void;
                            };
                        };
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
                        Poptip: {
                            name: string;
                            mixins: ({
                                methods: {
                                    t(...args: any[]): any;
                                };
                            } | {
                                emits: string[];
                                props: {
                                    eventsEnabled: {
                                        type: BooleanConstructor;
                                        default: boolean;
                                    };
                                    placement: {
                                        type: StringConstructor;
                                        default: string;
                                    };
                                    boundariesPadding: {
                                        type: NumberConstructor;
                                        default: number;
                                    };
                                    reference: ObjectConstructor;
                                    popper: ObjectConstructor;
                                    offset: {
                                        default: number;
                                    };
                                    modelValue: {
                                        type: BooleanConstructor;
                                        default: boolean;
                                    };
                                    transition: StringConstructor;
                                    options: {
                                        type: ObjectConstructor;
                                        default(): {
                                            modifiers: {
                                                computeStyle: {
                                                    gpuAcceleration: boolean;
                                                };
                                                preventOverflow: {
                                                    boundariesElement: string;
                                                };
                                            };
                                        };
                                    };
                                };
                                data(): {
                                    visible: any;
                                };
                                watch: {
                                    modelValue: {
                                        immediate: boolean;
                                        handler(val: any): void;
                                    };
                                    visible(val: any): void;
                                };
                                methods: {
                                    createPopper(): void;
                                    updatePopper(): void;
                                    doDestroy(): void;
                                };
                                updated(): void;
                                beforeUnmount(): void;
                            })[];
                            emits: string[];
                            directives: {
                                clickOutside: {
                                    beforeMount(el: any, binding: any, vnode: any): void;
                                    unmounted(el: any, binding: any): void;
                                };
                            };
                            components: {
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
                            props: {
                                trigger: {
                                    validator(value: any): boolean;
                                    default: string;
                                };
                                placement: {
                                    validator(value: any): boolean;
                                    default: string;
                                };
                                title: {
                                    type: (StringConstructor | NumberConstructor)[];
                                };
                                content: {
                                    type: (StringConstructor | NumberConstructor)[];
                                    default: string;
                                };
                                width: {
                                    type: (StringConstructor | NumberConstructor)[];
                                };
                                confirm: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                                okText: {
                                    type: StringConstructor;
                                };
                                cancelText: {
                                    type: StringConstructor;
                                };
                                transfer: {
                                    type: BooleanConstructor;
                                    default(): any;
                                };
                                popperClass: {
                                    type: StringConstructor;
                                };
                                wordWrap: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                                padding: {
                                    type: StringConstructor;
                                };
                                disabled: {
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
                            };
                            data(): {
                                prefixCls: string;
                                showTitle: boolean;
                                isInput: boolean;
                                disableCloseUnderTransfer: boolean;
                                tIndex: any;
                            };
                            computed: {
                                classes(): (string | {
                                    [x: string]: any;
                                })[];
                                popperClasses(): (string | {
                                    [x: string]: any;
                                    [x: number]: any;
                                })[];
                                styles(): {
                                    width: string;
                                    'z-index': any;
                                };
                                localeOkText(): any;
                                localeCancelText(): any;
                                contentClasses(): (string | {
                                    [x: string]: any;
                                })[];
                                contentPaddingStyle(): {
                                    padding: any;
                                };
                            };
                            methods: {
                                handleClick(): boolean;
                                handleTransferClick(): void;
                                handleClose(): boolean;
                                handleFocus(fromInput?: boolean): boolean;
                                handleBlur(fromInput?: boolean): boolean;
                                handleMouseenter(): boolean;
                                handleMouseleave(): boolean;
                                cancel(): void;
                                ok(): void;
                                getInputChildren(): any;
                                handleGetIndex(): number;
                                handleIndexIncrease(): void;
                            };
                            mounted(): void;
                            beforeUnmount(): void;
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
                        renderHeader: {
                            name: string;
                            props: {
                                render: FunctionConstructor;
                                column: ObjectConstructor;
                                index: NumberConstructor;
                            };
                            render(): any;
                        };
                    };
                    props: {
                        prefixCls: StringConstructor;
                        styleObject: ObjectConstructor;
                        columns: ArrayConstructor;
                        objData: ObjectConstructor;
                        data: ArrayConstructor;
                        columnsWidth: ObjectConstructor;
                        fixed: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        columnRows: ArrayConstructor;
                        fixedColumnRows: ArrayConstructor;
                    };
                    data(): {
                        draggingColumn: any;
                        dragging: boolean;
                        dragState: {};
                    };
                    computed: {
                        styles(): any;
                        isSelectAll(): boolean;
                        headRows(): any;
                        isSelectDisabled(): boolean;
                    };
                    methods: {
                        cellClasses(column: any): (string | {
                            [x: string]: boolean;
                        })[];
                        scrollBarCellClass(): {
                            [x: string]: boolean;
                        }[];
                        itemClasses(column: any, item: any): (string | {
                            [x: string]: boolean;
                        })[];
                        itemAllClasses(column: any): (string | {
                            [x: string]: boolean;
                        })[];
                        selectAll(): void;
                        handleSort(index: any, type: any): void;
                        handleSortByHead(index: any): void;
                        handleFilter(index: any): void;
                        handleSelect(index: any, value: any): void;
                        handleReset(index: any): void;
                        handleFilterHide(index: any): void;
                        getColumn(rowIndex: any, index: any): any;
                        handleMouseDown(column: any, event: any): void;
                        handleMouseMove(column: any, event: any): void;
                        handleMouseOut(): void;
                        isChildrenSelected(objData: any, isSelectAll: any): any;
                        isChildrenAllDisabledAndUnSelected(objData: any, isAllDisabledAndUnSelected: any): any;
                        isChildrenDisabled(objData: any, isSelectDisabled: any): any;
                    };
                };
                tableBody: {
                    name: string;
                    mixins: {
                        methods: {
                            alignCls(column: any, row?: {}): (string | {
                                [x: string]: any;
                            })[];
                            isPopperShow(column: any): boolean;
                            setCellWidth(column: any): string;
                        };
                    }[];
                    components: {
                        TableCell: {
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
                                TableExpand: {
                                    name: string;
                                    props: {
                                        row: ObjectConstructor;
                                        render: FunctionConstructor;
                                        index: NumberConstructor;
                                        column: {
                                            type: ObjectConstructor;
                                            default: any;
                                        };
                                    };
                                    render(): any;
                                };
                                TableSlot: {
                                    name: string;
                                    inject: string[];
                                    props: {
                                        row: ObjectConstructor;
                                        index: NumberConstructor;
                                        column: {
                                            type: ObjectConstructor;
                                            default: any;
                                        };
                                        display: {
                                            type: StringConstructor;
                                            default: string;
                                        };
                                    };
                                    render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                                        [key: string]: any;
                                    }>;
                                };
                                Tooltip: {
                                    name: string;
                                    mixins: {
                                        emits: string[];
                                        props: {
                                            eventsEnabled: {
                                                type: BooleanConstructor;
                                                default: boolean;
                                            };
                                            placement: {
                                                type: StringConstructor;
                                                default: string;
                                            };
                                            boundariesPadding: {
                                                type: NumberConstructor;
                                                default: number;
                                            };
                                            reference: ObjectConstructor;
                                            popper: ObjectConstructor;
                                            offset: {
                                                default: number;
                                            };
                                            modelValue: {
                                                type: BooleanConstructor;
                                                default: boolean;
                                            };
                                            transition: StringConstructor;
                                            options: {
                                                type: ObjectConstructor;
                                                default(): {
                                                    modifiers: {
                                                        computeStyle: {
                                                            gpuAcceleration: boolean;
                                                        };
                                                        preventOverflow: {
                                                            boundariesElement: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        data(): {
                                            visible: any;
                                        };
                                        watch: {
                                            modelValue: {
                                                immediate: boolean;
                                                handler(val: any): void;
                                            };
                                            visible(val: any): void;
                                        };
                                        methods: {
                                            createPopper(): void;
                                            updatePopper(): void;
                                            doDestroy(): void;
                                        };
                                        updated(): void;
                                        beforeUnmount(): void;
                                    }[];
                                    props: {
                                        placement: {
                                            validator(value: any): boolean;
                                            default: string;
                                        };
                                        content: {
                                            type: (StringConstructor | NumberConstructor)[];
                                            default: string;
                                        };
                                        delay: {
                                            type: NumberConstructor;
                                            default: number;
                                        };
                                        disabled: {
                                            type: BooleanConstructor;
                                            default: boolean;
                                        };
                                        controlled: {
                                            type: BooleanConstructor;
                                            default: boolean;
                                        };
                                        always: {
                                            type: BooleanConstructor;
                                            default: boolean;
                                        };
                                        transfer: {
                                            type: BooleanConstructor;
                                            default(): any;
                                        };
                                        theme: {
                                            validator(value: any): boolean;
                                            default: string;
                                        };
                                        maxWidth: {
                                            type: (StringConstructor | NumberConstructor)[];
                                        };
                                        transferClassName: {
                                            type: StringConstructor;
                                        };
                                    };
                                    data(): {
                                        prefixCls: string;
                                        tIndex: any;
                                    };
                                    computed: {
                                        innerStyles(): {
                                            'max-width': string;
                                        };
                                        innerClasses(): (string | {
                                            [x: string]: boolean;
                                        })[];
                                        dropStyles(): {
                                            'z-index': any;
                                        };
                                        dropdownCls(): (string | {
                                            [x: string]: any;
                                            [x: number]: any;
                                        })[];
                                    };
                                    watch: {
                                        content(): void;
                                    };
                                    methods: {
                                        handleShowPopper(): void;
                                        handleClosePopper(): void;
                                        handleGetIndex(): number;
                                    };
                                    mounted(): void;
                                };
                            };
                            inject: string[];
                            props: {
                                prefixCls: StringConstructor;
                                row: ObjectConstructor;
                                column: ObjectConstructor;
                                naturalIndex: NumberConstructor;
                                index: NumberConstructor;
                                checked: BooleanConstructor;
                                disabled: BooleanConstructor;
                                expanded: BooleanConstructor;
                                fixed: {
                                    type: (StringConstructor | BooleanConstructor)[];
                                    default: boolean;
                                };
                                treeNode: BooleanConstructor;
                                treeLevel: {
                                    type: NumberConstructor;
                                    default: number;
                                };
                            };
                            data(): {
                                renderType: string;
                                uid: number;
                                context: any;
                                showTooltip: boolean;
                            };
                            computed: {
                                classes(): (string | {
                                    [x: string]: any;
                                })[];
                                expandCls(): (string | {
                                    [x: string]: any;
                                })[];
                                showChildren(): boolean;
                                showTreeNode(): boolean;
                                showLevel(): boolean;
                                treeLevelStyle(): {
                                    'padding-left': string;
                                };
                                childrenExpand(): any;
                                childrenLoading(): any;
                            };
                            methods: {
                                toggleSelect(): void;
                                toggleExpand(): void;
                                handleClick(): void;
                                handleTooltipIn(): void;
                                handleToggleTree(): void;
                            };
                            created(): void;
                        };
                        Expand: {
                            name: string;
                            props: {
                                row: ObjectConstructor;
                                render: FunctionConstructor;
                                index: NumberConstructor;
                                column: {
                                    type: ObjectConstructor;
                                    default: any;
                                };
                            };
                            render(): any;
                        };
                        TableTr: {
                            props: {
                                row: ObjectConstructor;
                                prefixCls: StringConstructor;
                                draggable: BooleanConstructor;
                                isChildren: BooleanConstructor;
                            };
                            computed: {
                                objData(): any;
                            };
                            methods: {
                                onDrag(e: any, index: any): void;
                                onDrop(e: any, index: any): void;
                                allowDrop(e: any): void;
                                rowClasses(_index: any): any[];
                                rowClsName(_index: any): any;
                            };
                        };
                    };
                    props: {
                        prefixCls: StringConstructor;
                        styleObject: ObjectConstructor;
                        columns: ArrayConstructor;
                        data: ArrayConstructor;
                        objData: ObjectConstructor;
                        columnsWidth: ObjectConstructor;
                        fixed: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                        draggable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        rowKey: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                    };
                    computed: {
                        expandRender(): () => string;
                    };
                    methods: {
                        rowChecked(_index: any): any;
                        rowDisabled(_index: any): any;
                        rowExpanded(_index: any): any;
                        rowStatusByRowKey(type: any, rowKey: any): any;
                        handleMouseIn(_index: any, event: any, rowKey: any): void;
                        handleMouseOut(_index: any, event: any, rowKey: any): void;
                        clickCurrentRow(_index: any, event: any, rowKey: any): void;
                        dblclickCurrentRow(_index: any, event: any, rowKey: any): void;
                        clickCell(row: any, column: any, key: any, event: any): void;
                        contextmenuCurrentRow(_index: any, event: any, rowKey: any): void;
                        selectStartCurrentRow(): void;
                        getSpan(row: any, column: any, rowIndex: any, columnIndex: any): {
                            rowspan: number;
                            colspan: number;
                        } | {
                            rowspan?: undefined;
                            colspan?: undefined;
                        };
                        showWithSpan(row: any, column: any, rowIndex: any, columnIndex: any): boolean;
                        isTrShow(rowKey: any): any;
                        getTrStatus(rowKey: any, data: any, parentStatus: any): any;
                        getLevel(rowKey: any): any;
                        getChildLevel(data: any, rowKey: any, level: any): any;
                        getChildNode(h: any, data: any, nodes: any): any;
                    };
                    render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                        [key: string]: any;
                    }>;
                };
                tableSummary: {
                    name: string;
                    mixins: {
                        methods: {
                            alignCls(column: any, row?: {}): (string | {
                                [x: string]: any;
                            })[];
                            isPopperShow(column: any): boolean;
                            setCellWidth(column: any): string;
                        };
                    }[];
                    props: {
                        prefixCls: StringConstructor;
                        styleObject: ObjectConstructor;
                        columns: ArrayConstructor;
                        data: ObjectConstructor;
                        columnsWidth: ObjectConstructor;
                        fixed: {
                            type: (StringConstructor | BooleanConstructor)[];
                            default: boolean;
                        };
                    };
                    methods: {
                        cellCls(column: any): {
                            "ivu-table-hidden": boolean;
                        }[];
                    };
                };
                Spin: {
                    name: string;
                    mixins: {
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
                    }[];
                    props: {
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        fix: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        fullscreen: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        show: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        showText: boolean;
                        visible: boolean;
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                        mainClasses(): string;
                        dotClasses(): string;
                        textClasses(): string;
                        fullscreenVisible(): any;
                    };
                    watch: {
                        visible(val: any): void;
                    };
                    mounted(): void;
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
            inject: {
                TabsInstance: {
                    default: any;
                };
                ModalInstance: {
                    default: any;
                };
                DrawerInstance: {
                    default: any;
                };
            };
            props: {
                data: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                columns: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                width: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                maxHeight: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                stripe: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                border: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showHeader: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                highlightRow: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                rowClassName: {
                    type: FunctionConstructor;
                    default(): string;
                };
                context: {
                    type: ObjectConstructor;
                };
                noDataText: {
                    type: StringConstructor;
                };
                noFilteredDataText: {
                    type: StringConstructor;
                };
                disabledHover: {
                    type: BooleanConstructor;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                draggable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                tooltipTheme: {
                    validator(value: any): boolean;
                    default: string;
                };
                tooltipMaxWidth: {
                    type: NumberConstructor;
                    default: number;
                };
                rowKey: {
                    type: (StringConstructor | BooleanConstructor)[];
                    default: boolean;
                };
                spanMethod: {
                    type: FunctionConstructor;
                };
                showSummary: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                summaryMethod: {
                    type: FunctionConstructor;
                };
                sumText: {
                    type: StringConstructor;
                };
                indentSize: {
                    type: NumberConstructor;
                    default: number;
                };
                loadData: {
                    type: FunctionConstructor;
                };
                updateShowChildren: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contextMenu: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showContextMenu: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                fixedShadow: {
                    validator(value: any): boolean;
                    default: string;
                };
                autoCloseContextmenu: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                ready: boolean;
                tableWidth: number;
                columnsWidth: {};
                prefixCls: string;
                compiledUids: any[];
                objData: any;
                rebuildData: any[];
                cloneColumns: any;
                columnRows: any;
                leftFixedColumnRows: any;
                rightFixedColumnRows: any;
                allColumns: any[];
                showSlotHeader: boolean;
                showSlotFooter: boolean;
                bodyHeight: number;
                scrollBarWidth: any;
                currentContext: any;
                cloneData: any;
                showVerticalScrollBar: boolean;
                showHorizontalScrollBar: boolean;
                headerWidth: number;
                headerHeight: number;
                showResizeLine: boolean;
                contextMenuVisible: boolean;
                contextMenuStyles: {
                    top: number;
                    left: number;
                };
                scrollOnTheLeft: boolean;
                scrollOnTheRight: boolean;
                id: string;
            };
            computed: {
                localeNoDataText(): any;
                localeNoFilteredDataText(): any;
                localeSumText(): any;
                wrapClasses(): (string | {
                    [x: string]: any;
                })[];
                classes(): (string | {
                    [x: string]: any;
                })[];
                fixedTableClasses(): (string | {
                    [x: string]: boolean;
                })[];
                fixedRightTableClasses(): (string | {
                    [x: string]: boolean;
                })[];
                fixedHeaderClasses(): (string | {
                    [x: string]: boolean;
                })[];
                styles(): {
                    height: string;
                    maxHeight: string;
                    width: string;
                };
                tableStyle(): {
                    width: string;
                };
                tableHeaderStyle(): {
                    width: string;
                };
                fixedTableStyle(): {
                    width: string;
                };
                fixedRightTableStyle(): {
                    width: string;
                    right: string;
                };
                fixedRightHeaderStyle(): {
                    width: string;
                    height: string;
                };
                bodyStyle(): {
                    height: string;
                    maxHeight: string;
                };
                fixedBodyStyle(): {
                    height: string;
                    maxHeight: string;
                };
                leftFixedColumns(): any[];
                rightFixedColumns(): any[];
                isLeftFixed(): any;
                isRightFixed(): any;
                summaryData(): {};
            };
            methods: {
                rowClsName(index: any): any;
                handleResize(): void;
                handleMouseIn(_index: any, rowKey: any): void;
                handleMouseOut(_index: any, rowKey: any): void;
                handleCurrentRow(type: any, _index: any, rowKey: any): void;
                handleResetChildrenRow(objData: any): any;
                highlightCurrentRow(_index: any, rowKey: any): void;
                clearCurrentRow(): void;
                clickCurrentRow(_index: any, rowKey: any): void;
                dblclickCurrentRow(_index: any, rowKey: any): void;
                contextmenuCurrentRow(_index: any, rowKey: any, event: any): void;
                getSelection(): any;
                getSelectionChildrenRowKeys(objData: any, selectionRowKeys: any): any;
                getSelectionChildren(data: any, selection: any, selectionRowKeys: any): any;
                toggleSelect(_index: any, rowKey: any): void;
                toggleExpand(_index: any): void;
                toggleTree(rowKey: any): void;
                /**
                 * @description 当修改某内置属性，如 _isShowChildren 时，因当将原 data 对应 _showChildren 也修改，否则修改 data 时，状态会重置
                 * @param rowKey rowKey
                 * @param key 原数据对应的字段
                 * @param value 修改的值
                 * */
                updateDataStatus(rowKey: any, key: any, value: any): void;
                getDataByRowKey(rowKey: any, objData?: any): any;
                getChildrenByRowKey(rowKey: any, objData: any): any;
                getBaseDataByRowKey(rowKey: any, sourceData?: any): any;
                getChildrenDataByRowKey(rowKey: any, cloneData: any): any;
                selectAll(status: any): void;
                selectAllChildren(data: any, status: any): void;
                fixedHeader(): void;
                fixedBody(): void;
                hideColumnFilter(): void;
                handleBodyScroll(event: any): void;
                handleFixedMousewheel(event: any): void;
                handleMouseWheel(event: any): void;
                sortData(data: any, type: any, index: any): any;
                handleSort(_index: any, type: any): void;
                handleFilterHide(index: any): void;
                filterData(data: any, column: any): any;
                filterOtherData(data: any, index: any): any;
                handleFilter(index: any): void;
                /**
                 * #2832
                 * 应该区分当前表头的 column 是左固定还是右固定
                 * 否则执行到 $parent 时，方法的 index 与 cloneColumns 的 index 是不对应的
                 * 左固定和右固定，要区分对待
                 * 所以，此方法用来获取正确的 index
                 * */
                GetOriginalIndex(_index: any): any;
                handleFilterSelect(_index: any, value: any): void;
                handleFilterReset(_index: any): void;
                makeData(): any;
                makeChildrenData(data: any): any;
                makeDataWithSort(): any;
                makeDataWithFilter(): any;
                makeDataWithSortAndFilter(): any;
                makeObjBaseData(row: any): any;
                makeObjData(): {};
                makeChildrenObjData(data: any): any;
                makeColumnsId(columns: any): any;
                makeColumns(cols: any): any[];
                makeColumnRows(fixedType: any, cols: any): any[][];
                exportCsv(params: any): void;
                dragAndDrop(a: any, b: any): void;
                handleClickContextMenuOutside(): void;
                handleOnVisibleChange(val: any): void;
                addTable(instance: any): void;
                removeTable(instance: any): void;
                closeContextMenu(): void;
                handleClickDropdownItem(): void;
            };
            created(): void;
            mounted(): void;
            beforeUnmount(): void;
            watch: {
                data: {
                    handler(): void;
                    deep: boolean;
                };
                columns: {
                    handler(): void;
                    deep: boolean;
                };
                height(): void;
                maxHeight(): void;
                showHorizontalScrollBar(): void;
                showVerticalScrollBar(): void;
            };
        };
    };
    namespace inject {
        namespace TabsInstance {
            const _default: any;
            export { _default as default };
        }
        namespace ModalInstance {
            const _default_1: any;
            export { _default_1 as default };
        }
        namespace DrawerInstance {
            const _default_2: any;
            export { _default_2 as default };
        }
    }
    namespace props {
        namespace data {
            export const type: ArrayConstructor;
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace columns {
            const type_1: ArrayConstructor;
            export { type_1 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace width {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
        }
        namespace height {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
        }
        namespace maxHeight {
            const type_4: (StringConstructor | NumberConstructor)[];
            export { type_4 as type };
        }
        namespace stripe {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace border {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace showHeader {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace highlightRow {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        namespace rowClassName {
            const type_9: FunctionConstructor;
            export { type_9 as type };
            function _default(): string;
            function _default(): string;
            export { _default as default };
        }
        namespace context {
            const type_10: ObjectConstructor;
            export { type_10 as type };
        }
        namespace noDataText {
            const type_11: StringConstructor;
            export { type_11 as type };
        }
        namespace noFilteredDataText {
            const type_12: StringConstructor;
            export { type_12 as type };
        }
        namespace disabledHover {
            const type_13: BooleanConstructor;
            export { type_13 as type };
        }
        namespace loading {
            const type_14: BooleanConstructor;
            export { type_14 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        namespace draggable {
            const type_15: BooleanConstructor;
            export { type_15 as type };
            const _default_8: boolean;
            export { _default_8 as default };
        }
        namespace tooltipTheme {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_9: string;
            export { _default_9 as default };
        }
        namespace tooltipMaxWidth {
            const type_16: NumberConstructor;
            export { type_16 as type };
            const _default_10: number;
            export { _default_10 as default };
        }
        namespace rowKey {
            const type_17: (StringConstructor | BooleanConstructor)[];
            export { type_17 as type };
            const _default_11: boolean;
            export { _default_11 as default };
        }
        namespace spanMethod {
            const type_18: FunctionConstructor;
            export { type_18 as type };
        }
        namespace showSummary {
            const type_19: BooleanConstructor;
            export { type_19 as type };
            const _default_12: boolean;
            export { _default_12 as default };
        }
        namespace summaryMethod {
            const type_20: FunctionConstructor;
            export { type_20 as type };
        }
        namespace sumText {
            const type_21: StringConstructor;
            export { type_21 as type };
        }
        namespace indentSize {
            const type_22: NumberConstructor;
            export { type_22 as type };
            const _default_13: number;
            export { _default_13 as default };
        }
        namespace loadData {
            const type_23: FunctionConstructor;
            export { type_23 as type };
        }
        namespace updateShowChildren {
            const type_24: BooleanConstructor;
            export { type_24 as type };
            const _default_14: boolean;
            export { _default_14 as default };
        }
        namespace contextMenu {
            const type_25: BooleanConstructor;
            export { type_25 as type };
            const _default_15: boolean;
            export { _default_15 as default };
        }
        namespace showContextMenu {
            const type_26: BooleanConstructor;
            export { type_26 as type };
            const _default_16: boolean;
            export { _default_16 as default };
        }
        namespace fixedShadow {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_17: string;
            export { _default_17 as default };
        }
        namespace autoCloseContextmenu {
            const type_27: BooleanConstructor;
            export { type_27 as type };
            const _default_18: boolean;
            export { _default_18 as default };
        }
    }
    function data(): {
        ready: boolean;
        tableWidth: number;
        columnsWidth: {};
        prefixCls: string;
        compiledUids: any[];
        objData: any;
        rebuildData: any[];
        cloneColumns: any;
        columnRows: any;
        leftFixedColumnRows: any;
        rightFixedColumnRows: any;
        allColumns: any[];
        showSlotHeader: boolean;
        showSlotFooter: boolean;
        bodyHeight: number;
        scrollBarWidth: any;
        currentContext: any;
        cloneData: any;
        showVerticalScrollBar: boolean;
        showHorizontalScrollBar: boolean;
        headerWidth: number;
        headerHeight: number;
        showResizeLine: boolean;
        contextMenuVisible: boolean;
        contextMenuStyles: {
            top: number;
            left: number;
        };
        scrollOnTheLeft: boolean;
        scrollOnTheRight: boolean;
        id: string;
    };
    function data(): {
        ready: boolean;
        tableWidth: number;
        columnsWidth: {};
        prefixCls: string;
        compiledUids: any[];
        objData: any;
        rebuildData: any[];
        cloneColumns: any;
        columnRows: any;
        leftFixedColumnRows: any;
        rightFixedColumnRows: any;
        allColumns: any[];
        showSlotHeader: boolean;
        showSlotFooter: boolean;
        bodyHeight: number;
        scrollBarWidth: any;
        currentContext: any;
        cloneData: any;
        showVerticalScrollBar: boolean;
        showHorizontalScrollBar: boolean;
        headerWidth: number;
        headerHeight: number;
        showResizeLine: boolean;
        contextMenuVisible: boolean;
        contextMenuStyles: {
            top: number;
            left: number;
        };
        scrollOnTheLeft: boolean;
        scrollOnTheRight: boolean;
        id: string;
    };
    namespace computed {
        function localeNoDataText(): any;
        function localeNoDataText(): any;
        function localeNoFilteredDataText(): any;
        function localeNoFilteredDataText(): any;
        function localeSumText(): any;
        function localeSumText(): any;
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function fixedTableClasses(): (string | {
            [x: string]: boolean;
        })[];
        function fixedTableClasses(): (string | {
            [x: string]: boolean;
        })[];
        function fixedRightTableClasses(): (string | {
            [x: string]: boolean;
        })[];
        function fixedRightTableClasses(): (string | {
            [x: string]: boolean;
        })[];
        function fixedHeaderClasses(): (string | {
            [x: string]: boolean;
        })[];
        function fixedHeaderClasses(): (string | {
            [x: string]: boolean;
        })[];
        function styles(): {
            height: string;
            maxHeight: string;
            width: string;
        };
        function styles(): {
            height: string;
            maxHeight: string;
            width: string;
        };
        function tableStyle(): {
            width: string;
        };
        function tableStyle(): {
            width: string;
        };
        function tableHeaderStyle(): {
            width: string;
        };
        function tableHeaderStyle(): {
            width: string;
        };
        function fixedTableStyle(): {
            width: string;
        };
        function fixedTableStyle(): {
            width: string;
        };
        function fixedRightTableStyle(): {
            width: string;
            right: string;
        };
        function fixedRightTableStyle(): {
            width: string;
            right: string;
        };
        function fixedRightHeaderStyle(): {
            width: string;
            height: string;
        };
        function fixedRightHeaderStyle(): {
            width: string;
            height: string;
        };
        function bodyStyle(): {
            height: string;
            maxHeight: string;
        };
        function bodyStyle(): {
            height: string;
            maxHeight: string;
        };
        function fixedBodyStyle(): {
            height: string;
            maxHeight: string;
        };
        function fixedBodyStyle(): {
            height: string;
            maxHeight: string;
        };
        function leftFixedColumns(): any[];
        function leftFixedColumns(): any[];
        function rightFixedColumns(): any[];
        function rightFixedColumns(): any[];
        function isLeftFixed(): any;
        function isLeftFixed(): any;
        function isRightFixed(): any;
        function isRightFixed(): any;
        function summaryData(): {};
        function summaryData(): {};
    }
    namespace methods {
        function rowClsName(index: any): any;
        function rowClsName(index: any): any;
        function handleResize(): void;
        function handleResize(): void;
        function handleMouseIn(_index: any, rowKey: any): void;
        function handleMouseIn(_index: any, rowKey: any): void;
        function handleMouseOut(_index: any, rowKey: any): void;
        function handleMouseOut(_index: any, rowKey: any): void;
        function handleCurrentRow(type: any, _index: any, rowKey: any): void;
        function handleCurrentRow(type: any, _index: any, rowKey: any): void;
        function handleResetChildrenRow(objData: any): any;
        function handleResetChildrenRow(objData: any): any;
        function highlightCurrentRow(_index: any, rowKey: any): void;
        function highlightCurrentRow(_index: any, rowKey: any): void;
        function clearCurrentRow(): void;
        function clearCurrentRow(): void;
        function clickCurrentRow(_index: any, rowKey: any): void;
        function clickCurrentRow(_index: any, rowKey: any): void;
        function dblclickCurrentRow(_index: any, rowKey: any): void;
        function dblclickCurrentRow(_index: any, rowKey: any): void;
        function contextmenuCurrentRow(_index: any, rowKey: any, event: any): void;
        function contextmenuCurrentRow(_index: any, rowKey: any, event: any): void;
        function getSelection(): any;
        function getSelection(): any;
        function getSelectionChildrenRowKeys(objData: any, selectionRowKeys: any): any;
        function getSelectionChildrenRowKeys(objData: any, selectionRowKeys: any): any;
        function getSelectionChildren(data: any, selection: any, selectionRowKeys: any): any;
        function getSelectionChildren(data: any, selection: any, selectionRowKeys: any): any;
        function toggleSelect(_index: any, rowKey: any): void;
        function toggleSelect(_index: any, rowKey: any): void;
        function toggleExpand(_index: any): void;
        function toggleExpand(_index: any): void;
        function toggleTree(rowKey: any): void;
        function toggleTree(rowKey: any): void;
        /**
         * @description 当修改某内置属性，如 _isShowChildren 时，因当将原 data 对应 _showChildren 也修改，否则修改 data 时，状态会重置
         * @param rowKey rowKey
         * @param key 原数据对应的字段
         * @param value 修改的值
         * */
        function updateDataStatus(rowKey: any, key: any, value: any): void;
        /**
         * @description 当修改某内置属性，如 _isShowChildren 时，因当将原 data 对应 _showChildren 也修改，否则修改 data 时，状态会重置
         * @param rowKey rowKey
         * @param key 原数据对应的字段
         * @param value 修改的值
         * */
        function updateDataStatus(rowKey: any, key: any, value: any): void;
        function getDataByRowKey(rowKey: any, objData?: any): any;
        function getDataByRowKey(rowKey: any, objData?: any): any;
        function getChildrenByRowKey(rowKey: any, objData: any): any;
        function getChildrenByRowKey(rowKey: any, objData: any): any;
        function getBaseDataByRowKey(rowKey: any, sourceData?: any): any;
        function getBaseDataByRowKey(rowKey: any, sourceData?: any): any;
        function getChildrenDataByRowKey(rowKey: any, cloneData: any): any;
        function getChildrenDataByRowKey(rowKey: any, cloneData: any): any;
        function selectAll(status: any): void;
        function selectAll(status: any): void;
        function selectAllChildren(data: any, status: any): void;
        function selectAllChildren(data: any, status: any): void;
        function fixedHeader(): void;
        function fixedHeader(): void;
        function fixedBody(): void;
        function fixedBody(): void;
        function hideColumnFilter(): void;
        function hideColumnFilter(): void;
        function handleBodyScroll(event: any): void;
        function handleBodyScroll(event: any): void;
        function handleFixedMousewheel(event: any): void;
        function handleFixedMousewheel(event: any): void;
        function handleMouseWheel(event: any): void;
        function handleMouseWheel(event: any): void;
        function sortData(data: any, type: any, index: any): any;
        function sortData(data: any, type: any, index: any): any;
        function handleSort(_index: any, type: any): void;
        function handleSort(_index: any, type: any): void;
        function handleFilterHide(index: any): void;
        function handleFilterHide(index: any): void;
        function filterData(data: any, column: any): any;
        function filterData(data: any, column: any): any;
        function filterOtherData(data: any, index: any): any;
        function filterOtherData(data: any, index: any): any;
        function handleFilter(index: any): void;
        function handleFilter(index: any): void;
        /**
         * #2832
         * 应该区分当前表头的 column 是左固定还是右固定
         * 否则执行到 $parent 时，方法的 index 与 cloneColumns 的 index 是不对应的
         * 左固定和右固定，要区分对待
         * 所以，此方法用来获取正确的 index
         * */
        function GetOriginalIndex(_index: any): any;
        /**
         * #2832
         * 应该区分当前表头的 column 是左固定还是右固定
         * 否则执行到 $parent 时，方法的 index 与 cloneColumns 的 index 是不对应的
         * 左固定和右固定，要区分对待
         * 所以，此方法用来获取正确的 index
         * */
        function GetOriginalIndex(_index: any): any;
        function handleFilterSelect(_index: any, value: any): void;
        function handleFilterSelect(_index: any, value: any): void;
        function handleFilterReset(_index: any): void;
        function handleFilterReset(_index: any): void;
        function makeData(): any;
        function makeData(): any;
        function makeChildrenData(data: any): any;
        function makeChildrenData(data: any): any;
        function makeDataWithSort(): any;
        function makeDataWithSort(): any;
        function makeDataWithFilter(): any;
        function makeDataWithFilter(): any;
        function makeDataWithSortAndFilter(): any;
        function makeDataWithSortAndFilter(): any;
        function makeObjBaseData(row: any): any;
        function makeObjBaseData(row: any): any;
        function makeObjData(): {};
        function makeObjData(): {};
        function makeChildrenObjData(data: any): any;
        function makeChildrenObjData(data: any): any;
        function makeColumnsId(columns: any): any;
        function makeColumnsId(columns: any): any;
        function makeColumns(cols: any): any[];
        function makeColumns(cols: any): any[];
        function makeColumnRows(fixedType: any, cols: any): any[][];
        function makeColumnRows(fixedType: any, cols: any): any[][];
        function exportCsv(params: any): void;
        function exportCsv(params: any): void;
        function dragAndDrop(a: any, b: any): void;
        function dragAndDrop(a: any, b: any): void;
        function handleClickContextMenuOutside(): void;
        function handleClickContextMenuOutside(): void;
        function handleOnVisibleChange(val: any): void;
        function handleOnVisibleChange(val: any): void;
        function addTable(instance: any): void;
        function addTable(instance: any): void;
        function removeTable(instance: any): void;
        function removeTable(instance: any): void;
        function closeContextMenu(): void;
        function closeContextMenu(): void;
        function handleClickDropdownItem(): void;
        function handleClickDropdownItem(): void;
    }
    function created(): void;
    function created(): void;
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    namespace watch {
        export namespace data_1 {
            function handler(): void;
            function handler(): void;
            const deep: boolean;
        }
        export { data_1 as data };
        export namespace columns_1 {
            export function handler(): void;
            export function handler(): void;
            const deep_1: boolean;
            export { deep_1 as deep };
        }
        export { columns_1 as columns };
        export function height(): void;
        export function height(): void;
        export function maxHeight(): void;
        export function maxHeight(): void;
        export function showHorizontalScrollBar(): void;
        export function showHorizontalScrollBar(): void;
        export function showVerticalScrollBar(): void;
        export function showVerticalScrollBar(): void;
    }
}
export default _default;
import tableHead from "./table-head.vue";
import tableBody from "./table-body.vue";
import tableSummary from "./summary.vue";
import Spin from "../spin/spin.vue";
import Dropdown from "../dropdown/dropdown.vue";
import DropdownMenu from "../dropdown/dropdown-menu.vue";
