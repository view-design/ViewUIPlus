<template>
    <div class="demo-spin-article">
        <h3>登金陵凤凰台</h3>
        <address>李白</address>
        <article>
            <p>凤凰台上凤凰游，凤去台空江自流。</p>
            <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
            <p>三山半落青天外，二水中分白鹭洲。</p>
            <p>总为浮云能蔽日，长安不见使人愁。</p>
        </article>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
    <br>
    切换显示状态：<Button @click="spinShow = !spinShow">切换</Button>
</template>
<script>
export default {
    data () {
        return {
            spinShow: true
        }
    }
}
</script>
<style>
.demo-spin-article{
    width: 400px;
    height: 200px;
    padding: 10px;
    text-align: center;
    position: relative;
    border: 1px solid #eee;
}
</style>
