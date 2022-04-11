<template>
    <GlobalFooter :links="links" :copyright="copyright" />
</template>
<script>
export default {
    data () {
        return {
            links: [
                {
                    key: '帮助',
                    title: '帮助',
                    href: 'https://www.iviewui.com',
                    blankTarget: true
                },
                {
                    key: 'github',
                    icon: 'logo-github',
                    href: 'https://github.com/iview/iview',
                    blankTarget: true
                },
                {
                    key: '条款',
                    title: '条款',
                    href: '',
                    blankTarget: true
                }
            ],
            copyright: 'Copyright © 2019 北京视图更新科技有限公司'
        }
    }
}
</script>
