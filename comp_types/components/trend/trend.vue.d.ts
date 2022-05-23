declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
    }
    namespace props {
        namespace flag {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace colorful {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace reverseColor {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace textColor {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace showTitle {
            const type_3: (StringConstructor | BooleanConstructor)[];
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
    }
    namespace computed {
        function classes(): {
            "ivu-trend-up": boolean;
            "ivu-trend-down": boolean;
            "ivu-trend-reverse-color": any;
            "ivu-trend-colorful": any;
            "ivu-trend-text-color": any;
        }[];
        function classes(): {
            "ivu-trend-up": boolean;
            "ivu-trend-down": boolean;
            "ivu-trend-reverse-color": any;
            "ivu-trend-colorful": any;
            "ivu-trend-text-color": any;
        }[];
        function flagType(): "" | "md-arrow-dropup" | "md-arrow-dropdown";
        function flagType(): "" | "md-arrow-dropup" | "md-arrow-dropdown";
    }
}
export default _default;
import Icon from "../icon/icon.vue";
