<template>
    <TreeSelect v-model="value" :data="data" v-width="200" />
</template>
<script>
    export default {
        data () {
            return {
                value: '',
                data: [
                    {
                        title: 'parent1',
                        expand: true,
                        value: 'parent1',
                        selected: false,
                        checked: false,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                value: 'parent1-1',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        value: 'leaf1',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        value: 'leaf2',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                value: 'parent1-2',
                                selected: false,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        value: 'leaf3',
                                        selected: false,
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        value: 'leaf4',
                                        selected: false,
                                        checked: false,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>