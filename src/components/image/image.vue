<template>
    <div :class="prefixCls" ref="image">
        <slot v-if="loading" name="placeholder">
            <div :class="[prefixCls + '-placeholder']">
                <span>LOADING</span>
            </div>
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
    import {isClient} from '../../utils/index';
    // is Element
    const isElement = (el)=> {
        return typeof HTMLElement === 'object' && el instanceof HTMLElement;
    }
    export default {
        name: 'Image',
        emits: ['on-load', 'on-error', 'on-switch', 'on-close'],
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
                type: [String],
                default: ''
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
                imageHeight: 0,
                scrollElement: null,
                observer: null
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
            isClient && this.handleImageEvent();
        },
        methods: {
            // todo it can create new Observe to privide the function to use  in the future
            handleLazy() {
                const $el = this.$refs.image;
                const observer = this.observer = new IntersectionObserver(this.handlerObserveImage, {
                    root: this.scrollElement,
                    rootMargin: "0px",
                    threshold: 1
                });
                observer.observe($el);
            },
            handlerObserveImage (entries) {
                for( let entry of entries) {
                    if (entry.isIntersecting) {
                        // destory new IntersectionObserver
                        this.offObserve();
                        // run image onload
                        this.loadImage();
                    }
                }
            },
            addLazyImageListener() {
                const {scrollContainer} = this;
                this.scrollElement = window;
                if (isElement(scrollContainer)) {
                    this.scrollElement = scrollContainer
                } else if (typeof scrollContainer === 'string') {
                    this.scrollElement = document.querySelector(scrollContainer);
                }
                this.loading = true;
                this.imageError = false;
                // on scrollElement scroll
                this.handleLazy();
            },
            handleLoadImageLoad(event) {
                const {width, height} = event.target;
                this.imageWidth = width;
                this.imageHeight = height;
                this.loading = false;
                this.imageError = false;
                this.$emit('on-load');
                // off image event
                this.offImageEvent();
            },
            handleLoadImageError() {
                this.loading = false;
                this.imageError = true;
                this.$emit('on-error');
                // off image event
                this.offImageEvent();
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
            },
            offImageEvent() {
                const {image} = this;
                image && off(image, 'load', this.handleLoadImageLoad);
                image && off(image, 'error', this.handleLoadImageError)
            },
            offObserve() {
                const {observer} = this;
                if (observer) {
                    observer.disconnect();
                }
            }
        },
        beforeUnmount() {
            this.offImageEvent();
            this.offObserve();
        }
    }
</script>