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
    namespace components {
        export { Dropdown };
        export { DropdownMenu };
        export { Select };
        export { Option };
        export { Tag };
        export { Icon };
        export { RadioGroup };
        export { Radio };
    }
    const emits: string[];
    namespace props {
        export namespace modelValue {
            const type: StringConstructor;
        }
        export namespace useName {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
        export namespace cities {
            const type_2: ArrayConstructor;
            export { type_2 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        export namespace disabled {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        export namespace clearable {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace showSuffix {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace size {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace transfer {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            function _default(): any;
            function _default(): any;
            export { _default as default };
        }
        export namespace name_1 {
            const type_7: StringConstructor;
            export { type_7 as type };
        }
        export { name_1 as name };
        export namespace elementId {
            const type_8: StringConstructor;
            export { type_8 as type };
        }
        export namespace placeholder {
            const type_9: StringConstructor;
            export { type_9 as type };
            const _default_4: string;
            export { _default_4 as default };
        }
        export namespace searchPlaceholder {
            const type_10: StringConstructor;
            export { type_10 as type };
            const _default_5: string;
            export { _default_5 as default };
        }
        export namespace transferClassName {
            const type_11: StringConstructor;
            export { type_11 as type };
        }
    }
    function data(): {
        currentValue: any;
        visible: boolean;
        provinceList: any[];
        cityListByProvince: any[];
        cityListByLetter: {};
        allCities: any[];
        listType: string;
        queryCity: string;
    };
    function data(): {
        currentValue: any;
        visible: boolean;
        provinceList: any[];
        cityListByProvince: any[];
        cityListByLetter: {};
        allCities: any[];
        listType: string;
        queryCity: string;
    };
    namespace watch {
        function modelValue(val: any): void;
        function modelValue(val: any): void;
    }
    namespace computed {
        function showCloseIcon(): boolean;
        function showCloseIcon(): boolean;
        function classes(): {
            [x: string]: any;
            "ivu-city-show-clear": () => boolean;
            "ivu-city-visible": any;
            "ivu-city-disabled": any;
        }[];
        function classes(): {
            [x: string]: any;
            "ivu-city-show-clear": () => boolean;
            "ivu-city-visible": any;
            "ivu-city-disabled": any;
        }[];
        function transferClasses(): string;
        function transferClasses(): string;
        function relCities(): any[];
        function relCities(): any[];
        function codeToName(): any;
        function codeToName(): any;
    }
    namespace methods {
        function handleSelect(val: any): void;
        function handleSelect(val: any): void;
        function handleChangeValue(val: any): void;
        function handleChangeValue(val: any): void;
        function handleClickLetter(l: any): void;
        function handleClickLetter(l: any): void;
        function clearSelect(): boolean;
        function clearSelect(): boolean;
        function handleToggleOpen(): boolean;
        function handleToggleOpen(): boolean;
        function handleVisibleChange(visible: any): void;
        function handleVisibleChange(visible: any): void;
        function handleClickOutside(e: any): void;
        function handleClickOutside(e: any): void;
        function handleGetProvinceByLetter(): void;
        function handleGetProvinceByLetter(): void;
        function handleGetCityByProvince(): void;
        function handleGetCityByProvince(): void;
        function handleGetCityByLetter(): void;
        function handleGetCityByLetter(): void;
    }
    function created(): void;
    function created(): void;
}
export default _default;
import Dropdown from "../dropdown/dropdown.vue";
import DropdownMenu from "../dropdown/dropdown-menu.vue";
import Select from "../select/select.vue";
import Option from "../select/option.vue";
import Tag from "../tag/tag.vue";
import Icon from "../icon/icon.vue";
import RadioGroup from "../radio/radio-group.vue";
import Radio from "../radio/radio.vue";
