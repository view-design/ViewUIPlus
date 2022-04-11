<template>
    <div class="ivu-number-info">
        <div class="ivu-number-info-title" v-if="title || $slots.title"><slot name="title">{{ title }}</slot></div>
        <div class="ivu-number-info-subTitle" v-if="subTitle || $slots.subTitle"><slot name="subTitle">{{ subTitle }}</slot></div>
        <div class="ivu-number-info-value" :style="valueStyle">
            <span class="ivu-number-info-total"><slot name="total">{{ total }}</slot></span>
            <span class="ivu-number-info-subTotal" v-if="subTotal || $slots.subTotal"><slot name="subTotal"><Trend :flag="status">{{ subTotal }}</Trend></slot></span>
        </div>
    </div>
</template>
<script>
    import Trend from '../trend/trend.vue';
    import { oneOf } from '../../utils/assist';

    export default {
        name: 'NumberInfo',
        components: { Trend },
        props: {
            title: {
                type: String
            },
            subTitle: {
                type: String
            },
            total: {
                type: [String, Number]
            },
            subTotal: {
                type: [String, Number]
            },
            status: {
                validator (value) {
                    return oneOf(value, ['up', 'down']);
                }
            },
            gap: {
                type: [String, Number],
                default: 8
            }
        },
        computed: {
            valueStyle () {
                return {
                    'margin-top': this.gap + 'px'
                };
            }
        }
    };
</script>