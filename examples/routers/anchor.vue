<template>
    <div>
        <div v-for="n in 100" :key="n" :id="n" style="height: 50px;background: #2d8cf0;margin: 20px">
            {{ n }}
        </div>
        <div style="position: absolute;top: 10px;right: 10px">
            <Anchor show-ink>
                <AnchorLink v-for="n in arr" :key="n.id" :href="'#' + n.index" :title="'title' + n.index" />
            </Anchor>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            const arr = [];
            for (let i = 0; i < 100; i++) {
                arr.push({
                    id: Math.random(),
                    index: i + 1
                });
            }
            return {
                arr
            }
        }
    }
</script>
