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
    "revision": "7c7c7607ecda22a9d8d5ab1529140152"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.6bcaa63f.css",
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
    "url": "assets/js/17.5a24392f.js",
    "revision": "ace67e01c87bba55d4a31b0a91dad300"
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
    "url": "assets/js/20.312cf94e.js",
    "revision": "ec4b5f11718fdbe80c593edfb66a9b6c"
  },
  {
    "url": "assets/js/21.123eea38.js",
    "revision": "be8b59f9486c9fe9e232c4b2d3c1d4af"
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
    "url": "assets/js/24.86d8d4fd.js",
    "revision": "eb3aed7f2752cab7a05eb4ace19db9e6"
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
    "url": "assets/js/29.f7673169.js",
    "revision": "e38240fca4c7140265777e9c30b03a88"
  },
  {
    "url": "assets/js/30.ea63b391.js",
    "revision": "6790c13c050be2c841970a7eb46f48f8"
  },
  {
    "url": "assets/js/31.4135af1e.js",
    "revision": "4fe2bafb57b060f079a3f87d6f492fe4"
  },
  {
    "url": "assets/js/32.00af4855.js",
    "revision": "5c06b907940801121aeb688675b92903"
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
    "url": "assets/js/38.88001375.js",
    "revision": "3ac2c9a3d0a3283df25cf7823d927e07"
  },
  {
    "url": "assets/js/39.772f8235.js",
    "revision": "124168010178ba8931439275aec2efbe"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.69fe6ae7.js",
    "revision": "9a025643eb42e826a3059111099f90da"
  },
  {
    "url": "assets/js/41.c82f9660.js",
    "revision": "5f1d022dac520c1c26fc6cf86299a7fc"
  },
  {
    "url": "assets/js/42.631e34f7.js",
    "revision": "6098b64a35f0554aec9d463a36f9bab9"
  },
  {
    "url": "assets/js/43.08e84b07.js",
    "revision": "6ed0a7aab7e80fee0817fe9e0c0ccb20"
  },
  {
    "url": "assets/js/44.9cf265fb.js",
    "revision": "26900be3255a95018fa454577809e344"
  },
  {
    "url": "assets/js/45.2b3458eb.js",
    "revision": "5b381de253d0b8839651d357dba418c6"
  },
  {
    "url": "assets/js/46.5df9d0ed.js",
    "revision": "9fff5d85165d0f2087fe6277469987ea"
  },
  {
    "url": "assets/js/47.039826c9.js",
    "revision": "3ae9b7140a14dd28f17bb0f678cfb1f7"
  },
  {
    "url": "assets/js/48.91853677.js",
    "revision": "df6cc0482bc700421b0bc61bdc866045"
  },
  {
    "url": "assets/js/49.fe670f5d.js",
    "revision": "075cdcaaa4ea1523866a9d7d41a6de08"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.49076c1b.js",
    "revision": "f32d71dbce6a8d273a2852e2f17821fe"
  },
  {
    "url": "assets/js/51.3c4daa29.js",
    "revision": "2e5a8a779fbdc6abb7795f2bdb38f38a"
  },
  {
    "url": "assets/js/52.f367d620.js",
    "revision": "5d882c0ec4adcc1531d35d2befb4f8ba"
  },
  {
    "url": "assets/js/53.83cce2f0.js",
    "revision": "4f59d31ce2b559bb7a53e5759b955284"
  },
  {
    "url": "assets/js/54.78375a42.js",
    "revision": "a5036e8f6d2fb78af6f78ef2116d753b"
  },
  {
    "url": "assets/js/55.3c2986e3.js",
    "revision": "7bb4c35df2686f61aaeab2833b33c965"
  },
  {
    "url": "assets/js/56.a9466eb0.js",
    "revision": "ac15afa200ace98b2dcf86a99afcbd11"
  },
  {
    "url": "assets/js/57.f71fdf1a.js",
    "revision": "ee178b73485126bd6f1e78fd112a81d5"
  },
  {
    "url": "assets/js/58.888136f1.js",
    "revision": "bdc3eef48b5d2bbb38a07b3f5b5c9dde"
  },
  {
    "url": "assets/js/59.be587880.js",
    "revision": "1c2edac2120165a16a36f595d20df121"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.7f612562.js",
    "revision": "fcbb81e166383c6a0a8c7c9786ae5a36"
  },
  {
    "url": "assets/js/61.996f8851.js",
    "revision": "922891a7141a2dfa641e0627ceef6731"
  },
  {
    "url": "assets/js/62.71bc0536.js",
    "revision": "b16cf9c02d96eba7cb8328a74b99f610"
  },
  {
    "url": "assets/js/63.bdd4feff.js",
    "revision": "5ba3e2b01657de92fc5faed6059efddb"
  },
  {
    "url": "assets/js/64.7d312d3d.js",
    "revision": "933aca23c43c51ee33026629b1a349af"
  },
  {
    "url": "assets/js/65.e6f40698.js",
    "revision": "a18d038573d4185b72f2a9a75c7d4822"
  },
  {
    "url": "assets/js/66.efdad4cc.js",
    "revision": "2fb4a15e4e09503dfc4c1b4ebbd224c3"
  },
  {
    "url": "assets/js/67.322a71c6.js",
    "revision": "50a6b2cbcd4ef0c3a2a3862d23e48404"
  },
  {
    "url": "assets/js/68.51649528.js",
    "revision": "8cd9e165187e84f43369addc39d5c9f5"
  },
  {
    "url": "assets/js/69.aae3ffd0.js",
    "revision": "b91b9a7e6481a073e451f76480fb8c17"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.3c0cbeaa.js",
    "revision": "e50044904bf82a1c297b52c5ab4a5ae3"
  },
  {
    "url": "assets/js/71.c01978e7.js",
    "revision": "df1c70606d97f89a430b5d4bc877cbf1"
  },
  {
    "url": "assets/js/72.4e35af48.js",
    "revision": "93439224637d37db5c9b4830843133f2"
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
    "url": "assets/js/8.d0a11db5.js",
    "revision": "7d37d11592a9ea48a943d72bd0dbb6e1"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.1784777e.js",
    "revision": "381afc654fb8ad5113a0953e1d6e1e8e"
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
    "revision": "2ad06c1cc0b14825c3b37f96a6604802"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "8642af2867245d43b7bd4ecd23b1d74c"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "555a09a5296465ec838830ccb1b73ac0"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "5899c2c726aafae2bd34e68da1d6755f"
  },
  {
    "url": "categories/index.html",
    "revision": "85b22fd99973dc094b4a7a80fa756487"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "ad481690570bf522192b127d56ed5fc5"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "f3f011f667105ac9940fab5808c5ad3d"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "2a1f48115bc83c30c7cd0f9cbf8688dc"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "89cc8acfe3642418122cd305eb88569c"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a82e66154865eb6a3dffa37d0abc4204"
  },
  {
    "url": "categories/other/index.html",
    "revision": "40c8edaeaa4dace9ee42d8ef549b0f78"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "351e23b142164f181c913f0af51ec99e"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "480a0bd599ee01d1d5e1b408d51d73d3"
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
    "revision": "96ef06eeb18006dad34ba3d71c9e9cf4"
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
    "revision": "c4618514bb34f78931fe0e429e58fa72"
  },
  {
    "url": "tag/App/index.html",
    "revision": "b9f1f4e08d2060004463fe9ecf22478b"
  },
  {
    "url": "tag/array/index.html",
    "revision": "09eb1edae45eb700e51abca14884fe41"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "ba1b70b8c84cfca43f21750104f5a8cc"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "a5dc1cd26da7276fbe890235865c3792"
  },
  {
    "url": "tag/css/index.html",
    "revision": "84e5a68c3d9d7059e3b2c1adc1c32485"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "f1fc9b90911b3433d39497aa967298d0"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "c78eda891cfade186daeade224758d63"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "bb61e3b031ae0fbffda944ef5bb88801"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "ad953169071a140a11dd8bf0f4b3e52c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ee652f79baa30f1c2d85d6ecc1043587"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "f01a28a305df101426aaf390b0dab476"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "a6194c577f1a01cb63ea71de1618b4b9"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "6dad73a4fdb243dc21cd1f1d8d000a6d"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "c527caffb9e20a838b26273b37830915"
  },
  {
    "url": "tag/html/index.html",
    "revision": "067c3f26765d60cbfc308f1841bd8607"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "bc58628daab511ffd7427d8e8d182266"
  },
  {
    "url": "tag/index.html",
    "revision": "00a95bd6a7cfeadbc985b719f893055e"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "85047079d0e0c2b7c0ad2839fc5b4c3c"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "32129d7746340e7084ed5231b18bab3e"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "120762bacb842308e4b4f18d7005f0fa"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f723f04c828f93282d148ebe411a20ad"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "976b78e9d92ab72f8bf65a687f8cc76e"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "fcc7a3735f6d29f7e0773eee51fa0328"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "357b5ce61fd48867092b91017984947a"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "9f269eed47dad98b8199a26fcc4f7e77"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "1b8b88eb97e6ebe79c2d340bc581ae86"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "d7fd42a13d3cec625c381dc02df4b637"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e1de0c54853f8d482a63e60bfd11b5ee"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "c54961eaf764073b84af18927235feb1"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "8ca22fb7b0bb717a45db52bbbc58e276"
  },
  {
    "url": "tag/project/index.html",
    "revision": "d9b1fe9323a7ef5913f353a18b39a628"
  },
  {
    "url": "tag/react/index.html",
    "revision": "459010e695b07c0e27912090c76b2ce4"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "dbd039e34827476fb4b3c3ee3f6c93a1"
  },
  {
    "url": "tag/router/index.html",
    "revision": "64bbc9a6ece8aedb89c67b6147ba855d"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "9fa6ad8999f77cac60a4242704b4a475"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "6356793db6298ec04499df796c0c84a1"
  },
  {
    "url": "tag/style/index.html",
    "revision": "1d0051ddadb861b45ba1a97b71bd471f"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "3c1025d9808e549fe8012cc82aad0660"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "c9acb3ecc96a1a4b18d67d36919ad590"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "00ee72f976f88f6cf75dc366742c243a"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "402184bc2e40bb87cd4b02ce92ab3a95"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "141d99200bc0f7227b30eb5853b18001"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "18c006e4f27ae41c6151abcc177d2ad1"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "ce41866bff406446da00908bdc634a28"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "a1df246866893c3f7704fd5b180a7b94"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "fd5d8865198aa3cf25f4410fb23fc70a"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "f80ce6b6e2c008b38abf9492138997e9"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "af0d2ff08ae35d510a3f764a541a1808"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "293bb932668ee167e7d8747d3f0aa432"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "e2b07c5b40b159259467ddf2eb5e80c8"
  },
  {
    "url": "timeline/index.html",
    "revision": "5de5cb5773b88a734f0f9c2497b12043"
  },
  {
    "url": "views/about/index.html",
    "revision": "9f7c7cbc693466475edbf16a2a1e2e9d"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "904ce1c3936c5a8181089ab47c421a32"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "50ac462b3d64dd7524bf9b84341cec0a"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "cc1608e493cf3a972f46582b6a3ffc7b"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "1b2ba693c41a6670a0415ca25a5b8909"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "0d4c9c8badfa52d82178d87cbcb0cbf5"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "2f5fe02620661777667a79e62a4c417a"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "df9a03e48d4a8298e44d29ada55f470f"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "c1842b8cfa9acb01b8e3f6900d018b24"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "5097f7524a6bf471ffc082dc4a602598"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "57868880331c3b63a573a05cd0fe736a"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "b4a5a5241f57feeacff261489a5b198e"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "46704b74002e09b703655e76cd14790c"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "2856607583dcbd1b141b3dcf2a276225"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "729f3f3baf6d26cda122289e347119a3"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "90d9f42f265509d03953c156a1670947"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "2ac23e70e8adb33d645f6e51a755ce9d"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "0b4bf7cdcdc3bc88fdd160cc6b44af79"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "ead6b2c773d1f34ddda37d836a318dd7"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "d6af757018691c4ae128f087375adbdc"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "9ec6a2541019cbfe7171efa2fb6941a7"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "7d42c9173247d4e64084e971bf72c7e5"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "e5b95128c2ab3fc4dc43bf9c2a3d1cee"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "8ebd59b38f62d43b9ed61d67a42b0687"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "0d50eb85cc25f64efa31e9223eff284b"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "f8fb68f29b5b0ae458368eb7746624c0"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "0c4d62bda48a550c7741ed990a339767"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "9700019d6eee1be574ec99bcb0d76a9c"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "41c75fcc15754629f181c7c749d3d68b"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "2e4927c6eede1c0c6db7069f1d79b55d"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "b58898f565f3205e6fd6aa9c4ffbcf16"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "a357684e0cf8235bb13a79dc22de9967"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "b1908cef137bb20d4947e59d0334d70c"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "92fac0eb7006c51dd7e09f9ce77751e5"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "b72428a3a0afb19554a56bfde3f63998"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "c228370e4502b787bfbbfe5c1ed43673"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "1076d9ac2b1be0cc806308481a1e4b83"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "8aee0bccc8ac8e30d5cf15ec5a835962"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "2059ad99d30719faccb3ce4d8c5982b6"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "45382f8dcb064b762908c011d21283fd"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "597f43fc76b27547acddb056c266035e"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "a2c1437f2604daea85f6a0a5da7889d6"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "49445d3b6d8ca6bb8ac73b5b0b549533"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "530ca81369792032fcab508e0e7b7d63"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "6184654cafd161e3ed136fed9528fa4d"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "d26c8c3a104dce5ede1a740140a5665c"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "519ca679565f51bc2ff5a4b0443079ff"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "5ba07fa88762ea40b18bbdbcb2dc3e3c"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "a2a1bf52a60dffb5859ec7e21a9dcfc6"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "c25509bf8e1efa277769cf8dd50091fb"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "8829720e69e977ad44c4b485c56d7b3a"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "99663aa6f81b7388926463d7583943ca"
  },
  {
    "url": "views/project/index.html",
    "revision": "99d927b64eb4c031b2e261e62f611694"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "023a7d45dc2cb05d62123098b95929dd"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "68b71776372d62abff8321b573d11299"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "1de4704ac8b275864be341fd7c81907a"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "d1262b446addfe7cc50b40d65ccaa6d8"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "160d6ed203151cc410d1332859858b67"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "8cf8dc2197b944f52c841c97c56f67ba"
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
