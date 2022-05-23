declare namespace _default {
    const name: string;
    const inject: string[];
    namespace props {
        const row: ObjectConstructor;
        const index: NumberConstructor;
        namespace column {
            export const type: ObjectConstructor;
            const _default: any;
            export { _default as default };
        }
        namespace display {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
    }
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}
export default _default;
