<template>
    <Row>
        <Col span="12">
            有默认值
            <ColorPicker v-model="color1" />
        </Col>
        <Col span="12">
            无默认值
            <ColorPicker v-model="color2" />
        </Col>
    </Row>
</template>
<script>
export default {
    data () {
        return {
            color1: '#19be6b',
            color2: ''
        }
    }
}
</script>
