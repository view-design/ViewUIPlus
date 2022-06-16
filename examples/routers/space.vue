<template>
    <Space wrap>
        <template v-for="i in count" :key="i">
            <Button @click="handleClick(i)">{{ i }}</Button>
        </template>
        <Switch v-model="switchValue" />
    </Space>
</template>

<script>
    import { resolveComponent, h } from 'vue';
    export default {
        data() {
            return {
                count: 9,
                switchValue: true
            }
        },
        methods: {
            handleClick(index) {
                this.$Message.info(`click button-${index}`);
            }
        },
        // render() {
        //     return h(resolveComponent('Space'), null, {
        //         default: () => [
        //             h(
        //                 resolveComponent('Button'),
        //                 {
        //                     onClick: () => {
        //                         this.$Message.info('click button')
        //                     },
        //                 },
        //                 { default: () => '按钮' }
        //             ),
        //             h(
        //                 resolveComponent('Switch'),
        //                 {
        //                     modelValue: this.switchValue,
        //                     'onUpdate:modelValue': (val) => {
        //                         this.switchValue = val;
        //                     }
        //                 }
        //             )
        //         ]
        //     })
        // }
    }
</script>

<style scoped lang="less">
</style>
