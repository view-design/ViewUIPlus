<template>
    <Select v-model="model1" filterable style="width:200px" @on-select="handlerSelect">
        <Option v-for="item in cityList" :value="item.value" :key="item.value" :disabled="item.disabled"></Option>
    </Select>
</template>
<script>
export default {
    data () {
        return {
            cityList: [
                {
                    value: 'New York',
                    label: 'New York',
                    disabled: true
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: ''
        }
    },
    methods: {
        handlerSelect(item){
            console.log(item, '=====handlerSelect====')
        }
    }
}
</script>
