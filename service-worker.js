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
    "revision": "4b268ab7a2090414f92a3b260ceea717"
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
    "url": "assets/js/17.8e963cc2.js",
    "revision": "d3668d4d79178fd60a44af8514cfaf34"
  },
  {
    "url": "assets/js/18.93ec21e2.js",
    "revision": "3db852903ef3b35ea475bb0a2262ee9f"
  },
  {
    "url": "assets/js/19.ef423df0.js",
    "revision": "1ee327d07f187227d1c0b9a6a397b2b7"
  },
  {
    "url": "assets/js/2.8da2a3cf.js",
    "revision": "6cc7ef250e62d4461602fc96fe9de15b"
  },
  {
    "url": "assets/js/20.ce9579e9.js",
    "revision": "fdce7117046a36aad810b78f4e566689"
  },
  {
    "url": "assets/js/21.123eea38.js",
    "revision": "be8b59f9486c9fe9e232c4b2d3c1d4af"
  },
  {
    "url": "assets/js/22.c3c65816.js",
    "revision": "d8e788cbca5948c0c9baf923a0950817"
  },
  {
    "url": "assets/js/23.9e276286.js",
    "revision": "80ea6b82f10ca485a167b2228164e947"
  },
  {
    "url": "assets/js/24.7336338c.js",
    "revision": "23746d35c3a703c7e0094bd1c041538c"
  },
  {
    "url": "assets/js/25.fb0c5a36.js",
    "revision": "481179b2f15f074b4e0c98858c3d81a8"
  },
  {
    "url": "assets/js/26.71bdb290.js",
    "revision": "9596a45bfc5ef0e4c0a88af0f0747eef"
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
    "url": "assets/js/29.6e7d4a07.js",
    "revision": "10743c53d5d1ced324ea2a2a93a412ef"
  },
  {
    "url": "assets/js/30.f3a2d277.js",
    "revision": "6c2cc62b8c4deb981f7ade4e44fc4b05"
  },
  {
    "url": "assets/js/31.1e8c88f7.js",
    "revision": "4fc16aff31cf1abed6ea9c349418c34f"
  },
  {
    "url": "assets/js/32.f4b0f564.js",
    "revision": "baed4878574d3d22ed8702cba768ce95"
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
    "url": "assets/js/35.713d279c.js",
    "revision": "f8069e3eaaa1945c5a11b596b78faec3"
  },
  {
    "url": "assets/js/36.81f2cd12.js",
    "revision": "bc30e32fad2f7ceabdeedfec04bd2c87"
  },
  {
    "url": "assets/js/37.12ab70aa.js",
    "revision": "849009ee7218a7ad9da8a5bbe1ea9d4a"
  },
  {
    "url": "assets/js/38.f6cec630.js",
    "revision": "27823f36700cd5f20a3f3f53156d35a0"
  },
  {
    "url": "assets/js/39.0e43ef15.js",
    "revision": "614c219fc217e9253a466828aa9dd145"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.856f53c7.js",
    "revision": "71385ee61827e9d4d628b59821dbed14"
  },
  {
    "url": "assets/js/41.c2c2c5e5.js",
    "revision": "8913e596cbd0a39f4f6481a7db50844b"
  },
  {
    "url": "assets/js/42.010580cb.js",
    "revision": "01db808fb55a5edf1cd370ed3350c098"
  },
  {
    "url": "assets/js/43.5eb69744.js",
    "revision": "b0705747a40e2b3c242e49e4d9494d30"
  },
  {
    "url": "assets/js/44.a4f19b73.js",
    "revision": "dda576f8d1d180629df1123310e3210f"
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
    "url": "assets/js/47.bc5d29da.js",
    "revision": "1fe5de9f0f005730629fb002bdef0baf"
  },
  {
    "url": "assets/js/48.2c8612d0.js",
    "revision": "51a46ad8cd03f8c857033071a9c86a18"
  },
  {
    "url": "assets/js/49.7bc56e8e.js",
    "revision": "ab21ed08c8d565e76e951438feaddbe1"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.ffb7f4f8.js",
    "revision": "60ad10e4a01c2c0bff89c034638d4bd7"
  },
  {
    "url": "assets/js/51.1fd74afb.js",
    "revision": "f7e681bb363a8385031adcf3f5e5b1f6"
  },
  {
    "url": "assets/js/52.991e2935.js",
    "revision": "74731f86ae072ba8e02d1e22961da037"
  },
  {
    "url": "assets/js/53.5b13494a.js",
    "revision": "162ff67f20363ee69fa0c8b1a773fdf8"
  },
  {
    "url": "assets/js/54.140c83ac.js",
    "revision": "259254b07106ac489c8cb97e873216f4"
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
    "url": "assets/js/61.7a86de4f.js",
    "revision": "12092c294c7ccbeeba7e1f0db4bcb2a0"
  },
  {
    "url": "assets/js/62.e8a2adf8.js",
    "revision": "9679128eccd73fb08dab45c733f25ca7"
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
    "url": "assets/js/66.1b60d89e.js",
    "revision": "cef52dcaf04840bd1722e95f9ba39dc8"
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
    "url": "assets/js/69.9b6f0eed.js",
    "revision": "a5657eae9a17d7ac3f32af315fc1dbf6"
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
    "url": "assets/js/71.611e98bd.js",
    "revision": "f34f92cdd81dda353c0c90019586aa84"
  },
  {
    "url": "assets/js/72.bf719f1e.js",
    "revision": "4f4fd81008a2c6573751a1e155b9034d"
  },
  {
    "url": "assets/js/73.b95f6998.js",
    "revision": "06b7f40dab571def11124686f428eb4b"
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
    "url": "assets/js/76.e39363df.js",
    "revision": "2e43cac98cd80df5085629f1adc47fd5"
  },
  {
    "url": "assets/js/77.d5680d53.js",
    "revision": "dc05a102c83391f4a075a51a6c205e5f"
  },
  {
    "url": "assets/js/78.31a0fd96.js",
    "revision": "a8a1b0dd0380632f64af9dca3e98c451"
  },
  {
    "url": "assets/js/79.c3225117.js",
    "revision": "78112af1132e618d572c4ef7cc5e912e"
  },
  {
    "url": "assets/js/8.e26e9a59.js",
    "revision": "7b8c5e30e55d846d9330c265dd331029"
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
    "url": "assets/js/app.62ed1247.js",
    "revision": "4711741b504309fb13694661ccfab1aa"
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
    "revision": "348e1c7c634593fb717cf27ea8df5885"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "8a564cbc88a3be90070db5fbea12ea6c"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "5f27e31980f286ce6f10d3143d9be163"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "0ee1bfee6ee6758df0e967dd5f87afe9"
  },
  {
    "url": "categories/index.html",
    "revision": "7bb2d3b35b55605e7662e56527b9dff6"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "089988f1cdf1fdfa0d7e2f04a4305eb5"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "a0931c2a015b32217dae882a52f68c34"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "b84b771a6f85d604b9c14f352069fdc5"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "3bcccf6ea9830e732d7f100e34aa7f84"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a163b1b06355b99c6f555ecb6401323f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "6bd8cad20202d255ae23cea8cf4cca63"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "d011afc44a10d9da57be4a89374e36bc"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "a4819dcbed2618b60d475804d3f96795"
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
    "revision": "6fc55eee402276ff9fadf0b9089029a2"
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
    "revision": "3503cf85547e2db10149ec8d8f8257aa"
  },
  {
    "url": "tag/App/index.html",
    "revision": "f73ca3c1a26ac9063e91bfa995ce944a"
  },
  {
    "url": "tag/array/index.html",
    "revision": "2f98d7af2439726f7366322e9322e0bc"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "a2e480e6955592ff5a141504501d5709"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "79904fb5a0befc997092a39234c0fffd"
  },
  {
    "url": "tag/css/index.html",
    "revision": "3e48b58e11e48b54853ec7f4a9cdb6b8"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "9b066434844d5a1d33beb750616f2ea7"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "327709f18ecebb4559d7e666a26fcac4"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "116d72f55cc43eee2e9fdc30faf85efb"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "c60ea1f1afc1822e179502cb8234cff2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ddedee861a8fb8e581cea228eda096c0"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "c01e8a22f76ffe6e5337080b98dbc18b"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "f238c300021dab322c3c1b3fb59cd2ec"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "cb3b170c1115ea8e46ed3f8d9a7d2cc7"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "9a15b7e2405b367f5534da38c6ec10af"
  },
  {
    "url": "tag/html/index.html",
    "revision": "31a7a0b53f9de6d2d3f264a7d888969e"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "1d2b9b91245c44fd3cb0b882bd4bb849"
  },
  {
    "url": "tag/index.html",
    "revision": "68d2e2d828d76e868002e17623c3c572"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "9511a88656390ebbfaee4a2afb51b994"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "3ad7c3c4958a6514866a1bb160882a77"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "07c51d5529730d46631051b195eb39f1"
  },
  {
    "url": "tag/js/index.html",
    "revision": "0679055c872af366c38dcff55ed6ca0f"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "df434604952265cb16f40aa913b6b332"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "fec76673f70821a22b7a375c7707e712"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "78582c7623717299ab8735e67df0a3a5"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "4879d96bc9d31e8943632bcdc8a0693d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "39342879029cf56042148f5757284335"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "7a5898509b13fc31ac150cacb3eb7fe1"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "4be0a8ee5f9017661a0557f411821fd7"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "8216c77930ce079b63c0a2f084c2488a"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "b8442b4a332f93cbfd17b9131c7f40a9"
  },
  {
    "url": "tag/project/index.html",
    "revision": "06331560c6e488e75db3513f8cd2c5fd"
  },
  {
    "url": "tag/react/index.html",
    "revision": "1141c771c081f743a72085bab2cb59d6"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "48d6399c7f0e47a25815ec9bb4a08bb6"
  },
  {
    "url": "tag/router/index.html",
    "revision": "f70d7f478e62b4f3e5633201abb2fcf7"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "1334b079a1a2742e4a565f8b596226a5"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "944922da277c85a9c1ea4123ec3fc4df"
  },
  {
    "url": "tag/style/index.html",
    "revision": "24550b4c78d157739b07a51e966ab9bd"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "2aee8a04c0835550e18e78e39f5043c7"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "376720f013f61885cf832243472631a7"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "178e11ee352cc8f0dfb33dae931dd3fe"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "a0ade69b2187494fde425213d0eade00"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "8caf41204ed354bb4357f7ccbc23b627"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "e55e144b09edfa20c1fd8cb1f5913871"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "99ba264b4b960485373148862c7ef3a1"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "3098ad5ffa8eb9826d670c5a7f240066"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "520ad7aebb5b182cf9822ae36f1de695"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "6d695c6f4a5ad91d37a8eefdf1ce6548"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "04cd8ff9bd10d4f821d3a72c71469d48"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "ad7faf6df7171e81fc80ddd7f128b8cc"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "a06fda620a0a0843af025e5ffc9fe653"
  },
  {
    "url": "timeline/index.html",
    "revision": "9d53fcd9ec5578ce203ae7afa67ab12f"
  },
  {
    "url": "views/about/index.html",
    "revision": "f54d458d2d35149348e981b8fcd8898c"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "fcd9b2ecf90d93c55e5082818aeacfbf"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "ff0af54078ec4003f29de9c7cf6f3cf3"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "e0ba5d5229981ea45a287004bec2f203"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "9aa7ea9171c28b7abe0349f155def335"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "4632c20313b035b5e176b755a56ecc8d"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "fde6048f0a5bdb523e5146936a26ca6a"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "aa05a223b3cbd3fea9be74c5b345e17f"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "5801d7f10740f04289a42a630b28f08d"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "c36b21f3b5b4b828f91a0b54d4c84cd1"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "37338a706f238afe7645ae3f1682fa9e"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "7108eac668dd14f32fa59bb8615eef6c"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "38c982145828aae8239ff71fc2dfb6ca"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "e017a2ef1261c1edecb46bc8876c929b"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "92aca0b4457991c0507520db5da78d75"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "320871322037c8e2728d4542cfcecc0e"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "689052d9139fd6c00cd9f58ddb717e62"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "b595868ce553780e1741ccf1be5e0159"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "e81dad256712b1f12cec1fe8ca2db9e8"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "7625ea514759ade575d35f60df0d6911"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "a8ae8b9fe4cba314c1ca20d53736dd55"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "f8f45ea9824361e050887f37d43e9345"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "ff7289b7630670cbfa971ac557e60cef"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "70e223e9c3f117f0bfe842058603840a"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "302d1df20e84deabe899b4c5ad7181ed"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "9503ce1508910a6793dbfea59f499cdb"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "4fab6948355e3d5328a4e9a305655b5b"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "fd7500e81993fb894a703da7379918b1"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "b6fcc7fda2a10f4eab343f97cb065691"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "95fb28e98a3b7a526e1323138a583ecf"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "fa0e7d9161a4ffb24a276fe03deed736"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "428992c0be3d46ddcaadbf2c2b8f0e60"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "e70f2f43a4df920f4c8ac675648cab2d"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "50651c3a675a88a18a90e90683a996d6"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "10d65a77252cc6261262a3e2a7ee334e"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "85a40d783ee24a3f20b162eb21056333"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "900abed104082d50528864b674be2f96"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "d5ede5ba301fd79a428cf331dbbfc231"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "e1b5a0052c289b1af06c78249fafbcd6"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "3afdbbce5d742914390ad1af365d52a3"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "1408f75de9587d8ff657772ee39e43b9"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "a0f0e0117e0e755f614dbb676114d0da"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "0a9216da10fc63d58db4ede2f347e056"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "d210c04e0abb5cdea797525a9e945680"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "7e52f515c288adbef855afc739abefef"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "d1ae146a1314bdd029c14463850e7427"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "3feb1e73b035888ee2ec39409c2a0afd"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "702484fc37ad665c5635b4ad40258aa4"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "7089de3a3d02146c054679088aac0b65"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "e0815639f913a6a6be71ba9090250857"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "bcda384a1b3d62537860bc78d03edc98"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "a7e578f809ac26e07615f4d0585e950a"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "78eeba7bbe233173085cc2ff6cc8dd80"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "a79dded98e9bb9119e54b51d4e9d8cb0"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "871375eabdd225ae52947e1acc7d553d"
  },
  {
    "url": "views/project/index.html",
    "revision": "fb50fd96e6beb33ce66aac2f49401a39"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "848ef5a0023bc83b5137023cf50236a9"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "5a005b35e093db2389f4feea63f02a95"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "e260e6f632ce19c6d9341edd72efc60b"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "b959096224d11994b79eb390a3e7b922"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "d7f7707b39e07caac81a020e35dfa534"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "515dbe255298341eac9d452e8e4bb807"
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
