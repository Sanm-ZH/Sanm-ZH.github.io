---
author: sanmzh
title: Array Reduce方法
categories: [JavaScript]
tags: [js, array]
date: 2021-11-19 11:32:24
---

<Boxx changeTime="30000"/>

### 求和，相乘
```js
// 求和
[1, 2, 3, 4, 5, 6].reduce((x, y) => x + y);
// 21

// 相乘
[1, 2, 3, 4, 5, 6].reduce((x, y) => x * y);
// 720
```

### 最大值
```js
[1, 2, 3, 4, 5, 6].reduce((x, y) => Math.max(x, y));

// 推荐使用下面方法
Math.max(...[1, 2, 3, 4, 5, 6]);
```

