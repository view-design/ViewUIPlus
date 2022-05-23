declare namespace _default {
    const name: string;
    namespace components {
        export { Icon };
        export { iProgress };
    }
    const emits: string[];
    namespace props {
        namespace files {
            export const type: ArrayConstructor;
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
    }
    function data(): {
        prefixCls: string;
    };
    function data(): {
        prefixCls: string;
    };
    namespace methods {
        function fileCls(file: any): (string | {
            [x: string]: boolean;
        })[];
        function fileCls(file: any): (string | {
            [x: string]: boolean;
        })[];
        function handleClick(file: any): void;
        function handleClick(file: any): void;
        function handlePreview(file: any): void;
        function handlePreview(file: any): void;
        function handleRemove(file: any): void;
        function handleRemove(file: any): void;
        function format(file: any): string;
        function format(file: any): string;
        function parsePercentage(val: any): number;
        function parsePercentage(val: any): number;
    }
}
export default _default;
import Icon from "../icon/icon.vue";
import iProgress from "../progress/progress.vue";
