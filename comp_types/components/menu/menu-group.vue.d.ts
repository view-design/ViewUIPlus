declare namespace _default {
    const name: string;
    const mixins: {
        inject: {
            MenuInstance: {
                default: any;
            };
            SubmenuInstance: {
                default: any;
            };
        };
        data(): {
            menu: any;
        };
        computed: {
            hasParentSubmenu(): boolean;
            parentSubmenuNum(): any;
            mode(): any;
        };
    }[];
    namespace props {
        namespace title {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
    }
    function data(): {
        prefixCls: string;
    };
    function data(): {
        prefixCls: string;
    };
    namespace computed {
        function groupStyle(): {
            paddingLeft: string;
        } | {
            paddingLeft?: undefined;
        };
        function groupStyle(): {
            paddingLeft: string;
        } | {
            paddingLeft?: undefined;
        };
    }
}
export default _default;
