declare namespace _default {
    const name: string;
    const emits: string[];
    namespace props {
        namespace height {
            export const type: NumberConstructor;
            const _default: number;
            export { _default as default };
        }
        namespace bottom {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace right {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace duration {
            const type_3: NumberConstructor;
            export { type_3 as type };
            const _default_3: number;
            export { _default_3 as default };
        }
    }
    function data(): {
        backTop: boolean;
    };
    function data(): {
        backTop: boolean;
    };
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function styles(): {
            bottom: string;
            right: string;
        };
        function styles(): {
            bottom: string;
            right: string;
        };
        function innerClasses(): string;
        function innerClasses(): string;
    }
    namespace methods {
        function handleScroll(): void;
        function handleScroll(): void;
        function back(): void;
        function back(): void;
    }
}
export default _default;
