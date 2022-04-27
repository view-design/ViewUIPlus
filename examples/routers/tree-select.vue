<template>
    <TreeSelect v-model="value" multiple show-checkbox :load-data="loadData" v-width="400" />
    <Select v-model="model1" style="width:200px">
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                value: [],
                nextValue: 1,
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
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
                model1: '',
                data: [
                    {
                        title: 'parent1',
                        value: 'parent1',
                        loading: false,
                        selected: false,
                        checked: false,
                        children: []
                    }
                ]
            }
        },
        methods: {
            loadData (item, callback) {
                this.nextValue++;
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children' + this.nextValue,
                            value: 'children' + this.nextValue,
                            loading: false,
                            selected: false,
                            checked: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    }
</script>