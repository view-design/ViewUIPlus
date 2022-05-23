declare namespace _default {
    const name: string;
    namespace components {
        export { Avatar };
        export { Tooltip };
    }
    namespace props {
        namespace list {
            export const type: ArrayConstructor;
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace shape {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace excessStyle {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        namespace max {
            const type_2: NumberConstructor;
            export { type_2 as type };
        }
        namespace tooltip {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_3: string;
            export { _default_3 as default };
        }
    }
    namespace computed {
        function currentList(): any[];
        function currentList(): any[];
    }
}
export default _default;
import Avatar from "../avatar/avatar.vue";
import Tooltip from "../tooltip/tooltip.vue";
