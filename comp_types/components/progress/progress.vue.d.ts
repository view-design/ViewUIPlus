declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
    }
    namespace props {
        namespace percent {
            export const type: NumberConstructor;
            const _default: number;
            export { _default as default };
        }
        namespace successPercent {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace status {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace hideInfo {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace strokeWidth {
            const type_3: NumberConstructor;
            export { type_3 as type };
            const _default_4: number;
            export { _default_4 as default };
        }
        namespace vertical {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace strokeColor {
            const type_5: (StringConstructor | ArrayConstructor)[];
            export { type_5 as type };
        }
        namespace textInside {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
    }
    function data(): {
        currentStatus: any;
    };
    function data(): {
        currentStatus: any;
    };
    namespace computed {
        function isStatus(): boolean;
        function isStatus(): boolean;
        function statusIcon(): string;
        function statusIcon(): string;
        function bgStyle(): {
            height: string;
            width: string;
        };
        function bgStyle(): {
            height: string;
            width: string;
        };
        function successBgStyle(): {
            height: string;
            width: string;
        };
        function successBgStyle(): {
            height: string;
            width: string;
        };
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
        })[];
        function textClasses(): string;
        function textClasses(): string;
        function textInnerClasses(): string;
        function textInnerClasses(): string;
        function outerClasses(): string;
        function outerClasses(): string;
        function innerClasses(): string;
        function innerClasses(): string;
        function bgClasses(): string;
        function bgClasses(): string;
        function successBgClasses(): string;
        function successBgClasses(): string;
    }
    function created(): void;
    function created(): void;
    namespace methods {
        function handleStatus(isDown: any): void;
        function handleStatus(isDown: any): void;
    }
    namespace watch {
        function percent(val: any, oldVal: any): void;
        function percent(val: any, oldVal: any): void;
        function status(val: any): void;
        function status(val: any): void;
    }
}
export default _default;
import Icon from "../icon";
