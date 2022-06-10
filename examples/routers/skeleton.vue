<template>
    <Skeleton loading animated avatar></Skeleton>
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
