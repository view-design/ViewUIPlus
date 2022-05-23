declare namespace _default {
    const name: string;
    const mixins: ({
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
            MenuInstance: {
                default: any;
            };
            SubmenuInstance: {
                default: any;
            };
        };
        data(): {
            menu: any;
        };
        computed: {
            hasParentSubmenu(): boolean;
            parentSubmenuNum(): any;
            mode(): any;
        };
    })[];
    namespace props {
        export namespace name_1 {
            const type: (StringConstructor | NumberConstructor)[];
            const required: boolean;
        }
        export { name_1 as name };
        export namespace disabled {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
    }
    function data(): {
        active: boolean;
        id: string;
    };
    function data(): {
        active: boolean;
        id: string;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function itemStyle(): {
            paddingLeft: string;
        } | {
            paddingLeft?: undefined;
        };
        function itemStyle(): {
            paddingLeft: string;
        } | {
            paddingLeft?: undefined;
        };
    }
    namespace methods {
        function handleClickItem(event: any, new_window?: boolean): void;
        function handleClickItem(event: any, new_window?: boolean): void;
        function handleUpdateActiveName(name: any): void;
        function handleUpdateActiveName(name: any): void;
        function addMenuItem(): void;
        function addMenuItem(): void;
        function removeMenuItem(): void;
        function removeMenuItem(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
