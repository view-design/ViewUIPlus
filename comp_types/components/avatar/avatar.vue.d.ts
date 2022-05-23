declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
    }
    const emits: string[];
    namespace props {
        namespace shape {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace size {
            export const type: (StringConstructor | NumberConstructor)[];
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace src {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace icon {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace customIcon {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
    }
    function data(): {
        prefixCls: string;
        scale: number;
        childrenWidth: number;
        isSlotShow: boolean;
        slotTemp: any;
    };
    function data(): {
        prefixCls: string;
        scale: number;
        childrenWidth: number;
        isSlotShow: boolean;
        slotTemp: any;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function styles(): {
            width: string;
            height: string;
            lineHeight: string;
            fontSize: string;
        };
        function styles(): {
            width: string;
            height: string;
            lineHeight: string;
            fontSize: string;
        };
        function childrenStyle(): {};
        function childrenStyle(): {};
    }
    namespace watch {
        function size(val: any, oldVal: any): void;
        function size(val: any, oldVal: any): void;
    }
    namespace methods {
        function setScale(): void;
        function setScale(): void;
        function handleError(e: any): void;
        function handleError(e: any): void;
    }
    function beforeCreate(): void;
    function beforeCreate(): void;
    function mounted(): void;
    function mounted(): void;
    function updated(): void;
    function updated(): void;
}
export default _default;
import Icon from "../icon";
