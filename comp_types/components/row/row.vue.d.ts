declare namespace _default {
    const name: string;
    function provide(): {
        RowInstance: {
            name: string;
            provide(): any;
            props: {
                type: {
                    validator(value: any): boolean;
                };
                align: {
                    validator(value: any): boolean;
                };
                justify: {
                    validator(value: any): boolean;
                };
                gutter: {
                    type: NumberConstructor;
                    default: number;
                };
                className: StringConstructor;
                wrap: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                styles(): {};
            };
        };
    };
    function provide(): {
        RowInstance: {
            name: string;
            provide(): any;
            props: {
                type: {
                    validator(value: any): boolean;
                };
                align: {
                    validator(value: any): boolean;
                };
                justify: {
                    validator(value: any): boolean;
                };
                gutter: {
                    type: NumberConstructor;
                    default: number;
                };
                className: StringConstructor;
                wrap: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                styles(): {};
            };
        };
    };
    namespace props {
        namespace type {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace align {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace justify {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace gutter {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default: number;
            export { _default as default };
        }
        const className: StringConstructor;
        namespace wrap {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
    }
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function styles(): {};
        function styles(): {};
    }
}
export default _default;
