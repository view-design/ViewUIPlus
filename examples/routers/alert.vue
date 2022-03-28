<template>
    <div>
        <Button @click="show = !show">toggle show</Button>
        <Alert v-if="show" :fade="false">
            An info prompt
            <template #desc>Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="success">
            A success prompt
            <template #desc>Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
        <Alert type="warning">
            A warning prompt
            <template #desc>
            Content of prompt. Content of prompt. Content of prompt.
            </template>
        </Alert>
        <Alert type="error">
            An error prompt
            <template #desc>
                <span>
                Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
                </span>
            </template>
        </Alert>
        <Alert type="info" show-icon closable>消息提示文案</Alert>
        <Alert type="success" show-icon>成功提示文案</Alert>
        <Alert type="warning" show-icon>警告提示文案</Alert>
        <Alert type="error" show-icon>错误提示文案</Alert>
        <Alert show-icon>
            消息提示文案
            <template #desc>消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
        </Alert>
        <Alert type="success" show-icon>
            成功提示文案
            <template #desc>
                <span>成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
            </template>
        </Alert>
        <Alert type="warning" show-icon>
            警告提示文案
            <template #desc>
                警告的提示描述文案警告的提示描述文案警告的提示描述文案
            </template>
        </Alert>
        <Alert type="error" show-icon>
            错误提示文案
            <template #desc>
                <span>自定义错误描述文案。</span>
            </template>
        </Alert>
        <Alert show-icon closable>
            自定义图标
            <template #icon>
                <Icon type="ios-bulb-outline"></Icon>
            </template>
            <template #desc>自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
        </Alert>
        <Alert banner type="warning">Notice: notification contents...</Alert>
        <Alert banner closable type="warning">Notice: notification contents...</Alert>
        <Alert closable>An info prompt</Alert>
        <Alert type="success" show-icon closable>
            A success prompt
            <template #desc>
                <span>Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
            </template>
        </Alert>
        <Alert type="warning" closable :fade="false">
            Custom closing content
            <template #close>
                <span>No longer prompt</span>
            </template>
        </Alert>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                show: true
            }
        }
    }
</script>
