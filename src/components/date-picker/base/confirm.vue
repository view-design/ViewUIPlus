<template>
    <div :class="[prefixCls + '-confirm']" @keydown.tab.capture="handleTab">
        <i-button :class="timeClasses" size="small" type="text" :disabled="timeDisabled" v-if="showTime" @click="handleToggleTime">
            {{labels.time}}
        </i-button>
        <i-button size="small" class="ivu-picker-confirm-btn-cancel" @click="handleClear" @keydown.enter="handleClear">
            {{labels.clear}}
        </i-button>
        <i-button size="small" type="primary" @click="handleSuccess" @keydown.enter="handleSuccess">
            {{labels.ok}}
        </i-button>
    </div>
</template>
<script>
    import iButton from '../../button/button.vue';
    import Locale from '../../../mixins/locale';
    import { isClient } from '../../../utils/index';

    const prefixCls = 'ivu-picker';

    export default {
        mixins: [ Locale ],
        components: { iButton },
        emits: ['on-pick-clear', 'on-pick-success', 'on-pick-toggle-time'],
        inject: ['PickerInstance'],
        props: {
            showTime: {
                type: Boolean,
                default: false
            },
            isTime: {
                type: Boolean,
                default: false
            },
            timeDisabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                prefixCls: prefixCls
            };
        },
        computed: {
            timeClasses () {
                return  `${prefixCls}-confirm-time`;
            },
            labels(){
                const labels = ['time', 'clear', 'ok'];
                const values = [(this.isTime ? 'selectDate' : 'selectTime'), 'clear', 'ok'];
                return labels.reduce((obj, key, i) => {
                    obj[key] = this.t('i.datepicker.' + values[i]);
                    return obj;
                }, {});
            }
        },
        methods: {
            handleClear () {
                this.$emit('on-pick-clear');
            },
            handleSuccess () {
                this.$emit('on-pick-success');
            },
            handleToggleTime () {
                if (this.timeDisabled) return;
                this.$emit('on-pick-toggle-time');
                this.PickerInstance.handleOnFocusInput();
                this.PickerInstance.handleOnUpdatePopper();
            },
            handleTab (e) {
                const tabbables = [...this.$el.children];
                const expectedFocus = tabbables[e.shiftKey ? 'shift' : 'pop']();

                if (isClient && document.activeElement === expectedFocus) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.PickerInstance.handleOnFocusInput();
                }
            }
        }
    };
</script>
