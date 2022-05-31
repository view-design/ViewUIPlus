<template>
    <Skeleton
        :loading="loading"
        :paragraph="{ rows: 5 }"
        :round="false"
        :avatar="{type:'square', size:'large'}"
        animated
        title
    >
        <div>业务数据</div>
    </Skeleton>
<!--    <SkeletonItem type="image" size="large" animated/>-->
</template>

<script>
    export default {
        data() {
            return {
                loading: true
            }
        },
        mounted() {
            // setTimeout(() => {
            //     this.loading = false
            // }, 3000)
        }
    }
</script>

<style>
</style>
