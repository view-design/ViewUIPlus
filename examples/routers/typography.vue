<template>
    <div>
        <Divider>编辑</Divider>
        {{ value }}
        <Paragraph editable v-model="value" @on-edit-cancel="handleCancel"></Paragraph>

        <Paragraph editable>This is an editable text.</Paragraph>
        <Paragraph editable :edit-config="{ triggerType: 'icon' }">icon: This is an editable text.</Paragraph>
        <Paragraph editable :edit-config="{ triggerType: 'text' }">text: This is an editable text.</Paragraph>
        <Paragraph editable :edit-config="{ triggerType: 'both' }">both: This is an editable text.</Paragraph>
        <Paragraph editable :edit-config="{ editing: true, maxlength: 50, autosize: {minRows: 2,maxRows: 5} }" v-model="value2">This is an editable text.</Paragraph>
        <Title :level="1" editable style="margin: 0;">h1. View Design</Title>
        <Title :level="2" editable style="margin: 0;">h2. View Design</Title>
        <Title :level="3" editable style="margin: 0;">h3. View Design</Title>
        <Title :level="4" editable style="margin: 0;" @on-edit-start="handleClick(1)">h4. View Design</Title>
        <Title :level="5" editable style="margin: 0;">
            h5. View Design
            <template #enterIcon>
            <Icon type="ios-alarm" />
            </template>
        </Title>
        <Title :level="6">Title 6</Title>
        <Divider>复制</Divider>
        <Paragraph copyable strong>Hello <Text code>The</Text> World</Paragraph>
        <Paragraph copyable strong :copy-config="{ showTip: false, tooltips: false }">
            Hello <Text code>The</Text> World
            <template #copyIcon="{ copied }">
                <Icon type="md-albums" v-if="copied" />
                <Icon type="ios-aperture" v-else />
            </template>
        </Paragraph>
        <Divider>省略</Divider>
        Ellipsis：<Switch v-model="ellipsis"></Switch>
        <div>Paragraph:</div>
        <Paragraph :ellipsis="ellipsis">
            这是一大段长文本，非常的长。
        </Paragraph>
        <Paragraph :ellipsis="ellipsis">
            这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。
        </Paragraph>
        <Paragraph :ellipsis="ellipsis">
            HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.HelloWorld.
        </Paragraph>
        <div>Text:</div>
        <Text :ellipsis="ellipsis">
            这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。
        </Text>
        <Paragraph :ellipsis="ellipsis" :ellipsis-config="{ rows: 2, expandable: true, symbol: 'more', tooltip: true }">
            213这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。
        </Paragraph>
        <Text :style="ellipsis ? { width: '100px' } : {}" :ellipsis="ellipsis" :ellipsis-config="{tooltip: true }">
            这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。
        </Text>
        <Text>3213</Text>
        <div>
            <strong>省略后缀</strong>
        </div>
        <Paragraph :ellipsis="ellipsis" :ellipsis-config="{ suffix: 'View Design', rows: 4, expandable: true}">
            这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。这是一大段长文本，非常的长。
        </Paragraph>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                word: 'Hello World',
                blockContent: 'In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.',
                value: '我可以双向绑定数据',
                value2: '2我可以双向绑定数据',
                ellipsis: true
            }
        },
        methods: {
            handleClick() {
                console.log(1);
            },
            handleCancel () {
                console.log(12222)
            }
        }
    }
</script>
