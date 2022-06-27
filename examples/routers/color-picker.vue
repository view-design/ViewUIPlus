<template>
    <Row>
        <Col span="8">
            <ColorPicker v-model="color6" size="large" transfer/>
        </Col>
        <Col span="8">
            <ColorPicker v-model="color6" />
        </Col>
        <Col span="8">
            <ColorPicker v-model="color6" size="small" />
        </Col>
    </Row>
</template>
<script>
export default {
    data () {
        return {
            color6: '#19be6b'
        }
    }
}
</script>
