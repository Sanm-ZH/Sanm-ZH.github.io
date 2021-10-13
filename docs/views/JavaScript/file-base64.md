---
author: sanmzh
title: File Base64 转换
categories: [JavaScript]
tags: [js]
date: 2021-10-13 10:27:57
---

<Boxx changeTime="30000"/>

### file 转换 base64
```js
export const fileToBase64 = file => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function(e) {
    return e.target.result
  }
}
```

### Blob
:::tip 定义
`blob` 表示二进制大对象（`binary larget object`），是 `JavaScript` 对不可修改二进制数据的封装类型。包含字符串的数组、`ArrayBuffers`、`ArrayBufferViews`，甚至其他 `Blob` 都可以用来创建 `blob`。
:::

#### blob常用的场景
- 大文件分片上传
- 隐藏视频链接
- 文件下载

### blob 转 file
```js
export const blobToFile = (blob, fileName) => {
  blob.lastModified = new Date()
  blob.name = fileName
  return blob
}
```

### base64
:::tip 定义
`Base64` 是一组相似的二进制到文本的编码规则，使得二进制数据在解释成 `radix-64` 的表现形式后能够用 `ASCII` 字符串的格式表示出来。`Base64`编码普遍应用于需要通过被设计为处理文本数据的媒介上储存和传输二进制数据而需要编码该二进制数据的场景。
:::

所谓`Base64`，就是说选出`64`个字符：小写字母`a-z`、大写字母`A-Z`、数字`0-9`、符号"`+`"、"`/`"（再加上作为垫字的"`=`"，实际上是65个字符）作为一个基本字符集。然后，其他所有符号都转换成这个字符集中的字符。

### base64 转 file
```js
export const base64ToFile = (base64, fileName) => {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const suffix = mime.split('/')[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${fileName}.${suffix}`, {type: mime})
}
```

### base64 转 blob
```js
export const base64ToBlob = base64 => {
    const arr = base64.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
}
```