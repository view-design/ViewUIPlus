<template>
    <div :class="classes" v-click-outside="handleClose">
        <div :class="[prefixCls + '-rel']" @click="toggleOpen" ref="reference">
            <input type="hidden" :name="name" :value="currentValue">
            <slot>
                <i-input
                    :element-id="elementId"
                    ref="input"
                    :readonly="!filterable"
                    :disabled="itemDisabled"
                    :modelValue="displayInputRender"
                    @on-change="handleInput"
                    :size="size"
                    :placeholder="inputPlaceholder"></i-input>
                <div
                    :class="[prefixCls + '-label']"
                    v-show="filterable && query === ''"
                    @click="handleFocus">{{ displayRender }}</div>
                <Icon type="ios-close-circle" :class="[prefixCls + '-arrow']" v-show="showCloseIcon" @click.stop="clearSelect"></Icon>
                <Icon :type="arrowType" :custom="customArrowType" :size="arrowSize" :class="[prefixCls + '-arrow']"></Icon>
            </slot>
        </div>
        <Drop
            ref="drop"
            :visible="visible"
            :classes="dropdownCls"
            :eventsEnabled="eventsEnabled"
            transition-name="transition-drop"
            :transfer="transfer">
            <div>
                <Caspanel
                    v-show="!filterable || (filterable && query === '')"
                    ref="caspanel"
                    :prefix-cls="prefixCls"
                    :data="data"
                    :disabled="itemDisabled"
                    :change-on-select="changeOnSelect"
                    :trigger="trigger"></Caspanel>
                <div :class="[prefixCls + '-dropdown']" v-show="filterable && query !== '' && querySelections.length">
                    <ul :class="[selectPrefixCls + '-dropdown-list']">
                        <li
                            :class="[selectPrefixCls + '-item', {
                                    [selectPrefixCls + '-item-disabled']: item.disabled
                                }]"
                            v-for="(item, index) in querySelections"
                            :key="index"
                            @click="handleSelectItem(index)" v-html="item.display"></li>
                    </ul>
                </div>
                <ul v-show="(filterable && query !== '' && !querySelections.length) || !data.length" :class="[prefixCls + '-not-found-tip']"><li>{{ localeNotFoundText }}</li></ul>
            </div>
        </Drop>
    </div>
