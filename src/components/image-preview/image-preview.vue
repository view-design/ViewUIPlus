<template>
    <teleport to="body" :disabled="!transfer">
        <div
            :class="[prefixCls + '-wrapper']" 
            @mouseover.stop.prevent
            v-if="modelValue">
            <div :class="[prefixCls + '-mark']"></div>
            <ul :class="[prefixCls + '-operations']">
                <li 
                    :class="[prefixCls + '-operations-item']"
                    v-for="item in operations"
                    :key="item.value"
                >
                    {{item.label}}
                </li> 
            </ul>
            <Icon :class="[prefixCls + '-arrow-left']" type="ios-arrow-back" />
            <Icon :class="[prefixCls + '-arrow-right']" type="ios-arrow-forward" />
            <Icon @click.stop="handleClose" :class="[prefixCls + '-arrow-close']" type="md-close" />
        </div>
    </teleport>
</template>
<script>
    const prefixCls = 'ivu-image-preview';
    import Icon from '../icon';
    export default {
        name: 'ImagePreview',
        components: { Icon },
        props: {
            modelValue: {
                type: Boolean,
                default: false
            },
            transfer: {
                type: Boolean,
                default: false
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            previewList: {
                type: Array
            },
            initialIndex: {
                type: Number,
                default: 0
            },
            infinite: {
                type: Boolean,
                default: true
            }
        },
        emits: ['update:modelValue', 'on-close'],
        data() {
            return {
                prefixCls,
                operations: [
                    {label: '放大', icon: '', value: 'enlarge'},
                    {label: '缩小', icon: '', value: 'narrow'},
                    {label: '左旋转', icon: '', value: 'leftRotation'},
                    {label: '右旋转', icon: '', value: 'rightRotation'}
                ]
            }
        },
        methods: {
            handleClose() {
                this.$emit('update:modelValue', false);
                this.$emit('on-close')
            }
        }
    }
</script>