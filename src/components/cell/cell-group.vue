<template>
    <div class="ivu-cell-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'CellGroup',
        emits: ['on-click'],
        provide () {
            return {
                CellGroupInstance: this
            }
        },
        methods: {
            handleClick (name) {
                this.$emit('on-click', name);
            }
        }
    };
</script>
