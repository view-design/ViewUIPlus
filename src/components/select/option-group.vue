<template>
    <li :class="[prefixCls + '-wrap']" v-show="!hidden">
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
        methods: {
            queryChange () {
                nextTick(() => {
                    const options = this.$refs.options.querySelectorAll('.ivu-select-item');
                    let hasVisibleOption = false;
                    for (let i = 0; i < options.length; i++) {
                        if (options[i].style.display !== 'none') {
                            hasVisibleOption = true;
                            break;
                        }
                    }
                    this.hidden = !hasVisibleOption;
                });
            },
            // addOptionGroup () {
            //     const select = this.SelectInstance;
            //     select.slotOptions.push({
            //         id: this.id,
            //         optionGroup: this,
            //         tag: 'option-group'
            //     });
            // },
            // removeOptionGroup () {
            //     const select = this.SelectInstance;
            //     const index = select.slotOptions.findIndex(item => item.id === this.id);
            //     select.slotOptions.splice(index, 1);
            // }
        },
        mounted () {
            // this.addOptionGroup();
            // todo
            // this.$on('on-query-change', () => {
            //     this.queryChange();
            //     return true;
            // });
        },
        beforeUnmount () {
            // this.removeOptionGroup();
            // todo
            // this.$off('on-query-change');
        }
    };
</script>
