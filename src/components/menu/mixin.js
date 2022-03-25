import { findComponentUpward, findComponentsUpward } from '../../utils/assist';
export default {
    inject: ['MenuInstance', 'SubmenuInstance'],
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
