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
    "revision": "8a729fbdcfd1ddcb8225d254565d1aca"
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
    "url": "assets/js/19.f25c7750.js",
    "revision": "7e43ae81135d8dfc18e1b3f6c3c729bd"
  },
  {
    "url": "assets/js/2.8da2a3cf.js",
    "revision": "6cc7ef250e62d4461602fc96fe9de15b"
  },
  {
    "url": "assets/js/20.cd977254.js",
    "revision": "c74ee90c130c8d957e1a9472d33676e1"
  },
  {
    "url": "assets/js/21.4772d9d8.js",
    "revision": "539da71b7c12c73ee89a3f838ccb0d12"
  },
  {
    "url": "assets/js/22.4edcb086.js",
    "revision": "7fb20b78323181a0c8b03b4e04cc14c4"
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
    "url": "assets/js/25.6da98a6e.js",
    "revision": "cc13b5c5e5223359f51a146d501112ff"
  },
  {
    "url": "assets/js/26.fb19eae8.js",
    "revision": "c2885507c8c851f9f7a025a9c0368330"
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
    "url": "assets/js/29.68562a65.js",
    "revision": "0c09f9664243d9524801724c94177794"
  },
  {
    "url": "assets/js/30.2b8a6c13.js",
    "revision": "ce33681241375eff1bc80014ca6c2874"
  },
  {
    "url": "assets/js/31.949777df.js",
    "revision": "c33d0da273da6ca55b02e917242942e9"
  },
  {
    "url": "assets/js/32.0f126e9d.js",
    "revision": "41b98b85ddc9bc6f38593f8d8c56bc81"
  },
  {
    "url": "assets/js/33.0e45f08e.js",
    "revision": "62629871ccab77f26d6d1090dc1f8bd7"
  },
  {
    "url": "assets/js/34.c46d588d.js",
    "revision": "c990abf1198e60103b8ac7f8d7f13dd8"
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
    "url": "assets/js/45.507c1e95.js",
    "revision": "67bb090808f79a9398114b605cb4c974"
  },
  {
    "url": "assets/js/46.f30099f7.js",
    "revision": "2a001878b29578e0de6fbbf3ae41fa56"
  },
  {
    "url": "assets/js/47.0cdf80f8.js",
    "revision": "d6df74fe8fa97f35ade54a39410af2c2"
  },
  {
    "url": "assets/js/48.f580bfe8.js",
    "revision": "2fcb25454de0e190a9d5e60291fbf7f0"
  },
  {
    "url": "assets/js/49.ab3ee0aa.js",
    "revision": "33d0ded925c0232b6b000bac622da3b5"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.4d890d4c.js",
    "revision": "88b75ccb52161374f00f4a8ec26ff546"
  },
  {
    "url": "assets/js/51.990d4ee0.js",
    "revision": "1e50eafde6083f95c4774b12c4ee2848"
  },
  {
    "url": "assets/js/52.16565cae.js",
    "revision": "3dee94142e170266ca39b30dac8bfb15"
  },
  {
    "url": "assets/js/53.16099cf6.js",
    "revision": "b68c575534840d2416941b281f72f748"
  },
  {
    "url": "assets/js/54.988a45ad.js",
    "revision": "811b2f4bc72d1d664ffe7a7df204f6fd"
  },
  {
    "url": "assets/js/55.eb8563ff.js",
    "revision": "44931a90a962930ea36a5d3eb807f656"
  },
  {
    "url": "assets/js/56.6eefd621.js",
    "revision": "88e426c24aad81b67f9b167e52ec5b68"
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
    "url": "assets/js/8.038fcf22.js",
    "revision": "d28e56fed8b8740f26c240b353648782"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.5cf2af76.js",
    "revision": "3d65d897249d3ef2473c27e2dae44940"
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
    "revision": "7f817bb1a96dbba7732527b3e773e49e"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "9cfe08650758eb19036f15d2c5007970"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "e4f44478db18c6ee64892c8c4cc178c3"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "5a787e6e157c7407817d4c4549d03103"
  },
  {
    "url": "categories/index.html",
    "revision": "1fb14a680796fc4b32a65ca95d88c65a"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "0e90179e01ccaa9ee6b0616198d2a144"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "e837c98adff23b919f2698ce6388a0ce"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "a38864506609a606bef71efd2f0d9fe5"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "660771ad764c3d9e704da678004f4a0c"
  },
  {
    "url": "categories/other/index.html",
    "revision": "4a85f5132074cf687b3c23fd30d886db"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "004d8526dfef0114bfa0ef613ffe4005"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "c2fab1a1dbef76d3f47ec91444934c51"
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
    "revision": "114c7bc5b18253075fc80a1efd3a3f98"
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
    "revision": "83aff0cf884c183a2e052c669b642dcb"
  },
  {
    "url": "tag/App/index.html",
    "revision": "907ca37935e0c33ea9e8f7e199b47729"
  },
  {
    "url": "tag/array/index.html",
    "revision": "f5c0ec77a032f84813b85059c857f532"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "b51972920e0fd0046c5f65ba30455f3b"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "c9eb4d1d2180b46df645a920720290d8"
  },
  {
    "url": "tag/css/index.html",
    "revision": "4564e41ae19c484152f794c686a8132d"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "e6bf9e1a64392e7f37f340a07dd867b6"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "c4d5461d0e0887892ef75d85bebfe72a"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "74563d44989fe25aa24309d2b99321a1"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "8ce3f3f357f17c7c630ee12026f4bbdf"
  },
  {
    "url": "tag/git/index.html",
    "revision": "46c5aeba54e47d9ea68b12f201c5237a"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "f082c3de59d083a204c81bf6b7ba5d8f"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "f6c63683aeacff347f1e95f232193033"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "c5db5450ac68924f8406c0930143f0f2"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "912d37f9870c2a16f398596a77e2ab65"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1fdcf5b8bb3bfb52cf1cedee1df23687"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "f8eaf7915e67f6c8eca40abd3bccd775"
  },
  {
    "url": "tag/index.html",
    "revision": "726954d959811bbe207eae7813396b0e"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "c43ccc9a830e00c81c4040db71e0665e"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "b378731349582ff41b839225289b2458"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "97f69a0b9a8f9baf9c1cc087340dae7b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ee1f8b76f16030629e15f82fbe5b9585"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "170dc2f6cfe8657dbc2acd49325e86eb"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "9d4c0628379ad3b447bc44313314940d"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "d8ff342f7b58abe1615dfbc3a148f4ad"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "20fb32ccab939a86d90c3747ad854ba2"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "004c7c79c538b6676b7f7cb349bc01e9"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "8435dea147b1db78dfcdc108fe759dbb"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "4947bd013caba1eb786a9803bc9695ac"
  },
  {
    "url": "tag/project/index.html",
    "revision": "2404aed2b5213f3e28611aaa7bd1317e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "ec24fbcb9a5c1b8b49678bd5832dff95"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ab97a5cbccdeacfb533418118390a8f7"
  },
  {
    "url": "tag/router/index.html",
    "revision": "16056400aebe78c874927ac87caca0f2"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "c1a68c64dab9cfeacd167f6bd9f54b96"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "85b220eba80e6ccf08346104186f300d"
  },
  {
    "url": "tag/style/index.html",
    "revision": "921b639966eb15c5a305ae423a7fc26c"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "95420a2af0ba4c089a8105275b185153"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "c71f816a7846bc3b15d2bc3b318d384b"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "d7bb911aeedd4fd04946aaf5c85700a2"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "bd1990aeee44277afabef79d1bc7259c"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "3acf0372899b1c4b03f1b954fc4ebc0f"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "4bb96a918fcb52dadafab7bd1b83c509"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "35ed79bc521db5dfdbe7cba9e091dd99"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "aaec06fdfe9219792ffa876a8bd1fd53"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "a4d737803a5a808ffc8b5cda96d7a1f2"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "666c6d0875d1f68e4257561d48af75f3"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "cb6ce03eb653cb9bc8845e806cbfe6e1"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "fb7c2da6ce38f31dac8a90c8850ad3a2"
  },
  {
    "url": "timeline/index.html",
    "revision": "b5ac043b2c3546c70c7e8f75887029d0"
  },
  {
    "url": "views/about/index.html",
    "revision": "0b03ff4b02fcd1a732b81f173081f40a"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "04ac31f5842110ad00fc4b018070e0f1"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "46d1e48394c765888bd7c9592d2f75ff"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "0dc1cda67bd4c1888ddfbb4bca2479c2"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "eaba0924f5e6c59d9bfd431e61d4b65b"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "9c475dd7e0d457783a67cd2a6e16d792"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "fb5ae94a26563fd8485536ca60d520a6"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "27d210d70b474f9208898de514b32eaf"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "5b08ffca9198149125b1886e4bbaaa08"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "70447658b8daec9e13fe72ba844c09e9"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "30bd689775fd2908b455389cad10d8d1"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "998d856ad2a3ee36fe31c64e302c87ce"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "e683c91bf78e0de680894ecfe6c02b79"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "0fda5d2ddd3a1d5a95955361c3b5053e"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "6b8dc5e8bba07471c426d242709541b6"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "1e32a339cf610b3a8373934e01776e3a"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "b2044d4eec59270cb9a75a090a370377"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "64144adcbde91f20d249d05cab766904"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "92d8ec84a079cab97985f9c880eec254"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "0b2be5e935e4033e15f06c76b257acfb"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "0b3da1f04dc0c3a6596748ae8db3d69b"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "360f29070a60bb88d9c3f73cf24d0828"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "1de9ff7bcf3d08157b66c4fa3c2d4330"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "6f3e2ec4bc272f35fd87316f488a1f08"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "f73d444f4c44fe3f7dfbd6d9d8166da0"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "018a0cb4fe85890a4e80ac484267a9ca"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "99b1307cba6df8bf7342b461ea0273fa"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "0b7fb830665b8e7dccc72640276e76ae"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "370b8a4211e1c00aba5e736d787b7021"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "fda3e50036ba665f66819844cd7aaa9c"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "4306a7ca6d846ecd943764f98deeed8d"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "03e1b4128eb7ec25f54e105ff22d8ad6"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "0203655daf51c3ef33bcee50fa57cbd3"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "ceefcf6a658403fa20e449c4c995ae53"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "96c58cc8af53c21fe15a8541df1f3286"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "50217d43eb7722e8593d79979f83fb33"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "f54ad8daf0e9b684023f22eac4049d85"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "ad280c05b5831313aab2ad272d84c763"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "3c63f2429cc80ef1a64ae6eb5c5ebfb1"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "4b82aef408385210ec7012c7edf26769"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "f91971e2649fcb314b31c1e3fc6c1e3a"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "8b90a67f606c5d4cf50acfe936a92697"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "14461929de57b40be0b272a3dc9dab92"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "e180ee43b008daa821f9c90d2892b48f"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "109574bca0dedb1fac23875a842c3fb2"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "1b083cc68902e3a7bf51212591308e19"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "db1e41f6f0dc315d7856b62b604dfe4e"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "bf30a99a77be8603263a0bef3addbaa2"
  },
  {
    "url": "views/project/index.html",
    "revision": "53e6931a2538a59574fd2086ad6e5312"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "d9118de350e4d0042c4b301a654ef84d"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "2a04d4f8f57ae5d48595af3a368179ef"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "014c1b4dd0e211accd74da092e56c85d"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "25ac73f4a109410aee145da77209f0b6"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "e1fcab4083484c9f9f9f51f5cc9dbb16"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "9e41217b4128babcd6e9faeaa42868a2"
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
