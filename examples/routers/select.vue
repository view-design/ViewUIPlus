<template>
    <Row>
        <Col span="12" style="padding-right:10px">
            <Select
                v-model="model19"
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
                v-model="model20"
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
</template>
<script>
    export default {
        data () {
            return {
                model19: 'beijing',
                options3: [],
                loading3: false,
                model20: ['beijing', 'shenzhen'],
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
                ],
            };
        },
        methods: {
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
            }
        }
    };
</script>
