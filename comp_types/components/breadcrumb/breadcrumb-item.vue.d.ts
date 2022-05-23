declare namespace _default {
    const name: string;
    const mixins: {
        props: {
            to: {
                type: (ObjectConstructor | StringConstructor)[];
            };
            replace: {
                type: BooleanConstructor;
                default: boolean;
            };
            target: {
                type: StringConstructor;
                validator(value: any): boolean;
                default: string;
            };
            append: {
                type: BooleanConstructor;
                required: boolean;
                default: boolean;
            };
        };
        computed: {
            linkUrl(): any;
        };
        methods: {
            handleOpenTo(): void;
            handleClick(new_window?: boolean): void;
            handleCheckClick(event: any, new_window?: boolean): boolean;
        };
    }[];
    const inject: string[];
    const props: {};
    function data(): {
        showSeparator: boolean;
    };
    function data(): {
        showSeparator: boolean;
    };
    namespace computed {
        function linkClasses(): string;
        function linkClasses(): string;
        function separatorClasses(): string;
        function separatorClasses(): string;
        function separator(): any;
        function separator(): any;
    }
    function mounted(): void;
    function mounted(): void;
}
export default _default;
