/*
 * View UI Plus
 * https://www.iviewui.com/
 *
 * Copyright © ViewDeign 2019-present
 * Released under the MIT license
 *
 */
export * from './components';
import * as components from './components';
import localeFile from './locale/index';

// directives
import lineClamp from './directives/line-clamp';
import resize from './directives/resize';
import style from './directives/style';

// libraries
import dayjs from 'dayjs';

import pkg from '../package.json';

const directives = {
    display: style.display,
    width: style.width,
    height: style.height,
    margin: style.margin,
    padding: style.padding,
    font: style.font,
    color: style.color,
    'bg-color': style.bgColor,
    resize,
    'line-clamp': lineClamp
};

const ViewUI = {
    ...components,
    iButton: components.Button,
    iCircle: components.Circle,
    iCol: components.Col,
    iContent: components.Content,
    iForm: components.Form,
    iFooter: components.Footer,
    iHeader: components.Header,
    iInput: components.Input,
    iMenu: components.Menu,
    iOption: components.Option,
    iProgress: components.Progress,
    iSelect: components.Select,
    iSwitch: components.Switch,
    iTable: components.Table,
    iTime: components.Time
};

export const install = function(app, opts = {}) {
    if (install.installed) return;
    if (opts.locale) {
        localeFile.use(opts.locale);
    }
    if (opts.i18n) {
        localeFile.i18n(opts.i18n);
    }

    Object.keys(ViewUI).forEach(key => {
        app.component(key, ViewUI[key]);
        // todo i-tag
    });

    Object.keys(directives).forEach(key => {
        app.directive(key, directives[key]);
    });

    app.config.globalProperties.$VIEWUI = {
        size: opts.size || '',
        capture: 'capture' in opts ? opts.capture : true,
        transfer: 'transfer' in opts ? opts.transfer : '',
        cell: {
            arrow: opts.cell ? opts.cell.arrow ? opts.cell.arrow : '' : '',
            customArrow: opts.cell ? opts.cell.customArrow ? opts.cell.customArrow : '' : '',
            arrowSize: opts.cell ? opts.cell.arrowSize ? opts.cell.arrowSize : '' : ''
        },
        menu: {
            arrow: opts.menu ? opts.menu.arrow ? opts.menu.arrow : '' : '',
            customArrow: opts.menu ? opts.menu.customArrow ? opts.menu.customArrow : '' : '',
            arrowSize: opts.menu ? opts.menu.arrowSize ? opts.menu.arrowSize : '' : ''
        },
        modal: {
            maskClosable: opts.modal ? 'maskClosable' in opts.modal ? opts.modal.maskClosable : '' : ''
        },
        tabs: {
            closeIcon: opts.tabs ? opts.tabs.closeIcon ? opts.tabs.closeIcon : '' : '',
            customCloseIcon: opts.tabs ? opts.tabs.customCloseIcon ? opts.tabs.customCloseIcon : '' : '',
            closeIconSize: opts.tabs ? opts.tabs.closeIconSize ? opts.tabs.closeIconSize : '' : ''
        },
        select: {
            arrow: opts.select ? opts.select.arrow ? opts.select.arrow : '' : '',
            customArrow: opts.select ? opts.select.customArrow ? opts.select.customArrow : '' : '',
            arrowSize: opts.select ? opts.select.arrowSize ? opts.select.arrowSize : '' : ''
        },
        colorPicker: {
            arrow: opts.colorPicker ? opts.colorPicker.arrow ? opts.colorPicker.arrow : '' : '',
            customArrow: opts.colorPicker ? opts.colorPicker.customArrow ? opts.colorPicker.customArrow : '' : '',
            arrowSize: opts.colorPicker ? opts.colorPicker.arrowSize ? opts.colorPicker.arrowSize : '' : ''
        },
        cascader: {
            arrow: opts.cascader ? opts.cascader.arrow ? opts.cascader.arrow : '' : '',
            customArrow: opts.cascader ? opts.cascader.customArrow ? opts.cascader.customArrow : '' : '',
            arrowSize: opts.cascader ? opts.cascader.arrowSize ? opts.cascader.arrowSize : '' : '',
            itemArrow: opts.cascader ? opts.cascader.itemArrow ? opts.cascader.itemArrow : '' : '',
            customItemArrow: opts.cascader ? opts.cascader.customItemArrow ? opts.cascader.customItemArrow : '' : '',
            itemArrowSize: opts.cascader ? opts.cascader.itemArrowSize ? opts.cascader.itemArrowSize : '' : ''
        },
        tree: {
            arrow: opts.tree ? opts.tree.arrow ? opts.tree.arrow : '' : '',
            customArrow: opts.tree ? opts.tree.customArrow ? opts.tree.customArrow : '' : '',
            arrowSize: opts.tree ? opts.tree.arrowSize ? opts.tree.arrowSize : '' : ''
        },
        datePicker: {
            icon: opts.datePicker ? opts.datePicker.icon ? opts.datePicker.icon : '' : '',
            customIcon: opts.datePicker ? opts.datePicker.customIcon ? opts.datePicker.customIcon : '' : '',
            iconSize: opts.datePicker ? opts.datePicker.iconSize ? opts.datePicker.iconSize : '' : ''
        },
        timePicker: {
            icon: opts.timePicker ? opts.timePicker.icon ? opts.timePicker.icon : '' : '',
            customIcon: opts.timePicker ? opts.timePicker.customIcon ? opts.timePicker.customIcon : '' : '',
            iconSize: opts.timePicker ? opts.timePicker.iconSize ? opts.timePicker.iconSize : '' : ''
        },
        typography: {
            copyConfig: opts.typography ? opts.typography.copyConfig ? opts.typography.copyConfig : '' : '',
            editConfig: opts.typography ? opts.typography.editConfig ? opts.typography.editConfig : '' : '',
            ellipsisConfig: opts.typography ? opts.typography.ellipsisConfig ? opts.typography.ellipsisConfig : '' : ''
        },
        space: {
            size: opts.space ? opts.space.size ? opts.space.size : '' : ''
        },
        image: {
            toolbar: opts.image ? opts.image.toolbar ? opts.image.toolbar : '' : ''
        }
    }
    app.config.globalProperties.$Spin = components.Spin;
    app.config.globalProperties.$Loading = components.LoadingBar;
    app.config.globalProperties.$Message = components.Message;
    app.config.globalProperties.$Notice = components.Notice;
    app.config.globalProperties.$Modal = components.Modal;
    app.config.globalProperties.$ImagePreview = components.ImagePreview;
    app.config.globalProperties.$Copy = components.Copy;
    app.config.globalProperties.$ScrollIntoView = components.ScrollIntoView;
    app.config.globalProperties.$ScrollTop = components.ScrollTop;

    app.config.globalProperties.$Date = dayjs;
};

export const version = pkg.version;

export const locale = localeFile.use;

export const i18n = localeFile.i18n;

export const lang = (code) => {
    const langObject = window['viewuiplus/locale'].default;
    if (code === langObject.i.locale) localeFile.use(langObject);
    else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

const API = {
    version,
    locale,
    i18n,
    install,
    lang,
    // Circle,
    // Switch,
    ...components
};

export default API;
