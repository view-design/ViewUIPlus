declare namespace _default {
    const name: string;
    namespace props {
        namespace label {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
    }
    function provide(): {
        OptionGroupInstance: {
            name: string;
            props: {
                label: {
                    type: StringConstructor;
                    default: string;
                };
            };
            provide(): any;
            inject: string[];
            data(): {
                prefixCls: string;
                hidden: boolean;
                id: string;
                optionList: any[];
            };
            computed: {
                show(): any;
            };
        };
    };
    function provide(): {
        OptionGroupInstance: {
            name: string;
            props: {
                label: {
                    type: StringConstructor;
                    default: string;
                };
            };
            provide(): any;
            inject: string[];
            data(): {
                prefixCls: string;
                hidden: boolean;
                id: string;
                optionList: any[];
            };
            computed: {
                show(): any;
            };
        };
    };
    const inject: string[];
    function data(): {
        prefixCls: string;
        hidden: boolean;
        id: string;
        optionList: any[];
    };
    function data(): {
        prefixCls: string;
        hidden: boolean;
        id: string;
        optionList: any[];
    };
    namespace computed {
        function show(): any;
        function show(): any;
    }
}
export default _default;
