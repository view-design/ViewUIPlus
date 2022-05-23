declare namespace _default {
    const name: string;
    namespace components {
        export { Casitem };
    }
    const inject: string[];
    function provide(): {
        CaspanelInstance: {
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
            provide(): any;
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
    function provide(): {
        CaspanelInstance: {
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
            provide(): any;
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
    namespace props {
        namespace data {
            export const type: ArrayConstructor;
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        const disabled: BooleanConstructor;
        const changeOnSelect: BooleanConstructor;
        const trigger: StringConstructor;
        const prefixCls: StringConstructor;
    }
    function data(): {
        tmpItem: {};
        result: any[];
        sublist: any[];
        id: string;
        childCaspanelList: any[];
    };
    function data(): {
        tmpItem: {};
        result: any[];
        sublist: any[];
        id: string;
        childCaspanelList: any[];
    };
    namespace watch {
        function data(): void;
        function data(): void;
    }
    namespace methods {
        function handleClickItem(item: any): void;
        function handleClickItem(item: any): void;
        function handleHoverItem(item: any): void;
        function handleHoverItem(item: any): void;
        function handleTriggerItem(item: any, fromInit?: boolean, fromUser?: boolean): void;
        function handleTriggerItem(item: any, fromInit?: boolean, fromUser?: boolean): void;
        function updateResult(item: any): void;
        function updateResult(item: any): void;
        function getBaseItem(item: any): any;
        function getBaseItem(item: any): any;
        function emitUpdate(result: any): void;
        function emitUpdate(result: any): void;
        function getKey(): number;
        function getKey(): number;
        function handleOnFindSelected(params: any): boolean;
        function handleOnFindSelected(params: any): boolean;
        function handleOnClear(deep?: boolean): void;
        function handleOnClear(deep?: boolean): void;
        function addCaspanel(): void;
        function addCaspanel(): void;
        function removeCaspanel(): void;
        function removeCaspanel(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import Casitem from "./casitem.vue";
