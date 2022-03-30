<template>
    <div>
        <Button type="primary" @click="info">Display info prompt</Button>
        <Button @click="success">Display success prompt</Button>
        <Button @click="warning">Display warning prompt</Button>
        <Button @click="error">Display error prompt</Button>
        <Button @click="loading">Display loading...</Button>
        <Button @click="closable">Display a closable message</Button>

        <Button @click="handleAdd">add</Button>
        <Button @click="handleRemove">remove</Button>
        <transition-group name="move-up" appear>
            <div v-for="(item, index) in list" :key="index">
                <transition name="move-up" appear @enter="inn" @leave="out">
                    <div style="width:200px;height: 200px;background: #2d8cf0"></div>
                </transition>
            </div>
        </transition-group>


    </div>
</template>
<script>
    export default {
        data () {
            return {
                a: false,
                list: [{
                    a: 1
                }]
            }
        },
        methods: {
            inn () {
                console.log(1);
            },
            out () {
                console.log(2);
            },
            handleAdd () {
                this.list.push({
                    a: 1
                })
            },
            handleRemove () {
                this.list.splice(0, 1);
            },
            info () {
                this.$Message.info({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
                this.$Message.success({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
                this.$Message.warning({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
                this.$Message.error({
                    content: '这是一条普通的提示',
                    duration: 1000,
                    background: true
                });
            },
            success () {
                this.$Message.success('This is a success tip');
            },
            warning () {
                this.$Message.warning('This is a warning tip');
            },
            error () {
                this.$Message.error('This is an error tip');
            },
            loading () {
                const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
            closable () {
                this.$Message.info({
                    content: 'Tips for manual closing',
                    duration: 1000,
                    closable: true
                });
            }
        }
    }
</script>
