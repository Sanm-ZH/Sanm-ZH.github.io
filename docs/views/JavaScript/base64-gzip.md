---
author: sanmzh
title: JS gzip字符串压缩解析
categories: [JavaScript]
tags: [js, gzip]
date: 2021-09-22 11:44:37
---

<Boxx changeTime="30000"/>

::: tip 背景
字符串进行字节流加密压缩，或后台 `websocket` 吞吐量大，可以压缩成一个 `base64-gzip`
这就是涉及压缩和解析的相关需求
:::

## 相关工具类
### Base64
一个通用 `base64` 类
```js
// base64.js

/* Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
 * Version: 1.0
 * LastModified: Dec 25 1999
 * This library is free.  You can redistribute it and/or modify it.
 */

/*
 * Interfaces:
 * b64 = base64encode(data);
 * data = base64decode(b64);
 */

(function() {

    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var base64DecodeChars = new Array(
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
        -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
        -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    
    function base64encode(str) {
        var out, i, len;
        var c1, c2, c3;
    
        len = str.length;
        i = 0;
        out = "";
        while(i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if(i == len)
        {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    }
    
    function base64decode(str) {
        var c1, c2, c3, c4;
        var i, len, out;
    
        len = str.length;
        i = 0;
        out = "";
        while(i < len) {
        /* c1 */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while(i < len && c1 == -1);
        if(c1 == -1)
            break;
    
        /* c2 */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while(i < len && c2 == -1);
        if(c2 == -1)
            break;
    
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
    
        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if(c3 == 61)
            return out;
            c3 = base64DecodeChars[c3];
        } while(i < len && c3 == -1);
        if(c3 == -1)
            break;
    
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
    
        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if(c4 == 61)
            return out;
            c4 = base64DecodeChars[c4];
        } while(i < len && c4 == -1);
        if(c4 == -1)
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }
    
    if (!window.btoa) window.btoa = base64encode;
    if (!window.atob) window.atob = base64decode;
    
})();
```

### pako.js
使用 `pako` 进行 `gzip` 相关操作
> [https://github.com/nodeca/pako](https://github.com/nodeca/pako)

## 用法
### 解析
```js
var b64Data = 'H4sIAAAAAAAAAEtMSk4BABHNgu0EAAAA'
var strData = atob(b64Data)
var charData = strData.split('').map(function(x) {
  return x.charCodeAt(0)
});
var data = pako.inflate(result)
var result = String.fromCharCode.apply(null, data)

console.log(result) // abcd

// or
var b64Data = 'H4sIAAAAAAAAAEtMSk4BABHNgu0EAAAA'
var strData = atob(b64Data)
var charData = strData.split('').map(function(x) {
  return x.charCodeAt(0)
});
var data = new Uint8Array(charData)
data = pako.inflate(result)
var result = String.fromCharCode.apply(null, new Uint16Array(data))

console.log(result) // abcd
```

### 压缩
```js
var str = 'abcd'
var charData = pako.gzip(str)
var data = String.fromCharCode.apply(null, charData)
var result = btoa(data)

console.log(result) // H4sIAAAAAAAAA0tMSk4BABHNgu0EAAAA
```