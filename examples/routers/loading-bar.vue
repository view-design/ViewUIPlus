<template>
    <div>
        <Button @click="start">Start</Button>
        <Button @click="finish">Finish</Button>
        <Button @click="error">Error</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            }
        },
        created () {
           // this.$Loading.config({
           //     color: '#5cb85c',
           //     failedColor: '#f0ad4e',
           //     height: 5
           // });
        }
    }
</script>
