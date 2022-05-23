declare namespace _default {
    const name: string;
    namespace components {
        export { CalendarMonth };
        export { CalendarYear };
        export { ButtonGroup };
        export { Button };
        export { RadioGroup };
        export { Radio };
        export { Icon };
    }
    const emits: string[];
    function provide(): {
        CalendarInstance: {
            name: string;
            components: {
                CalendarMonth: any;
                CalendarYear: any;
                ButtonGroup: {
                    name: string;
                    props: {
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        shape: {
                            validator(value: any): boolean;
                        };
                        vertical: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                    };
                };
                Button: {
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
                RadioGroup: {
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
                        RadioGroupInstance: any;
                    };
                    props: {
                        modelValue: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: string;
                        };
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        type: {
                            validator(value: any): boolean;
                        };
                        vertical: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        name: {
                            type: StringConstructor;
                            default: () => string;
                        };
                        buttonStyle: {
                            validator(value: any): boolean;
                            default: string;
                        };
                    };
                    data(): {
                        currentValue: any;
                        children: any[];
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                    };
                    methods: {
                        change(data: any): void;
                    };
                    watch: {
                        modelValue(): void;
                    };
                };
                Radio: {
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
                        RadioGroupInstance: {
                            default: any;
                        };
                    };
                    props: {
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
                            type: (StringConstructor | NumberConstructor)[];
                        };
                        disabled: {
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
                        groupName: string;
                        parent: any;
                        focusWrapper: boolean;
                        focusInner: boolean;
                    };
                    computed: {
                        wrapClasses(): (string | {
                            [x: string]: any;
                        })[];
                        radioClasses(): (string | {
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
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: (StringConstructor | NumberConstructor | DateConstructor)[];
                };
                type: {
                    validator(value: any): boolean;
                    default: string;
                };
                cellHeight: {
                    type: NumberConstructor;
                    default: number;
                };
                showHeader: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                headerType: {
                    validator(value: any): boolean;
                    default: string;
                };
                firstDayOfWeek: {
                    validator(value: any): boolean;
                    default: number;
                };
                hideType: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                locale: {
                    type: ObjectConstructor;
                    default(): {
                        today: string;
                        type: {
                            month: string;
                            year: string;
                        };
                        weekDays: string[];
                        months: string[];
                    };
                };
            };
            data(): {
                currentValue: any;
                mode: any;
            };
            watch: {
                modelValue(val: any): void;
                type(val: any): void;
            };
            computed: {
                headerTitle(): any;
            };
            methods: {
                handleChangeType(type: any): void;
                handlePrev(): void;
                handleNext(): void;
                handleToday(): void;
                handleChangeDate(val: any): void;
            };
        };
    };
    function provide(): {
        CalendarInstance: {
            name: string;
            components: {
                CalendarMonth: any;
                CalendarYear: any;
                ButtonGroup: {
                    name: string;
                    props: {
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        shape: {
                            validator(value: any): boolean;
                        };
                        vertical: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                    };
                };
                Button: {
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
                RadioGroup: {
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
                        RadioGroupInstance: any;
                    };
                    props: {
                        modelValue: {
                            type: (StringConstructor | NumberConstructor)[];
                            default: string;
                        };
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        type: {
                            validator(value: any): boolean;
                        };
                        vertical: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        name: {
                            type: StringConstructor;
                            default: () => string;
                        };
                        buttonStyle: {
                            validator(value: any): boolean;
                            default: string;
                        };
                    };
                    data(): {
                        currentValue: any;
                        children: any[];
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                    };
                    methods: {
                        change(data: any): void;
                    };
                    watch: {
                        modelValue(): void;
                    };
                };
                Radio: {
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
                        RadioGroupInstance: {
                            default: any;
                        };
                    };
                    props: {
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
                            type: (StringConstructor | NumberConstructor)[];
                        };
                        disabled: {
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
                        groupName: string;
                        parent: any;
                        focusWrapper: boolean;
                        focusInner: boolean;
                    };
                    computed: {
                        wrapClasses(): (string | {
                            [x: string]: any;
                        })[];
                        radioClasses(): (string | {
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
            emits: string[];
            provide(): any;
            props: {
                modelValue: {
                    type: (StringConstructor | NumberConstructor | DateConstructor)[];
                };
                type: {
                    validator(value: any): boolean;
                    default: string;
                };
                cellHeight: {
                    type: NumberConstructor;
                    default: number;
                };
                showHeader: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                headerType: {
                    validator(value: any): boolean;
                    default: string;
                };
                firstDayOfWeek: {
                    validator(value: any): boolean;
                    default: number;
                };
                hideType: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                locale: {
                    type: ObjectConstructor;
                    default(): {
                        today: string;
                        type: {
                            month: string;
                            year: string;
                        };
                        weekDays: string[];
                        months: string[];
                    };
                };
            };
            data(): {
                currentValue: any;
                mode: any;
            };
            watch: {
                modelValue(val: any): void;
                type(val: any): void;
            };
            computed: {
                headerTitle(): any;
            };
            methods: {
                handleChangeType(type: any): void;
                handlePrev(): void;
                handleNext(): void;
                handleToday(): void;
                handleChangeDate(val: any): void;
            };
        };
    };
    namespace props {
        export namespace modelValue {
            const type: (StringConstructor | NumberConstructor | DateConstructor)[];
        }
        export namespace type_1 {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        export { type_1 as type };
        export namespace cellHeight {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        export namespace showHeader {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace headerType {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_3: string;
            export { _default_3 as default };
        }
        export namespace firstDayOfWeek {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_4: number;
            export { _default_4 as default };
        }
        export namespace hideType {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace locale {
            const type_5: ObjectConstructor;
            export { type_5 as type };
            function _default(): {
                today: string;
                type: {
                    month: string;
                    year: string;
                };
                weekDays: string[];
                months: string[];
            };
            function _default(): {
                today: string;
                type: {
                    month: string;
                    year: string;
                };
                weekDays: string[];
                months: string[];
            };
            export { _default as default };
        }
    }
    function data(): {
        currentValue: any;
        mode: any;
    };
    function data(): {
        currentValue: any;
        mode: any;
    };
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        function type(val: any): void;
        function type(val: any): void;
    }
    namespace computed {
        function headerTitle(): any;
        function headerTitle(): any;
    }
    namespace methods {
        function handleChangeType(type: any): void;
        function handleChangeType(type: any): void;
        function handlePrev(): void;
        function handlePrev(): void;
        function handleNext(): void;
        function handleNext(): void;
        function handleToday(): void;
        function handleToday(): void;
        function handleChangeDate(val: any): void;
        function handleChangeDate(val: any): void;
    }
}
export default _default;
import ButtonGroup from "../button/button-group.vue";
import Button from "../button/button.vue";
import RadioGroup from "../radio/radio-group.vue";
import Radio from "../radio/radio.vue";
import Icon from "../icon/icon.vue";
