declare namespace _default {
    const name: string;
    namespace props {
        namespace color {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        namespace failedColor {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace height {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
    }
    function data(): {
        percent: number;
        status: string;
        show: boolean;
    };
    function data(): {
        percent: number;
        status: string;
        show: boolean;
    };
    namespace computed {
        function classes(): string;
        function classes(): string;
        function innerClasses(): (string | {
            [x: string]: boolean;
        })[];
        function innerClasses(): (string | {
            [x: string]: boolean;
        })[];
        function outerStyles(): {
            height: string;
        };
        function outerStyles(): {
            height: string;
        };
        function styles(): {
            width: string;
            height: string;
        };
        function styles(): {
            width: string;
            height: string;
        };
    }
}
export default _default;
