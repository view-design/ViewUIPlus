<template>
    <div>
        <p>With desc</p>
        <Button @click="info(false)">Info</Button>
        <Button @click="success(false)">Success</Button>
        <Button @click="warning(false)">Warning</Button>
        <Button @click="error(false)">Error</Button>
        <p>Only title</p>
        <Button @click="info(true)">Info</Button>
        <Button @click="success(true)">Success</Button>
        <Button @click="warning(true)">Warning</Button>
        <Button @click="error(true)">Error</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            info (nodesc) {
                this.$Notice.info({
                    duration: 10000,
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    duration: 10000,
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    duration: 10000,
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    duration: 10000,
                    name: '1111111',
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
                setTimeout(() =>{
                    this.$Notice.close('1111111')
                }, 3000)
            }
        }
    }
</script>
