declare namespace _default {
    const name: string;
    const mixins: {
        inject: {
            FormInstance: {
                default: string;
            };
            FormItemInstance: {
                default: any;
            };
        };
        computed: {
            itemDisabled(): boolean;
        };
        methods: {
            handleFormItemChange(type: any, data: any): void;
        };
    }[];
    namespace components {
        export { UploadList };
    }
    namespace props {
        export namespace action {
            const type: StringConstructor;
            const required: boolean;
        }
        export namespace headers {
            const type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        export namespace multiple {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default: boolean;
            export { _default as default };
        }
        export namespace data {
            const type_3: ObjectConstructor;
            export { type_3 as type };
        }
        export namespace name_1 {
            const type_4: StringConstructor;
            export { type_4 as type };
            const _default_1: string;
            export { _default_1 as default };
        }
        export { name_1 as name };
        export namespace withCredentials {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        export namespace showUploadList {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        export namespace type_7 {
            const type_8: StringConstructor;
            export { type_8 as type };
            export function validator(value: any): boolean;
            export function validator(value: any): boolean;
            const _default_4: string;
            export { _default_4 as default };
        }
        export { type_7 as type };
        export namespace format {
            const type_9: ArrayConstructor;
            export { type_9 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        export namespace accept {
            const type_10: StringConstructor;
            export { type_10 as type };
        }
        export namespace maxSize {
            const type_11: NumberConstructor;
            export { type_11 as type };
        }
        export const beforeUpload: FunctionConstructor;
        export namespace onProgress {
            const type_12: FunctionConstructor;
            export { type_12 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        export namespace onSuccess {
            const type_13: FunctionConstructor;
            export { type_13 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        export namespace onError {
            const type_14: FunctionConstructor;
            export { type_14 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        export namespace onRemove {
            const type_15: FunctionConstructor;
            export { type_15 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        export namespace onPreview {
            const type_16: FunctionConstructor;
            export { type_16 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        export namespace onExceededSize {
            const type_17: FunctionConstructor;
            export { type_17 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        export namespace onFormatError {
            const type_18: FunctionConstructor;
            export { type_18 as type };
            function _default(): {};
            function _default(): {};
            export { _default as default };
        }
        export namespace defaultFileList {
            const type_19: ArrayConstructor;
            export { type_19 as type };
            function _default(): any[];
            function _default(): any[];
            export { _default as default };
        }
        export namespace paste {
            const type_20: BooleanConstructor;
            export { type_20 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        export namespace disabled {
            const type_21: BooleanConstructor;
            export { type_21 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
        export namespace webkitdirectory {
            const type_22: BooleanConstructor;
            export { type_22 as type };
            const _default_7: boolean;
            export { _default_7 as default };
        }
    }
    function data(): {
        prefixCls: string;
        dragOver: boolean;
        fileList: any[];
        tempIndex: number;
    };
    function data(): {
        prefixCls: string;
        dragOver: boolean;
        fileList: any[];
        tempIndex: number;
    };
    namespace computed {
        function classes(): (string | {
            [x: string]: any;
        })[];
        function classes(): (string | {
            [x: string]: any;
        })[];
    }
    namespace methods {
        function handleClick(): void;
        function handleClick(): void;
        function handleChange(e: any): void;
        function handleChange(e: any): void;
        function onDrop(e: any): void;
        function onDrop(e: any): void;
        function handlePaste(e: any): void;
        function handlePaste(e: any): void;
        function uploadFiles(files: any): void;
        function uploadFiles(files: any): void;
        function upload(file: any): boolean;
        function upload(file: any): boolean;
        function post(file: any): boolean;
        function post(file: any): boolean;
        function handleStart(file: any): void;
        function handleStart(file: any): void;
        function getFile(file: any): undefined;
        function getFile(file: any): undefined;
        function handleProgress(e: any, file: any): void;
        function handleProgress(e: any, file: any): void;
        function handleSuccess(res: any, file: any): void;
        function handleSuccess(res: any, file: any): void;
        function handleError(err: any, response: any, file: any): void;
        function handleError(err: any, response: any, file: any): void;
        function handleRemove(file: any): void;
        function handleRemove(file: any): void;
        function handlePreview(file: any): void;
        function handlePreview(file: any): void;
        function clearFiles(): void;
        function clearFiles(): void;
    }
    namespace watch {
        export namespace defaultFileList_1 {
            const immediate: boolean;
            function handler(fileList: any): void;
            function handler(fileList: any): void;
        }
        export { defaultFileList_1 as defaultFileList };
    }
}
export default _default;
import UploadList from "./upload-list.vue";
