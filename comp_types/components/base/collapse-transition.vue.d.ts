declare var _default: import("vue").DefineComponent<{
    ready: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    on: {
        beforeEnter(el: any): void;
        enter(el: any): void;
        afterEnter(el: any): void;
        beforeLeave(el: any): void;
        leave(el: any): void;
        afterLeave(el: any): void;
    };
}, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    ready: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    ready: boolean;
}>;
export default _default;
