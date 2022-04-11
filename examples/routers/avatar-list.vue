<template>
    <AvatarList :list="list" :max="3" :excess-style="excessStyle" />
</template>
<script>
export default {
    data () {
        return {
            excessStyle: {
                color: '#f56a00',
                backgroundColor: '#fde3cf'
            },
            list: [
                {
                    src: 'https://dev-file.iviewui.com/BbnuuEiM0QXNPHVCvb3E2AFrawIjCkqW/avatar',
                    tip: '史蒂夫·乔布斯'
                },
                {
                    src: 'https://dev-file.iviewui.com/zhj85zgAfEjChCNIKT1LQENUIOyOYCaX/avatar',
                    tip: '斯蒂夫·沃兹尼亚克'
                },
                {
                    src: 'https://dev-file.iviewui.com/TkH54UozsINlex15TAMI00GElsfsKSiC/avatar',
                    tip: '乔纳森·伊夫'
                },
                {
                    src: 'https://dev-file.iviewui.com/xrzbBR99F6tYsDJPLNrvwhllowbuL7Gw/avatar',
                    tip: '蒂姆·库克'
                },
                {
                    src: 'https://dev-file.iviewui.com/bgrngoUb9A6UQ2kAwBFtnSNzhrh2qj1O/avatar',
                    tip: '比尔·费尔南德斯'
                }
            ]
        }
    }
}
</script>
