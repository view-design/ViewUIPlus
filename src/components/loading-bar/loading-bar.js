import { createApp, h, getCurrentInstance } from 'vue';
import LoadingBar from './loading-bar.vue';
import { isClient } from '../../utils/index';

LoadingBar.newInstance = properties => {
    if (!isClient) return;
    const _props = properties || {};

    let _instance = null;

    const Instance = createApp({
        data () {
            return _props
        },
        render () {
            return h(LoadingBar, Object.assign({
                ref: 'loadingBar'
            }, _props));
        },
        created () {
            _instance = getCurrentInstance();
        }
    });

    const container = document.createElement('div');
    document.body.appendChild(container);
    Instance.mount(container);
    const loading_bar = _instance.refs.loadingBar;

    return {
        update (options) {
            if ('percent' in options) {
                loading_bar.percent = options.percent;
            }
            if (options.status) {
                loading_bar.status = options.status;
            }
            if ('show' in options) {
                loading_bar.show = options.show;
            }
        },
        component: loading_bar,
        destroy () {
            Instance.unmount();
            document.body.removeChild(container);
        }
    };
};

export default LoadingBar;
