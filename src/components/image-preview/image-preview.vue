<template>
    image-preview
</template>
<script>
    export default {
        name: 'ImagePreview',
            modelValue: {
            type: Boolean,
            default: false
        },
        transfer: {
            type: Boolean,
            default: false
        },
        maskClosable: {
            type: Boolean,
            default: true
        },
        previewList: {
            type: Array
        },
        initialIndex: {
            type: Number,
            default: 0
        },
        infinite: {
            type: Boolean,
            default: true
        }

    }
</script>