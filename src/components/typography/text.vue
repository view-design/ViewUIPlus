<script>
    import { h } from 'vue';
    import Base from './base';
    import baseProps from './props';

    export default {
        name: 'Text',
        mixins: [ baseProps ],
        render () {
            return h(Base, {
                ...this.$props,
                component: 'span',
                ...this.commonEvents()
            }, this.commonSlots());
        }
    }
</script>
