<template>
    <div class="ivu-breadcrumb">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'Breadcrumb',
        provide () {
            return {
                BreadcrumbInstance: this
            }
        },
        props: {
            separator: {
                type: String,
                default: '/'
            }
        }
    };
</script>
