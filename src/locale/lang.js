// using with vue-i18n in CDN
/*eslint-disable */
// import Vue from 'vue';
// const isServer = Vue.prototype.$isServer;

export default function (lang) {
    if (typeof window.viewuiplus !== 'undefined') {
        if (!('langs' in viewuiplus)) {
            viewuiplus.langs = {};
        }
        viewuiplus.langs[lang.i.locale] = lang;
    }
};
/*eslint-enable */
