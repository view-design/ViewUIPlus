declare namespace _default {
    const name: string;
    const mixins: {
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
    }[];
    namespace components {
        export { Icon };
    }
    namespace props {
        namespace bordered {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace disHover {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace shadow {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace padding {
            const type_3: NumberConstructor;
            export { type_3 as type };
            export { defaultPadding as default };
        }
        namespace title {
            const type_4: StringConstructor;
            export { type_4 as type };
        }
        namespace icon {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
    }
    function data(): {
        showHead: boolean;
        showExtra: boolean;
    };
    function data(): {
        showHead: boolean;
        showExtra: boolean;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function headClasses(): string;
        function headClasses(): string;
        function extraClasses(): string;
        function extraClasses(): string;
        function bodyClasses(): string;
        function bodyClasses(): string;
        function bodyStyles(): "" | {
            padding: string;
        };
        function bodyStyles(): "" | {
            padding: string;
        };
        function isHrefPattern(): boolean;
        function isHrefPattern(): boolean;
        function tagName(): "a" | "div";
        function tagName(): "a" | "div";
        function tagProps(): {
            href: any;
            target: any;
        } | {
            href?: undefined;
            target?: undefined;
        };
        function tagProps(): {
            href: any;
            target: any;
        } | {
            href?: undefined;
            target?: undefined;
        };
    }
    namespace methods {
        function handleClickLink(event: any): void;
        function handleClickLink(event: any): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
import Icon from "../icon/icon.vue";
declare const defaultPadding: 16;
