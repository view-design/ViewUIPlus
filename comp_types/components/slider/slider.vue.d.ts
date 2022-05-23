declare namespace _default {
    const name: string;
    const mixins: {
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
    }[];
    const emits: string[];
    namespace components {
        export { InputNumber };
        export { Tooltip };
        export { SliderMarker };
    }
    namespace inject {
        namespace ModalInstance {
            const _default: any;
            export { _default as default };
        }
        namespace DrawerInstance {
            const _default_1: any;
            export { _default_1 as default };
        }
    }
    namespace props {
        export namespace min {
            export const type: NumberConstructor;
            const _default_2: number;
            export { _default_2 as default };
        }
        export namespace max {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_3: number;
            export { _default_3 as default };
        }
        export namespace step {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_4: number;
            export { _default_4 as default };
        }
        export namespace range {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace modelValue {
            const type_4: (NumberConstructor | ArrayConstructor)[];
            export { type_4 as type };
            const _default_6: number;
            export { _default_6 as default };
        }
        export namespace disabled {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
        export namespace showInput {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_8: boolean;
            export { _default_8 as default };
        }
        export namespace inputSize {
            const type_7: StringConstructor;
            export { type_7 as type };
            const _default_9: string;
            export { _default_9 as default };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
        }
        export namespace showStops {
            const type_8: BooleanConstructor;
            export { type_8 as type };
            const _default_10: boolean;
            export { _default_10 as default };
        }
        export namespace tipFormat {
            const type_9: FunctionConstructor;
            export { type_9 as type };
            function _default(val: any): any;
            function _default(val: any): any;
            export { _default as default };
        }
        export namespace showTip {
            const type_10: StringConstructor;
            export { type_10 as type };
            const _default_11: string;
            export { _default_11 as default };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
        }
        export namespace name_1 {
            const type_11: StringConstructor;
            export { type_11 as type };
        }
        export { name_1 as name };
        export namespace activeChange {
            const type_12: BooleanConstructor;
            export { type_12 as type };
            const _default_12: boolean;
            export { _default_12 as default };
        }
        export namespace marks {
            const type_13: ObjectConstructor;
            export { type_13 as type };
        }
    }
    function data(): {
        prefixCls: string;
        currentValue: any;
        dragging: boolean;
        pointerDown: string;
        startX: number;
        currentX: number;
        startPos: number;
        oldValue: any[];
        valueIndex: {
            min: number;
            max: number;
        };
        sliderWidth: number;
        isValueNull: boolean;
        id: string;
    };
    function data(): {
        prefixCls: string;
        currentValue: any;
        dragging: boolean;
        pointerDown: string;
        startX: number;
        currentX: number;
        startPos: number;
        oldValue: any[];
        valueIndex: {
            min: number;
            max: number;
        };
        sliderWidth: number;
        isValueNull: boolean;
        id: string;
    };
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
        function exportValue(values: any): void;
        function exportValue(values: any): void;
    }
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
        function minButtonClasses(): (string | {
            [x: string]: boolean;
        })[];
        function minButtonClasses(): (string | {
            [x: string]: boolean;
        })[];
        function maxButtonClasses(): (string | {
            [x: string]: boolean;
        })[];
        function maxButtonClasses(): (string | {
            [x: string]: boolean;
        })[];
        function exportValue(): any;
        function exportValue(): any;
        function minPosition(): number;
        function minPosition(): number;
        function maxPosition(): number;
        function barStyle(): {
            width: string;
        };
        function barStyle(): {
            width: string;
        };
        function stops(): number[];
        function stops(): number[];
        function markList(): {
            point: number;
            position: number;
            mark: any;
        }[];
        function markList(): {
            point: number;
            position: number;
            mark: any;
        }[];
        function tipDisabled(): boolean;
        function tipDisabled(): boolean;
        function valueRange(): number;
        function valueRange(): number;
        function firstPosition(): any;
        function firstPosition(): any;
        function secondPosition(): any;
        function secondPosition(): any;
    }
    namespace methods {
        function getPointerX(e: any): any;
        function getPointerX(e: any): any;
        function checkLimits([min, max]: [any, any]): any[];
        function checkLimits([min, max]: [any, any]): any[];
        function getCurrentValue(event: any, type: any): any;
        function getCurrentValue(event: any, type: any): any;
        function onKeyLeft(event: any, type: any): void;
        function onKeyLeft(event: any, type: any): void;
        function onKeyRight(event: any, type: any): void;
        function onKeyRight(event: any, type: any): void;
        function onPointerDown(event: any, type: any): void;
        function onPointerDown(event: any, type: any): void;
        function onPointerDragStart(event: any): void;
        function onPointerDragStart(event: any): void;
        function onPointerDrag(event: any): void;
        function onPointerDrag(event: any): void;
        function onPointerDragEnd(): void;
        function onPointerDragEnd(): void;
        function changeButtonPosition(newPos: any, forceType: any): void;
        function changeButtonPosition(newPos: any, forceType: any): void;
        function handleDecimal(pos: any, step: any): number;
        function handleDecimal(pos: any, step: any): number;
        function emitChange(): void;
        function emitChange(): void;
        function sliderClick(event: any): void;
        function sliderClick(event: any): void;
        function handleInputChange(val: any): void;
        function handleInputChange(val: any): void;
        function handleFocus(type: any): void;
        function handleFocus(type: any): void;
        function handleBlur(type: any): void;
        function handleBlur(type: any): void;
        function handleSetSliderWidth(): void;
        function handleSetSliderWidth(): void;
        function handleOnVisibleChange(val: any): void;
        function handleOnVisibleChange(val: any): void;
        function addSlider(instance: any): void;
        function addSlider(instance: any): void;
        function removeSlider(instance: any): void;
        function removeSlider(instance: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import InputNumber from "../../components/input-number/input-number.vue";
import Tooltip from "../../components/tooltip/tooltip.vue";
import SliderMarker from "./marker";
