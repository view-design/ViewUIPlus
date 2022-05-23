declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            t(...args: any[]): any;
        };
    }[];
    namespace components {
        export { Options };
    }
    const emits: string[];
    namespace props {
        namespace modelValue {
            export const type: NumberConstructor;
            const _default: number;
            export { _default as default };
        }
        namespace total {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace pageSize {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace pageSizeOpts {
            const type_3: ArrayConstructor;
            export { type_3 as type };
            function _default(): number[];
            function _default(): number[];
            export { _default as default };
        }
        namespace placement {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_3: string;
            export { _default_3 as default };
        }
        namespace transfer {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        namespace size {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace simple {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace showTotal {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace showElevator {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        namespace showSizer {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        namespace className {
            const type_9: StringConstructor;
            export { type_9 as type };
        }
        namespace styles {
            const type_10: ObjectConstructor;
            export { type_10 as type };
        }
        namespace prevText {
            const type_11: StringConstructor;
            export { type_11 as type };
            const _default_8: string;
            export { _default_8 as default };
        }
        namespace nextText {
            const type_12: StringConstructor;
            export { type_12 as type };
            const _default_9: string;
            export { _default_9 as default };
        }
        namespace disabled {
            const type_13: BooleanConstructor;
            export { type_13 as type };
            const _default_10: boolean;
            export { _default_10 as default };
        }
        namespace eventsEnabled {
            const type_14: BooleanConstructor;
            export { type_14 as type };
            const _default_11: boolean;
            export { _default_11 as default };
        }
    }
    function data(): {
        prefixCls: string;
        currentPage: any;
        currentPageSize: any;
    };
    function data(): {
        prefixCls: string;
        currentPage: any;
        currentPageSize: any;
    };
    namespace watch {
        function total(val: any): void;
        function total(val: any): void;
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        function pageSize(val: any): void;
        function pageSize(val: any): void;
    }
    namespace computed {
        function isSmall(): boolean;
        function isSmall(): boolean;
        function allPages(): number;
        function allPages(): number;
        function simpleWrapClasses(): (string | {
            [x: string]: boolean;
        })[];
        function simpleWrapClasses(): (string | {
            [x: string]: boolean;
        })[];
        function simplePagerClasses(): string;
        function simplePagerClasses(): string;
        function wrapClasses(): (string | {
            [x: string]: any;
            mini: boolean;
        })[];
        function wrapClasses(): (string | {
            [x: string]: any;
            mini: boolean;
        })[];
        function prevClasses(): (string | {
            [x: string]: any;
        })[];
        function prevClasses(): (string | {
            [x: string]: any;
        })[];
        function nextClasses(): (string | {
            [x: string]: any;
        })[];
        function nextClasses(): (string | {
            [x: string]: any;
        })[];
        function firstPageClasses(): (string | {
            [x: string]: boolean;
        })[];
        function firstPageClasses(): (string | {
            [x: string]: boolean;
        })[];
        function lastPageClasses(): (string | {
            [x: string]: boolean;
        })[];
        function lastPageClasses(): (string | {
            [x: string]: boolean;
        })[];
    }
    namespace methods {
        function changePage(page: any): void;
        function changePage(page: any): void;
        function prev(): boolean;
        function prev(): boolean;
        function next(): boolean;
        function next(): boolean;
        function fastPrev(): void;
        function fastPrev(): void;
        function fastNext(): void;
        function fastNext(): void;
        function onSize(pageSize: any): void;
        function onSize(pageSize: any): void;
        function onPage(page: any): void;
        function onPage(page: any): void;
        function keyDown(e: any): void;
        function keyDown(e: any): void;
        function keyUp(e: any): void;
        function keyUp(e: any): void;
    }
}
export default _default;
import Options from "./options.vue";
