<template>
    <Space :size="30">
        <Select v-model="model" transfer>
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <template v-for="i in count" :key="i">
            <Button @click="handleClick(i)" long>{{ i }}</Button>
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
                switchValue: true,
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model: ''
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
