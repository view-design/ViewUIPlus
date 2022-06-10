<template>
    <div :class="classes" :style="styles">
        <Icon v-if="showIcon" :class="prefixCls + '-image-icon'" type="ios-image" :size="iconSize"/>
    </div>
</template>

<script>
    import { getCurrentInstance } from 'vue';
    import { oneOf } from '../../utils/assist';
    import Icon from '../icon/icon.vue';

    const prefixCls = 'ivu-skeleton-item';

    export default {
        name: 'SkeletonItem',
        components: { Icon },
        inject: {
            SkeletonInstance: {
                default: null
            }
        },
        props: {
            animated: {
                type: Boolean,
                default: false
            },
            type: {
                validator(value) {
                    return oneOf(value, ['circle', 'square', 'rect', 'image']);
                },
                default: 'rect'
            },
            size: {
                validator(value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.size === '' ? 'default' : global.$VIEWUI.size;
                }
            },
            width: {
                type: [String, Number]
            },
            height: {
                type: [String, Number]
            },
            block: {
                type: Boolean,
                default: false
            },
            imgSrc: {
                type: String
            }
        },
        data() {
            return {
                prefixCls
            };
        },
        computed: {
            classes() {
                return [
                    prefixCls,
                    prefixCls + '-' + this.type,
                    prefixCls + '-' + this.type + '-' + this.size,
                    {
                        [prefixCls + '-animated']: this.animated || Boolean(this.SkeletonInstance) && this.SkeletonInstance.animated,
                        [prefixCls + '-inline']: !this.block,
                        [prefixCls + '-with-image']: this.showImage,
                        [prefixCls + '-round']: Boolean(this.SkeletonInstance) && this.SkeletonInstance.round
                    }
                ];
            },
            styles() {
                const styleObj = {}
                if (['rect', 'image'].includes(this.type)) {
                    if (this.width) {
                        styleObj.width = typeof this.width === 'number' ? `${this.width}px` : this.width;
                    }
                    if (this.height) {
                        styleObj.height = typeof this.height === 'number' ? `${this.height}px` : this.height;
                    }
                    if (this.showImage) {
                        styleObj.background = `no-repeat url(${this.imgSrc}) center center`;
                        styleObj.backgroundSize = 'contain';
                    }
                }
                return styleObj;
            },
            showIcon() {
                return this.type === 'image' && !this.imgSrc;
            },
            showImage() {
                return this.type === 'image' && Boolean(this.imgSrc);
            },
            iconSize() {
                let iconSize = 16;
                if (this.size === 'large') iconSize = 32;
                if (this.size === 'small') iconSize = 10;
                return iconSize;
            }
        }
    }

</script>
