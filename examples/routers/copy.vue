<template>
    <div>
        <Input type="textarea" v-model="value" />
        <Button @click="handleCopy">复制</Button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: '随意输入内容，点击复制按钮'
        }
    },
    methods: {
        handleCopy () {
            this.$Copy({
                text: this.value
            })
        }
    }
}
</script>
