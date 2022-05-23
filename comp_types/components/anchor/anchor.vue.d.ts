declare namespace _default {
    const name: string;
    function provide(): {
        AnchorInstance: {
            name: string;
            provide(): any;
            emits: string[];
            props: {
                affix: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                offsetTop: {
                    type: NumberConstructor;
                    default: number;
                };
                offsetBottom: NumberConstructor;
                bounds: {
                    type: NumberConstructor;
                    default: number;
                };
                container: any;
                showInk: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollOffset: {
                    type: NumberConstructor;
                    default: number;
                };
            };
            data(): {
                prefix: string;
                isAffixed: boolean;
                inkTop: number;
                animating: boolean;
                currentLink: string;
                currentId: string;
                scrollContainer: any;
                scrollElement: any;
                wrapperTop: number;
                upperFirstTitle: boolean;
                links: any[];
            };
            computed: {
                wrapperComponent(): "div" | "Affix";
                wrapperStyle(): {
                    maxHeight: string;
                };
                containerIsWindow(): boolean;
                titlesOffsetArr(): any[];
            };
            methods: {
                handleAffixStateChange(state: any): void;
                handleScroll(e: any): void;
                handleHashChange(): void;
                handleScrollTo(): void;
                handleSetInkTop(): void;
                getCurrentScrollAtTitleId(scrollTop: any): void;
                getContainer(): void;
                removeListener(): void;
                init(): void;
                addLink(id: any, link: any): void;
                removeLink(id: any): void;
            };
            watch: {
                $route(): void;
                container(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    function provide(): {
        AnchorInstance: {
            name: string;
            provide(): any;
            emits: string[];
            props: {
                affix: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                offsetTop: {
                    type: NumberConstructor;
                    default: number;
                };
                offsetBottom: NumberConstructor;
                bounds: {
                    type: NumberConstructor;
                    default: number;
                };
                container: any;
                showInk: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                scrollOffset: {
                    type: NumberConstructor;
                    default: number;
                };
            };
            data(): {
                prefix: string;
                isAffixed: boolean;
                inkTop: number;
                animating: boolean;
                currentLink: string;
                currentId: string;
                scrollContainer: any;
                scrollElement: any;
                wrapperTop: number;
                upperFirstTitle: boolean;
                links: any[];
            };
            computed: {
                wrapperComponent(): "div" | "Affix";
                wrapperStyle(): {
                    maxHeight: string;
                };
                containerIsWindow(): boolean;
                titlesOffsetArr(): any[];
            };
            methods: {
                handleAffixStateChange(state: any): void;
                handleScroll(e: any): void;
                handleHashChange(): void;
                handleScrollTo(): void;
                handleSetInkTop(): void;
                getCurrentScrollAtTitleId(scrollTop: any): void;
                getContainer(): void;
                removeListener(): void;
                init(): void;
                addLink(id: any, link: any): void;
                removeLink(id: any): void;
            };
            watch: {
                $route(): void;
                container(): void;
            };
            mounted(): void;
            beforeUnmount(): void;
        };
    };
    const emits: string[];
    namespace props {
        namespace affix {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        namespace offsetTop {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        const offsetBottom: NumberConstructor;
        namespace bounds {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
        const container: any;
        namespace showInk {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace scrollOffset {
            const type_4: NumberConstructor;
            export { type_4 as type };
            const _default_4: number;
            export { _default_4 as default };
        }
    }
    function data(): {
        prefix: string;
        isAffixed: boolean;
        inkTop: number;
        animating: boolean;
        currentLink: string;
        currentId: string;
        scrollContainer: any;
        scrollElement: any;
        wrapperTop: number;
        upperFirstTitle: boolean;
        links: any[];
    };
    function data(): {
        prefix: string;
        isAffixed: boolean;
        inkTop: number;
        animating: boolean;
        currentLink: string;
        currentId: string;
        scrollContainer: any;
        scrollElement: any;
        wrapperTop: number;
        upperFirstTitle: boolean;
        links: any[];
    };
    namespace computed {
        function wrapperComponent(): "div" | "Affix";
        function wrapperComponent(): "div" | "Affix";
        function wrapperStyle(): {
            maxHeight: string;
        };
        function wrapperStyle(): {
            maxHeight: string;
        };
        function containerIsWindow(): boolean;
        function containerIsWindow(): boolean;
        function titlesOffsetArr(): any[];
        function titlesOffsetArr(): any[];
    }
    namespace methods {
        function handleAffixStateChange(state: any): void;
        function handleAffixStateChange(state: any): void;
        function handleScroll(e: any): void;
        function handleScroll(e: any): void;
        function handleHashChange(): void;
        function handleHashChange(): void;
        function handleScrollTo(): void;
        function handleScrollTo(): void;
        function handleSetInkTop(): void;
        function handleSetInkTop(): void;
        function getCurrentScrollAtTitleId(scrollTop: any): void;
        function getCurrentScrollAtTitleId(scrollTop: any): void;
        function getContainer(): void;
        function getContainer(): void;
        function removeListener(): void;
        function removeListener(): void;
        function init(): void;
        function init(): void;
        function addLink(id: any, link: any): void;
        function addLink(id: any, link: any): void;
        function removeLink(id: any): void;
        function removeLink(id: any): void;
    }
    namespace watch {
        function $route(): void;
        function $route(): void;
        function container(): void;
        function container(): void;
        const currentLink: any;
    }
    function mounted(): void;
    function mounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
