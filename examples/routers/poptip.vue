<template>
    <div style="margin: 100px">
        <Poptip
            confirm
            title="Are you sure you want to delete this item?"
            @on-ok="ok"
            @on-cancel="cancel">
            <Button>Delete</Button>
        </Poptip>
        <Poptip
            confirm
            title="Are you sure delete this task?"
            @on-ok="ok"
            @on-cancel="cancel"
            ok-text="yes"
            cancel-text="no">
            <Button>Internationalization</Button>
        </Poptip>
    </div>
</template>
<script>
export default {
    methods: {
        ok () {
            this.$Message.info('You click ok');
        },
        cancel () {
            this.$Message.info('You click cancel');
        }
    }
}
</script>
