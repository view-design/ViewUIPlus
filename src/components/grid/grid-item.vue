<template>
    <div class="ivu-grid-item" :style="styles" ref="col">
        <div class="ivu-grid-item-main" :style="mainStyles"><slot></slot></div>
    </div>
</template>
<script>
    import { nextTick } from 'vue';
    import { getStyle } from '../../utils/assist.js';

    export default {
        name: 'GridItem',
        inject: ['GridInstance'],
        data () {
            return {
                height: 0
            };
        },
        computed: {
            col () {
                return this.GridInstance.col;
            },
            square () {
                return this.GridInstance.square;
            },
            styles () {
                const style = {
                    width: `${100 / this.col}%`
                };

                if (this.height && this.square) {
                    style.height = `${this.height}px`;
                }
                return style;
            },
            mainStyles () {
                return {
                    padding: this.GridInstance.padding
                };
            }
        },
        watch: {
            col () {
                nextTick(() => {
                    this.handleChangeHeight();
                });
            },
            square () {
                this.handleChangeHeight();
            },
            'GridInstance.resizeCount' () {
                this.handleChangeHeight();
            }
        },
        methods: {
            handleChangeHeight () {
                if (this.square) {
                    const $col = this.$refs.col;
                    this.height = parseFloat(getStyle($col, 'width'));
                }
            }
        },
        mounted () {
            this.handleChangeHeight();
        }
    };
</script>
