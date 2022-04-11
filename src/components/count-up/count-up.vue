<template>
    <span class="ivu-count-up"></span>
</template>
<script>
    import CountUp from 'countup.js';

    export default {
        name: 'CountUp',
        props: {
            start: {
                type: Number,
                required: false,
                default: 0
            },
            end: {
                type: Number,
                required: true
            },
            // 小数位数
            decimals: {
                type: Number,
                required: false,
                default: 0
            },
            // 持续时间
            duration: {
                type: Number,
                required: false,
                default: 2
            },
            // countup.js 设置项
            options: {
                type: Object,
                required: false,
                default () {
                    return {};
                }
            },
            callback: {
                type: Function,
                required: false,
                default: () => {}
            }
        },
        data () {
            return {
                CountUp: null
            };
        },
        watch: {
            end (value) {
                if (this.CountUp && this.CountUp.update) {
                    this.CountUp.update(value);
                }
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init () {
                if (!this.CountUp) {
                    this.CountUp = new CountUp(
                        this.$el,
                        this.start,
                        this.end,
                        this.decimals,
                        this.duration,
                        this.options
                    );
                    this.CountUp.start(() => {
                        this.callback(this.CountUp);
                    });
                }
            },
            destroy () {
                this.CountUp = null;
            }
        },
        beforeUnmounted () {
            this.destroy();
        },
        start (callback) {
            if (this.CountUp && this.CountUp.start) {
                this.CountUp.start(() => {
                    callback && callback(this.CountUp);
                });
            }
        },
        pauseResume () {
            if (this.CountUp && this.CountUp.pauseResume) {
                this.CountUp.pauseResume();
            }
        },
        reset () {
            if (this.CountUp && this.CountUp.reset) {
                this.CountUp.reset();
            }
        },
        update (newEndVal) {
            if (this.CountUp && this.CountUp.update) {
                this.CountUp.update(newEndVal);
            }
        }
    };
</script>
