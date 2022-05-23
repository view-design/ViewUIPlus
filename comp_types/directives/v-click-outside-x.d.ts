/**
 * @typedef {Function} Vue - The constructor.
 * @property {Function} directive - You can register a global custom directive
 *  with the Vue.directive() method, passing in a directiveID followed by a
 *  definition object.
 */
/**
 * A Vue.js plugin should expose an install method. The method will be called
 * with the Vue constructor as the first argument, along with possible options.
 * {@link https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin|Writing a plugin}.
 *
 * @param {Vue} Vue - The Vue function.
 */
export function install(Vue: Vue): void;
/**
 * The directive definition.
 * {@link https://vuejs.org/v2/guide/custom-directive.html|Custom directive}
 *
 * @namespace
 * @property {!Object} $_captureInstances - Registered capture instances.
 * @property {!Object} $_nonCaptureInstances - Registered non-capture instances.
 * @property {Function} $_onCaptureEvent - Event handler for capture events.
 * @property {Function} $_onNonCaptureEvent - Event handler for non-capture events.
 * @property {Function} bind - Called only once, when the directive is first
 *  bound to the element.
 * @property {Function} unbind - Called only once, when the directive is unbound
 *  from the element.
 * @property {string} version - The version number of this release.
 */
export const directive: {};
/**
 * - The constructor.
 */
export type Vue = Function;
