<template>
    <div class="ivu-result">
        <div class="ivu-result-icon" :class="iconClasses">
            <Icon type="ios-checkmark" v-if="type === 'success'" />
            <Icon type="ios-close" v-if="type === 'error'" />
            <Icon type="ios-information" v-if="type === 'warning'" />
        </div>
        <div class="ivu-result-title" v-if="title || $slots.title"><slot name="title">{{ title }}</slot></div>
        <div class="ivu-result-desc" v-if="desc || $slots.desc"><slot name="desc">{{ desc }}</slot></div>
        <div class="ivu-result-extra" v-if="extra || $slots.extra"><slot name="extra">{{ extra }}</slot></div>
        <div class="ivu-result-actions" v-if="$slots.actions"><slot name="actions"></slot></div>
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';

    import { oneOf } from '../../utils/assist.js';

    export default {
        name: 'Result',
        components: { Icon },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['success', 'error', 'warning']);
                }
            },
            title: {
                type: String
            },
            desc: {
                type: String
            },
            extra: {
                type: String
            }
        },
        computed: {
            iconClasses () {
                return {
                    'ivu-result-icon-success': this.type === 'success',
                    'ivu-result-icon-error': this.type === 'error',
                    'ivu-result-icon-warning': this.type === 'warning'
                };
            }
        }
    };
</script>
