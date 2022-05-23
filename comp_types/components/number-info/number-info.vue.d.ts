declare namespace _default {
    const name: string;
    namespace components {
        export { Trend };
    }
    namespace props {
        namespace title {
            const type: StringConstructor;
        }
        namespace subTitle {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace total {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
        }
        namespace subTotal {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
        }
        namespace status {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace gap {
            const type_4: (StringConstructor | NumberConstructor)[];
            export { type_4 as type };
            const _default: number;
            export { _default as default };
        }
    }
    namespace computed {
        function valueStyle(): {
            'margin-top': string;
        };
        function valueStyle(): {
            'margin-top': string;
        };
    }
}
export default _default;
import Trend from "../trend/trend.vue";
