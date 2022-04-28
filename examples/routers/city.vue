<template>
    <City v-model="value" :cities="cities" />
</template>
<script>
    export default {
        data () {
            return {
                value: '110000',
                cities: ['110000', '310000', '440100', '440300', '510100', '120000', '330100', '420100', '500000']
            }
        }
    }
</script>