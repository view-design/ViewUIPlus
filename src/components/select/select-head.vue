<template>
    <div @click="onHeaderClick" :class="headCls">
        <span :class="[prefixCls + '-prefix']" v-if="showPrefix">
            <slot name="prefix">
                <Icon :type="prefix" v-if="prefix" />
            </slot>
        </span>
        <div
            class="ivu-tag ivu-tag-checked"
            v-for="(item, index) in selectedMultiple"
            :key="index">
            <span class="ivu-tag-text" :class="{ 'ivu-select-multiple-tag-hidden': item.disabled }">{{ item.tag !== undefined ? item.tag : item.label }}</span>
            <Icon type="ios-close" v-if="!item.disabled" @click.stop="removeTag(item)"></Icon>
        </div>
        <div class="ivu-tag ivu-tag-checked" v-if="maxTagCount !== undefined && values.length > maxTagCount">
            <span class="ivu-tag-text ivu-select-max-tag">
                <template v-if="maxTagPlaceholder">{{ maxTagPlaceholder(values.length - maxTagCount) }}</template>
                <template v-else>+ {{ values.length - maxTagCount }}...</template>
            </span>
        </div>
        <span
            :class="singleDisplayClasses"
            v-show="singleDisplayValue"
        >{{ singleDisplayValue }}</span>
        <input
            :id="inputElementId"
            type="text"
            v-if="filterable"
            v-model="query"
            :disabled="disabled"
            :class="[prefixCls + '-input']"
            :placeholder="showPlaceholder ? localePlaceholder : ''"
            :style="inputStyle"
            autocomplete="off"
            spellcheck="false"
            @keydown="resetInputState"
            @keydown.delete="handleInputDelete"
            @keydown.enter="handleInputEnter"
            @focus="onInputFocus"
            @blur="onInputBlur"

            ref="input">
        <Icon type="ios-close-circle" :class="[prefixCls + '-arrow']" v-if="resetSelect" @click.stop="onClear"></Icon>
        <Icon :type="arrowType" :custom="customArrowType" :size="arrowSize" :class="[prefixCls + '-arrow']" v-if="!resetSelect && !remote"></Icon>
    </div>
