import { getCurrentInstance } from 'vue';
export default {
    data () {
        return {
            globalConfig: {}
        }
    },
    created () {
        const instance = getCurrentInstance();
        this.globalConfig = instance.appContext.config.globalProperties.$VIEWUI;
    }
}
