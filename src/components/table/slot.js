import { h } from 'vue';

export default {
    name: 'TableSlot',
    inject: ['TableInstance'],
    props: {
        row: Object,
        index: Number,
        column: {
            type: Object,
            default: null
        },
        display: {
            type: String,
            default: 'block'
        }
    },
    render () {
        return h('div', {
            'class': {
                'ivu-table-cell-slot': true,
                'ivu-table-cell-slot-inline': this.display === 'inline',
                'ivu-table-cell-slot-inline-block': this.display === 'inline-block'
            }
        }, this.TableInstance.$slots[this.column.slot]({
            row: this.row,
            column: this.column,
            index: this.index
        }));
    }
};
