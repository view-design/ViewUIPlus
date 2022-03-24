<template>
    <div>
        <strong>Default Size:</strong>
        <br><br>
        <List header="Header" footer="Footer" border>
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
        </List>
        <br>
        <strong>Small Size:</strong>
        <br><br>
        <List header="Header" footer="Footer" border size="small">
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
        </List>
        <br>
        <strong>Large Size:</strong>
        <br><br>
        <List header="Header" footer="Footer" border size="large">
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
            <ListItem>This is a piece of text.</ListItem>
        </List>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                data1: [
                    'Racing car sprays burning fuel into crowd.',
                    'Japanese princess to wed commoner.',
                    'Australian walks 100km after outback crash.',
                    'Man charged over missing wedding girl.',
                    'Los Angeles battles huge wildfires.',
                ],
                data2: [
                    {
                        title: 'This is a title 1',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is a title 2',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is a title 3',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is a title 4',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    },
                    {
                        title: 'This is a title 5',
                        description: 'This is the description, This is the description, This is the description.',
                        avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'
                    }
                ]
            };
        }
    };
</script>
