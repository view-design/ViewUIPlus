<template>
    <div>
        <Button @click="handleScroll('top')">定位至视图顶部</Button>
        <Button @click="handleScroll('center')">定位至视图中部</Button>
        <div class="demo-scroll-into-view">
            <div class="demo-scroll-target" ref="target">定位的元素</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            to: 200,
            time: 1000
        }
    },
    methods: {
        handleScroll (position) {
            this.$ScrollIntoView(this.$refs.target, {
                time: 1000,
                align: {
                    top: position === 'top' ? 0 : 0.5, // 视图比例 0 to 1, 默认 0.5 (center)
                    topOffset: position === 'top' ? 80 : 0 // 视图位移 pixels to offset top alignment
                }
            })
        }
    }
}
</script>
<style>
.demo-scroll-into-view{
    height: 1000px;
    position: relative;
    border: 1px solid #999;
}
.demo-scroll-target{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
