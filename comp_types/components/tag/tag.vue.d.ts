declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
    }
    const emits: string[];
    namespace props {
        export namespace closable {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        export namespace checkable {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace checked {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace color {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_3: string;
            export { _default_3 as default };
        }
        export namespace type_4 {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        export { type_4 as type };
        export namespace name_1 {
            const type_5: (StringConstructor | NumberConstructor)[];
            export { type_5 as type };
        }
        export { name_1 as name };
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_4: string;
            export { _default_4 as default };
        }
    }
    function data(): {
        isChecked: any;
    };
    function data(): {
        isChecked: any;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function wraperStyles(): {
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
        function wraperStyles(): {
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
        function textClasses(): string[];
        function textClasses(): string[];
        function dotClasses(): string;
        function dotClasses(): string;
        function iconClass(): string;
        function iconClass(): string;
        function showDot(): boolean;
        function showDot(): boolean;
        function lineColor(): any;
        function lineColor(): any;
        function borderColor(): any;
        function borderColor(): any;
        function dotColor(): any;
        function dotColor(): any;
        function textColorStyle(): {
            color?: undefined;
        } | {
            color: () => any;
        };
        function textColorStyle(): {
            color?: undefined;
        } | {
            color: () => any;
        };
        function bgColorStyle(): {
            background?: undefined;
        } | {
            background: () => any;
        };
        function bgColorStyle(): {
            background?: undefined;
        } | {
            background: () => any;
        };
        function defaultTypeColor(): any;
        function defaultTypeColor(): any;
    }
    namespace methods {
        function close(event: any): void;
        function close(event: any): void;
        function check(): void;
        function check(): void;
    }
    namespace watch {
        function checked(val: any): void;
        function checked(val: any): void;
    }
}
export default _default;
import Icon from "../icon";
