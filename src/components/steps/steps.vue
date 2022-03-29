<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'ivu-steps';

    export default {
        name: 'Steps',
        provide () {
            return {
                StepsInstance: this
            }
        },
        props: {
            current: {
                type: Number,
                default: 0
            },
            status: {
                validator (value) {
                    return oneOf(value, ['wait', 'process', 'finish', 'error']);
                },
                default: 'process'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small']);
                }
            },
            direction: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'horizontal'
            }
        },
        data () {
            return {
                steps: []
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.direction}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            children () {
                return this.steps.map(item => item.step);
            }
        },
        methods: {
            addStep (id, step) {
                this.steps.push({ id, step });
            },
            removeStep (id) {
                const stepIndex = this.steps.findIndex(item => item.id === id);
                this.steps.splice(stepIndex, 1);
            }
        }
    };
</script>
