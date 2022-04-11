<script>
    import LoginItem from './login-item.js';

    export default {
        name: 'Password',
        mixins: [ LoginItem ],
        data () {
            return {
                className: 'ivu-login-password',
                prefix: 'ios-lock-outline',
                placeholder: '请输入密码',
                type: 'password',
            };
        }
    };
</script>