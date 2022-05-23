declare namespace _default {
    const name: string;
    const inject: string[];
    namespace components {
        export { TabPane };
        export { Icon };
    }
    function provide(): {
        NotificationTabInstance: {
            name: string;
            inject: string[];
            components: {
                TabPane: {
                    name: string;
                    inject: string[];
                    props: {
                        name: {
                            type: StringConstructor;
                        };
                        label: {
                            type: (FunctionConstructor | StringConstructor)[];
                            default: string;
                        };
                        icon: {
                            type: StringConstructor;
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        closable: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        tab: {
                            type: StringConstructor;
                        };
                        index: {
                            type: NumberConstructor;
                        };
                        contextMenu: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        prefixCls: string;
                        show: boolean;
                        currentName: string;
                        id: string;
                    };
                    computed: {
                        contentStyle(): {
                            visibility: string;
                        };
                    };
                    methods: {
                        updateNav(): void;
                        addPane(): void;
                        removePane(): void;
                    };
                    watch: {
                        name(val: any): void;
                        label(val: any): void;
                        icon(): void;
                        disabled(): void;
                    };
                    mounted(): void;
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
            provide(): any;
            props: {
                count: {
                    type: NumberConstructor;
                };
                title: {
                    type: StringConstructor;
                    required: boolean;
                };
                name: {
                    type: StringConstructor;
                };
                emptyText: {
                    type: StringConstructor;
                    default: string;
                };
                emptyImage: {
                    type: StringConstructor;
                    default: string;
                };
                loadedAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showLoadedAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToLoad: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showClear: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showClearIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                customLabel: (h: any) => any;
                itemCount: number;
                itemList: any[];
                id: string;
            };
            computed: {
                currentTitle(): any;
            };
            watch: {
                count: {
                    handler(): void;
                    immediate: boolean;
                };
            };
            methods: {
                handleGetTabBaseInfo(): {
                    name: any;
                    title: any;
                };
                handleGetItems(): void;
                handleItemClick(item: any): void;
                handleClear(): void;
                handleLoadMore(): void;
                handleScroll(): void;
                addTab(): void;
                removeTab(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    function provide(): {
        NotificationTabInstance: {
            name: string;
            inject: string[];
            components: {
                TabPane: {
                    name: string;
                    inject: string[];
                    props: {
                        name: {
                            type: StringConstructor;
                        };
                        label: {
                            type: (FunctionConstructor | StringConstructor)[];
                            default: string;
                        };
                        icon: {
                            type: StringConstructor;
                        };
                        disabled: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        closable: {
                            type: BooleanConstructor;
                            default: any;
                        };
                        tab: {
                            type: StringConstructor;
                        };
                        index: {
                            type: NumberConstructor;
                        };
                        contextMenu: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        prefixCls: string;
                        show: boolean;
                        currentName: string;
                        id: string;
                    };
                    computed: {
                        contentStyle(): {
                            visibility: string;
                        };
                    };
                    methods: {
                        updateNav(): void;
                        addPane(): void;
                        removePane(): void;
                    };
                    watch: {
                        name(val: any): void;
                        label(val: any): void;
                        icon(): void;
                        disabled(): void;
                    };
                    mounted(): void;
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
            provide(): any;
            props: {
                count: {
                    type: NumberConstructor;
                };
                title: {
                    type: StringConstructor;
                    required: boolean;
                };
                name: {
                    type: StringConstructor;
                };
                emptyText: {
                    type: StringConstructor;
                    default: string;
                };
                emptyImage: {
                    type: StringConstructor;
                    default: string;
                };
                loadedAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showLoadedAll: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollToLoad: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showClear: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                showClearIcon: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {
                customLabel: (h: any) => any;
                itemCount: number;
                itemList: any[];
                id: string;
            };
            computed: {
                currentTitle(): any;
            };
            watch: {
                count: {
                    handler(): void;
                    immediate: boolean;
                };
            };
            methods: {
                handleGetTabBaseInfo(): {
                    name: any;
                    title: any;
                };
                handleGetItems(): void;
                handleItemClick(item: any): void;
                handleClear(): void;
                handleLoadMore(): void;
                handleScroll(): void;
                addTab(): void;
                removeTab(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    namespace props {
        export namespace count {
            const type: NumberConstructor;
        }
        export namespace title {
            const type_1: StringConstructor;
            export { type_1 as type };
            export const required: boolean;
        }
        export namespace name_1 {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        export { name_1 as name };
        export namespace emptyText {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default: string;
            export { _default as default };
        }
        export namespace emptyImage {
            const type_4: StringConstructor;
            export { type_4 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        export namespace loadedAll {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace showLoadedAll {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace loading {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace scrollToLoad {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace showClear {
            const type_9: BooleanConstructor;
            export { type_9 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        export namespace showClearIcon {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
    }
    function data(): {
        customLabel: (h: any) => any;
        itemCount: number;
        itemList: any[];
        id: string;
    };
    function data(): {
        customLabel: (h: any) => any;
        itemCount: number;
        itemList: any[];
        id: string;
    };
    namespace computed {
        function currentTitle(): any;
        function currentTitle(): any;
    }
    namespace watch {
        export namespace count_1 {
            function handler(): void;
            function handler(): void;
            const immediate: boolean;
        }
        export { count_1 as count };
    }
    namespace methods {
        function handleGetTabBaseInfo(): {
            name: any;
            title: any;
        };
        function handleGetTabBaseInfo(): {
            name: any;
            title: any;
        };
        function handleGetItems(): void;
        function handleGetItems(): void;
        function handleItemClick(item: any): void;
        function handleItemClick(item: any): void;
        function handleClear(): void;
        function handleClear(): void;
        function handleLoadMore(): void;
        function handleLoadMore(): void;
        function handleScroll(): void;
        function handleScroll(): void;
        function addTab(): void;
        function addTab(): void;
        function removeTab(): void;
        function removeTab(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import TabPane from "../tabs/pane.vue";
import Icon from "../icon/icon.vue";
