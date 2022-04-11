<template>
    <div class="ivu-description-list" :class="{ 'ivu-description-list-vertical': layout === 'vertical' }">
        <div class="ivu-description-list-title" v-if="title || $slots.title"><slot name="title">{{ title }}</slot></div>
        <Row :gutter="gutter">
            <slot></slot>
        </Row>
    </div>
</template>
<script>
    import Row from '../row/row.vue';
    import { oneOf } from '../../utils/assist.js';

    export default {
        name: 'DescriptionList',
        components: { Row },
        provide () {
            return {
                DescriptionListInstance: this
            };
        },
        props: {
            layout: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'horizontal'
            },
            title: {
                type: String
            },
            gutter: {
                type: Number,
                default: 32
            },
            col: {
                validator (value) {
                    return oneOf(value, [1, 2, 3, 4]);
                },
                default: 3
            }
        }
    };
</script>
