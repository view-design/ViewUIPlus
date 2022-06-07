<template>
    <Skeleton :loading="loading" animated>
        <template #template>
            <Row style="padding:12px 0">
                <Col flex="1">
                    <Row>
                        <Col flex="0">
                            <SkeletonItem style="margin-right:20px"/>
                        </Col>
                        <Col flex="1">
                            <SkeletonItem block type="rect" width="20%" height="16px"/>
                            <SkeletonItem block type="rect" width="50%" height="16px" style="margin:22px 0 0 0"/>
                        </Col>
                    </Row>
                    <SkeletonItem block type="rect" width="80%" height="16px" style="margin:22px 0 0 0"/>
                    <SkeletonItem type="rect" width="8%" height="16px" style="margin:22px 20px 0 0"/>
                    <SkeletonItem type="rect" width="8%" height="16px" style="margin:22px 20px 0 0"/>
                    <SkeletonItem type="rect" width="8%" height="16px"/>
                </Col>
                <Col flex="0">
                    <SkeletonItem type="rect" width="280px" height="140px"/>
                </Col>
            </Row>
        </template>
        <template #default>
            <List item-layout="vertical">
                <ListItem v-for="item in data" :key="item.title">
                    <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                    {{ item.content }}
                    <template #action>
                        <li><Icon type="ios-star-outline" /> 123</li>
                        <li><Icon type="ios-thumbs-up-outline" /> 234</li>
                        <li><Icon type="ios-chatbubbles-outline" /> 345</li>
                    </template>
                    <template #extra>
                        <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
                    </template>
                </ListItem>
            </List>
        </template>
    </Skeleton>
    <span>loading: </span>
    <Switch v-model="loading"/>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
            data: [
                {
                    title: 'This is title 1',
                    description: 'This is description, this is description, this is description.',
                    avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                    content: 'This is the content, this is the content, this is the content, this is the content.'
                }
            ]
        }
    }
}
</script>
