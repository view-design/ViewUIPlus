var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { openBlock, createElementBlock, normalizeClass, normalizeStyle } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const prefixCls = "ivu-icon";
const _sfc_main = {
  name: "Icon",
  props: {
    type: {
      type: String,
      default: ""
    },
    size: [Number, String],
    color: String,
    custom: {
      type: String,
      default: ""
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.type}`]: this.type !== "",
          [`${this.custom}`]: this.custom !== ""
        }
      ];
    },
    styles() {
      let style = {};
      if (this.size)
        style["font-size"] = `${this.size}px`;
      if (this.color)
        style.color = this.color;
      return style;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", {
    class: normalizeClass($options.classes),
    style: normalizeStyle($options.styles)
  }, null, 6);
}
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const components = {
  Icon
};
const iview = __spreadValues({}, components);
const install = function(app, opts = {}) {
  if (install.installed)
    return;
  Object.keys(iview).forEach((key) => {
    app.component(key, iview[key]);
  });
};
const API = __spreadValues({
  version: {}.VERSION,
  install
}, components);
API.lang = (code) => {
  const langObject = window["iview/locale"].default;
  if (code === langObject.i.locale)
    locale.use(langObject);
  else
    console.log(`The ${code} language pack is not loaded.`);
};
export { API as default };
