<template>
    <div>
        <Typography v-model="word" keyboard strong underline></Typography>
        <Typography keyboard strong underline>美好的一天</Typography>
        <Divider></Divider>
        <Typography>
            In the process of internal desktop applications development, many different design specs and
            implementations would be involved, which might cause designers and developers difficulties and
            duplication and reduce the efficiency of development.
        </Typography>
        <Typography keyboard>Esc</Typography>
        <Typography code>Esc</Typography>
        <Typography strong>Esc</Typography>
        <Typography underline>Esc</Typography>
        <Typography delete>Esc</Typography>
        <Typography mark>Esc</Typography>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                word: 'Hello World'
            }
        }
    }
</script>
