---
author: sanmzh
title: 10道js算法
categories: [JavaScript]
tags: [algorithm, js]
date: 2022-04-06 11:29:02
---

<Boxx changeTime="30000"/>

## 查找数组中缺失的数字
```js
Input: [1, 2, 3, 4, 6, 7, 8, 9, 10]
Output: 5

const findMissing = function(input) {
  let n = input.length + 1;

  let sum = 0;
  for (let i in input) {
    sum += input[i];
  }

  return Math.floor((n * (n + 1)) / 2) - sum;
};

// 算术级数 (n * (n + 1)) / 2
```

## 反转整数
```js
Input: num = 123
Output: 321
Input: num = -123
Output: -321

const reverse = function(num) {
    let result = 0;
    while (num !== 0) {
      result = result * 10 + num % 10;
      // Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分
      num = Math.trunc(num / 10);
    }

    if (result > 2**31 || result < -(2**31)) return 0;
    return result;
};
```

## 数组排列
```js
Input: [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const permute = function(nums) {
    let results = [];

    let go = (current) => {
      if (current.length === nums.length){
        results.push(current);
        return;
      }
      nums.forEach(n => {
        if (!current.includes(n)){
          go([...current, n]);
        }
      });
    }
    go([]);
    return results;
};
```
