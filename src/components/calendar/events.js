export default {
    emits: ['on-cell-click', 'on-cell-contextmenu'],
    methods: {
        handleCellClick (data) {
            this.CalendarInstance.$emit('on-cell-click', data);
        },
        handleCellContextmenu (data) {
            this.CalendarInstance.$emit('on-cell-contextmenu', data);
        }
    }
};
