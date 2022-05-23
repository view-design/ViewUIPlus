declare namespace _default {
    const mixins: {
        methods: {
            t(...args: any[]): any;
        };
    }[];
    namespace components {
        export { iButton };
    }
    const emits: string[];
    const inject: string[];
    namespace props {
        namespace showTime {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace isTime {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace timeDisabled {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
    }
    function data(): {
        prefixCls: string;
    };
    function data(): {
        prefixCls: string;
    };
    namespace computed {
        function timeClasses(): string;
        function timeClasses(): string;
        function labels(): {};
        function labels(): {};
    }
    namespace methods {
        function handleClear(): void;
        function handleClear(): void;
        function handleSuccess(): void;
        function handleSuccess(): void;
        function handleToggleTime(): void;
        function handleToggleTime(): void;
        function handleTab(e: any): void;
        function handleTab(e: any): void;
    }
}
export default _default;
import iButton from "../../button/button.vue";
