<template>
    <div>
        <Button @click="handleSetValue">set value</Button>
        <Button @click="addCityList">set value again</Button>
        <Select v-model="model" style="width:200px">
            <template v-if="showOption">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </template>
        </Select>
    </div>
</template>
<script>
export default {
    data () {
        return {
            showOption: false,
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
            model: ''
        }
    },
    created(){
    },
    methods: {
        addCityList(){
            this.model = 'London';
            const randomArray = [];
            for(let i = 0; i < 1000; i++) {
                randomArray.push({
                    value: 'value' + i,
                    label: 'label' + i
                })
            }
            this.cityList = this.cityList.concat(randomArray);
        },
        handleSetValue () {
            this.model = 'value5';
            this.showOption = true;
            this.$nextTick(() => {
                this.showOption = false;
                setTimeout(()=> {
                    this.showOption = true;
                    const randomArray = [];
                    for(let i = 0; i < 1000; i++) {
                        randomArray.push({
                            value: 'value' + i,
                            label: 'label' + i
                        })
                    }
                    this.cityList = this.cityList.concat(randomArray);
                }, 500)
            });
        }
    }
}
</script>