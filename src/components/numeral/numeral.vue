<template>
    <span class="ivu-numeral"><slot name="prefix">{{ prefix }}</slot>{{ currentValue }}<slot name="suffix">{{ suffix }}</slot></span>
</template>
<script>
    import Numeral from 'numeral';

    export default {
        name: 'Numeral',
        emits: ['on-change'],
        props: {
            value: {
                type: [String, Number]
            },
            format: {
                type: String
            },
            prefix: {
                type: [String, Number]
            },
            suffix: {
                type: [String, Number]
            }
        },
        data () {
            return {
                currentValue: ''
            };
        },
        watch: {
            value () {
                this.init();
            },
            format () {
                this.init();
            }
        },
        methods: {
            init () {
                if (this.value !== undefined) {
                    const num = Numeral(this.value);

                    if (this.format) {
                        this.currentValue = num.format(this.format);
                    } else {
                        this.currentValue = num.value();
                    }
                    this.$emit('on-change', this.currentValue);
                }
            },
            getValue () {
                return this.currentValue;
            }
        },
        mounted () {
            this.init();
        }
    };
</script>
