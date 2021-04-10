---
author: sanmzh
title: JS防抖和节流
categories: [JavaScript]
tags: [js, utilsFn]
date: 2021-04-10 15:43:31
---

<Boxx changeTime="30000"/>

**背景**：网页中存在一些事件时，例如，`onresize`、`scroll`、`mousemove`、`mousehover` 等，用户操作时会被频繁触发，不做限制的话，有可能一秒之内执行`n`次，如果在这些函数内部执行了其他函数，尤其是执行了操作 `DOM` 的函数（操作 `DOM` 是一种很费性能的操作），如果处理不合理，很可能造成浏览器卡死、崩溃，计算机资源被浪费，降低程序运行速度。

## 防抖
```js
function debounce1(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}

/**
 * @desc  函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
 * @param  func 需要执行的函数
 * @param  wait 延迟执行时间（毫秒）
 * @param  immediate---true 表立即执行，false 表非立即执行
 **/
function debounce2(func, wait, immediate) {
    var timer;
    return function () {
        var context = this;
        var args = arguments;

        if (timer) clearTimeout(timer);
        if (immediate) {
            var callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timer = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}

function handle() {
    console.log('xx_xx');
}

window.addEventListener('resize', debounce1(handle, 1000));

window.addEventListener("mousemove",debounce2(handle, 1000, false)); // 调用非立即执行版本

```
函数防抖一般用在，连续的事件只需触发一次场景；例如：
- 搜索框搜索输入，用户介绍停止输入后自动搜索，连续输入时不进行搜索
- 输入型验证，输入完后进行验证是否合法
- 浏览器窗口大小改变，滚动等等

## 节流

```js
// 时间戳型
function throttle1(func, delay) {
　　var prev = Date.now();
　　return function() {
　　　　var context = this;
　　　　var args = arguments;
　　　　var now = Date.now();
　　　　if (now - prev >= delay) {
　　　　　　func.apply(context, args);
　　　　　　prev = Date.now();
　　　　}
　　}
}

// 定时器型
function throttle2(func, delay) {
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        if (!timer) {
            timer = setTimeout(function() {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}

function handle() {
　　console.log('xx_xx');
}

window.addEventListener('scroll', throttle1(handle, 1000));

```
函数节流一般用在，一定的时间内，多次调用只执行最后一次

- 滚动加载，加载更多，懒加载，滚动条位置
- 搜索联想功能（搜索引擎搜索框）
- 高频提交，重复提交
