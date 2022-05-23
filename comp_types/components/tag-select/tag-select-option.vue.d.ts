declare namespace _default {
    const name: string;
    namespace components {
        export { Tag };
    }
    const inject: string[];
    namespace props {
        export namespace name_1 {
            const type: (StringConstructor | NumberConstructor)[];
            const required: boolean;
        }
        export { name_1 as name };
        export namespace tagProps {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        export namespace color {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default: string;
            export { _default as default };
        }
    }
    function data(): {
        checked: boolean;
        id: string;
    };
    function data(): {
        checked: boolean;
        id: string;
    };
    namespace methods {
        function handleChange(checked: any): void;
        function handleChange(checked: any): void;
        function addOption(): void;
        function addOption(): void;
        function removeOption(): void;
        function removeOption(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import Tag from "../tag/tag.vue";
