<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://file.iviewui.com/view-ui-logo-new.svg">
    </a>
</p>

<h1>
View UI Plus
    <h3>基于 Vue.js 3 的企业级 UI 组件库和中后台系统解决方案，为数万开发者服务。
</h3>
</h1>

[![View UI Plus](https://img.shields.io/npm/v/view-ui-plus.svg?style=flat-square)](https://www.npmjs.org/package/view-ui-plus)
[![NPM downloads](http://img.shields.io/npm/dm/view-ui-plus.svg?style=flat-square)](https://npmjs.org/package/view-ui-plus)
[![NPM downloads](https://img.shields.io/npm/dt/view-ui-plus.svg?style=flat-square)](https://npmjs.org/package/view-ui-plus)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/view-ui-plus/dist/viewuiplus.min.js?compression=gzip&label=gzip%20size:%20JS&style=flat-square)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/view-ui-plus/dist/styles/viewuiplus.css?compression=gzip&label=gzip%20size:%20CSS&style=flat-square)
[![Join the chat at https://gitter.im/iview/iview](https://img.shields.io/badge/chat-on_gitter-30b392.svg?style=flat-square)](https://gitter.im/iview/iview?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## 文档

[https://www.iviewui.com](https://www.iviewui.com)

## 在 InsCode 中在线体验
[https://inscode.csdn.net/@aresn/ViewDesign](https://inscode.csdn.net/@aresn/ViewDesign)

## 特性

- 丰富的组件和功能，满足绝大部分网站场景
- 提供开箱即用的 [Admin 系统](https://iviewui.com/admin-plus) 和 快速增删改查 [表格组件](https://iviewui.com/icrud)，极大程度节省开发成本
- 友好的 API ，自由灵活地使用空间
- 细致、漂亮的 UI
- 事无巨细的文档
- 可自定义主题

## 安装

我们推进您使用官方工具快速开始：

- [View UI Plus Project (Based on Vue CLI)](https://github.com/view-design/view-ui-project-vuecli)
- [View UI Plus Project (Based on Vite)](https://github.com/view-design/view-ui-project-vite)
- [View UI Plus Project (Based on TypeScript)](https://github.com/view-design/view-ui-project-ts)
- [View UI Plus Project (Based on Nuxt)](https://github.com/view-design/view-ui-project-nuxt)

### 安装 View UI Plus

使用 npm:
```
npm install view-ui-plus --save
```

或使用 `<script>` 全局引用：

```html
<script type="text/javascript" src="viewuiplus.min.js"></script>
<link rel="stylesheet" href="dist/styles/viewuiplus.css">
```

您可以[在官网文档](https://www.iviewui.com/view-ui-plus/guide/install)查看更多详细说明。

## 示例

### Options API：

```vue
<template>
    <Slider v-model="value" range />
</template>
<script setup>
    import { ref } from 'vue'
    const value = ref([20, 50])
</script>
```

### Composition API：

```vue
<template>
    <Slider v-model="value" range />
</template>
<script setup>
    import { ref } from 'vue'
    const value = ref([20, 50])
</script>
```

### TypeScript：

```vue
<template>
    <Slider v-model="value" range />
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    import type { Ref } from 'vue'
    const value: Ref<number[]> = ref([20, 50])
</script>
```

使用 `import` 导入 CSS:

```js
import 'view-ui-plus/dist/styles/viewuiplus.css'
```

## 社区

您可以免费加入到 [ViewDesign 官方社区](https://community.gitcode.com/viewdesign) 了解更多 Vue 的内容。

## 主要贡献者
|Name|Avatar|Name|Avatar|Name|Avatar|
|---|---|---|---|---|---|
|[Aresn](https://github.com/icarusion) |  ![](https://avatars3.githubusercontent.com/u/5370542?v=3&s=60)  |[jingsam](https://github.com/jingsam) |  ![](https://avatars3.githubusercontent.com/u/1522494?v=3&s=60)  | [rijn](https://github.com/rijn)       |  ![](https://avatars2.githubusercontent.com/u/6976367?v=3&s=60)  |
|[lcx960324](https://github.com/lcx960324)           |  ![](https://avatars3.githubusercontent.com/u/9768245?v=3&s=60)  |[GITleonine1989](https://github.com/GITleonine1989) |  ![](https://avatars1.githubusercontent.com/u/7582490?v=3&s=60)  |[huixisheng](https://github.com/huixisheng)         |  ![](https://avatars1.githubusercontent.com/u/1518967?v=3&s=60)  |
|[Sergio Crisostomo](https://github.com/SergioCrisostomo)           |  ![](https://avatars3.githubusercontent.com/u/5614559?v=3&s=60)  |  [lison16](https://github.com/lison16)           |  ![](https://avatars3.githubusercontent.com/u/20942571?v=3&s=60) |  [Xotic750](https://github.com/Xotic750)    | ![](https://avatars3.githubusercontent.com/u/216041?v=3&s=60)   |
[huanghong1125](https://github.com/huanghong1125) | ![](https://avatars3.githubusercontent.com/u/12794817?v=3&s=60) | [yangdan8](https://github.com/yangdan8) | ![](https://avatars2.githubusercontent.com/u/16515026?v=3&s=60) | [likuner](https://github.com/likuner)| ![](https://avatars3.githubusercontent.com/u/18632318?v=3&s=60)  |


## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, ViewDesign
