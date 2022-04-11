<template>
    <TablePaste
        :input-props="inputProps"
        @on-success="handleSuccess"
        @on-error="handleError" />
</template>
<script>
export default {
    data () {
        return {
            inputProps: {
                placeholder: '尝试从网页、Excel 或其它软件复制一段表格数据，粘贴在这里'
            }
        }
    },
    methods: {
        handleSuccess (tableData) {
            console.log(tableData);
        },
        handleError (tableData, errorIndex) {
            console.log(tableData, errorIndex);
        }
    }
}
</script>
