<template>
    <div>22</div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: [String, Number, Array],
             default: ''
        }
    },
    setup() {
        
    },
})
</script>
