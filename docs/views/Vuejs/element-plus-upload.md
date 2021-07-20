---
author: sanmzh
title: ElementUI 上传进度条
categories: [Vuejs]
tags: [elementui, element-plus, vue, js]
date: 2021-07-20 14:49:48
---

<Boxx changeTime="30000"/>

:::tip
很多时候上传文件时，都会封装成一个公共的方法，这可能会导致 `ElementUI` 上传组件自带的上传进度无效
:::

```js
// 公共上传文件方法
function uploadFile({ file, fileInfo }) {
  const formData = new FormData()
  formData.append('file', file)
  return $http.post(api.uploadFile, formData, {
    onUploadProgress: function(event) {
      if (fileInfo) {
        fileInfo.onProgress({ percent: event.loaded / event.total * 100 })
      }
    }
  })
}
```
此处使用了 `axios` 的 `onUploadProgress`，不同的封装请自行查找类似回调

如果要自定义上传进度条，就没必要使用 `fileInfo` 参数了

- `fileInfo` 是 `el-upload` 中上传钩子中的回调参数，里面封装好了设置自带进度条的方法，在 `axios` 进度回调 `onUploadProgress` 函数中进行设置即可

**ps：** `ElementUI` `upload` 组件删除文件时不会更新绑定的文件列表，这时需要自己手动更新下文件列表