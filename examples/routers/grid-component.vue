<template>
    <div>
        显示边框：<Switch v-model="border" />
        开启悬停：<Switch v-model="hover" />
        <Grid :border="border" :hover="hover">
            <GridItem>1</GridItem>
            <GridItem>2</GridItem>
            <GridItem>3</GridItem>
            <GridItem>4</GridItem>
            <GridItem>5</GridItem>
            <GridItem>6</GridItem>
            <GridItem>7</GridItem>
            <GridItem>8</GridItem>
            <GridItem>9</GridItem>
        </Grid>
    </div>
</template>
<script>
export default {
    data () {
        return {
            border: true,
            hover: true
        }
    }
}
</script>
