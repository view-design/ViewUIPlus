import Notification from './notification.vue';
import { createApp, h, getCurrentInstance } from 'vue';
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
            notification.add(noticeProps);
        },
        remove (name) {
            notification.close(name);
        },
        component: notification,
        destroy (element) {
            notification.closeAll();
            isClient && setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
};

export default Notification;
