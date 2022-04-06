<template>
    <div :class="classes">
        <div :class="[prefixCls+ '-list']" ref="hours">
            <ul :class="[prefixCls + '-ul']">
                <li :class="getCellCls(item)" v-for="item in hoursList" :key="item.text" v-show="!item.hide" @click="handleClick('hours', item)">{{ formatTime(item.text) }}</li>
            </ul>
        </div>
        <div :class="[prefixCls+ '-list']" ref="minutes">
            <ul :class="[prefixCls + '-ul']">
                <li :class="getCellCls(item)" v-for="item in minutesList" :key="item.text" v-show="!item.hide" @click="handleClick('minutes', item)">{{ formatTime(item.text) }}</li>
            </ul>
        </div>
        <div :class="[prefixCls+ '-list']" v-show="showSeconds" ref="seconds">
            <ul :class="[prefixCls + '-ul']">
                <li :class="getCellCls(item)" v-for="item in secondsList" :key="item.text" v-show="!item.hide" @click="handleClick('seconds', item)">{{ formatTime(item.text) }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import { nextTick } from 'vue';
    import Options from '../time-mixins';
    import { deepCopy, scrollTop, firstUpperCase } from '../../../utils/assist';
    import random from '../../../utils/random_str';

    const prefixCls = 'ivu-time-picker-cells';
    const timeParts = ['hours', 'minutes', 'seconds'];

    export default {
        name: 'TimeSpinner',
        mixins: [ Options ],
        emits: ['on-change', 'on-pick-click'],
        inject: ['PickerInstance'],
        props: {
            hours: {
                type: [Number, String],
                default: NaN
            },
            minutes: {
                type: [Number, String],
                default: NaN
            },
            seconds: {
                type: [Number, String],
                default: NaN
            },
            showSeconds: {
                type: Boolean,
                default: true
            },
            steps: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                spinerSteps: [1, 1, 1].map((one, i) => Math.abs(this.steps[i]) || one),
                prefixCls: prefixCls,
                compiled: false,
                focusedColumn: -1, // which column inside the picker
                focusedTime: [0, 0, 0], // the values array into [hh, mm, ss]
                id: random(6)
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-with-seconds`]: this.showSeconds
                    }
                ];
            },
            hoursList () {
                let hours = [];
                const step = this.spinerSteps[0];
                const focusedHour = this.focusedColumn === 0 && this.focusedTime[0];
                const hour_tmpl = {
                    text: 0,
                    selected: false,
                    disabled: false,
                    hide: false
                };

                for (let i = 0; i < 24; i += step) {
                    const hour = deepCopy(hour_tmpl);
                    hour.text = i;
                    hour.focused = i === focusedHour;

                    if (this.disabledHours.length && this.disabledHours.indexOf(i) > -1) {
                        hour.disabled = true;
                        if (this.hideDisabledOptions) hour.hide = true;
                    }
                    if (this.hours === i) hour.selected = true;
                    hours.push(hour);
                }

                return hours;
            },
            minutesList () {
                let minutes = [];
                const step = this.spinerSteps[1];
                const focusedMinute = this.focusedColumn === 1 && this.focusedTime[1];
                const minute_tmpl = {
                    text: 0,
                    selected: false,
                    disabled: false,
                    hide: false
                };

                for (let i = 0; i < 60; i += step) {
                    const minute = deepCopy(minute_tmpl);
                    minute.text = i;
                    minute.focused = i === focusedMinute;

                    if (this.disabledMinutes.length && this.disabledMinutes.indexOf(i) > -1) {
                        minute.disabled = true;
                        if (this.hideDisabledOptions) minute.hide = true;
                    }
                    if (this.minutes === i) minute.selected = true;
                    minutes.push(minute);
                }
                return minutes;
            },
            secondsList () {
                let seconds = [];
                const step = this.spinerSteps[2];
                const focusedMinute = this.focusedColumn === 2 && this.focusedTime[2];
                const second_tmpl = {
                    text: 0,
                    selected: false,
                    disabled: false,
                    hide: false
                };

                for (let i = 0; i < 60; i += step) {
                    const second = deepCopy(second_tmpl);
                    second.text = i;
                    second.focused = i === focusedMinute;

                    if (this.disabledSeconds.length && this.disabledSeconds.indexOf(i) > -1) {
                        second.disabled = true;
                        if (this.hideDisabledOptions) second.hide = true;
                    }
                    if (this.seconds === i) second.selected = true;
                    seconds.push(second);
                }

                return seconds;
            }
        },
        methods: {
            getCellCls (cell) {
                return [
                    `${prefixCls}-cell`,
                    {
                        [`${prefixCls}-cell-selected`]: cell.selected,
                        [`${prefixCls}-cell-focused`]: cell.focused,
                        [`${prefixCls}-cell-disabled`]: cell.disabled

                    }
                ];
            },
            chooseValue(values){
                const changes = timeParts.reduce((obj, part, i) => {
                    const value = values[i];
                    if (this[part] ===  value) return obj;
                    return {
                        ...obj,
                        [part]: value
                    };
                }, {});
                if (Object.keys(changes).length > 0) {
                    this.emitChange(changes);
                }
            },
            handleClick (type, cell) {
                if (cell.disabled) return;
                const data = {[type]: cell.text};
                this.emitChange(data);
            },
            emitChange(changes){
                this.$emit('on-change', changes);
                this.$emit('on-pick-click');
            },
            scroll (type, index) {
                const from = this.$refs[type].scrollTop;
                const to = 24 * this.getScrollIndex(type, index);
                scrollTop(this.$refs[type], from, to, 500);
            },
            getScrollIndex (type, index) {
                const Type = firstUpperCase(type);
                const disabled = this[`disabled${Type}`];
                if (disabled.length && this.hideDisabledOptions) {
                    let _count = 0;
                    disabled.forEach(item => item <= index ? _count++ : '');
                    index -= _count;
                }
                return index;
            },
            updateScroll () {
                nextTick(() => {
                    timeParts.forEach(type => {
                        this.$refs[type].scrollTop = 24 * this[`${type}List`].findIndex(obj => obj.text == this[type]);
                    });
                });
            },
            formatTime (text) {
                return text < 10 ? '0' + text : text;
            },
            updateFocusedTime(col, time) {
                this.focusedColumn = col;
                this.focusedTime = time.slice();
            },
            addTimeSpinner () {
                const root = this.PickerInstance;
                if (!root.timeSpinnerList) root.timeSpinnerList = [];
                root.timeSpinnerList.push({
                    id: this.id,
                    timeSpinner: this
                });
            },
            removeTimeSpinner () {
                const root = this.PickerInstance;
                if (root.timeSpinnerList && root.timeSpinnerList.length) {
                    const index = root.timeSpinnerList.findIndex(item => item.id === this.id);
                    root.timeSpinnerList.splice(index, 1);
                }
            }
        },
        watch: {
            hours (val) {
                if (!this.compiled) return;
                this.scroll('hours', this.hoursList.findIndex(obj => obj.text == val));
            },
            minutes (val) {
                if (!this.compiled) return;
                this.scroll('minutes', this.minutesList.findIndex(obj => obj.text == val));
            },
            seconds (val) {
                if (!this.compiled) return;
                this.scroll('seconds', this.secondsList.findIndex(obj => obj.text == val));
            },
            focusedTime(updated, old){
                timeParts.forEach((part, i) => {
                    if (updated[i] === old[i] || typeof updated[i] === 'undefined') return;
                    const valueIndex = this[`${part}List`].findIndex(obj => obj.text === updated[i]);
                    this.scroll(part, valueIndex);
                });
            }
        },
        mounted () {
            this.addTimeSpinner();
            nextTick(() => this.compiled = true);
        },
        beforeUnmount () {
            this.removeTimeSpinner();
        }
    };
</script>
