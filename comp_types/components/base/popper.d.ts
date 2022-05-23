declare namespace _default {
    const emits: string[];
    namespace props {
        namespace eventsEnabled {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace placement {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace boundariesPadding {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        const reference: ObjectConstructor;
        const popper: ObjectConstructor;
        namespace offset {
            const _default_3: number;
            export { _default_3 as default };
        }
        namespace modelValue {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        const transition: StringConstructor;
        namespace options {
            const type_4: ObjectConstructor;
            export { type_4 as type };
            function _default(): {
                modifiers: {
                    computeStyle: {
                        gpuAcceleration: boolean;
                    };
                    preventOverflow: {
                        boundariesElement: string;
                    };
                };
            };
            function _default(): {
                modifiers: {
                    computeStyle: {
                        gpuAcceleration: boolean;
                    };
                    preventOverflow: {
                        boundariesElement: string;
                    };
                };
            };
            export { _default as default };
        }
    }
    function data(): {
        visible: any;
    };
    function data(): {
        visible: any;
    };
    namespace watch {
        export namespace modelValue_1 {
            const immediate: boolean;
            function handler(val: any): void;
            function handler(val: any): void;
        }
        export { modelValue_1 as modelValue };
        export function visible(val: any): void;
        export function visible(val: any): void;
    }
    namespace methods {
        function createPopper(): void;
        function createPopper(): void;
        function updatePopper(): void;
        function updatePopper(): void;
        function doDestroy(): void;
        function doDestroy(): void;
    }
    function updated(): void;
    function updated(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
