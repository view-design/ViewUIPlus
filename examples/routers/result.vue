<template>
    <Result type="success" title="提交成功">
        <template #desc>
            <div>
                提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。灰色区域可以显示一些补充的信息。
            </div>
        </template>
        <template #extra>
            <div>
                已提交申请，等待部门审核。
            </div>
        </template>
        <template #actions>
            <div>
                <Button type="primary">返回列表</Button>
                <Button>查看项目</Button>
                <Button>打印</Button>
            </div>
        </template>
    </Result>
</template>
<script>
export default {

}
</script>
