---
author: sanmzh
title: 下载文件/流下载
categories: [JavaScript]
tags: [js]
date: 2022-01-21 13:51:29
---

<Boxx changeTime="30000"/>

:::tip 前言
有时下载文件到本地是，出现文件名不能自定义的情况
:::

### 原理
当下载连接不是同源时，使用a标签下载文件名会不能自定义的，接口返回啥就是啥，这是可以通过get请求将文件路径转换成`blod`

### 实现
下面已`ajax`举例，`axios`、`fetch`，同理，设置`responseType`
```js
$.ajax({
        type: 'get',
        url: 'xxxxx',
        headers: {
            Authorization: getCookie('token')
        },
        xhrFields: { responseType: 'blob' },
        success: function (blob) {
            var eleLink = document.createElement('a');
            eleLink.download = 'xxxx.zip';  // 文件名带上最好带上格式
            eleLink.style.display = 'none';
            eleLink.href = URL.createObjectURL(blob);
            // 触发点击
            document.body.appendChild(eleLink);
            eleLink.click();
            // 然后移除
            document.body.removeChild(eleLink);
        }
    });
```