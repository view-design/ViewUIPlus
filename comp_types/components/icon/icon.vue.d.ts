declare namespace _default {
    const name: string;
    namespace props {
        namespace type {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default: string;
            export { _default as default };
        }
        const size: (StringConstructor | NumberConstructor)[];
        const color: StringConstructor;
        namespace custom {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
    }
    namespace computed {
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function styles(): {
            'font-size': string;
            color: any;
        };
        function styles(): {
            'font-size': string;
            color: any;
        };
    }
}
export default _default;
