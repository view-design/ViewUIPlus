declare namespace _default {
    const name: string;
    const inject: string[];
    namespace props {
        export namespace name_1 {
            const type: StringConstructor;
        }
        export { name_1 as name };
        export namespace label {
            const type_1: (FunctionConstructor | StringConstructor)[];
            export { type_1 as type };
            const _default: string;
            export { _default as default };
        }
        export namespace icon {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        export namespace disabled {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace closable {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_2: any;
            export { _default_2 as default };
        }
        export namespace tab {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        export namespace index {
            const type_6: NumberConstructor;
            export { type_6 as type };
        }
        export namespace contextMenu {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
    }
    function data(): {
        prefixCls: string;
        show: boolean;
        currentName: string;
        id: string;
    };
    function data(): {
        prefixCls: string;
        show: boolean;
        currentName: string;
        id: string;
    };
    namespace computed {
        function contentStyle(): {
            visibility: string;
        };
        function contentStyle(): {
            visibility: string;
        };
    }
    namespace methods {
        function updateNav(): void;
        function updateNav(): void;
        function addPane(): void;
        function addPane(): void;
        function removePane(): void;
        function removePane(): void;
    }
    namespace watch {
        function name(val: any): void;
        function name(val: any): void;
        function label(val: any): void;
        function label(val: any): void;
        function icon(): void;
        function icon(): void;
        function disabled(): void;
        function disabled(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
