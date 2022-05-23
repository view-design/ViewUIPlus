declare namespace _default {
    namespace props {
        namespace to {
            const type: (ObjectConstructor | StringConstructor)[];
        }
        namespace replace {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
        namespace target {
            const type_2: StringConstructor;
            export { type_2 as type };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace append {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            export const required: boolean;
            const _default_2: boolean;
            export { _default_2 as default };
        }
    }
    namespace computed {
        function linkUrl(): any;
        function linkUrl(): any;
    }
    namespace methods {
        function handleOpenTo(): void;
        function handleOpenTo(): void;
        function handleClick(new_window?: boolean): void;
        function handleClick(new_window?: boolean): void;
        function handleCheckClick(event: any, new_window?: boolean): boolean;
        function handleCheckClick(event: any, new_window?: boolean): boolean;
    }
}
export default _default;
