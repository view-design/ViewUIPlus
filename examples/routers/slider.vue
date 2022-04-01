<template>
    <Slider v-model="value1"></Slider>
    <Slider v-model="value2" range></Slider>
    <Slider v-model="value3" range disabled></Slider>
</template>
<script>
export default {
    data () {
        return {
            value1: 25,
            value2: [20, 50],
            value3: [20, 50]
        }
    }
}
</script>
