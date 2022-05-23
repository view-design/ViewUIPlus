export default fecha;
declare namespace fecha {
    namespace i18n {
        export { dayNamesShort };
        export { dayNames };
        export { monthNamesShort };
        export { monthNames };
        export const amPm: string[];
        export function DoFn(D: any): string;
    }
    namespace masks {
        const _default: string;
        export { _default as default };
        export const shortDate: string;
        export const mediumDate: string;
        export const longDate: string;
        export const fullDate: string;
        export const shortTime: string;
        export const mediumTime: string;
        export const longTime: string;
    }
    /***
     * Format a date
     * @method format
     * @param {Date|number} dateObj
     * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
     */
    function format(dateObj: number | Date, mask: string, i18nSettings: any): string;
    /**
     * Parse a date string into an object, changes - into /
     * @method parse
     * @param {string} dateStr Date string
     * @param {string} format Date parse format
     * @returns {Date|boolean}
     */
    function parse(dateStr: string, format: string, i18nSettings: any): boolean | Date;
}
declare var dayNamesShort: any[];
declare var dayNames: string[];
declare var monthNamesShort: any[];
declare var monthNames: string[];
