<template>
    <Dropdown :transfer="true" transfer-class-name="aa" trigger="hover">
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <template #list>
            <DropdownMenu>
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem disabled>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>
<!--    <Dropdown style="margin-left: 20px">-->
<!--        <Button type="primary">-->
<!--            下拉菜单-->
<!--            <Icon type="ios-arrow-down"></Icon>-->
<!--        </Button>-->
<!--        <template #list>-->
<!--            <DropdownMenu>-->
<!--                <DropdownItem>驴打滚</DropdownItem>-->
<!--                <DropdownItem>炸酱面</DropdownItem>-->
<!--                <DropdownItem disabled>豆汁儿</DropdownItem>-->
<!--                <DropdownItem>冰糖葫芦</DropdownItem>-->
<!--                <DropdownItem divided>北京烤鸭</DropdownItem>-->
<!--            </DropdownMenu>-->
<!--        </template>-->
<!--    </Dropdown>-->
</template>
<script>
export default {

}
</script>
