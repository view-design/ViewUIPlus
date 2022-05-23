declare namespace _default {
    const name: string;
    const inject: string[];
    namespace components {
        export { Row };
        export { Col };
        export { Avatar };
        export { Tag };
        export { Time };
    }
    const emits: string[];
    namespace props {
        namespace rowProps {
            export const type: ObjectConstructor;
            function _default(): {
                type: string;
                justify: string;
                align: string;
            };
            function _default(): {
                type: string;
                justify: string;
                align: string;
            };
            export { _default as default };
        }
        namespace read {
            const type_1: (BooleanConstructor | NumberConstructor)[];
            export { type_1 as type };
            const _default: boolean;
            export { _default as default };
        }
        namespace icon {
            const type_2: StringConstructor;
            export { type_2 as type };
        }
        namespace customIcon {
            const type_3: StringConstructor;
            export { type_3 as type };
        }
        namespace iconColor {
            const type_4: StringConstructor;
            export { type_4 as type };
        }
        namespace iconSize {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace avatar {
            const type_5: StringConstructor;
            export { type_5 as type };
        }
        namespace avatarShape {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace title {
            const type_6: StringConstructor;
            export { type_6 as type };
        }
        namespace content {
            const type_7: StringConstructor;
            export { type_7 as type };
        }
        namespace time {
            const type_8: (StringConstructor | NumberConstructor | DateConstructor)[];
            export { type_8 as type };
        }
        namespace timeProps {
            const type_9: ObjectConstructor;
            export { type_9 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        namespace tag {
            const type_10: StringConstructor;
            export { type_10 as type };
        }
        namespace tagProps {
            const type_11: ObjectConstructor;
            export { type_11 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        namespace clickClose {
            const type_12: BooleanConstructor;
            export { type_12 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
    }
    function data(): {
        id: string;
    };
    function data(): {
        id: string;
    };
    namespace computed {
        function classes(): {
            'ivu-notifications-item-unread': boolean;
        };
        function classes(): {
            'ivu-notifications-item-unread': boolean;
        };
        function contentSpan(): 20 | 24;
        function contentSpan(): 20 | 24;
        function iconStyle(): {};
        function iconStyle(): {};
    }
    namespace methods {
        function handleClick(): void;
        function handleClick(): void;
        function addItem(): void;
        function addItem(): void;
        function removeItem(): void;
        function removeItem(): void;
    }
    function mounted(): void;
    function mounted(): void;
    function unmounted(): void;
    function unmounted(): void;
    function beforeUnmount(): void;
    function beforeUnmount(): void;
}
export default _default;
import Row from "../row/row.vue";
import Col from "../col/col.vue";
import Avatar from "../avatar/avatar.vue";
import Tag from "../tag/tag.vue";
import Time from "../time/time.vue";
