import { h } from 'vue';

export default {
    name: 'RenderCell',
    props: {
        render: Function
    },
    render () {
        return this.render(h);
    }
};
