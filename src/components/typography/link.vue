<script>
    import { h } from 'vue';
    import Base from './base';
    import baseProps from './props';

    export default {
        name: 'Link',
        mixins: [ baseProps ],
        render () {
            return h(Base, {
                ...this.$props,
                component: 'a',
                ...this.commonEvents()
            }, this.commonSlots());
        }
    }
</script>
