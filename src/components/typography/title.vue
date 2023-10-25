<script>
    import { h } from 'vue';
    import Base from './base';
    import baseProps from './props';
    import { oneOf } from '../../utils/assist';

    export default {
        name: 'Title',
        mixins: [ baseProps ],
        props: {
            level: {
                type: Number,
                validator (value) {
                    return oneOf(value, [1, 2, 3, 4, 5, 6]);
                },
                default: 1
            }
        },
        render () {
            return h(Base, {
                ...this.$props,
                component: `h${this.level}`,
                ...this.commonEvents()
            }, this.commonSlots());
        }
    }
</script>
