declare namespace _default {
    const name: string;
    namespace props {
        namespace percent {
            export const type: NumberConstructor;
            const _default: number;
            export { _default as default };
        }
        namespace size {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace strokeWidth {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace strokeColor {
            const type_3: (StringConstructor | ArrayConstructor)[];
            export { type_3 as type };
            const _default_3: string;
            export { _default_3 as default };
        }
        namespace strokeLinecap {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_4: string;
            export { _default_4 as default };
        }
        namespace trailWidth {
            const type_4: NumberConstructor;
            export { type_4 as type };
            const _default_5: number;
            export { _default_5 as default };
        }
        namespace trailColor {
            const type_5: StringConstructor;
            export { type_5 as type };
            const _default_6: string;
            export { _default_6 as default };
        }
        namespace dashboard {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
    }
    function data(): {
        id: string;
    };
    function data(): {
        id: string;
    };
    namespace computed {
        function circleSize(): {
            width: string;
            height: string;
        };
        function circleSize(): {
            width: string;
            height: string;
        };
        function computedStrokeWidth(): any;
        function computedStrokeWidth(): any;
        function radius(): number;
        function radius(): number;
        function pathString(): string;
        function pathString(): string;
        function len(): number;
        function len(): number;
        function trailStyle(): {};
        function trailStyle(): {};
        function pathStyle(): {};
        function pathStyle(): {};
        function wrapClasses(): string;
        function wrapClasses(): string;
        function innerClasses(): string;
        function innerClasses(): string;
        function strokeValue(): any;
        function strokeValue(): any;
        function showDefs(): boolean;
        function showDefs(): boolean;
    }
}
export default _default;
