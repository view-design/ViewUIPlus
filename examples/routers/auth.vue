<template>
    <div>
        <Divider>prevent 模式，默认效果</Divider>
        <Auth authority="admin" access="user" prevent>
            <Button type="primary" size="large" @click="handleSubmit">操作</Button>
        </Auth>
        <Divider>prevent 模式，自定义文案</Divider>
        <Auth authority="admin" access="user" prevent message="权限不足">
            <Button type="primary" size="large" @click="handleSubmit">操作</Button>
        </Auth>
        <Divider>prevent 模式，自定义点击</Divider>
        <Auth authority="admin" access="user" prevent custom-tip @click="handleClick">
            <Button type="primary" size="large" @click="handleSubmit">操作</Button>
        </Auth>
    </div>
</template>
<script>
export default {
    methods: {
        handleSubmit () {
            // 因为第一个鉴权是不通过的，所以点击按钮也不会触发该方法
            this.$Message.success('点击了操作按钮');
        },
        handleClick () {
            this.$Notice.warning({
                title: '提示',
                desc: '您当前权限不足，无法进行操作'
            });
        }
    }
}
</script>
