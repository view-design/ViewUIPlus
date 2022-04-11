<template>
    <div>
        <Button @click="width = 400">改变宽度</Button>
        <div class="demo-resize" v-width="width" v-resize="handleResize">
            当宽度变化时，会触发事件
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            width: 300
        }
    },
    methods: {
        handleResize () {
            this.$Message.info('Table 宽度正在变化');
        }
    }
}
</script>
<style>
.demo-resize{
    border: 1px solid #999;
}
</style>
