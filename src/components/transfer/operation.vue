<template>
    <div :class="prefixCls + '-operation'">
        <template v-if="reverseOperation">
            <Button type="primary" size="small" :disabled="!leftActive" @click="moveToRight">
                <span v-if="operations[1]">{{ operations[1] }}</span><Icon type="ios-arrow-forward"></Icon>
            </Button>
            <Button type="primary" size="small" :disabled="!rightActive" @click="moveToLeft">
                <Icon type="ios-arrow-back"></Icon><span v-if="operations[0]">{{ operations[0] }}</span>
            </Button>
        </template>
        <template v-else>
            <Button type="primary" size="small" :disabled="!rightActive" @click="moveToLeft">
                <Icon type="ios-arrow-back"></Icon><span v-if="operations[0]">{{ operations[0] }}</span>
            </Button>
            <Button type="primary" size="small" :disabled="!leftActive" @click="moveToRight">
                <span v-if="operations[1]">{{ operations[1] }}</span><Icon type="ios-arrow-forward"></Icon>
            </Button>
        </template>
    </div>
</template>
<script>
    import Button from '../button/button.vue';
    import Icon from '../icon/icon.vue';

    export default {
        name: 'Operation',
        components: { Button, Icon },
        inject: ['TransferInstance'],
        props: {
            prefixCls: String,
            operations: Array,
            leftActive: Boolean,
            rightActive: Boolean,
            reverseOperation: Boolean
        },
        methods: {
            moveToLeft () {
                this.TransferInstance.moveTo('left');
            },
            moveToRight () {
                this.TransferInstance.moveTo('right');
            }
        }
    };
</script>
