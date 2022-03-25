<template>
    <div class="demo-split">
        <Split v-model="split3">
            <template #left>
                <div class="demo-split-pane no-padding">
                    <Split v-model="split4" mode="vertical">
                        <template #top>
                            <div class="demo-split-pane">
                                Top Pane
                            </div>
                        </template>
                        <template #bottom>
                            <div class="demo-split-pane">
                                Bottom Pane
                            </div>
                        </template>
                    </Split>
                </div>
            </template>
            <template #right>
                <div class="demo-split-pane">
                    Right Pane
                </div>
            </template>
        </Split>
    </div>
</template>
<script>
export default {
    data () {
        return {
            split3: 0.5,
            split4: 0.5
        }
    },
}
</script>
<style>
.demo-split{
    height: 200px;
    border: 1px solid #dcdee2;
}
.demo-split-pane{
    padding: 10px;
}
.demo-split-pane.no-padding{
    height: 200px;
    padding: 0;
}
</style>
