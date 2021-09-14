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
    "revision": "87f3e488145281266815c7e6e5ec62a5"
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
    "url": "assets/img/radixSort.6690b105.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
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
    "url": "assets/js/10.60e244ff.js",
    "revision": "bad225a1776b529c171064f61369c452"
  },
  {
    "url": "assets/js/11.3b5d3c42.js",
    "revision": "1493b8ee68ec3dd5a48cede7acd8b7c2"
  },
  {
    "url": "assets/js/12.db9f63a7.js",
    "revision": "d7d44798f240b81b3b2bbd2efbb498b8"
  },
  {
    "url": "assets/js/13.654ed590.js",
    "revision": "2b5e1810404182b8509517ed0b4fef0c"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.64856f72.js",
    "revision": "e9785efb1b41290ee727a9c1a63d4db6"
  },
  {
    "url": "assets/js/16.46853d55.js",
    "revision": "b0411492b60986e31379bab1bbbc63dc"
  },
  {
    "url": "assets/js/17.177aa55e.js",
    "revision": "633355a3445c7b15311821470456c880"
  },
  {
    "url": "assets/js/18.7a0f4031.js",
    "revision": "4716a7d316ef9c6599ad772ba9bc8465"
  },
  {
    "url": "assets/js/19.2333f75d.js",
    "revision": "4527942cd2ff001234edd8594ee1aa4f"
  },
  {
    "url": "assets/js/2.eddcedb9.js",
    "revision": "6478fa2770946380b9848010353346d3"
  },
  {
    "url": "assets/js/20.cd977254.js",
    "revision": "c74ee90c130c8d957e1a9472d33676e1"
  },
  {
    "url": "assets/js/21.0ce7d125.js",
    "revision": "b9572f7e193bc493d201b16cb2eb9e41"
  },
  {
    "url": "assets/js/22.53fd1a66.js",
    "revision": "537f982abdc37cd5806f51b2349ce591"
  },
  {
    "url": "assets/js/23.e6fddab8.js",
    "revision": "032227abfed723abf4d898b72f483eef"
  },
  {
    "url": "assets/js/24.cfddb4c0.js",
    "revision": "ba4a0dc79a82e2454b0a3ddc56307a3b"
  },
  {
    "url": "assets/js/25.d1a2a4c6.js",
    "revision": "3bf4b6883cd98e04ee6db986b1b55508"
  },
  {
    "url": "assets/js/26.fe5ade5d.js",
    "revision": "ea437820c6c129055a7c147c72cbf9e6"
  },
  {
    "url": "assets/js/27.3cbb231e.js",
    "revision": "7ed0155b4b6dc8f6b3e7e5a8e894fe6c"
  },
  {
    "url": "assets/js/28.ee8564a3.js",
    "revision": "b99c1d6e9798f478e735a99f2d397ad8"
  },
  {
    "url": "assets/js/29.5c4ca842.js",
    "revision": "bbfa035e2f11b6439c2c0e3544bd047c"
  },
  {
    "url": "assets/js/30.c4feaf68.js",
    "revision": "c7136d8c6928e897782bdfa3e3822a5f"
  },
  {
    "url": "assets/js/31.b646046d.js",
    "revision": "543234528e0740441d0b7132e01f2aee"
  },
  {
    "url": "assets/js/32.40b540b4.js",
    "revision": "a8e284db0444e95f887c3ddc4f6ec5fe"
  },
  {
    "url": "assets/js/33.87d2251e.js",
    "revision": "572c2960151a65b88116afb42570342a"
  },
  {
    "url": "assets/js/34.408a2924.js",
    "revision": "5f31f074595edc71cb9200ee7b737ad3"
  },
  {
    "url": "assets/js/35.7655d9fd.js",
    "revision": "17d4bd60e108ff37743ebc5dbc6bfe46"
  },
  {
    "url": "assets/js/36.74c79180.js",
    "revision": "370c12de510448808159f6758a3b954b"
  },
  {
    "url": "assets/js/37.891a947e.js",
    "revision": "8b2880d8923e56bc36fe8de986093bab"
  },
  {
    "url": "assets/js/38.c0f80268.js",
    "revision": "31513864e09dbd11757f6aadab1cb888"
  },
  {
    "url": "assets/js/39.24331d06.js",
    "revision": "a0254cb2f1f781353a3107a4162ea973"
  },
  {
    "url": "assets/js/4.733230d3.js",
    "revision": "4f85106b3014bf8e8a07288fa7190aad"
  },
  {
    "url": "assets/js/40.fff485dd.js",
    "revision": "43966a4ffc1055b2d02dd072fd158a07"
  },
  {
    "url": "assets/js/41.274256ce.js",
    "revision": "4d22c28efd967c52e27dbbc1ecedba81"
  },
  {
    "url": "assets/js/42.9ad008f8.js",
    "revision": "92a5f1cb8e7a07ea951ed3211ec06bb0"
  },
  {
    "url": "assets/js/43.3ea6c881.js",
    "revision": "55e6b6ac5fef6a41551dca0ad664ec2d"
  },
  {
    "url": "assets/js/44.4edda636.js",
    "revision": "90edc3491bb1abd6d582aeb2d3b4e5fe"
  },
  {
    "url": "assets/js/45.35bfa6ec.js",
    "revision": "c652a0e78a5d78ba23b7ef8af850666b"
  },
  {
    "url": "assets/js/46.0db37ae8.js",
    "revision": "92555ba49d273a71a546535c0e671103"
  },
  {
    "url": "assets/js/47.69374f5f.js",
    "revision": "8bfd6c534c74124abbf3140f87c18a7c"
  },
  {
    "url": "assets/js/48.1b8ffd1c.js",
    "revision": "7e3f2d9ef15fb008f98f537f7387b487"
  },
  {
    "url": "assets/js/49.6ed93972.js",
    "revision": "afba690a95af03077ddc533ea3427595"
  },
  {
    "url": "assets/js/5.67005944.js",
    "revision": "88203b2340268a5cd91578f771338728"
  },
  {
    "url": "assets/js/50.d56178a8.js",
    "revision": "9694a0da969e4f644cb8cea588ed0838"
  },
  {
    "url": "assets/js/51.493a4f0a.js",
    "revision": "23a5e6cc3b6fea9b9d8b318e0421f676"
  },
  {
    "url": "assets/js/52.10b26bec.js",
    "revision": "8d069783fd0e2b59970a098eee7b31ad"
  },
  {
    "url": "assets/js/53.0d0dbcdc.js",
    "revision": "26df4e849209ad9d9a89945207f83d64"
  },
  {
    "url": "assets/js/54.4a927405.js",
    "revision": "5f8c541f6adf891ad9c190ae796951e3"
  },
  {
    "url": "assets/js/55.1201d71a.js",
    "revision": "3f0ead8818f3c26a327130b24dcc602b"
  },
  {
    "url": "assets/js/56.43f215f2.js",
    "revision": "22f0ba50d0f93561eaf96bf9c12d2934"
  },
  {
    "url": "assets/js/57.28a5bb0d.js",
    "revision": "193a02a7f5b9668cc73e887a433ea097"
  },
  {
    "url": "assets/js/58.b3a45aea.js",
    "revision": "f87275f73e8e33415b0b85c12a585ed9"
  },
  {
    "url": "assets/js/59.f86c0c87.js",
    "revision": "1507b7fe1fe8b65651a59b83e630b9e0"
  },
  {
    "url": "assets/js/6.17d3bd4c.js",
    "revision": "3d57bba7d128641a78e206ef9c9d596e"
  },
  {
    "url": "assets/js/60.7385071f.js",
    "revision": "629c4a824a5f0391c6e57a391f561538"
  },
  {
    "url": "assets/js/61.52707e30.js",
    "revision": "cc122bb9524a4bd50cb15b8d3413b25a"
  },
  {
    "url": "assets/js/62.9dded58f.js",
    "revision": "443cac025ac2d57cbbdb6e9a107ce8f3"
  },
  {
    "url": "assets/js/63.e970720e.js",
    "revision": "dd737c5d1bac8cc950bc6d68eb7a4160"
  },
  {
    "url": "assets/js/64.e8c3a6f6.js",
    "revision": "f82dd5965e5261a18ba5526d16b15059"
  },
  {
    "url": "assets/js/65.d4a257f8.js",
    "revision": "5961928ac8895676340bc7ebaf2f65d9"
  },
  {
    "url": "assets/js/66.c96466bd.js",
    "revision": "e4e012d62d6512496059336bd6aeaa2c"
  },
  {
    "url": "assets/js/67.69685d93.js",
    "revision": "0b06bb6d0422c0207c117eaa6b0f2e8e"
  },
  {
    "url": "assets/js/68.c1d452b8.js",
    "revision": "7d4ac62ec0720e1a0619c6714d964d7d"
  },
  {
    "url": "assets/js/7.6f777f90.js",
    "revision": "038807731a8372d724baec2a97d7188c"
  },
  {
    "url": "assets/js/8.c883010d.js",
    "revision": "13cb682e22762d9d3a41714426d7435a"
  },
  {
    "url": "assets/js/9.6f1e09a8.js",
    "revision": "4f18c096ba6599d8a4a5aaaa102249d2"
  },
  {
    "url": "assets/js/app.60c1f77c.js",
    "revision": "065b702afe7e89463e03b60856837124"
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
    "revision": "3008494696be7c131e7227a30960acb0"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "fe6e7a5566b6a99776fe0582fbb6bf9e"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "8563e5fe8b69d9436354db31695fd264"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "4b4930c290b2a499942eb537433791ce"
  },
  {
    "url": "categories/index.html",
    "revision": "43dbf1a23fa028ad695924a16d9cadb9"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "c3abe8edb6dc9fdd91eaf564fd92df5d"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "135f71ad36e32336c18512f2e2c935e6"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "6bc1d29663fc8b5f3acdc3d08ce2f417"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "cb60c80602d8864e3799c3a268746330"
  },
  {
    "url": "categories/other/index.html",
    "revision": "ae8d90c7b319baeefc7364e893bff2e5"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "9d508bdfbab16fc67352bcc07e6d9bca"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "55e8dd0987d1a15684b3ef17003eecac"
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
    "revision": "6ae3b31db33dff401e42e66bfebf33e7"
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
    "url": "tag/algorithm/index.html",
    "revision": "3d8896e64ba848e8e8817f31194b1ee7"
  },
  {
    "url": "tag/App/index.html",
    "revision": "e887ab5d4c38607033a7149e2d2708ce"
  },
  {
    "url": "tag/array/index.html",
    "revision": "1e44969d6b0e57ddb94c11ed1214aa40"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "dc4e3340d4b4549c43ca58d5e81da301"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "5e302cfb466e259761fa0f741dc1b8bf"
  },
  {
    "url": "tag/css/index.html",
    "revision": "f4d858b8dd02c3d57f2c3e6f40319597"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "514512251b5dc9e598616434065febe6"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "59ae4c4183c16a3c323a694f35ec0520"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "7f3a8c1f01dbae26239f90ce9038181e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2f7fb343d1086797474f65ff1d92bde3"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "52b30d310876bb9fe7749f3450996e53"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "bd3c93a697c88d429a3a4b4844a86dce"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "dbf21bd92ac50c093ec6c75327fd46b3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "15eb802ea706100fa0983356ace8b55d"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "c42f90e792bb955236056834a8385896"
  },
  {
    "url": "tag/index.html",
    "revision": "f650d7e679632b1c188c1ce0380b8d72"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "fb9a6b894e455a8062bc2865f1c00bd3"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "85437191b4d0877818da732f29c07af3"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "be19a151370df3908c410355f486d475"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1edc052b569344a9e0237412619e800a"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "4004bccb2e9da33ff3af353754fa3a00"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "be6a95175f12f37e71401731a9285696"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "fcac13cf449e4137de7703fd505a24c6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ff0b86d680a24600ae61d91c1fca7b66"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "4ee37e74d7fa3ba6fed23f542c5fcc5f"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "ad6cb2852128e851fa1cbceda48e6699"
  },
  {
    "url": "tag/project/index.html",
    "revision": "afc188ad91ebc3e1e94b4dee9ca8f3c6"
  },
  {
    "url": "tag/react/index.html",
    "revision": "4ac3afb651c653e9477af8bbfab37e96"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "6d790b722c427e6caaaf6182358b6e32"
  },
  {
    "url": "tag/router/index.html",
    "revision": "9e6ff9768c55ff40844c9e84e9e3bc71"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "16512ccff90ab9a3073ac160d216bd6c"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "c2c9696e4b3b06f56e10171f5dfd8011"
  },
  {
    "url": "tag/style/index.html",
    "revision": "2ac9accb2961db9059520a8a7dafa5f8"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "3a6119e6bdb94d5a3a40e5452553dadc"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "855874a1774d31280b7740eef74804a0"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "45041f582f13a62c9c268aea8697d896"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "0b0939dd826d33005f9595dd61d4529a"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "5300cf20f8a5b848c5e428ed31393990"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "43c15b51e116b279ed8b9c0eddb1fccc"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "98a2cf344670a604239199605584c916"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2fc1e082430c4e3785c764747f58b21d"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "ee38a1b1a057d7b06143c147e9cbdb4f"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "6b61c4ea6d3504a8c56fd88a941143f7"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "99094d7ee68d74743a606a501b03a615"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "9e71fcd30d09a5f7abf167b6c712a534"
  },
  {
    "url": "timeline/index.html",
    "revision": "a9f635a0d11a4a0fdef9dadaf549876f"
  },
  {
    "url": "views/about/index.html",
    "revision": "cf23e3700d04a8c5925bdd4f5750aeb7"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "6ea2918c649f1937cccfd8fe17244ce4"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "0393a0dde997ef6ce0657a68294a5377"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "660bb02ef6489a3a526dd8c8c4429a3a"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "7d010fd97a02c60810770d325fb6fcf3"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "a526d9148674f359f1a270b8ef55858f"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "7a5ed8732c24e599c37e569f0a3abe9e"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "41e1a05e89ea19d00151ea0394154e94"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "04974912edea04f458c21fe715470f30"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "bff1210d33edcca1bf61790e1d197a9b"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "f69b28dd1af682f2e75fafa5454b113a"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "493007f7007fb6ed991b6a83556082c0"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "f6480083539e68ebd2410b1ef455901a"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "ee8b1a61bfd3dbeeb5b55c807a4e496d"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "9d3a90072ebc04ba9a4ee4dde0b2c03b"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "1da97bd8a211731f8e478af7fdfda9aa"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "649ac535fa4f5e01b5143c3a6b76534a"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "fd58057fd6c204f44787e09c608d0d93"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "e0f5f5a4e3d7e7e749237e0fed4b17e3"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "dfcdd7b8f85bf95f8870d7e66164b4ef"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "fa401dbf3c83c4220f4cc70f7736a232"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "da48f7cf8ab408ade7eac13bf9deee46"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "9437b20eac2deb208ba3b2c5c1aefb73"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "1a4aeb61f6dbac8916305473a00203b7"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "414c131cfc958d0ad9e306c4a9ce4382"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "d97b82d596bb2ecb97f3499049caa7d5"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "4e06900783a87af2e7d708ffef0f180b"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "6d95706036c90dbdee1e0808c831e42f"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "f500f31c01bdb0df2eafff95e34732cb"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "16ed0563d3ebc330a9f2afa3c62a8b33"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "8bd3b4c44cc300ff1186bfc357c61ef0"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "56c3c9209e7fea17f8cab4f234caeeae"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "c54f05de7e7af5bbd4a27685ecdff38a"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "3383cff341bad623ff535dfb51391bd5"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "c70f38007625bda3c41c0cb52d5f2172"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "f752923a54c5e6c7047612af9cf81be2"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "2dc2ebf3c7ea9b298c81ef0458779dfb"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "f3be9f68381956b2e4426756b1997d6d"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "7ea3b66a95b859c61bec6c346cff3a6d"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "d839d239912af6145d68f713081eae22"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "4f8b2b14c53e80217562f29146237029"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "baba16a92dc3fa448444e2e813d3a30c"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "e39f537f4b32deabc4103ec6f1845e0e"
  },
  {
    "url": "views/project/index.html",
    "revision": "c9474911478b0d629db2bb26c0fb7669"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "952ebb7b2f4809823330787108f2a26f"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "e0f52125dd5d594c22f05d2710f55390"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "c7394182f0face0cebf1cd0022cc1cbe"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "b78b357c9ab709127fb03eef99a280f7"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "464e5bcc32b89a2a81fe8a9d97b45e1d"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "ddfd7e90275577b4b550097c631e9eca"
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
