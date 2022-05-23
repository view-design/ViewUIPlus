declare namespace _default {
    const name: string;
    function provide(): {
        BreadcrumbInstance: {
            name: string;
            provide(): any;
            props: {
                separator: {
                    type: StringConstructor;
                    default: string;
                };
            };
        };
    };
    function provide(): {
        BreadcrumbInstance: {
            name: string;
            provide(): any;
            props: {
                separator: {
                    type: StringConstructor;
                    default: string;
                };
            };
        };
    };
    namespace props {
        namespace separator {
            export const type: StringConstructor;
            const _default: string;
            export { _default as default };
        }
    }
}
export default _default;