</template>
<script>
    import { nextTick } from 'vue';
    import Icon from '../icon';
    import Locale from '../../mixins/locale';
    import globalConfig from '../../mixins/globalConfig';

    const prefixCls = 'ivu-select';

    export default {
        name: 'iSelectHead',
        mixins: [ Locale, globalConfig ],
        components: { Icon },
        emits: ['on-input-focus', 'on-input-blur', 'on-keydown', 'on-enter', 'on-clear', 'on-query-change'],
        inject: ['SelectInstance'],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            filterable: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
            remote: {
                type: Boolean,
                default: false
            },
            initialLabel: {
                type: [String, Number, Array],
            },
            values: {
                type: Array,
                default: () => []
            },
            clearable: {
                type: [Function, Boolean],
                default: false,
            },
            inputElementId: {
                type: String
            },
            placeholder: {
                type: String
            },
            queryProp: {
                type: String,
                default: ''
            },
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
                type: Boolean
            },
            // 4.0.0
            showCreateItem: {
                type: Boolean
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                query: '',
                inputLength: 20,
                remoteInitialLabel: this.initialLabel,
                preventRemoteCall: false,
            };
        },
        computed: {
            singleDisplayClasses () {
                const { filterable, multiple, showPlaceholder } = this;
                return [{
                    [prefixCls + '-head-with-prefix']: this.showPrefix,
                    [prefixCls + '-placeholder']: showPlaceholder && !filterable,
                    [prefixCls + '-selected-value']: !showPlaceholder && !multiple && !filterable,
                }];
            },
            singleDisplayValue () {
                if ((this.multiple && this.values.length > 0) || this.filterable) return '';
                return `${this.selectedSingle}` || this.localePlaceholder;
            },
            showPlaceholder () {
                let status = false;
                if (!this.multiple) {
                    const value = this.values[0];
                    if (typeof value === 'undefined' || String(value).trim() === ''){
                        status = !this.remoteInitialLabel;
                    }
                } else {
                    if (!this.values.length > 0) {
                        status = true;
                    }
                }
                return status;
            },
            resetSelect () {
                return !this.showPlaceholder && this.clearable;
            },
            inputStyle () {
                let style = {};

                if (this.multiple) {
                    if (this.showPlaceholder) {
                        style.width = '100%';
                    } else {
                        style.width = `${this.inputLength}px`;
                    }
                }

                return style;
            },
            localePlaceholder () {
                if (this.placeholder === undefined) {
                    return this.t('i.select.placeholder');
                } else {
                    return this.placeholder;
                }
            },
            selectedSingle () {
                const selected = this.values[0];
                return selected ? selected.label : (this.remoteInitialLabel || '');
            },
            selectedMultiple () {
                const values = this.multiple ? this.values : [];
                return values.filter((item, index) => this.maxTagCount === undefined || index < this.maxTagCount);;
            },
            // 使用 prefix 时，在 filterable
            headCls () {
                return {
                    [`${prefixCls}-head-flex`]: this.filterable && this.showPrefix
                };
            },
            // 3.4.0, global setting customArrow 有值时，arrow 赋值空
            arrowType () {
                const config = this.globalConfig;
                let type = 'ios-arrow-down';

                if (config) {
                    if (config.select.customArrow) {
                        type = '';
                    } else if (config.select.arrow) {
                        type = config.select.arrow;
                    }
                }
                return type;
            },
            // 3.4.0, global setting
            customArrowType () {
                const config = this.globalConfig;
                let type = '';

                if (config) {
                    if (config.select.customArrow) {
                        type = config.select.customArrow;
                    }
                }
                return type;
            },
            showPrefix () {
                const prefix = this.$slots.prefix && this.$slots.prefix();
                let visible = false;
                if (prefix) {
                    visible = prefix[0].children.length > 0;
                }
                return visible || this.prefix
            },
            // 3.4.0, global setting
            arrowSize () {
                const config = this.globalConfig;
                let size = '';

                if (config) {
                    if (config.select.arrowSize) {
                        size = config.select.arrowSize;
                    }
                }
                return size;
            }
        },
        methods: {
            onInputFocus () {
                this.$emit('on-input-focus');
            },
            onInputBlur () {
                if (this.showCreateItem) return;
                if (!this.values.length) this.query = '';  // #5155
                this.$emit('on-input-blur');
            },
            removeTag (value) {
                if (this.disabled) return false;
                this.SelectInstance.handleOnSelectSelected(value);
            },
            resetInputState () {
                this.inputLength = this.$refs.input.value.length * 12 + 20;
                this.$emit('on-keydown');
            },
            handleInputDelete (e) {
                const targetValue = e.target.value;
                if (this.multiple && this.selectedMultiple.length && this.query === '' && targetValue === '') {
                    this.removeTag(this.selectedMultiple[this.selectedMultiple.length - 1]);
                }
            },
            handleInputEnter (e) {
                this.$emit('on-enter');
                // #926
                if (this.showCreateItem) {
                    e.stopPropagation()
                };
            },
            onHeaderClick (e) {
                if (this.filterable && e.target === this.$el){
                    this.$refs.input.focus();
                }
            },
            onClear () {
                this.$emit('on-clear');
            }
        },
        watch: {
            values ([value]) {
                if (!this.filterable) return;
                this.preventRemoteCall = true;
                if (this.multiple){
                    this.query = '';
                    this.preventRemoteCall = false; // this should be after the query change setter above
                    return;
                }
                // #982
                if (typeof value === 'undefined' || value === '' || value === null) this.query = '';
                else this.query = value.label;
                nextTick(() => this.preventRemoteCall = false); // this should be after the query change setter above
            },
            query (val) {
                if (this.preventRemoteCall) {
                    this.preventRemoteCall = false;
                    return;
                }
                this.$emit('on-query-change', val);
            },
            queryProp (query ){
                if (query !== this.query) this.query = query;
            },
        }
    };
</script>
