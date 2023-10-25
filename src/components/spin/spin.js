import { createApp, h, getCurrentInstance, nextTick } from 'vue';
import Spin from './spin.vue';

import { transferIndex, transferIncrease } from '../../utils/transfer-queue';
import { isClient } from '../../utils/index';

function handleGetIndex() {
    transferIncrease();
    return transferIndex;
}

let tIndex = handleGetIndex();

Spin.newInstance = properties => {
    if (!isClient) return;
    const _props = properties || {};

    let _instance = null;

    const Instance = createApp({
        data () {
            return Object.assign({}, _props, {

            });
        },
        render () {
            let vnode = '';
            if (this.render) {
                vnode = h(Spin, {
                    fix: true,
                    fullscreen: true,
                    ref: 'spin'
                }, [this.render(h)]);
            } else {
                vnode = h(Spin, {
                    size: 'large',
                    fix: true,
                    fullscreen: true,
                    ref: 'spin'
                });
            }
            return h('div', {
                'class': 'ivu-spin-fullscreen ivu-spin-fullscreen-wrapper',
                'style': {
                    'z-index': 2010 + tIndex
                }
            }, [vnode]);
        },
        created () {
            _instance = getCurrentInstance();
        }
    });

    const container = document.createElement('div');
    document.body.appendChild(container);
    Instance.mount(container);
    const spin = _instance.refs.spin;

    return {
        show () {
            nextTick(()=> {
                _instance.refs.spin.visible = true;
                tIndex = handleGetIndex();
            })
        },
        remove (cb) {
            spin.visible = false;
            setTimeout(function() {
                Instance.unmount();
                document.body.removeChild(container);
                cb();
            }, 500);
        },
        component: spin
    };
};

export default Spin;
