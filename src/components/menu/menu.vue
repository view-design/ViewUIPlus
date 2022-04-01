<template>
    <ul :class="classes" :style="styles"><slot></slot></ul>
</template>
<script>
    import { nextTick } from 'vue';
    import { oneOf, findComponentsUpward } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-menu';

    export default {
        name: 'Menu',
        mixins: [ Emitter ],
        emits: ['on-select', 'on-open-change'],
        provide () {
            return {
                MenuInstance: this
            }
        },
        props: {
            mode: {
                validator (value) {
                    return oneOf(value, ['horizontal', 'vertical']);
                },
                default: 'vertical'
            },
            theme: {
                validator (value) {
                    return oneOf(value, ['light', 'dark', 'primary']);
                },
                default: 'light'
            },
            activeName: {
                type: [String, Number]
            },
            openNames: {
                type: Array,
                default () {
                    return [];
                }
            },
            accordion: {
                type: Boolean,
                default: false
            },
            width: {
                type: String,
                default: '240px'
            }
        },
        data () {
            return {
                currentActiveName: this.activeName,
                openedNames: [],
                submenuList: [],
                menuItemList: []
            };
        },
        computed: {
            classes () {
                let theme = this.theme;
                if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';

                return [
                    `${prefixCls}`,
                    `${prefixCls}-${theme}`,
                    {
                        [`${prefixCls}-${this.mode}`]: this.mode
                    }
                ];
            },
            styles () {
                let style = {};

                if (this.mode === 'vertical') style.width = this.width;

                return style;
            }
        },
        methods: {
            updateActiveName () {
                if (this.currentActiveName === undefined) {
                    this.currentActiveName = -1;
                }
                this.submenuList.map(item => item.submenu).forEach(item => {
                    item.handleUpdateActiveName(false);
                });
                this.menuItemList.map(item => item.menuitem).forEach(item => {
                    item.handleUpdateActiveName(this.currentActiveName);
                });
                // this.broadcast('Submenu', 'on-update-active-name', false); // todo
                // this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName); // todo
            },
            updateOpenKeys (name) {
                // todo
                let names = [...this.openedNames];
                const index = names.indexOf(name);
                const submenuList = this.submenuList.map(item => item.submenu);

                if (this.accordion) submenuList.forEach(item => {
                    item.opened = false;
                });
                if (index >= 0) {
                    let currentSubmenu = null;
                    submenuList.forEach(item => {
                        if (item.name === name) {
                            currentSubmenu = item;
                            item.opened = false;
                        }
                    });
                    findComponentsUpward(currentSubmenu, 'Submenu').forEach(item => {
                        item.opened = true;
                    });
                    currentSubmenu.childSubmenuList.map(item => item.submenu).forEach(item => {
                        item.opened = false;
                    });
                } else {
                    if (this.accordion) {
                        let currentSubmenu = null;
                        submenuList.forEach(item => {
                            if (item.name === name) {
                                currentSubmenu = item;
                                item.opened = true;
                            }
                        });
                        findComponentsUpward(currentSubmenu, 'Submenu').forEach(item => {
                            item.opened = true;
                        });
                    } else {
                        const submenuList = this.submenuList.map(item => item.submenu);
                        submenuList.forEach(item => {
                            if (item.name === name) item.opened = true;
                        });
                    }
                }
                let openedNames = submenuList.filter(item => item.opened).map(item => item.name);
                this.openedNames = [...openedNames];
                this.$emit('on-open-change', openedNames);
            },
            updateOpened () {
                const items = (this.submenuList || []).map(item => item.submenu);

                if (items.length) {
                    items.forEach(item => {
                        if (this.openedNames.indexOf(item.name) > -1) item.opened = true;
                        else item.opened = false;
                    });
                }
            },
            handleEmitSelectEvent (name) {
                this.$emit('on-select', name);
            },
            handleMenuItemSelect (name) {
                this.currentActiveName = name;
                this.$emit('on-select', name);
            }
        },
        mounted () {
            this.openedNames = [...this.openNames];
            this.updateOpened();
            nextTick(() => this.updateActiveName());
        },
        watch: {
            openNames (names) {
                this.openedNames = names;
            },
            activeName (val) {
                this.currentActiveName = val;
            },
            currentActiveName () {
                this.updateActiveName();
            }
        }
    };
</script>
