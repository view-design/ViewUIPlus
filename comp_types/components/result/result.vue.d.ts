declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
    }
    namespace props {
        namespace type {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace title {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace desc {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace extra {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
    }
    namespace computed {
        function iconClasses(): {
            'ivu-result-icon-success': boolean;
            'ivu-result-icon-error': boolean;
        };
        function iconClasses(): {
            'ivu-result-icon-success': boolean;
            'ivu-result-icon-error': boolean;
        };
    }
}
export default _default;
import Icon from "../icon/icon.vue";
