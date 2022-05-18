<template>
	<div :class="anchorLinkClasses">
        <a :class="linkTitleClasses" :href="href" :data-scroll-offset="scrollOffset" :data-href="href" @click.prevent="goAnchor" :title="title">{{ title }}</a>
        <slot></slot>
    </div>
</template>
<script>
    import { inject, nextTick } from 'vue';
    import random from '../../utils/random_str';
    import { isClient } from '../../utils/index';

    export default {
        name: 'AnchorLink',
        inject: ['AnchorInstance'],
        props: {
            href: String,
            title: String,
            scrollOffset: {
                type: Number,
                default () {
                    return inject('AnchorInstance').scrollOffset;
                }
            }
        },
        data () {
            return {
                prefix: 'ivu-anchor-link',
                id: random(6)
            };
        },
        computed: {
            anchorLinkClasses () {
                return [
                    this.prefix,
                    this.AnchorInstance.currentLink === this.href ? `${this.prefix}-active` : ''
                ];
            },
            linkTitleClasses () {
                return [
                    `${this.prefix}-title`
                ];
            }
        },
        methods: {
            goAnchor () {
                this.currentLink = this.href;
                this.AnchorInstance.handleHashChange();
                this.AnchorInstance.handleScrollTo();
                this.AnchorInstance.$emit('on-select', this.href);
                const isRoute = this.$router;
                if (isRoute) {
                    this.$router.push(this.href, () => {});
                } else {
                    isClient && (window.location.href = this.href);
                }
            }
        },
        mounted () {
            this.AnchorInstance.addLink(this.id, this);
            nextTick(() => {
                this.AnchorInstance.init();
            });
        },
        beforeUnmount () {
            this.AnchorInstance.removeLink(this.id);
        }
    };
</script>
