<template>
    <div class="ivu-login">
        <Form ref="form" :model="formValidate" @submit.prevent>
            <slot></slot>
        </Form>
    </div>
</template>
<script>
    import Form from '../form/form.vue';

    export default {
        name: 'Login',
        components: { Form },
        emits: ['on-submit'],
        provide () {
            return {
                LoginInstance: this
            };
        },
        props: {

        },
        data () {
            return {
                formValidate: {

                }
            };
        },
        methods: {
            handleSubmit () {
                this.$refs.form.validate((valid) => {
                    this.$emit('on-submit', valid, JSON.parse(JSON.stringify(this.formValidate)));
                });
            },
            handleValidate (fields, cb) {
                let status = true;

                fields.forEach(field => {
                    this.$refs.form.validateField(field, (valid) => {
                        // 验证不通过
                        if (valid) status = false;
                    });
                });

                cb(status);
            }
        }
    };
</script>
