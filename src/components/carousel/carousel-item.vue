<template>
    <div :class="prefixCls" :style="styles"><slot></slot></div>
</template>
<script>
    import { nextTick } from 'vue';
    import random from '../../utils/random_str';
    const prefixCls = 'ivu-carousel-item';

    export default {
        componentName: 'carousel-item',
        name: 'CarouselItem',
        inject: ['CarouselInstance'],
        data () {
            return {
                prefixCls: prefixCls,
                width: 0,
                height: 'auto',
                left: 0,
                id: random(6)
            };
        },
        computed: {
            styles () {
                return {
                    width: `${this.width}px`,
                    height: `${this.height}`,
                    left: `${this.left}px`
                };
            }
        },
        watch: {
            width (val) {
                if (val && this.CarouselInstance.loop) {
                    nextTick(() => {
                        this.CarouselInstance.initCopyTrackDom();
                    });
                }
            },
            height (val) {
                if (val && this.CarouselInstance.loop) {
                    nextTick(() => {
                        this.CarouselInstance.initCopyTrackDom();
                    });
                }
            }
        },
        methods:{
            /**
             * 添加组件实例到实例列表
             */
            addInstance () {
                const root = this.CarouselInstance;
                if (!root.carouselItemList) root.carouselItemList = [];
                root.carouselItemList.push({
                    id: this.id,
                    carouselItem: this
                });
            },
            removeInstance () {
                const root = this.CarouselInstance;
                if (!root.carouselItemList) return;
                const index = root.carouselItemList.findIndex(item => item.id === this.id);
                root.carouselItemList.splice(index, 1);
            }
        },
        mounted () {
            this.addInstance();
            this.CarouselInstance.slotChange();
        },
        beforeUnmount () {
            this.removeInstance();
            this.CarouselInstance.slotChange();
        }
    };
</script>
