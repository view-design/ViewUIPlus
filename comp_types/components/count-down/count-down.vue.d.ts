declare namespace _default {
    const name: string;
    const emits: string[];
    namespace props {
        namespace format {
            const type: FunctionConstructor;
        }
        namespace target {
            const type_1: (NumberConstructor | DateConstructor)[];
            export { type_1 as type };
        }
        namespace interval {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default: number;
            export { _default as default };
        }
    }
    function data(): {
        lastTime: string;
    };
    function data(): {
        lastTime: string;
    };
    namespace methods {
        function initTime(): number;
        function initTime(): number;
        function tick(): void;
        function tick(): void;
        function defaultFormat(time: any): string;
        function defaultFormat(time: any): string;
    }
    namespace computed {
        function result(): any;
        function result(): any;
    }
    namespace watch {
        function target(): void;
        function target(): void;
    }
    function created(): void;
    function created(): void;
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
