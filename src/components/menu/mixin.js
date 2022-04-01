import { findComponentsUpward } from '../../utils/assist';
export default {
    inject: {
        MenuInstance: {
            default: null
        },
        SubmenuInstance: {
            default: null
        }
    },
    data () {
        return {
            menu: this.MenuInstance
        };
    },
    computed: {
        hasParentSubmenu () {
            return !!this.SubmenuInstance;
        },
        parentSubmenuNum () {
            return findComponentsUpward(this, 'Submenu').length;
        },
        mode () {
            return this.MenuInstance.mode;
        }
    }
};
