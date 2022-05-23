declare namespace _default {
    const name: string;
    const emits: string[];
    namespace props {
        namespace modelValue {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace width {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace collapsedWidth {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace hideTrigger {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace breakpoint {
            const type_4: StringConstructor;
            export { type_4 as type };
            export function validator(val: any): boolean;
            export function validator(val: any): boolean;
        }
        namespace collapsible {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace defaultCollapsed {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace reverseArrow {
            const type_7: BooleanConstructor;
            export { type_7 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
    }
    function data(): {
        prefixCls: string;
        mediaMatched: boolean;
    };
    function data(): {
        prefixCls: string;
        mediaMatched: boolean;
    };
    namespace computed {
        function wrapClasses(): string[];
        function wrapClasses(): string[];
        function wrapStyles(): {
            width: string;
            minWidth: string;
            maxWidth: string;
            flex: string;
        };
        function wrapStyles(): {
            width: string;
            minWidth: string;
            maxWidth: string;
            flex: string;
        };
        function triggerClasses(): string[];
        function triggerClasses(): string[];
        function childClasses(): string;
        function childClasses(): string;
        function zeroWidthTriggerClasses(): string[];
        function zeroWidthTriggerClasses(): string[];
        function triggerIconClasses(): string[];
        function triggerIconClasses(): string[];
        function siderWidth(): any;
        function siderWidth(): any;
        function showZeroTrigger(): boolean;
        function showZeroTrigger(): boolean;
        function showBottomTrigger(): boolean;
        function showBottomTrigger(): boolean;
    }
    namespace methods {
        function toggleCollapse(): void;
        function toggleCollapse(): void;
        function matchMedia(): void;
        function matchMedia(): void;
        function onWindowResize(): void;
        function onWindowResize(): void;
    }
    namespace watch {
        function modelValue(state: any): void;
        function modelValue(state: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
