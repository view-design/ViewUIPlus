<template>
    <li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
        <div :class="[prefixCls + '-submenu-title']" ref="reference" @click.stop="handleClick" :style="titleStyle">
            <slot name="title"></slot>
            <Icon :type="arrowType" :custom="customArrowType" :size="arrowSize" :class="[prefixCls + '-submenu-title-icon']" />
        </div>
        <collapse-transition v-if="mode === 'vertical'" :ready="menu.ready">
            <ul :class="[prefixCls]" v-show="opened"><slot></slot></ul>
        </collapse-transition>
        <Drop
            v-if="mode === 'horizontal'"
            ref="drop"
            :visible="opened"
            placement="bottom"
            transition-name="slide-up"
            :styles="dropStyle"><ul :class="[prefixCls + '-drop-list']"><slot></slot></ul>
        </Drop>
    </li>
</template>
<script>
    import Drop from '../select/dropdown.vue';
    import Icon from '../icon/icon.vue';
    import CollapseTransition from '../base/collapse-transition.vue';
    import { getStyle, findComponentUpward } from '../../utils/assist';
    import random from '../../utils/random_str';
    import mixin from './mixin';
    import globalConfig from '../../mixins/globalConfig';

    const prefixCls = 'ivu-menu';

    export default {
        name: 'Submenu',
        mixins: [ mixin, globalConfig ],
        components: { Icon, Drop, CollapseTransition },
        provide () {
            return {
                SubmenuInstance: this
            }
        },
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                active: false,
                opened: false,
                dropWidth: parseFloat(getStyle(this.$el, 'width')),
                id: random(6),
                childSubmenuList: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}-submenu`,
                    {
                        [`${prefixCls}-item-active`]: this.active && !this.hasParentSubmenu,
                        [`${prefixCls}-opened`]: this.opened,
                        [`${prefixCls}-submenu-disabled`]: this.disabled,
                        [`${prefixCls}-submenu-has-parent-submenu`]: this.hasParentSubmenu,
                        [`${prefixCls}-child-item-active`]: this.active
                    }
                ];
            },
            accordion () {
                return this.menu.accordion;
            },
            dropStyle () {
                let style = {};

                if (this.dropWidth) style.minWidth = `${this.dropWidth}px`;
                return style;
            },
            titleStyle () {
                return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
                    paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
                } : {};
            },
            // 3.4.0, global setting customArrow 有值时，arrow 赋值空
            arrowType () {
                const config = this.globalConfig;
                let type = 'ios-arrow-down';

                if (config) {
                    if (config.menu.customArrow) {
                        type = '';
                    } else if (config.menu.arrow) {
                        type = config.menu.arrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            customArrowType () {
                const config = this.globalConfig;
                let type = '';

                if (config) {
                    if (config.menu.customArrow) {
                        type = config.menu.customArrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            arrowSize () {
                const config = this.globalConfig;
                let size = '';

                if (config) {
                    if (config.menu.arrowSize) {
                        size = config.menu.arrowSize;
                    }
                }
                return size;
            }
        },
        methods: {
            handleMouseenter () {
                if (this.disabled) return;
                if (this.mode === 'vertical') return;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.menu.updateOpenKeys(this.name);
                    this.opened = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.disabled) return;
                if (this.mode === 'vertical') return;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.menu.updateOpenKeys(this.name);
                    this.opened = false;
                }, 150);
            },
            handleClick () {
                if (this.disabled) return;
                if (this.mode === 'horizontal') return;
                const opened = this.opened;

                this.opened = !opened;
                this.menu.updateOpenKeys(this.name);
            },
            addSubmenu () {
                const root = this.MenuInstance;
                if (!root.submenuList) root.submenuList = [];
                root.submenuList.push({
                    id: this.id,
                    submenu: this
                });

                const parentSubmenu = findComponentUpward(this, 'Submenu');
                if (parentSubmenu) {
                    if (!parentSubmenu.childSubmenuList) parentSubmenu.childSubmenuList = [];
                    parentSubmenu.childSubmenuList.push({
                        id: this.id,
                        submenu: this
                    });
                }
            },
            removeSubmenu () {
                const root = this.MenuInstance;
                if (root.submenuList && root.submenuList.length) {
                    const index = root.submenuList.findIndex(item => item.id === this.id);
                    root.submenuList.splice(index, 1);
                }

                const parentSubmenu = findComponentUpward(this, 'Submenu');
                if (parentSubmenu) {
                    if (parentSubmenu.childSubmenuList && parentSubmenu.childSubmenuList.length) {
                        const index = parentSubmenu.childSubmenuList.findIndex(item => item.id === this.id);
                        parentSubmenu.childSubmenuList.splice(index, 1);
                    }
                }
            },
            handleMenuItemSelect (name) {
                if (this.mode === 'horizontal') this.opened = false;
                this.MenuInstance.handleMenuItemSelect(name)
            },
            handleUpdateActiveName (status) {
                if (findComponentUpward(this, 'Submenu')) this.SubmenuInstance.handleUpdateActiveName(status);

                if (this.childSubmenuList && this.childSubmenuList.length) {
                    this.childSubmenuList.map(item => item.submenu).forEach(item => {
                        item.active = false;
                    });
                }
                this.active = status;
            }
        },
        watch: {
            mode (val) {
                if (val === 'horizontal') {
                    this.$refs.drop.update();
                }
            },
            opened (val) {
                if (this.mode === 'vertical') return;
                if (val) {
                    // set drop a width to fixed when menu has fixed position
                    this.dropWidth = parseFloat(getStyle(this.$el, 'width'));
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
            }
        },
        mounted () {
            this.addSubmenu();
        },
        beforeUnmount () {
            this.removeSubmenu();
        }
    };
</script>
