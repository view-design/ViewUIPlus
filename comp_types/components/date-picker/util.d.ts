export function toDate(date: any): Date;
export function clearHours(time: any): number;
export function isInRange(time: any, a: any, b: any): boolean;
export function formatDate(date: any, format: any): string;
export function parseDate(string: any, format: any): boolean | Date;
export function getDayCountOfMonth(year: any, month: any): number;
export function getFirstDayOfMonth(date: any): number;
export function siblingMonth(src: any, diff: any): Date;
export function prevMonth(src: any): Date;
export function nextMonth(src: any): Date;
export function initTimeDate(): Date;
export function formatDateLabels(locale: any, format: any, date: any): {
    separator: any;
    labels: {
        label: any;
        type: string;
    }[];
};
export namespace DEFAULT_FORMATS {
    const date: string;
    const month: string;
    const year: string;
    const datetime: string;
    const time: string;
    const timerange: string;
    const daterange: string;
    const datetimerange: string;
}
export namespace TYPE_VALUE_RESOLVER_MAP {
    namespace _default {
        function formatter(value: any): string;
        function formatter(value: any): string;
        function parser(text: any): any;
        function parser(text: any): any;
    }
    export { _default as default };
    export namespace date_1 {
        export { DATE_FORMATTER as formatter };
        export { DATE_PARSER as parser };
    }
    export { date_1 as date };
    export namespace datetime_1 {
        export { DATE_FORMATTER as formatter };
        export { DATE_PARSER as parser };
    }
    export { datetime_1 as datetime };
    export namespace daterange_1 {
        export { RANGE_FORMATTER as formatter };
        export { RANGE_PARSER as parser };
    }
    export { daterange_1 as daterange };
    export namespace datetimerange_1 {
        export { RANGE_FORMATTER as formatter };
        export { RANGE_PARSER as parser };
    }
    export { datetimerange_1 as datetimerange };
    export namespace timerange_1 {
        export { RANGE_FORMATTER as formatter };
        export { RANGE_PARSER as parser };
    }
    export { timerange_1 as timerange };
    export namespace time_1 {
        export { DATE_FORMATTER as formatter };
        export { DATE_PARSER as parser };
    }
    export { time_1 as time };
    export namespace month_1 {
        export { DATE_FORMATTER as formatter };
        export { DATE_PARSER as parser };
    }
    export { month_1 as month };
    export namespace year_1 {
        export { DATE_FORMATTER as formatter };
        export { DATE_PARSER as parser };
    }
    export { year_1 as year };
    export namespace multiple {
        function formatter(value: any, format: any): any;
        function parser(value: any, format: any): any;
    }
    export namespace number {
        function formatter(value: any): string;
        function formatter(value: any): string;
        function parser(text: any): number;
        function parser(text: any): number;
    }
}
declare function DATE_FORMATTER(value: any, format: any): string;
declare function DATE_PARSER(text: any, format: any): boolean | Date;
declare function RANGE_FORMATTER(value: any, format: any, RANGE_SEPARATOR: any): string;
declare function RANGE_PARSER(text: any, format: any, RANGE_SEPARATOR: any): (boolean | Date)[];
export {};
