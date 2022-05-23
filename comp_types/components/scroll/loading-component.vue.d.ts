declare namespace _default {
    const props: string[];
    namespace components {
        export { Spin };
        export { Icon };
    }
    namespace computed {
        function wrapperClasses(): (string | {
            [x: string]: any;
        })[];
        function wrapperClasses(): (string | {
            [x: string]: any;
        })[];
        function spinnerClasses(): string;
        function spinnerClasses(): string;
        function iconClasses(): string;
        function iconClasses(): string;
        function textClasses(): string;
        function textClasses(): string;
    }
}
export default _default;
import Spin from "../spin/spin.vue";
import Icon from "../icon/icon.vue";
