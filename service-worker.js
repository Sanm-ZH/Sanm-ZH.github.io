/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4c8076646b6bae0bdd827f619cb2a1fb"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.112ab001.css",
    "revision": "3245ee944a947158ada9be71fbf6dfd8"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bubbleSort.33a947c7.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "assets/img/countingSort.827d96b8.gif",
    "revision": "827d96b8ca3682e8775f4916f22b45ac"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/insertSort.366d07ff.jpg",
    "revision": "366d07ffc40fb12aa8780b791cf86b90"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/mergeSort.cdda3f11.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
  },
  {
    "url": "assets/img/quickSort.c411339b.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "assets/img/quickSort2.c411339b.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "assets/img/radixSort.6690b105.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
  },
  {
    "url": "assets/img/sort-divide.3b37f014.png",
    "revision": "3b37f014fba8e0f89ef690c09ccf29df"
  },
  {
    "url": "assets/img/sort-merge.b5b2bd5e.png",
    "revision": "b5b2bd5e7e6234404a932704eaf2dc69"
  },
  {
    "url": "assets/img/sort-triangle.2b2fe723.png",
    "revision": "2b2fe7233fb2f4f1abfa7d4075006dd8"
  },
  {
    "url": "assets/img/vue3-doc-home.9d103c9f.jpg",
    "revision": "9d103c9f522aa15d9aaaa8df4734ae81"
  },
  {
    "url": "assets/img/vue3-ts-vite.4931da9a.jpg",
    "revision": "4931da9a7dc6b6f08832ef3c4c1bc36e"
  },
  {
    "url": "assets/js/1.8bd2d91b.js",
    "revision": "f4f3ffe9040e5ab8d4bb0086edf2ec86"
  },
  {
    "url": "assets/js/10.2dbc2b31.js",
    "revision": "745bd529916b8c32c6e030a2805d25a3"
  },
  {
    "url": "assets/js/11.4a76b79b.js",
    "revision": "29c99ca84927c75e394ef91f86771f61"
  },
  {
    "url": "assets/js/12.a9aad949.js",
    "revision": "bde690422c8cd4d0a9c72f4816802b48"
  },
  {
    "url": "assets/js/13.24a30a2f.js",
    "revision": "88dce7d53094faa03efb0fe6ab92544d"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.d9827512.js",
    "revision": "a139f52d0638c9ec07d57384aea523a2"
  },
  {
    "url": "assets/js/16.e1cae165.js",
    "revision": "f37be97a842a81266006886581527266"
  },
  {
    "url": "assets/js/17.e13b6984.js",
    "revision": "a990c39743688808f9de859a7b79f2bc"
  },
  {
    "url": "assets/js/18.93ec21e2.js",
    "revision": "3db852903ef3b35ea475bb0a2262ee9f"
  },
  {
    "url": "assets/js/19.ef423df0.js",
    "revision": "1ee327d07f187227d1c0b9a6a397b2b7"
  },
  {
    "url": "assets/js/2.8da2a3cf.js",
    "revision": "6cc7ef250e62d4461602fc96fe9de15b"
  },
  {
    "url": "assets/js/20.1dce0569.js",
    "revision": "4f99e99a10d42843634f6040a4b73b0c"
  },
  {
    "url": "assets/js/21.911cd16b.js",
    "revision": "547c51e8d047eb985008a648f37a36e4"
  },
  {
    "url": "assets/js/22.87ed77d0.js",
    "revision": "fc9a1bc72ae294605a23ff595327a495"
  },
  {
    "url": "assets/js/23.7edef2ab.js",
    "revision": "d829381b31297e78ed0e1e0f12ee6696"
  },
  {
    "url": "assets/js/24.7336338c.js",
    "revision": "23746d35c3a703c7e0094bd1c041538c"
  },
  {
    "url": "assets/js/25.4ed3fd12.js",
    "revision": "80ba034e451b04a4eb4d5d0eca9bd12e"
  },
  {
    "url": "assets/js/26.d6c0dc69.js",
    "revision": "34f25fc09ce69cd511fe64c375d5ff0d"
  },
  {
    "url": "assets/js/27.a001510f.js",
    "revision": "7a72a5f28e7ea5c2b130023576b47f4c"
  },
  {
    "url": "assets/js/28.10f865ca.js",
    "revision": "c510789facdec170467bdb5ced64de40"
  },
  {
    "url": "assets/js/29.6e7d4a07.js",
    "revision": "10743c53d5d1ced324ea2a2a93a412ef"
  },
  {
    "url": "assets/js/30.13b9a5ba.js",
    "revision": "8a1e8c3579b8447a660ac8844aa4f00d"
  },
  {
    "url": "assets/js/31.a7f971db.js",
    "revision": "22d5cda04afc60274ac601dff260a888"
  },
  {
    "url": "assets/js/32.8989ed03.js",
    "revision": "5984e60105a6ddb612c1973d1f5bf79c"
  },
  {
    "url": "assets/js/33.d5a8e185.js",
    "revision": "c4c2dfe314e073dc4dc58a006996c493"
  },
  {
    "url": "assets/js/34.d8d40695.js",
    "revision": "8795e2b5c76f4e14ef7b83aeb55c418e"
  },
  {
    "url": "assets/js/35.35ea0c84.js",
    "revision": "896f7d6f662d6f917985e9f6c8be1789"
  },
  {
    "url": "assets/js/36.3e7de87b.js",
    "revision": "4e7a74e9714160da026b65df43a6c16f"
  },
  {
    "url": "assets/js/37.1c8c888f.js",
    "revision": "a2e4bf15bb74937a769227847d679105"
  },
  {
    "url": "assets/js/38.c7f44b48.js",
    "revision": "39061f3be36ad6f6cae930413e28831a"
  },
  {
    "url": "assets/js/39.112b4458.js",
    "revision": "f004413142b6fa087c62bc400ccfbe4e"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.a62ed9f9.js",
    "revision": "76487d7f8cbaddc8dd1935ee316cfdfa"
  },
  {
    "url": "assets/js/41.e1b2cb6d.js",
    "revision": "5556e49d48144cccadcf750eb619dfb2"
  },
  {
    "url": "assets/js/42.1c349039.js",
    "revision": "275c4aebc99ad4486df8ca1d9ce2c21a"
  },
  {
    "url": "assets/js/43.18b0a21b.js",
    "revision": "6859a9fce9b4c4ce1603baf03c3bb595"
  },
  {
    "url": "assets/js/44.df3ddb3c.js",
    "revision": "eeba995bc092a769af267c987ba62a73"
  },
  {
    "url": "assets/js/45.6868cbae.js",
    "revision": "b7859499669caa399e85c50a6aaec701"
  },
  {
    "url": "assets/js/46.0c4be46d.js",
    "revision": "79d762bfb7aa0a2b72700cc37002823e"
  },
  {
    "url": "assets/js/47.df9e55da.js",
    "revision": "40f0317c75386109af883c0c5d07bc42"
  },
  {
    "url": "assets/js/48.fe207e24.js",
    "revision": "700d8ad442b9a8fbd3b66ccfed507707"
  },
  {
    "url": "assets/js/49.7605ad49.js",
    "revision": "1df20e2b9f536caf2bfe492d11681500"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.21b5751b.js",
    "revision": "d507cd83798cfba5a3e22dc59ff6c83c"
  },
  {
    "url": "assets/js/51.604aa45c.js",
    "revision": "561ee9a6c331cd0eff91f50a1297a49f"
  },
  {
    "url": "assets/js/52.1090b50d.js",
    "revision": "e9a119cd5837680944366525eaedec9e"
  },
  {
    "url": "assets/js/53.0d3040e2.js",
    "revision": "0c02e01247378dea1c53afaa88585c32"
  },
  {
    "url": "assets/js/54.3db374d9.js",
    "revision": "4c1ca3d726c0897a2e3972ead480c921"
  },
  {
    "url": "assets/js/55.cb04c847.js",
    "revision": "783f819b618442421ed2190ee86f73f4"
  },
  {
    "url": "assets/js/56.1a1174e4.js",
    "revision": "21d0ae611aae6558a4f275f65bb3465f"
  },
  {
    "url": "assets/js/57.e9a55b06.js",
    "revision": "eec6e60ddd2001c9bbd9734c79ba3d56"
  },
  {
    "url": "assets/js/58.1489774f.js",
    "revision": "224b906bcb8aa73b8a4eabb70205a295"
  },
  {
    "url": "assets/js/59.43921433.js",
    "revision": "dd3040763fe11ac8877e4f5753d7ec2a"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.0769886c.js",
    "revision": "82e3b3bad549ae4a962b13817d6eee31"
  },
  {
    "url": "assets/js/61.880656fe.js",
    "revision": "1d0fb13c34276b370d573a40b1ae611b"
  },
  {
    "url": "assets/js/62.379718b5.js",
    "revision": "8abecb56fc152bbe54cd66dc700ff973"
  },
  {
    "url": "assets/js/63.b1476fcb.js",
    "revision": "6f6bdce0c843bea2e91711226d65f3bf"
  },
  {
    "url": "assets/js/64.79d1eb28.js",
    "revision": "9aaf89822ae18117965f822f5d185f9b"
  },
  {
    "url": "assets/js/65.7c5492d6.js",
    "revision": "525963909a7603c4fce870cb9665744f"
  },
  {
    "url": "assets/js/66.fc3213a7.js",
    "revision": "c08093ac3f2eface3d94200abf919126"
  },
  {
    "url": "assets/js/67.cec2761c.js",
    "revision": "25b1b5b8e222d2bacd63435a5df8bdd4"
  },
  {
    "url": "assets/js/68.9dd6baf9.js",
    "revision": "06d9375e7a183596b2f87dd614d917d5"
  },
  {
    "url": "assets/js/69.ae4a2b9c.js",
    "revision": "dc72b549c969cc198553aba60c12a622"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.99b4ef7b.js",
    "revision": "ce3bb68d7a7ec8b383dca5219f62406c"
  },
  {
    "url": "assets/js/71.0942e68b.js",
    "revision": "2d571527292e5c2a2b86fe2b27c7056d"
  },
  {
    "url": "assets/js/72.8e3da66e.js",
    "revision": "9fa34502e56224fa02fc004813488224"
  },
  {
    "url": "assets/js/73.40d5400e.js",
    "revision": "5635f7b27346f0bcf675f35d2b6a1ef9"
  },
  {
    "url": "assets/js/74.31906848.js",
    "revision": "d52c2bf09b68dbcfe59acfe714fd2ade"
  },
  {
    "url": "assets/js/75.d9603e97.js",
    "revision": "0922ed19df190c57bd22fe1883c4bbdf"
  },
  {
    "url": "assets/js/76.f618166a.js",
    "revision": "8b206ed35e790e63abc020159e3e5640"
  },
  {
    "url": "assets/js/77.97a10621.js",
    "revision": "c2141e4c8bea93fae40fafaf7353e4a2"
  },
  {
    "url": "assets/js/78.c3743b70.js",
    "revision": "585f683c72273f6c0728811aa2dba5d8"
  },
  {
    "url": "assets/js/79.adb20595.js",
    "revision": "2ecd5e6b3c3eee80e75f7e51c0824679"
  },
  {
    "url": "assets/js/8.fb700b15.js",
    "revision": "17f0fb49dc4b2e419c612efdc0d2f447"
  },
  {
    "url": "assets/js/80.59d9f3a6.js",
    "revision": "9a50cdbad95c73f53801cd3097b8916a"
  },
  {
    "url": "assets/js/81.0649c997.js",
    "revision": "9f35b61d1b6679d8af6755e6d1a43ff3"
  },
  {
    "url": "assets/js/82.c521e848.js",
    "revision": "13b7b93b7d4428a63bfe80ed2cdc5e94"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.8aa24d67.js",
    "revision": "2c78963fd067a3c969664ffa42bfd049"
  },
  {
    "url": "assets/vue3-doc-home.jpg",
    "revision": "9d103c9f522aa15d9aaaa8df4734ae81"
  },
  {
    "url": "assets/vue3-ts-vite.jpg",
    "revision": "4931da9a7dc6b6f08832ef3c4c1bc36e"
  },
  {
    "url": "bubbleSort.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "categories/app/index.html",
    "revision": "494079f6fe3645de1a2dc22491cee12f"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "5c3f7fe42df1fbd18ca51bdf8a49708d"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "7886265e95ddc19c6f08071f84d63781"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "35299462bcb3e01dcb23a21e472083c6"
  },
  {
    "url": "categories/index.html",
    "revision": "6e2549712feffe536c9363f4309c0fbc"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "279f3d62dd4a3ed0b8c94a0ccca3ba70"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "33963a2967e3647ad95caa2431706c65"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "24e5f455b64c182f5dbed654293a4996"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "3dcd42952aa89ffc00972415e79644dd"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "afb41cd29d92629724084a928403dc09"
  },
  {
    "url": "categories/other/index.html",
    "revision": "b21f30083d74ab86b7ccc9f4542bf40f"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "8e1b5b6d5fe9f3f35da464c3049fd750"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "1edc63e8c0dffbffa53a7804a56eb554"
  },
  {
    "url": "countingSort.gif",
    "revision": "827d96b8ca3682e8775f4916f22b45ac"
  },
  {
    "url": "green-book.jpg",
    "revision": "608eb7a85f964c86a3f9d4a9ed59f1e9"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "ee9693b6d1323c35ab47222d8f2cb237"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "110f83b3656390243816823b863d19f9"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "083fd5693709f1bb756d7146f92cfff0"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "0ad9644b653ab367462d48e9cb31653f"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "6537810f5c1f67bd9f285ab8f817dc33"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "7afb2b4fd95bd147a9f9c9dcd8be96a7"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "322c094e811fa22948fa838553168be6"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "6537810f5c1f67bd9f285ab8f817dc33"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "86902dea6b16aaf02b26ef1299313344"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "9c4b5b6a6755765277a8d344cef51a90"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "e217effa9bf49048ebe5f0c3c0b9bf83"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "73680937b571e80d379a0d099979548f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "cf0c951947bdfe5abdfc0fe63e7ff297"
  },
  {
    "url": "index.html",
    "revision": "1dd4e9c0cea2d9565ac90abf457ce5e7"
  },
  {
    "url": "insertSort.jpg",
    "revision": "366d07ffc40fb12aa8780b791cf86b90"
  },
  {
    "url": "kesshouban/model.2048/texture_00.png",
    "revision": "2e6411636e81d3e58e8315bfa586ba8d"
  },
  {
    "url": "lufei.jpg",
    "revision": "2496fc988426e1c3c1a3b88f1983b51b"
  },
  {
    "url": "mergeSort.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
  },
  {
    "url": "quickSort.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "quickSort2.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "radixSort.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
  },
  {
    "url": "self-blog.jpg",
    "revision": "adb6dc7dc0094c1d160cb8fd601514cd"
  },
  {
    "url": "self-resume.jpg",
    "revision": "0b07c2fcf77fb875cd329e73ff1e1f38"
  },
  {
    "url": "sort-divide.png",
    "revision": "3b37f014fba8e0f89ef690c09ccf29df"
  },
  {
    "url": "sort-merge.png",
    "revision": "b5b2bd5e7e6234404a932704eaf2dc69"
  },
  {
    "url": "sort-triangle.png",
    "revision": "2b2fe7233fb2f4f1abfa7d4075006dd8"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "e5bffd213f9b46d1e0a113682efe902f"
  },
  {
    "url": "tag/App/index.html",
    "revision": "405e52ffda271b5056e398e124ad4c66"
  },
  {
    "url": "tag/array/index.html",
    "revision": "17c0f95e7477c6069a3d990b1726c9ee"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "d79ede1ffb768eb63079c51c730b5208"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "17a663ad755a690cb65e84804548ec82"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c2524aaac7824a7a91735155f4ad89d4"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "a90f60134d3c68f10b4465535da6dbf7"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "8cf766326f30e3494276d8f63d80292f"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "75497b9acc5c42e3a741f9e804757872"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "c7ef48febb5e4fcfb6f2e4300b21d1a5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ae8a3a76549a5e13fcab6b3260779494"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "c8e15371d747cbac8dae056d4572a591"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "ed0b17f05b7c2096456446b380158ede"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "1cfc768149e3e5c1060425b7aa7b688e"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "a4caaa29f3b46e03f29a5b0a8e84d5a8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "edc9de7af69a8fd355bcacd98664ee47"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "5de49f0a2e68edfb100889bc0371a29b"
  },
  {
    "url": "tag/index.html",
    "revision": "fa3a0b2d3591e368c8d50ba044b85ed3"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "e88a143008c320add983425ced2e5482"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "ef52426d7529aa396513f136fc929eb8"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "a74f945d98d878e322fd40d707f63ca3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6d97277fc4e7c6a655dcf835dfa1c785"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "ff041d0e2d8c60b718a390b24b743722"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "aeb7a3dba6d884f3078398060ea661f5"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "41b3717dc0040c50d6f814c7d097f4eb"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "cee582c9816e754093c4585fb73120be"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "49c554f904b822b4fce084c1c0acb3ca"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "b8e8abc4a9e0ef11d4119386fcb604a1"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "cbc68fde74182fa275b15769e03afdc9"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "68ce699559c8030b04ec46896b180657"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "5a3df1ebc1acbfb52daa752997951cb9"
  },
  {
    "url": "tag/project/index.html",
    "revision": "ecf0d318e4b43e9813fd41772fc96b6a"
  },
  {
    "url": "tag/react/index.html",
    "revision": "272ca54761d9c3dd5ca3f927589fc54a"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "fb3b01a458c222f1c9c9d3055defa492"
  },
  {
    "url": "tag/router/index.html",
    "revision": "adf4d4d367e666e0278ad7fccd6240f2"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "1d0f173f03be251341cf868d8d2aab80"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "0d54618c43c50f78829a3119549ab96a"
  },
  {
    "url": "tag/style/index.html",
    "revision": "b9d03bdc398507b712542b219d7181e0"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "0094ab8b335a58fa0cda431715d48aa8"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "579c31f48f4bd8c493905407397fe6d2"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "878d3058c954da9cab356a4876daaa3b"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "9e8c77c771fe799b89c7ee0372940f14"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "07178053fdead89ccdc92a23aa6db901"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "e60aaf24743201781aee8be165ca0223"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "e4f5faf61daba4a721409e602e82e857"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "c6f676dbb22318fed9ded91020ccd2cf"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ef972115eb0566811030f8c7e76c1b09"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "4348808fc193edfde402332e4b4a876d"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "98af708fb59a90edce7da35a1d763b6c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "298c7f574360122340cd4b2033982a60"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "e5f25c430a5b289d66960472769bc314"
  },
  {
    "url": "timeline/index.html",
    "revision": "61b664346171fb72f24b101687acda6f"
  },
  {
    "url": "views/about/index.html",
    "revision": "3741eb4b78866e8f84d0cae59d9ffa60"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "7ba08b75cac44d8095c6c8458a7b9ada"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "2998037d53f58549084529f34bcdc932"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "2f0a84e98d0f5c1fb5d5a24a9854bea5"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "2233bed2e883df078fb32355b277889f"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "8cc0d802eec6d00a56ff0c6eacc41c36"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "c33a8e329b6761a5623c01427966f5a1"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "f16d6979f1797f7c739a8e1a0aa6ee42"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "9bfd33330e1f3119f0e032758f0dd866"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "49bd22345618ec94f01e4da7042485bb"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "3b41637378df7e5d425213e2f8800abd"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "3b57b612cb86c72a5d7ea64dc984a331"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "50fc1b16fda3c085458bdf182db4caac"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "792e36fa7617ecf71f1b383668944b56"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "1e7b7558d32b048b904a2d13296e640e"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "1abd1fe6a41189829a7a1e4e5fc639c8"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "6755277e3dccac2e14a6fad02e0283ce"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "79b360304c50160b0dbe43a482d6926e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "cbcbedb95ed7307b7b22c4967e28269a"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "cbea0448d07791795dae8a79c7171607"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "eef0f021fd3b5686246880d782c0e7f4"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "63587b5eb9b0de682abbe15813525783"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "b4ee92307e61de1a407a6cba7a8eac1a"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "b3a7d727cf9547212934ca10a5777ec2"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "64473145f6dcefc6c65040ed34432397"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "4fe8e29d3284b2b6f097f2be63dccd29"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "2cd7966bddb281e431e7db9787dac696"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "bf92e2ecc2b2f52dd25e593624c99c0f"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "115ef9720ead04383c92dfd770736fd0"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "9565f10854775c232140b36c80c54de9"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "b4261f2b27f10adccb1b8a882235b78c"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "a47c37a6efff66c5570212d163c1c460"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "afce4ce2814635b02084ce997750c974"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "2c52b24b71485e4f69f3c2cd585e3c30"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "dfe19f910aeeba019370ad43ea5fc168"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "d67c5ba02a87581f9851ce39bd20f317"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "764839f1938dd9cb29448dd51155fa38"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "8cbdd9dac995c3feb0710618e836267e"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "4587c767b89d40f4aad62db606ad90d0"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "88fa47faac7a6317fcf3ebff00ba3698"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "c31d34ada89a1e67f9855a935262c3c3"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "221074f2499036ce26284d7340e8bc5d"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "6073a0d02437766b81a03e053f0e3afc"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "fdbb8b358987ab76ed3dd0a65423d75f"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "618e2757056ef4ba6354be87ac01f9bc"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "031306999ffafde0805360d8a3e7d887"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "ea727723ad11a510a431c97e7156c307"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "48271145147f4f104725a638807e3bf5"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "93ddf20dda70c63c744cef2ff27bf8e6"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "17978c5414bf8e1ae86ce07335a9e077"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "f2db0e12808683baac73c02bc597f095"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "9dc9cf9ddae730982597c984f692ce66"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "b08dd82c9082faeb15a12c5669f67166"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "437695126befe3d37ba7270d3cc604e0"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "2cb896559ff05ce3361505f85fd4638f"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "f9840c2f5ccf20f795a51d02ae5707d1"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "a9c0a3ce97a64d00348d751cc1db1372"
  },
  {
    "url": "views/project/index.html",
    "revision": "0745cca54a7044fb498311920eddc151"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "4a9b1150cc84419681ae838e0294baf8"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "92fce0c93c592c365425e5a6208a7208"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "f7c30064fa2254b6a47439a1b7870063"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "058e9a5ad8444517116ae59a0d53dcf5"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "120efb76c9748dbb6500b351be397022"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "1c18d6cfdd7f4df2e546437c3139b3b8"
  },
  {
    "url": "vue3-doc.jpg",
    "revision": "21dae5052b51835978e456e993450f4b"
  },
  {
    "url": "vue3-ts-vite.jpg",
    "revision": "4931da9a7dc6b6f08832ef3c4c1bc36e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
