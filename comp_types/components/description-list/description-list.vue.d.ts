declare namespace _default {
    const name: string;
    namespace components {
        export { Row };
    }
    function provide(): {
        DescriptionListInstance: {
            name: string;
            components: {
                Row: {
                    name: string;
                    provide(): {
                        RowInstance: any;
                    };
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
            provide(): any;
            props: {
                layout: {
                    validator(value: any): boolean;
                    default: string;
                };
                title: {
                    type: StringConstructor;
                };
                gutter: {
                    type: NumberConstructor;
                    default: number;
                };
                col: {
                    validator(value: any): boolean;
                    default: number;
                };
            };
        };
    };
    function provide(): {
        DescriptionListInstance: {
            name: string;
            components: {
                Row: {
                    name: string;
                    provide(): {
                        RowInstance: any;
                    };
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
            provide(): any;
            props: {
                layout: {
                    validator(value: any): boolean;
                    default: string;
                };
                title: {
                    type: StringConstructor;
                };
                gutter: {
                    type: NumberConstructor;
                    default: number;
                };
                col: {
                    validator(value: any): boolean;
                    default: number;
                };
            };
        };
    };
    namespace props {
        namespace layout {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace title {
            const type: StringConstructor;
        }
        namespace gutter {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace col {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_2: number;
            export { _default_2 as default };
        }
    }
}
export default _default;
import Row from "../row/row.vue";
