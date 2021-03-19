---
author: sanmzh
title: 四舍五入新约
categories: [JavaScript]
tags: [js,utilsFn]
date: 2021-03-12 17:26:37
---

<Boxx changeTime="30000"/>

## 新约
- 被修约的数字小于5时，该数字舍去；
- 被修约的数字大于5时，则进位；
- 被修约的数字等于5时，要看5前面的数字，若是奇数则进位，若是偶数则将5舍掉，即修约后末尾数字都成为偶数；若5的后面还有不为“0”的任何数，则此时无论5的前面是奇数还是偶数，均应进位。

::: warning 总结
四舍六入五考虑，</br>
五后非零就进一，</br>
五后皆零看奇偶，</br>
五前为偶应舍去，</br>
五前为奇要进一。
:::

## 处理方法
```js
function newFixed(num, dp) {
    var d = dp || 0;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8);
    var i = Math.floor(n), f = n - i;
    var e = 1e-8;
    var r = (f > 0.5 - e && f < 0.5 + e) ?
                ((i % 2 == 0) ? i : i + 1) : Math.round(n);
    return d ? r / m : r;
}

newFixed(2.424, 2)  // 2.42
newFixed(2.426, 2)  // 2.43
newFixed(2.425, 2)  // 2.42
newFixed(2.435, 2)  // 2.44
newFixed(2.4250, 2)  // 2.42
newFixed(2.4251, 2)  // 2.43
```