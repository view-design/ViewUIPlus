declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
    }
    const mixins: {
        data(): {
            globalConfig: {};
        };
        created(): void;
    }[];
    namespace props {
        const data: ObjectConstructor;
        const prefixCls: StringConstructor;
        const tmpItem: ObjectConstructor;
    }
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function showArrow(): any;
        function showArrow(): any;
        function showLoading(): any;
        function showLoading(): any;
        function arrowType(): string;
        function arrowType(): string;
        function customArrowType(): string;
        function customArrowType(): string;
        function arrowSize(): string;
        function arrowSize(): string;
    }
}
export default _default;
import Icon from "../icon/icon.vue";
