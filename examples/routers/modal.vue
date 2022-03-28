<template>
    <Button @click="modal12 = true">Open Modal (default)</Button>
    <Button @click="modal13 = true">Open Modal (sticky)</Button>
    <Modal v-model="modal12" draggable scrollable :mask="false" title="Modal 1">
        <div>Modal 1</div>
        <div>Can be dragged off the screen</div>
    </Modal>
    <Modal v-model="modal13" draggable sticky scrollable :mask="false" title="Modal 2">
        <div>Modal 2</div>
        <div>Can’t be dragged out of the screen, it will be automatically adsorbed</div>
    </Modal>
</template>
<script>
export default {
    data () {
        return {
            modal12: false,
            modal13: false
        }
    }
}
</script>
