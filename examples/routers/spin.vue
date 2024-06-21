<template>
    <div>
        <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
        <Button type="primary" @click="handleSpinCustom">自定义显示内容</Button>
    </div>
</template>
<script>
export default {
    methods: {
        handleSpinShow () {
            this.$Spin.show();
            setTimeout(() => {
                this.$Spin.hide();
            }, 3000);
        },
        handleSpinCustom () {
            this.$Spin.show({
                render: (h) => {
                    return h('div', [
                        h('Icon', {
                            'class': 'demo-spin-icon-load',
                            props: {
                                type: 'ios-loading',
                                size: 18
                            }
                        }),
                        h('div', 'Loading')
                    ])
                }
            });
            setTimeout(() => {
                this.$Spin.hide();
            }, 3000);
        }
    },
    mounted () {
        this.$Spin.show();
        setTimeout(() => {
            this.$Spin.hide();
        }, 3000)
    }
}
</script>
<style>
.demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
}
</style>
