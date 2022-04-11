<template>
    <table class="ivu-calendar-table ivu-calendar-table-year" cellspacing="0" cellpadding="0">
        <tbody>
            <tr v-for="(item, index) in chunkMonths" :key="index">
                <td v-for="month in item" :key="month.text" @click="handleCellClick(month)" @contextmenu.prevent="handleCellContextmenu(month)">
                    <div
                        class="ivu-calendar-table-day"
                        :class="{ 'ivu-calendar-table-day-current': month.text === currentMonth }"
                        :style="dayStyles"
                        @click="handleClickDate(month.text)"
                    >
                        <div class="ivu-calendar-table-day-title">{{ month.month }}</div>
                        <div class="ivu-calendar-table-day-slot">
                            <slot :month="new Date(month.month)" :data="{ type: month.type + '-year', month: month.text, selected: month.text === currentMonth }" name="year"></slot>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    import dayjs from 'dayjs';
    import chunk from 'lodash.chunk';
    import events from './events';

    export default {
        name: 'CalendarYear',
        mixins: [ events ],
        inject: ['CalendarInstance'],
        props: {
            date: Object
        },
        data () {
            return {

            };
        },
        computed: {
            months () {
                let months = [];
                const firstMonth = dayjs(this.date.format('YYYY-01-01'));

                for (let i = 0; i < 12; i++) {
                    const day = firstMonth.add(i, 'month');
                    months.push({
                        text: day.format('YYYY-MM'),
                        month: this.CalendarInstance.locale.months[i],
                        type: 'current'
                    });
                }
                return months;
            },
            chunkMonths () {
                return chunk(this.months, 3);
            },
            dayStyles () {
                let style = {};

                if (this.CalendarInstance.cellHeight !== 100) {
                    style.height = `${this.CalendarInstance.cellHeight}px`;
                }

                return style;
            },
            currentMonth () {
                return this.date.format('YYYY-MM');
            }
        },
        methods: {
            handleClickDate (date) {
                this.CalendarInstance.handleChangeDate(dayjs(date));
            }
        }
    };
</script>
