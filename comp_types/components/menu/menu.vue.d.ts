declare namespace _default {
    const name: string;
    const emits: string[];
    function provide(): {
        MenuInstance: {
            name: string;
            emits: string[];
            provide(): any;
            props: {
                mode: {
                    validator(value: any): boolean;
                    default: string;
                };
                theme: {
                    validator(value: any): boolean;
                    default: string;
                };
                activeName: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                openNames: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                accordion: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                width: {
                    type: StringConstructor;
                    default: string;
                };
            };
            data(): {
                currentActiveName: any;
                openedNames: any[];
                submenuList: any[];
                menuItemList: any[];
                ready: boolean;
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                styles(): {
                    width: any;
                };
            };
            methods: {
                updateActiveName(): void;
                updateOpenKeys(name: any): void;
                updateOpened(): void;
                handleEmitSelectEvent(name: any): void;
                handleMenuItemSelect(name: any): void;
            };
            mounted(): void;
            watch: {
                openNames(names: any): void;
                activeName(val: any): void;
            };
        };
    };
    function provide(): {
        MenuInstance: {
            name: string;
            emits: string[];
            provide(): any;
            props: {
                mode: {
                    validator(value: any): boolean;
                    default: string;
                };
                theme: {
                    validator(value: any): boolean;
                    default: string;
                };
                activeName: {
                    type: (StringConstructor | NumberConstructor)[];
                };
                openNames: {
                    type: ArrayConstructor;
                    default(): any[];
                };
                accordion: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                width: {
                    type: StringConstructor;
                    default: string;
                };
            };
            data(): {
                currentActiveName: any;
                openedNames: any[];
                submenuList: any[];
                menuItemList: any[];
                ready: boolean;
            };
            computed: {
                classes(): (string | {
                    [x: string]: any;
                })[];
                styles(): {
                    width: any;
                };
            };
            methods: {
                updateActiveName(): void;
                updateOpenKeys(name: any): void;
                updateOpened(): void;
                handleEmitSelectEvent(name: any): void;
                handleMenuItemSelect(name: any): void;
            };
            mounted(): void;
            watch: {
                openNames(names: any): void;
                activeName(val: any): void;
            };
        };
    };
    namespace props {
        namespace mode {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default: string;
            export { _default as default };
        }
        namespace theme {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace activeName {
            const type: (StringConstructor | NumberConstructor)[];
        }
        namespace openNames {
            const type_1: ArrayConstructor;
            export { type_1 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        namespace accordion {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        namespace width {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_3: string;
            export { _default_3 as default };
        }
    }
    function data(): {
        currentActiveName: any;
        openedNames: any[];
        submenuList: any[];
        menuItemList: any[];
        ready: boolean;
    };
    function data(): {
        currentActiveName: any;
        openedNames: any[];
        submenuList: any[];
        menuItemList: any[];
        ready: boolean;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function styles(): {
            width: any;
        };
        function styles(): {
            width: any;
        };
    }
    namespace methods {
        function updateActiveName(): void;
        function updateActiveName(): void;
        function updateOpenKeys(name: any): void;
        function updateOpenKeys(name: any): void;
        function updateOpened(): void;
        function updateOpened(): void;
        function handleEmitSelectEvent(name: any): void;
        function handleEmitSelectEvent(name: any): void;
        function handleMenuItemSelect(name: any): void;
        function handleMenuItemSelect(name: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    namespace watch {
        function openNames(names: any): void;
        function openNames(names: any): void;
        function activeName(val: any): void;
        function activeName(val: any): void;
        const currentActiveName: any;
    }
}
export default _default;
