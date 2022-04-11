<script>
    import { h } from 'vue';
    import Button from '../button/button.vue';

    export default {
        name: 'Submit',
        inject: ['LoginInstance'],
        props: {

        },
        methods: {
            handleSubmit () {
                this.LoginInstance.handleSubmit();
            }
        },
        render () {
            const defaultProps = {
                size: 'large',
                type: 'primary',
                long: true
            };

            const finalProps = Object.assign(defaultProps, this.$attrs);

            const $button = h(Button, {
                ...finalProps,
                onClick: this.handleSubmit
            }, this.$slots.default || (() => '登录'));

            return h('div', {
                class: 'ivu-login-submit'
            }, [$button]);
        }
    };
</script>
