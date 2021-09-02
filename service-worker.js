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
    "revision": "63048417330c6f820921687264b1f336"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.6b748862.css",
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
    "url": "assets/js/10.381e24f2.js",
    "revision": "9cfdff2d68224ec5a08dd1b0e30fba0e"
  },
  {
    "url": "assets/js/11.10106e82.js",
    "revision": "7de794a988cffe0b149401cdf1a8dc65"
  },
  {
    "url": "assets/js/12.1e91d1f0.js",
    "revision": "6456080dfb36bc186834bccd77e78208"
  },
  {
    "url": "assets/js/13.c231c09c.js",
    "revision": "b21716b14f395bc83d23ceb6098ba7e3"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.845eae8d.js",
    "revision": "6e21165950350e8271e2978abb5efde4"
  },
  {
    "url": "assets/js/16.5883af77.js",
    "revision": "e17525868a09459e28ff37eb1899dc12"
  },
  {
    "url": "assets/js/17.8fd893af.js",
    "revision": "6c4d338c74e110ac8741195cca18728c"
  },
  {
    "url": "assets/js/18.d49326d4.js",
    "revision": "e9f3d88c77c4ee4f75f98ab75b3768c2"
  },
  {
    "url": "assets/js/19.e7b7cca5.js",
    "revision": "bb896501d03a45b3567e01a2a8c04d41"
  },
  {
    "url": "assets/js/2.ea2c1918.js",
    "revision": "0bb3df39eec3c49c057c1900e15931e0"
  },
  {
    "url": "assets/js/20.56d6a285.js",
    "revision": "a94eb6f5e152070d61886dc5405f1a8a"
  },
  {
    "url": "assets/js/21.7e24d708.js",
    "revision": "2c191685ef321446d714d2baae8645a4"
  },
  {
    "url": "assets/js/22.e707f628.js",
    "revision": "7ea07309f686dff845ea597f17ee043e"
  },
  {
    "url": "assets/js/23.f7cd4680.js",
    "revision": "c7fa034f04d9bbfe5dc71857dd5abb13"
  },
  {
    "url": "assets/js/24.a404ffe3.js",
    "revision": "f595a86969e229901a579ea787bec4e9"
  },
  {
    "url": "assets/js/25.7b86e2cc.js",
    "revision": "736a9bbae7a9c8c467c28ff90b04cd5f"
  },
  {
    "url": "assets/js/26.fad58d24.js",
    "revision": "e1dcc724fc38d41a9a89ac2301c58638"
  },
  {
    "url": "assets/js/27.debd9e66.js",
    "revision": "b43ec468e25f8f77ed603649dd50269c"
  },
  {
    "url": "assets/js/28.1972236c.js",
    "revision": "13ea452ce55b9f1c2d7d9a6b632fd7b0"
  },
  {
    "url": "assets/js/29.ca866e9d.js",
    "revision": "8af9c104369b6208257a26041e547ebe"
  },
  {
    "url": "assets/js/30.e5f5718b.js",
    "revision": "1944e88c40360bb5901e53b5b00eeef3"
  },
  {
    "url": "assets/js/31.123b567f.js",
    "revision": "33f4fc4fd798164a5bd520568e412e76"
  },
  {
    "url": "assets/js/32.756cc8f0.js",
    "revision": "54059b731ea266d2b8075e31e2f4c76f"
  },
  {
    "url": "assets/js/33.6bc5a1bb.js",
    "revision": "c731af1fc7cb14b400425454839708e1"
  },
  {
    "url": "assets/js/34.72a12572.js",
    "revision": "26c06047bda175e1edf2edf47fa46bf3"
  },
  {
    "url": "assets/js/35.314c3d4c.js",
    "revision": "2bb35de817b13c46b2033bc06fd1c16a"
  },
  {
    "url": "assets/js/36.019a7f7f.js",
    "revision": "edc65b9cc72b6484069e9d651f1320d9"
  },
  {
    "url": "assets/js/37.e900a116.js",
    "revision": "72cd568f5142cc7556663a93f5b048e3"
  },
  {
    "url": "assets/js/38.7697abc4.js",
    "revision": "bb547e0fc4bd5ab12b7286e0b1b118b1"
  },
  {
    "url": "assets/js/39.c1cc1257.js",
    "revision": "0c8f3fbf3dd20f178d5ac87352b745df"
  },
  {
    "url": "assets/js/4.c418f0b6.js",
    "revision": "43b5e17c67d24009de3e7d50e5bd0dcb"
  },
  {
    "url": "assets/js/40.c0dcf566.js",
    "revision": "906a5195f2e679d48d8dcf25af064379"
  },
  {
    "url": "assets/js/41.007d4850.js",
    "revision": "068010809b95d1a71884064bb2b32e7d"
  },
  {
    "url": "assets/js/42.9ad008f8.js",
    "revision": "92a5f1cb8e7a07ea951ed3211ec06bb0"
  },
  {
    "url": "assets/js/43.19a726f3.js",
    "revision": "b6cc326c1ac29177c89e7db7e6f9719b"
  },
  {
    "url": "assets/js/44.9ac1d134.js",
    "revision": "321c650331eddbd304dfd981b66f8703"
  },
  {
    "url": "assets/js/45.f90be785.js",
    "revision": "29346a0f141bf3454b3e71e02d77595c"
  },
  {
    "url": "assets/js/46.8171eecd.js",
    "revision": "9e032218575dadf6718b16f4645f6dc0"
  },
  {
    "url": "assets/js/47.955ef85d.js",
    "revision": "3c4a72c50dfdd600f4b2cf8a050543d9"
  },
  {
    "url": "assets/js/48.c344c018.js",
    "revision": "5a1ade76c0ef89d0fff485c38ba7bc9b"
  },
  {
    "url": "assets/js/49.4250f913.js",
    "revision": "6e3838d7f0bb67651daea3ceb768fc7d"
  },
  {
    "url": "assets/js/5.d1fe3a72.js",
    "revision": "e3e78c88d6029626a6f0426bb4642302"
  },
  {
    "url": "assets/js/50.4093cc49.js",
    "revision": "b80213307183de4ae0b6d37deed53b65"
  },
  {
    "url": "assets/js/51.bdaf59b9.js",
    "revision": "c262d618537640eabcdaae0d367d8b09"
  },
  {
    "url": "assets/js/52.10b26bec.js",
    "revision": "8d069783fd0e2b59970a098eee7b31ad"
  },
  {
    "url": "assets/js/53.067492ba.js",
    "revision": "86fe93ff8aaf05004473a8e8a406a49a"
  },
  {
    "url": "assets/js/54.5fae0572.js",
    "revision": "30db454bbb7ecc2ed353340fc834fd50"
  },
  {
    "url": "assets/js/55.539455d1.js",
    "revision": "f4880797b33f7e68642c364e41c5195d"
  },
  {
    "url": "assets/js/56.43f215f2.js",
    "revision": "22f0ba50d0f93561eaf96bf9c12d2934"
  },
  {
    "url": "assets/js/57.4f0de544.js",
    "revision": "fb807596eaa329242de33a56294dad2c"
  },
  {
    "url": "assets/js/58.46f598c7.js",
    "revision": "ab575ce06a1f27d34ec90976922805c5"
  },
  {
    "url": "assets/js/59.1f6e75d0.js",
    "revision": "42e18e7570ff5f2dcd53b77d21673e72"
  },
  {
    "url": "assets/js/6.16179fba.js",
    "revision": "5defcb394481a1c1fad1d5e093db21c2"
  },
  {
    "url": "assets/js/60.a9e22982.js",
    "revision": "9f2fba7ea8fb400b578add7db11bae74"
  },
  {
    "url": "assets/js/61.b885998c.js",
    "revision": "90273cf6a18187920bc3296808aa3e30"
  },
  {
    "url": "assets/js/62.2d1adf46.js",
    "revision": "6d2b9bcf4dac40c3c2e1be9d4a05d0fa"
  },
  {
    "url": "assets/js/63.6ff31512.js",
    "revision": "9f059ba7699d9da478e615e9646cfed2"
  },
  {
    "url": "assets/js/64.b0607b53.js",
    "revision": "0d723b3398f7bdba2e515e2e5c0aa3b6"
  },
  {
    "url": "assets/js/65.3419e84d.js",
    "revision": "1308116dda8e5c2842507edc130bebe1"
  },
  {
    "url": "assets/js/66.bac2e63e.js",
    "revision": "f3444c15efa826f5817502a05f828fe2"
  },
  {
    "url": "assets/js/67.83127c6f.js",
    "revision": "1d5a406185c484a8b5017ec7d311f5b4"
  },
  {
    "url": "assets/js/68.4e592abb.js",
    "revision": "c734abfcc41f6c7ad267df819eeca38b"
  },
  {
    "url": "assets/js/7.3b697070.js",
    "revision": "c2b4d742db89b152d8c140ca81389a0a"
  },
  {
    "url": "assets/js/8.17f591e0.js",
    "revision": "b189e7ffece9e15210f92c9cb3f9d7ae"
  },
  {
    "url": "assets/js/9.a90cc6bc.js",
    "revision": "7b01c307a06860705e92ed3247ec9883"
  },
  {
    "url": "assets/js/app.f4047000.js",
    "revision": "52219e3607ccc11de453c93b6b096226"
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
    "revision": "f8decbece8368806b06d9b3bf0f5e037"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "c39652fbf202a1abeeb71d1700f35b77"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "af825d90e2025637a2509af5da1572f3"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "1db5651635e82c75a9baf78efe196cfa"
  },
  {
    "url": "categories/index.html",
    "revision": "d1c520536945dbc08efc09833af1a50d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "39da04bfcc49240ecf542d3c34a09d37"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "e4dc1df68cea71123119a9dd1ef07092"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "edb7b9fb7c387fd03c6b721364a373a8"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "525f3c3b80171957178cb313d6b89e54"
  },
  {
    "url": "categories/other/index.html",
    "revision": "54938535c40e9e77d36a7fde7d77c3f0"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "2232151ffc30d536d50641dfee75d60c"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "3b8d7adb6bb49e2be717b24b428aee45"
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
    "revision": "39dd422c5de86bc80e241104b407fa51"
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
    "url": "self-blog.jpg",
    "revision": "adb6dc7dc0094c1d160cb8fd601514cd"
  },
  {
    "url": "self-resume.jpg",
    "revision": "0b07c2fcf77fb875cd329e73ff1e1f38"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "15e334bb7ff4b5d6b054aec83af567c4"
  },
  {
    "url": "tag/App/index.html",
    "revision": "f7f0d46689f26c2489c3af4691d7af6a"
  },
  {
    "url": "tag/array/index.html",
    "revision": "b6f7372339ac8f3638058cb6cda73642"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "3d5fc3a78ef8ec307149ca6335a192f5"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "c8b119f00f8a990c50cc0fdd8372a509"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9d5f1ef7e511a2462b6c71191c04381b"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "057bfacecc280a4b24426199d4c68024"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "0881d177b472f8fbaeee2a69eade9f23"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "e63b007447af1f395572c09fbd757938"
  },
  {
    "url": "tag/git/index.html",
    "revision": "dd13b7e5b2fe4202e3d4430f44b07dd1"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "83417bf5958c60fe5e06af9eb1f168cc"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "49616148e00471443eb798fc8257a5c5"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "75f79abad72241ca615e279307ef3562"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3d4cc6f40e3af685a9cb208cca538441"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "c0b607d6121a6dc0ba4e3f652ed5a864"
  },
  {
    "url": "tag/index.html",
    "revision": "e12ce4b1ddb7ca9eeba88c3b904c7f5f"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "5443c80fc125b5aaa7cdc6cd0aa911e6"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "9328209e92ed4460ff824bac602dbbfd"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "9504116fde2cf584eb6260235b897af5"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8f922442556998629c454afbcc8e93d6"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "201641fab11143e59cd9ef1cf7a3cc38"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "ebefb8348f17f8dcba0f62a43dccfdfd"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "c13c5104d641a2c587329eca401481a7"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "0271357164adce2d8292a10a6bb94b89"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "d87bf4e244fdc0b28bd7f71f8efe71d1"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e6f3f1e28055a758bb069634798e872a"
  },
  {
    "url": "tag/project/index.html",
    "revision": "b10d9f61f6ca06670cfff72e25b501c3"
  },
  {
    "url": "tag/react/index.html",
    "revision": "bbf7a35bb2ed42fec0042bc5b7ced45d"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "256d9b5f2d876bcc47d6eb40fe7189eb"
  },
  {
    "url": "tag/router/index.html",
    "revision": "4d0d897e50e447521eb22dbe590680cf"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2c70c075b4d1796a60d97f6d0c811b3c"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "7c02477a9a71520f8a42ada9da850336"
  },
  {
    "url": "tag/style/index.html",
    "revision": "2cc47be72e5eb18364477d5a7e1456a9"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "75131c76b45a546296da1bb8cf5d3156"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "31d3200c760f299ed73e45430a75895d"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "2b37d6fdbcc8f46dee2ad574ff649510"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "188f011c4de8091998cca445400b7e2f"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "b91d072c5ad4b050a151328e575006d9"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "cbb75879f15e6599077db0556e6ebc00"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "8fbb3cddad9336cd0c743ba6385ccede"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b9a2b8fd529cfc445bc43e30668e86f1"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "a90050d0ca2ba95d3fb14c1cd80f8bf3"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "cc2988ddcc529e03f9db95d924f2785a"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d5eda1f906d6a121d13d4ce866fbabde"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "6c2451dc09cd8da2afb522a26ea5b43f"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f80f5cb604db432f4d900e7feca3928"
  },
  {
    "url": "views/about/index.html",
    "revision": "1b2805e8a4e42dff328410d3d8a3e1b0"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "dc8c2d60626fd59e170361830c3fcbba"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "91db56a6f4308d3f4c21148c2d3e8189"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "7a56b9bccabddcdab0ae7f03348f3dba"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "1b2ac3bd88afb81435c2e80edde20bd0"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "cc8d9de10bbb6d62fbd1ebd1ae515916"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "633f9ffe2de6bbc768301077afd09ad2"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "9a6dbf4b71e5f9a54b563b41be6a47f7"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "d52f5f4cdc499ebc3eb4eaa40af03679"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "3a944298eab63ccd044d478e26dcc070"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "abd74248de7c80529ea80d2e511fb4a9"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "bbd8cfd93f293092824dad7d47260d90"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "43f6741503d5d8b8b585e45306a81838"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "422c291e3008b4e5cb2f55000b4cff43"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "346a7d0d967052fc6a0ef1c0b3292dfa"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "61e3322cc713c82b5d93eb8b09341cca"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "db3294830d6489dbc35d272f1ff0e988"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "9c823a4c083eaa64ac8e1b6e9e7309c5"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "6177cd67829774d317cb880bc928a775"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "89d50a6238021eb01e6948ad5bb0b99a"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "4135926c735dd1b9a0bf556243504fc8"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "0cb30db1cde2dd2cd3b971c9ef67730a"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "5d68d514a257264491ad6d3a4243fb9d"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "078d7eb1e1967ee6a0b0e4affa68ba6a"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "29e851a6491475dfde97cc60f598ceb5"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "ddb6f9fef9525fb83349eaa5d91bec10"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "09e503f1f78fd8d25f99d320a632fbb6"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "b5c41980b84fc197ecaaf63983da61c8"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "9da1d7aa27731b6d43a7ed6840b6e716"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "284bc790153dedc4fd566b0e242d063f"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "49a7c3be15680b809306b224ceff80c4"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "8187f10b6e9f9ed3f57b632497e35c66"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "e0567573ad94d2720e101157b8329912"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "6850dfb3fd4573488acf03a7bc5ecbfa"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "6e9b5a276515a7eac816b56f50b74de5"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "058597088f92742d691d0d647297214c"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "1df26107a4cc2ec85899dcfb30aab1ba"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "305586004c205b9b9fc8aaf43d626a18"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "332402942e3655bb004a8678762bffe1"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "4e413549515f2c643e04b88249ddf777"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "a3c309f018d92a1ec2f8452ff77c9c68"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "2248da79900091cb8f8caeef86baffff"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "ee4b453dd9e0d3ac48fe630134877520"
  },
  {
    "url": "views/project/index.html",
    "revision": "287721b11da2617c5b46cf6f4658c796"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "e81e18291b8035a59dce943174b13f1b"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "1f6a08ac6a4de037b224e95cffd5a782"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "2d4ba44dec95d0ef5dd797990512893f"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "fcb78d41e95d7154a202d1b2f6b31082"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "b6deb166d7ea79c28a44e531bc9c7565"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "6fde191e1f543d84b3ab8a5e87c19939"
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
