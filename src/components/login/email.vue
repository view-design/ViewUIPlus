<script>
    import LoginItem from './login-item.js';
    import defaultValidateMessage from './default_validate_message.js';

    export default {
        name: 'Email',
        mixins: [ LoginItem ],
        data () {
            return {
                className: 'ivu-login-mail',
                prefix: 'ios-mail-outline',
                placeholder: '请输入邮箱',
                type: 'email',
            };
        },
        props: {
            rules: {
                type: [Object, Array],
                default () {
                    return [
                        {
                            required: true,
                            message: defaultValidateMessage['Email'],
                            trigger: 'change'
                        },
                        {
                            type: 'email',
                            message: '输入的邮箱格式不正确！',
                            trigger: 'change'
                        }
                    ];
                }
            },
        }
    };
</script>