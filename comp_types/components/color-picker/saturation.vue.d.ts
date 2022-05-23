declare namespace _default {
    const name: string;
    const mixins: ({
        data(): {
            prefixCls: string;
            inputPrefixCls: string;
            iconPrefixCls: string;
            transferPrefixCls: string;
        };
    } | {
        mixins: {
            inject: string[];
            methods: {
                handleEscape(e: any): void;
            };
        }[];
        props: {
            focused: {
                type: BooleanConstructor;
                default: boolean;
            };
            value: {
                type: ObjectConstructor;
                default: any;
            };
        };
        created(): void;
        beforeUnmount(): void;
        methods: {
            handleLeft(e: any): void;
            handleRight(e: any): void;
            handleUp(e: any): void;
            handleDown(e: any): void;
            handleMouseDown(e: any): void;
            handleMouseUp(): void;
            unbindEventListeners(): void;
            getLeft(e: any): number;
            getTop(e: any): number;
        };
    })[];
    const emits: string[];
    function data(): {
        left: number;
        right: number;
        up: number;
        down: number;
        multiplier: number;
        powerKey: string;
    };
    function data(): {
        left: number;
        right: number;
        up: number;
        down: number;
        multiplier: number;
        powerKey: string;
    };
    namespace computed {
        function bgColorStyle(): {
            background: string;
        };
        function bgColorStyle(): {
            background: string;
        };
        function pointerStyle(): {
            top: string;
            left: string;
        };
        function pointerStyle(): {
            top: string;
            left: string;
        };
    }
    namespace methods {
        function change(h: any, s: any, v: any, a: any): void;
        function change(h: any, s: any, v: any, a: any): void;
        function handleSlide(e: any, direction: any, key: any): void;
        function handleSlide(e: any, direction: any, key: any): void;
        function handleChange(e: any): void;
        function handleChange(e: any): void;
        function handleMouseDown(e: any): void;
        function handleMouseDown(e: any): void;
        function unbindEventListeners(e: any): void;
        function unbindEventListeners(e: any): void;
    }
}
export default _default;
