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


### 快速排序
:::tip 原理
和归并排序一致，它也使用了分治策略的思想，它也将数组分成一个个小数组，但与归并不同的是，它实际上并没有将它们分隔开。

快排使用了分治策略的思想，所谓分治，顾名思义，就是分而治之，将一个复杂的问题，分成两个或多个相似的子问题，在把子问题分成更小的子问题，直到更小的子问题可以简单求解，求解子问题，则原问题的解则为子问题解的合并。

快排的过程简单的说只有三步：
- 首先从序列中选取一个数作为基准数
- 将比这个数大的数全部放到它的右边，把小于或者等于它的数全部放到它的左边 （一次快排 `partition`）
- 然后分别对基准的左右两边重复以上的操作，直到数组完全排序
:::

#### 具体按以下步骤实现：

1. 创建两个指针分别指向数组的最左端以及最右端
2. 在数组中任意取出一个元素作为基准
3. 左指针开始向右移动，遇到比基准大的停止
4. 右指针开始向左移动，遇到比基准小的元素停止，交换左右指针所指向的元素
5. 重复`3，4`，直到左指针超过右指针，此时，比基准小的值就都会放在基准的左边，比基准大的值会出现在基准的右边
6. 然后分别对基准的左右两边重复以上的操作，直到数组完全排序

:::warning 注意
如何选择基准该如何？

最简单的一种做法是每次都是选择最左边的元素作为基准

但这对几乎已经有序的序列来说，并不是最好的选择，它将会导致算法的最坏表现。还有一种做法，就是选择中间的数或通过 `Math.random()` 来随机选取一个数作为基准，下面的代码实现就是以随机数作为基准。
:::

#### 图示
![快速排序](../../.vuepress/public/quickSort.gif)

#### 代码
```js
let quickSort = (arr) => {
  quick(arr, 0 , arr.length - 1)
}

let quick = (arr, left, right) => {
  let index
  if(left < right) {
    // 划分数组
    index = partition(arr, left, right)
    if(left < index - 1) {
      quick(arr, left, index - 1)
    }
    if(index < right) {
      quick(arr, index, right)
    }
  }
}

// 一次快排
let partition = (arr, left, right) => {
  // 取中间项为基准
  var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
      i = left,
      j = right
  // 开始调整
  while(i <= j) {
    
    // 左指针右移
    while(arr[i] < datum) {
      i++
    }
    
    // 右指针左移
    while(arr[j] > datum) {
      j--
    }
    
    // 交换
    if(i <= j) {
      swap(arr, i, j)
      i += 1
      j -= 1
    }
  }
  return i
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 测试
let arr = [1, 3, 2, 5, 4]
quickSort(arr)
console.log(arr) // [1, 2, 3, 4, 5]
// 第 2 个最大值
console.log(arr[arr.length - 2])  // 4
```

快排是从小到大排序，所以第 k 个最大值在 n-k 位置上

#### 复杂度
- **时间复杂度**：`O(nlog~2~n)`
- **空间复杂度**：`O(nlog~2~n)`