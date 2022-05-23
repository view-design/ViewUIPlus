declare namespace _default {
    const name: string;
    namespace props {
        namespace start {
            export const type: NumberConstructor;
            export const required: boolean;
            const _default: number;
            export { _default as default };
        }
        namespace end {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const required_1: boolean;
            export { required_1 as required };
        }
        namespace decimals {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const required_2: boolean;
            export { required_2 as required };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace duration {
            const type_3: NumberConstructor;
            export { type_3 as type };
            const required_3: boolean;
            export { required_3 as required };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace options {
            const type_4: ObjectConstructor;
            export { type_4 as type };
            const required_4: boolean;
            export { required_4 as required };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        namespace callback {
            const type_5: FunctionConstructor;
            export { type_5 as type };
            const required_5: boolean;
            export { required_5 as required };
            function _default_3(): void;
            export { _default_3 as default };
        }
    }
    function data(): {
        CountUp: any;
    };
    function data(): {
        CountUp: any;
    };
    namespace watch {
        function end(value: any): void;
        function end(value: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    namespace methods {
        function init(): void;
        function init(): void;
        function destroy(): void;
        function destroy(): void;
    }
    function beforeUnmounted(): void;
    function beforeUnmounted(): void;
    function start(callback: any): void;
    function start(callback: any): void;
    function pauseResume(): void;
    function pauseResume(): void;
    function reset(): void;
    function reset(): void;
    function update(newEndVal: any): void;
    function update(newEndVal: any): void;
}
export default _default;
