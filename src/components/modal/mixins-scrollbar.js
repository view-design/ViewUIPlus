// used for Modal & $Spin & Drawer
import { getScrollBarSize } from '../../utils/assist';
import { isClient } from '../../utils/index';
export default {
    props: {
        lockScroll: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        checkScrollBar () {
            if (!isClient) return;
            let fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
                const documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (this.bodyIsOverflowing) {
                this.scrollBarWidth = getScrollBarSize();
            }
        },
        checkMaskInVisible () {
            let masks = isClient ? (document.getElementsByClassName('ivu-modal-mask') || []) : [];
            return Array.from(masks).every(m => m.style.display === 'none' || m.classList.contains('fade-leave-to'));
        },
        setScrollBar () {
            if (isClient && this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
                document.body.style.paddingRight = `${this.scrollBarWidth}px`;
            }
        },
        resetScrollBar () {
            isClient && (document.body.style.paddingRight = '');
        },
        addScrollEffect () {
            if (!this.lockScroll) return;
            this.checkScrollBar();
            this.setScrollBar();
            isClient && (document.body.style.overflow = 'hidden');
        },
        removeScrollEffect() {
            if (!this.lockScroll) return;
            if (isClient && this.checkMaskInVisible()) {
                document.body.style.overflow = '';
                this.resetScrollBar();
            }
        }
    }
};
