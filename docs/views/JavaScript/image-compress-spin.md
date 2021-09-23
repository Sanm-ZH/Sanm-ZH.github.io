---
author: sanmzh
title: 图片上传 压缩和旋转
categories: [JavaScript]
tags: [js, utilsFn]
date: 2021-09-23 15:09:11
---

<Boxx changeTime="30000"/>

:::tip 背景&原理
**场景**：随着手机或各种拍摄设备拍摄质量越来越高，会导致需要上传的照片容量会比较大（3M、10M 或以上）。假设我们上传照片不是不注重细节（可能是为了上面的一些内容，文字等等），那上传那么高清的就没有必要了，因为上传容量大势必会导致上传过程较久，极大影响用户体验。

同时还有一些浏览器内核会因为手机拍照的长宽比，而自动旋转照片（版本内核交新的，当前时间：2021-09-23，没有这种问题）。

**原理**：利用 `canvas` 设置图片 `drawImage`，如果没有达到规定大小，就递归至规定大小之下，同时结合获取图片源信息 `EXIF` 判断图片是否旋转了，进行纠正，最后生成一个新的图片 `canvas.toBlob` 流（`blob`）数据。
:::

#### 需要工具包
[图片源信息工具包](https://github.com/exif-js/exif-js)

#### 代码
图片压缩工具类，`layer` 是 `layui`中的弹出层模块
```js
function imageCompressClass(layer) {
    var _self = this;
    var _layer = layer;

    // 当前使用设备版本
    var userAgent = navigator.userAgent;
    var isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
    var isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var str = userAgent.toLowerCase();
    var version = str.match(/cpu iphone os (.*?) like mac os/);
    var currentVersion = '0.0.0';
    if (version && version[1]) {
        currentVersion = version[1].replace(/_/g, '.');
    }
    var chromeVersion = str.match(/chrome\/([\d\.]+)/);
    var needRotate = true;
    if (chromeVersion && chromeVersion[1]) {
        needRotate = 81 > chromeVersion[1].slice(0, 2);
    }

    function init() {
        // 载入图片旋转的js
        setJsVersion('/plugin/exif-js');
    }

    this.compress = function (file, options, backFunc) {
        if (!options) {
            options = {};
        }
        var size = options.size || 3000000,
            width = options.width,
            height = options.height,
            fileType = options.fileType,
            quality = options.quality || 1;

        if (typeof options == 'number') {
            size = options;
        }

        if (file && file.size) {
            //不需要压缩
            if (size && file.size <= size) {
                backFunc(file);
                return;
            }
        } else {
            showMsg('文件参数错误，请确认是否传入了文件');
            return;
        }

        if (!/(jpg|jpeg|png)$/.test(file.type)) {
            showMsg('文件格式不是jpg或者png，请确认文件格式');
            return;
        }
        fileType = fileType || file.type;
        switch (fileType) {
            case 'jpg':
            case 'jpeg':
            case 'image/jpeg':
                fileType = 'image/jpeg';
                break;
            case 'png':
            case 'image/png':
                fileType = 'image/png';
                break;
            default:
                showMsg('不支持的文件格式');
                return;
        }
        //canvas检测。canvas用来压缩图片
        var canvasTest = document.createElement('canvas');
        if (!canvasTest || !canvasTest.getContext) {
            showMsg('浏览器不支持canvas');
            return;
        }
        canvasTest = null;

        //FileReader检测。FileReader用来转base64
        if (!window.FileReader) {
            showMsg('浏览器不支持FileReader');
            return;
        }
        var reader = new FileReader(),
            image = new Image();
        reader.readAsDataURL(file);

        reader.onload = function (e) {
            // e.target.result就是图片base64
            image.src = e.target.result;
        };
        image.onload = function () {
            var originWidth = image.width,
                originHeight = image.height;
            if (width && height) {
                if (width > originWidth && height > originHeight) {
                    //原始分辨率比设定的分辨率小，不需要压缩
                    backFunc(file);
                    return;
                }
            } else if (width) {
                if (width > originWidth) {
                    //原始分辨率比设定的分辨率小，不需要压缩
                    backFunc(file);
                    return;
                }
                height = (originHeight * width) / originWidth;
            } else if (height) {
                if (height > originHeight) {
                    //原始分辨率比设定的分辨率小，不需要压缩
                    backFunc(file);
                    return;
                }
                width = (originWidth * height) / originHeight;
            } else {
                var ratio = size > 0 && size < 1 ? size : 0.9;
                width = originWidth * ratio || 0;
                height = originHeight * ratio || 0;
            }
            EXIF.getData(image, function () {
                EXIF.getAllTags(this);
                var orientation = EXIF.getTag(this, 'Orientation');
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                context.clearRect(0, 0, width, height);
                var support = isCurrentVersionSupport(currentVersion, '13.4.0');
                if (isiOS && orientation > 1 && !support) {
                    imageModify(canvas, context, orientation, image);
                } else if (orientation > 1 && isAndroid) {
                    imageModify(canvas, context, orientation, image);
                } else if (orientation > 1 && needRotate) {
                    imageModify(canvas, context, orientation, image);
                } else {
                    canvas.width = width;
                    canvas.height = height;
                    context.drawImage(image, 0, 0, width, height);
                }
                canvas.toBlob(
                    function (blob) {
                        if (size && size > 1) {
                            if (blob.size <= size) {
                                backFunc(blob);
                            } else {
                                _self.compress(blob, options, function (newBlob) {
                                    backFunc(newBlob);
                                });
                            }
                        } else {
                            backFunc(blob);
                        }
                    },
                    fileType,
                    quality
                );
            });
        };
    };

    function imageModify(canvas, context, orientation, image) {
        var width = image.width,
            height = image.height;
        switch (orientation) {
            case 3:
                canvas.width = width;
                canvas.height = height;
                context.rotate(Math.PI);
                context.drawImage(image, -width, -height, width, height);
                break;
            case 6:
                canvas.width = height;
                canvas.height = width;
                context.rotate(0.5 * Math.PI);
                context.drawImage(image, 0, -height, width, height);
                break;
            case 8:
                canvas.width = height;
                canvas.height = width;
                context.rotate((3 * Math.PI) / 2);
                context.drawImage(image, -width, 0, width, height);
                break;
            default:
                break;
        }
    }

    function isCurrentVersionSupport(preVersion, lastVersion) {
        if (!preVersion) {
            preVersion = '';
        }
        if (!lastVersion) {
            lastVersion = '';
        }
        var sources = preVersion.split('.');
        var dests = lastVersion.split('.');
        var maxL = Math.max(sources.length, dests.length);
        var result = true;
        for (var i = 0; i < maxL; i++) {
            var preValue = sources.length > i ? sources[i] : 0;
            var preNum = isNaN(Number(preValue)) ? preValue.charCodeAt() : Number(preValue);
            var lastValue = dests.length > i ? dests[i] : 0;
            var lastNum = isNaN(Number(lastValue)) ? lastValue.charCodeAt() : Number(lastValue);
            if (preNum < lastNum) {
                result = false;
                break;
            } else if (preNum > lastNum) {
                result = true;
                break;
            }
        }
        return result;
    }

    function showMsg(msg, icon, time) {
      // 一个基于 layui 自定义的提示消息
        tipsInfoLayer(msg || '信息内容', { icon: icon || 1, time: time || 1500 }, _layer);
    }

    init();
}
```