<template>
    <div :class="prefixCls">
        <slot v-if="loading" name="placeholder">
            <div :class="[prefixCls + '-placeholder']">LOADING</div>
        </slot>
        <slot v-else-if="imageError" name="error">
            <div :class="[prefixCls + '-error']">
                <span>FAILED</span>
            </div>
        </slot>
        <img 
            v-else
            :src="src"
            :alt="alt"
            :referrerPolicy="referrerPolicy"
            :style="[fitStyle]"
            :class="[prefixCls + '-img']"
        />
    </div>
</template>
<script>
    const prefixCls = 'ivu-image';
    import {on, off} from '../../utils/dom'
    export default {
        name: 'Image',
        props: {
            // 图片地址
            src: {
                type: String,
                default: ''
            },
            // 图片描述
            alt: {
                type: String,
                default: ''
            },
            // 是否预览
            preview: {
                type: Boolean,
                default: false
            },
            referrerPolicy: {
                type: String,
                default: ''
            },
            width: {
                type: [String, Number],
                default: ''
            },
            height: {
                type: [String, Number],
                default: ''
            },
            // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
            // 填充模式
            fit: {
                type: String, // 'fill' | 'contain' | 'cover' | 'none' | 'scale'-down' 
                default: ''
            },
            lazy: {
                type: Boolean,
                default: false
            },
            scrollContainer: {
                type: [String, HTMLElement]
            },
            transfer: {
                type: Boolean,
                default: false
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            // 预览列表
            previewList: {
                type: Array
            },
            initialIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                prefixCls: prefixCls,
                loading: false,
                imageError: false,
                image: null,
                imageWidth: 0,
                imageHeight: 0
            }
        },
        computed: {
            fitStyle() {
                const fitContains = ['fill', 'contain', 'cover', 'none', 'scale-down'];
                const {fit} = this;
                return fitContains ? `object-fit:${fit};` : '';
            }
        },
        watch: {
            lazy() {
                this.handleImageEvent();
            }
        },
        mounted() {
            this.handleImageEvent();
        },
        methods: {
            addLazyImageListener() {
            },
            handleLoadImageLoad(event) {
                const {width, height} = event.target;
                this.imageWidth = width;
                this.imageHeight = height;
                this.loading = false;
                this.imageError = false;
            },
            handleLoadImageError() {
                this.loading = false;
                this.imageError = true;
            },
            loadImage() {
                this.image = new Image();
                const {src, image} = this;
                this.loading = true;
                this.imageError = false;
                on(image, 'load', this.handleLoadImageLoad);
                on(image, 'error', this.handleLoadImageError);
                image.src = src;
            },
            handleImageEvent() {
                const { lazy } = this;
                lazy ? this.addLazyImageListener() : this.loadImage();
            }
        },
        beforeUnmount() {
            const {image} = this;
            if (image) {
                off(image, 'load', this.handleLoadImageLoad);
                off(image, 'error', this.handleLoadImageError)
            }
        }
    }
</script>