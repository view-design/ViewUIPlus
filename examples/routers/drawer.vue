<template>
    <Button @click="value5 = true" type="primary">Open Drawer</Button>
    <Drawer title="Multi-level drawer" width="512" :closable="false" v-model="value5">
        <Button @click="value6 = true" type="primary">Two-level Drawer</Button>
    </Drawer>
    <Drawer title="Two-level Drawer" :closable="false" v-model="value6">
        This is two-level drawer.
    </Drawer>
</template>
<script>
export default {
    data () {
        return {
            value5: false,
            value6: false
        }
    }
}
</script>
<style>
body{
    height: 2000px;
}
</style>
