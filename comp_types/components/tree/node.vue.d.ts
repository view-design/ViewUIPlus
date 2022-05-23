declare namespace _default {
    const name: string;
    const inject: string[];
    namespace components {
        export { Checkbox };
        export { Icon };
        export { CollapseTransition };
        export { Render };
    }
    namespace props {
        namespace data {
            export const type: ObjectConstructor;
            function _default(): void;
            export { _default as default };
        }
        namespace multiple {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace childrenKey {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace showCheckbox {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace appear {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
    }
    function data(): {
        prefixCls: string;
        appearByClickArrow: boolean;
        globalConfig: {};
    };
    function data(): {
        prefixCls: string;
        appearByClickArrow: boolean;
        globalConfig: {};
    };
    namespace computed {
        function classes(): string[];
        function classes(): string[];
        function selectedCls(): {
            [x: string]: any;
        }[];
        function selectedCls(): {
            [x: string]: any;
        }[];
        function arrowClasses(): (string | {
            [x: string]: any;
        })[];
        function arrowClasses(): (string | {
            [x: string]: any;
        })[];
        function titleClasses(): (string | {
            [x: string]: any;
        })[];
        function titleClasses(): (string | {
            [x: string]: any;
        })[];
        function showArrow(): any;
        function showArrow(): any;
        function showLoading(): any;
        function showLoading(): any;
        function isParentRender(): any;
        function isParentRender(): any;
        function parentRender(): any;
        function parentRender(): any;
        function node(): any[];
        function node(): any[];
        function children(): any;
        function children(): any;
        function arrowType(): string;
        function arrowType(): string;
        function customArrowType(): string;
        function customArrowType(): string;
        function arrowSize(): string;
        function arrowSize(): string;
    }
    namespace methods {
        function handleExpand(): void;
        function handleExpand(): void;
        function handleClickNode(): void;
        function handleClickNode(): void;
        function handleSelect(): void;
        function handleSelect(): void;
        function handleCheck(): void;
        function handleCheck(): void;
        function handleContextmenu(data: any, event: any): void;
        function handleContextmenu(data: any, event: any): void;
        function handlePreventSelect(data: any, event: any): void;
        function handlePreventSelect(data: any, event: any): void;
    }
    function created(): void;
    function created(): void;
}
export default _default;
import Checkbox from "../checkbox/checkbox.vue";
import Icon from "../icon/icon.vue";
import CollapseTransition from "../base/collapse-transition.vue";
import Render from "./render";
