<template>
    <span class="ivu-gradient-text" :style="{'background-image': 'linear-gradient('+deg+'deg,'+colors.split(' ').join(',')+')'}"><slot></slot></span>
</template>

<script>
export default {
    name: 'Gradient',
    props: {
        colors: {
            type: String,
            default () {
                return "";
            }
        },
        deg: {
            type: Number,
            default () {
                return 90;
            }
        }
    },
}
</script>
