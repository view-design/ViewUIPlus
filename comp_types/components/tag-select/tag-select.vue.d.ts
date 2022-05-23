declare namespace _default {
    const name: string;
    const mixins: {
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
    namespace components {
        export { Tag };
        export { Icon };
    }
    const emits: string[];
    function provide(): {
        TagSelectInstance: {
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
            components: {
                Tag: {
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
                    emits: string[];
                    props: {
                        closable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        checkable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        checked: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        color: {
                            type: StringConstructor;
                            default: string;
                        };
                        type: {
                            validator(value: any): boolean;
                        };
                        name: {
                            type: (StringConstructor | NumberConstructor)[];
                        };
                        size: {
                            validator(value: any): boolean;
                            default: string;
                        };
                    };
                    data(): {
                        isChecked: any;
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                        wraperStyles(): {
                            background?: undefined;
                            borderWidth?: undefined;
                            borderStyle?: undefined;
                            borderColor?: undefined;
                            color?: undefined;
                        } | {
                            background: string | (() => any);
                            borderWidth: string;
                            borderStyle: string;
                            borderColor: () => any;
                            color: () => any;
                        };
                        textClasses(): string[];
                        dotClasses(): string;
                        iconClass(): string;
                        showDot(): boolean;
                        lineColor(): any;
                        borderColor(): any;
                        dotColor(): any;
                        textColorStyle(): {
                            color?: undefined;
                        } | {
                            color: () => any;
                        };
                        bgColorStyle(): {
                            background?: undefined;
                        } | {
                            background: () => any;
                        };
                        defaultTypeColor(): any;
                    };
                    methods: {
                        close(event: any): void;
                        check(): void;
                    };
                    watch: {
                        checked(val: any): void;
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
                    type: ArrayConstructor;
                    default(): any[];
                };
                expandable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideCheckAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                locale: {
                    type: ObjectConstructor;
                    default(): {
                        collapseText: string;
                        expandText: string;
                    };
                };
            };
            data(): {
                currentValue: any;
                checkedAll: boolean;
                expand: boolean;
                tagSelectOptionList: any[];
            };
            computed: {
                classes(): {
                    'ivu-tag-select-with-expanded': any;
                    'ivu-tag-select-expanded': any;
                };
            };
            watch: {
                modelValue(val: any): void;
            };
            methods: {
                handleUpdateTags(): void;
                handleChangeTag(name: any): void;
                handleCheckAll(checked: any): void;
                handleToggleExpand(): void;
            };
            mounted(): void;
        };
    };
    function provide(): {
        TagSelectInstance: {
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
            components: {
                Tag: {
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
                    emits: string[];
                    props: {
                        closable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        checkable: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        checked: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        color: {
                            type: StringConstructor;
                            default: string;
                        };
                        type: {
                            validator(value: any): boolean;
                        };
                        name: {
                            type: (StringConstructor | NumberConstructor)[];
                        };
                        size: {
                            validator(value: any): boolean;
                            default: string;
                        };
                    };
                    data(): {
                        isChecked: any;
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                        wraperStyles(): {
                            background?: undefined;
                            borderWidth?: undefined;
                            borderStyle?: undefined;
                            borderColor?: undefined;
                            color?: undefined;
                        } | {
                            background: string | (() => any);
                            borderWidth: string;
                            borderStyle: string;
                            borderColor: () => any;
                            color: () => any;
                        };
                        textClasses(): string[];
                        dotClasses(): string;
                        iconClass(): string;
                        showDot(): boolean;
                        lineColor(): any;
                        borderColor(): any;
                        dotColor(): any;
                        textColorStyle(): {
                            color?: undefined;
                        } | {
                            color: () => any;
                        };
                        bgColorStyle(): {
                            background?: undefined;
                        } | {
                            background: () => any;
                        };
                        defaultTypeColor(): any;
                    };
                    methods: {
                        close(event: any): void;
                        check(): void;
                    };
                    watch: {
                        checked(val: any): void;
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
                    type: ArrayConstructor;
                    default(): any[];
                };
                expandable: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                hideCheckAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                locale: {
                    type: ObjectConstructor;
                    default(): {
                        collapseText: string;
                        expandText: string;
                    };
                };
            };
            data(): {
                currentValue: any;
                checkedAll: boolean;
                expand: boolean;
                tagSelectOptionList: any[];
            };
            computed: {
                classes(): {
                    'ivu-tag-select-with-expanded': any;
                    'ivu-tag-select-expanded': any;
                };
            };
            watch: {
                modelValue(val: any): void;
            };
            methods: {
                handleUpdateTags(): void;
                handleChangeTag(name: any): void;
                handleCheckAll(checked: any): void;
                handleToggleExpand(): void;
            };
            mounted(): void;
        };
    };
    namespace props {
        namespace modelValue {
            export const type: ArrayConstructor;
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace expandable {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
        namespace hideCheckAll {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace locale {
            const type_3: ObjectConstructor;
            export { type_3 as type };
            function _default(): {
                collapseText: string;
                expandText: string;
            };
            function _default(): {
                collapseText: string;
                expandText: string;
            };
            export { _default as default };
        }
    }
    function data(): {
        currentValue: any;
        checkedAll: boolean;
        expand: boolean;
        tagSelectOptionList: any[];
    };
    function data(): {
        currentValue: any;
        checkedAll: boolean;
        expand: boolean;
        tagSelectOptionList: any[];
    };
    namespace computed {
        function classes(): {
            'ivu-tag-select-with-expanded': any;
            'ivu-tag-select-expanded': any;
        };
        function classes(): {
            'ivu-tag-select-with-expanded': any;
            'ivu-tag-select-expanded': any;
        };
    }
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
    }
    namespace methods {
        function handleUpdateTags(): void;
        function handleUpdateTags(): void;
        function handleChangeTag(name: any): void;
        function handleChangeTag(name: any): void;
        function handleCheckAll(checked: any): void;
        function handleCheckAll(checked: any): void;
        function handleToggleExpand(): void;
        function handleToggleExpand(): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
import Tag from "../tag/tag.vue";
import Icon from "../icon/icon.vue";
