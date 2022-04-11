<template>
    <Row>
        <Col span="12">
            <NumberInfo title="与数字格式化组件 Numeral 结合" sub-title="近7日活跃设备" sub-total="17.1" status="up">
                <template #total>
                    <Numeral value="12321" format="0,0" />
                </template>
            </NumberInfo>
        </Col>
        <Col span="12">
            <NumberInfo title="与数字动画组件 CountUp 结合" sub-title="近30日活跃设备" sub-total="5.3" status="down">
                <template #total>
                    <CountUp :end="50193" :duration="4" />
                </template>
            </NumberInfo>
        </Col>
    </Row>
</template>
<script>
export default {

}
</script>
