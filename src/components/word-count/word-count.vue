<template>
    <div class="ivu-word-count">
        <template v-if="circle">
            <Circle :percent="percent" :size="size" :stroke-color="strokeColor"></Circle>
        </template>
        <template v-else>
            <span class="ivu-word-count-prefix" v-if="!isOverflow"><slot name="prefix"></slot></span>
            <span class="ivu-word-count-prefix ivu-word-count-overflow" v-else><slot name="prefix-overflow"></slot></span>
            <span v-if="!isOverflow || !overflow" :class="{ 'ivu-word-count-overflow': isOverflow }">
                <slot name="length" :length="value.length">{{ value.length }}</slot>
            </span>
            <span v-else class="ivu-word-count-overflow">{{ value.length - total }}</span>
            <template v-if="!hideTotal">
                <slot name="separator"> / </slot><slot name="total" :total="total">{{ total }}</slot>
            </template>
            <span class="ivu-word-count-suffix" v-if="!isOverflow"><slot name="suffix"></slot></span>
            <span class="ivu-word-count-suffix ivu-word-count-overflow" v-else><slot name="suffix-overflow"></slot></span>
        </template>
    </div>
</template>
<script>
    import Circle from '../circle/circle.vue';

    export default {
        name: 'WordCount',
        components: { Circle },
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            total: {
                type: Number,
                default: 0
            },
            hideTotal: {
                type: Boolean,
                default: false
            },
            // 当超出 total 时，是否显示为溢出的个数
            overflow: {
                type: Boolean,
                default: false
            },
            // 是否以圆环的形式显示
            circle: {
                type: Boolean,
                default: false
            },
            // circle 模式下的尺寸
            size: {
                type: [String, Number],
                default: 14
            }
        },
        computed: {
            isOverflow () {
                return this.value.length > this.total;
            },
            percent () {
                let percent = this.value.length / this.total * 100;
                if (percent > 100) percent = 100;
                return percent;
            },
            strokeColor () {
                return this.isOverflow ? '#ed4014' : '#2d8cf0';
            }
        }
    };
</script>
