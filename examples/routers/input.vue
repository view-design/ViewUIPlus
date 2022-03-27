<template>
    <div>
        <Button @click="handleFocus('start')">Focus at first</Button>
        <Button @click="handleFocus('end')">Focus at last</Button>
        <Button @click="handleFocus('all')">Focus to select all</Button>
        <Button @click="handleFocus('preventScroll')">Focus prevent scroll</Button>
        <Input ref="input" v-model="value20" placeholder="Enter something..." style="margin-top: 16px" />
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value20: 'View UI’s birthday is July 28'
            }
        },
        methods: {
            handleFocus (type) {
                if (type === 'preventScroll') {
                    this.$refs.input.focus({
                        preventScroll: true
                    });
                } else {
                    this.$refs.input.focus({
                        cursor: type
                    });
                }
            }
        }
    }
</script>
