---
author: sanmzh
title: JS九种排序
categories: [JavaScript]
tags: [algorithm, sort, js]
date: 2021-08-16 10:06:04
---

<Boxx changeTime="30000"/>

### 冒泡排序
:::tip 原理
从左往右，相邻比较，如果前一个大于后一个（正序，倒序相反），则交换，一轮下来最大值就在最右边了，一轮轮之后就完成了排序
:::
#### 图示
![冒泡排序](../../.vuepress/public/bubbleSort.gif)
#### 代码
```js
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// 改进冒泡排序
function bubbleSortImprove(arr) {
    for (let i = 0; i < arr.length; i++) {
        // 提前退出冒泡循环的标识位
        let flag = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
                // 表示发生了数据交换
            }
        }
        // 没有数据交换
        if(!flag) break
    }
}


// 测试
let arr = [1, 3, 2, 5, 4]
bubbleSort(arr)
console.log(arr) // [1, 2, 3, 4, 5]

let arr1 = [1, 3, 2, 5, 4]
bubbleSortImprove(arr1)
console.log(arr1) // [1, 2, 3, 4, 5]
```
#### 复杂度
- **时间复杂度**：最好时间复杂度 `O(n)`，平均时间复杂度 `O(n^2^)`
- **空间复杂度**：`O(1)`

### 选择排序
:::tip 原理
从未排序的序列中找到最大（或最小的）放在已排序序列的末尾（为空则放在起始位置），重复该操作，知道所有数据都已放入已排序序列中
:::
#### 图示
![选择排序](../../.vuepress/public/selectionSort.gif)
#### 代码
```js
function selectionSort(arr) {
  let length = arr.length,
      indexMin
  for(let i = 0; i < length - 1; i++) {
    indexMin = i
    for(let j = i; j < length; j++) {
      if(arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    if(i !== indexMin) {
      let temp = arr[i]
      arr[i] = arr[indexMin]
      arr[indexMin] = temp
    }
  }
}

// 测试
let arr = [1, 3, 2, 5, 4]
selectionSort(arr)
console.log(arr) // [1, 2, 3, 4, 5]
```
#### 复杂度
- **时间复杂度**：`O(n^2)`
- **空间复杂度**：`O(1)`

### 归并排序
:::tip 原理
采用了分治策略，将数组分成2个较小的数组，然后每个数组再分成两个更小的数组，直至每个数组里只包含一个元素，然后将小数组不断的合并成较大的数组，直至只剩下一个数组，就是排序完成后的数组序列

步骤：
- 将原始序列平分成两个小数组
- 判断小数组长度是否为1，不为1则继续分裂
- 原始数组被分称了长度为1的多个小数组，然后合并相邻小数组（有序合并）
- 不断合并小数组，直到合并称一个数组，则为排序后的数组序列
:::
#### 图示
![归并排序](../../.vuepress/public/mergeSort.gif)
#### 代码
```js
function mergeSort(arr) {
  return mergeSortRec(arr)
}

// 若分裂后的两个数组长度不为 1，则继续分裂
// 直到分裂后的数组长度都为 1，
// 然后合并小数组
function mergeSortRec(arr) {
  let length = arr.length
  if(length === 1) {
    return arr
  }
  let mid = Math.floor(length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid, length)
  return merge(mergeSortRec(left), mergeSortRec(right))
}

// 顺序合并两个小数组left、right 到 result
function merge(left, right) {
  let result = [],
      ileft = 0,
      iright = 0
  while(ileft < left.length && iright < right.length) {
    if(left[ileft] < right[iright]){
      result.push(left[ileft ++])
    } else {
      result.push(right[iright ++])
    }
  }
  while(ileft < left.length) {
    result.push(left[ileft ++])
  }
  while(iright < right.length) {
    result.push(right[iright ++])
  }
  return result
}

let arr = [1, 3, 2, 5, 4]
console.log(mergeSort(arr)) // [1, 2, 3, 4, 5]
```
#### 复杂度
- **时间复杂度**：`O(nlog~2n)`
- **空间复杂度**：`O(n)`
