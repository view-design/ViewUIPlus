<template>
  <div class="demo-image">
    <div class="demo-image-item" v-for="fit in fitList" :key="fit">
      <Image
        style="width: 100px; height: 100px" 
        :src="url" 
        :fit="fit"
        :alt="fit"
      >
        <template #placeholder>
          <Spin size="large" fix />
        </template>
        <template #error>
          <div>失败</div>
        </template>
      </Image>
      <p>{{fit}}</p>
    </div>
  </div>
</template>

<script>
    const fitList = ['fill', 'contain', 'cover', 'none', 'scale-down']
    export default {
        data() {
            return {
                fitList,
                url: 'https://dev-file.iviewui.com/j9IanwNpbTPM4aXv2fKyPTX1omREAaGG'
            }
        }
    }
</script>
<style lang="less">
.demo-image {
  &-item {
    width: 200px;
    height: 200px;
    margin: 0 20px;
    display: inline-block;
    text-align: center;
    .ivu-image {
      background: #ccc;
    }
    p {
      margin-top: 5px;
      text-align: center;
    }
  }
}
</style>