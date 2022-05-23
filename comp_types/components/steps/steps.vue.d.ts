declare namespace _default {
    const name: string;
    function provide(): {
        StepsInstance: {
            name: string;
            provide(): any;
            props: {
                current: {
                    type: NumberConstructor;
                    default: number;
                };
                status: {
                    validator(value: any): boolean;
                    default: string;
                };
                size: {
                    validator(value: any): boolean;
                };
                direction: {
                    validator(value: any): boolean;
                    default: string;
                };
            };
            data(): {
                steps: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: boolean;
                })[];
                children(): any;
            };
            methods: {
                addStep(id: any, step: any): void;
                removeStep(id: any): void;
            };
        };
    };
    function provide(): {
        StepsInstance: {
            name: string;
            provide(): any;
            props: {
                current: {
                    type: NumberConstructor;
                    default: number;
                };
                status: {
                    validator(value: any): boolean;
                    default: string;
                };
                size: {
                    validator(value: any): boolean;
                };
                direction: {
                    validator(value: any): boolean;
                    default: string;
                };
            };
            data(): {
                steps: any[];
            };
            computed: {
                classes(): (string | {
                    [x: string]: boolean;
                })[];
                children(): any;
            };
            methods: {
                addStep(id: any, step: any): void;
                removeStep(id: any): void;
            };
        };
    };
    namespace props {
        namespace current {
            export const type: NumberConstructor;
            const _default: number;
            export { _default as default };
        }
        namespace status {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_1: string;
            export { _default_1 as default };
        }
        namespace size {
            function validator(value: any): boolean;
            function validator(value: any): boolean;
        }
        namespace direction {
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_2: string;
            export { _default_2 as default };
        }
    }
    function data(): {
        steps: any[];
    };
    function data(): {
        steps: any[];
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function classes(): (string | {
            [x: string]: boolean;
        })[];
        function children(): any;
        function children(): any;
    }
    namespace methods {
        function addStep(id: any, step: any): void;
        function addStep(id: any, step: any): void;
        function removeStep(id: any): void;
        function removeStep(id: any): void;
    }
}
export default _default;
