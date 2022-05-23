declare namespace _default {
    const mixins: {
        inject: string[];
        methods: {
            handleEscape(e: any): void;
        };
    }[];
    namespace props {
        namespace focused {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace value {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            const _default_1: any;
            export { _default_1 as default };
        }
    }
    function created(): void;
    function created(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
    namespace methods {
        function handleLeft(e: any): void;
        function handleLeft(e: any): void;
        function handleRight(e: any): void;
        function handleRight(e: any): void;
        function handleUp(e: any): void;
        function handleUp(e: any): void;
        function handleDown(e: any): void;
        function handleDown(e: any): void;
        function handleMouseDown(e: any): void;
        function handleMouseDown(e: any): void;
        function handleMouseUp(): void;
        function handleMouseUp(): void;
        function unbindEventListeners(): void;
        function unbindEventListeners(): void;
        function getLeft(e: any): number;
        function getLeft(e: any): number;
        function getTop(e: any): number;
        function getTop(e: any): number;
    }
}
export default _default;
