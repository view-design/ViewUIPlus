// using with vue-i18n in CDN
/*eslint-disable */
// import Vue from 'vue';
// const isServer = Vue.prototype.$isServer;
import { isClient } from '../utils/index';

export default function (lang) {
    if (isClient && typeof window.viewuiplus !== 'undefined') {
        if (!('langs' in viewuiplus)) {
            viewuiplus.langs = {};
        }
        viewuiplus.langs[lang.i.locale] = lang;
    }
};
/*eslint-enable */
