declare namespace _default {
    const name: string;
    namespace components {
        export { Button };
    }
    namespace props {
        namespace type {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace title {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace desc {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace img {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace imgColor {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace backText {
            const type_5: StringConstructor;
            export { type_5 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace redirect {
            const type_6: StringConstructor;
            export { type_6 as type };
            const _default_3: string;
            export { _default_3 as default };
        }
    }
    namespace computed {
        function imgPath(): any;
        function imgPath(): any;
        function titleText(): any;
        function titleText(): any;
        function descText(): any;
        function descText(): any;
    }
}
export default _default;
import Button from "../button/button.vue";
