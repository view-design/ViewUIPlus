declare namespace _default {
    const name: string;
    namespace components {
        export { Trigger };
    }
    const emits: string[];
    namespace props {
        namespace modelValue {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: number;
            export { _default as default };
        }
        namespace mode {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace min {
            const type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace max {
            const type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
            const _default_3: string;
            export { _default_3 as default };
        }
    }
    /**
     * Events
     * @on-move-start
     * @on-moving 返回值：事件对象，但是在事件对象中加入了两个参数：atMin(当前是否在最小值处), atMax(当前是否在最大值处)
     * @on-move-end
     */
    function data(): {
        prefix: string;
        offset: number;
        oldOffset: number;
        isMoving: boolean;
        computedMin: number;
        computedMax: number;
        currentValue: number;
    };
    /**
     * Events
     * @on-move-start
     * @on-moving 返回值：事件对象，但是在事件对象中加入了两个参数：atMin(当前是否在最小值处), atMax(当前是否在最大值处)
     * @on-move-end
     */
    function data(): {
        prefix: string;
        offset: number;
        oldOffset: number;
        isMoving: boolean;
        computedMin: number;
        computedMax: number;
        currentValue: number;
    };
    namespace computed {
        function wrapperClasses(): string[];
        function wrapperClasses(): string[];
        function paneClasses(): (string | {
            [x: string]: any;
        })[];
        function paneClasses(): (string | {
            [x: string]: any;
        })[];
        function isHorizontal(): boolean;
        function isHorizontal(): boolean;
        function anotherOffset(): number;
        function anotherOffset(): number;
        function valueIsPx(): boolean;
        function valueIsPx(): boolean;
        function offsetSize(): "offsetWidth" | "offsetHeight";
        function offsetSize(): "offsetWidth" | "offsetHeight";
    }
    namespace methods {
        function px2percent(numerator: any, denominator: any): number;
        function px2percent(numerator: any, denominator: any): number;
        function getComputedThresholdValue(type: any): any;
        function getComputedThresholdValue(type: any): any;
        function getMin(value1: any, value2: any): string | number;
        function getMin(value1: any, value2: any): string | number;
        function getMax(value1: any, value2: any): string | number;
        function getMax(value1: any, value2: any): string | number;
        function getAnotherOffset(value: any): number;
        function getAnotherOffset(value: any): number;
        function handleMove(e: any): void;
        function handleMove(e: any): void;
        function handleUp(): void;
        function handleUp(): void;
        function handleMousedown(e: any): void;
        function handleMousedown(e: any): void;
        function computeOffset(): void;
        function computeOffset(): void;
    }
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import Trigger from "./trigger.vue";
