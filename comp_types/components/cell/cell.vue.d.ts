declare namespace _default {
    const name: string;
    const inject: string[];
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
        data(): {
            globalConfig: {};
        };
        created(): void;
    })[];
    namespace components {
        export { CellItem };
        export { Icon };
    }
    namespace props {
        export namespace name_1 {
            const type: (StringConstructor | NumberConstructor)[];
        }
        export { name_1 as name };
        export namespace title {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default: string;
            export { _default as default };
        }
        export namespace label {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        export namespace extra {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        export namespace disabled {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace selected {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
    }
    function data(): {
        prefixCls: string;
    };
    function data(): {
        prefixCls: string;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function arrowType(): string;
        function arrowType(): string;
        function customArrowType(): string;
        function customArrowType(): string;
        function arrowSize(): string;
        function arrowSize(): string;
    }
    namespace methods {
        function handleClickItem(event: any, new_window: any): void;
        function handleClickItem(event: any, new_window: any): void;
    }
}
export default _default;
import CellItem from "./cell-item.vue";
import Icon from "../icon/icon.vue";
