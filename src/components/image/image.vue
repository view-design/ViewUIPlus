<template>
    <div class="ivu-image" ref="image" :style="imageStyles">
        <div v-if="loading" class="ivu-image-placeholder">
            <slot name="placeholder">
                <span>{{ loadingLang }}</span>
            </slot>
        </div>
        <div v-else-if="imageError" class="ivu-image-error">
            <slot name="error">
                <span>{{ failLang }}</span>
            </slot>
        </div>
        <div v-if="loadingImage" :class="innerClasses" @click="handlePreview">
            <img
                :class="imgClasses"
                :style="[fitStyle]"
                :alt="alt"
                :src="src"
                :loading="loadingType"
                :referrerPolicy="referrerPolicy"
                @load="handleImageLoad"
                @error="handleImageError"
            />
            <slot v-if="preview && previewTip" name="preview">
                <div class="ivu-image-mark">
                    <span>{{ previewLang }}</span>
                </div>
            </slot>
        </div>
        <template v-if="preview">
            <ImagePreview
                v-model="imagePreviewModal"
                :preview-list="previewList"
                :initial-index="initialIndex"
                :infinite="infinite"
                :mask-closable="maskClosable"
                :transfer="transfer"
                :toolbar="toolbar"
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
            },
            previewTip: {
                type: Boolean,
                default: true
            },
            toolbar: {
                type: Array,
                default() {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || !global.$VIEWUI.image || global.$VIEWUI.image.toolbar === ''
                        ? ['zoomIn', 'zoomOut', 'original', 'rotateLeft', 'rotateRight', 'download']
                        : global.$VIEWUI.image.toolbar;
                }
            }
        },
        data() {
            return {
                loadingImage: false,
                loading: false,
                imageError: false,
                scrollElement: null,
                observer: null,
                imagePreviewModal: false
            }
        },
        watch: {
            src () {
                this.loadImage();
            }
        },
        computed: {
            innerClasses () {
                return [
                    'ivu-image-inner',
                    {
                        ['ivu-image-cursor'] : this.preview
                    }
                ];
            },
            imgClasses () {
                return [
                    'ivu-image-img',
                    {
                        ['ivu-image-img-hidden']: this.loading || this.imageError
                    }
                ];
            },
            fitStyle () {
                const fitContains = ['fill', 'contain', 'cover', 'none', 'scale-down'];
                const { fit } = this;
                return fitContains.includes(fit) ? `object-fit:${fit};` : '';
            },
            imageStyles() {
                return {
                    width: typeof this.width === 'number' ? `${this.width}px` : this.width,
                    height: typeof this.height === 'number' ? `${this.height}px` : this.height
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
            addLazyImageListener () {
                const { scrollContainer } = this;
                this.scrollElement = null;
                if (isElement(scrollContainer)) {
                    this.scrollElement = scrollContainer
                } else if (scrollContainer && typeof scrollContainer === 'string') {
                    this.scrollElement = document.querySelector(scrollContainer);
                }
                // on scrollElement scroll
                this.handleLazy();
            },
            handleImageLoad () {
                this.loading = false;
                this.imageError = false;
                this.$emit('on-load');
            },
            handleImageError () {
                this.loading = false;
                this.imageError = true;
                this.loadingImage = false;
                this.$emit('on-error');
            },
            loadImage () {
                this.loading = true;
                this.imageError = false;
                this.loadingImage = true;
            },
            handleImageEvent () {
                const { lazy } = this;
                lazy ? this.addLazyImageListener() : this.loadImage();
            },
            offObserver () {
                const { observer } = this;
                observer && observer.disconnect();
            },
            handlePreview () {
                const { preview, initialIndex } = this;
                if (preview) {
                    this.imagePreviewModal = true;
                    // reslove click image get the currentIndex to do other thing
                    this.$emit('on-click', { initialIndex });
                }
            },
            handleClose () {
                this.$emit('on-close');
            },
            handleSwitch (params) {
                this.$emit('on-switch', params);
            }
        },
        beforeUnmount () {
            this.offObserver();
        }
    }
</script>
