declare namespace _default {
    const name: string;
    const inject: string[];
    namespace props {
        namespace status {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace title {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        namespace content {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace icon {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
    }
    function data(): {
        prefixCls: string;
        id: string;
    };
    function data(): {
        prefixCls: string;
        id: string;
    };
    namespace computed {
        function wrapClasses(): (string | {
            [x: string]: boolean | (() => boolean);
        })[];
        function wrapClasses(): (string | {
            [x: string]: boolean | (() => boolean);
        })[];
        function iconClasses(): (string | {
            [x: string]: boolean;
        })[];
        function iconClasses(): (string | {
            [x: string]: boolean;
        })[];
        function stepNumber(): any;
        function stepNumber(): any;
        function total(): any;
        function total(): any;
        function currentStatus(): string;
        function currentStatus(): string;
        function nextError(): boolean;
        function nextError(): boolean;
    }
    function beforeMount(): void;
    function beforeMount(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
