<template>
    <div class="ivu-footer-toolbar">
        <div class="ivu-footer-toolbar-left" v-if="extra || $slots.extra"><slot name="extra">{{ extra }}</slot></div>
        <div class="ivu-footer-toolbar-right"><slot></slot></div>
    </div>
</template>
<script>
    export default {
        name: 'FooterToolbar',
        props: {
            // 额外信息，向左对齐
            extra: {
                type: String
            }
        }
    };
</script>