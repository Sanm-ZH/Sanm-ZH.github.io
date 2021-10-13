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
    "revision": "a774c74b1f3fa09a53efda38da78110e"
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
    "url": "assets/js/17.684fa1a6.js",
    "revision": "2e45836f3abcdd574769397fb99acdec"
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
    "url": "assets/js/20.565a06ae.js",
    "revision": "d9f195009e7c23d1147d6a0752adcb10"
  },
  {
    "url": "assets/js/21.bec4ab4d.js",
    "revision": "747b620c6ecebb02aafdcc671ddaaf3f"
  },
  {
    "url": "assets/js/22.b51aa478.js",
    "revision": "614345b001892e7f55ab2ad79485c729"
  },
  {
    "url": "assets/js/23.95fcb48e.js",
    "revision": "362b754546c880f70e4d8087ccf5cb95"
  },
  {
    "url": "assets/js/24.79dc48d7.js",
    "revision": "61ecc6c0e3a0a8f3c1060c10ea0a823a"
  },
  {
    "url": "assets/js/25.c879fe6b.js",
    "revision": "d6d66100b2e50a16ac3c47c6e02e01a5"
  },
  {
    "url": "assets/js/26.5e450aac.js",
    "revision": "fca37c55f41abe9e1a4327bc43959439"
  },
  {
    "url": "assets/js/27.0630a6c2.js",
    "revision": "256e7ec909d4b6c71d9ddd3b190f95b5"
  },
  {
    "url": "assets/js/28.4568842b.js",
    "revision": "b37470166ad27e0338435f167ab7ccc7"
  },
  {
    "url": "assets/js/29.66789689.js",
    "revision": "74a25b0e328e0fba9bcf04c96b6c2e7f"
  },
  {
    "url": "assets/js/30.e55098cb.js",
    "revision": "6fcc2387b5c65efb7302e5c385b2b92b"
  },
  {
    "url": "assets/js/31.b060b3b5.js",
    "revision": "7a24cf33744d9f42951c31186adb72a4"
  },
  {
    "url": "assets/js/32.839d343c.js",
    "revision": "2e993dd94aa2e6e5465718dda3a04c9a"
  },
  {
    "url": "assets/js/33.e1ae5a98.js",
    "revision": "3c8182a7c2157e8345c5d4597b643415"
  },
  {
    "url": "assets/js/34.dab88a4f.js",
    "revision": "000f3dbdc4c3a144889480da583bc34f"
  },
  {
    "url": "assets/js/35.478c3e76.js",
    "revision": "0490bcfe3d0a4926c0c53f0aa4ea7185"
  },
  {
    "url": "assets/js/36.eba2ece4.js",
    "revision": "79c6ec7ba0303e891572043b76cad05d"
  },
  {
    "url": "assets/js/37.e891cef5.js",
    "revision": "56145d1b52ee58e3c2575065ba99c2ac"
  },
  {
    "url": "assets/js/38.1f4ad739.js",
    "revision": "b90d7a581f57624f1f5dadc4e1338295"
  },
  {
    "url": "assets/js/39.3dd33c5b.js",
    "revision": "306d49347b503e0169f6031534d014b4"
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
    "url": "assets/js/41.8722abf0.js",
    "revision": "faa2f06ed2c614d876d11776300ad7d3"
  },
  {
    "url": "assets/js/42.81d6cc48.js",
    "revision": "b2fafe61200abd1449d908e993a44eed"
  },
  {
    "url": "assets/js/43.6f5704a8.js",
    "revision": "80dbc8e74371f8d42991fe69506e340e"
  },
  {
    "url": "assets/js/44.d5595253.js",
    "revision": "af325a0029ab8ae76eea1882985ba341"
  },
  {
    "url": "assets/js/45.64cee618.js",
    "revision": "446682ad40b67f0e9eefe4a8bd8b55e2"
  },
  {
    "url": "assets/js/46.dde855e0.js",
    "revision": "be406d286838f84dda43caeac471e1b6"
  },
  {
    "url": "assets/js/47.00deae3d.js",
    "revision": "f894bdbe99a7fe7e0db96c39d7059648"
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
    "url": "assets/js/56.2c66d949.js",
    "revision": "515d93488dc346dc84365d2395a8395d"
  },
  {
    "url": "assets/js/57.84c62e53.js",
    "revision": "d26b06ef6f87c28993aebf1868151fda"
  },
  {
    "url": "assets/js/58.e851d146.js",
    "revision": "7a46d6e41c801f608cb82002cab6f9a8"
  },
  {
    "url": "assets/js/59.25a3d7fc.js",
    "revision": "d7fd76dd04ccbe551c423ba3af7cbed4"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.cb6fc849.js",
    "revision": "3d5ae48fd0f18499172c842bfb14cd26"
  },
  {
    "url": "assets/js/61.51377d4d.js",
    "revision": "441f6f57ac2c6d932cc970300d559344"
  },
  {
    "url": "assets/js/62.0bedccf2.js",
    "revision": "4f50dcf2cd3017bd1c968d34d7aa3465"
  },
  {
    "url": "assets/js/63.f7a2254d.js",
    "revision": "86a5f7b80e1b2d1e511deee0be13f5dc"
  },
  {
    "url": "assets/js/64.974d3797.js",
    "revision": "1c68062eb8f291a40b08487dd2012680"
  },
  {
    "url": "assets/js/65.402a73a9.js",
    "revision": "e1715fadd83388882092641fb0c41138"
  },
  {
    "url": "assets/js/66.771e2c12.js",
    "revision": "96bb7fef99c17facc7281637cb9b081b"
  },
  {
    "url": "assets/js/67.9651eb69.js",
    "revision": "9ef7628dea8b978fbac075f2c5d89fb8"
  },
  {
    "url": "assets/js/68.932ea438.js",
    "revision": "c52a677b4ec66acb995cbb9cb0deb1a8"
  },
  {
    "url": "assets/js/69.477436c2.js",
    "revision": "2fcdffe003251a08eb9779a02a4219b6"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.3f89ba71.js",
    "revision": "62fd7ac2a8b8263ff40ddd5261938d1d"
  },
  {
    "url": "assets/js/71.7bad7b4a.js",
    "revision": "9967d8babb7e22017658889825a5dd69"
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
    "url": "assets/js/8.2768ec37.js",
    "revision": "1582749e28268a55fd7dcf00b87f3cb0"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.4313f599.js",
    "revision": "e29d91a84d5c8563ba4fd3c499c8759f"
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
    "revision": "b0f607674d58fb6de5842d6d033586c5"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "1b51aa1e76cc517b5521dacf4eb1246a"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "12d30c9757e9d940fc4590618fe74ae5"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "a93fd4d431e386d3f6295140467c01ed"
  },
  {
    "url": "categories/index.html",
    "revision": "867337e8302bff62896da1ff244a196f"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "cce5a44bcf1a1951a092d336130e7617"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "ac6bef5f3107584e5f31704bed7b6433"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "8b58cea0ec7158f31e1abed2f21adc4d"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "0047972a8e8b166226b36c1b47d0b6dc"
  },
  {
    "url": "categories/other/index.html",
    "revision": "73d31c37cc7b2fafb31ae36e660740fe"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "79d9529aa1a7ca7c02b372b8d4258a76"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "dd515300b6f6e31b897f0f41102e2a5b"
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
    "revision": "dfbd1d36a2f2dafbc2c33f1bc772d039"
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
    "revision": "ae8effc6f4354956dd895e0a6e872762"
  },
  {
    "url": "tag/App/index.html",
    "revision": "5f439048b785237c3cc2330a378df55c"
  },
  {
    "url": "tag/array/index.html",
    "revision": "4a8afc48def883b1d131173360883600"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "1acaa3e9454c607e1cfa57e836e86552"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "e269149d8e71c59869554057d0f8aa6f"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0d677652ad65a33c3307c09cdffa4160"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "7598df11c71def8a5e734cea67282ee8"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "a5aeb7be21c5215a12498cfb1da52704"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "8ca256cdb4093a62e859807a21023883"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "df4dbf89cfa5321733bd78b3d82d96c1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5d3b46d51b5504d0d96246cea3ed2f9a"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "68c98e9de363a131b455937de88ab2cc"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "3dfd3a317e8db12f81d5fa416f412659"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "f5c7d1816d6cdd90c8aeb83290c445b7"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "5cb07505293d91eceb9d3f7b8d91d5f7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "37da7f4a88300d09af65c1f53143102b"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "6ebd51a83e178255902b196648bbbc4b"
  },
  {
    "url": "tag/index.html",
    "revision": "e86b7d0ae1ed5c17dec66a137e72b0e7"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "c126e7b0d046ccd228ccd7ca59f313de"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "ad95a769690b8546efe2bd92c2f67ab6"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "da9f0fe0c46a292ac840cd25f3394fb6"
  },
  {
    "url": "tag/js/index.html",
    "revision": "fe3f3bd60644d0e18ef217395a392946"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "391b6859718633db9160ca1bf90ec4d3"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "5af37f84527935f4bd681eb4433ca19d"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "d1f40c560d1015f20c2388e04b0c0d58"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "a235118ffdf0f138038d663128852f18"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "2bc48e0aef179c82ed1139511007c4e3"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "39d739e35e55dd36996104490ea300d7"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "8918a04b270886a1be3f339ce9da86b7"
  },
  {
    "url": "tag/project/index.html",
    "revision": "c2d93a20fb7a3f97b683e2e1cd9c5e74"
  },
  {
    "url": "tag/react/index.html",
    "revision": "3f6967ce40fedb9fcc1560ee70d64b0e"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "8bdf380c10158afa3cbeceb7e2cd247b"
  },
  {
    "url": "tag/router/index.html",
    "revision": "925802ff68a89ce2189a3aeb6c8e2145"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "1a34d863cda0ef93428f5736460229a5"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "f8dfd74fd7432acb898acb92d2038a90"
  },
  {
    "url": "tag/style/index.html",
    "revision": "6faa62aa3bf7f51652b4d11ee518361d"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "28f6feafdbd0a5093d26775e33615062"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "dee7bc6ff2cf38cf08fbbc06ca9ff0b2"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "b7a87cf489fd9739ad44714382b268b2"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "a38e8c13ac2cabdf8b865e7f3609e283"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "678732fc07bbc984f899b3eb1ee63217"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "6cc54d7319d7fd8b26ef79b4e708a901"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "4d83940710715807ee585f67b6fdca90"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "01da9c88b54fe978040d5c96a6873c28"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "20e111ec6370621cbbe4736c9d29e8bb"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "c7c40e6836545f35c211514a7f24fb2b"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "a840e36671d7c843462381c4c9afec43"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "cbfdd8909675b41cbd2c45ea0113c4e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "eeebcc3c91cb8ca87a07480f4ab46c4e"
  },
  {
    "url": "views/about/index.html",
    "revision": "52ad297988cfa03be095855204c88ad6"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "014f51bd3b235191e04d60da789e419d"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "7d140b7e8f9d6e076cbfb6548c1002b5"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "68f372ddde8b7250a94277103b8ddb5d"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "bfd8e6f87f143b04f2e62e549624d3ad"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "6c5a166be8a1ab9dd8ed5adae03042f7"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "38e3f93700fb390e6f0cd9b00ce09fef"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "b235fc8e647b699c31d2938d79bf730b"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "55741e5898e7ca6e52d4f4a997f6874d"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "dce9be37e6d3c9b11ddf4c7b11161b7c"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "d3f0f5ea8c29b2a26c08df179d3b3e71"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "3e2f32bd5205931e92a3ff95e6b1ce27"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "54842770c848827e81d3445c6a1464f6"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "c2fbdc15d433b5ab4985d2f8e84b8adc"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "43bba4de830124f911fd2d13edfe4416"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "36d8c99b53556ac517b922b2ed376fe4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "e720d93d002535298a9a3978bfce9382"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "f63fef911f60bd76b8002f9332244026"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "17bebfce511be862f15fab85fbf00652"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "52cf50b85fcd1727c69855c2455fd83d"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "c9dea375a9dd3291a8381708d7ba9f1c"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "2d19eb656a77b6aedec5df1fb2affc8c"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "695c3d274226ce45e46767dad716a9fb"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "2b0a21adc61e5b51fdc9a92e054bcaa9"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "8b5e91f0b87942ce0442becd75f51968"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "f6d05861230b2311ba1cb452c43e9a1c"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "1b8d60509153dd41d7e91c7afd2d1678"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "5a3961e16d69d2ad1c59a62ab1db4148"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "e586cc63856230bc9cbd1efe77fb32c4"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "e60edf52e0d9856d96f26ce06170b4e2"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "a02c50a4476fb111c17bfa0260da7783"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "ae872188c09a896c4fee95dfc437b203"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "796ad804b98b6a097b0b548cef6e26a3"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "8200af8748e08122848912df597ed84f"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "75f267ce180441ea9525df2b0a5a6e9d"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "d0ad3df5d49ed702ece2409aaded9948"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "0065a1db89afb686fe3104d9e7fc4588"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "cfc1a92b5b86446fa3bd49a9c36476bf"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "b01cee4d2868cac1ed45fde684b3da28"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "b7434fab12033f69ab167267c1f699c4"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "90c2b21ac91ec7d82ca5f98ddd55c045"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "2c92c0acc232e6e27cb280022a851d06"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "a1b342d439ca1b27df0448966df4c683"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "e5a8421f74724cb3d47732099908ca1b"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "2334d8dbfc159c116c1e2010562b2328"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "49b9482e18302355795a36a34de49ebe"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "ca1026d72296179cf53fb39d5e2e4d64"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "8bf292c9246c979548246fc317c64fc9"
  },
  {
    "url": "views/project/index.html",
    "revision": "2161f7f6149aae1157a98dd519a13e20"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "ffd305e225284560e574a8407f433979"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "ecab7ef754cb6ba40b09990dafcce737"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "bffae01b0b65311f826395c9f2393bb0"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "3de8d43cdc6e9c7e3866348ccb7a32b6"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "8e40842ef1705cf199a6ee4d0ae23188"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "c4e3a2d48af8d3a2b81495a261f2409e"
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
