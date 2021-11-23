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
    "revision": "e2f42f2364b4901586a7499c8f20a69d"
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
    "url": "assets/js/13.76c1e773.js",
    "revision": "bc5b0b280ebedf39a323a196414e4755"
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
    "url": "assets/js/22.c3c65816.js",
    "revision": "d8e788cbca5948c0c9baf923a0950817"
  },
  {
    "url": "assets/js/23.7edef2ab.js",
    "revision": "d829381b31297e78ed0e1e0f12ee6696"
  },
  {
    "url": "assets/js/24.7336338c.js",
    "revision": "23746d35c3a703c7e0094bd1c041538c"
  },
  {
    "url": "assets/js/25.be701f97.js",
    "revision": "7c31c6a05f83c3b8fcb9d75c5cc540f7"
  },
  {
    "url": "assets/js/26.797814e2.js",
    "revision": "84101be3f438026bc94bf391b1cae587"
  },
  {
    "url": "assets/js/27.3da3c0c7.js",
    "revision": "c2002b2401329ceee2ebc221817d148c"
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
    "url": "assets/js/32.97e0a09c.js",
    "revision": "bd9f9c52a2fb24e5f46fe703e38db71a"
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
    "url": "assets/js/35.ef23f8a4.js",
    "revision": "1912dff0614096be60ba5a26e32019b5"
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
    "url": "assets/js/46.404c6a95.js",
    "revision": "c49094580549ef7b43878c19e33e34fc"
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
    "url": "assets/js/52.991e2935.js",
    "revision": "74731f86ae072ba8e02d1e22961da037"
  },
  {
    "url": "assets/js/53.6884ea57.js",
    "revision": "09f91a6510081ea78b924bca88490026"
  },
  {
    "url": "assets/js/54.d58afa9d.js",
    "revision": "a0983eceeaa128f4fc36a5c55f0d73a2"
  },
  {
    "url": "assets/js/55.9803b33f.js",
    "revision": "24b349a47913ba9b691a857cf9a2d661"
  },
  {
    "url": "assets/js/56.2ad48724.js",
    "revision": "d3dee4c8f8b6bac1d2e640771a7da693"
  },
  {
    "url": "assets/js/57.9bb23288.js",
    "revision": "328d3edd8b893225cb436c605ed105d2"
  },
  {
    "url": "assets/js/58.9bb0a4c2.js",
    "revision": "cdf4acf7e008c71d56cceb4f7ed30292"
  },
  {
    "url": "assets/js/59.b8807712.js",
    "revision": "01fdd582880f325ee69c6b07a7e5764b"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.e8262ce9.js",
    "revision": "85259a5543293123b966d6c709567578"
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
    "url": "assets/js/64.3c4d0e7d.js",
    "revision": "72ad158143e281086888d232fdce2e8f"
  },
  {
    "url": "assets/js/65.cce4eacd.js",
    "revision": "15d26b68975786cbed568c04b08e1527"
  },
  {
    "url": "assets/js/66.e72f14be.js",
    "revision": "9e2064331f2cdce3b4dd6acd4557f9f5"
  },
  {
    "url": "assets/js/67.f7108b59.js",
    "revision": "abfcd9e48e8068dc4a178bc8c82aeb81"
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
    "url": "assets/js/73.b95f6998.js",
    "revision": "06b7f40dab571def11124686f428eb4b"
  },
  {
    "url": "assets/js/74.f0e233a3.js",
    "revision": "65e89a670038ef8276f1ed39b9c30050"
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
    "url": "assets/js/79.041e5f80.js",
    "revision": "de2b33b18c23633f9a9a097b9491e7e5"
  },
  {
    "url": "assets/js/8.2768ec37.js",
    "revision": "1582749e28268a55fd7dcf00b87f3cb0"
  },
  {
    "url": "assets/js/80.a7b2f389.js",
    "revision": "78e89e3322b4e4355b069ae02a14dea9"
  },
  {
    "url": "assets/js/9.60abb5d3.js",
    "revision": "bf518093395819f5e73426b3f00e2dd3"
  },
  {
    "url": "assets/js/app.5161822c.js",
    "revision": "ef45b247dd6363a78bb8f088f4691ca2"
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
    "revision": "dfdbaae9077f98bad47a37c9d41e6d73"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "14b98f177eb053b7ae49c374a9fa970d"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "7ed5c267e3ead523ddb5ae9aff097a04"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "4e95f057e5eb72415c80981a296beae8"
  },
  {
    "url": "categories/index.html",
    "revision": "fb39e80560bbec6a9c6f2809a9726751"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "f95208ed6f5e9a54d5504f8b76cac1a9"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "6e782ac219ff9ebcf3be3fe204155eee"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "1c9ef5d762ea955954e61ff8fcea49ef"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "86a5bec8a2c144c36553157ab0296ff3"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "d79bbbdfd39cc9b602f10bcb1c9fc9bb"
  },
  {
    "url": "categories/other/index.html",
    "revision": "c2ff9fda275c43dad4f1081b0a1c943e"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "a9f54e1adeab59ded171057ccc0e698b"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "f726557ec118d9a88bf60e9a46883799"
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
    "revision": "4a7e6b800fb96fffe21a49689cff1844"
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
    "revision": "0f4a95798c634eb7e58baf22adcc2272"
  },
  {
    "url": "tag/App/index.html",
    "revision": "aa14477743638d8ce1abc04cddb93c11"
  },
  {
    "url": "tag/array/index.html",
    "revision": "3235e4974e953127beb0e0507e6df4c0"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "6d7da066986debdc39d041aa47148bcc"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "7359a5017f45fccdaa6f7b22a5b56fa0"
  },
  {
    "url": "tag/css/index.html",
    "revision": "ce9812e2d8633d63a13f5adc3aa30f06"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "7a89bcf9ed032565b57ac2bb35a5f017"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "d4b24a5de0eae980f6c66e74d2a9ecb1"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "2f33ebf69e0f653024895d1237aadb22"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "f10cc0696b90a3917b282bfb3a785e9a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8e41078a2688d189c1df30b4fee49f93"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "2d223fdc57b58a0425e078520a2322a4"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "ca3c4d030d6411f1841c1e90051dfe8b"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "9fde8d59c55d2ad4a54c5fc70babf8c9"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "6a1004effd609e8aea4bf8ee9c7a5b95"
  },
  {
    "url": "tag/html/index.html",
    "revision": "051a2cd80d7b9fe9d4dad5a3a940c560"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "da43b10db0495f71a40e86acfe72b680"
  },
  {
    "url": "tag/index.html",
    "revision": "9dae487995d503066bf95fd03e16fece"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "d04e70b446011d9f03a7d79566d6be1c"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "d650a5692b78722469c98da42b7059a5"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "bd61095a1f1329f3fad4113845f4af00"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d291b4bed3715fcea54e2eaa4d1b5e94"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "6e42ebe583ef58d820b173bf2509161e"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "8bd99ee4224baf0765a3c174587c2eba"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "c4e3d745a36e75908638be1df472ab67"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "338d3429eecea8e1482a293be3b06759"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "b470a8df43524d18d7825075f8da953e"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "5db4083cd4f252d9041c9615ba932e06"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e191034053a8aede474891ffb40620e3"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "c5243e27bd3a7f159fe382d118f37f6c"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "863b9282e97db9b16d70eee40b12a1bf"
  },
  {
    "url": "tag/project/index.html",
    "revision": "54612b6d87b4a705c1eebd239627b779"
  },
  {
    "url": "tag/react/index.html",
    "revision": "dbd861bbfb39d9481aee70eb4ee00952"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ad111ffb071e82a2d6e35af7464f2d26"
  },
  {
    "url": "tag/router/index.html",
    "revision": "4b62d3e39d1b6520d35d1eb614ae8fc0"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "0b54835edf61a1bff97543f404f8fad2"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "b9b2ba1dd66edef5bdcc19138531b21a"
  },
  {
    "url": "tag/style/index.html",
    "revision": "3f0b84897507c2daefe3c316b7361198"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "8bc18aa23a57ee758cb300ffb2e79614"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "e6bafa80b027749f33570513f0ebcf54"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "9f64a4cd138ebab497960f5c905bfd78"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "a8b35b8ada0e264d7b231ee0191c89c5"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "a0103be4f96b84dc6980472038eddea2"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "3326075da1ded17d3a64034dbf91aa5a"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "6ab54a685fe496fbbe1e21ccc6b621c9"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "2931ce5ef1cbb4f153de8d4ca8674c73"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d023c18939230199fc4d11c9b9489003"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "47160660d899cbda4d7771139a80a38c"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "0fea56574c008ada39d0557868ce1f77"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "70222757c42474810e10bb309031eff9"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "d3fc55a05d4aaa93d16e7c5c6feb3ac5"
  },
  {
    "url": "timeline/index.html",
    "revision": "8f90caa1aa25a2d60978f1efe7cdaa48"
  },
  {
    "url": "views/about/index.html",
    "revision": "ba8774fd1a979fa5697bc3d981c57a2a"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "9ee2c7483dc7be3a49d0aa71d2a5dbf4"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "6efc689a6689de142050b34498110685"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "36dd05843a4f7b7a3e935db2dcc7a488"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "c54a3f76c0697fd7867feb4105b03af7"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "997660840678dcaa66fb89986c6b367c"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "709aa1443815c37a8d87401fe7ba176d"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "aff1b4df556e6a6a0ea66eeab4a0d15a"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "e571a4747138d9de7d5e9b4a5a381adb"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "212f785120b8d87d4ba6198614968ce7"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "d59941267dd1b6a72923e2b7b54327c4"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "616a803489ed51ee783b5403e940118b"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "2cfc2c730d7f2350d5af39e8256941cd"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "dce01dc65fa577b6e5202d93b15a9b36"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "4bb6512f6b0ed122fd726edfd88ef1fe"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "5cf4658533250938887cb0ddb7b92092"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "f9c87dbfc0049b3cc0ebd13c3ca85b5a"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "a9d7ae4d31aa551c10026b5d2122c42d"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "d22c89098d9c36d00c9819b1ea6746a2"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "0c3c13bd0d51be7497187e7dcce92fd9"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "1d4dd563af9d340a25146e3771b0ec70"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "1db58ec05a3bf0afef885f2348720e62"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "ad870719af3cfbd27a4818e40b33df71"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "2bcf27c21bc1f88769debb5809b44e71"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "30a1d9d9d783d30ec1c8cb0a34c7b29e"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "22dd522a782c97984f7ba16e2b292f44"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "34a99d5bcbaffafe1685052bc14004de"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "6b4b55abdd23e96903f6df787c26354d"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "e23e78c47ed5eef4ce7f634835b00cf2"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "ff930fbfb21c43545f42902ca239fd80"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "de7602547279efa130fcde5618659d26"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "2c8e41f469c7f6799958dba7901ea38e"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "a19244b8ccbb67d504f4912cd4794722"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "9ad274f6a71fbc0c425e56f0b480f29c"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "4fb04a996b1679714cd737b882bb2389"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "e18f2f23a0bc3593795f05fa6a9af40e"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "2744bc93068ee36998a96a76965fd2ed"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "4528e0b2028b909276df6f924857be14"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "196ed773beaea04176c270a3ca9a0600"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "5136ec95b5f8164d52f22cea5821683d"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "d02f5ef928d1c10adacc336a940e3973"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "07d1d3efcb6c69d8c7315561773774f6"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "44f44f36575a5ad62ce45a305ba683c2"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "057dfa9b1866af207fa2e673d9c2d61e"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "db5d4451b35276e03e5af458acca4f69"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "c503c4b4ed5f6dcc4a89793df506f6f6"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "6891ffc771830094e8e44df17bed7f9a"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "e0d8276142cf9185f812325ae9ea596a"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "847a64d2c10f19c69655e3b60573014c"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "116efbafcee69bf74ed78071e4a9e73c"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "2e52571be1ad84e0b7bec7cd23d096fa"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "db9a6faf672f418c2977c6df74ab4f62"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "3afcc0b3fec5cffa587bad09003eb35d"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "d2787d62c1ee4ed8143a25c18d9df1f6"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "ba8590bce0ffb45f0703d7f53b26781c"
  },
  {
    "url": "views/project/index.html",
    "revision": "9fca29871e0839bc83d89280bc5f3a6b"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "493486211b21e1a94cce082991c5f85f"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "c3fc01ab17985e0a82ff2b701d667f27"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "88897a7a4f6084e41d528c90222090e4"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "e1133e5cd70436fa0d540d584a659ffc"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "6492f30758aa8f607a49b4e7b90fc0ab"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "b3937d7f8a10f20bfea40f4f9763d4cb"
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
