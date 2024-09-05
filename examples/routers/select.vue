<template>
    <div>
        <Button @click="handleSetValue">set value</Button>
        <Button @click="addCityList">set value again</Button>
        <Select v-model="model" style="width:200px">
            <template v-if="showOption">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </template>
        </Select>
        <Row :gutter="24" style="margin-top:10px">
            <Col span="12">
                <Select
                    v-model="model"
                    filterable
                    :remote-method="remoteMethod3"
                    default-label="北京"
                    :loading="loading3"
                >
                    <Option v-for="(option, index) in options3" :value="option.value" :key="index">{{option.label}}</Option>
                </Select>
            </Col>
            <Col span="12">
                <Select
                    v-model="model1"
                    multiple
                    filterable
                    :remote-method="remoteMethod4"
                    :default-label="['北京', '深圳']"
                    :loading="loading4"
                    @on-set-default-options="setDefaultOptions"
                >
                    <Option v-for="(option, index) in options4" :value="option.value" :key="index">{{option.label}}</Option>
                </Select>
            </Col>
        </Row>
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
            model: '',

            model2: 'beijing',
            options3: [],
            loading3: false,
            model1: ['beijing', 'shenzhen'],
            options4: [],
            loading4: false,
            list2: [
                {
                    value: 'beijing',
                    label: '北京'
                },
                {
                    value: 'shanghai',
                    label: '上海'
                },
                {
                    value: 'shenzhen',
                    label: '深圳'
                },
                {
                    value: 'hangzhou',
                    label: '杭州'
                },
                {
                    value: 'guangzhou',
                    label: '广州'
                }
            ]
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
        },
        remoteMethod3 (query) {
            if (query !== '') {
                this.loading3 = true;
                setTimeout(() => {
                    this.loading3 = false;
                    this.options3 = this.list2.filter(item => item.label.indexOf(query) > -1);
                }, 200);
            } else {
                this.options3 = [];
            }
        },
        remoteMethod4 (query) {
            if (query !== '') {
                this.loading4 = true;
                setTimeout(() => {
                    this.loading4 = false;
                    this.options4 = this.list2.filter(item => item.label.indexOf(query) > -1);
                }, 200);
            } else {
                this.options4 = [];
            }
        },
        setDefaultOptions (options) {
            this.options4 = options;
        }
    }
}
</script>
