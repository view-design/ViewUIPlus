import { h } from 'vue';

export default {
    name: 'TableRenderHeader',
    props: {
        render: Function,
        column: Object,
        index: Number
    },
    render () {
        const params = {
            column: this.column,
            index: this.index
        };
        return this.render(h, params);
    }
};
