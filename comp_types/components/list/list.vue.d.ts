declare namespace _default {
    const name: string;
    function provide(): {
        ListInstance: {
            name: string;
            provide(): any;
            components: {
                Spin: {
                    name: string;
                    mixins: {
                        props: {
                            lockScroll: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                        };
                        methods: {
                            checkScrollBar(): void;
                            checkMaskInVisible(): boolean;
                            setScrollBar(): void;
                            resetScrollBar(): void;
                            addScrollEffect(): void;
                            removeScrollEffect(): void;
                        };
                    }[];
                    props: {
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        fix: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        fullscreen: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        show: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        showText: boolean;
                        visible: boolean;
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                        mainClasses(): string;
                        dotClasses(): string;
                        textClasses(): string;
                        fullscreenVisible(): any;
                    };
                    watch: {
                        visible(val: any): void;
                    };
                    mounted(): void;
                };
            };
            props: {
                border: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                itemLayout: {
                    validator(value: any): boolean;
                    default: string;
                };
                header: {
                    type: StringConstructor;
                    default: string;
                };
                footer: {
                    type: StringConstructor;
                    default: string;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                split: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {};
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
            };
            methods: {};
        };
    };
    function provide(): {
        ListInstance: {
            name: string;
            provide(): any;
            components: {
                Spin: {
                    name: string;
                    mixins: {
                        props: {
                            lockScroll: {
                                type: BooleanConstructor;
                                default: boolean;
                            };
                        };
                        methods: {
                            checkScrollBar(): void;
                            checkMaskInVisible(): boolean;
                            setScrollBar(): void;
                            resetScrollBar(): void;
                            addScrollEffect(): void;
                            removeScrollEffect(): void;
                        };
                    }[];
                    props: {
                        size: {
                            validator(value: any): boolean;
                            default(): any;
                        };
                        fix: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        fullscreen: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                        show: {
                            type: BooleanConstructor;
                            default: boolean;
                        };
                    };
                    data(): {
                        showText: boolean;
                        visible: boolean;
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: any;
                        })[];
                        mainClasses(): string;
                        dotClasses(): string;
                        textClasses(): string;
                        fullscreenVisible(): any;
                    };
                    watch: {
                        visible(val: any): void;
                    };
                    mounted(): void;
                };
            };
            props: {
                border: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                itemLayout: {
                    validator(value: any): boolean;
                    default: string;
                };
                header: {
                    type: StringConstructor;
                    default: string;
                };
                footer: {
                    type: StringConstructor;
                    default: string;
                };
                loading: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                size: {
                    validator(value: any): boolean;
                    default(): any;
                };
                split: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            };
            data(): {};
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
            };
            methods: {};
        };
    };
    namespace components {
        export { Spin };
    }
    namespace props {
        namespace border {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace itemLayout {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace header {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace footer {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_3: string;
            export { _default_3 as default };
        }
        namespace loading {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace split {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
    }
    function data(): {};
    function data(): {};
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
    }
    const methods: {};
}
export default _default;
import Spin from "../spin";
