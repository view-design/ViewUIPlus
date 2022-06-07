<template>
    <div :class="classes" :style="styles">
        <Icon v-if="showIcon" :class="iconClasses" type="ios-image" :size="iconSize"/>
    </div>
</template>

<script>
    import { getCurrentInstance } from 'vue';
    import { oneOf } from '../../utils/assist';
    import Icon from '../icon';

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
                default: 'circle'
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
        computed: {
            classes() {
                return {
                    [prefixCls]: true,
                    [prefixCls + '-animated']: this.animated || Boolean(this.SkeletonInstance) && this.SkeletonInstance.animated,
                    [prefixCls + '-' + this.type]: true,
                    [prefixCls + '-' + this.type + '-' + this.size]: true,
                    [prefixCls + '-inline']: !this.block,
                    [prefixCls + '-round']: Boolean(this.SkeletonInstance) && this.SkeletonInstance.round
                };
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
                    if (this.type === 'image' && this.imgSrc) {
                        styleObj.background = `no-repeat url(${this.imgSrc}) center center`;
                        styleObj.backgroundSize = 'contain';
                    }
                }
                return styleObj;
            },
            showIcon() {
                return this.type === 'image' && !this.imgSrc;
            },
            iconClasses() {
                return {
                    [prefixCls + '-image-icon']: true
                };
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
