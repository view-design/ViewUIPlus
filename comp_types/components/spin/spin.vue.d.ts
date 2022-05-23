declare namespace _default {
    const name: string;
    const mixins: {
        props: {
            lockScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
        };
        methods: {
            checkScrollBar(): void;
            checkMaskInVisible(): boolean;
            setScrollBar(): void;
            resetScrollBar(): void;
            addScrollEffect(): void;
            removeScrollEffect(): void;
        };
    }[];
    namespace props {
        namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace fix {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace fullscreen {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace show {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
    }
    function data(): {
        showText: boolean;
        visible: boolean;
    };
    function data(): {
        showText: boolean;
        visible: boolean;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function mainClasses(): string;
        function mainClasses(): string;
        function dotClasses(): string;
        function dotClasses(): string;
        function textClasses(): string;
        function textClasses(): string;
        function fullscreenVisible(): any;
        function fullscreenVisible(): any;
    }
    namespace watch {
        function visible(val: any): void;
        function visible(val: any): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
