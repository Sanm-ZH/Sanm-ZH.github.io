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
    "revision": "366c64e6741856f6ce1ff78124ee6474"
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
    "url": "assets/js/12.14d2ce3a.js",
    "revision": "12f3528e10794e8937f0e0fcac973ebe"
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
    "url": "assets/js/16.a507222b.js",
    "revision": "35bfd1b9de97f9e21d39636d40b5b200"
  },
  {
    "url": "assets/js/17.d0dad647.js",
    "revision": "4b42cdbb95a39fc8977f782f66d3b933"
  },
  {
    "url": "assets/js/18.93ec21e2.js",
    "revision": "3db852903ef3b35ea475bb0a2262ee9f"
  },
  {
    "url": "assets/js/19.46c43b77.js",
    "revision": "3a84c9f6b315cebb6cd994049203c287"
  },
  {
    "url": "assets/js/2.8da2a3cf.js",
    "revision": "6cc7ef250e62d4461602fc96fe9de15b"
  },
  {
    "url": "assets/js/20.9fbf6fa9.js",
    "revision": "4d2ddc03ae51d4ce6d249d9452754692"
  },
  {
    "url": "assets/js/21.c9eb4717.js",
    "revision": "7473fec6da22394edf05496f90537d5e"
  },
  {
    "url": "assets/js/22.b51aa478.js",
    "revision": "614345b001892e7f55ab2ad79485c729"
  },
  {
    "url": "assets/js/23.45707f9d.js",
    "revision": "4e27bb811922db40b149f480ae3a7b54"
  },
  {
    "url": "assets/js/24.a8c9e54d.js",
    "revision": "f909e1fcdf91504dc82c141621fc82dd"
  },
  {
    "url": "assets/js/25.99aeab3b.js",
    "revision": "c9ae4d2e8a85da39da371f9f565f1e37"
  },
  {
    "url": "assets/js/26.281ee118.js",
    "revision": "3ae4b048aa576827054ba112114be098"
  },
  {
    "url": "assets/js/27.51d5e808.js",
    "revision": "5bc20ab4cc17cc2cf75bec9443c1f557"
  },
  {
    "url": "assets/js/28.b9cb7b8d.js",
    "revision": "c2ef0c218833185ace01be36469ba722"
  },
  {
    "url": "assets/js/29.65616335.js",
    "revision": "6190beebed6f680474dc19aac1025e0c"
  },
  {
    "url": "assets/js/30.3c6e7adc.js",
    "revision": "b83feb3afd310b3d1161e1ef07ff0484"
  },
  {
    "url": "assets/js/31.949777df.js",
    "revision": "c33d0da273da6ca55b02e917242942e9"
  },
  {
    "url": "assets/js/32.e495e569.js",
    "revision": "e352e189e908daae6b629ef5b58f01b6"
  },
  {
    "url": "assets/js/33.c8cc0341.js",
    "revision": "42a7d403b3ef5e64826b956c48fc7982"
  },
  {
    "url": "assets/js/34.826661fb.js",
    "revision": "195d55d8e5c9c281599cd779691752a0"
  },
  {
    "url": "assets/js/35.70ff9d3f.js",
    "revision": "306959196c3477040457c5ab7207d83a"
  },
  {
    "url": "assets/js/36.820a64fe.js",
    "revision": "c63875e176713d93aa1ec489fcdfc951"
  },
  {
    "url": "assets/js/37.f128c3c2.js",
    "revision": "c26994ebddc16f4a60dffc0ce816dee6"
  },
  {
    "url": "assets/js/38.1d66e74e.js",
    "revision": "29b66a31fae7b446e7c5f8b290fe3cda"
  },
  {
    "url": "assets/js/39.ee4c2bc7.js",
    "revision": "bce1f29dfff2cf955ad3eab1ad8c9ebd"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.92d1cab1.js",
    "revision": "8f136f76a2a300372b2dad1ee759e899"
  },
  {
    "url": "assets/js/41.258ff75a.js",
    "revision": "4aa2c93890931f3bc51c8636d7143693"
  },
  {
    "url": "assets/js/42.b82623cf.js",
    "revision": "2d092ebe64e5656c8a50e2f3b5bea8e2"
  },
  {
    "url": "assets/js/43.a8435ffa.js",
    "revision": "0344a2d2b18ca2ee8c06845fee6e125a"
  },
  {
    "url": "assets/js/44.b614354d.js",
    "revision": "d1971d8946145b62c010cac5f53c3c79"
  },
  {
    "url": "assets/js/45.bbd421d1.js",
    "revision": "b9db04c477bcc0c6b5538b9b35f1d61e"
  },
  {
    "url": "assets/js/46.f30099f7.js",
    "revision": "2a001878b29578e0de6fbbf3ae41fa56"
  },
  {
    "url": "assets/js/47.e364d829.js",
    "revision": "4a65428cac1c7a56238ba6d72cb969f4"
  },
  {
    "url": "assets/js/48.0e6e8187.js",
    "revision": "6cd33565ad5ad6783ceb2e2e4026cd18"
  },
  {
    "url": "assets/js/49.b72c636e.js",
    "revision": "b3bea3cf8075922e32bcf7c6276bf066"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.55635fce.js",
    "revision": "ae24c9a795ff9830a1222d37f44f2ccb"
  },
  {
    "url": "assets/js/51.c49a4fb9.js",
    "revision": "84c5bf88b9d209135f08b5aa9a6d341d"
  },
  {
    "url": "assets/js/52.236d1e88.js",
    "revision": "88bce3df8413dd0e43cb58699ba37f5a"
  },
  {
    "url": "assets/js/53.0c48362f.js",
    "revision": "a5cd6e758ba4481f6967fc3a728870dc"
  },
  {
    "url": "assets/js/54.b319e359.js",
    "revision": "752439a54832c8af96443818c0253375"
  },
  {
    "url": "assets/js/55.d9d10fba.js",
    "revision": "ff2cee0a27687c51214967e04eedb189"
  },
  {
    "url": "assets/js/56.398072ac.js",
    "revision": "2d7e93a9f14555d9051a14f35af7e4df"
  },
  {
    "url": "assets/js/57.981352f3.js",
    "revision": "243624bae0873464a5ab2b8995e65cb8"
  },
  {
    "url": "assets/js/58.f133f907.js",
    "revision": "37c6f80d5841adbb6922aca659e6d4a3"
  },
  {
    "url": "assets/js/59.a2f444c3.js",
    "revision": "42c704b8e99aca12dc9d75d37008f777"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.904747f2.js",
    "revision": "ca11c501ec38d1240409e011a8abf7fa"
  },
  {
    "url": "assets/js/61.51377d4d.js",
    "revision": "441f6f57ac2c6d932cc970300d559344"
  },
  {
    "url": "assets/js/62.6efcd4c2.js",
    "revision": "b2173c3cca06f903f1c9d6e1f6171164"
  },
  {
    "url": "assets/js/63.6accf21b.js",
    "revision": "a02e0943b4370251439cc2528aa4e7f1"
  },
  {
    "url": "assets/js/64.0d6814b2.js",
    "revision": "7d3c18a46d55720f277456f6d5400d78"
  },
  {
    "url": "assets/js/65.3850ad67.js",
    "revision": "c69eb9d316368161969859332fd7a971"
  },
  {
    "url": "assets/js/66.5cbea6e6.js",
    "revision": "9d8d8357720fe6def58419ca476a60b9"
  },
  {
    "url": "assets/js/67.9651eb69.js",
    "revision": "9ef7628dea8b978fbac075f2c5d89fb8"
  },
  {
    "url": "assets/js/68.f95d2abe.js",
    "revision": "0155f6d4fe96a7228e8addad812f21a5"
  },
  {
    "url": "assets/js/69.e5103714.js",
    "revision": "d8b4f5366fb29850e8415ea0ed048fc3"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.3656a192.js",
    "revision": "ab0b3d215b67986bdc37f95012e1ccbb"
  },
  {
    "url": "assets/js/71.cbeff16d.js",
    "revision": "80e8842396030e191ae952092e73e532"
  },
  {
    "url": "assets/js/72.828ac724.js",
    "revision": "5349676025ec426c534415a682d0f4f0"
  },
  {
    "url": "assets/js/73.0f90d447.js",
    "revision": "1f83b4b1e5dd33e700199ada0d231123"
  },
  {
    "url": "assets/js/8.16182210.js",
    "revision": "a168ec365dad2d153f4abdc169ae3982"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.9dc8727a.js",
    "revision": "bb35bc5672a2b74763d5598de85faa0b"
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
    "revision": "2994932b3d639aada137ac7eafc1ee9f"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "df56fa3b5e7e56e0039464e81c061a25"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "3238bccc7f191422d2a9a79f0a13ec66"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "7317e0db6469e1afe8a30a5067ae7056"
  },
  {
    "url": "categories/index.html",
    "revision": "0b18d4b63716c4a3ec704ce88a14f6d4"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "45073c60de0a936e74f98b8d585562c9"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "e25e53c400495a2f68ff49fecf01ff0b"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "b10d912d77345017708bf94c890432f0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "9bd23b36b22531fd1d7e4b1855f4eda1"
  },
  {
    "url": "categories/other/index.html",
    "revision": "70dbd0f193c9a4d9b3cc94dd119cabee"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "844b8ee3c3fe696c827853eee2ab6393"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "e688dc928b32c2633b5c168fac927861"
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
    "revision": "55fa28c815dbad131d2da864fb58d681"
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
    "revision": "7cf4b18b1dc870b1faac632f086144a8"
  },
  {
    "url": "tag/App/index.html",
    "revision": "e7814d77ebf826e6e3561470ab76c328"
  },
  {
    "url": "tag/array/index.html",
    "revision": "b342cc72377751c30fd09023a010f5ca"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "92fe78c1312ab6f97921ee88d375bf82"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "ec722044898e8b64ab6d3cfb727846f0"
  },
  {
    "url": "tag/css/index.html",
    "revision": "dbb7e9c48649d3cae8a7228e285dea4b"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "113a0f892091ead22494361e33dd89ef"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "9a35828aed9144f6134ebc283ca5ac0a"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "f5dd745236168b82496e5a4387ec0515"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "feb848684e743724c7debfdba657937d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "87c9654a96f420547e99a6421fa97e3c"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "cfd51d961cce3b663f411e675a1221cd"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "16cd884ab2abdaf1252ec667d6f65edb"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "2d601ebd40ae0cc512e6c7d2a77a3bfd"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "0afed18cb0b782f3369723eaf4984ac9"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e3d12deebd1ca055f84b7bfe98f93a0d"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "a4e06804b3dd379a12064a2ff805f5f5"
  },
  {
    "url": "tag/index.html",
    "revision": "c515cc7b1a2c7c43df83a24aca222613"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "e67cd2b4e1917541fd622b275bd3e850"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "7700006381ea31b34e7525828ec5ba26"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "14a22a9af681dd62df13deeca17738f6"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0e9d4648464a161641b188d55fae7626"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "b5a2095a9450e05991cb2257ffe0ebf0"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "d0558c39c3c765df56384c26bf63e487"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "70fef7bce42f8695aecdb968a57fe7b9"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "b1dd8c9469b51077017badd062ce146f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "fbf4f0f3d67f3fdc9bd525b74b429ede"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "00eaecc6edc01970b5b584bf8ec06eb8"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "fbe85cd9cbc2b12fbd66fab62579bc1b"
  },
  {
    "url": "tag/project/index.html",
    "revision": "e79e4a540db72bb7336c53dd672f3c38"
  },
  {
    "url": "tag/react/index.html",
    "revision": "45ce7e696719441600f45f40b672aef3"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "17b1f72f3c5e2988a044cc4965feb2f0"
  },
  {
    "url": "tag/router/index.html",
    "revision": "6b8128f2364183abf36dcd186811f58a"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "98c9f45577205bf629316e81e1f216c4"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "92fdccccf5fa0b41d901b97b8a7ed98a"
  },
  {
    "url": "tag/style/index.html",
    "revision": "63f20f7dc6006c209c40b7ac26aea2ca"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "05999c9e976a1b6c6ef890c73e620a03"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "927ea6c60ae657730589eeaf83de3744"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "81ba5d8d7250d01078975562b25318e4"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "62ba9baecd1f7155c311befc34e876ff"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "30d14b1f7f7fa6bb553f003ac8cc2782"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "52327e654ec0e0d83c11487ada661cfa"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "751fe3185b8817dfe5f58f3864ff715c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "472b031dd75c262d7d8c3c8501270870"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "238bf88ba9e3454d230860d4dc9410e3"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "7bd43c270f6128c8c07ccfcf28ed00d9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "dfcbfbf1fe020711765210cde44d342a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "4927c1d7e3688cde72a266e3e13658bf"
  },
  {
    "url": "timeline/index.html",
    "revision": "004e5f00e7dd3eb18d09f764d679717b"
  },
  {
    "url": "views/about/index.html",
    "revision": "c9bfeef975bf8073c828335c76b46a8c"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "94ffeca25e4d66a978318fd8ac18f9f8"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "e267910e931317580b261a2f1f25cae1"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "45dd933850aa26a5adc369269a511a64"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "9f0c471a391174f9c72a9e8a9b3cf566"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "d725dfcf637c218cc5951b589a84fd0f"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "6a5f8f5521c32f5d45aa668314f58db6"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "d604ae277406ce5120fe17054d453bd2"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "a6b960eaa3f2e841afa7c3e2070c25b7"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "ed2430bf16cbfa2ac8d110ae2d594b2b"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "e7f07a0c1357d8d4b50fd716c2c3ce64"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "f82072034424e8222a0888bb847364d7"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "5d48e3c6450aaa5bf42565b078960fa4"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "5669c5f83c3bfef1111a6649df19c04e"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "88866ebef42f68c0bbc2361b7caac366"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "8a0a3e35f4f5abb7eb7fd90d8568af0d"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "fd9bf55b3e86d2d093059c82f3e71408"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "d792ab7fe83d8b8ef18aff9f71c875e0"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "bc6a3ad9da733eb2769f21b440953c4d"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "ca924f99e96ab4d49f04f1421ec29cd1"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "ab02a9b1f4257100ee09d517157bb936"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "7ffdb583f60ca098f8c121025f3542ca"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "d3e9d52eddab435cd4adef68684620bf"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "507327ef0001e527172ef8459b19a620"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "c74622663386c3b536abf259b5d33b5f"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "fa2f2a672a46d3ed617e6d95b7f634c2"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "d3e99ed147618a371ca8e9125eb8c694"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "eb56806f243838dae61ca4a86c3fa6b0"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "e25429deaec7f8020b6945e0df8bcada"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "2c16de5ad2f96d41916021e902cbb517"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "cb857cdf0aeb8a1c5061c865373bc200"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "598451f40a3e139a28df81acda6cddd4"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "271203336b834e0438996f954a91e9ee"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "bfc56be228f9688ac55ef7fd8170cd5c"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "69000cd35c9c671bd3bf57c5c7c57030"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "3edf3b0c0c9d9036067a2742a402664b"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "b9de024578ae82e5ac64b0e8de0ad50d"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "f3dabc12da373f248509179baf18e1d6"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "79326cc0e41fb61b49a7ab3c543c958a"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "d9ada5db6d988ddd91cf1c215010d376"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "48ce70c980e766e3ae3e22f9baa7c3fc"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "2b2685cf1109e848fd99b9f4a4481ccb"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "2795e03560ecc8ca1999d614048c11bb"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "4369de8a0a4ec4e673f76d4a2b661b73"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "f143fdfa0c859ea9a9bc990402d6ab8b"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "b4b8eb3f1e638cb29037fdefe7ce5e33"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "48d8abda80006aaa9bbd85ddef1110a7"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "452eb78dbb0f644abc1266c8d51ec758"
  },
  {
    "url": "views/project/index.html",
    "revision": "9034a219df8b15d14cd6956c9d67eaca"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "e8586a3beb5e5a99fce6605d75b4c6de"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "e0b8de167e1d9b270d7818e92403db72"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "2f7877447c2cc576c519dc1474e95aaa"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "90bcd4cbef17b6ce5be436f22377dd0f"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "5b4bd9a81dc92e6d3090a2064e5a903f"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "9e25f64aac2c0c576a28a88cc91cbbbb"
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
