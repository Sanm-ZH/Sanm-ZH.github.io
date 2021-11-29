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
    "revision": "c7f318deba70d24a416fcdcf53e68400"
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
    "url": "assets/js/23.e81dd6ec.js",
    "revision": "bc1cdbc9d21d25a32ea55abde40ba68d"
  },
  {
    "url": "assets/js/24.64307061.js",
    "revision": "636f0d982243390939bfc0a7edf2480c"
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
    "url": "assets/js/31.0d6bb297.js",
    "revision": "6302e21df5103ad8058cf9d9291fc15e"
  },
  {
    "url": "assets/js/32.f86262d9.js",
    "revision": "7e2d6a11aeb2812a55c637c54b0d3d8b"
  },
  {
    "url": "assets/js/33.a3265bd8.js",
    "revision": "2e47528515529333beb9b02ace069bb4"
  },
  {
    "url": "assets/js/34.df05247d.js",
    "revision": "aad3c3c892de40561f0d191481a69f65"
  },
  {
    "url": "assets/js/35.bcffdd00.js",
    "revision": "012252c2db0056c94878925b43b2ce5f"
  },
  {
    "url": "assets/js/36.81f2cd12.js",
    "revision": "bc30e32fad2f7ceabdeedfec04bd2c87"
  },
  {
    "url": "assets/js/37.f01356f6.js",
    "revision": "b61f99fb1b603f23c25b1ad5191409f3"
  },
  {
    "url": "assets/js/38.da469898.js",
    "revision": "d9c946247eb5b3b9fe53669f7e26bd79"
  },
  {
    "url": "assets/js/39.9795582a.js",
    "revision": "ad5499b3d274960c8840d80459f31416"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.13d87400.js",
    "revision": "6e0b9a5a2a64e7223600623a4f6cfadf"
  },
  {
    "url": "assets/js/41.66599406.js",
    "revision": "ee2a90817f03ebebdd3aae9a22cbedc2"
  },
  {
    "url": "assets/js/42.010580cb.js",
    "revision": "01db808fb55a5edf1cd370ed3350c098"
  },
  {
    "url": "assets/js/43.6837be6d.js",
    "revision": "2401ddfcb850e179165ad68d58ad9ebb"
  },
  {
    "url": "assets/js/44.a4f19b73.js",
    "revision": "dda576f8d1d180629df1123310e3210f"
  },
  {
    "url": "assets/js/45.5a9ca29c.js",
    "revision": "a4ae1b63b1a44e9c93e0286a3fcc92e4"
  },
  {
    "url": "assets/js/46.404c6a95.js",
    "revision": "c49094580549ef7b43878c19e33e34fc"
  },
  {
    "url": "assets/js/47.6b091984.js",
    "revision": "d1dba2c2355f31e4cba4131ddb1479c0"
  },
  {
    "url": "assets/js/48.47b4d580.js",
    "revision": "fc67f7b92ae893c7e8b1e9115a5353e3"
  },
  {
    "url": "assets/js/49.585276b8.js",
    "revision": "d037bc1cad4774a85d78ec26beec238a"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.027544d7.js",
    "revision": "1abdc41e3885950dd812c3fcaf9fe291"
  },
  {
    "url": "assets/js/51.d7bfbaa1.js",
    "revision": "9d45e01540886f4d88da4a4485132bf1"
  },
  {
    "url": "assets/js/52.2045d8ce.js",
    "revision": "fe834001865919dd4157affba51dd66b"
  },
  {
    "url": "assets/js/53.9bdfbb74.js",
    "revision": "238822f732055883eac977bf3f1e5236"
  },
  {
    "url": "assets/js/54.140c83ac.js",
    "revision": "259254b07106ac489c8cb97e873216f4"
  },
  {
    "url": "assets/js/55.ca1fb4e0.js",
    "revision": "2d841a95befabcb4bfaf3e35960b3564"
  },
  {
    "url": "assets/js/56.37a94422.js",
    "revision": "1317b097601f13807436c27daa1230b7"
  },
  {
    "url": "assets/js/57.9bb23288.js",
    "revision": "328d3edd8b893225cb436c605ed105d2"
  },
  {
    "url": "assets/js/58.7d941adf.js",
    "revision": "9447e6c507d95c514987a8227679bdb3"
  },
  {
    "url": "assets/js/59.de57bd2f.js",
    "revision": "fd321ce5968d1b0db373382065126e79"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.aaed14f3.js",
    "revision": "a02d4cebada0b283cac6c70ae6284359"
  },
  {
    "url": "assets/js/61.5cfc93f0.js",
    "revision": "fe36e87dbddbab8a7f24443e79df1bd6"
  },
  {
    "url": "assets/js/62.858fab61.js",
    "revision": "5c6916aec950aa486fdf2af166bb9d65"
  },
  {
    "url": "assets/js/63.20d40bd7.js",
    "revision": "a15482a5f7827950c2fc8cba70c40ba9"
  },
  {
    "url": "assets/js/64.215b3429.js",
    "revision": "6a78bc7c91a07776b77330c794847dc9"
  },
  {
    "url": "assets/js/65.c2cdb880.js",
    "revision": "ccc691d89e87fa06af714dec2722bcc0"
  },
  {
    "url": "assets/js/66.ba1999a9.js",
    "revision": "0e897f0b258be0d56f035ad9889a9049"
  },
  {
    "url": "assets/js/67.f7108b59.js",
    "revision": "abfcd9e48e8068dc4a178bc8c82aeb81"
  },
  {
    "url": "assets/js/68.fbd30413.js",
    "revision": "d9e5641eb6ab25a7afd4d903984fe213"
  },
  {
    "url": "assets/js/69.1dfd7d72.js",
    "revision": "0432451de2ecbe633877a739df7b7a07"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.01b647e6.js",
    "revision": "3d0502a96440ebe1bc2a3c16d32d2701"
  },
  {
    "url": "assets/js/71.74b52e69.js",
    "revision": "4d80b7c421a8934b83428b0677c41c98"
  },
  {
    "url": "assets/js/72.1ef63a48.js",
    "revision": "09fb408717379d807ae7146875b67aae"
  },
  {
    "url": "assets/js/73.cd2a2430.js",
    "revision": "6df99bcf15053cb1943fb7b50e146897"
  },
  {
    "url": "assets/js/74.986f9041.js",
    "revision": "5df7cf88fd09816153001b351da28811"
  },
  {
    "url": "assets/js/75.9ed70c85.js",
    "revision": "5a26a586da7bc7ee8555d6ea2308f019"
  },
  {
    "url": "assets/js/76.0885f58a.js",
    "revision": "4be0867bd82ce42f9f512c352051eff1"
  },
  {
    "url": "assets/js/77.ae1eb74e.js",
    "revision": "ca2947391c6e2cbf0d374d6d20b35b6b"
  },
  {
    "url": "assets/js/78.e19da084.js",
    "revision": "e32a0aa64c8efc8af62e21f11e2e463a"
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
    "url": "assets/js/app.f11588bb.js",
    "revision": "cdf21efa4b9a55d4c4a6101615151d06"
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
    "revision": "892078de90d246bcc9d190214f9d5a8a"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "5a041fd27873cf040bb2e6e8aa379233"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "6436f32bdcf5d71503bf5605f453c128"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "d886a5fca165a36f045d9222b2e8d73f"
  },
  {
    "url": "categories/index.html",
    "revision": "b1ee8106356402f0e5574dccc2f2fbaf"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "e96f689e1bcfefe0b4a911d097b913e1"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "3516d10bc819dc91515e0d15629e8545"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "b6f6f591f6dd11cba8a75beff65071fe"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "569c344e426977bd121c1c2e833a7de0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "45269caaf6e042c76e82d0324d3369e5"
  },
  {
    "url": "categories/other/index.html",
    "revision": "f5cf4a441010994a32a837dfa2173eb7"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "616743b7a1d352470aa67dc9fd6dd555"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "6ae6523bd79c1b1452e0cb547d8bade8"
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
    "revision": "e749af847f7c829f75a83ce125860036"
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
    "revision": "b570b4a885ad7f0eb3dd2673406d961e"
  },
  {
    "url": "tag/App/index.html",
    "revision": "4a1e48e695e47ab27042f620e0cbf99c"
  },
  {
    "url": "tag/array/index.html",
    "revision": "253ee079344c6fcfca503b3cb245a418"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "36476a43ded0acfb416f20b49bb0eed4"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "1046f3bb1da047b79e38bbdf31b9708f"
  },
  {
    "url": "tag/css/index.html",
    "revision": "3ea34fbfa7111ebb2ad7ad8f73d91d83"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "c24a53964da702fc84ea126d5b91d553"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "98f5e22043bc3332ef2736b3ba5daa7a"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "ee497a78b45950f31184ab17c4919097"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "a14a18c6319bfb8978af3ef86a02b8da"
  },
  {
    "url": "tag/git/index.html",
    "revision": "3ddbf0cb7b335fca0b726b5846abc5b7"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "f526af8f5ca5ed43bb26e3b706f3a421"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "4d49a090ff8281cb52ecd61bc1a18892"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "02c8e210a7220a9dc363f6daa98bea9b"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "7030ae373894b579861498f1048a4b03"
  },
  {
    "url": "tag/html/index.html",
    "revision": "82c5e70c87560989c9c3e0313fbb5c2f"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "47451063619613967ea76f1dbd66cee9"
  },
  {
    "url": "tag/index.html",
    "revision": "71d62c871b0dbd0ce5d601e00deb774f"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "221713ace6d53b561f0e4bbf5ff1fcc6"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "d6ee1332f1e619fff1c8480ee729d234"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "f5c2a0a4f04e3fa1cef5f5c51114a85a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "83b9746d36d30096503cced6d2892f65"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "eb38dee5c8c18eedd66c4dcdfc120e62"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "0c5143c4f424a17df163e2854f8e19bd"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "8452b59581759c19ae4113cb8a4e5472"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "eb1997a0b1abaa617b22d8a3b39a140e"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "aee347fed5fa9bec3dddfb9346841679"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "feb86e64d46deab34d362efebabdde26"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "943bae4d7fc7ca4c9c4789f363f3bcaa"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "1e947297cf2709f3298860cf79ac7c0a"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "9faf442424d5acbce0a37f720b2c260e"
  },
  {
    "url": "tag/project/index.html",
    "revision": "1a21adb3c275b8c7c35e5583576a464c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "1d853cbdb01439f3c73ffe96ec771348"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "6bf51e5aacf0eab6b9b8dc3a4d7285fc"
  },
  {
    "url": "tag/router/index.html",
    "revision": "b019dbcb80cc3590b1c218cd72adaf4f"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "17d642340b17d25d419a9a58e52e059f"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "324410d82d9bd390b6eebbe98d9842e6"
  },
  {
    "url": "tag/style/index.html",
    "revision": "262be31d2c7c95e8ae6811f1388f4b2b"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "702cc246b4fbe5e7758dfe179e9f72da"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "1bbd63f2d0f1db99afbc2575137988f5"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "bd16dab76553d1f88af4c28d14596aa8"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "c729bf9ca0d978807261f1d4718e4e57"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "c2a85a7f49284ef3e9cd341aa37edda1"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "be12ee78b2f5411de245a17b9d87a0c5"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "b87c2bf7dd0e307289860069a75073f9"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "370fe4927ac52ef2e3b73331221d9c85"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "df0968cc31b9d7ab593e20d543aeced0"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "e2c293adf20ed0c25f650228ef2562ed"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "dcc11c1a2c554603184fcfc287ac44d7"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "e27e9ea4f9e581c901bb186bb746e1a4"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "f7e86254083d45412cbf433d6c1b8cec"
  },
  {
    "url": "timeline/index.html",
    "revision": "622358c8cd4f1d049820e363b1708693"
  },
  {
    "url": "views/about/index.html",
    "revision": "7ffa2f4bff932dab347d52153072869c"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "361fb5ee79e2da4fa0038c6e2fd62c47"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "36b6d5ce468d0f0ca07b3e5c4e9c3957"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "e7222c71824c36edfde34f26817d661f"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "4d655b27ab2e1c58374dbccb0a630c32"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "20b8aaa7c792cf2d5f3aeb67523a789c"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "be9dd4b3dd52f942cd738636532fedb2"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "82dde66296f8a16af05985b901b556d0"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "05e6a61f8a9bc3aba89fc98e61c23f7d"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "ba0ae60985c5661182d0a64e70ab9899"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "04f214496f81c0b9fa05b513e3df4698"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "bf0363bbf32b5accba8884692d7872b9"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "a2b8d60126ef100095c391b96e5dc54c"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "dc01409bc3044cb7df40a60b0fba348d"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "9d7c1ceabc9c62e485bb09a08bfcad02"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "ab1e451f47a1bb4f56614c5b09b075c3"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "7fc6a0389e10fc5b19e810a41ee1528f"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "da321d0680824ced79a859be89f84752"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "36719ae52fde6be71de7ce7ad525ad8e"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "bc6cedc8f54d89253f3fe220f7d43cad"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "f90e38ba6a7bb1c3d7b30f1d25c2d374"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "abb7e0cb15f006fbcafc5c7553128b65"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "593a9de7a3c058fda7a9ce77d3ead7a8"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "55c9753d133a43d63f783c1c399f5e66"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "bd7abbc1435dbc6fc40e032134b269cb"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "beda229b4927a6e0549e6f14a8e55ee2"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "c56785d88410d363a6e4a42ce3b2cc84"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "6ba34edf957787675921947f7192a1c2"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "f82870e812c66935dec462c498283eba"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "60ad8cf1db42e9a3c9fd4f2becd7e902"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "177a32dce1314d172f1c1a131cb29e91"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "4416d7201219651ea367cb02e5cf7d03"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "0edbced6d5a6766bc477a814bd93c794"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "511e83234e2f84e0f2849180deb52014"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "f572988ad0789c4414ec4d4a564ca789"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "21ed4d041c950a87637a2916786de6cd"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "5c2c00e39085c5fee8e431b8f9f5dc38"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "a9bfff1334d920e9c337612bb49ad349"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "39881dedb1c80faa7895a450d93df57b"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "a4aee625ad89c9da5b54b087b7050763"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "9d5b1b69edccf47052bac7243ada538d"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "46967e779350bfc054820b85ab3c37b8"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "da5eba2222dc3e17f63ca708310b82ed"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "1a675c39f222c6b695d8683d635e481e"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "ff4813e9aa8d3c5d4c3c1484cbd204c1"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "244439f90dfc35a5b57604b2c776b2ee"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "8788174d0ad029e96270b33731722227"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "fccb78df94ccc45d4d6f563b6124a3d2"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "4c69255961b58ae920f3387194245a5d"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "f17b26b77412d3dae3dda72dd12326dd"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "bc70728b59aa4205ca76eb115e6fe94e"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "c844663cf662a5fb56709866ad0c660f"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "62fad7273a0e3ca8b44bb74a95065831"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "e800dea6e1b6c862a48bf8e94df973c7"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "789a80b8bd5b68a7637ec640d1b444ce"
  },
  {
    "url": "views/project/index.html",
    "revision": "fc5b0c9e6b1b6de967ef96fa9cff0822"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "5952db8c05d1f2d624a1204897919ae6"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "17fe4db1e7bd3cc9750a61cfd980f52b"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "0baac981f7a9e0d6df4372d0f88e4361"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "f7685a698b1e13ed67b0de60046a0465"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "80a172b0feb397afae3b7685b3a206a8"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "38feea92fb0ae20d6c40194455b10bd1"
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
