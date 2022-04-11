<template>
    <div>
        <Input v-model="value" type="textarea" />
        <br><br>
        <WordCount :value="value" :total="10" circle :size="24" />
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: ''
        }
    }
}
</script>
