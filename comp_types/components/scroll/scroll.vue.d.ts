declare namespace _default {
    const name: string;
    const mixins: {
        methods: {
            t(...args: any[]): any;
        };
    }[];
    namespace components {
        export { loader };
    }
    namespace props {
        namespace height {
            export const type: (StringConstructor | NumberConstructor)[];
            const _default: number;
            export { _default as default };
        }
        namespace onReachTop {
            const type_1: FunctionConstructor;
            export { type_1 as type };
        }
        namespace onReachBottom {
            const type_2: FunctionConstructor;
            export { type_2 as type };
        }
        namespace onReachEdge {
            const type_3: FunctionConstructor;
            export { type_3 as type };
        }
        namespace loadingText {
            const type_4: StringConstructor;
            export { type_4 as type };
        }
        const distanceToEdge: (NumberConstructor | ArrayConstructor)[];
        namespace stopSlide {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
    }
    function data(): {
        showTopLoader: boolean;
        showBottomLoader: boolean;
        showBodyLoader: boolean;
        lastScroll: number;
        reachedTopScrollLimit: boolean;
        reachedBottomScrollLimit: boolean;
        topRubberPadding: number;
        bottomRubberPadding: number;
        rubberRollBackTimeout: boolean;
        isLoading: boolean;
        pointerTouchDown: any;
        touchScroll: boolean;
        handleScroll: () => void;
        pointerUpHandler: () => void;
        pointerMoveHandler: () => void;
        topProximityThreshold: any;
        bottomProximityThreshold: any;
    };
    function data(): {
        showTopLoader: boolean;
        showBottomLoader: boolean;
        showBodyLoader: boolean;
        lastScroll: number;
        reachedTopScrollLimit: boolean;
        reachedBottomScrollLimit: boolean;
        topRubberPadding: number;
        bottomRubberPadding: number;
        rubberRollBackTimeout: boolean;
        isLoading: boolean;
        pointerTouchDown: any;
        touchScroll: boolean;
        handleScroll: () => void;
        pointerUpHandler: () => void;
        pointerMoveHandler: () => void;
        topProximityThreshold: any;
        bottomProximityThreshold: any;
    };
    namespace computed {
        function wrapClasses(): string;
        function wrapClasses(): string;
        function scrollContainerClasses(): (string | {
            [x: string]: any;
        })[];
        function scrollContainerClasses(): (string | {
            [x: string]: any;
        })[];
        function slotContainerClasses(): (string | {
            [x: string]: any;
        })[];
        function slotContainerClasses(): (string | {
            [x: string]: any;
        })[];
        function loaderClasses(): string;
        function loaderClasses(): string;
        function wrapperPadding(): {
            paddingTop: string;
            paddingBottom: string;
        };
        function wrapperPadding(): {
            paddingTop: string;
            paddingBottom: string;
        };
        function localeLoadingText(): any;
        function localeLoadingText(): any;
    }
    namespace methods {
        function waitOneSecond(): Promise<any>;
        function waitOneSecond(): Promise<any>;
        function calculateProximityThreshold(): any[];
        function calculateProximityThreshold(): any[];
        function onCallback(dir: any): void;
        function onCallback(dir: any): void;
        function reset(): void;
        function reset(): void;
        function onWheel(event: any): void;
        function onWheel(event: any): void;
        function stretchEdge(direction: any): void;
        function stretchEdge(direction: any): void;
        function onScroll(): void;
        function onScroll(): void;
        function getTouchCoordinates(e: any): {
            x: any;
            y: any;
        };
        function getTouchCoordinates(e: any): {
            x: any;
            y: any;
        };
        function onPointerDown(e: any): void;
        function onPointerDown(e: any): void;
        function onPointerMove(e: any): void;
        function onPointerMove(e: any): void;
        function onPointerUp(): void;
        function onPointerUp(): void;
    }
    function created(): void;
    function created(): void;
}
export default _default;
import loader from "./loading-component.vue";
