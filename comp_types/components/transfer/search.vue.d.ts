declare namespace _default {
    const name: string;
    namespace components {
        export { Input };
    }
    const emits: string[];
    namespace props {
        const prefixCls: StringConstructor;
        const placeholder: StringConstructor;
        const query: StringConstructor;
    }
    function data(): {
        currentQuery: any;
    };
    function data(): {
        currentQuery: any;
    };
    namespace watch {
        function query(val: any): void;
        function query(val: any): void;
        const currentQuery: any;
    }
    namespace computed {
        function icon(): "ios-close-circle" | "ios-search";
        function icon(): "ios-close-circle" | "ios-search";
    }
    namespace methods {
        function handleClick(): void;
        function handleClick(): void;
    }
}
export default _default;
import Input from "../input/input.vue";
