<template>
    <div>
        <Circle :percent="80">
            <span class="demo-i-circle-inner" style="font-size:24px">80%</span>
        </Circle>
        <Circle :percent="100" stroke-color="#5cb85c">
            <Icon type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
        </Circle>
        <Circle :percent="35" stroke-color="#ff5500">
        <span class="demo-i-circle-inner">
            <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
        </span>
        </Circle>
        <Divider></Divider>
        <Circle :percent="80" dashboard stroke-linecap="square">
            <span class="demo-circle-inner" style="font-size:24px">80%</span>
        </Circle>
        <Divider></Divider>
        <Circle :percent="80" dashboard stroke-linecap="square" :stroke-color="['#108ee9', '#87d068']">
            <span class="demo-circle-inner" style="font-size:24px">80%</span>
        </Circle>
    </div>
</template>
<script>
    export default {

    }
</script>
