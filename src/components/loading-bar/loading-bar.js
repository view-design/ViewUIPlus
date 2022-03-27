import { createApp, h } from 'vue';
import LoadingBar from './loading-bar.vue';

LoadingBar.newInstance = properties => {
    const _props = properties || {};

    const Instance = createApp({
        data () {
            return _props
        },
        render () {
            return h(LoadingBar, Object.assign({
                ref: 'loadingBar'
            }, _props));
        }
    });

    const container = document.createElement('div');
    document.body.appendChild(container);
    Instance.mount(container);
    const loading_bar = Instance._instance.refs.loadingBar;

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
