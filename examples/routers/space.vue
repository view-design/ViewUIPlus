<template>
    <Space>
        <Button>111</Button>
        <span>444</span>
        <!-- space -->
    </Space>
</template>

<script>
    import { resolveComponent, h } from 'vue';
    export default {
        data() {
            return {
                count: 333,
                count1: 444,
                count2: 555
            }
        },
        // render() {
        //     return h(resolveComponent('Space'), null, {
        //         default: () => [this.count, null, undefined, []]
        //     })
        // }
    }
</script>

<style scoped lang="less">
</style>
