export default {
    inject: {
        FormInstance: {
            default: ''
        },
        FormItemInstance: {
            default: null
        }
    },
    computed: {
        itemDisabled () {
            let state = this.disabled;
            if (!state && this.FormInstance) state = this.FormInstance.disabled;
            return state ? true : null; // todo <a> can not set disabled: false
        }
    },
    methods: {
        handleFormItemChange (type, data) {
            if (this.FormItemInstance) {
                if (type === 'blur') this.FormItemInstance.formBlur(data);
                else if (type === 'change') this.FormItemInstance.formChange(data);
            }
        }
    }
};
