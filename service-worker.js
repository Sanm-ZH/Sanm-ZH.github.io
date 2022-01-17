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
    "revision": "40fd3118b3d9a2e03afc695a46f66222"
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
    "url": "assets/js/17.85e3f1bd.js",
    "revision": "a2fcf9dc58a85c3015f2c1d380403031"
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
    "url": "assets/js/23.2f023ff9.js",
    "revision": "f8c99e433a8d46815880075bf4a08e70"
  },
  {
    "url": "assets/js/24.64307061.js",
    "revision": "636f0d982243390939bfc0a7edf2480c"
  },
  {
    "url": "assets/js/25.fb0c5a36.js",
    "revision": "481179b2f15f074b4e0c98858c3d81a8"
  },
  {
    "url": "assets/js/26.d6c0dc69.js",
    "revision": "34f25fc09ce69cd511fe64c375d5ff0d"
  },
  {
    "url": "assets/js/27.482ada67.js",
    "revision": "12720016346051831dab7ef3b4a0764d"
  },
  {
    "url": "assets/js/28.447f7e24.js",
    "revision": "6d3f711701ccb68a0f8508e943a46951"
  },
  {
    "url": "assets/js/29.7aae86f1.js",
    "revision": "d243aa76830ddf4437602e556be1402f"
  },
  {
    "url": "assets/js/30.f42f374f.js",
    "revision": "5594fa76517ad8b5f24717926e675b8b"
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
    "url": "assets/js/33.bd63d046.js",
    "revision": "6ceb809961d0729d8cd4e5850c995a3a"
  },
  {
    "url": "assets/js/34.7c9d849d.js",
    "revision": "2d44093771ddda5c3367b09b56f4cfda"
  },
  {
    "url": "assets/js/35.c8cc6b93.js",
    "revision": "fab4e9299dfb7ef36f8dd257e1d52b2d"
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
    "url": "assets/js/40.7d423fc7.js",
    "revision": "fb8e43bf3696619a4186e208d19f4e93"
  },
  {
    "url": "assets/js/41.c2c2c5e5.js",
    "revision": "8913e596cbd0a39f4f6481a7db50844b"
  },
  {
    "url": "assets/js/42.47e0a5da.js",
    "revision": "4a3797457f188b7d55193ef847565ce5"
  },
  {
    "url": "assets/js/43.09c0501c.js",
    "revision": "9d79bf7c5be77405e390b443141e9ce1"
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
    "url": "assets/js/46.404c6a95.js",
    "revision": "c49094580549ef7b43878c19e33e34fc"
  },
  {
    "url": "assets/js/47.67e6ee4f.js",
    "revision": "aaa877304e523c15f1e5940be120a1f3"
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
    "url": "assets/js/50.0e232111.js",
    "revision": "2b7153fe69f6666a2af81bba125f5c9c"
  },
  {
    "url": "assets/js/51.0862e006.js",
    "revision": "1bbd8cd923b851919a275eceeb9794e1"
  },
  {
    "url": "assets/js/52.991e2935.js",
    "revision": "74731f86ae072ba8e02d1e22961da037"
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
    "url": "assets/js/60.aaed14f3.js",
    "revision": "a02d4cebada0b283cac6c70ae6284359"
  },
  {
    "url": "assets/js/61.cad875a0.js",
    "revision": "8ab97bf6d97f0e917f3f9b4fe1c886c5"
  },
  {
    "url": "assets/js/62.a9c85e06.js",
    "revision": "8852bad992d8b6a00767a88449bf5c86"
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
    "url": "assets/js/65.cce4eacd.js",
    "revision": "15d26b68975786cbed568c04b08e1527"
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
    "url": "assets/js/71.089e8ee0.js",
    "revision": "714e255b7e19708119b53c6493ac4f4c"
  },
  {
    "url": "assets/js/72.94c5a682.js",
    "revision": "09a43e95b9dbaa42279dc886428dcde2"
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
    "url": "assets/js/8.fb700b15.js",
    "revision": "17f0fb49dc4b2e419c612efdc0d2f447"
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
    "url": "assets/js/app.49e4110e.js",
    "revision": "d0b10df7e70d8b6c3927d4e61f72df1a"
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
    "revision": "03127c1648c1957feaf04bbe70679e52"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "29610d4b0cd8ed44581643f74aeba499"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "4e47805f18f41bf9702533320d7e51b3"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "1dd63b9ac3ea679bb75cfd853c8b6a15"
  },
  {
    "url": "categories/index.html",
    "revision": "da1fb208f48a7ca604cdbf97e3c5fd19"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "48f199820d49435357bf51fed7b59b29"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "5025dea98959283f630b8cae8a56e0c0"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "afc5d58c76756eac33efeea091e721c2"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "7cf771ba5d12db92e1b5c8ce667a48fe"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "0b1dc3586b75de060efa0e7d6e61c64f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "5c5475350bc86e081e5fc1e691ad6a94"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "96c7eab46594cd2513ced4c5d997d895"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "04426e571529ccd6b29b1ee327f72294"
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
    "revision": "80369d62272ba8e8f18e5d6860b94db5"
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
    "revision": "e518508276e89939df9df1aebe149756"
  },
  {
    "url": "tag/App/index.html",
    "revision": "b07fa951e580c030bf42faf812ccef11"
  },
  {
    "url": "tag/array/index.html",
    "revision": "46e28fe34f5ae56efe05852e0ae4b660"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "8c5f02ac378006039c26d04138cb296c"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "9aa56d55c49df381601e56161bb947ce"
  },
  {
    "url": "tag/css/index.html",
    "revision": "46e797716617ec24b38d039a9d3292c8"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "c868e2966134c471b92cfb1bd44d1afa"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "98590de70ae0328adafcd9728f797253"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "7d27b50d8267c9fdd6c806dc57be5dce"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "80380ab12efaf870191af129e1fafc13"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a5e078a19a0bc5a45fb9aed01f706e00"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "18cc32542de4c478649432274a03a418"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "56edc46164dfd79d7bd2a2ef147cc178"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "bb698595e10015a9d82997f38228e617"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "31f2b1e06282bffa1096c26744425b5b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "93219ef6b28fa7b82b2e1557cd4e997f"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "95d1f9878f89b4d552d44f3b4f3ff6a1"
  },
  {
    "url": "tag/index.html",
    "revision": "c452d7e03e71402e8d1ebffb07cb3c4d"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "d1d0454f3958e3c046276c43b65b094a"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "5802226129492695b928f0b12880ebae"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "f5fae7fe6d2e3c7f757fd0c884a3e933"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7686bd4cdbe95e2a80397986b8bc599f"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f6865c5b685f84d8c00422a9a52b3fe0"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "53e62aec2194465f03aa25e789fcde5d"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "8f6438d26f9792af0f28f94a7b0cedb9"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "b234071bf480319fa2562d46a4bc8522"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3fd6cb5c4be9d40752e5839be887c764"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "cb4d226e6f4f1e973c89cefa45d3e29a"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "8d8804b9fe1e0d668c4556db41dbf9b4"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "6950bf7cd142a14bc2114fda2bb67f5b"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "bd0c9eb3b0ebaca07797ccc1e459946d"
  },
  {
    "url": "tag/project/index.html",
    "revision": "656e03288a420aa3f95b706785550f5e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "4617e4d60e37999d0bb24bd861b03536"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "836dc7f9fb77bea6fd1ecf4b639394dd"
  },
  {
    "url": "tag/router/index.html",
    "revision": "4661b85c69fbdfc21e1d5113bf50fabf"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "c4dbc7c5cc65328d7def4434a8f93cf5"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "5d391c7c10ab111d837ca3251a6abd33"
  },
  {
    "url": "tag/style/index.html",
    "revision": "5cb0e3541c41b8fc8371cf2ddf9a9878"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "1015153926811de06a9933d937fe99bc"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "954a2ae2d7067da57df1a943a835a920"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "707526de0ecbc2beba225b36c9a28cd5"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "46370b438dfd2b17ba54d6ff513cd675"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "437702873ec332fefaf9fed847385267"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "e58294d7f99b67b8edbce17e5ba4eb6d"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "f7834a887cf6b09c5f184a3701e8dbb7"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "08e4f77219705495ef4174371258db79"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f84073a365bc4f11afbda40b77a78de5"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "2d5040d83a635298589380a61a86174a"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "db3f3d35605c604030479849b986bb34"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "f5d5e23fc2d1c8c79f5ba594a0d4369b"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "6a2aaf084da3243a1c14c1cc8003fa39"
  },
  {
    "url": "timeline/index.html",
    "revision": "0efee07a7361773ccc89b0fb37ac3efb"
  },
  {
    "url": "views/about/index.html",
    "revision": "1c6012fe9eb0ede555654cbcd3cc1c59"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "4c487cefe1c41f4e461a9c0599dcbadb"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "724ea22e7fdebc0ebe8fffa13fe83055"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "2ecbc0177fc1d3c86d567110b7bc88ea"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "6fc0f8440ab65b553b1ebf50c7bed5ca"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "24427d1148fa51970125684939203725"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "cbdd0e60dd18903e16ead68f9e7995fc"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "ee0e7c859aa6bea3ae4fc69b0093f96b"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "98073004931132bd01afc3ff6af9e21a"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "5694844e0b95bdff223793d0a7a59702"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "7cd6a31bc6141d7924f0f075dedb7de1"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "e318177b64648f541489c2d05cfccb9a"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "b3bbc994a316fbfb559bea91e906ccf9"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "0d5dccdbb25dcb9e2e1905245a59436d"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "ee4064a7f804e0508092dc723da458b9"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "10bd39b5f674b713a613e57d013f7107"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "1f50841c63ee883051f96f136b779f7a"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "01ee99ba581b80d5f915548615fbb8f4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "873edf1cca42a66a1767a85115e60179"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "412d0b105df26e505d1f55333d1f1cc2"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "390e6786a2a98ebcd2c78685c814ff66"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "0a9e8a290d64234a28f6dc4af7547060"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "3fa0b81b3d44e0ee78fe338248dfcf49"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "d8bd2b4b269b43b341cb9d405c95a7f2"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "ff5b84ef2f35cfe2ecfdbfeebbcc125c"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "018c8b673b5ed1abfde735306da67e89"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "c64109e68f1a16e1b13ab97083ed1698"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "744b3155e6fff88d80338c5ab372d3a6"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "9ab441cc40623d3903b8f59093ff2e5d"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "b40845fa42028ea5f90fca9d7ad06491"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "62b4ca713e304744fca1fd575fa7ee92"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "192f0bdfc2f64870b31abdf59feedf97"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "a643e1680564158ee8758aff17409de9"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "ab55ba6f5a4a9bae81769b3831a8f7f9"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "cb6923054a632ed96556cefad8f7351b"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "1deb1083415a80667453252454ca86f6"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "ebf6fe94f9e275e986a9fd7bcaa6be53"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "e0f1e75ce3f4dbefe02ffd8724382344"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "5f27b632614ea97f3819f65dd794ec3a"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "1290e697209cd12e976addee2db63b27"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "8bb6c9078ce8fedc3b2160dea7f898f1"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "88d15fc8f502fcddb3f380d20289cea6"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "01d006790095e226e4b89c1ac2617d35"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "5ce46c0d93725e7fbe29ddab53f26039"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "6381ae9c4cb8807f70a7614158abf2d5"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "7164a5554c63355b92f709e25ee24b47"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "920c85ce6b132298e236dd4b6e09421b"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "338cf4935ee045e5a6786bb70f31f392"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "0653b20a2d9939a05382ac31dd6d379d"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "1456d8a5cc8f9373e97e2791db740c51"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "0605822ee86ebf47ad617edf6a31d896"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "37616b98e74f519876e621e94b17700e"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "03919703b2928a18c853ccf0a85a08b0"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "667e4ba868aac05e0d184091129914d0"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "544232b37c7bdd8a3306019a80feb647"
  },
  {
    "url": "views/project/index.html",
    "revision": "84c328a4b12d0a76fba0a5c4021c0566"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "4db563a1ab75808f4e47fd279713d1f9"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "fb4e8989c7500bc1d9671fdc3d0e1235"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "96d490b76d9b309db4baef2e9013d058"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "2807df0d07b9ff9fdac5eeb9753e4d93"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "aaeb3a2e4ceec94a87b41f932b05dcb1"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "c6a8b3721350eed31cdce60383b3e0a4"
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
