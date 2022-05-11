<template>
    <li :class="[prefixCls + '-wrap']" v-show="show">
        <div :class="[prefixCls + '-title']">{{ label }}</div>
        <ul>
            <li :class="[prefixCls]" ref="options"><slot></slot></li>
        </ul>
    </li>
</template>
<script>
    import { nextTick } from 'vue';
    import random from '../../utils/random_str';

    const prefixCls = 'ivu-select-group';

    export default {
        name: 'OptionGroup',
        props: {
            label: {
                type: String,
                default: ''
            }
        },
        provide () {
            return {
                OptionGroupInstance: this
            }
        },
        inject: ['SelectInstance'],
        data () {
            return {
                prefixCls: prefixCls,
                hidden: false,    // for search
                id: random(6),
                optionList: []
            };
        },
        computed: {
            show () {
                return this.optionList.find(item => item.proxy && item.proxy.isShow);
            }
        }
    };
</script>
