<script>
    import LoginItem from './login-item.js';
    import defaultValidateMessage from './default_validate_message.js';

    export default {
        name: 'Mobile',
        mixins: [ LoginItem ],
        data () {
            return {
                className: 'ivu-login-mobile',
                prefix: 'ios-phone-portrait',
                placeholder: '请输入手机号码',
                type: 'text',
            };
        },
        props: {
            rules: {
                type: [Object, Array],
                default () {
                    return [
                        {
                            required: true,
                            message: defaultValidateMessage['Mobile'],
                            trigger: 'change'
                        },
                        {
                            pattern: /^1\d{10}$/,
                            message: '输入的手机号码格式不正确！',
                            trigger: 'change'
                        }
                    ];
                }
            },
        }
    };
</script>