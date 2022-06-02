<script>
    import { h } from 'vue';
    import Base from './base';
    import baseProps from './props';

    export default {
        name: 'Paragraph',
        mixins: [ baseProps ],
        render () {
            return h(Base, {
                ...this.$props,
                component: 'div',
                ...this.commonEvents()
            }, this.commonSlots());
        }
    }
</script>
