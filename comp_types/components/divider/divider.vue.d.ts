declare namespace _default {
    const name: string;
    namespace props {
        namespace type {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default: string;
            export { _default as default };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
        }
        namespace orientation {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_1: string;
            export { _default_1 as default };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
        }
        namespace dashed {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_3: string;
            export { _default_3 as default };
        }
        namespace plain {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
    }
    namespace computed {
        function hasSlot(): boolean;
        function hasSlot(): boolean;
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function slotClasses(): string[];
        function slotClasses(): string[];
    }
}
export default _default;
