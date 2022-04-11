<template>
    <footer class="ivu-global-footer">
        <div class="ivu-global-footer-links" v-if="links.length || $slots.links">
            <slot name="links">
                <a
                    v-for="item in links"
                    :href="item.href"
                    :target="item.blankTarget ? '_blank' : '_self'"
                    :key="item.key"
                    :title="item.title"
                >
                    <Icon :type="item.icon" v-if="item.icon" />
                    <Icon :custom="item.customIcon" v-else-if="item.customIcon" />
                    {{ item.title }}</a>
            </slot>
        </div>
        <div class="ivu-global-footer-copyright" v-if="copyright || $slots.copyright">
            <slot name="copyright">{{ copyright }}</slot>
        </div>
    </footer>
</template>
<script>
    import Icon from '../icon/icon.vue';

    export default {
        name: 'GlobalFooter',
        components: { Icon },
        props: {
            links: {
                type: Array,
                default () {
                    return [];
                }
            },
            copyright: {
                type: String
            }
        }
    };
</script>
