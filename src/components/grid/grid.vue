<template>
    <div class="ivu-grid" :class="classes" ref="grid"><slot></slot></div>
</template>
<script>
    import elementResizeDetectorMaker from 'element-resize-detector';
    import throttle from 'lodash.throttle';

    export default {
        name: 'Grid',
        provide () {
            return {
                GridInstance: this
            };
        },
        props: {
            // 最大支持的列数
            col: {
                type: Number,
                default: 3
            },
            // 是否宽高一致
            square: {
                type: Boolean,
                default: false
            },
            padding: {
                type: String,
                default: '24px'
            },
            // 是否开启垂直居中
            center: {
                type: Boolean,
                default: false
            },
            // 是否显示边框
            border: {
                type: Boolean,
                default: true
            },
            // 是否开启 hover 效果
            hover: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                resizeCount: 0,
                handleResize: () => {},
            };
        },
        computed: {
            classes () {
                return {
                    'ivu-grid-center': this.center,
                    'ivu-grid-border': this.border,
                    'ivu-grid-hover': this.hover
                };
            }
        },
        methods: {
            onResize () {
                this.resizeCount++;
            }
        },
        mounted () {
            this.handleResize = throttle(this.onResize, 150, {leading: false});
            this.observer = elementResizeDetectorMaker();
            this.observer.listenTo(this.$refs.grid, this.handleResize);
        },
        beforeUnmount () {
            this.observer.removeListener(this.$refs.grid, this.handleResize);
        }
    };
</script>
