declare namespace _default {
    namespace components {
        export { Notice };
    }
    namespace props {
        namespace prefixCls {
            export const type: StringConstructor;
            export { prefixCls as default };
        }
        namespace styles {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): {
                top: string;
                left: string;
            };
            export { _default as default };
        }
        namespace content {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace className {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace transitionName {
            const type_4: StringConstructor;
            export { type_4 as type };
        }
    }
    function data(): {
        notices: any[];
        tIndex: any;
    };
    function data(): {
        notices: any[];
        tIndex: any;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function wrapStyles(): any;
        function wrapStyles(): any;
    }
    namespace methods {
        function add(notice: any): void;
        function add(notice: any): void;
        function close(name: any): void;
        function close(name: any): void;
        function closeAll(): void;
        function closeAll(): void;
        function handleGetIndex(): number;
        function handleGetIndex(): number;
    }
}
export default _default;
import Notice from "./notice.vue";
declare const prefixCls_1: "ivu-notification";
