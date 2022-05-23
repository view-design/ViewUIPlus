declare namespace _default {
    const name: string;
    const mixins: ({
        methods: {
            t(...args: any[]): any;
        };
    } | {
        inject: {
            FormInstance: {
                default: string;
            };
            FormItemInstance: {
                default: any;
            };
        };
        computed: {
            itemDisabled(): boolean;
        };
        methods: {
            handleFormItemChange(type: any, data: any): void;
        };
    })[];
    const emits: string[];
    namespace props {
        export namespace count {
            export const type: NumberConstructor;
            const _default: number;
            export { _default as default };
        }
        export namespace modelValue {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        export namespace allowHalf {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace disabled {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace showText {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        export namespace name_1 {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        export { name_1 as name };
        export namespace clearable {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace character {
            const type_7: StringConstructor;
            export { type_7 as type };
            const _default_6: string;
            export { _default_6 as default };
        }
        export namespace icon {
            const type_8: StringConstructor;
            export { type_8 as type };
            const _default_7: string;
            export { _default_7 as default };
        }
        export namespace customIcon {
            const type_9: StringConstructor;
            export { type_9 as type };
            const _default_8: string;
            export { _default_8 as default };
        }
    }
    function data(): {
        prefixCls: string;
        hoverIndex: number;
        isHover: boolean;
        isHalf: boolean;
        currentValue: any;
    };
    function data(): {
        prefixCls: string;
        hoverIndex: number;
        isHover: boolean;
        isHalf: boolean;
        currentValue: any;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function iconClasses(): (string | {
            [x: string]: boolean;
        })[];
        function iconClasses(): (string | {
            [x: string]: boolean;
        })[];
        function showCharacter(): boolean;
        function showCharacter(): boolean;
    }
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        const currentValue: any;
    }
    namespace methods {
        function starCls(value: any): {
            [x: string]: any;
        }[];
        function starCls(value: any): {
            [x: string]: any;
        }[];
        function handleMousemove(value: any, event: any): void;
        function handleMousemove(value: any, event: any): void;
        function handleMouseleave(): void;
        function handleMouseleave(): void;
        function setHalf(val: any): void;
        function setHalf(val: any): void;
        function handleClick(value: any): void;
        function handleClick(value: any): void;
    }
}
export default _default;
