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
    "revision": "e33275bd2246b83dc3d38a9fddf40c53"
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
    "url": "assets/js/12.df3652b3.js",
    "revision": "682f33b471cf7268e70b2408652ab6d8"
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
    "url": "assets/js/16.2fa51751.js",
    "revision": "33672e675e255840f787f82ce90bee05"
  },
  {
    "url": "assets/js/17.55addc5d.js",
    "revision": "1c836bac48a78dc67c94196020a90879"
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
    "url": "assets/js/20.1d34c266.js",
    "revision": "5006663a8868e3c3af3d49102e8566fb"
  },
  {
    "url": "assets/js/21.123eea38.js",
    "revision": "be8b59f9486c9fe9e232c4b2d3c1d4af"
  },
  {
    "url": "assets/js/22.bf37f7a4.js",
    "revision": "9dec5ee29a15f9e1e3e04bd8839f88b8"
  },
  {
    "url": "assets/js/23.70c348cf.js",
    "revision": "40cd09f37d549dddea71847bb55ee93f"
  },
  {
    "url": "assets/js/24.7d9834ad.js",
    "revision": "e31a8ee29bf281f81576e3821f343ba9"
  },
  {
    "url": "assets/js/25.faafb36e.js",
    "revision": "86ef6c1aa4f5363562b60690d32404ac"
  },
  {
    "url": "assets/js/26.81b749a0.js",
    "revision": "497278156667ac7049bd1642f34afb5c"
  },
  {
    "url": "assets/js/27.2c879645.js",
    "revision": "e76e7da795076e266ee7dd42f3a44cca"
  },
  {
    "url": "assets/js/28.b9a0b556.js",
    "revision": "3065107a75af1ac09df92947ce00b0e7"
  },
  {
    "url": "assets/js/29.5fc6b080.js",
    "revision": "a7dce641fbab5e5ca900c62a6cf33dbf"
  },
  {
    "url": "assets/js/30.b8c0e7b4.js",
    "revision": "e019b89a380484d38e8afe4b925b5c19"
  },
  {
    "url": "assets/js/31.c27487a9.js",
    "revision": "38d7f6391dc9aa35de703499a1c443b7"
  },
  {
    "url": "assets/js/32.6e5fc71d.js",
    "revision": "de384d96bfc9894891a247dae5b73f2c"
  },
  {
    "url": "assets/js/33.9fee64ac.js",
    "revision": "1c9a6f572a54ed8cd0c9620cd35ab119"
  },
  {
    "url": "assets/js/34.a5e2c191.js",
    "revision": "e9545030ae5d49201450ba69edd1d10b"
  },
  {
    "url": "assets/js/35.34dbbecb.js",
    "revision": "a92d1cad79dd0bac116124e24b6ede35"
  },
  {
    "url": "assets/js/36.39f2053a.js",
    "revision": "b3faa92a0e2904e064f1dd06d434cf2a"
  },
  {
    "url": "assets/js/37.6f9090b5.js",
    "revision": "d30bc7f3a7ba726d2ae79f3cfda0bd2e"
  },
  {
    "url": "assets/js/38.b76d3c17.js",
    "revision": "488d26a080af82b4ef67311464c8ce7c"
  },
  {
    "url": "assets/js/39.ff319865.js",
    "revision": "aae2aceca3eec8e987b095ae0ad5ef9c"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.08e175f9.js",
    "revision": "e24ba3e3eda13fa00222182164e03295"
  },
  {
    "url": "assets/js/41.50e3716f.js",
    "revision": "7197e067b34fe6dab1ffaed2b788d047"
  },
  {
    "url": "assets/js/42.3ae16092.js",
    "revision": "609011fff50cd049474ce74101ed675b"
  },
  {
    "url": "assets/js/43.86247f3d.js",
    "revision": "2a40ddf23da5ea9e692393870e1ac1f6"
  },
  {
    "url": "assets/js/44.b7cc643e.js",
    "revision": "b13aab1ec19345e516ec43d393e2c4b4"
  },
  {
    "url": "assets/js/45.7376afa1.js",
    "revision": "cd3391fd927d9c2c54cd243b7e2ffaa8"
  },
  {
    "url": "assets/js/46.cc322192.js",
    "revision": "5dcbc874b054d13ccb6bf1fd01799abc"
  },
  {
    "url": "assets/js/47.13e2f6b5.js",
    "revision": "9fa350e6be7deff208718d15dfe7c3c5"
  },
  {
    "url": "assets/js/48.bdf9fd82.js",
    "revision": "ed3ad09284f9b356d3eadd531fba5f13"
  },
  {
    "url": "assets/js/49.1df46fae.js",
    "revision": "6e56fffdcc0b469fc5d0cd18d5ec135b"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.d79bb133.js",
    "revision": "c94f25acde3bf31c5e5e6ff633c6d977"
  },
  {
    "url": "assets/js/51.37ab7edc.js",
    "revision": "48ba54e29fd157f4c86c808cfb344115"
  },
  {
    "url": "assets/js/52.92dc69fb.js",
    "revision": "1e243f5e9f9505c1c889fa73c40914e7"
  },
  {
    "url": "assets/js/53.029f6289.js",
    "revision": "2a744ef4639cdf9dceac2d3ab6b046fd"
  },
  {
    "url": "assets/js/54.764d21eb.js",
    "revision": "9f1d1a6ab6cf0b9710b67d2583aab9f4"
  },
  {
    "url": "assets/js/55.538cb37c.js",
    "revision": "fc524ce1ede8467a3eedd2a547ee4d1a"
  },
  {
    "url": "assets/js/56.4f2fa852.js",
    "revision": "c874a92db049b4b694f796416056c014"
  },
  {
    "url": "assets/js/57.98b20f83.js",
    "revision": "087184e41c8aae64157891f5dd6be472"
  },
  {
    "url": "assets/js/58.ed15dcae.js",
    "revision": "9a42b2af83a6da1639a4cfc94b2a32aa"
  },
  {
    "url": "assets/js/59.17971e87.js",
    "revision": "d90335a3fbeeba31476e6ddb4aaaa663"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.d3e38ec1.js",
    "revision": "7102838c2a3cf07ea92598079118455d"
  },
  {
    "url": "assets/js/61.3bad1707.js",
    "revision": "986d5b74afa6a357a02e8e188b921e4e"
  },
  {
    "url": "assets/js/62.f60befb8.js",
    "revision": "23cdc698def012653f676bd8c8e5a9c3"
  },
  {
    "url": "assets/js/63.b484fdef.js",
    "revision": "03a699d2690fea2b969278faebbf929b"
  },
  {
    "url": "assets/js/64.27875a6c.js",
    "revision": "d424173c9b164b47e4792ddfed511945"
  },
  {
    "url": "assets/js/65.59745da5.js",
    "revision": "05da1f9650873242093457590acffed7"
  },
  {
    "url": "assets/js/66.ab775d38.js",
    "revision": "cf3d4ae6aed63e7e92962dc906f8639b"
  },
  {
    "url": "assets/js/67.e4c5e55e.js",
    "revision": "834738f05ae0b8e9a8fac8deb6b0d2fd"
  },
  {
    "url": "assets/js/68.d62f666a.js",
    "revision": "b7a16675cdf058d29b817b298cb4d077"
  },
  {
    "url": "assets/js/69.a5e2ada8.js",
    "revision": "e3a2ddb42c3076e8a94be4f3f3e8b219"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.e216c852.js",
    "revision": "93f961d3c0164269a17397e8193d0e79"
  },
  {
    "url": "assets/js/71.dab21ab6.js",
    "revision": "15d07c81c6e14d11e71e11b7ec0b4eb5"
  },
  {
    "url": "assets/js/72.006da7f3.js",
    "revision": "c777ae9b78e7ef562e59d2ccdb46dce9"
  },
  {
    "url": "assets/js/73.b51f7f74.js",
    "revision": "69a5d971c46082a85af52b527cef52a2"
  },
  {
    "url": "assets/js/74.686969d7.js",
    "revision": "d537f9933a47767089ee5687f7e91418"
  },
  {
    "url": "assets/js/75.2bb96805.js",
    "revision": "ff7aea83be1103ced1eb66822030aff4"
  },
  {
    "url": "assets/js/76.e21ea619.js",
    "revision": "60dd8e37b67ed9890c8d643d3a3e9260"
  },
  {
    "url": "assets/js/77.34a581e0.js",
    "revision": "4ef3b99cb66a48d511ba76a6799e86e1"
  },
  {
    "url": "assets/js/78.54fddaa6.js",
    "revision": "9cc1685449bf8f356afe201a410bb5c5"
  },
  {
    "url": "assets/js/8.bd50d723.js",
    "revision": "9f653970bc5b97fc7093283ea4650109"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.eab5385f.js",
    "revision": "76ad51bbb12918b6fdf8eea927c7b3cf"
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
    "revision": "19f0f54739964355ed6e161ddd084567"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "05edfc98c4346c9d61d29026a33a9d96"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "7f5e13cbf6fee427357ab0e3086890ca"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "3a894a04805b42dedffa702e2e19b2d0"
  },
  {
    "url": "categories/index.html",
    "revision": "861f85defd55d2814d4f450c77902cc3"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "d445a6c7598f036638663f8d8aa22671"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "304709f91112895908545bb4700322bf"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "e00bee1fc8f8a1f92a5ffd05bbc2755c"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "41ff01a8c65357bd7200a31b7c36f168"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "401aa1d1abbb06a40d266683637894bd"
  },
  {
    "url": "categories/other/index.html",
    "revision": "9f3d8e156cc357f853699f4823f2cfb3"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "0a9925790907a0f16b32624e6454cc00"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "a9a7119364b3c42d02e3313a3321db85"
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
    "revision": "e4038ec558342cf97d54db0af367c7fa"
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
    "revision": "d99d8d23bf9c4e8efbbcbb183c2edb99"
  },
  {
    "url": "tag/App/index.html",
    "revision": "e153e74c7e0987b5a525cfe58e647131"
  },
  {
    "url": "tag/array/index.html",
    "revision": "546b6bf5365d9bf6a0ec068a3c3e1ec7"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "9249e763946ee3b7ddd15ad6df5e7f16"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "8964ba5bb0ea4e57dfa8e0db4c775c25"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b1a97487f6122b84ec292cab742ebf58"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "bfb787e166d8a627cbf123f3b54b4594"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "9c7d8d9b517dc11b12e485000b02cb9a"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "9648339aa36558272a621d7d2156853d"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "e0805f14d2f8c4a8cd609f81e135196a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "daa6394ff63d7a1bc40c38120797d474"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "e0750e3c303ab42e29cb5b6b626b81c0"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "b2c4bfbd8798620452ac5a019fb3b128"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "3522b0a52c87c7498b765203653ffbc7"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "e304f6be5f7fe2e848cece65e20baa76"
  },
  {
    "url": "tag/html/index.html",
    "revision": "580f434226095217fc0731cc4839235d"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "1e04cdae17e2592a089e0e429d18fb54"
  },
  {
    "url": "tag/index.html",
    "revision": "d19bb0bb6bd61024a651ee2531659836"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "e1b6176f34fbb12f8d0d1f0a740707ad"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "87932a02eb60cfe3fba16427c23ac346"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "87976ff0307b59aa57face519e568626"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c2d28a06c6f87a445fd68c176c0ac7dd"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "3666687f2d6b8db003c9980613218d00"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "5e47060445bbb2368aa406a8567daea7"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "58ae143fe1dfd29fbc0eb4d6490b2be9"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "233ba7038e01beecc8ef05d52f9e79c4"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4c29c7f42492d50ec5464923f9533c73"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "5a79578ac47ea8a3f3572fa1d8f0e054"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "a2334e7892bc2a1864606a522283e6af"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "247f6d3b4fae464e0e511f671177df4c"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "28bec25e75faa4875d51035f081b5670"
  },
  {
    "url": "tag/project/index.html",
    "revision": "208bfeb7762e09a98610a54db2bc653d"
  },
  {
    "url": "tag/react/index.html",
    "revision": "7c28cedce9e630f6ac3d643d098ffb9b"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "66c2db6dd29348910d3e3c2bb2b14b9e"
  },
  {
    "url": "tag/router/index.html",
    "revision": "02010ff44bab539195ae5333cdab6ec0"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2e751f4c97da4e6070de2b20bf76f909"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "1b767c99243eb2e40fc6f75ea709115a"
  },
  {
    "url": "tag/style/index.html",
    "revision": "425a3b9bde26da54bab98b8c000efcb7"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "2fb0594a29769b5e9e6f3b182eedacc6"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "9f4f75cda6c84a1d1e5cf14785392cf4"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "60349d318dbd61b95e52595b49ffcaf8"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "1bb379c1f61ff753ed7bf5517ec0a9c4"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "ec7cd37c544a614d1774d80923c360b8"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "c9c047a86879096996f8a8aafbb890e3"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "78a165fe3bc631f8ed21cf38debd9f85"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "4923cb4f68ec9052bc804ee91c0af6d0"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "faf1d11bcc7c3f18ae4150aa5122c231"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "e5538b9f9f229ea0bf76b09c0b01850d"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "f22599457a7274b3fa7774958837cb28"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "1f6246c93f6d0bb3d95e7042020dcf4a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "bebe67b49cc52f402d4304ce1f96de02"
  },
  {
    "url": "timeline/index.html",
    "revision": "a8b85d322c9b320f2805fb38e9405a77"
  },
  {
    "url": "views/about/index.html",
    "revision": "ce7c32a000213db253a21da2b7cb6d32"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "5f6762af0a917a695aa564eaabe5c8f9"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "498cdfed13c9797462dda101fbe0b3be"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "3a6ac2b09c7cdcda6a4890cbce35a35d"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "c5c33a1e69923627ddffd3b4a221bf90"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "7f131cdef8c8f5feb11f69a50e2ec361"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "93a7692ddd6ae88cfa997183e327bccf"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "fef13ac4067486f9d6987d17cfe3aa67"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "3e7e2346d9dc2dc8266d5b6dc544a970"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "9e672f48ff7eaa7ee35deab426eacce7"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "bed9d044f97bc5f6c8b46fd6d25e4f5b"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "1f02e04d0caf525fde0310b65c3f6a3e"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "60d14024b083314db671aaf49045c1a7"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "ec3c54bcb8423c3f60e75a0727c519ea"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "dfbe7cf77ffe1ef71bb903345c7f36d7"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "0063fd486ff530c35c51b2319faecef5"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "82aace73c35c12708f0cb8de45beeb79"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "34937f19b434e921bd3fa746bb57d1f3"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "1d08aff71c967ea92cb8cfaf43c9280b"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "ce563008e1badb15c0e4712a0f83f5b6"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "46ef203eaf1796685e785ff08e2096d9"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "28b30df241198cc84a88fc1ec2bde936"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "f5eb70c19bef3f8faa97cdb6575b7a17"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "0a3040a474172ee4b3f262d2473ed34a"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "92166a5f8bebe175fb1490bd5ec620db"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "59733790d10bdf0bd47ef55d3418ef95"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "e5a0781348d30ad8bab3b115f6e8407c"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "97c26d98430c5d43d7f02ebf09406d42"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "b1c226ec6131295d6118f2dd534da774"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "c7b36a877525f7bb970a440e30e709c5"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "daaa97c17691cee9074c55bcbbe33807"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "faa072b809a66ab7d0f3bd0b8f67052c"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "d4d067f2d3000cba8d1d1af1c1f0a05f"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "ec8118b3631c71356c672b098d09eadc"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "9fa688fb5656e9e890f1f83dd390b13d"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "565f16627ede2d907e425a1439ba1448"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "2eeb96711ba2419f053df188956c3abc"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "279a8c28cbd54ea6ec6a7b4cdd611268"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "c994942b0a67798f6106a5d01db17efe"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "5b7355594020502952fbb7f78e52da20"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "f883850710071b3e49175a7790404d9a"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "001eb01575b975b43d9cb3978575a28d"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "4faf5a1babbbe4cfaa2c70eb8e688c4b"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "d88d95e0eb2b752902c0dea5635f1e9e"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "f1f2e19a70d19b060105eb55d157eeb3"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "54cc4300b8c72e727e4927f50c789865"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "53d7d32aab0b0bac31f80b96402b2928"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "6b9a9c0d94948d58b2f5c2eedf8915f1"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "a3dfb05895669120d3812337ac914ac6"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "0534de9a17aa77b9276315d384f9874d"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "6cfa91a3b6e7bfb68f4060d6099dea0f"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "2aacd45cade2649c51337afda39b3310"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "ce220b00fde9b71524d57c1532d4cedf"
  },
  {
    "url": "views/project/index.html",
    "revision": "56452f993b95575aa2c967e273df511e"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "f96537e81184a4dcf807d0dcbe124bd1"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "0d5e0df537da0b7e232d9960427d40b7"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "2bba7ec2f38b7f73afb44839a643f795"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "b60f6b90ef5c2507cc9ca911dca065e4"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "33306e640c52f6bfe84bc774aa636aa1"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "ce1f977db8a561f154a7083fc5e738b0"
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
