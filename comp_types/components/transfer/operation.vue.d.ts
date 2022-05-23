declare namespace _default {
    const name: string;
    namespace components {
        export { Button };
        export { Icon };
    }
    const inject: string[];
    namespace props {
        const prefixCls: StringConstructor;
        const operations: ArrayConstructor;
        const leftActive: BooleanConstructor;
        const rightActive: BooleanConstructor;
        const reverseOperation: BooleanConstructor;
    }
    namespace methods {
        function moveToLeft(): void;
        function moveToLeft(): void;
        function moveToRight(): void;
        function moveToRight(): void;
    }
}
export default _default;
import Button from "../button/button.vue";
import Icon from "../icon/icon.vue";
