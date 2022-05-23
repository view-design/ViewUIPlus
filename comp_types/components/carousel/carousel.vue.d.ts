declare namespace _default {
    const name: string;
    function provide(): {
        CarouselInstance: {
            name: string;
            provide(): any;
            components: {
                Icon: {
                    name: string;
                    props: {
                        type: {
                            type: StringConstructor;
                            default: string;
                        };
                        size: (StringConstructor | NumberConstructor)[];
                        color: StringConstructor;
                        custom: {
                            type: StringConstructor;
                            default: string;
                        };
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: boolean;
                        })[];
                        styles(): {
                            'font-size': string;
                            color: any;
                        };
                    };
                };
            };
            emits: string[];
            props: {
                arrow: {
                    type: StringConstructor;
                    default: string;
                    validator(value: any): boolean;
                };
                autoplay: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoplaySpeed: {
                    type: NumberConstructor;
                    default: number;
                };
                loop: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                easing: {
                    type: StringConstructor;
                    default: string;
                };
                dots: {
                    type: StringConstructor;
                    default: string;
                    validator(value: any): boolean;
                };
                radiusDot: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                trigger: {
                    type: StringConstructor;
                    default: string;
                    validator(value: any): boolean;
                };
                modelValue: {
                    type: NumberConstructor;
                    default: number;
                };
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: string;
                    validator(value: any): boolean;
                };
            };
            data(): {
                prefixCls: string;
                listWidth: number;
                trackWidth: number;
                trackOffset: number;
                trackCopyOffset: number;
                showCopyTrack: boolean;
                slides: any[];
                slideInstances: any[];
                timer: any;
                ready: boolean;
                currentIndex: any;
                trackIndex: any;
                copyTrackIndex: any;
                hideTrackPos: number;
                carouselItemList: any[];
            };
            computed: {
                classes(): string[];
                trackStyles(): {
                    width: string;
                    transform: string;
                    transition: string;
                    visibility: string;
                };
                copyTrackStyles(): {
                    width: string;
                    transform: string;
                    transition: string;
                    position: string;
                };
                arrowClasses(): string[];
                dotsClasses(): string[];
            };
            methods: {
                findChild(cb: any): void;
                initCopyTrackDom(): void;
                updateSlides(init: any): void;
                updatePos(): void;
                slotChange(): void;
                handleResize(): void;
                updateTrackPos(index: any): void;
                updateTrackIndex(index: any): void;
                add(offset: any): void;
                arrowEvent(offset: any): void;
                dotsEvent(event: any, n: any): void;
                setAutoplay(): void;
                updateOffset(): void;
                handleClick(type: any): void;
            };
            watch: {
                autoplay(): void;
                autoplaySpeed(): void;
                trackIndex(): void;
                copyTrackIndex(): void;
                height(): void;
                modelValue(val: any): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    function provide(): {
        CarouselInstance: {
            name: string;
            provide(): any;
            components: {
                Icon: {
                    name: string;
                    props: {
                        type: {
                            type: StringConstructor;
                            default: string;
                        };
                        size: (StringConstructor | NumberConstructor)[];
                        color: StringConstructor;
                        custom: {
                            type: StringConstructor;
                            default: string;
                        };
                    };
                    computed: {
                        classes(): (string | {
                            [x: string]: boolean;
                        })[];
                        styles(): {
                            'font-size': string;
                            color: any;
                        };
                    };
                };
            };
            emits: string[];
            props: {
                arrow: {
                    type: StringConstructor;
                    default: string;
                    validator(value: any): boolean;
                };
                autoplay: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                autoplaySpeed: {
                    type: NumberConstructor;
                    default: number;
                };
                loop: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                easing: {
                    type: StringConstructor;
                    default: string;
                };
                dots: {
                    type: StringConstructor;
                    default: string;
                    validator(value: any): boolean;
                };
                radiusDot: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                trigger: {
                    type: StringConstructor;
                    default: string;
                    validator(value: any): boolean;
                };
                modelValue: {
                    type: NumberConstructor;
                    default: number;
                };
                height: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: string;
                    validator(value: any): boolean;
                };
            };
            data(): {
                prefixCls: string;
                listWidth: number;
                trackWidth: number;
                trackOffset: number;
                trackCopyOffset: number;
                showCopyTrack: boolean;
                slides: any[];
                slideInstances: any[];
                timer: any;
                ready: boolean;
                currentIndex: any;
                trackIndex: any;
                copyTrackIndex: any;
                hideTrackPos: number;
                carouselItemList: any[];
            };
            computed: {
                classes(): string[];
                trackStyles(): {
                    width: string;
                    transform: string;
                    transition: string;
                    visibility: string;
                };
                copyTrackStyles(): {
                    width: string;
                    transform: string;
                    transition: string;
                    position: string;
                };
                arrowClasses(): string[];
                dotsClasses(): string[];
            };
            methods: {
                findChild(cb: any): void;
                initCopyTrackDom(): void;
                updateSlides(init: any): void;
                updatePos(): void;
                slotChange(): void;
                handleResize(): void;
                updateTrackPos(index: any): void;
                updateTrackIndex(index: any): void;
                add(offset: any): void;
                arrowEvent(offset: any): void;
                dotsEvent(event: any, n: any): void;
                setAutoplay(): void;
                updateOffset(): void;
                handleClick(type: any): void;
            };
            watch: {
                autoplay(): void;
                autoplaySpeed(): void;
                trackIndex(): void;
                copyTrackIndex(): void;
                height(): void;
                modelValue(val: any): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    namespace components {
        export { Icon };
    }
    const emits: string[];
    namespace props {
        namespace arrow {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
        }
        namespace autoplay {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace autoplaySpeed {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        namespace loop {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace easing {
            const type_4: StringConstructor;
            export { type_4 as type };
            const _default_4: string;
            export { _default_4 as default };
        }
        namespace dots {
            const type_5: StringConstructor;
            export { type_5 as type };
            const _default_5: string;
            export { _default_5 as default };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
        }
        namespace radiusDot {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        namespace trigger {
            const type_7: StringConstructor;
            export { type_7 as type };
            const _default_7: string;
            export { _default_7 as default };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
        }
        namespace modelValue {
            const type_8: NumberConstructor;
            export { type_8 as type };
            const _default_8: number;
            export { _default_8 as default };
        }
        namespace height {
            const type_9: (StringConstructor | NumberConstructor)[];
            export { type_9 as type };
            const _default_9: string;
            export { _default_9 as default };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
        }
    }
    function data(): {
        prefixCls: string;
        listWidth: number;
        trackWidth: number;
        trackOffset: number;
        trackCopyOffset: number;
        showCopyTrack: boolean;
        slides: any[];
        slideInstances: any[];
        timer: any;
        ready: boolean;
        currentIndex: any;
        trackIndex: any;
        copyTrackIndex: any;
        hideTrackPos: number;
        carouselItemList: any[];
    };
    function data(): {
        prefixCls: string;
        listWidth: number;
        trackWidth: number;
        trackOffset: number;
        trackCopyOffset: number;
        showCopyTrack: boolean;
        slides: any[];
        slideInstances: any[];
        timer: any;
        ready: boolean;
        currentIndex: any;
        trackIndex: any;
        copyTrackIndex: any;
        hideTrackPos: number;
        carouselItemList: any[];
    };
    namespace computed {
        function classes(): string[];
        function classes(): string[];
        function trackStyles(): {
            width: string;
            transform: string;
            transition: string;
            visibility: string;
        };
        function trackStyles(): {
            width: string;
            transform: string;
            transition: string;
            visibility: string;
        };
        function copyTrackStyles(): {
            width: string;
            transform: string;
            transition: string;
            position: string;
        };
        function copyTrackStyles(): {
            width: string;
            transform: string;
            transition: string;
            position: string;
        };
        function arrowClasses(): string[];
        function arrowClasses(): string[];
        function dotsClasses(): string[];
        function dotsClasses(): string[];
    }
    namespace methods {
        function findChild(cb: any): void;
        function findChild(cb: any): void;
        function initCopyTrackDom(): void;
        function initCopyTrackDom(): void;
        function updateSlides(init: any): void;
        function updateSlides(init: any): void;
        function updatePos(): void;
        function updatePos(): void;
        function slotChange(): void;
        function slotChange(): void;
        function handleResize(): void;
        function handleResize(): void;
        function updateTrackPos(index: any): void;
        function updateTrackPos(index: any): void;
        function updateTrackIndex(index: any): void;
        function updateTrackIndex(index: any): void;
        function add(offset: any): void;
        function add(offset: any): void;
        function arrowEvent(offset: any): void;
        function arrowEvent(offset: any): void;
        function dotsEvent(event: any, n: any): void;
        function dotsEvent(event: any, n: any): void;
        function setAutoplay(): void;
        function setAutoplay(): void;
        function updateOffset(): void;
        function updateOffset(): void;
        function handleClick(type: any): void;
        function handleClick(type: any): void;
    }
    namespace watch {
        function autoplay(): void;
        function autoplay(): void;
        function autoplaySpeed(): void;
        function autoplaySpeed(): void;
        function trackIndex(): void;
        function trackIndex(): void;
        function copyTrackIndex(): void;
        function copyTrackIndex(): void;
        function height(): void;
        function height(): void;
        function modelValue(val: any): void;
        function modelValue(val: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import Icon from "../icon/icon.vue";
