declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
        export { CollapseTransition };
    }
    const inject: string[];
    namespace props {
        export namespace name_1 {
            const type: StringConstructor;
        }
        export { name_1 as name };
        export namespace hideArrow {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
    }
    function data(): {
        index: number;
        mounted: boolean;
    };
    function data(): {
        index: number;
        mounted: boolean;
    };
    namespace computed {
        function itemClasses(): (string | {
            [x: string]: () => boolean;
        })[];
        function itemClasses(): (string | {
            [x: string]: () => boolean;
        })[];
        function headerClasses(): string;
        function headerClasses(): string;
        function contentClasses(): string;
        function contentClasses(): string;
        function boxClasses(): string;
        function boxClasses(): string;
        function isActive(): boolean;
        function isActive(): boolean;
    }
    namespace methods {
        function setIndex(): void;
        function setIndex(): void;
        function toggle(): void;
        function toggle(): void;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
import Icon from "../icon/icon.vue";
import CollapseTransition from "../base/collapse-transition.vue";
