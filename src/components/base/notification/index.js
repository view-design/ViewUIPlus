import Notification from './notification.vue';
import { createApp, h, getCurrentInstance, nextTick } from 'vue';
import { isClient } from '../../../utils/index';

Notification.newInstance = properties => {
    if (!isClient) return;
    const _props = properties || {};

    let _instance = null;

    const Instance = createApp({
        render () {
            return h(Notification, Object.assign({
                ref: 'notification'
            }, _props));
        },
        created () {
            _instance = getCurrentInstance();
        }
    });

    const container = document.createElement('div');
    document.body.appendChild(container);
    Instance.mount(container);
    const notification = _instance.refs.notification;

    return {
        notice (noticeProps) {
            nextTick(() => {
                _instance.refs.notification.add(noticeProps);
            })
        },
        remove (name) {
            nextTick(() => {
                _instance.refs.notification.close(name);
            })
        },
        component: notification,
        destroy (element) {
            isClient && setTimeout(function() {
                _instance.refs.notification.closeAll();
                const removeElement = document.querySelectorAll(`.${element}`)[0];
                if (container && removeElement) {
                    container.removeChild(removeElement);
                }
            }, 500);
        }
    };
};

export default Notification;
