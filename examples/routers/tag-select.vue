<template>
    <TagSelect v-model="value">
        <TagSelectOption name="tag1" color="magenta">选项一</TagSelectOption>
        <TagSelectOption name="tag2" color="red">选项二</TagSelectOption>
        <TagSelectOption name="tag3" color="green">选项三</TagSelectOption>
        <TagSelectOption name="tag4" color="blue">选项四</TagSelectOption>
        <TagSelectOption name="tag5" color="purple">选项五</TagSelectOption>
        <TagSelectOption name="tag6" color="orange">选项六</TagSelectOption>
    </TagSelect>
</template>
<script>
export default {
    data () {
        return {
            value: []
        }
    }
}
</script>
