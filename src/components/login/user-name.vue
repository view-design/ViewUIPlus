<script>
    import LoginItem from './login-item.js';

    export default {
        name: 'UserName',
        mixins: [ LoginItem ],
        data () {
            return {
                className: 'ivu-login-username',
                prefix: 'ios-contact-outline',
                placeholder: '请输入用户名',
                type: 'text',
                validateMessage: '请输入用户名！'
            };
        }
    };
</script>
