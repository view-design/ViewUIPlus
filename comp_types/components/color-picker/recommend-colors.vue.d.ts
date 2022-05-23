declare namespace _default {
    const name: string;
    const mixins: ({
        inject: string[];
        methods: {
            handleEscape(e: any): void;
        };
    } | {
        data(): {
            prefixCls: string;
            inputPrefixCls: string;
            iconPrefixCls: string;
            transferPrefixCls: string;
        };
    })[];
    const emits: string[];
    namespace props {
        namespace list {
            export const type: ArrayConstructor;
            const _default: any;
            export { _default as default };
        }
    }
    function data(): {
        left: number;
        right: number;
        up: number;
        down: number;
        powerKey: string;
        grid: {
            x: number;
            y: number;
        };
        rows: number;
        columns: number;
    };
    function data(): {
        left: number;
        right: number;
        up: number;
        down: number;
        powerKey: string;
        grid: {
            x: number;
            y: number;
        };
        rows: number;
        columns: number;
    };
    namespace computed {
        function hideClass(): string;
        function hideClass(): string;
        function linearIndex(): any;
        function linearIndex(): any;
        function currentCircle(): any;
        function currentCircle(): any;
    }
    namespace methods {
        function getLinearIndex(grid: any): number;
        function getLinearIndex(grid: any): number;
        function getMaxLimit(axis: any): any;
        function getMaxLimit(axis: any): any;
        function handleArrow(e: any, axis: any, direction: any): void;
        function handleArrow(e: any, axis: any, direction: any): void;
        function blurColor(): void;
        function blurColor(): void;
        function focusColor(): void;
        function focusColor(): void;
        function handleEnter(e: any): void;
        function handleEnter(e: any): void;
        function handleClick(e: any, circle: any): void;
        function handleClick(e: any, circle: any): void;
        function lineBreak(list: any, index: any): boolean;
        function lineBreak(list: any, index: any): boolean;
    }
}
export default _default;
