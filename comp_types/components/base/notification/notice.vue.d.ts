declare namespace _default {
    namespace components {
        export { RenderCell };
    }
    namespace props {
        export namespace prefixCls {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        export namespace duration {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        export namespace type_2 {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
        export { type_2 as type };
        export namespace content {
            const type_4: StringConstructor;
            export { type_4 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        export const withIcon: BooleanConstructor;
        export namespace render {
            const type_5: FunctionConstructor;
            export { type_5 as type };
        }
        export const hasTitle: BooleanConstructor;
        export namespace styles {
            const type_6: ObjectConstructor;
            export { type_6 as type };
            function _default_3(): {
                right: string;
            };
            export { _default_3 as default };
        }
        export namespace closable {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace className {
            const type_8: StringConstructor;
            export { type_8 as type };
        }
        export namespace name {
            const type_9: StringConstructor;
            export { type_9 as type };
            export const required: boolean;
        }
        export namespace onClose {
            const type_10: FunctionConstructor;
            export { type_10 as type };
        }
        export namespace transitionName {
            const type_11: StringConstructor;
            export { type_11 as type };
        }
        export namespace background {
            const type_12: BooleanConstructor;
            export { type_12 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace msgType {
            const type_13: StringConstructor;
            export { type_13 as type };
        }
    }
    function data(): {
        withDesc: boolean;
    };
    function data(): {
        withDesc: boolean;
    };
    namespace computed {
        function baseClass(): string;
        function baseClass(): string;
        function renderFunc(): any;
        function renderFunc(): any;
        function classes(): {
            [x: string]: any;
        }[];
        function classes(): {
            [x: string]: any;
        }[];
        function contentClasses(): string[];
        function contentClasses(): string[];
        function messageContentClasses(): (string | {
            [x: string]: any;
        })[];
        function messageContentClasses(): (string | {
            [x: string]: any;
        })[];
        function contentWithIcon(): string[];
        function contentWithIcon(): string[];
        function messageClasses(): string[];
        function messageClasses(): string[];
    }
    namespace methods {
        function clearCloseTimer(): void;
        function clearCloseTimer(): void;
        function close(): void;
        function close(): void;
        function handleEnter(el: any): void;
        function handleEnter(el: any): void;
        function handleLeave(el: any): void;
        function handleLeave(el: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import RenderCell from "../render";
