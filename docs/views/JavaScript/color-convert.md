---
author: sanmzh
title: 颜色转换 rgb(255,255,255) -> "#FFFFFF"
categories: [JavaScript]
tags: [js,utilsFn,css]
date: 2021-04-25 11:11:48
---

<Boxx changeTime="30000"/>

:::tip 思路
1. 从 `rgb(255, 255, 255)` 中提取出 `r=255` 、 `g=255` 、 `b=255`
2. 将 `r` 、 `g` 、 `b` 转换为十六进制，不足两位则补零
3. 组合 `#`
:::

## 提取r、g、b
### match()方法
利用 `match()` 方法，取出`r`,`g`,`b`
```js
function rgbToHex(sRGB) {
    const reg = /^(rgb|RGB)\(\s*(\d{1,3})\s*,\s*(\d{1,3}\s*),\s*(\d{1,3})\s*\)$/
    const rbg = sRGB.match(reg)
    return rbg
}
// test
rgbToHex('rgb(255,255,255)')
// ["rgb(255,255,255)", "rgb", "255", "255", "255", index: 0, input: "rgb(255,255,255)", groups: undefined]0: "rgb(255,255,255)"1: "rgb"2: "255"3: "255"4: "255"groups: undefinedindex: 0input: "rgb(255,255,255)"length: 5__proto__: Array(0)
rgbToHex('rgb(13, 101, 255)')
// ["rgb(13, 101, 255)", "rgb", "13", "101", "255", index: 0, input: "rgb(13, 101, 255)", groups: undefined]
```
`r=rgb[2]`、`g=rgb[3]`、`b=rgb[4]`

```js
function rgbToHex(sRGB) {
    const rgb = sRGB.match(/\d+/g);
    return rgb
}

// test
rgbToHex('rgb(255, 255, 255)')
// ["255", "255", "255"]
rgbToHex('rgb(13, 101, 255)')
// ["13", "101", "255"]
```
### replace + split
`rgb(255, 255, 255)` 的每一个色值是通过 `,` 连接一起的
```js
function rgbToHex(sRGB) {
    const rgb = sRGB.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
    return rgb
}

// test
rgbToHex('rgb(255, 255, 255)')
// ["255", "255", "255"]
rgbToHex('rgb(13, 101, 255)')
// ["13", "101", "255"]
```
## 转为十六进制、不足补零
转换为十六进制，可采用：

- `(+n).toString(16)` 或 `Number(n).toString(16) `
- `parseInt(n, 16)`

不足两位则补零：
- `('0' + r16).slice(-2)`
- `r16.padStart(2, '0')`
- `(r < 16? '0':'') + r16`
- `r16.length < 2 ? '0' + r16 : r16`
- `((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b)).toString(16).slice(1)`

### 组合
### reduce
输出可为大写（ `#FFFFFF` ）或小写字符（ `#ffffff` ）
```js
rgb.reduce((acc, cur) => acc + hex, '#').toUpperCase()
```
**或** 通过 `+`字符串拼接