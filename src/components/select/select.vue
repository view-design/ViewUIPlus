<template>
    <div
        :class="classes"
        v-click-outside:[capture]="onClickOutside"
        v-click-outside:[capture].mousedown="onClickOutside"
        v-click-outside:[capture].touchstart="onClickOutside"
    >
        <div
            ref="reference"

            :class="selectionCls"
            :tabindex="selectTabindex"

            @blur="toggleHeaderFocus"
            @focus="toggleHeaderFocus"

            @click="toggleMenu"
            @keydown.esc="handleKeydown"
            @keydown.enter="handleKeydown"
            @keydown.up.prevent="handleKeydown"
            @keydown.down.prevent="handleKeydown"
            @keydown.tab="handleKeydown"
            @keydown.delete="handleKeydown"

            @mouseenter="hasMouseHoverHead = true"
            @mouseleave="hasMouseHoverHead = false"
        >
            <slot name="input">
                <input type="hidden" :name="name" :value="publicValue">
                <select-head
                    ref="selectHead"
                    :filterable="filterable"
                    :multiple="multiple"
                    :values="values"
                    :clearable="canBeCleared"
                    :prefix="prefix"
                    :disabled="itemDisabled"
                    :remote="remote"
                    :input-element-id="elementId"
                    :initial-label="initialLabel"
                    :placeholder="placeholder"
                    :query-prop="query"
                    :max-tag-count="maxTagCount"
                    :max-tag-placeholder="maxTagPlaceholder"
                    :allow-create="allowCreate"
                    :show-create-item="showCreateItem"

                    @on-query-change="onQueryChange"
                    @on-input-focus="isFocused = true"
                    @on-input-blur="isFocused = false"
                    @on-clear="clearSingleSelect"
                    @on-enter="handleCreateItem"
                >
                    <template #prefix>
                        <slot name="prefix"></slot>
                    </template>
                </select-head>
            </slot>
        </div>
        <Drop
            ref="dropdown"
            :classes="dropdownCls"
            :visible="dropVisible"
            :placement="placement"
            :eventsEnabled="eventsEnabled"
            :transfer="transfer"
            transition-name="transition-drop"
        >
            <ul v-show="showNotFoundLabel && !allowCreate" :class="[prefixCls + '-not-found']"><li>{{ localeNotFoundText }}</li></ul>

            <ul
                v-if="(!remote) || (remote && !loading)"
                :class="prefixCls + '-dropdown-list'"
            >
                <li :class="prefixCls + '-item'" v-if="showCreateItem" @click="handleCreateItem">
                    {{ query }}
                    <Icon type="md-return-left" :class="prefixCls + '-item-enter'" />
                </li>
                <slot />
            </ul>

            <ul :class="prefixCls + '-dropdown-list'" v-else>
                <li :class="prefixCls + '-item'" v-if="showCreateItem" @click="handleCreateItem">
                    {{ query }}
                    <Icon type="md-return-left" :class="prefixCls + '-item-enter'" />
                </li>
            </ul>

            <ul v-show="loading" :class="[prefixCls + '-loading']">{{ localeLoadingText }}</ul>
        </Drop>
    </div>
