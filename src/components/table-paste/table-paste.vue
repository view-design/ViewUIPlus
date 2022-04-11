<template>
    <div class="ivu-table-paste">
        <Row v-if="!hideTable" :gutter="32">
            <Col span="12">
                <div class="ivu-table-paste-input" v-if="value !== undefined || !$slots.default">
                    <slot>
                        <Input v-model="content" type="textarea" v-bind="inputProps" @on-change="handleContentChange"></Input>
                    </slot>
                </div>
            </Col>
            <Col span="12">
                <Table :columns="tableColumns" :data="tableData" v-bind="tableProps"></Table>
            </Col>
        </Row>
        <template v-else>
            <div class="ivu-table-paste-input" v-if="value !== undefined || !$slots.default">
                <slot>
                    <Input v-model="content" type="textarea" v-bind="inputProps" @on-change="handleContentChange"></Input>
                </slot>
            </div>
        </template>
    </div>
</template>
<script>
    import Row from '../row/row.vue';
    import Col from '../col/col.vue';
    import Input from '../input/input.vue';
    import Table from '../table/table.vue';

    import { deepCopy } from '../../utils/assist.js';

    export default {
        name: 'TablePaste',
        components: { Row, Col, Input, Table },
        emits: ['on-change', 'on-error', 'on-success'],
        props: {
            value: {
                type: String
            },
            inputProps: {
                type: Object,
                default () {
                    return {};
                }
            },
            tableProps: {
                type: Object,
                default () {
                    return {};
                }
            },
            hideTable: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                content: '',
                tableColumns: [],
                tableData: []
            };
        },
        watch: {
            value: {
                handler (content) {
                    this.handleResolveContent(content);
                },
                immediate: true
            }
        },
        methods: {
            handleContentChange (e) {
                const content = e.target.value.trim();

                this.$emit('on-change', content);

                this.handleResolveContent(content);
            },
            handleResolveContent (content) {
                let rows = [];
                if (content !== '' && content !== undefined) {
                    rows = content.split((/[\n\u0085\u2028\u2029]|\r\n?/g)).map(row => {
                        return row.split('\t');
                    });
                }

                const errorIndex = this.handleGetErrorIndex(rows);

                const tableData = this.contentToTable(rows);

                this.tableColumns = tableData.columns;
                this.tableData = tableData.data;

                if (errorIndex.length) {
                    this.$emit('on-error', tableData, errorIndex);
                } else {
                    this.$emit('on-success', tableData);
                }
            },
            // 检查除第一行的每一行列数是否与第一行相同
            handleGetErrorIndex (rows) {
                const array = deepCopy(rows);

                const errorIndex = [];
                if (array.length) {
                    const colLen = array[0].length;

                    array.forEach((item, index) => {
                        if (item.length !== colLen) errorIndex.push(index);
                    });
                }

                return errorIndex;
            },
            contentToTable (rows) {
                const array = deepCopy(rows);

                let columns = [];
                let tableData = [];

                if (array.length > 1) {
                    let titles = array.shift();
                    columns = titles.map((item, index) => {
                        return {
                            title: item,
                            key: `key${index}`
                        };
                    });

                    tableData = array.map(item => {
                        const res = {};
                        item.forEach((col, i) => {
                            res[`key${i}`] = col;
                        });
                        return res;
                    });
                }

                return {
                    columns,
                    data: tableData
                };
            }
        }
    };
</script>
