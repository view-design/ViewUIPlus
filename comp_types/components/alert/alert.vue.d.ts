declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
    }
    namespace props {
        namespace type {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace closable {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace showIcon {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace banner {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace fade {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
    }
    function data(): {
        closed: boolean;
        desc: boolean;
    };
    function data(): {
        closed: boolean;
        desc: boolean;
    };
    namespace computed {
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function messageClasses(): string;
        function messageClasses(): string;
        function descClasses(): string;
        function descClasses(): string;
        function closeClasses(): string;
        function closeClasses(): string;
        function iconClasses(): string;
        function iconClasses(): string;
        function iconType(): string;
        function iconType(): string;
    }
    namespace methods {
        function close(e: any): void;
        function close(e: any): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
import Icon from "../icon";
