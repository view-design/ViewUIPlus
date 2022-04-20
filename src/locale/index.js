import zhLang from './lang/zh-CN';
import deepmerge from 'deepmerge';
import Format from './format';

const format = Format();
let lang = zhLang;
const langs = {
    zh: zhLang
};
let nowLang = null;
let merged = {};
let vuei18n = null;
let i18nHandler = function () {
    if (Reflect.has(this, '$t')) {
        return this.$t(...arguments);
    }
    if (vuei18n && vuei18n.global) {
        return vuei18n.global.t(...arguments);
    }
    if (vuei18n && vuei18n.locale) {
        if (!merged[vuei18n.locale] || nowLang != vuei18n.locale) {
            merged[vuei18n.locale] = true;
            let localMessage = vuei18n.getLocaleMessage(vuei18n.locale) || {};
            let newLocalMessage = {};
            deepmerge(newLocalMessage, langs[vuei18n.locale], localMessage, { clone: true })
            lang = newLocalMessage;
            vuei18n.setLocaleMessage(vuei18n.locale, newLocalMessage);
            nowLang = vuei18n.locale;
        }
        return vuei18n.hlang(...arguments);
    }
};

export const t = function (path, options) {
    let value = i18nHandler.apply(this, arguments);
    if (value !== null && value !== undefined) return value;

    const array = path.split('.');
    let current = lang;

    for (let i = 0, j = array.length; i < j; i++) {
        const property = array[i];
        value = current[property];
        if (i === j - 1) return format(value, options);
        if (!value) return '';
        current = value;
    }
    return '';
};

export const use = function (l) {
    lang = l || lang;
};

export const i18n = function (initI18n) {
    vuei18n = initI18n;
};

export default {
    use,
    t,
    i18n
};
