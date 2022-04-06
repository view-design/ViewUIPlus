<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker v-model="v2" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                v1: '',
                v2: new Date
            }
        }
    }
</script>
