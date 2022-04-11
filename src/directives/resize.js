import elementResizeDetectorMaker from 'element-resize-detector';

export default {
    // 使用 bind，会在初始化时调用两次handler
    mounted (el, binding) {
        function resizeHandler (e) {
            binding.value(e);
        }
        el.__resizeHandler__ = resizeHandler;
        el.__observer__ = elementResizeDetectorMaker();
        el.__observer__.listenTo(el, resizeHandler);
    },
    updated () {

    },
    unmounted (el, binding) {
        el.__observer__.removeListener(el, el.__resizeHandler__);
        delete el.__resizeHandler__;
        delete el.__observer__;
    }
}
