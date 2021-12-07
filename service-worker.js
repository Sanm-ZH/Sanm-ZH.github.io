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
    "revision": "63e803c0bf558596cb4d0155758e6bf7"
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
    "url": "assets/js/12.37e91a82.js",
    "revision": "d47a6cce59efb5828e98c2d0f578a284"
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
    "url": "assets/js/16.c177d48e.js",
    "revision": "6011a726f0b376ec454dafdeef047e72"
  },
  {
    "url": "assets/js/17.7acb9b2a.js",
    "revision": "315a1d6bdcfa7feff5137b05577f6668"
  },
  {
    "url": "assets/js/18.93ec21e2.js",
    "revision": "3db852903ef3b35ea475bb0a2262ee9f"
  },
  {
    "url": "assets/js/19.b1ff4cd8.js",
    "revision": "b23f32a2ef8e1d86219444e9444688f0"
  },
  {
    "url": "assets/js/2.8da2a3cf.js",
    "revision": "6cc7ef250e62d4461602fc96fe9de15b"
  },
  {
    "url": "assets/js/20.00cfc794.js",
    "revision": "4943a77f2b0626d0e0126dd93bd16646"
  },
  {
    "url": "assets/js/21.123eea38.js",
    "revision": "be8b59f9486c9fe9e232c4b2d3c1d4af"
  },
  {
    "url": "assets/js/22.c3c65816.js",
    "revision": "d8e788cbca5948c0c9baf923a0950817"
  },
  {
    "url": "assets/js/23.81645966.js",
    "revision": "f550b86ffc860270bee9573353beeddc"
  },
  {
    "url": "assets/js/24.fd32dd6d.js",
    "revision": "702bef4d6cfe60df5ecb4091a62415f4"
  },
  {
    "url": "assets/js/25.d0d1c7bd.js",
    "revision": "cf569d1078c8a36bf8b04d5b8f97fafa"
  },
  {
    "url": "assets/js/26.797814e2.js",
    "revision": "84101be3f438026bc94bf391b1cae587"
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
    "url": "assets/js/29.7aae86f1.js",
    "revision": "d243aa76830ddf4437602e556be1402f"
  },
  {
    "url": "assets/js/30.2ed7fe5c.js",
    "revision": "b500148191a61f75f9ee1a10c685bab8"
  },
  {
    "url": "assets/js/31.1e8c88f7.js",
    "revision": "4fc16aff31cf1abed6ea9c349418c34f"
  },
  {
    "url": "assets/js/32.97e0a09c.js",
    "revision": "bd9f9c52a2fb24e5f46fe703e38db71a"
  },
  {
    "url": "assets/js/33.e8286c5d.js",
    "revision": "c9d760197107bb2044df157f55b204c9"
  },
  {
    "url": "assets/js/34.7c9d849d.js",
    "revision": "2d44093771ddda5c3367b09b56f4cfda"
  },
  {
    "url": "assets/js/35.4450723a.js",
    "revision": "53ce4b7b1c867734a1c0645b29e68af4"
  },
  {
    "url": "assets/js/36.e27f050f.js",
    "revision": "c96b2825602ce70cce4f1d426ea1f61a"
  },
  {
    "url": "assets/js/37.f4d63454.js",
    "revision": "407891a473819bf05d10675c59806e67"
  },
  {
    "url": "assets/js/38.7ddd9bd5.js",
    "revision": "a19ca981e393639a5a259b92a56f55d8"
  },
  {
    "url": "assets/js/39.dc9e8b51.js",
    "revision": "d3fcfd8ab1f5abed664699db06f53a75"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.856f53c7.js",
    "revision": "71385ee61827e9d4d628b59821dbed14"
  },
  {
    "url": "assets/js/41.c2c2c5e5.js",
    "revision": "8913e596cbd0a39f4f6481a7db50844b"
  },
  {
    "url": "assets/js/42.010580cb.js",
    "revision": "01db808fb55a5edf1cd370ed3350c098"
  },
  {
    "url": "assets/js/43.5eb69744.js",
    "revision": "b0705747a40e2b3c242e49e4d9494d30"
  },
  {
    "url": "assets/js/44.6e15e0d5.js",
    "revision": "91cd382f9bfa414fabd2864c5ed9953a"
  },
  {
    "url": "assets/js/45.15eb102f.js",
    "revision": "4ee1713fd8b03019b72b16818d7fa6e6"
  },
  {
    "url": "assets/js/46.6b381bea.js",
    "revision": "43bfae8a8b62da06df8229bc4e0f5e6a"
  },
  {
    "url": "assets/js/47.67e6ee4f.js",
    "revision": "aaa877304e523c15f1e5940be120a1f3"
  },
  {
    "url": "assets/js/48.47b4d580.js",
    "revision": "fc67f7b92ae893c7e8b1e9115a5353e3"
  },
  {
    "url": "assets/js/49.7bc56e8e.js",
    "revision": "ab21ed08c8d565e76e951438feaddbe1"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.f6890087.js",
    "revision": "84654b807122838e1928915e17afd39f"
  },
  {
    "url": "assets/js/51.0862e006.js",
    "revision": "1bbd8cd923b851919a275eceeb9794e1"
  },
  {
    "url": "assets/js/52.991e2935.js",
    "revision": "74731f86ae072ba8e02d1e22961da037"
  },
  {
    "url": "assets/js/53.354432b6.js",
    "revision": "d86083abc9e73be1c77ee972ec373740"
  },
  {
    "url": "assets/js/54.d58afa9d.js",
    "revision": "a0983eceeaa128f4fc36a5c55f0d73a2"
  },
  {
    "url": "assets/js/55.9fb4c6e7.js",
    "revision": "bec43b54e89d4fe6ec943ec3d8823990"
  },
  {
    "url": "assets/js/56.e0daac56.js",
    "revision": "49572da7c7893d296021427c651061b0"
  },
  {
    "url": "assets/js/57.acb40e61.js",
    "revision": "379ac4d66e4d16996d7c30574e9df74b"
  },
  {
    "url": "assets/js/58.7d941adf.js",
    "revision": "9447e6c507d95c514987a8227679bdb3"
  },
  {
    "url": "assets/js/59.c13d6c45.js",
    "revision": "985c563463f04735f72aee566a6515f3"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.55ff719d.js",
    "revision": "2e597342421b72d03ed9ff4a3cc417a6"
  },
  {
    "url": "assets/js/61.e4be2b5e.js",
    "revision": "8a8e5b908d1e98736da24b54fbc26609"
  },
  {
    "url": "assets/js/62.e8a2adf8.js",
    "revision": "9679128eccd73fb08dab45c733f25ca7"
  },
  {
    "url": "assets/js/63.20d40bd7.js",
    "revision": "a15482a5f7827950c2fc8cba70c40ba9"
  },
  {
    "url": "assets/js/64.eec542be.js",
    "revision": "d56c0a932b286803f44ba9905dae4acb"
  },
  {
    "url": "assets/js/65.cce4eacd.js",
    "revision": "15d26b68975786cbed568c04b08e1527"
  },
  {
    "url": "assets/js/66.1b60d89e.js",
    "revision": "cef52dcaf04840bd1722e95f9ba39dc8"
  },
  {
    "url": "assets/js/67.c542a6f7.js",
    "revision": "213bcba997b09d1ef14c3d0c8ee2af8a"
  },
  {
    "url": "assets/js/68.5b7a99c5.js",
    "revision": "74eb80bf9bdbb04adb4bd10a9762c2ed"
  },
  {
    "url": "assets/js/69.0cb8e5d5.js",
    "revision": "d164d93070d856ad7f5fc0cf3f607c39"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.2847ad28.js",
    "revision": "8376ceccec86c3ac68f5cada35bb1bf9"
  },
  {
    "url": "assets/js/71.9e6cf127.js",
    "revision": "f74878b750712ff3ae4a6ee28476c519"
  },
  {
    "url": "assets/js/72.6b1f0a04.js",
    "revision": "ae586d7414d72be6dddc2dee2fdb2e60"
  },
  {
    "url": "assets/js/73.8486ab81.js",
    "revision": "ad04de7d271ef7d18ba5b0ad42fab88d"
  },
  {
    "url": "assets/js/74.6c823ef1.js",
    "revision": "50062dd1d497d7615f3007a25c949e08"
  },
  {
    "url": "assets/js/75.9ed70c85.js",
    "revision": "5a26a586da7bc7ee8555d6ea2308f019"
  },
  {
    "url": "assets/js/76.27a1253e.js",
    "revision": "41c2423fd987a318a441d2e38c3b76f6"
  },
  {
    "url": "assets/js/77.11103bba.js",
    "revision": "274e348527285d606badfdcd4d93f083"
  },
  {
    "url": "assets/js/78.328aba29.js",
    "revision": "068fc0c0411e160caa9d0870059eea36"
  },
  {
    "url": "assets/js/79.c3225117.js",
    "revision": "78112af1132e618d572c4ef7cc5e912e"
  },
  {
    "url": "assets/js/8.bd50d723.js",
    "revision": "9f653970bc5b97fc7093283ea4650109"
  },
  {
    "url": "assets/js/80.a7b2f389.js",
    "revision": "78e89e3322b4e4355b069ae02a14dea9"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.f3e7d36f.js",
    "revision": "a3092176535f9d438d1d8191d40fc79e"
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
    "revision": "17517016c479e2060c3973110c79278b"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "208eedca55d912c4d7624486f776ac01"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "1f24526f1633f48490bc55bb81038d48"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "3f34cdbfbdf39947b5919d3e481736a3"
  },
  {
    "url": "categories/index.html",
    "revision": "faff3d472513a7b5dff859a28f7bd492"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "87365a3f6ed6e0d8dff77270f3d22b40"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "909c190d6bb27010fed66ba703578898"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "1518a6485af526fa08ffbdcea0024bb2"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "29ab4b4fef8e591c23d83b62e6489880"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "4e64163cb5d7d2f11c4a09355cbfb1d6"
  },
  {
    "url": "categories/other/index.html",
    "revision": "8a36454b78949ef2087d317e5562e5de"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "9e23e77571312e17282cc25205bf6b27"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "a2956d19ca455a18d16c7dbda0856f76"
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
    "revision": "44facb6293f287cd27b053cdf4327b42"
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
    "revision": "4be50eaca217cee8d9a0038f7844ca98"
  },
  {
    "url": "tag/App/index.html",
    "revision": "a96fb920cf63c2179668496858db22b0"
  },
  {
    "url": "tag/array/index.html",
    "revision": "911bf40be300b0fdd6f019c5406a433b"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "9effa53d61439cd7cc33e4fc71640080"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "0cf11972d51a83143c5055e95f1bf7b0"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c6b3cc482032e69bf9024d52082ed9c1"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "4484fa73c0f9febf1463fd25de5eb3c6"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "89c2882d082e7fad475473160c8524f6"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "7d0230c25eae743310008712d26b7f19"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "347ca8a07fb55ff653d3b072a90f0247"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ce10a2613812b48d20c1be0fa37df0fd"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "9228eda6924ac2ead4b1338245fd59ae"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "ed92b105db1058d41198a1300fbdf407"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "27dc9c37d445abc337f4cb34caa68762"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "45de23e532c22b77628c6009bfb3da30"
  },
  {
    "url": "tag/html/index.html",
    "revision": "366924905b703c4d2e65858e37ca62d0"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "4b212f0f9f343b3df9b1d4cfd095ce55"
  },
  {
    "url": "tag/index.html",
    "revision": "303b2a9eb2ad1561c2727ef66d4240bb"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "2db2d1d9480670869b491e707413bf30"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "76e2aa2430fc6dab1f55958189a7d961"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "188e0577cec7cf3920147393e90ea81d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "4a2056ee6a4a65bea6eedff109c44445"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "6749c217285306523abe8e7b568ffe95"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "3b84c3a26cb36d851f3a245c6885046f"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "500d2d37e969f02465bde68eb9ede94b"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "4100cf07aa5c5d55a96c77ddaec457e3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "8ba2b6dc18360c91affc89cb085314f6"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "0b4830cbe188112ff23d621fa6c913a3"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "1c2f8401a8d07611e9b3f237165fdb25"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "4d443986ac95eb4653892def62aaab98"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "5987244041561a8e47a19dcd4822a630"
  },
  {
    "url": "tag/project/index.html",
    "revision": "e780e561b711888c39fd747c8fc86813"
  },
  {
    "url": "tag/react/index.html",
    "revision": "b1c010e6aa3bd0036a111e7a0242cbd9"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ae109bcc74977558e5aebcc0d50554b6"
  },
  {
    "url": "tag/router/index.html",
    "revision": "0fe07a5838055521e6a0a59aded2970a"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "cfc4ed640a482b014d129e607c168c74"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "280c8a49fd4c96d84ead8003d30f0647"
  },
  {
    "url": "tag/style/index.html",
    "revision": "8a3a4ecba7339fd86255a1f674e84178"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "00c7ab8332a804a3fc6c601e411935bd"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "8e95bfea6ca16aa5c5de13e091b993ed"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "8940cd53feea33de7ed8b0b8365c36ee"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "84e3909c100fe9091100c64145e0c3a3"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "85715c1beb69710aeff0d80f67f9e619"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "18b78a147638c6924325dbcfc36c9229"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "4ca5478074d40a820bea533e937bce00"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "9ea96d88c8ee7a1f9135385f2770866a"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "36f7486d2cae3ee0d23023aba0edbe4c"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "d79fe8a91a0671d5c67100f15cd400a4"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "861758b23dcfd217e50bebe9deb78c41"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d395bd355056c839540be9c0685a3b0a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "e986a1df18381adbb591d74de6c2e214"
  },
  {
    "url": "timeline/index.html",
    "revision": "2780638a80e387040397114f3ccc74ce"
  },
  {
    "url": "views/about/index.html",
    "revision": "ae392dd89fb2ff1900af0c3d5cc7e508"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "84f23658760815ae032275795387d4f8"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "b75f58a09432a9aa5d8c153705fc0f3e"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "cfb621f494cfa7c65b753ea557d72b5e"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "14ecb668b72298f3e553fef958f3cd54"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "6caecea944b979aec78b54ba6eaf7a2e"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "f7b822f42772819f5d5901893d9576ad"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "040450adc0ef1b21a65851a1c405e000"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "8e58fe2b4df1ce16cc2483b670bbab5c"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "9ce99770f52973aa025f9da08d4ac110"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "d3d2af8ab1b5f777ece5eb3f3c6a0fca"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "c4bb44b183b4d7c5c8c72490de1c3fc8"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "1bd7ddb50ef9ffd48d922334104ef57e"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "bb4c89a1d847081cbe06b32614551a0e"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "fee259b3274f4ac28754aae6d93741a3"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "c896e2d6b918705df6e4197a9661ebc4"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "1f68fe806a3783352373c3b669e20997"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "3e830f4235a2e7d2746dc0db17c2d0b4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "0f985be757ae784b752a59abd74e3cfd"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "3689983ec323b005f341ba86c3134a0d"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "410c0deea1509033ac4ca19af115dfcd"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "5bdeb58e2451a44f856bcec935c26a7d"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "ec6430a726d409a01e4682db35290c95"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "28f0728f89270f91d89839b5c701355f"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "46827590ad76c2c3376c931bb1896b36"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "73c5217fd7ed187f8c3c4f0fcddb1415"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "2a0864da94aa487fd1b7516ced307933"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "cbe5ded1548f3160600297ee5b2b94a4"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "55c9318fa6de91dcc10249c933a119bd"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "04ea46ace0dc93b60aea95cac8903f15"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "5f216c76d92aa8ce3cb42e83760ef28f"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "94a16d766535b2c268f087136ec804a7"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "8581ccff011f8302a05a9a58ee9df000"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "6a927a71938311858aea87edac70e72d"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "7887632376c4f4e00be2201da77b8228"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "6c26bfa2874d89823c2e0ffe7d55f8b1"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "ef7bc12f0d9c5dd31f74474999baa7f6"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "1def68f001a23ebfe4730bb491bede93"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "533ee0458820844c4fcf560a0b4bab4f"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "82d26845356c3cdc12ef88d54e10c453"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "64a82924387efc636b6f498a3492ec68"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "a141430808f986cc9d3db532f202d53e"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "f07fa411fcc88558a45bf60382aa78a9"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "3eee35624d3f7f8b10e7d4f29f18f236"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "536c4902e7473aab81e520c5e82004c2"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "1dedd67391b88170b7d0a028869857b4"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "c480cbe6c9c38f22f9901bf5dd979389"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "b0f139f56503b828ff64333eb7e5dbbb"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "7d200640234a814ed3d6c41c8a1701df"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "2cc3f113dbf3bbf401f2ebb45461d31a"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "376fe68bb99952d04f2534505a57b068"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "664ba2d595acbdf3bbed5070d37c9741"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "334d1734ad9030b9f52e2f21b1305853"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "54c5f33cf99d52eb342c0e6e2215f62a"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "d470bce80537f1e62bc9195a344cfb4c"
  },
  {
    "url": "views/project/index.html",
    "revision": "392bc5f2d3578bcf01743fceb3a59fc1"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "5cb11f2e8e2b21dc5920402da8577ba7"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "c3bbefc31ad5209874b3d097260d8dc1"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "61c10a95120d8f1db0db7e72abc00871"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "c62c72fd046cbe320dec096184ac8f3b"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "347d3cca68bb448ed057bf8987ed8667"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "00f63c407fae285f84ecdff15f89e02e"
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
