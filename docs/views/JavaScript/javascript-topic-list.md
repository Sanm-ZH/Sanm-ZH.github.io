---
author: sanmzh
title: JS题目（持续更新）
categories: [JavaScript]
tags: [js]
date: 2022-04-11 20:37:56
---

<Boxx changeTime="30000"/>

## 定制化输出数组
:::tip 题目
- 随机生成一个长度为 `10` 的整数类型的数组
- 例如 `[2, 10, 3, 35, 5, 11, 10, 11, 20]`
- 将其排列成一个新数组，要求新数组形式如下
- `[[2, 3, 5], [10, 11], [20], [35]]`
:::

```js
// 1. 获取随机数 0 -99
// 2. 去重
// 3. 排序
// 4. 存储 0-9 10-19 20-29

// 1. 随机数
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1));
}

let initArr = Array.from({length: 10}, () => getRandomNumber(0, 99));
// 2. 去重
initArr = [...new Set(initArr)];
// 3. 排序
initArr.sort((a, b) => a - b);
// 4. 存储
const map = {};
initArr.forEach(item => {
  const key = Math.floor(item / 10);
  if(!map[key]) {
    map[key] = []
  }
  map[key].push(item);
});

const result = [];
for(const key in map) {
  result.push(map[key]);
}
```

## 树结构改为平铺结构
```js
const tree = {
  a: {
    b: 1,
    c: {
      d: '123'
    }
  },
  e: '456'
}
// 结果
const outInput = {
  'a.b': 1,
  'a.b.c.d': '123',
  'a.e': '456'
};

// 方法1：递归
function flatTree(tree, prevKey = '', result = {}) {
  for(const key in tree) {
    if(obj.hasOwnProperty(key)) {
      var newKey = `${prevKey}${key}`;
      if(typeof tree[key] === 'object') {
        flatTree(tree[key], `${prevKey}.`, result);
      } else {
        result[newKey] = tree[key];
      }
    }
  }
}
```