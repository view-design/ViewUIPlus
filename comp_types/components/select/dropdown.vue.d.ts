declare namespace _default {
    const name: string;
    const emits: string[];
    namespace props {
        namespace placement {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
        namespace className {
            const type_1: StringConstructor;
            export { type_1 as type };
        }
        namespace transfer {
            const type_2: BooleanConstructor;
            export { type_2 as type };
        }
        namespace eventsEnabled {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace visible {
            const type_4: BooleanConstructor;
            export { type_4 as type };
        }
        namespace classes {
            const type_5: ObjectConstructor;
            export { type_5 as type };
            function _default_2(): void;
            export { _default_2 as default };
        }
        namespace styles {
            const type_6: ObjectConstructor;
            export { type_6 as type };
            function _default_3(): void;
            export { _default_3 as default };
        }
        namespace transitionName {
            const type_7: StringConstructor;
            export { type_7 as type };
            const _default_4: string;
            export { _default_4 as default };
        }
        namespace boundariesElement {
            const type_8: (StringConstructor | {
                new (): HTMLElement;
                prototype: HTMLElement;
            })[];
            export { type_8 as type };
            const _default_5: string;
            export { _default_5 as default };
        }
    }
    function data(): {
        popper: any;
        width: string;
        popperStatus: boolean;
        tIndex: any;
    };
    function data(): {
        popper: any;
        width: string;
        popperStatus: boolean;
        tIndex: any;
    };
    namespace computed {
        function mergedStyle(): any;
        function mergedStyle(): any;
        function mergedClass(): any;
        function mergedClass(): any;
    }
    namespace methods {
        function update(): void;
        function update(): void;
        function destroy(): void;
        function destroy(): void;
        function resetTransformOrigin(): void;
        function resetTransformOrigin(): void;
        function handleGetIndex(): number;
        function handleGetIndex(): number;
        function handleMouseenter(e: any): void;
        function handleMouseenter(e: any): void;
        function handleMouseleave(e: any): void;
        function handleMouseleave(e: any): void;
        function handleOnUpdatePopper(): void;
        function handleOnUpdatePopper(): void;
        function handleOnDestroyPopper(): void;
        function handleOnDestroyPopper(): void;
        function handleClick(event: any): void;
        function handleClick(event: any): void;
    }
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
