<template>
    <div style="width:400px;margin: 0 auto;">
        <Ellipsis :text="text" :lines="3" tooltip />
    </div>
</template>
<script>
export default {
    data () {
        return {
            text: '史蒂夫·乔布斯（英语：Steve Jobs），是一名美国企业家、营销家和发明家，苹果公司的联合创始人之一，曾任董事长及首席执行官职位，NeXT创办人及首席执行官，也是皮克斯动画的创办人并曾任首席执行官，2006年为华特迪士尼公司的董事会成员。2017年9月苹果发布会举行的地方，以他命名为 Steve Jobs Theater 。'
        }
    }
}
</script>
