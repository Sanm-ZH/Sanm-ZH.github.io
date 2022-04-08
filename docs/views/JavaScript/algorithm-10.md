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

## 字符串中的排列
```js
Input: s1 = "ab", s2 = "eidbao"
Output: true
Input: s1 = "aa", s2 = "eidbao"
Output: false

// TODO: 疑问 排列

const checkPermutation = function(s1, s2) {
  const len1 = s1.length, len2 = s2.length;
  if (len1 > len2) return false;

  const count = Array(26).fill(0);
  for (let i = 0; i < len1; i++) {
      count[s1.charCodeAt(i)-97]++;
      count[s2.charCodeAt(i)-97]--;
  }
  if (!count.some(e => e !== 0)) return true;

  for (let i = len1; i < len2; i++) {
      count[s2.charCodeAt(i)-97]--;
      count[s2.charCodeAt(i-len1)-97]++;
      if (!count.some(e => e !== 0)) return true;
  }
  return false;
};
```

## 最长有效括号
```js
Input: "(()"
Output: 2
Input: ")()())"
Output: 4

// TODO: 疑问 排列

const longestValidParentheses = function(S) {
  let stack = [-1], ans = 0;
  for (let i = 0; i < S.length; i++)
    if (S[i] === '(') stack.push(i)
    else if (stack.length === 1) stack[0] = i
    else stack.pop(), ans = Math.max(ans, i - stack[stack.length-1])
  return ans
};
```