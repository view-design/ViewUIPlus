declare namespace _default {
    const name: string;
    namespace directives {
        export { clickOutside };
    }
    namespace components {
        export { Drop };
    }
    const emits: string[];
    namespace props {
        namespace trigger {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace visible {
            export const type: BooleanConstructor;
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace transfer {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace transferClassName {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace stopPropagation {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace capture {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace eventsEnabled {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace boundariesElement {
            const type_6: (StringConstructor | {
                new (): HTMLElement;
                prototype: HTMLElement;
            })[];
            export { type_6 as type };
            const _default_5: string;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function transition(): "slide-up" | "fade";
        function transition(): "slide-up" | "fade";
        function dropdownCls(): {
            [x: string]: any;
            [x: number]: any;
        };
        function dropdownCls(): {
            [x: string]: any;
            [x: number]: any;
        };
        function relClasses(): (string | {
            [x: string]: boolean;
        })[];
        function relClasses(): (string | {
            [x: string]: boolean;
        })[];
    }
    function data(): {
        prefixCls: string;
        currentVisible: any;
        timeout: any;
    };
    function data(): {
        prefixCls: string;
        currentVisible: any;
        timeout: any;
    };
    namespace watch {
        function visible(val: any): void;
        function visible(val: any): void;
        const currentVisible: any;
    }
    namespace methods {
        function handleClick(): boolean;
        function handleClick(): boolean;
        function handleRightClick(): boolean;
        function handleRightClick(): boolean;
        function handleMouseenter(): boolean;
        function handleMouseenter(): boolean;
        function handleMouseleave(): boolean;
        function handleMouseleave(): boolean;
        function onClickoutside(e: any): void;
        function onClickoutside(e: any): void;
        function handleClose(): boolean;
        function handleClose(): boolean;
        function handleRightClose(): boolean;
        function handleRightClose(): boolean;
        function hasParent(): any;
        function hasParent(): any;
        function handleHaschildClick(): void;
        function handleHaschildClick(): void;
        function handleItemClick(key: any): void;
        function handleItemClick(key: any): void;
        function handleHoverClick(): void;
        function handleHoverClick(): void;
    }
}
export default _default;
import clickOutside from "../../directives/clickoutside";
import Drop from "../select/dropdown.vue";
