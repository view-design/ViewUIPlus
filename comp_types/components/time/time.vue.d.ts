declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            t(...args: any[]): any;
        };
    }[];
    namespace props {
        export namespace time {
            const type: (StringConstructor | NumberConstructor | DateConstructor)[];
            const required: boolean;
        }
        export namespace type_1 {
            const type_2: StringConstructor;
            export { type_2 as type };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        export { type_1 as type };
        export namespace hash {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        export namespace interval {
            const type_4: NumberConstructor;
            export { type_4 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
    }
    function data(): {
        date: string;
    };
    function data(): {
        date: string;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
    }
    namespace watch {
        function time(): void;
        function time(): void;
    }
    namespace methods {
        function handleClick(): void;
        function handleClick(): void;
        function setTime(): void;
        function setTime(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
