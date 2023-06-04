<template>
  <Alert>
    当前 Vue 版本为 {{ vueVersion }}，View UI Plus 版本为 {{ version }}
  </Alert>
  <Input v-model="msg" />
  <Select v-model="model" filterable>
    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
  </Select>
</template>
<script setup>
  import { ref, version as vueVersion } from 'vue'
  const model = ref('');
  const cityList = ref([
    {
      value: 'New York',
      label: '纽约'
    },
    {
      value: 'London',
      label: '伦敦'
    },
    {
      value: 'Sydney',
      label: '悉尼'
    }
  ]);
</script>
<style>

</style>