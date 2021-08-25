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
    "revision": "f0ceee712ed0f57cc793e14fb83adbe0"
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
    "url": "assets/js/10.54a37c5a.js",
    "revision": "410667d65ec14b753bc90a290c87a640"
  },
  {
    "url": "assets/js/11.02286d2d.js",
    "revision": "be0580073df985b0b04d11cf21e38207"
  },
  {
    "url": "assets/js/12.54751a62.js",
    "revision": "f880c073b4e0a0850a0212737da64a3e"
  },
  {
    "url": "assets/js/13.3a25a5cf.js",
    "revision": "c51a2c63c6db69b4b6fa173af578e835"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.d15e5ecb.js",
    "revision": "6e57d6ac23317e9aa5e7742ef435e27b"
  },
  {
    "url": "assets/js/16.0ad10624.js",
    "revision": "229b30275e301a26ce74bd37247e74a4"
  },
  {
    "url": "assets/js/17.24836aa8.js",
    "revision": "ffa942fe30eec5870bd6f90dfe56fa99"
  },
  {
    "url": "assets/js/18.08db46f3.js",
    "revision": "11b12888bf96c10f9efdf0d001c3ea98"
  },
  {
    "url": "assets/js/19.8dc74c58.js",
    "revision": "1929cdf0ce14db1d06874365b1a74960"
  },
  {
    "url": "assets/js/2.32abb23a.js",
    "revision": "0d1616ea68e89c1ae42cbaf158a27c55"
  },
  {
    "url": "assets/js/20.9cffd851.js",
    "revision": "c47170d10213f5fc861848a1fdf43910"
  },
  {
    "url": "assets/js/21.7e24d708.js",
    "revision": "2c191685ef321446d714d2baae8645a4"
  },
  {
    "url": "assets/js/22.4e5d2726.js",
    "revision": "d409b75d08a3272f3c3b23d372e4ec60"
  },
  {
    "url": "assets/js/23.ef957fa8.js",
    "revision": "0b0e6b18c898cdc908f04b10c9b6b4ce"
  },
  {
    "url": "assets/js/24.a404ffe3.js",
    "revision": "f595a86969e229901a579ea787bec4e9"
  },
  {
    "url": "assets/js/25.d327d437.js",
    "revision": "65693404d6706e84dc8f48e12613a6f9"
  },
  {
    "url": "assets/js/26.a231c8db.js",
    "revision": "2f7ee5cb3eeb6e029854de3ef8fd7803"
  },
  {
    "url": "assets/js/27.ce545c0a.js",
    "revision": "e23ee9ee824060021b843ad584e9a2bb"
  },
  {
    "url": "assets/js/28.155fe584.js",
    "revision": "1da6b2037dab5ab6a06ce21a6251ff91"
  },
  {
    "url": "assets/js/29.ca866e9d.js",
    "revision": "8af9c104369b6208257a26041e547ebe"
  },
  {
    "url": "assets/js/30.d4c7b989.js",
    "revision": "653459b5bd5500b77fa1b0cffdc4fc10"
  },
  {
    "url": "assets/js/31.ef3d01bd.js",
    "revision": "0717f69975ac3fcf7b47235188dc3c04"
  },
  {
    "url": "assets/js/32.756cc8f0.js",
    "revision": "54059b731ea266d2b8075e31e2f4c76f"
  },
  {
    "url": "assets/js/33.d74986bf.js",
    "revision": "44ef91e35c0c7206a8d6f5ceb88c1681"
  },
  {
    "url": "assets/js/34.9a8ea76f.js",
    "revision": "bc8b02701e992c0f4fc6030ccf0cb221"
  },
  {
    "url": "assets/js/35.ce24621f.js",
    "revision": "6133f8db8a98701be24c70fe078b21c9"
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
    "url": "assets/js/38.a5672b58.js",
    "revision": "5215060134c5b3d14107661e32115a8a"
  },
  {
    "url": "assets/js/39.c1cc1257.js",
    "revision": "0c8f3fbf3dd20f178d5ac87352b745df"
  },
  {
    "url": "assets/js/4.f15c5479.js",
    "revision": "7c212848b01562e145d26c494867ca50"
  },
  {
    "url": "assets/js/40.3208c85d.js",
    "revision": "a727c96cd5d311b8c9befe46f37d9b19"
  },
  {
    "url": "assets/js/41.007d4850.js",
    "revision": "068010809b95d1a71884064bb2b32e7d"
  },
  {
    "url": "assets/js/42.281c18e1.js",
    "revision": "13a1d83fad151db370108b4975619af5"
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
    "url": "assets/js/46.288b44d4.js",
    "revision": "a4b7930d96281c5c4b86a026f94119d3"
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
    "url": "assets/js/49.ed1f1506.js",
    "revision": "b5ce7eb5bf75e70241cf95a540c262b4"
  },
  {
    "url": "assets/js/5.7fbe476a.js",
    "revision": "4692fbf164b9f1ca18adf811e158a951"
  },
  {
    "url": "assets/js/50.73898613.js",
    "revision": "d84c3678e642b99b64cedf04e7ca8dde"
  },
  {
    "url": "assets/js/51.bdaf59b9.js",
    "revision": "c262d618537640eabcdaae0d367d8b09"
  },
  {
    "url": "assets/js/52.7b296819.js",
    "revision": "7f4a656f60bf4131b87020b3db2389ce"
  },
  {
    "url": "assets/js/53.9730831f.js",
    "revision": "82b3e642ba0f1f4e2e1b9e794ce21bfa"
  },
  {
    "url": "assets/js/54.216021b2.js",
    "revision": "86c837c32ff33d6929ba844b0c7e82ea"
  },
  {
    "url": "assets/js/55.deb95c62.js",
    "revision": "31af340e2ad7831667052e9fe7d34f9c"
  },
  {
    "url": "assets/js/56.5241a442.js",
    "revision": "325c6140f06d8df55b4ed819bd931dae"
  },
  {
    "url": "assets/js/57.a52b846b.js",
    "revision": "103c9c80e5a30b8144e2f37e2af0b11f"
  },
  {
    "url": "assets/js/58.43472dc1.js",
    "revision": "8e013523e12016921977aea10859dc60"
  },
  {
    "url": "assets/js/59.8a2ec2d0.js",
    "revision": "967c3d09e2a6c655b8c16416c8f2327c"
  },
  {
    "url": "assets/js/6.220033ea.js",
    "revision": "9c3e65f1dd716f49f4ae4592f28b31ce"
  },
  {
    "url": "assets/js/60.41dd26c2.js",
    "revision": "8f46c1ce1fc5b31c58a2e8a9d3c11ed7"
  },
  {
    "url": "assets/js/61.b885998c.js",
    "revision": "90273cf6a18187920bc3296808aa3e30"
  },
  {
    "url": "assets/js/62.56e0af2d.js",
    "revision": "086e5c0be19cdaa8381d2e741bf5ac77"
  },
  {
    "url": "assets/js/63.1e784820.js",
    "revision": "973bfbba86f960d9b8edf7f706679365"
  },
  {
    "url": "assets/js/64.e8c3a6f6.js",
    "revision": "f82dd5965e5261a18ba5526d16b15059"
  },
  {
    "url": "assets/js/65.c413cb05.js",
    "revision": "13a61bc522ed021f9dbe912631fcc444"
  },
  {
    "url": "assets/js/66.1c2858a0.js",
    "revision": "23ad7ce2633930a50b6b1447004fbd3e"
  },
  {
    "url": "assets/js/67.03fe0c22.js",
    "revision": "99a1c0e949b9e0126bfb1aa919c17259"
  },
  {
    "url": "assets/js/68.f2c1835e.js",
    "revision": "6aae2c15fa0b442038cd68024a73b8a8"
  },
  {
    "url": "assets/js/7.9a09248a.js",
    "revision": "a002f45c8669d4dae4b6549660837aec"
  },
  {
    "url": "assets/js/8.f8799400.js",
    "revision": "eb86f4bfbc7508b775a0549b249518a1"
  },
  {
    "url": "assets/js/9.937d17e4.js",
    "revision": "999129be0b5b2033c5cef6910b42fd9a"
  },
  {
    "url": "assets/js/app.8a4757a6.js",
    "revision": "a95a30cf713cb4cb3a7408e8056ceb06"
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
    "revision": "4fb258f122437fb8a04d8f03d06f9c1c"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "c0653c34324d49d59622101a41f48ca0"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "85b459657dda752e0453ac6db0e87c5a"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "68479431aa7e795aa0aaffc278cda196"
  },
  {
    "url": "categories/index.html",
    "revision": "774cc4a3c3eac6d379c672d52d6a31c2"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "2c4b592ec66236e38f5283e0a246198a"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "1cbb97aecf1ba8c82993dbae882c085e"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "d54a3e7372af4d4e8f7c57e7eda85258"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "9b6cde809d6941801ccee576a7d4e10a"
  },
  {
    "url": "categories/other/index.html",
    "revision": "0967b11f7eeb1e19f9b306413fc62388"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "37159523359a4ff6eb150a0401b47713"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "ee669698fbe77c834c97995c30b53969"
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
    "revision": "2db8324ca3f2f71e5f36fc5467e20452"
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
    "revision": "c74d871bb2a05bc84a33dc55ade14452"
  },
  {
    "url": "tag/App/index.html",
    "revision": "232ceb229aac3324178d68d75bffc59f"
  },
  {
    "url": "tag/array/index.html",
    "revision": "b922e0e181aa9f90e302b5d8fce164e9"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "78f59b78ebc1782fcdd070bd17be1bd7"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "e1c23ee175bc68020359ce105dc5640f"
  },
  {
    "url": "tag/css/index.html",
    "revision": "e4a0249c90dd1fff6dc654668d3f4e8a"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "f7e5f85602f2666d7a3bb83f45a89134"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "506323ac4a6c39c99d9bd05c8ea73d4b"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "c18aeeb5db52ad45ef194d0270e7cc1b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e4059616735396ab2f2b3654ad9eb4cd"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "cc4b15e78435980b693a55cb0eb4c3e5"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "6b73b9d1bb2d94454d5c401518c6bae9"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "c7c20dd95d4ee0b8f6c10dbf8c1c5aa8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "da81df580b40e66d48d0745277207e23"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "3641b4d091d0174b9f4e468df9ba1f07"
  },
  {
    "url": "tag/index.html",
    "revision": "aeb4547fb92f92c2acea448ca5534391"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "86b8f4d1ffeb87d538730c8c95ec3952"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "3c8cd14f1214c211da57feebfc29b966"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "888564fb99bc4798050410de9316980d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "fbdb21d6ca4e06edd5a12f17171018a7"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "a49f7d48e5966e653c1555178f5a14e1"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "e6b4a5520f56be3eb77e0745b5c32021"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "67fef89cd9e9b90a0ef224c34fa5253c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d21ece1d90a70162bef26fd6a8849323"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "5510c84cbcaf6e8a6b610552a2d7fc4b"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e20935ba319046d540d0db6567f21fa1"
  },
  {
    "url": "tag/project/index.html",
    "revision": "eaeb027ef645561837a8ec6316c3d9b3"
  },
  {
    "url": "tag/react/index.html",
    "revision": "7ecd0d76d68c7d69a6108de164d04e48"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "9ce0674b9a082e350281106a9c07cf72"
  },
  {
    "url": "tag/router/index.html",
    "revision": "f3d2e1dfd8d865ced8ce780d9d6c0aa4"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "27a92e0fd55a9e5c8cd1380780136d18"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "548a0e79ccb6c3d5af241c18290cc290"
  },
  {
    "url": "tag/style/index.html",
    "revision": "743db6538f2d57cd9621cc5f776029bf"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "311dd8533f75dfd40380ee9d693de76f"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "f19d349a04c63843893a56fd3fab67ba"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "0023d506701942bee1759be69754717c"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "475f92e1d82bf2aa64b2049aa0801894"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "7d16edd80a5366a99b7ce6753eb7e158"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "8ebcba4662bdc07727af66cee9a7f0cf"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "87ae252ea427f7ba0ef18523e07e1e53"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b3ba75f983434cc228f0be5ff3e7fda9"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "c79c5f473f683664bddd1ad4fe92c5f4"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "60b8904ddfbe1aead133d940bbc266c8"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "90b18feca7900c20f144557ef1e521cc"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "69c9e563c8286913d4a21967ca41eab3"
  },
  {
    "url": "timeline/index.html",
    "revision": "edac595e6a0f485b0b234f5adf009494"
  },
  {
    "url": "views/about/index.html",
    "revision": "88619dec65137e926513dfaa45c442e6"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "136c80c8e6defbd50f4c496cf80f9e4a"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "0ffa25280712609d00877da591469dd5"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "3feda2a18fc40378933baf71a3b7b814"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "8707e10dde098d3aa6ae7c71447873cc"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "4b51d558f26771189360a05117acd969"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "526e3a5c39c5d69d75c7a69246ae35f9"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "c0df8ef6824aeb794ba60d2e6dd95cec"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "9db6472c0f4bdaeeb23ea1588d65e109"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "853f24202a0a35a5caa3a32772a3b145"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "5da43dc6cae7f6adc843085a2440bdd8"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "5979abcb3be6faae94bf431c0f435548"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "8a47b9f5d050784fc0c9c39491401acb"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "913cdc4565d2d5ad03196771c158a47f"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "1d79ef9d81dfc30e69e67bc19c559a52"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "ae78db311fc0c78b1cfbfaf43a5c7628"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "1fee3439c7ba7fbf8c7433d790d388ed"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "d0af19ef7dfe451cf8811b537efe88d8"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "00af3b02e23bc9445d0c65a5eade212b"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "da98ce3d75d0c1ef429bd16259859ac4"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "e8254691a8db7b24fe86e552682c1f13"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "76b2c2ead086482e09c171510a273d35"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "331548c84374eb5a5a994a1c8ce7b715"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "83aa0ad3ff28271a1e0d0956cede4588"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "1a197ff3e07e871ebbe43db5140a72b6"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "e503de1ca98249de999debfff9e907bd"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "977d693549753fd590c7a1bfeb66569f"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "dfd5318351a5b78daae6b56f0d3b7843"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "993a5df04bb82b524bf26c8e0b28e462"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "40b838cd7767e164eadf944661940bd0"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "f8ca029492980b3cd70c8bf0c731917b"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "7016f81d251e1c0f5e445eb1dc08bd24"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "302caf4b60c9815c96ac7308b3a282e3"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "2494067345907d8e2941930aab2dfa13"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "3c8e856a3d6fd8cf76453c2ad93eb14c"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "ac7739cce7152d4b9b3d8077008f0934"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "3c716c1bbd3d918dc505a9bc37e49f52"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "99c1cbf189ec024f018fa9dc5c3a4399"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "fa76cc152180b0bcebe0b0c5ddbddb91"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "8e7f13fc85f3daa21183c4e83dee30a7"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "046746c84bc097c71b5e83e5d16b7ec8"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "20b563e25ce3137166c15bdc671b24d8"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "abe189f357f9c118f6369fb1ac22d063"
  },
  {
    "url": "views/project/index.html",
    "revision": "f5740081fcd8a6b747c7f1f8352903c4"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "d934f97ded4d97f73f4a2c4e796dfd51"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "522cb045029b4d63ba863b3e7dde60fe"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "f61a9e6e15a0c2251f3c8be7143622e8"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "9f783fd3dd4c228c8d0e9af122f215ae"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "8c62519a8a20c1351563821d4fad2b7b"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "33a851f30b697b5f9cdbff9b02dfaa2e"
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
