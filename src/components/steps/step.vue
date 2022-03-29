<template>
    <div :class="wrapClasses">
        <div :class="[prefixCls + '-tail']"><i></i></div>
        <div :class="[prefixCls + '-head']">
            <div :class="[prefixCls + '-head-inner']">
                <span v-if="!icon && !$slots.icon && currentStatus !== 'finish' && currentStatus !== 'error'">{{ stepNumber }}</span>
                <span v-else-if="$slots.icon" class="ivu-steps-icon"><slot name="icon"></slot></span>
                <span v-else :class="iconClasses"></span>
            </div>
        </div>
        <div :class="[prefixCls + '-main']">
            <div :class="[prefixCls + '-title']"><slot name="title">{{ title }}</slot></div>
            <div :class="[prefixCls + '-content']" v-if="content || $slots.content">
                <slot name="content">{{ content }}</slot>
            </div>
        </div>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    import random from '../../utils/random_str';

    const prefixCls = 'ivu-steps';
    const iconPrefixCls = 'ivu-icon';

    export default {
        name: 'Step',
        inject: ['StepsInstance'],
        props: {
            status: {
                validator (value) {
                    return oneOf(value, ['wait', 'process', 'finish', 'error']);
                }
            },
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String
            },
            icon: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                id: random(6)
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-item`,
                    `${prefixCls}-status-${this.currentStatus}`,
                    {
                        [`${prefixCls}-custom`]: !!this.icon || !!this.$slots.icon,
                        [`${prefixCls}-next-error`]: this.nextError
                    }
                ];
            },
            iconClasses () {
                let icon = '';

                if (this.icon) {
                    icon = this.icon;
                } else {
                    if (this.currentStatus === 'finish') {
                        icon = 'ios-checkmark';
                    } else if (this.currentStatus === 'error') {
                        icon = 'ios-close';
                    }
                }

                return [
                    `${prefixCls}-icon`,
                    `${iconPrefixCls}`,
                    {
                        [`${iconPrefixCls}-${icon}`]: icon !== ''
                    }
                ];
            },
            stepNumber () {
                return this.StepsInstance.steps.findIndex(item => item.id === this.id) + 1;
            },
            total () {
                return this.StepsInstance.direction === 'horizontal' ? this.StepsInstance.steps.length : 1;
            },
            currentStatus () {
                let status = '';

                if (this.status) {
                    status = this.status;
                } else {
                    const StepsInstance = this.StepsInstance;
                    const current = StepsInstance.current;
                    const index = StepsInstance.steps.findIndex(item => item.id === this.id);

                    if (index === current) {
                        if (StepsInstance.status !== 'error') {
                            status = 'process';
                        } else {
                            status = 'error';
                        }
                    } else if (index < current) {
                        status = 'finish';
                    } else {
                        status = 'wait';
                    }
                }

                return status;
            },
            nextError () {
                let status = false;

                const StepsInstance = this.StepsInstance;
                const index = StepsInstance.steps.findIndex(item => item.id === this.id);

                if ((index + 1) < StepsInstance.steps.length) {
                    const nextStep = StepsInstance.steps[index + 1];
                    if (nextStep.currentStatus === 'error') status = true;
                }

                return status;
            }
        },
        beforeMount () {
            this.StepsInstance.addStep(this.id, this);
        },
        beforeUnmount () {
            this.StepsInstance.removeStep(this.id);
        }
    };
</script>