</template>
<script>
    import { getCurrentInstance, nextTick } from 'vue';
    import iInput from '../input/input.vue';
    import Drop from '../select/dropdown.vue';
    import Icon from '../icon/icon.vue';
    import Caspanel from './caspanel.vue';
    import clickOutside from '../../directives/clickoutside';
    import { oneOf, deepCopy } from '../../utils/assist';
    import Locale from '../../mixins/locale';
    import mixinsForm from '../../mixins/form';
    import globalConfig from '../../mixins/globalConfig';

    const prefixCls = 'ivu-cascader';
    const selectPrefixCls = 'ivu-select';

    export default {
        name: 'Cascader',
        mixins: [ Locale, mixinsForm, globalConfig ],
        components: { iInput, Drop, Icon, Caspanel },
        directives: { clickOutside },
        emits: ['on-change', 'on-visible-change', 'update:modelValue'],
        provide () {
            return {
                CascaderInstance: this
            }
        },
        props: {
            data: {
                type: Array,
                default () {
                    return [];
                }
            },
            modelValue: {
                type: Array,
                default () {
                    return [];
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: true
            },
            placeholder: {
                type: String
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.size === '' ? 'default' : global.$VIEWUI.size;
                }
            },
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                },
                default: 'click'
            },
            changeOnSelect: {
                type: Boolean,
                default: false
            },
            renderFormat: {
                type: Function,
                default (label) {
                    return label.join(' / ');
                }
            },
            loadData: {
                type: Function
            },
            filterable: {
                type: Boolean,
                default: false
            },
            notFoundText: {
                type: String
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? false : global.$VIEWUI.transfer;
                }
            },
            name: {
                type: String
            },
            elementId: {
                type: String
            },
            // 4.0.0
            capture: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI ? true : global.$VIEWUI.capture;
                }
            },
            transferClassName: {
                type: String
            },
            // 4.6.0
            eventsEnabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                selectPrefixCls: selectPrefixCls,
                visible: false,
                selected: [],
                tmpSelected: [],
                updatingValue: false,    // to fix set value in changeOnSelect type
                currentValue: this.modelValue || [],
                query: '',
                validDataStr: '',
                isLoadedChildren: false,    // #950
                isValueNull: false, // hack：解决 value 置为 null 时，$emit:input [] 而不是 null
                caspanelList: []
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-show-clear`]: this.showCloseIcon,
                        [`${prefixCls}-size-${this.size}`]: !!this.size,
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-not-found`]: this.filterable && this.query !== '' && !this.querySelections.length
                    }
                ];
            },
            showCloseIcon () {
                return this.currentValue && this.currentValue.length && this.clearable && !this.itemDisabled;
            },
            displayRender () {
                let label = [];
                for (let i = 0; i < this.selected.length; i++) {
                    label.push(this.selected[i].label);
                }

                return this.renderFormat(label, this.selected);
            },
            displayInputRender () {
                return this.filterable ? '' : this.displayRender;
            },
            localePlaceholder () {
                if (this.placeholder === undefined) {
                    return this.t('i.select.placeholder');
                } else {
                    return this.placeholder;
                }
            },
            inputPlaceholder () {
                return this.filterable && this.currentValue.length ? null : this.localePlaceholder;
            },
            localeNotFoundText () {
                if (this.notFoundText === undefined) {
                    return this.t('i.select.noMatch');
                } else {
                    return this.notFoundText;
                }
            },
            querySelections () {
                let selections = [];
                function getSelections (arr, label, value) {
                    const cloneArr = deepCopy(arr);
                    for (let i = 0; i < cloneArr.length; i++) {
                        let item = cloneArr[i];
                        item.__label = label ? label + ' / ' + item.label : item.label;
                        item.__value = value ? value + ',' + item.value : item.value;

                        if (item.children && item.children.length) {
                            getSelections(item.children, item.__label, item.__value);
                            delete item.__label;
                            delete item.__value;
                        } else {
                            selections.push({
                                label: item.__label,
                                value: item.__value,
                                display: item.__label,
                                item: item,
                                disabled: !!item.disabled
                            });
                        }
                    }
                }
                getSelections(this.data);
                selections = selections.filter(item => {
                    return item.label ? item.label.indexOf(this.query) > -1 : false;
                }).map(item => {
                    item.display = item.display.replace(new RegExp(this.query, 'g'), `<span>${this.query}</span>`);
                    return item;
                });
                return selections;
            },
            // 3.4.0, global setting customArrow 有值时，arrow 赋值空
            arrowType () {
                const config = this.globalConfig;
                let type = 'ios-arrow-down';

                if (config) {
                    if (config.cascader.customArrow) {
                        type = '';
                    } else if (config.cascader.arrow) {
                        type = config.cascader.arrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            customArrowType () {
                const config = this.globalConfig;
                let type = '';

                if (config) {
                    if (config.cascader.customArrow) {
                        type = config.cascader.customArrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            arrowSize () {
                const config = this.globalConfig;
                let size = '';

                if (config) {
                    if (config.cascader.arrowSize) {
                        size = config.cascader.arrowSize;
                    }
                }
                return size;
            },
            dropdownCls () {
                return {
                    [prefixCls + '-transfer']: this.transfer,
                    [this.transferClassName]: this.transferClassName
                };
            }
        },
        methods: {
            clearSelect () {
                if (this.itemDisabled) return false;
                const oldVal = JSON.stringify(this.currentValue);
                this.currentValue = this.selected = this.tmpSelected = [];
                this.handleClose();
                this.emitValue(this.currentValue, oldVal);

                this.caspanelList.forEach(item => {
                    item.caspanel.handleOnClear();
                });
            },
            handleClose () {
                this.visible = false;
            },
            toggleOpen () {
                if (this.itemDisabled) return false;
                if (this.visible) {
                    if (!this.filterable) this.handleClose();
                } else {
                    this.onFocus();
                }
            },
            onFocus () {
                this.visible = true;
                if (!this.currentValue.length) {
                    this.caspanelList.forEach(item => {
                        item.caspanel.handleOnClear();
                    });
                }
            },
            updateResult (result) {
                this.tmpSelected = result;
            },
            updateSelected (init = false, changeOnSelectDataChange = false) {
                // #2793 changeOnSelectDataChange used for changeOnSelect when data changed and set value
                if (!this.changeOnSelect || init || changeOnSelectDataChange) {
                    this.caspanelList.forEach(item => {
                        item.caspanel.handleOnFindSelected({
                            value: this.currentValue
                        });
                    });
                }
            },
            emitValue (val, oldVal) {
                if (JSON.stringify(val) !== oldVal) {
                    this.$emit('on-change', this.currentValue, JSON.parse(JSON.stringify(this.selected)));
                    nextTick(() => {
                        this.handleFormItemChange('change', {
                            value: this.currentValue,
                            selected: JSON.parse(JSON.stringify(this.selected))
                        });
                    });
                }
            },
            handleInput (event) {
                this.query = event.target.value;
            },
            handleSelectItem (index) {
                const item = this.querySelections[index];

                if (item.item.disabled) return false;
                this.query = '';
                this.$refs.input.currentValue = '';
                const oldVal = JSON.stringify(this.currentValue);
                this.currentValue = item.value.split(',');
                // use setTimeout for #4786, can not use nextTick, because @on-find-selected use nextTick
                setTimeout(() => {
                    this.emitValue(this.currentValue, oldVal);
                    this.handleClose();
                }, 0);
            },
            handleFocus () {
                this.$refs.input.focus();
            },
            // 排除 loading 后的 data，避免重复触发 updateSelect
            getValidData (data) {
                const cloneData = deepCopy(data);
                function deleteData (item) {
                    const new_item = Object.assign({}, item);
                    if ('loading' in new_item) {
                        delete new_item.loading;
                    }
                    if ('__value' in new_item) {
                        delete new_item.__value;
                    }
                    if ('__label' in new_item) {
                        delete new_item.__label;
                    }
                    if ('children' in new_item && new_item.children.length) {
                        new_item.children = new_item.children.map(i => deleteData(i));
                    }
                    return new_item;
                }

                return cloneData.map(item => deleteData(item));
            },
            handleOnResultChange (params) {
                // lastValue: is click the final val
                // fromInit: is this emit from update value
                const lastValue = params.lastValue;
                const changeOnSelect = params.changeOnSelect;
                const fromInit = params.fromInit;

                if (lastValue || changeOnSelect) {
                    const oldVal = JSON.stringify(this.currentValue);
                    this.selected = this.tmpSelected;

                    let newVal = [];
                    this.selected.forEach((item) => {
                        newVal.push(item.value);
                    });

                    if (!fromInit) {
                        this.updatingValue = true;
                        this.currentValue = newVal;
                        this.emitValue(this.currentValue, oldVal);
                    }
                }
                if (lastValue && !fromInit) {
                    this.handleClose();
                }
            }
        },
        created () {
            this.validDataStr = JSON.stringify(this.getValidData(this.data));
        },
        mounted () {
            this.updateSelected(true);
        },
        watch: {
            visible (val) {
                if (val) {
                    if (this.currentValue.length) {
                        this.updateSelected();
                    }
                    if (this.transfer) {
                        this.$refs.drop.update();
                    }
                    this.$refs.drop.handleOnUpdatePopper();
                } else {
                    if (this.filterable) {
                        this.query = '';
                        this.$refs.input.currentValue = '';
                    }
                    if (this.transfer) {
                        this.$refs.drop.destroy();
                    }
                    this.$refs.drop.handleOnDestroyPopper();
                }
                this.$emit('on-visible-change', val);
            },
            modelValue (val) {
                if (val === null) this.isValueNull = true;
                this.currentValue = val || [];
                if (val === null || !val.length) this.selected = [];
            },
            currentValue () {
                if (this.isValueNull) {
                    this.isValueNull = false;
                    this.$emit('update:modelValue', null);
                } else {
                    this.$emit('update:modelValue', this.currentValue);
                }
                if (this.updatingValue) {
                    this.updatingValue = false;
                    return;
                }
                this.updateSelected(true);
            },
            data: {
                deep: true,
                handler () {
                    const validDataStr = JSON.stringify(this.getValidData(this.data));
                    if (validDataStr !== this.validDataStr) {
                        this.validDataStr = validDataStr;
                        if (!this.isLoadedChildren) {
                            nextTick(() => this.updateSelected(false, this.changeOnSelect));
                        }
                        this.isLoadedChildren = false;
                    }
                }
            }
        }
    };
</script>
