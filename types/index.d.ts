
import type { App } from 'vue';
export * from './viewuiplus.components';

interface ViewUIPlusGlobalOptions {
    size?: string;
    transfer?: boolean | string;
    select?: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    cell?: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    menu?: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    tree?: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    cascader?: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
        itemArrow: string;
        customItemArrow: string;
        itemArrowSize: number | string;
    };
    colorPicker?: {
        arrow: string;
        customArrow: string;
        arrowSize: number | string;
    };
    datePicker?: {
        icon: string;
        customIcon: string;
        iconSize: number | string;
    };
    timePicker?: {
        icon: string;
        customIcon: string;
        iconSize: number | string;
    };
    tabs?: {
        closeIcon: string;
        customCloseIcon: string;
        closeIconSize: number | string;
    };
    modal?: {
        maskClosable: boolean | string;
    };
    typography?: {
        copyConfig: object;
        editConfig: object;
        ellipsisConfig: object;
    };
    space?: {
        size: string | number | any[];
    };
    image?: {
        toolbar: any[];
    };
}

interface ViewUIPlusInstallOptions extends ViewUIPlusGlobalOptions{
    locale?: any;
    i18n?: any;
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $VIEWUI: ViewUIPlusGlobalOptions;
        $Spin: any;
        $Loading: any;
        $Message: any;
        $Notice: any;
        $Modal: any;
        $ImagePreview: any;
        $Copy: any;
        $ScrollIntoView: any;
        $ScrollTop: any;
        $Date: any;
    }
}

export const install: (app: App, options?: ViewUIPlusInstallOptions) => void;
