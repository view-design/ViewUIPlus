import { clearHours } from '../util';
import random from '../../../utils/random_str';

export default {
    name: 'PanelTable',
    emits: ['on-pick', 'on-pick-click', 'on-change-range'],
    inject: ['PickerInstance'],
    props: {
        tableDate: {
            type: Date,
            required: true
        },
        disabledDate: {
            type: Function
        },
        selectionMode: {
            type: String,
            required: true
        },
        modelValue: {
            type: Array,
            required: true
        },
        rangeState: {
            type: Object,
            default: () => ({
                from: null,
                to: null,
                selecting: false
            })
        },
        focusedDate: {
            type: Date,
            required: true,
        }
    },
    data () {
        return {
            id: random(6)
        }
    },
    computed: {
        dates () {
            const { selectionMode, modelValue, rangeState } = this;
            const rangeSelecting = selectionMode === 'range' && rangeState.selecting;
            return rangeSelecting ? [rangeState.from] : modelValue;
        }
    },
    methods: {
        handleClick (cell, e) {
            e.stopPropagation();

            if (cell.disabled || cell.type === 'weekLabel') return;
            const newDate = new Date(clearHours(cell.date));

            this.$emit('on-pick', newDate);
            this.$emit('on-pick-click');
        },
        handleMouseMove (cell) {
            if (!this.rangeState.selecting) return;
            if (cell.disabled) return;
            const newDate = cell.date;
            this.$emit('on-change-range', newDate);
        },
        addPanelTable () {
            const root = this.PickerInstance;
            if (!root.panelTableList) root.panelTableList = [];
            root.panelTableList.push({
                id: this.id,
                panelTable: this
            });
        },
        removePanelTable () {
            const root = this.PickerInstance;
            if (root.panelTableList && root.panelTableList.length) {
                const index = root.panelTableList.findIndex(item => item.id === this.id);
                root.panelTableList.splice(index, 1);
            }
        }
    },
    mounted () {
        this.addPanelTable();
    },
    beforeUnmount () {
        this.removePanelTable();
    }
};
