<template>
    <div :class="prefixCls" ref="image" :style="imageStyles">
        <div v-if="loading" :class="[prefixCls + '-placeholder']">
            <slot name="placeholder">
                <span>{{loadingLang}}</span>
            </slot>
        </div>
        <div v-else-if="imageError" :class="[prefixCls + '-error']">
            <slot name="error">
                <span>{{failLang}}</span>
            </slot>
        </div>
        <div :class="[prefixCls + '-inner']" v-if="loadingImage">
            <img
                :alt="alt"
                :src="src"
                @load="handleImageLoad"
                @error="handleImageError"
                :referrerPolicy="referrerPolicy"
                :style="[fitStyle]"
                :loading="loadingType"
                :class="[prefixCls + '-img', (loading || imageError) ? prefixCls + '-img-hidden' : '']"
            />
            <slot v-if="preview" name="preview">
                <div
                    :class="[prefixCls + '-mark']"
                    @click="handlePreview"
                >
                    <span>{{previewLang}}</span>
                </div>
            </slot>
        </div>
        <template v-if="preview">
            <ImagePreview
                :infinite="infinite"
                :preview-list="previewList"
                :mask-closable="maskClosable"
                :initial-index="initialIndex"
                v-model="imagePreviewModal"
                @on-close="handleClose"
                @on-switch="handleSwitch"
            />
        </template>
    </div>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import { isClient } from '../../utils/index';
    import ImagePreview  from './image-preview.vue';
    import Locale from '../../mixins/locale';

    const prefixCls = 'ivu-image';

    // is Element
    const isElement = (el)=> {
        return typeof HTMLElement === 'object' && el instanceof HTMLElement;
    }

    export default {
        name: 'Image',
        mixins: [ Locale ],
        components: { ImagePreview },
        emits: ['on-load', 'on-error', 'on-switch', 'on-close', 'on-click'],
        props: {
            src: {
                type: String,
                default: ''
            },
            alt: {
                type: String,
                default: ''
            },
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
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? false : global.$VIEWUI.transfer;
                }
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            // preview list
            previewList: {
                type: Array
            },
            infinite: {
                type: Boolean,
                default: true
            },
            initialIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                prefixCls: prefixCls,
                loadingImage: false,
                loading: false,
                imageError: false,
                scrollElement: null,
                observer: null,
                imagePreviewModal: false
            }
        },
        computed: {
            fitStyle() {
                const fitContains = ['fill', 'contain', 'cover', 'none', 'scale-down'];
                const {fit} = this;
                return fitContains.includes(fit) ? `object-fit:${fit};` : '';
            },
            imageStyles() {
                return {
                    width: `${this.width}px`,
                    height: `${this.height}px`
                };
            },
            loadingLang() {
                return this.t('i.select.loading')
            },
            failLang() {
                return this.t('i.image.fail')
            },
            previewLang() {
                return this.t('i.image.preview')
            },
            loadingType() {
                return this.lazy ? 'lazy' : 'eager';
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
                    threshold: 0
                });
                observer.observe($el);
            },
            handlerObserveImage (entries) {
                for( let entry of entries) {
                    if (entry.isIntersecting) {
                        // destory new IntersectionObserver
                        this.offObserver();
                        // run image onload
                        this.loadImage();
                    }
                }
            },
            addLazyImageListener() {
                const {scrollContainer} = this;
                this.scrollElement = null;
                if (isElement(scrollContainer)) {
                    this.scrollElement = scrollContainer
                } else if (scrollContainer && typeof scrollContainer === 'string') {
                    this.scrollElement = document.querySelector(scrollContainer);
                }
                // on scrollElement scroll
                this.handleLazy();
            },
            handleImageLoad() {
                this.loading = false;
                this.imageError = false;
                this.$emit('on-load');
            },
            handleImageError() {
                this.loading = false;
                this.imageError = true;
                this.loadingImage = false;
                this.$emit('on-error');
            },
            loadImage() {
                this.loading = true;
                this.imageError = false;
                this.loadingImage = true;
            },
            handleImageEvent() {
                const { lazy } = this;
                lazy ? this.addLazyImageListener() : this.loadImage();
            },
            offObserver() {
                const {observer} = this;
                observer && observer.disconnect();
            },
            handlePreview() {
                const {preview, initialIndex} = this;
                if (preview) {
                    this.imagePreviewModal = true;
                    // reslove click image get the currentIndex to do other thing
                    this.$emit('on-click', {initialIndex})
                }
            },
            handleClose() {
                this.$emit('on-close')
            },
            handleSwitch(params) {
                this.$emit('on-switch', params)
            }
        },
        beforeUnmount() {
            this.offObserver();
        }
    }
</script>
