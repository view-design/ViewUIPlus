declare namespace _default {
    const name: string;
    namespace components {
        export { Tooltip };
    }
    const emits: string[];
    namespace props {
        namespace text {
            const type: StringConstructor;
        }
        namespace height {
            const type_1: NumberConstructor;
            export { type_1 as type };
        }
        namespace lines {
            const type_2: NumberConstructor;
            export { type_2 as type };
        }
        namespace length {
            const type_3: NumberConstructor;
            export { type_3 as type };
        }
        namespace fullWidthRecognition {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default: boolean;
            export { _default as default };
        }
        namespace autoResize {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace disabled {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace tooltip {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace transfer {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace theme {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_4: string;
            export { _default_4 as default };
        }
        namespace maxWidth {
            const type_9: (StringConstructor | NumberConstructor)[];
            export { type_9 as type };
            const _default_5: number;
            export { _default_5 as default };
        }
        namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_6: string;
            export { _default_6 as default };
        }
    }
    function data(): {
        oversize: boolean;
        computedReady: boolean;
        computedText: string;
    };
    function data(): {
        oversize: boolean;
        computedReady: boolean;
        computedText: string;
    };
    namespace watch {
        function disabled(): void;
        function disabled(): void;
        function text(): void;
        function text(): void;
        function height(): void;
        function height(): void;
    }
    function mounted(): void;
    function mounted(): void;
    namespace methods {
        function init(): void;
        function init(): void;
        function computeText(): void;
        function computeText(): void;
        function limitShow(): void;
        function limitShow(): void;
    }
}
export default _default;
import Tooltip from "../tooltip/tooltip.vue";
