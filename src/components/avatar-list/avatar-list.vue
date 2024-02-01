<template>
    <div class="ivu-avatar-list" :class="'ivu-avatar-list-' + size">
        <div class="ivu-avatar-list-item" v-for="(item, index) in currentList" :key="index">
            <Tooltip :content="item.tip" v-if="tooltip && item.tip" :placement="placement" :transfer="transfer">
                <Avatar :src="item.src" :size="size" :shape="shape"></Avatar>
            </Tooltip>
            <Avatar v-else :src="item.src" :size="size" :shape="shape"></Avatar>
        </div>
        <div class="ivu-avatar-list-item ivu-avatar-list-item-excess" v-if="$slots.extra">
            <Avatar :size="size" :shape="shape" :style="excessStyle"><slot name="extra"></slot></Avatar>
        </div>
        <div class="ivu-avatar-list-item ivu-avatar-list-item-excess" v-else-if="list.length > max">
            <Avatar :size="size" :shape="shape" :style="excessStyle"><slot name="excess">+{{ list.length - max }}</slot></Avatar>
        </div>
    </div>
</template>
<script>
    import { getCurrentInstance } from 'vue';
    import Avatar from '../avatar/avatar.vue';
    import Tooltip from '../tooltip/tooltip.vue';

    import { oneOf } from '../../utils/assist';

    export default {
        name: 'AvatarList',
        components: { Avatar, Tooltip },
        props: {
            list: {
                type: Array,
                default () {
                    return [];
                }
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'square']);
                },
                default: 'circle'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default: 'default'
            },
            excessStyle: {
                type: Object,
                default () {
                    return {};
                }
            },
            max: {
                type: Number
            },
            tooltip: {
                type: Boolean,
                default: true
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'top'
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? false : global.$VIEWUI.transfer;
                }
            },
        },
        computed: {
            currentList () {
                const len = this.list.length;
                const max = this.max;
                if (len <= max) {
                    return [...this.list];
                } else {
                    return [...this.list].slice(0, max);
                }
            }
        }
    };
</script>
