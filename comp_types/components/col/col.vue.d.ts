declare namespace _default {
    const name: string;
    const inject: string[];
    namespace props {
        const span: (StringConstructor | NumberConstructor)[];
        const order: (StringConstructor | NumberConstructor)[];
        const offset: (StringConstructor | NumberConstructor)[];
        const push: (StringConstructor | NumberConstructor)[];
        const pull: (StringConstructor | NumberConstructor)[];
        const className: StringConstructor;
        const xs: (ObjectConstructor | NumberConstructor)[];
        const sm: (ObjectConstructor | NumberConstructor)[];
        const md: (ObjectConstructor | NumberConstructor)[];
        const lg: (ObjectConstructor | NumberConstructor)[];
        const xl: (ObjectConstructor | NumberConstructor)[];
        const xxl: (ObjectConstructor | NumberConstructor)[];
        namespace flex {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: string;
            export { _default as default };
        }
    }
    namespace computed {
        function gutter(): any;
        function gutter(): any;
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function styles(): {
            flex: any;
        };
        function styles(): {
            flex: any;
        };
    }
}
export default _default;
