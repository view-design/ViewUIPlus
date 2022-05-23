declare namespace _default {
    const name: string;
    const emits: string[];
    namespace props {
        namespace offsetTop {
            export const type: NumberConstructor;
            const _default: number;
            export { _default as default };
        }
        namespace offsetBottom {
            const type_1: NumberConstructor;
            export { type_1 as type };
        }
        namespace useCapture {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
    }
    function data(): {
        affix: boolean;
        styles: {};
        slot: boolean;
        slotStyle: {};
    };
    function data(): {
        affix: boolean;
        styles: {};
        slot: boolean;
        slotStyle: {};
    };
    namespace computed {
        function offsetType(): string;
        function offsetType(): string;
        function classes(): {
            [x: string]: any;
        }[];
        function classes(): {
            [x: string]: any;
        }[];
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    namespace methods {
        function handleScroll(): void;
        function handleScroll(): void;
    }
}
export default _default;
