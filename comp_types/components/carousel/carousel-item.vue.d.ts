declare namespace _default {
    const componentName: string;
    const name: string;
    const inject: string[];
    function data(): {
        prefixCls: string;
        width: number;
        height: string;
        left: number;
        id: string;
    };
    function data(): {
        prefixCls: string;
        width: number;
        height: string;
        left: number;
        id: string;
    };
    namespace computed {
        function styles(): {
            width: string;
            height: string;
            left: string;
        };
        function styles(): {
            width: string;
            height: string;
            left: string;
        };
    }
    namespace watch {
        function width(val: any): void;
        function width(val: any): void;
        function height(val: any): void;
        function height(val: any): void;
    }
    namespace methods {
        /**
         * 添加组件实例到实例列表
         */
        function addInstance(): void;
        /**
         * 添加组件实例到实例列表
         */
        function addInstance(): void;
        function removeInstance(): void;
        function removeInstance(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
