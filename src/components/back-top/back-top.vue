<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <i class="ivu-icon ivu-icon-ios-arrow-up"></i>
            </div>
        </slot>
    </div>
</template>
<script>
    import { scrollTop } from '../../utils/assist';
    import { on, off } from '../../utils/dom';
    import { isClient } from '../../utils/index';
    const prefixCls = 'ivu-back-top';

    export default {
        name: 'BackTop',
        emits: ['on-click'],
        props: {
            height: {
                type: Number,
                default: 400
            },
            bottom: {
                type: Number,
                default: 30
            },
            right: {
                type: Number,
                default: 30
            },
            duration: {
                type: Number,
                default: 1000
            }
        },
        data () {
            return {
                backTop: false
            };
        },
        mounted () {
//            window.addEventListener('scroll', this.handleScroll, false);
//            window.addEventListener('resize', this.handleScroll, false);
            on(window, 'scroll', this.handleScroll);
            on(window, 'resize', this.handleScroll);
        },
        beforeUnmount () {
//            window.removeEventListener('scroll', this.handleScroll, false);
//            window.removeEventListener('resize', this.handleScroll, false);
            off(window, 'scroll', this.handleScroll);
            off(window, 'resize', this.handleScroll);
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show`]: this.backTop
                    }
                ];
            },
            styles () {
                return {
                    bottom: `${this.bottom}px`,
                    right: `${this.right}px`
                };
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        },
        methods: {
            handleScroll () {
                if (!isClient) return;
                this.backTop = window.pageYOffset >= this.height;
            },
            back () {
                if (!isClient) return;
                const sTop = document.documentElement.scrollTop || document.body.scrollTop;
                scrollTop(window, sTop, 0, this.duration);
                this.$emit('on-click');
            }
        }
    };
</script>
