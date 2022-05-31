<template>
    <div :class="prefixCls">
        <img :src="src" :style="[fitStyle]" :class="[prefixCls + '-img']" />
    </div>
</template>
<script>
    const prefixCls = 'ivu-image';

    export default {
        name: 'Image',
        props: {
            // 图片地址
            src: {
                type: String,
                default: ''
            },
            // 图片描述
            alt: {
                type: String,
                default: ''
            },
            // 是否预览
            preview: {
                type: Boolean,
                default: false
            },
            referrerPolicy: {
                type: String,
                default: ''
            },
            width: {
                type: [String, Number],
                default: ''
            },
            height: {
                type: [String, Number],
                default: ''
            },
            // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
            // 填充模式
            fit: {
                type: String, // 'fill' | 'contain' | 'cover' | 'none' | 'scale'-down' 
                default: ''
            },
            lazy: {
                type: Boolean,
                default: false
            },
            scrollContainer: {
                type: [String, HTMLElement]
            },
            transfer: {
                type: Boolean,
                default: false
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            // 预览列表
            previewList: {
                type: Array
            },
            initialIndex: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                prefixCls: prefixCls
            }
        },
        computed: {
            fitStyle() {
                const fitContains = ['fill', 'contain', 'cover', 'none', 'scale-down'];
                const { fit } = this;
                return fitContains ? `object-fit:${fit};` : '';
            }
        },

    }
</script>