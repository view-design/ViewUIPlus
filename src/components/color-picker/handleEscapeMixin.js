export default {
    inject: ['ColorPickerInstance'],
    methods: {
        handleEscape (e) {
            this.ColorPickerInstance.handleOnEscapeKeydown(e);
        }
    }
};
