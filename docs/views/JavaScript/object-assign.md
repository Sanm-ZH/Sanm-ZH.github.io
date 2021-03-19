---
author: sanmzh
title: ES5- 实现ES6对象合并方法
categories: [JavaScript]
tags: [js,utilsFn]
date: 2021-03-19 10:16:07
---

<Boxx changeTime="30000"/>

## 部署一个ES6对象合并方法

```js
// 部署一个ES6对象合并方法 Object.assign
function zyEs6AssignPolyfill() {
    if (!Object.assign) {
        Object.defineProperty(Object, 'assign', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (target, firstSource) {
                'use strict';
                if (target === undefined || target === null)
                    throw new TypeError('Cannot convert first argument to object');
                var to = Object(target);
                for (var i = 1; i < arguments.length; i++) {
                    var nextSource = arguments[i];
                    if (nextSource === undefined || nextSource === null) continue;
                    var keysArray = Object.keys(Object(nextSource));
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
                    }
                }
                return to;
            }
        });
    }
}
zyEs6AssignPolyfill();
```