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
    "revision": "172cc8c45fe00ec7ea7383bd7ebb7736"
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
    "url": "assets/js/21.616acf77.js",
    "revision": "0e63513b6e8298d9113dfb6281baf929"
  },
  {
    "url": "assets/js/22.bf37f7a4.js",
    "revision": "9dec5ee29a15f9e1e3e04bd8839f88b8"
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
    "url": "assets/js/27.4e4d6237.js",
    "revision": "37c70b14dbde854434abdd9c62e7d8fe"
  },
  {
    "url": "assets/js/28.447f7e24.js",
    "revision": "6d3f711701ccb68a0f8508e943a46951"
  },
  {
    "url": "assets/js/29.a233c31c.js",
    "revision": "acc2aa4700e45001c3f00441fd30348d"
  },
  {
    "url": "assets/js/30.f3a2d277.js",
    "revision": "6c2cc62b8c4deb981f7ade4e44fc4b05"
  },
  {
    "url": "assets/js/31.4360732e.js",
    "revision": "927c4b2b647b1df66c041f89155e246b"
  },
  {
    "url": "assets/js/32.994988cc.js",
    "revision": "2a7124ac0402c96702dabb0346a739b0"
  },
  {
    "url": "assets/js/33.bd63d046.js",
    "revision": "6ceb809961d0729d8cd4e5850c995a3a"
  },
  {
    "url": "assets/js/34.52c5f09c.js",
    "revision": "23a44350f2907d3189c892c79efcbd20"
  },
  {
    "url": "assets/js/35.f3b3d9ce.js",
    "revision": "ffcde9f5e712ffbbdb3ac0f9b5ccece4"
  },
  {
    "url": "assets/js/36.81f2cd12.js",
    "revision": "bc30e32fad2f7ceabdeedfec04bd2c87"
  },
  {
    "url": "assets/js/37.d45585fd.js",
    "revision": "715a516db58847d5f2f59878bc1e2b96"
  },
  {
    "url": "assets/js/38.da469898.js",
    "revision": "d9c946247eb5b3b9fe53669f7e26bd79"
  },
  {
    "url": "assets/js/39.7b4ff6ab.js",
    "revision": "6e79e420ef4f58f9c94d119aad9e6037"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.7d423fc7.js",
    "revision": "fb8e43bf3696619a4186e208d19f4e93"
  },
  {
    "url": "assets/js/41.8c7d7577.js",
    "revision": "59061318cf81a237fe9135c79db5909f"
  },
  {
    "url": "assets/js/42.9428e190.js",
    "revision": "b5f361bb458ac5d4dd2150e076da1bd2"
  },
  {
    "url": "assets/js/43.6837be6d.js",
    "revision": "2401ddfcb850e179165ad68d58ad9ebb"
  },
  {
    "url": "assets/js/44.37223ab8.js",
    "revision": "f4d20dea3d927cf2f46a3459c2d9fb83"
  },
  {
    "url": "assets/js/45.8af2188d.js",
    "revision": "14afa6c9772587564d6086e2f0cb3f98"
  },
  {
    "url": "assets/js/46.775e8e7a.js",
    "revision": "ec2647621153476b285c050ba1d1ebae"
  },
  {
    "url": "assets/js/47.28fd4777.js",
    "revision": "d4e088fd151127651298649cb9eb31b8"
  },
  {
    "url": "assets/js/48.47b4d580.js",
    "revision": "fc67f7b92ae893c7e8b1e9115a5353e3"
  },
  {
    "url": "assets/js/49.b8faf6f5.js",
    "revision": "bb5ae5354520e1d86256c4a621ff72c7"
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
    "url": "assets/js/51.0862e006.js",
    "revision": "1bbd8cd923b851919a275eceeb9794e1"
  },
  {
    "url": "assets/js/52.049cef2b.js",
    "revision": "ac850a44b9917fdd440f6e2968205f96"
  },
  {
    "url": "assets/js/53.354432b6.js",
    "revision": "d86083abc9e73be1c77ee972ec373740"
  },
  {
    "url": "assets/js/54.7e7c7057.js",
    "revision": "36c700caa1359256c86610bf9343c7ff"
  },
  {
    "url": "assets/js/55.b4035c6b.js",
    "revision": "803ffa90f9ffc813a6a157caf64e4d67"
  },
  {
    "url": "assets/js/56.84a6e1ed.js",
    "revision": "17e13b00fdc2fa028678a10484477ef7"
  },
  {
    "url": "assets/js/57.de61690d.js",
    "revision": "455b9d9966acccb38abd3fa0ce955e14"
  },
  {
    "url": "assets/js/58.d5d1df4f.js",
    "revision": "fc0284d72a5acdb187ef256e6c56da2b"
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
    "url": "assets/js/61.e4be2b5e.js",
    "revision": "8a8e5b908d1e98736da24b54fbc26609"
  },
  {
    "url": "assets/js/62.858fab61.js",
    "revision": "5c6916aec950aa486fdf2af166bb9d65"
  },
  {
    "url": "assets/js/63.6fc7d24d.js",
    "revision": "14a8baf000e15c387bef2fa6b1cf0aaf"
  },
  {
    "url": "assets/js/64.0f8493a1.js",
    "revision": "d3e51cc022c3c1fc665b4f314d5da0b1"
  },
  {
    "url": "assets/js/65.93cd66d8.js",
    "revision": "5a12fb9500a37924844466d73291827d"
  },
  {
    "url": "assets/js/66.ba1999a9.js",
    "revision": "0e897f0b258be0d56f035ad9889a9049"
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
    "url": "assets/js/69.1dfd7d72.js",
    "revision": "0432451de2ecbe633877a739df7b7a07"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.9215e86f.js",
    "revision": "6d10d95b4fdd01d21d2afc1625417e00"
  },
  {
    "url": "assets/js/71.9e6cf127.js",
    "revision": "f74878b750712ff3ae4a6ee28476c519"
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
    "url": "assets/js/74.ffd5f30d.js",
    "revision": "3ac61167732749bc182cfdd8e775b406"
  },
  {
    "url": "assets/js/75.0ddf9f4d.js",
    "revision": "432854076ffa142f271c4b180585b69e"
  },
  {
    "url": "assets/js/76.461faf43.js",
    "revision": "bace16dd9c2d1d323ec21560acf84a7b"
  },
  {
    "url": "assets/js/77.ae1eb74e.js",
    "revision": "ca2947391c6e2cbf0d374d6d20b35b6b"
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
    "url": "assets/js/app.01e60abb.js",
    "revision": "02406800a4e28280abf0766d86d8eb76"
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
    "revision": "70941342660670b08f26256fa486b4b5"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "92649bdf938ffc35f8604fd16beb91ff"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "372e212f1e219f649414e1b12ca73f89"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "715b07378d9bbe337b939f2b7ef3aee8"
  },
  {
    "url": "categories/index.html",
    "revision": "3b885e0998a7f21443678fe5f88122b7"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "39fabc219afd4ba34b75a0b928d0ee1b"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "c51de21caf02578aa80c81ea515cf700"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "8f99151920b829813adea24aada26a3b"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "eddd907f932e315c6adb4b36cb21aa83"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "dfee897283e0a6d02a73c7c207f2dab9"
  },
  {
    "url": "categories/other/index.html",
    "revision": "9d0b09692879f2764343584269a9e0dd"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "d2bf10797c3b13307fb74098ac76369d"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "7481389eb427fd770ac181aa85c4315c"
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
    "revision": "f0ce7ae5db45d040ccb29173456676cd"
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
    "revision": "4a429bf12fea2949aa63fd700fc23fe2"
  },
  {
    "url": "tag/App/index.html",
    "revision": "0290b8ff6ba38be2f460932f37264bc6"
  },
  {
    "url": "tag/array/index.html",
    "revision": "f7cf028bcc627167acd66247ba358a85"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "875e05fb359869d01157ee50effbacff"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "fc268ab209e37cae5b1fd612d16c5b1e"
  },
  {
    "url": "tag/css/index.html",
    "revision": "6f6989d16e9af368b65faba87aa9c08b"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "026a5af2af98f33a044f29aeac3c71b4"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "a92f990f4c8c4e925d129a82674310f3"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "3c41ed5dbc7df4fac89785a64a3084b4"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "b131b08d08223660301569b3e55803c2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2b50fbdf90c795588b2c0f5cb149204a"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "98ea88f437b6e315e712ea13fcb5de0f"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "49ebda1442e87ae719c635b1f495a0a3"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "699b50878c490681c54c9606676997b3"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "455091b08981a5f10a11261602ad7617"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ecfbfdef049d7da1ccff79408239d354"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "ee1113afcfe37e2030636df8db13e660"
  },
  {
    "url": "tag/index.html",
    "revision": "b6b873c3975d9864f685f3f5204007c1"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "daa09469dbf6670fbc76abd9fae343e9"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "670b9f550be7e5841e3fb317ceb05544"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "7b74b322e113159e4ad8f525d0b4f377"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ad37de5907efe7dc7781711e0c0b4025"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f560abaae8c67d96ab6a62794740b182"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "5e8d6783ba1f0e634219f5aa10fa3d27"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "c76d368a30dafba703f12037d78424be"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "7048e295b781abd1508c25b16cce1c9c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "58472c9748dfec6f24b7353e34c02e83"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "85662f6f1089c23ce38f0ce22a9e51dc"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "58ff793d7671915705b56b0bf8f39fbe"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "da800bbcdef80495ead8c69257366334"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "46ed631bbe4bf05b223b3244f0a186e7"
  },
  {
    "url": "tag/project/index.html",
    "revision": "eb31c20906733e41d3d8a20f32e1d04e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "632b3ac56e79e74e1b5304a0929d2a35"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "83e800d4b1e20c3301214132e5b6132b"
  },
  {
    "url": "tag/router/index.html",
    "revision": "e4873da8933722e87111534abf26c170"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "e3b547b0d941be268e62fb84c7fc2ca4"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "e32db06b6b489a1ff5f79d6677382384"
  },
  {
    "url": "tag/style/index.html",
    "revision": "1f2ef8dcfebee138c25ab3daaa1af345"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "e3a39e695ee3e2d3d5aea75e5f5aee1a"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "2d01f34bb6ae8642e41565bc135427f7"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "580843f6f9f40de89b15c55fa20a7b00"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "5795f3a0226e799bccca5f1be45bd9b3"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "2facd9186e9f571880ad7ddd71f78e96"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "fa468bf6997037714d5635037fbeb28b"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "902a2745d98cc3da641999ac9e8c4c1c"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "d4a45cd890f50d444b4c590998475689"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ce63a740c5932f7d80c4ccb0bcb020b0"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "c66403d331f0c953ce4810bbd36ef8fd"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "69bfdb92a666fb2b92c0aa7a8b3e8e80"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "fe2c2c4a74bcfcac18eeaf57416965a3"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "4f672e78a4d6c090695bbcf331c14048"
  },
  {
    "url": "timeline/index.html",
    "revision": "5a28438e06f1dd0c720e490141b4f869"
  },
  {
    "url": "views/about/index.html",
    "revision": "f3cf10897483eb82ee2c080c4e5df451"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "15617017ba52b297fba0b51f43cda208"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "3c57e9f76cafadd8f0d35f0649494b06"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "4b6c8f2411703974f8b31199cf859de8"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "275a44b31e8271f855306bdb15749294"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "295b31c368cc93b3809931938c24bf66"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "13adf236ba51b4c450a07fac5acc0619"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "4307ae76ac5f54a4b0bd516ff82d9934"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "ea39486872b4e23b1c66af2b70c8cd9f"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "7a0966146927782223f363bbc69f3bf8"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "ef75addbbea9f878606a1a71c9e73bfc"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "fd7f611cc393a18cc13e04a8c6c22c8a"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "5e8339520e92de4b398c723981fc0e79"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "fe008bfeee8b0afccaae55ae3df5c8cc"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "35623a8260bd5b1c823ffa55e7f76c40"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "358786defba7dc2905b016b492ecda41"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "1bff4ce036a4a2bff90e073ff5925fbe"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "af6e47fd7d66a16ca276d01d01702f6e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "157537f30fcbfc3e1089a293e7df09be"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "8d342283b77a199afd7b066313b3da38"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "7428c4e54b941492b717ea26aac7299c"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "93c6a6f80b6f83e7d1eefcdc6d89eb9a"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "5af184b9396a451080f5ea2499f2ce29"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "f480e87563a2025cb55f9eea511a78c1"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "36e22788bcea7135b492a53e4b00cbb2"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "be5f45762b73d32cb84fcf976f3f3234"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "029f2975bba1853c620993dc580a89c6"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "b1cdbca53d64777aeb1487e9c71fb5f8"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "eec8ba1ff3b1f61873e78bae0d3c9d7a"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "d656491c55696fc1f0279d7529050122"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "7865ad0a4e776940025fbbed1067e00a"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "fd42a10719fba2f6550064e3c15c9742"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "b923cc6936e51b71bbe91fb7870a5df1"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "5913c12fe2df78a48eb3e49f0084b5da"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "a82a9542792af00f51f4667d6af19bc1"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "2312291f275eefb3b831c51e128059d8"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "baa717b3db836886a14cfd423f292b83"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "c9ef32bec28353b667f21eedfb939e56"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "f05e8bf48ae692ee81484b070a8ebf9a"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "f7a3061a90391919c64aff0d6e4869df"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "ec082f3482a953011ef17729757d2b34"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "5d39bc295dbd3b53bf198a6b4f501b9b"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "93ae2c5f4565b726b6243a34e9cec230"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "e3b4aa585d79820ef5773d089c141e65"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "c26aab063de3e095870ea404977c5851"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "295ba8ff6c3b7e1fa41ce177fefebe72"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "23f180cbebfbaf3bbc70366dd8d44015"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "73a2096a6583cda112d4694584a85344"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "236120893fa2d79641f208cd4c1eef4a"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "b855483e7901d5e04ef1b631a96d8be2"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "73cd1eba26fd8ae0dfbd88ee9d52a1e2"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "d8e4ec0363325c7a0e626f5fb856cb6c"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "740574cde8012f3951b26d5dc9eb3206"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "7e2d41e40ac9f7dbfef805c688960147"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "5110a13ac16ae7d0a4596aaad0862cc3"
  },
  {
    "url": "views/project/index.html",
    "revision": "b3b2404d2d573446f51161cabff72ded"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "2fb6aa8e586a0ccb01882d7fa2dc72d9"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "3fc8d617c50f2b25f4eb95dc8a58d956"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "94559892616925d7c981654eb31a73e2"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "eca29fe7c6a300fd04b918015548548c"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "b6f4ed408eeb948b2ff99ea45ed5d090"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "9256ffad6588ce4633ca1e073490a336"
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
