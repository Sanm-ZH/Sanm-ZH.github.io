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
    "revision": "d33a8a85ee261d1946e5a230fdb206dd"
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
    "url": "assets/js/20.00cfc794.js",
    "revision": "4943a77f2b0626d0e0126dd93bd16646"
  },
  {
    "url": "assets/js/21.123eea38.js",
    "revision": "be8b59f9486c9fe9e232c4b2d3c1d4af"
  },
  {
    "url": "assets/js/22.ca777b9c.js",
    "revision": "a6cdaae4077612a72afc79084e760381"
  },
  {
    "url": "assets/js/23.e81dd6ec.js",
    "revision": "bc1cdbc9d21d25a32ea55abde40ba68d"
  },
  {
    "url": "assets/js/24.91d7a10e.js",
    "revision": "13b2a22d7f5d15b8782b3bbcb2004a22"
  },
  {
    "url": "assets/js/25.d0d1c7bd.js",
    "revision": "cf569d1078c8a36bf8b04d5b8f97fafa"
  },
  {
    "url": "assets/js/26.efef0d3b.js",
    "revision": "56d1f4a1fd04bfeb6e4d6af3fabb61c9"
  },
  {
    "url": "assets/js/27.a001510f.js",
    "revision": "7a72a5f28e7ea5c2b130023576b47f4c"
  },
  {
    "url": "assets/js/28.a9663c24.js",
    "revision": "c9a2e5ebbdca01c65db377b2a8d113c9"
  },
  {
    "url": "assets/js/29.7aae86f1.js",
    "revision": "d243aa76830ddf4437602e556be1402f"
  },
  {
    "url": "assets/js/30.13b9a5ba.js",
    "revision": "8a1e8c3579b8447a660ac8844aa4f00d"
  },
  {
    "url": "assets/js/31.577bb7de.js",
    "revision": "a96d40cdd6dcf2195f7152f77032b945"
  },
  {
    "url": "assets/js/32.7007aa5f.js",
    "revision": "ac094ec4d5932aefa4ca774424c52839"
  },
  {
    "url": "assets/js/33.6168ec0f.js",
    "revision": "64ba3d8a9ca27b14d333732f80e3b902"
  },
  {
    "url": "assets/js/34.7c9d849d.js",
    "revision": "2d44093771ddda5c3367b09b56f4cfda"
  },
  {
    "url": "assets/js/35.241a05fe.js",
    "revision": "850ae6b19f8d85fc6f8c6253af0f141f"
  },
  {
    "url": "assets/js/36.e0f5b83f.js",
    "revision": "60e83a2f0490f680edb8f29eadabeb9b"
  },
  {
    "url": "assets/js/37.c9cfe0e5.js",
    "revision": "715e174e70c8207d9c5c8194459699e3"
  },
  {
    "url": "assets/js/38.b2e95256.js",
    "revision": "f93f6b9b7f64d0d67403cbcb7e8b289f"
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
    "url": "assets/js/40.2a9386a2.js",
    "revision": "225185db9c5601a4167c1d818610e08e"
  },
  {
    "url": "assets/js/41.8c7d7577.js",
    "revision": "59061318cf81a237fe9135c79db5909f"
  },
  {
    "url": "assets/js/42.47e0a5da.js",
    "revision": "4a3797457f188b7d55193ef847565ce5"
  },
  {
    "url": "assets/js/43.ddb4a174.js",
    "revision": "f86432a4a93a035e18f4f523e3f8b3b7"
  },
  {
    "url": "assets/js/44.a4f19b73.js",
    "revision": "dda576f8d1d180629df1123310e3210f"
  },
  {
    "url": "assets/js/45.15eb102f.js",
    "revision": "4ee1713fd8b03019b72b16818d7fa6e6"
  },
  {
    "url": "assets/js/46.bff7f9bb.js",
    "revision": "30e15e29e2b9d5ae2151452b4c1c8274"
  },
  {
    "url": "assets/js/47.67e6ee4f.js",
    "revision": "aaa877304e523c15f1e5940be120a1f3"
  },
  {
    "url": "assets/js/48.f8e5f189.js",
    "revision": "2f72968bd440cfa3fbe9bf7938ae071d"
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
    "url": "assets/js/51.1fd74afb.js",
    "revision": "f7e681bb363a8385031adcf3f5e5b1f6"
  },
  {
    "url": "assets/js/52.8b816632.js",
    "revision": "3eb4a745911a3a631d4e5f3f2b33216c"
  },
  {
    "url": "assets/js/53.a3c16252.js",
    "revision": "2c817cf11237468d40c0b32a51668058"
  },
  {
    "url": "assets/js/54.d58afa9d.js",
    "revision": "a0983eceeaa128f4fc36a5c55f0d73a2"
  },
  {
    "url": "assets/js/55.b4035c6b.js",
    "revision": "803ffa90f9ffc813a6a157caf64e4d67"
  },
  {
    "url": "assets/js/56.37a94422.js",
    "revision": "1317b097601f13807436c27daa1230b7"
  },
  {
    "url": "assets/js/57.da3f2e67.js",
    "revision": "5fcbf80ed59445c672144dce6ac36799"
  },
  {
    "url": "assets/js/58.faa3d634.js",
    "revision": "444b1f0fd512649d31a2e5465ae2a831"
  },
  {
    "url": "assets/js/59.44956a0c.js",
    "revision": "f044c797188baec997e882dd52c5495e"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.e660297c.js",
    "revision": "316749d35bff288d91bb5d1e38bfb903"
  },
  {
    "url": "assets/js/61.5cfc93f0.js",
    "revision": "fe36e87dbddbab8a7f24443e79df1bd6"
  },
  {
    "url": "assets/js/62.69c0e288.js",
    "revision": "f5f0ece967377cbc132170364937e4df"
  },
  {
    "url": "assets/js/63.437e827b.js",
    "revision": "3e302e23c5d50034c516d2f8e52211ec"
  },
  {
    "url": "assets/js/64.ccbef994.js",
    "revision": "8a823ffc2388198cbe2e469ce9c54671"
  },
  {
    "url": "assets/js/65.45b09242.js",
    "revision": "99b11b5a11def8401f792d6d36493eea"
  },
  {
    "url": "assets/js/66.20a5730e.js",
    "revision": "d6bc6ed203f18a1079903f1ec6da08bf"
  },
  {
    "url": "assets/js/67.c542a6f7.js",
    "revision": "213bcba997b09d1ef14c3d0c8ee2af8a"
  },
  {
    "url": "assets/js/68.adaf445c.js",
    "revision": "1ce36db8f9414119e496562fc5733468"
  },
  {
    "url": "assets/js/69.b61f8f00.js",
    "revision": "21a71a57ae5581694f6661aa022c5122"
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
    "url": "assets/js/75.8dc2082a.js",
    "revision": "65da600c313f5de2be26d8f369882ace"
  },
  {
    "url": "assets/js/76.27a1253e.js",
    "revision": "41c2423fd987a318a441d2e38c3b76f6"
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
    "url": "assets/js/8.21661618.js",
    "revision": "de0f01633ec9a27e10d329594e212dc2"
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
    "url": "assets/js/app.a0ae614c.js",
    "revision": "b4e9c9e736adac9f22c84cdf5cb8fd4c"
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
    "revision": "898ad0c2bf00bfd174c88c4932a7b913"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "f098054463c6583d93ff5f594c209c73"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "434c8e37446a408740a0587b07bc9a26"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "458a3e9f8f45834037b99dc60dc576ea"
  },
  {
    "url": "categories/index.html",
    "revision": "c1c1b23fafad06506dfd237d7fca6546"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "2aca8bec6cbb4f995559e635b520bfdc"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "ca294093f10aad60609093f2b46cb4ee"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "03b76a4da6d957c0024bba7d8aae2f51"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "5a41250e53c3c1f2cdffe9bc80956844"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "c6bc5ad3622cb347b5ed9d022d9973c0"
  },
  {
    "url": "categories/other/index.html",
    "revision": "22f630de684919d85c4c5d5cdfc4074b"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "9f9fcd3994c9fe148ce45031af888f5c"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "d1b4eac70b6a715e4bb37b15b453a808"
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
    "revision": "eb7e9eedf0fb9f865031f7ec9c3ec888"
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
    "revision": "63c123bac5182bcf8ead308feb75446d"
  },
  {
    "url": "tag/App/index.html",
    "revision": "a2a178b74fae5d49d9585e54995a7cab"
  },
  {
    "url": "tag/array/index.html",
    "revision": "3f55eb7e2a3dd77fde35d1c7c1f9ec93"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "e6e78087f236743927250a9f0bcd3de4"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "43912c4e3fb22d4b96a39d7be213d6fd"
  },
  {
    "url": "tag/css/index.html",
    "revision": "1ee8b99e5f3f2b86fdd68799a0126d42"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "c03855025de77aa89904beefc4bdca62"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "7a6b070e2668fd96d5cfc3e8d087b17b"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "a8977a504ce7a36ab8dc9726f58d8122"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "c3aae6ad49ac0856051f6d7af46762a7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "432d79d4eec5fc01bc0af8bdf1f04664"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "33b78579a32d2bdbe9ca498ba4be35a5"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "a1c2dd5e6e3c46537db62b5554954807"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "777c8427a010dbb53ff4b31181429f94"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "e7d61a91b5205ea4de74db8857638049"
  },
  {
    "url": "tag/html/index.html",
    "revision": "43dfbe80d5e2e262533a51bda5450796"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "dfa514a9f6f69a41872ba0c400bae4fa"
  },
  {
    "url": "tag/index.html",
    "revision": "efa497cfb82798c4b19c6b460a0ce9fb"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "e73a6026e9d355dbc04c74c2e6cc7399"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "2c526a18430a5c14f6664259320e18cc"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "860dbff06ecc3046168bea1304d2b0ef"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7c50f670385871e6a61723e28b404237"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "443f05b0304210c1f61f9db7492fc7ca"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "c931173a5d28ec09d97f5f2f92311f91"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "587942a49d12e9b61773432f7439d6f9"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "e0a5e7c20cf22cbceed4aa5b154fae3e"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "96a9370d26fc601d0be78d32294b2b1d"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "40c83323b2791c99e8a48c990c9c4fea"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "1b4d45c8f62de942e9d31129865e2d50"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "f8c022b4bf80f3d6643954bb7272d53c"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "57b18fdc876ee5e2917f9947eb435aaa"
  },
  {
    "url": "tag/project/index.html",
    "revision": "4be13c3210ef24facfddb2233424878c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "4ba136e1d0c1ae4e5865cb8ddc145a1d"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "be8e069bd83fb2e4dce46f02dd0a384a"
  },
  {
    "url": "tag/router/index.html",
    "revision": "6835b87ba1a04403c68fcfac79da35b6"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "ad6c8471c763af9972334104bc920316"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "893f10ef4834b9867618dda585608171"
  },
  {
    "url": "tag/style/index.html",
    "revision": "3bb44c353fcb2ed383d269fa7e42b5d9"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "175b3be58a659ebbe3325d90b45d70d7"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "f4845dfd400dda0d1b320836bd6157ca"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "3744d818799e91377487344e126aca89"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "7172a8ea53b0b90549ba658991d59966"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "4020673de49e99421128869df40b10df"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "81a46d5b2f4a2fef18d6a4734363b06c"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "bea9a5f0dcc8d0958b1574e3ad737e40"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "da6afe4919ae0a518a2023ed41fe9dd2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "70d1c081b3129519191017c9775d9109"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "123cee3cc80ba15a5b4dcea0dbcb200e"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "bb0bc638613f88cc6968b72e9d978c3c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "850649404457d9489e15f9a2a2d43857"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "8e9043151d3dc790d7fed7ff453fc2d1"
  },
  {
    "url": "timeline/index.html",
    "revision": "c6cceb27e2e90e6abd396e33ca474ab6"
  },
  {
    "url": "views/about/index.html",
    "revision": "309d992a2280b76488f6a63e3b85611c"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "6ca04c690815b48d4e726e934fa1c783"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "bcb2a506452e4dde0e32570a6cb0c722"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "8843eef9e16db2096a6d12d05a299f5f"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "dfab169a86d420fe7c0493ddc33e29ce"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "15a58589180f69afa4ac5ef303842fa0"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "a4bd493ff7deac4cc8184babe170237f"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "831a206aed17500cda0690cfb96762e8"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "aa534b716c135ef4f41c44f6440a27ca"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "914f1ec296810fba233cc01629f7d215"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "bc7483af60efbe00e6e97bf8833ae73b"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "d7b3279283f69878a8fda9174e07a5d7"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "195e5fe05a80f4317613875caa85687b"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "445ade216b5f1e7fa1666e3ff8194a49"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "c6da7417375c678bddb8d0ec9032f45d"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "72e990839586c2846af80f5f3ebdc6f4"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "9ad35424693326c60ad1f7290fe116c0"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "636ad6d946936ad8fdcd5d3538d22178"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "41a5c8d8bae8c6899cb0451aec5d3bec"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "6e5f3b4c0dcce86c7d1d7862b5af9b45"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "29d3b768c5ab94dc99dfd2e45cfc35bf"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "619e29f98394f0b436d2e2f34bf0fe33"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "397ea3bb5e38e1d4870533218fd0a1a8"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "6eca458db5afd5b4cfaf322841873ccf"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "e2331c4c8b8c2d67e5097378868c7a66"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "9e1ce0cc679c1999c2de8ac629ce3c0c"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "fdb915d76f49e15f939477e4aea5434b"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "1ae19e4c51f0433f12f0243d7f2f74f1"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "0e888db81b39daf34043ea6f3d42b71d"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "432b7eb861f4e46f21eb5e13df5af748"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "a1b93480cb236623c1859169115cf8e2"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "d6d712f392bd2a362806fe606bc72280"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "c354bcb76c7446723aa5bf59b48dfa6b"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "30ffa90b05ffd4b3c38f908fead1d998"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "0c9efdbc524f2ea5da5545cd07d0cfd3"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "98a156bf025fada7d79ccbc4ddacaceb"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "3efd038645b6838ac69292d30a69ef8d"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "58ed94a9c9707205341c91add2c65b3b"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "96fe5fead1c0a5b8c121d0c7dd70c613"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "927b3e656d3060a3fed29c481ff9bdad"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "c9a25a836f56c050c7270b41329d5e1a"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "bcf08895eb92990ec6fba2a3a198ac4a"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "11928db578dbc2847a29faa6e67c0168"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "5b6c459d70ca43b798597487e9500e24"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "d67b2282dbe50d91f1dbca4bda412031"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "89c8a6485ec4b3b56dc91bb5ea4b8135"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "2849edb9991a95f2e64b923cba955754"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "3dfbc50950c37e57607d0a96125243d3"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "863ae4627b3ad6325e7f980876652eed"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "c287a68d651de6df208ae940cc483d1d"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "e65b0f39bc15b37b64e0de0ef739d89f"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "46b90c698038fd8ee8b8f36c54b52ab5"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "95dd7c8a51a10f886827353b20d13305"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "a03b509f15630f2f3051db21b9b03cf3"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "d5fdb33ea4688fa9d86f1b608c06fcad"
  },
  {
    "url": "views/project/index.html",
    "revision": "4b576e0a2b16e8b8346051853145e33e"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "9975e807ea48502632a6d25c6c98de42"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "02fbb943f7eb3d6b4dd29b86358fc9e9"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "9998e6a7df0cb8e2e771a26dcdc4b6bc"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "7abdbddfb28d00145e6f2c74598027ea"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "85b4c0a7d83faf66c2f1a5b94bb4030c"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "07b4af567802eff6484df6467814f6fc"
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
