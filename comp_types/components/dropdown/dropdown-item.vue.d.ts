declare namespace _default {
    const name: string;
    namespace props {
        export namespace name_1 {
            const type: (StringConstructor | NumberConstructor)[];
        }
        export { name_1 as name };
        export namespace disabled {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
        export namespace selected {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace divided {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
    }
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
    }
    namespace methods {
        function handleClick(): void;
        function handleClick(): void;
    }
}
export default _default;
