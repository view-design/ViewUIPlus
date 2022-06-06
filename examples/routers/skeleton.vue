<template>
    <Skeleton
        :loading="loading"
        :paragraph="{ rows: 3 }"
        :avatar="{ size:'large' }"
        animated
        :title="true"
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
