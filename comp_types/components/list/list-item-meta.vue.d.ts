declare namespace _default {
    const name: string;
    namespace components {
        export { Avatar };
    }
    namespace props {
        namespace avatar {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        namespace title {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace description {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
    }
}
export default _default;
import Avatar from "../../components/avatar/avatar.vue";
