<template>
    <Row>
        <Col span="12">
            <CountDown :target="targetTime1" />
        </Col>
        <Col span="12">
            <CountDown :target="targetTime2" @on-end="handleEnd" />
        </Col>
    </Row>
</template>
<script>
export default {
    data () {
        return {
            targetTime1: new Date().getTime() + 3900000,
            targetTime2: new Date().getTime() + 30000,
        }
    },
    methods: {
        handleEnd () {
            this.$Message.info('倒计时结束');
        }
    }
}
</script>