</template>
<script>
    import { getCurrentInstance, nextTick } from 'vue';

    import Drop from './dropdown.vue';
    import Icon from '../icon';
    import SelectHead from './select-head.vue';

    import { directive as clickOutside } from '../../directives/v-click-outside-x';
    import { oneOf } from '../../utils/assist';
    import mixinsForm from '../../mixins/form';
    import Locale from '../../mixins/locale';
    import { isClient } from '../../utils/index';

    const prefixCls = 'ivu-select';

    const checkValuesNotEqual = (value,publicValue,values) => {
        const strValue = JSON.stringify(value);
        const strPublic = JSON.stringify(publicValue);
        const strValues = JSON.stringify(values.map( item => {
            return item.value;
        }));
        return strValue !== strPublic || strValue !== strValues || strValues !== strPublic;
    };


    const ANIMATION_TIMEOUT = 300;

    export default {
        name: 'iSelect',
        mixins: [ Locale, mixinsForm ],
        components: { Drop, SelectHead, Icon },
        directives: { clickOutside },
        emits: ['on-set-default-options', 'on-clear', 'on-clickoutside', 'on-select', 'on-create', 'on-change', 'on-query-change', 'on-open-change', 'update:modelValue'],
        provide () {
            return {
                SelectInstance: this
            }
        },
        props: {
            modelValue: {
                type: [String, Number, Array],
                default: ''
            },
            // 使用时，也得设置 value 才行
            label: {
                type: [String, Number, Array],
                default: ''
            },
            // 4.4.0
            defaultLabel: {
                type: [String, Number, Array],
                default: ''
            },
            multiple: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            clearable: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String
            },
            filterable: {
                type: Boolean,
                default: false
            },
            filterMethod: {
                type: Function
            },
            remoteMethod: {
                type: Function
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingText: {
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
            labelInValue: {
                type: Boolean,
                default: false
            },
            notFoundText: {
                type: String
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'bottom', 'top-start', 'bottom-start', 'top-end', 'bottom-end']);
                },
                default: 'bottom-start'
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? false : global.$VIEWUI.transfer;
                }
            },
            // Use for AutoComplete
            autoComplete: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            elementId: {
                type: String
            },
            transferClassName: {
                type: String
            },
            // 3.4.0
            prefix: {
                type: String
            },
            // 3.4.0
            maxTagCount: {
                type: Number
            },
            // 3.4.0
            maxTagPlaceholder: {
                type: Function
            },
            // 4.0.0
            allowCreate: {
                type: Boolean,
                default: false
            },
            // 4.0.0
            capture: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI ? true : global.$VIEWUI.capture;
                }
            },
            // 4.2.0
            // 搜索时，只按 label 进行搜索
            filterByLabel: {
                type: Boolean,
                default: false
            },
            // 4.6.0
            eventsEnabled: {
                type: Boolean,
                default: false
            },
            hideNotFound: {
                type: Boolean,
                default: false
            }
        },
        mounted () {
            // set the initial values if there are any
            if (!this.remote && this.slotOptions.length > 0){
                this.values = this.getInitialValue().map(value => {
                    if (typeof value !== 'number' && !value) return null;
                    return this.getOptionData(value);
                }).filter(Boolean);
            }

            this.checkUpdateStatus();
            // remote search, set default-label
            if (this.remote && this.modelValue && this.defaultLabel) {
                if (!this.multiple) {
                    this.query = this.defaultLabel;
                    if (this.modelValue && this.defaultLabel) {
                        this.values.push({
                            label: this.defaultLabel,
                            value: this.modelValue
                        })
                    }
                } else if (this.multiple && (this.defaultLabel instanceof Array) && this.modelValue.length === this.defaultLabel.length) {
                    const values = this.modelValue.map((item, index) => {
                        return {
                            value: item,
                            label: this.defaultLabel[index]
                        };
                    });
                    // 废弃 this.$emit('on-set-default-options', JSON.parse(JSON.stringify(values)));
                    setTimeout(() => {
                        this.values = values;
                    });
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                values: [],
                dropDownWidth: 0,
                visible: false,
                focusIndex: -1,
                isFocused: false,
                query: '',
                initialLabel: this.label,
                hasMouseHoverHead: false,
                slotOptions: [],
                caretPosition: -1,
                lastRemoteQuery: '',
                unchangedQuery: true,
                hasExpectedValue: false,
                isTyping: false,  // #728
                preventRemoteCall: false,
                filterQueryChange: false,  // #4273
                slotOptionsMap: new Map(),
                // fix Option hide, the model value cannot selected
                isLocking: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-visible`]: this.visible,
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-multiple`]: this.multiple,
                        [`${prefixCls}-single`]: !this.multiple,
                        // [`${prefixCls}-show-clear`]: this.showCloseIcon, // 好像没用
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            dropdownCls () {
                return {
                    [prefixCls + '-dropdown-transfer']: this.transfer,
                    [prefixCls + '-multiple']: this.multiple && this.transfer,
                    ['ivu-auto-complete']: this.autoComplete,
                    [this.transferClassName]: this.transferClassName
                };
            },
            selectionCls () {
                return {
                    [`${prefixCls}-selection`]: !this.autoComplete,
                    [`${prefixCls}-selection-focused`]: this.isFocused
                };
            },
            localeNotFoundText () {
                if (typeof this.notFoundText === 'undefined') {
                    return this.t('i.select.noMatch');
                } else {
                    return this.notFoundText;
                }
            },
            localeLoadingText () {
                if (typeof this.loadingText === 'undefined') {
                    return this.t('i.select.loading');
                } else {
                    return this.loadingText;
                }
            },
            showCreateItem () {
                let state = false;
                const {allowCreate, query, slotOptions} = this;
                if (allowCreate && query !== '') {
                    state = true;
                    const findSlotItem = (slotOptions || []).find(item => item.proxy && item.proxy.showLabel === query)
                    if (findSlotItem) state = false;
                }
                return  state;
            },
            transitionName () {
                return this.placement === 'bottom' ? 'slide-up' : 'slide-down';
            },
            dropVisible () {
                let status = true;
                const noOptions = this.slotOptions.length === 0;
                if (!this.loading && this.remote && this.query === '' && noOptions) status = false;

                if (this.autoComplete && noOptions) status = false;

                return this.visible && status;
            },
            showNotFoundLabel () {
                const {loading, remote, slotOptions, hideNotFound} = this;
                const options = slotOptions || [];
                const filterOptions = options.find(item => item.proxy.isShow);
                return (options.length === 0 || !filterOptions) && (!remote || (remote && !loading)) && !hideNotFound;
            },
            publicValue(){
                return this.multiple ? this.values.map(option => option.value) : (this.values[0] || {}).value;
            },
            canBeCleared () {
                const uiStateMatch = this.hasMouseHoverHead;
                const qualifiesForClear = !this.multiple && !this.itemDisabled && this.clearable;
                return uiStateMatch && qualifiesForClear && this.reset; // we return a function
            },
            selectTabindex () {
                return this.itemDisabled || this.filterable ? -1 : 0;
            },
            remote () {
                return typeof this.remoteMethod === 'function';
            }
        },
        methods: {
            setQuery(query){ // PUBLIC API
                if (query) {
                    this.onQueryChange(query);
                    return;
                }
                if (query === null) {
                    this.onQueryChange('');
                    this.values = [];
                    // #5620,修复清空搜索关键词后，重新搜索相同的关键词没有触发远程搜索
                    this.lastRemoteQuery = '';
                }
            },
            clearSingleSelect(){ // PUBLIC API
                // fix #446
                if (!this.multiple) this.$emit('update:modelValue', '');
                this.$emit('on-clear');
                this.hideMenu();
                if (this.clearable) this.reset();
            },
            getOptionData(value){
                const optionItem = this.slotOptions.find(({props}) => props.value === value);
                if (!optionItem) return null;
                const { optionLabel, disabled } = optionItem.proxy || {};
                return {
                    value,
                    label: optionLabel,
                    disabled
                };
            },
            getInitialValue(){
                const {multiple, remote, modelValue} = this;
                let initialValue = Array.isArray(modelValue) ? modelValue : [modelValue];
                if (!multiple && (typeof initialValue[0] === 'undefined' || (String(initialValue[0]).trim() === '' && !Number.isFinite(initialValue[0])))) initialValue = [];
                if (remote && !multiple && modelValue) {
                    const data = this.getOptionData(modelValue);
                    this.query = data ? data.label : String(modelValue);
                }
                return initialValue.filter((item) => {
                    return Boolean(item) || item === 0;
                });
            },

            validateOption({children, elm, propsData}){
                const value = propsData.value;
                const label = propsData.label || '';
                const textContent = (elm && elm.textContent) || (children || []).reduce((str, node) => {
                    const nodeText = node.elm ? node.elm.textContent : node.text;
                    return `${str} ${nodeText}`;
                }, '') || '';
                const stringValues = this.filterByLabel ? [label].toString() : [value, label, textContent].toString();
                const query = this.query.toLowerCase().trim();
                return stringValues.toLowerCase().includes(query);
            },

            toggleMenu (e, force) {
                if (this.itemDisabled) {
                    return false;
                }

                this.visible = typeof force !== 'undefined' ? force : !this.visible;
                if (this.visible){
                    this.dropDownWidth = this.$el.getBoundingClientRect().width;
                    this.$refs.dropdown.handleOnUpdatePopper();
                }
            },
            hideMenu () {
                this.toggleMenu(null, false);
                // fix #728
                this.isTyping = false;
                setTimeout(() => this.unchangedQuery = true, ANIMATION_TIMEOUT);
            },
            onClickOutside(event){
                if (this.visible) {
                    if (event.type === 'mousedown') {
                        event.preventDefault();
                        return;
                    }

                    if (this.transfer) {
                        const $el = this.$refs.dropdown.$refs.drop;
                        if ($el === event.target || $el.contains(event.target)) {
                            return;
                        }
                    }
                    if (this.filterable) {
                        const input = this.$el.querySelector('input[type="text"]');
                        this.caretPosition = input.selectionStart;
                        nextTick(() => {
                            const caretPosition = this.caretPosition === -1 ? input.value.length : this.caretPosition;
                            input.setSelectionRange(caretPosition, caretPosition);
                        });
                    }

                    if (!this.autoComplete) event.stopPropagation();
                    event.preventDefault();
                    this.hideMenu();
                    this.isFocused = true;
                    this.$emit('on-clickoutside', event);
                } else {
                    this.caretPosition = -1;
                    this.isFocused = false;
                }
            },
            reset(){
                this.query = '';
                this.focusIndex = -1;
                this.unchangedQuery = true;
                this.values = [];
                this.filterQueryChange = false;
            },
            handleKeydown (e) {
                const key = e.key || e.code;
                const keyCode = e.keyCode || e.which;
                if (key === 'Backspace' || keyCode===8){
                    return; // so we don't call preventDefault
                }
                if (this.visible) {
                    e.preventDefault();
                    if (key === 'Tab'){
                        e.stopPropagation();
                    }

                    // Esc slide-up
                    if (key === 'Escape') {
                        e.stopPropagation();
                        this.hideMenu();
                    }
                    // next
                    if (key === 'ArrowUp') {
                        this.navigateOptions(-1);
                    }
                    // prev
                    if (key === 'ArrowDown') {
                        this.navigateOptions(1);
                    }
                    // enter
                    if (key === 'Enter') {
                        if (this.focusIndex === -1) return this.hideMenu();
                        const optionComponent = this.slotOptions[this.focusIndex];

                        // fix a script error when searching
                        if (optionComponent) {
                            const option = this.getOptionData(optionComponent.props.value);
                            this.onOptionClick(option);
                        } else {
                            this.hideMenu();
                        }
                    }
                } else {
                    const keysThatCanOpenSelect = ['ArrowUp', 'ArrowDown'];
                    if (keysThatCanOpenSelect.includes(e.key)) this.toggleMenu(null, true);
                }


            },
            navigateOptions(direction){
                const slotOptions = this.slotOptions;
                const optionsLength = slotOptions.length - 1;
                if (optionsLength < 0) return;
                let index = this.focusIndex + direction;
                if (index < 0) index = optionsLength;
                if (index > optionsLength) index = 0;

                // find nearest option in case of disabled options in between
                let nearestActiveOption;
                // find first show option in case of set init focusIndex
                let firseIndex = null
                if (direction > 0){
                    nearestActiveOption = -1;
                    for (let i = 0; i < slotOptions.length; i++){
                        const { proxy } = slotOptions[i];
                        const optionIsActive = !proxy.disabled;
                        if (optionIsActive) nearestActiveOption = i;
                        if (proxy.isShow && firseIndex === null) {
                             firseIndex = i;
                        } else if (!proxy.isShow) {
                            nearestActiveOption = i;
                            continue
                        }
                        if (nearestActiveOption >= index) break;
                    }
                } else {
                    nearestActiveOption = slotOptions.length;
                    for (let i = optionsLength; i >= 0; i--){
                        const { proxy } = slotOptions[i];
                        const optionIsActive = !proxy.disabled;
                        if (optionIsActive) nearestActiveOption = i;
                        if (proxy.isShow && firseIndex === null) {
                             firseIndex = i;
                        } else if (!proxy.isShow) {
                            nearestActiveOption = i;
                            continue
                        }
                        if (nearestActiveOption <= index) break;
                    }
                }
                const activeSlotsOption = slotOptions[nearestActiveOption];
                index = !activeSlotsOption.proxy.isShow ? firseIndex : nearestActiveOption;
                this.focusIndex = index;
            },
            onOptionClick (option) {
                if (this.multiple){
                    // keep the query for remote select
                    if (this.remote) this.lastRemoteQuery = this.lastRemoteQuery || this.query;
                    else this.lastRemoteQuery = '';

                    const valueIsSelected = this.values.find(({value}) => value === option.value);
                    if (valueIsSelected){
                        this.values = this.values.filter(({value}) => value !== option.value);
                    } else {
                        this.values = this.values.concat(option);
                    }

                    this.isFocused = true; // so we put back focus after clicking with mouse on option elements
                } else {
                    this.query = String(option.label).trim();
                    this.values = [option];
                    this.lastRemoteQuery = '';
                    this.hideMenu();
                }
                this.focusIndex = this.slotOptions.findIndex((opt) => {
                    if (!opt) return false;
                    return opt.props.value === option.value;
                });

                if (this.filterable){
                    const inputField = this.$el.querySelector('input[type="text"]');
                    if (!this.autoComplete) nextTick(() => inputField.focus());
                }
                this.$emit('on-select', option); // # 4441
                this.$refs.dropdown.handleOnUpdatePopper();
                setTimeout(() => {
                    this.filterQueryChange = false;
                }, ANIMATION_TIMEOUT);
            },
            onQueryChange(query) {
                this.isTyping = true;
                if (query.length > 0 && query !== this.query) {
                  // in 'AutoComplete', when set an initial value asynchronously,
                  // the 'dropdown list' should be stay hidden.
                  // [issue #5150]
                    if (isClient && this.autoComplete) {
                        let isInputFocused =
                            document.hasFocus &&
                            document.hasFocus() &&
                            document.activeElement === this.$el.querySelector('input');
                        this.visible = isInputFocused;
                    } else {
                        this.visible = true;
                    }
                }
                this.query = query;
                this.unchangedQuery = this.visible;
                this.filterQueryChange = true;
            },
            toggleHeaderFocus({type}){
                if (this.itemDisabled) {
                    return;
                }
                this.isFocused = type === 'focus';
            },
            checkUpdateStatus() {
                if (this.getInitialValue().length > 0 && this.slotOptions.length === 0 ) {
                    this.hasExpectedValue = true;
                }
            },
            // 4.0.0 create new item
            handleCreateItem () {
                if (this.allowCreate && this.query !== '' && this.showCreateItem) {
                    const query = this.query;
                    this.$emit('on-create', query);
                    this.query = '';
                    const option = {
                        value: query,
                        label: query,
                        tag: undefined
                    };
                    this.$refs.dropdown.handleOnUpdatePopper();
                    // 单选（和多选，#926）时如果不在 nextTick 里执行，无法赋值
                    setTimeout(() => {
                        this.onOptionClick(option)
                    });
                }
            },
            handleOnSelectSelected (options) {
                this.onOptionClick(options);
            },
            // 对外 API
            focus () {
                if (this.filterable) {
                    this.$refs.selectHead.$refs.input.focus();
                    this.toggleMenu();
                }
            },
            lazyUpdateValue (checked) {
                const { getInitialValue, isLocking, defaultLabel, remote, modelValue, values } = this;
                const hasDefaultLabel = !!(defaultLabel && defaultLabel.length);
                const hasModelValue = !!(modelValue && modelValue.length);
                // if checked is true, has default values, not format
                if ((hasModelValue || values.length || hasDefaultLabel) && remote && checked) return;
                // isLocking: option run once time
                if (isLocking) return;
                this.isLocking = true;
                nextTick(() => {
                    this.values = getInitialValue().map(this.getOptionData).filter(Boolean)
                    this.isLocking = false;
                });
            }
        },
        watch: {
            modelValue (value) {
                const { publicValue, values } = this;
                this.checkUpdateStatus();
                if (value === '') {
                    this.values = [];
                    this.query = '';
                } else if (checkValuesNotEqual(value,publicValue,values)) {
                    this.lazyUpdateValue();
                    if (!this.multiple) this.handleFormItemChange('change', this.publicValue);
                }
            },
            values (now, before) {
                const newValue = JSON.stringify(now);
                const oldValue = JSON.stringify(before);
                // v-model is always just the value, event with labelInValue === true
                // const vModelValue = (this.publicValue && this.labelInValue === false) ?
                //     (this.multiple ? this.publicValue.map(({value}) => value) : this.publicValue.value) :
                //     this.publicValue;
                // 改变 labelInValue 的实现：直接在 emit 时改数据
                let vModelValue = this.publicValue;
                const shouldEmitInput = newValue !== oldValue && vModelValue !== this.modelValue;
                if (shouldEmitInput) {
                    let emitValue = this.publicValue;
                    if (this.labelInValue) {
                        if (this.multiple) {
                            emitValue = this.values;
                        } else {
                            emitValue = this.values[0];
                        }
                    }

                    // Form 重置时，如果初始值是 null，也置为 null，而不是 []
                    if (Array.isArray(vModelValue) && !vModelValue.length && this.modelValue === null) vModelValue = null;
                    else if (vModelValue === undefined && this.modelValue === null) vModelValue = null;

                    this.$emit('update:modelValue', vModelValue); // to update v-model
                    this.$emit('on-change', emitValue);
                    this.handleFormItemChange('change', emitValue);
                }
            },
            query (query) {
                // when query word, set focusIndex init
                this.focusIndex = -1;

                this.$emit('on-query-change', query);
                const {remoteMethod, lastRemoteQuery} = this;
                const hasValidQuery = query !== '' && (query !== lastRemoteQuery || !lastRemoteQuery);
                const shouldCallRemoteMethod = remoteMethod && hasValidQuery && !this.preventRemoteCall;
                this.preventRemoteCall = false; // remove the flag

                if (shouldCallRemoteMethod){
                    const promise = this.remoteMethod(query);
                    this.initialLabel = '';
                    if (promise && promise.then){
                        promise.then(options => {
                            if (options) this.options = options;
                        });
                    }
                }
                if (this.visible) {
                    this.$refs.dropdown.handleOnUpdatePopper();
                }
                if (query !== '' && this.remote) this.lastRemoteQuery = query;
            },
            isFocused (focused) {
                const el = this.filterable ? this.$el.querySelector('input[type="text"]') : this.$el;
                el[this.isFocused ? 'focus' : 'blur']();

                // restore query value in filterable single selects
                const [selectedOption] = this.values;
                if (selectedOption && this.filterable && !this.multiple && !focused){
                    const selectedLabel = String(selectedOption.label || selectedOption.value).trim();
                    if (selectedLabel && this.query !== selectedLabel) {
                        this.preventRemoteCall = true;
                        this.query = selectedLabel;
                    }
                }
            },
            focusIndex (index) {
                if (index < 0 || this.autoComplete) return;
                // update scroll
                if (this.slotOptions[index]) {
                    const optionInstance = this.slotOptions[index].proxy;
                    const $itemEle = optionInstance.$el;
                    const $drop = this.$refs.dropdown.$refs.drop;
                    let bottomOverflowDistance = $itemEle.getBoundingClientRect().bottom - $drop.getBoundingClientRect().bottom;
                    let topOverflowDistance = $itemEle.getBoundingClientRect().top - $drop.getBoundingClientRect().top;
                    if (bottomOverflowDistance > 0) {
                        $drop.scrollTop += bottomOverflowDistance;
                    }
                    if (topOverflowDistance < 0) {
                        $drop.scrollTop += topOverflowDistance;
                    }
                }
            },
            dropVisible (open) {
                if (open) {
                    this.$refs.dropdown.handleOnUpdatePopper();
                } else {
                    this.$refs.dropdown.handleOnDestroyPopper();
                }
            },
            visible (state) {
                this.$emit('on-open-change', state);
            }
        }
    };
</script>
