<template>
    <div>
        <Calendar v-model="value" hide-type>
            <template #month="{ data }">
                <Badge status="warning" text="看苹果发布会" v-if="data.day === '2019-09-11'" />
                <Badge status="success" text="中秋节" v-if="data.day === '2019-09-13'" />
                <Badge status="error" text="国庆节" v-if="data.day === '2019-10-01'" />
            </template>
        </Calendar>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: '2019-09-05'
        }
    }
}
</script>
