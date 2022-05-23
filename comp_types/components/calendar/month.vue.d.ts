declare namespace _default {
    const name: string;
    const mixins: {
        emits: string[];
        methods: {
            handleCellClick(data: any): void;
            handleCellContextmenu(data: any): void;
        };
    }[];
    const inject: string[];
    namespace props {
        const date: ObjectConstructor;
    }
    function data(): {
        firstDayOfWeek: any;
        weekDays: any;
    };
    function data(): {
        firstDayOfWeek: any;
        weekDays: any;
    };
    namespace computed {
        function finalWeekDays(): any;
        function finalWeekDays(): any;
        function days(): {
            text: any;
            date: any;
            type: string;
        }[];
        function days(): {
            text: any;
            date: any;
            type: string;
        }[];
        function chunkDays(): any;
        function chunkDays(): any;
        function dayStyles(): {
            height: string;
        };
        function dayStyles(): {
            height: string;
        };
        function currentDate(): any;
        function currentDate(): any;
    }
    namespace methods {
        function handleClickDate(date: any): void;
        function handleClickDate(date: any): void;
    }
}
export default _default;
