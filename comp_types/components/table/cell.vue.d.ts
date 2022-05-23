declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
        export { Checkbox };
        export { TableExpand };
        export { TableSlot };
        export { Tooltip };
    }
    const inject: string[];
    namespace props {
        const prefixCls: StringConstructor;
        const row: ObjectConstructor;
        const column: ObjectConstructor;
        const naturalIndex: NumberConstructor;
        const index: NumberConstructor;
        const checked: BooleanConstructor;
        const disabled: BooleanConstructor;
        const expanded: BooleanConstructor;
        namespace fixed {
            export const type: (StringConstructor | BooleanConstructor)[];
            const _default: boolean;
            export { _default as default };
        }
        const treeNode: BooleanConstructor;
        namespace treeLevel {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
    }
    function data(): {
        renderType: string;
        uid: number;
        context: any;
        showTooltip: boolean;
    };
    function data(): {
        renderType: string;
        uid: number;
        context: any;
        showTooltip: boolean;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function expandCls(): (string | {
            [x: string]: any;
        })[];
        function expandCls(): (string | {
            [x: string]: any;
        })[];
        function showChildren(): boolean;
        function showChildren(): boolean;
        function showTreeNode(): boolean;
        function showTreeNode(): boolean;
        function showLevel(): boolean;
        function showLevel(): boolean;
        function treeLevelStyle(): {
            'padding-left': string;
        };
        function treeLevelStyle(): {
            'padding-left': string;
        };
        function childrenExpand(): any;
        function childrenExpand(): any;
        function childrenLoading(): any;
        function childrenLoading(): any;
    }
    namespace methods {
        function toggleSelect(): void;
        function toggleSelect(): void;
        function toggleExpand(): void;
        function toggleExpand(): void;
        function handleClick(): void;
        function handleClick(): void;
        function handleTooltipIn(): void;
        function handleTooltipIn(): void;
        function handleToggleTree(): void;
        function handleToggleTree(): void;
    }
    function created(): void;
    function created(): void;
}
export default _default;
import Icon from "../icon/icon.vue";
import Checkbox from "../checkbox/checkbox.vue";
import TableExpand from "./expand";
import TableSlot from "./slot";
import Tooltip from "../tooltip/tooltip.vue";
