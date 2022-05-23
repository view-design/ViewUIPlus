declare namespace _default {
    const name: string;
    namespace props {
        export const count: NumberConstructor;
        export namespace dot {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        export namespace overflowCount {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        export const className: StringConstructor;
        export namespace showZero {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace text {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_3: string;
            export { _default_3 as default };
        }
        export namespace status {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        export namespace type_4 {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        export { type_4 as type };
        export namespace offset {
            const type_5: ArrayConstructor;
            export { type_5 as type };
        }
        export namespace color {
            const type_6: StringConstructor;
            export { type_6 as type };
        }
    }
    namespace computed {
        function classes(): string;
        function classes(): string;
        function dotClasses(): string;
        function dotClasses(): string;
        function countClasses(): (string | {
            [x: string]: boolean | (() => boolean);
        })[];
        function countClasses(): (string | {
            [x: string]: boolean | (() => boolean);
        })[];
        function customCountClasses(): (string | {
            [x: string]: boolean;
        })[];
        function customCountClasses(): (string | {
            [x: string]: boolean;
        })[];
        function statusClasses(): (string | {
            [x: string]: boolean;
        })[];
        function statusClasses(): (string | {
            [x: string]: boolean;
        })[];
        function statusStyles(): {
            backgroundColor?: undefined;
        } | {
            backgroundColor: any;
        };
        function statusStyles(): {
            backgroundColor?: undefined;
        } | {
            backgroundColor: any;
        };
        function styles(): {
            'margin-top': string;
            'margin-right': string;
        };
        function styles(): {
            'margin-top': string;
            'margin-right': string;
        };
        function finalCount(): any;
        function finalCount(): any;
        function badge(): any;
        function badge(): any;
        function hasCount(): boolean;
        function hasCount(): boolean;
        function alone(): boolean;
        function alone(): boolean;
    }
}
export default _default;
