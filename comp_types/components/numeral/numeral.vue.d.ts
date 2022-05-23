declare namespace _default {
    const name: string;
    const emits: string[];
    namespace props {
        namespace value {
            const type: (StringConstructor | NumberConstructor)[];
        }
        namespace format {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace prefix {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
        }
        namespace suffix {
            const type_3: (StringConstructor | NumberConstructor)[];
            export { type_3 as type };
        }
    }
    function data(): {
        currentValue: string;
    };
    function data(): {
        currentValue: string;
    };
    namespace watch {
        function value(): void;
        function value(): void;
        function format(): void;
        function format(): void;
    }
    namespace methods {
        function init(): void;
        function init(): void;
        function getValue(): any;
        function getValue(): any;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
