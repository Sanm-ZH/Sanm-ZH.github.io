---
author: sanmzh
title: 链接下载文件
categories: [JavaScript]
tags: [js,utilsFn]
date: 2021-03-19 09:57:11
---

<Boxx changeTime="30000"/>

## 下载文件

```js
function saveAs(url, name) {
    var ele = document.createElement('a');
    ele.setAttribute('href', url);
    ele.setAttribute('download', name);
    ele.style.display = 'none';
    document.body.appendChild(ele);
    ele.click();
    document.body.removeChild(ele);
}
```