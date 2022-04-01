<template>
    <a
        v-if="to"
        :href="linkUrl"
        :target="target"
        :class="classes"
        @click.exact="handleClickItem($event, false)"
        @click.ctrl="handleClickItem($event, true)"
        @click.meta="handleClickItem($event, true)"
        :style="itemStyle"><slot></slot></a>
    <li v-else :class="classes" @click.stop="handleClickItem" :style="itemStyle"><slot></slot></li>
</template>
<script>
    import { findComponentUpward } from '../../utils/assist';
    import random from '../../utils/random_str';
    import mixin from './mixin';
    import mixinsLink from '../../mixins/link';

    const prefixCls = 'ivu-menu';

    export default {
        name: 'MenuItem',
        mixins: [ mixin, mixinsLink ],
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                active: false,
                id: random(6)
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.active,
                        [`${prefixCls}-item-selected`]: this.active,
                        [`${prefixCls}-item-disabled`]: this.disabled
                    }
                ];
            },
            itemStyle () {
                return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
                    paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
                } : {};
            }
        },
        methods: {
            handleClickItem (event, new_window = false) {
                if (this.disabled) return;

                if (new_window || this.target === '_blank') {
                    // 如果是 new_window，直接新开窗口就行，无需发送状态
                    this.handleCheckClick(event, new_window);
                    let parentMenu = findComponentUpward(this, 'Menu');
                    if (parentMenu) parentMenu.handleEmitSelectEvent(this.name);
                } else {
                    let parent = findComponentUpward(this, 'Submenu');

                    if (parent) {
                        this.SubmenuInstance.handleMenuItemSelect(this.name);
                    } else {
                        this.MenuInstance.handleMenuItemSelect(this.name);
                    }

                    this.handleCheckClick(event, new_window);
                }
            },
            handleUpdateActiveName (name) {
                if (this.name === name) {
                    this.active = true;
                    if (this.SubmenuInstance) this.SubmenuInstance.handleUpdateActiveName(name);
                } else {
                    this.active = false;
                }
            },
            addMenuItem () {
                const root = this.MenuInstance;
                if (!root.menuItemList) root.menuItemList = [];
                root.menuItemList.push({
                    id: this.id,
                    menuitem: this
                });
            },
            removeMenuItem () {
                const root = this.MenuInstance;
                if (root.menuItemList && root.menuItemList.length) {
                    const index = root.menuItemList.findIndex(item => item.id === this.id);
                    root.menuItemList.splice(index, 1);
                }
            }
        },
        mounted () {
            this.addMenuItem();
        },
        beforeUnmount () {
            this.removeMenuItem();
        }
    };
</script>
