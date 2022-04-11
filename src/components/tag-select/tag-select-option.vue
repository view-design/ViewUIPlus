<template>
    <div class="ivu-tag-select-option">
        <Tag checkable :checked="checked" @on-change="handleChange" :color="color" v-bind="tagProps"><slot></slot></Tag>
    </div>
</template>
<script>
    import Tag from '../tag/tag.vue';
    import random from '../../utils/random_str';

    export default {
        name: 'TagSelectOption',
        components: { Tag },
        inject: ['TagSelectInstance'],
        props: {
            name: {
                type: [String, Number],
                required: true
            },
            tagProps: {
                type: Object,
                default () {
                    return {};
                }
            },
            color: {
                type: String,
                default: 'primary'
            }
        },
        data () {
            return {
                checked: false,
                id: random(6)
            };
        },
        methods: {
            handleChange (checked) {
                this.checked = checked;
                this.TagSelectInstance.handleChangeTag(this.name);
            },
            addOption () {
                const target = this.TagSelectInstance;
                target.tagSelectOptionList.push({
                    id: this.id,
                    option: this
                });
            },
            removeOption () {
                const target = this.TagSelectInstance;
                const index = target.tagSelectOptionList.findIndex(item => item.id === this.id);
                target.tagSelectOptionList.splice(index, 1);
            }
        },
        mounted () {
            this.addOption();
        },
        beforeUnmount () {
            this.removeOption();
        }
    };
</script>
