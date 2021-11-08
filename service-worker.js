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
    "revision": "b1e065c512f8df90e875eac07a6b2dd2"
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
    "url": "assets/js/12.531cdc5f.js",
    "revision": "250b73a79dd660bf18982de2bd1c5402"
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
    "url": "assets/js/16.e7ffa33b.js",
    "revision": "0410def15d82f16d2ba47e5b178927b0"
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
    "url": "assets/js/20.1dce0569.js",
    "revision": "4f99e99a10d42843634f6040a4b73b0c"
  },
  {
    "url": "assets/js/21.da422fb6.js",
    "revision": "4ed336510310dc742c8ade38d71bea08"
  },
  {
    "url": "assets/js/22.87ed77d0.js",
    "revision": "fc9a1bc72ae294605a23ff595327a495"
  },
  {
    "url": "assets/js/23.a5f79d21.js",
    "revision": "f9c3dd640c14917b06dd5c087ad2e5df"
  },
  {
    "url": "assets/js/24.f0becd98.js",
    "revision": "0ef3a3efbfc4113045a5a2d5c553b861"
  },
  {
    "url": "assets/js/25.8b893a05.js",
    "revision": "ebbef3ffce0915da2f4265c03afacb93"
  },
  {
    "url": "assets/js/26.ab475016.js",
    "revision": "df9185acd1f90b6452dd65924ae2f4c5"
  },
  {
    "url": "assets/js/27.6457e7eb.js",
    "revision": "aab6daa5b2e53a10b1347e7739671a1a"
  },
  {
    "url": "assets/js/28.33c30e64.js",
    "revision": "c336a90fd198a20e56046b04abda1fbd"
  },
  {
    "url": "assets/js/29.d12cc4bf.js",
    "revision": "426e91d65ca5265ed0600f5dae1dc874"
  },
  {
    "url": "assets/js/30.b8c0e7b4.js",
    "revision": "e019b89a380484d38e8afe4b925b5c19"
  },
  {
    "url": "assets/js/31.7c45663f.js",
    "revision": "87d5832261a0a7dc96a4af3106defbab"
  },
  {
    "url": "assets/js/32.6e5fc71d.js",
    "revision": "de384d96bfc9894891a247dae5b73f2c"
  },
  {
    "url": "assets/js/33.b05cabba.js",
    "revision": "e7da33bb4e00a942dbddd8c9b54c44eb"
  },
  {
    "url": "assets/js/34.d6c98f64.js",
    "revision": "2892f706d13085ba86c171a9efa0960d"
  },
  {
    "url": "assets/js/35.3c46bc45.js",
    "revision": "cc40920d94b3b21acacfa31b144be4b4"
  },
  {
    "url": "assets/js/36.39a5c42e.js",
    "revision": "a906a5b867ce8b4771c496718e853ed1"
  },
  {
    "url": "assets/js/37.1c15e92e.js",
    "revision": "d7d594afde3ce521f3276d9c3a11d81a"
  },
  {
    "url": "assets/js/38.c5336f5b.js",
    "revision": "76cd59ef60e02cf1f37d12ed237dd006"
  },
  {
    "url": "assets/js/39.15efe0a3.js",
    "revision": "04814b927a1b9d4b6411e69f3ff603af"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.81209694.js",
    "revision": "3e4c6820f4d072b7cc8c6cfd5ba00fc8"
  },
  {
    "url": "assets/js/41.c82f9660.js",
    "revision": "5f1d022dac520c1c26fc6cf86299a7fc"
  },
  {
    "url": "assets/js/42.575a69b7.js",
    "revision": "7272f3fc55c0c08aa86a33089ca013c0"
  },
  {
    "url": "assets/js/43.08e84b07.js",
    "revision": "6ed0a7aab7e80fee0817fe9e0c0ccb20"
  },
  {
    "url": "assets/js/44.d4f8bf5c.js",
    "revision": "c59728465444dc91c9c2aaa6cd5d7f4a"
  },
  {
    "url": "assets/js/45.4bc86690.js",
    "revision": "9e1cb55e25fe3b0e5767505a5c5a0290"
  },
  {
    "url": "assets/js/46.69d041a2.js",
    "revision": "6951b6ace01cef5db6063f0abaa8090b"
  },
  {
    "url": "assets/js/47.4e9ba366.js",
    "revision": "1b80305fc657885c4e349ae1150fdc86"
  },
  {
    "url": "assets/js/48.91853677.js",
    "revision": "df6cc0482bc700421b0bc61bdc866045"
  },
  {
    "url": "assets/js/49.dfa539c6.js",
    "revision": "526ee23ac15973c222e35e1d2ec67c83"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.b21c8aad.js",
    "revision": "5a06e14b6e0545f329f33b8724e75e96"
  },
  {
    "url": "assets/js/51.91f2a42a.js",
    "revision": "7e5d4300ca93d21a3f2bc97ac6fe1227"
  },
  {
    "url": "assets/js/52.6cfc3d5b.js",
    "revision": "1a07be6e47a86461e9f77d5b2ce6eda1"
  },
  {
    "url": "assets/js/53.d7c48c13.js",
    "revision": "3e1f7eba42d6b5ec5b2945c50d79de21"
  },
  {
    "url": "assets/js/54.cc617cd6.js",
    "revision": "85f345fc4878814176db542382ebe4ef"
  },
  {
    "url": "assets/js/55.3c2986e3.js",
    "revision": "7bb4c35df2686f61aaeab2833b33c965"
  },
  {
    "url": "assets/js/56.c9ed5e74.js",
    "revision": "92522147ded14dfc16af36bcd035f645"
  },
  {
    "url": "assets/js/57.f71fdf1a.js",
    "revision": "ee178b73485126bd6f1e78fd112a81d5"
  },
  {
    "url": "assets/js/58.dd2d61c3.js",
    "revision": "1f9fcc07f4e60e4d1fe17959c4e57b19"
  },
  {
    "url": "assets/js/59.10934b6b.js",
    "revision": "e05291547062c0ee07c9408c62c33840"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.19712e73.js",
    "revision": "48ef030b146d628eaa44740da2f596a6"
  },
  {
    "url": "assets/js/61.a983ea62.js",
    "revision": "7bf72a27f04a5a339ff9cf6e44c0384c"
  },
  {
    "url": "assets/js/62.71bc0536.js",
    "revision": "b16cf9c02d96eba7cb8328a74b99f610"
  },
  {
    "url": "assets/js/63.b38c9cc1.js",
    "revision": "5dd515e4071b2fdf3f72a3a9c095452e"
  },
  {
    "url": "assets/js/64.d3a220d4.js",
    "revision": "936763e544374c9eac9f1b1b958258ca"
  },
  {
    "url": "assets/js/65.d9d5629d.js",
    "revision": "0d9e927fea8ef40f8d66ddc4d7d7347f"
  },
  {
    "url": "assets/js/66.83d28a1b.js",
    "revision": "c160e14c7c91274cbca833db41998a1b"
  },
  {
    "url": "assets/js/67.83df0708.js",
    "revision": "aac101e4bbb159411c2cae42bbeb5618"
  },
  {
    "url": "assets/js/68.51649528.js",
    "revision": "8cd9e165187e84f43369addc39d5c9f5"
  },
  {
    "url": "assets/js/69.1a2b97a0.js",
    "revision": "710b0509219316584ecebd8459388aa4"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.cf0f53b5.js",
    "revision": "94f8229545e37604e5d0de2c93cdced5"
  },
  {
    "url": "assets/js/71.31911f88.js",
    "revision": "4842749480885beb9c5dc147987d77a0"
  },
  {
    "url": "assets/js/72.384c6613.js",
    "revision": "72f92ad2216f192ba6b4d49fc91924d7"
  },
  {
    "url": "assets/js/73.87cde36c.js",
    "revision": "6415ba85ae83214dc63187ae5538efd9"
  },
  {
    "url": "assets/js/74.1c122308.js",
    "revision": "0307bb7862b0afec5826481e4be038f0"
  },
  {
    "url": "assets/js/75.c8310472.js",
    "revision": "306db5df4e469d7c385f7c71a8d54589"
  },
  {
    "url": "assets/js/76.7051a5dc.js",
    "revision": "17b2773486aa7abf08830d9acd6cc410"
  },
  {
    "url": "assets/js/77.3c5a0ce1.js",
    "revision": "da798cc6568eac28b700f357bf85b426"
  },
  {
    "url": "assets/js/8.fb700b15.js",
    "revision": "17f0fb49dc4b2e419c612efdc0d2f447"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.d3dea483.js",
    "revision": "de385f6736c198d93830a393d24a4da3"
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
    "revision": "ebac982e41a144946ba87cdf179ca424"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "83a38b8ec34000d9cdbb3fb9a5e638c9"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "70b699ca1d8d2893de941eabc3ed53b3"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "721614987ae2c8de80fd2d4a946481c2"
  },
  {
    "url": "categories/index.html",
    "revision": "b1aa6db157e019a268bb115dc5687f7a"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "e51187c29292ea68a3740866ab1bd9a8"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "e5a049f200b331e569f65916168c658d"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "5b156e063319e176de71983aebec89e6"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "7ae398b55e66f2d79d4c8c251637597d"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "ddf821de2467fe8ba42f1b99b366cc70"
  },
  {
    "url": "categories/other/index.html",
    "revision": "22a0c19f33bb26303cfc50a6cb20868f"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "0e5da6fdaa8bc4b03625fac933863ce9"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "f9470bc24a7ea091d44aeeae62aaf6a7"
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
    "revision": "5b79e48ee0ad530bb3bb8ae5f72a5460"
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
    "revision": "5644e052c842d27c3217eea9fa071cff"
  },
  {
    "url": "tag/App/index.html",
    "revision": "1825b3d17fe0d7e91d316a4cbf514057"
  },
  {
    "url": "tag/array/index.html",
    "revision": "a57ec04bdba498dad789adb9aec5631d"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "9fa0fd3abb55d7db529f1fa822defc4c"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "344c7b73afa0033eb8ad70b5c8ea6c73"
  },
  {
    "url": "tag/css/index.html",
    "revision": "42cffcf86ee135199843d83e6c17582b"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "580fd28f082ff0aa44f8dfd56ebdadc6"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "7e830dbb7ebe8d0885bf7dc12e46d3f2"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "10497271100ac594f1b5a83640c96288"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "b8871a357d60391541c41c3d306618f7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "904c8d80926d4343c7aded7f22d8ee4d"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "8da306a97e3846827f186f91a23de83a"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "f22f9402e9691bef65fa26a41a33734c"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "46f2263b67c6e51c43e40f71367f63cc"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "4d5c0fc970c004520d6fcd2996301f0a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b250ab121467e6d1b22bf6c3698c4b34"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "61fe3adf4b223dc75422b8dec1cebf83"
  },
  {
    "url": "tag/index.html",
    "revision": "094e853cfdc120790f78c3260d92dfd8"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "08c9530eef1ca518a964cc9663c1416c"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "8ec7e78382689cde520f5e54238a2115"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "ba31a29e89092e7ccb17b9fcfa918f62"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c9663b74b4b7c74afbc2a8821d83f873"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "2eae757863c935d56bfac295c3ab1198"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "589d708ad2823f66303e9af1d373cd64"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "df66178629ba884368d8fd49e65a9229"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "46109c5cb7d5bba176e54f2f84a45a4a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "aa7b95812c5e06c7d6157f012a52de57"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "ad88fc36956e4d46f6933382da145056"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "d2450668d67176d12bf679a71905db71"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "ee92d66f432d8058c50cdf54ec8b8619"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "60047d5b13363ed02c7b2a4b4d77b40f"
  },
  {
    "url": "tag/project/index.html",
    "revision": "38ea0cc6b3cf77b4804f74661857d4f5"
  },
  {
    "url": "tag/react/index.html",
    "revision": "6af7682578f323ba70122402ba12465f"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "dc056c7dd4b8f7177be3c471969538cc"
  },
  {
    "url": "tag/router/index.html",
    "revision": "2ca4dbd4937459e4b3062983407a7ad7"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "de0269725f19afac12dedf52c9b408b2"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "755674af826f65cdc3fe14b031b55b16"
  },
  {
    "url": "tag/style/index.html",
    "revision": "09f3c0c1ade05f0a55bb5c804e7c92b0"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "785a836ff87c259c2bea4c7789042c70"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "50ce2b4114c9748318e979f7da773224"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "990c4232067ed5bdcbd70b5a495c4e43"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "010b573e800dde081b2973aecf03e50f"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "65158c279a7ac70400851ecb6ddf99de"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "eed45379873a16831dd4db74a24a083b"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "1686f77cdf2c40b4fea3f8909d10c68f"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "53166f2a350aa0764adbe329b9bdd367"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ad0d04af22e49f851d787cd423f50bd3"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "6420ac6583b34a72f42a7566be23d632"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "8a530d6a92e43334556859851223655c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "08aeb8ec491f4c054834003eaaed6cc0"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "7072816850a1df141803a08c8b8da10c"
  },
  {
    "url": "timeline/index.html",
    "revision": "962bf5eec404b99fa4f82911df202a37"
  },
  {
    "url": "views/about/index.html",
    "revision": "2ecd2ac2c80fbaeca67611e82536ae6c"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "c2bba7f97e01f0ceff33df51ca4da164"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "5ca8f060fac7ff9ee7388c17854dfd10"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "40dad597ee94ca286a7830d1335d2e3d"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "16ad8e204d8fa06a19d7e940ef30340a"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "9edda2222b4451154fd0847d1486aea5"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "27301a16121ca7d3158e5ec444fbdd23"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "0b4aba4547f9bcc72a7b70b0979d0980"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "874bdb2647a5d809e45249871b7dcdfd"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "729606e8bc0dfe4e0fb3bb2ff82aabb1"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "1a5d7ae5fb1bfbc47e7fdf1ef8dae5a2"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "9a9be83ef06ca7295034fb0d8d8d7a40"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "feac904dac7dd0b5b4752779b2e18a7f"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "145592abdf1fe9e049b5fcafc78a8cbc"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "76002b79ea5d6362d6ec97901b75c074"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "cb05cb86d374d24c040916dd126b3309"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "8a8552b91dca1b65936a5e96fa1e715a"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "244503e9044f70d72e36b67d9dabc519"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "d21318e2e79ec31419aaa0cab135e32d"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "91b4023901571edf232abaf73b008449"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "be18b6b48c46e1e4379fe2596b66c758"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "2fed2e051172b01525d49ca03411296e"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "5333953600dae1f325eb7cb040c477ea"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "b443b71825ab7c2059913e1f0bc7d904"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "f272cdeebe27dea798d0d755c812e2a5"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "1df85c6e5119e917a87f6cd9ab469512"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "c8e59fbb035b7637de01fd6264e81da0"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "568ce8aaa46dbafb5f673e5af661f3b8"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "b75de6a44ca8f22362002b1985b9d8b7"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "2580f4f5dabc8f57e6b3cfd4330353b3"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "b8ff26e8f2b9c4a3bbe6f222aa74c950"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "a6af36a374c43e4bdfa3f9f3cf118c23"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "67988b47ff58fa549a7171a0d44c9fd8"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "817b4a76275b843ded6c3973b6a67af3"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "c4dd2937d56ed6fd36203bf2397fb6e8"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "a879b2b188ff853dbf88c4698d8c0dc1"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "53666c8f52bc003a4bcb5fe775d729bc"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "54d908a47eb952838237789cc6316e2e"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "1be7f871260f487c562b4448e1d896c5"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "873df9c207d885e66a887b688067739b"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "03dee07bb1814f27494af3dea760fec2"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "4484c12106cde98a79e16f8f2b4920de"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "44e4aef9ec13be198519fe463248577b"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "0a60b5dca258f4cc947658c8e122400e"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "96369a01cddea7b6d0ca5f0074c785cd"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "94fcdd09e93fb797f2b0782454bbc1ce"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "0e7d32503bbced2db41282772453a8ef"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "a8b5d17c82936b4e67232ba6cf579dd3"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "3cfea082f9bde1e4303bbb8973e67513"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "00da120ce7df2ac76bf1d0690566bc85"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "9bba4d7e197df1e3aa10d47f765a63bc"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "c02ef4fa01fd840b10e1a64746c3f3b7"
  },
  {
    "url": "views/project/index.html",
    "revision": "8d24d6adfe6812c5611e1e28d81990cf"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "975c6df0df9e98403c510f0cf5a22cd9"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "884f2883e6bd7dd44a3f86563497d46a"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "62e28ec94f7cdd1cc54b3fef0cc0e88a"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "7af5517fbd464a4dd41a3b49e569bb3e"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "8588964735fc879832c21c69eeb33a00"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "6cab0b3b53bebe6f40a5d2499c46ec9c"
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
