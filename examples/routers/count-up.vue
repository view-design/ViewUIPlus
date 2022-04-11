<template>
    <div>
        <p class="ivu-m"><strong>不显示分隔符及 easing 动画</strong></p>
        <CountUp :end="1234" :duration="6" :options="options" ref="count" />
        <p class="ivu-m"><strong>控制</strong></p>
        <Button @click="handleRestart">重新开始</Button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            options: {
                useEasing: false,
                useGrouping: false
            }
        }
    },
    methods: {
        handleRestart () {
            this.$refs.count.CountUp.reset();
            this.$refs.count.CountUp.start();
        }
    }
}
</script>
