<script>
    import { h } from 'vue';

    import mixinsLink from '../../mixins/link';

    function includeArray (list1, list2) {
        let status = false;
        list2.forEach(item => {
            if (list1.includes(item)) status = true;
        });
        return status;
    }

    export default {
        name: 'Auth',
        mixins: [ mixinsLink ],
        emits: ['click'],
        props: {
            // 准入权限
            authority: {
                type: [String, Array, Function, Boolean],
                default: true
            },
            // 我的权限
            access: {
                type: [String, Array]
            },
            // 是否开启阻止模式，开启后，不会返回 noMatch 的 slot，而是阻止组件内的点击，反而给一个 $Message 提示，常用于 Button 操作
            prevent: {
                type: Boolean,
                default: false
            },
            // 在 prevent 开启时有效，点击提示的内容，当开启 customTip 时无效
            message: {
                type: String,
                default: '您没有权限进行此操作'
            },
            // 在 prevent 开启时有效，通过监听 @click 自定义提示
            customTip: {
                type: Boolean,
                default: false
            },
            // 3 种 display 状态
            display: {
                type: String
            }
        },
        computed: {
            isPermission () {
                let state;
                if (typeof this.authority === 'boolean') {
                    state = this.authority;
                } else if (this.authority instanceof Function) {
                    state = this.authority();
                } else {
                    const authority = (typeof this.authority === 'string') ? [this.authority] : this.authority;
                    const access = (typeof this.access === 'string') ? [this.access] : this.access;
                    state = includeArray(authority, access);
                }
                return state;
            },
            options () {
                let style = {};
                if (this.display) style.display = this.display;
                return {
                    class: {
                        'ivu-auth': true,
                        'ivu-auth-permission': this.isPermission,
                        'ivu-auth-no-math': !this.isPermission,
                        'ivu-auth-redirect': !this.isPermission && this.to,
                        'ivu-auth-prevent': this.prevent
                    },
                    style: style
                };
            }
        },
        render () {
            if (this.isPermission) {
                return h('div', this.options, this.$slots.default());
            } else {
                if (this.to) {
                    return h('div', this.options);
                } else {
                    // prevent 模式下，不返回 noMatch
                    if (this.prevent) {
                        return h('div', Object.assign({}, this.options, {
                            onClick: this.handlePreventClick
                        }), [
                            h('div', {
                                class: 'ivu-auth-prevent-no-match'
                            }, this.$slots.default())
                        ]);
                    } else {
                        return h('div', this.options, this.$slots.noMatch());
                    }
                }
            }
        },
        methods: {
            handlePreventClick (event) {
                if (!this.isPermission) {
                    if (!this.customTip) {
                        this.$Message.info({
                            content: this.message,
                            duration: 3
                        });
                    }
                    this.$emit('click', event);
                }
            }
        },
        created () {
            if (!this.isPermission && this.to) {
                this.handleClick(false);
            }
        }
    };
</script>
