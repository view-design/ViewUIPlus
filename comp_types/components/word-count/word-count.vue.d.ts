declare namespace _default {
    const name: string;
    namespace components {
        export { Circle };
    }
    namespace props {
        namespace value {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: string;
            export { _default as default };
        }
        namespace total {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace hideTotal {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace overflow {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace circle {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace size {
            const type_5: (StringConstructor | NumberConstructor)[];
            export { type_5 as type };
            const _default_5: number;
            export { _default_5 as default };
        }
    }
    namespace computed {
        function isOverflow(): boolean;
        function isOverflow(): boolean;
        function percent(): number;
        function percent(): number;
        function strokeColor(): "#2d8cf0" | "#ed4014";
        function strokeColor(): "#2d8cf0" | "#ed4014";
    }
}
export default _default;
import Circle from "../circle/circle.vue";
