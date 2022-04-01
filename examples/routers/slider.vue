<template>
    <Slider v-model="value11" range :marks="marks"></Slider>
</template>
<script>
import { h } from 'vue';
export default {
    data () {
        return {
            value11: [25, 65],
            marks: {
                0: '0°C',
                12: '12°C',
                32: '32°C',
                55: {
                    style: {
                        color: '#ff0000'
                    },
                    label: h('strong', '55℃')
                }
            }
        }
    }
}
</script>
