import { createApp, h, getCurrentInstance } from 'vue';
import ImagePreview from './image-preview.vue';

import { isClient } from '../../utils/index';

ImagePreview.newInstance = properties => {
    if (!isClient) return;
    const _props = properties || {};

    let _instance = null;

    const Instance = createApp({
        data () {
            return Object.assign({}, _props, {
                visible: false,
                previewList: [],
                initialIndex: 0,
                toolbar: ['zoomIn', 'zoomOut', 'original', 'rotateLeft', 'rotateRight', 'download'],
                infinite: true,
                maskClosable: true,
                transfer: true,
            });
        },
        render () {
            return h(ImagePreview, Object.assign({}, _props, {
                ref: 'imagePreview',
                modelValue: this.visible,
                previewList: this.previewList,
                initialIndex: this.initialIndex,
                toolbar: this.toolbar,
                infinite: this.infinite,
                maskClosable: this.maskClosable,
                transfer: this.transfer,
                'onOn-close': this.close
            }));
        },
        methods: {
            close () {
                this.visible = false;
                setTimeout(() => {
                    this.destroy();
                    this.onRemove();
                }, 300);
            },
            destroy () {
                Instance.unmount();
                document.body.removeChild(container);
            },
            onRemove () {}
        },
        created () {
            _instance = getCurrentInstance();
        }
    });

    const container = document.createElement('div');
    document.body.appendChild(container);
    Instance.mount(container);
    const imagePreview = _instance.refs.imagePreview;

    return {
        show (options) {
            Object.keys(options).forEach(key => {
                imagePreview.$parent[key] = options[key];
            });
            imagePreview.$parent.visible = true;
        },
        component: imagePreview
    };
};

export default ImagePreview;
