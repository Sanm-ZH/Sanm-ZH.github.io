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
    "revision": "3525dce47c2e3a0e823e5c80153b1377"
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
    "url": "assets/js/12.0501ff08.js",
    "revision": "79b1df9ee4f7fb3ee25b40c367bcfe75"
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
    "url": "assets/js/16.91028841.js",
    "revision": "6d4b4caa6a096f87851038343f01cc60"
  },
  {
    "url": "assets/js/17.5842b2d7.js",
    "revision": "3821b731da105b1596b94fb0babdb8bd"
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
    "url": "assets/js/21.8e0e791c.js",
    "revision": "2d5e83b052331fc8e7963ccebbf11768"
  },
  {
    "url": "assets/js/22.903d5858.js",
    "revision": "959df4a0ccb51884f9d5d0c591327459"
  },
  {
    "url": "assets/js/23.a81d5355.js",
    "revision": "1704a2b7f369cffb1a4255f45ed5275d"
  },
  {
    "url": "assets/js/24.5860e35b.js",
    "revision": "36b9c0aa43ae4ac6f5ebabfaf4ce9095"
  },
  {
    "url": "assets/js/25.1fcf0b2b.js",
    "revision": "ad4d3ffb397c2c028409c851231d5218"
  },
  {
    "url": "assets/js/26.91ae4a5c.js",
    "revision": "24adfd7cb49e13c33dd0e4b16932ccfe"
  },
  {
    "url": "assets/js/27.7ff51fa2.js",
    "revision": "8c2995ba76cb6f93384dcb1bd581a040"
  },
  {
    "url": "assets/js/28.09c0c60d.js",
    "revision": "b0b446819b26063c91d5dcd6d60fbbff"
  },
  {
    "url": "assets/js/29.ccf5eeac.js",
    "revision": "9c9a69a713921fcbe5b725ab2cf55473"
  },
  {
    "url": "assets/js/30.500e62fa.js",
    "revision": "d1f8d10eeb7dcccfd37429bda6244dbc"
  },
  {
    "url": "assets/js/31.4ac128e8.js",
    "revision": "4bc141d8ca24c31d1980e0fdc05454a2"
  },
  {
    "url": "assets/js/32.ee466c55.js",
    "revision": "de577c164aff4d4c06ee10b8c55dd908"
  },
  {
    "url": "assets/js/33.87c269f1.js",
    "revision": "9b4729468bc08fc58e39991ae5af0958"
  },
  {
    "url": "assets/js/34.ee57b86b.js",
    "revision": "a7ce2010730044038560b3232475a107"
  },
  {
    "url": "assets/js/35.3fb0c473.js",
    "revision": "28c7aec4133f58e5f7561eba8a6724ab"
  },
  {
    "url": "assets/js/36.240ee366.js",
    "revision": "d08541da7b0afea73db3ede6bcaa61a0"
  },
  {
    "url": "assets/js/37.4a45cc6b.js",
    "revision": "e041e8f484e53fdbd86ca55944f143f9"
  },
  {
    "url": "assets/js/38.d2fc4c11.js",
    "revision": "ef2287edf33c83c384ad8fd8d43ec9ca"
  },
  {
    "url": "assets/js/39.39b35d71.js",
    "revision": "04c3e2201f9e719c7ebb4aec1ed88adf"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.c39c711d.js",
    "revision": "fb6df3c17170a1900147ce92f57b63a4"
  },
  {
    "url": "assets/js/41.a2c29184.js",
    "revision": "a2e9fefeb1a91f97bcaae72337b06530"
  },
  {
    "url": "assets/js/42.4a0ddc06.js",
    "revision": "f9e15bfd973a36269e3ca9710ea17584"
  },
  {
    "url": "assets/js/43.8c042bbc.js",
    "revision": "ad2f5f05afa8a7c397dec78f62e17a0d"
  },
  {
    "url": "assets/js/44.02fcf314.js",
    "revision": "e9a24ab7f6d8258b9e260dc110c6a350"
  },
  {
    "url": "assets/js/45.389ce9f5.js",
    "revision": "dbdf7efe4e6c4a8038d9d6c2b5cebcda"
  },
  {
    "url": "assets/js/46.9b49f8fa.js",
    "revision": "a310b5ee0c873f100238556a5e08eaf6"
  },
  {
    "url": "assets/js/47.d13cd1dd.js",
    "revision": "c36be56f6de2528a7802418e787961f0"
  },
  {
    "url": "assets/js/48.e6d71b9a.js",
    "revision": "1d9cb587200e98baf7fca12eabda2d3a"
  },
  {
    "url": "assets/js/49.f097a0b0.js",
    "revision": "627c0b001f94ef83e5d639a377db6b75"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.e3980f90.js",
    "revision": "be65f0aca31fd2d3be8d9ac1d8c54f4a"
  },
  {
    "url": "assets/js/51.642d1cec.js",
    "revision": "3581f73e7f4305c28661bbc92319f77c"
  },
  {
    "url": "assets/js/52.a18adf8a.js",
    "revision": "b312849040f1aee194a9da194511aa1f"
  },
  {
    "url": "assets/js/53.77aa7671.js",
    "revision": "417ddad99bb55deba021d5e5be7cc368"
  },
  {
    "url": "assets/js/54.49afeaf2.js",
    "revision": "259f6c70a65c64a80b62a5177555356f"
  },
  {
    "url": "assets/js/55.c6227e7d.js",
    "revision": "d2a98c27615f82b45f6e60743da3a796"
  },
  {
    "url": "assets/js/56.b69d390b.js",
    "revision": "e0a682919e8b725d765a695ad6ff997a"
  },
  {
    "url": "assets/js/57.df27d620.js",
    "revision": "cae2ebea0b67ab6bffc50a56386cf96f"
  },
  {
    "url": "assets/js/58.e25fa7c1.js",
    "revision": "5eea125f89cb3f7522253ff7613c5d0a"
  },
  {
    "url": "assets/js/59.f5817e36.js",
    "revision": "41a71f187db6212fb2b2bb958daae74d"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.7e5d0121.js",
    "revision": "3dbf9cac6ffdbbd9d3d76776ef5e9336"
  },
  {
    "url": "assets/js/61.e480ee77.js",
    "revision": "8584e8e2993a65172d116bbb1ffb7602"
  },
  {
    "url": "assets/js/62.151e6718.js",
    "revision": "7c2e59a658df55043b1568ae2ef5a1a9"
  },
  {
    "url": "assets/js/63.5b91743c.js",
    "revision": "fe55c91e33ed9b149f494416d0bca43a"
  },
  {
    "url": "assets/js/64.a3f4cb23.js",
    "revision": "40b09e8191acb1fcd0a4dc419341bd07"
  },
  {
    "url": "assets/js/65.d93a561e.js",
    "revision": "b8a7823ab6b0c9c8ff1c93d9ade6f4c7"
  },
  {
    "url": "assets/js/66.559eb6a7.js",
    "revision": "f1670f7efd6e11597c808d121d2c81a0"
  },
  {
    "url": "assets/js/67.5a5bfe81.js",
    "revision": "ee6d6fa7eca1321722a26baaac717ecc"
  },
  {
    "url": "assets/js/68.c371c690.js",
    "revision": "9b470b701513c3218194a2bc364562ba"
  },
  {
    "url": "assets/js/69.25c35fe8.js",
    "revision": "7b0d4305556ba0eb2a5f00fa167faa31"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.38f46ec8.js",
    "revision": "fbc0159caf45f79ad2a6837435cd0421"
  },
  {
    "url": "assets/js/71.7aef8797.js",
    "revision": "8292923126137e254ebd1b2fe143a400"
  },
  {
    "url": "assets/js/72.c098ab69.js",
    "revision": "aecd77a85e31c7ba25dae370bb4f9b3e"
  },
  {
    "url": "assets/js/73.a95be3be.js",
    "revision": "f5e26f0df55c37ab1267f18a797454da"
  },
  {
    "url": "assets/js/74.5566448f.js",
    "revision": "804e119ca24500f407e6fab95a2090e0"
  },
  {
    "url": "assets/js/75.50384b8d.js",
    "revision": "d285c9705fd794023908859ca37c0a7c"
  },
  {
    "url": "assets/js/76.e3aa27b8.js",
    "revision": "a84c7e913bd9f8dee07a36a1ca9f7155"
  },
  {
    "url": "assets/js/77.55a07c4c.js",
    "revision": "af6486ff033a9a559bc26b3ff56547a3"
  },
  {
    "url": "assets/js/78.6b2c1009.js",
    "revision": "271d1e80663b5cfb5612bdd842975d59"
  },
  {
    "url": "assets/js/79.87394c87.js",
    "revision": "2043914f2b51c528f71b7e14cc33186b"
  },
  {
    "url": "assets/js/8.bd50d723.js",
    "revision": "9f653970bc5b97fc7093283ea4650109"
  },
  {
    "url": "assets/js/80.ebdb4a91.js",
    "revision": "4d3a016dc4c82bbc252d4e426351a910"
  },
  {
    "url": "assets/js/81.1fa69f99.js",
    "revision": "7798400b3a93d7de71cc91c76366f2e1"
  },
  {
    "url": "assets/js/82.6692c291.js",
    "revision": "a6b6540c2ddd36577197eff154d560ef"
  },
  {
    "url": "assets/js/83.37bf74cc.js",
    "revision": "e2a6936c9eb75cf736c7c69567927097"
  },
  {
    "url": "assets/js/84.116b3d50.js",
    "revision": "e6c5562b314888f7195cb04820a67a17"
  },
  {
    "url": "assets/js/85.79bf7a7d.js",
    "revision": "7d2fda07ab042d13e000e5d212625e10"
  },
  {
    "url": "assets/js/86.0ac4a825.js",
    "revision": "6c5be4161fc1e08924fb7f7756161c5c"
  },
  {
    "url": "assets/js/87.9434b3ea.js",
    "revision": "39c8909cf389bcf6e6fc1cdb3a5faf9c"
  },
  {
    "url": "assets/js/88.82d2504d.js",
    "revision": "91261738823a15602e6414c4f5db0bfc"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.dc65ae6b.js",
    "revision": "b67012912464b04d8d8c07f21fcd31bb"
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
    "revision": "5374953cb42bf0b4f9cded1217c2426b"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "47aee38f2d0644879ccb03ce34f8fc4b"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "f4302d44c4c963ce13b3226284d1bf67"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "140889a2a9303c20dfb40e906b68309a"
  },
  {
    "url": "categories/index.html",
    "revision": "c224959a460955f04e78675d293b0ab4"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8920516db431588ddd70a54c024091a9"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "25011fe3b3f0277765546f4e7d768414"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "47b346514890d89973fb3be964f35f6e"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "3e727c0ebc2bd343b27fd9c875f158b4"
  },
  {
    "url": "categories/JavaScript/page/5/index.html",
    "revision": "696d1ae6d3749f9a44d6eefc483e93d3"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "78fe68f73d74b79163da8dadf13beb80"
  },
  {
    "url": "categories/other/index.html",
    "revision": "9566e91f6db59ee04240ca97f3128fee"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "564ac33568c47442f2d1b68678e08735"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "1b7ddd554ef9fd18a59762785fb03de5"
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
    "revision": "b4c392f45a511ad84a4c5c0be1a2d866"
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
    "revision": "c71804850eac36fd0c4baccaa353d760"
  },
  {
    "url": "tag/App/index.html",
    "revision": "32f3e7471e78a28172cb7a317e0d4345"
  },
  {
    "url": "tag/array/index.html",
    "revision": "003ec533e31350fc1cb1f190d8440c79"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "04017a5238051d8c54b9c0dcc5be07ab"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "a49006283afb158a05a26aaf984d2736"
  },
  {
    "url": "tag/css/index.html",
    "revision": "5e79f83c15fcf30a2c41dc5ef726d20d"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "28e5873cf419d1c8211e4fdca7fc7898"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "ba6b63572d7778340a2a3d0d9fd79d39"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "3f1ce5aea80d5d6472234dfb126ebbe7"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "cbab952b1d39ddd385e631daf2213c2c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d24263b84faf63e44bf5809279d3f40f"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "db573e8d87e1f33aaa0ba58c0c5d4844"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "b5b7daab052d1b3e0e24e762e95b732a"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "b17f35347798891144d53ec4f3d9b5e9"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "8bf1f2af72d137e57fa485f6103e0d60"
  },
  {
    "url": "tag/html/index.html",
    "revision": "cb9604860b2a5f416fe82314613d27a5"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "d7e2bb09353d21a096ac871429e30715"
  },
  {
    "url": "tag/index.html",
    "revision": "d43874f2f12ec2dcd53263f86d013b4c"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "1c8798841d9084c8fb433380c21cce8a"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "944b4b97404fde28bf00f3dbce72f209"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "c2a1c34e11b50e29d07c8fa99ea829d8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c1d35b6e79f96b756d3a9e96251eb54e"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "1c3d34647db58cf23c56950f0f57fa5d"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "00ce5018e077aeb4ff8bc548af69d5b5"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "019311bc555aed38e8f1058d752844fe"
  },
  {
    "url": "tag/js/page/5/index.html",
    "revision": "c865b1a1b983bdf741bd9cab648efcb5"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "5232f5cf8225a8a633d64558a24d99ca"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "11d3f65038ca6e7b68b1bd5280b70f3a"
  },
  {
    "url": "tag/module/index.html",
    "revision": "77a4f8f9734e48f9431bd2010e552dc2"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "74822383497225c0b1d0f5b8907982da"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e9984d3c15664a8d42f19ac58ccd0083"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "d2cd9ff8cbee69206c7abea4953b4ba9"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "0f50fb7c6c193a5d9f4f472befb6a6a2"
  },
  {
    "url": "tag/project/index.html",
    "revision": "30f5864aa9314327469472c8ef7ea7c3"
  },
  {
    "url": "tag/react/index.html",
    "revision": "f11d11d52d62e2063c33353b57325b94"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "cb7413984516bff2c45331e2a7e6db72"
  },
  {
    "url": "tag/router/index.html",
    "revision": "fe041bc884bd9d6449a54c8cc0445e9f"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "c5d5b1d090b510b3c8315572a7bd6337"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "2be8004dad39c36df1eeaea2f089f64c"
  },
  {
    "url": "tag/style/index.html",
    "revision": "b21315461076ad699772884673f1f5de"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "33dd1101b3e18f75b1f13de96fb461af"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "04f2cd74e0361ca3488b7986625acc02"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "0764599d31018ccce6069eff4b91f8db"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "11c74bb9b23ca2eafdddc139af4c696c"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "d9e38f10f4175a713145d0a231a10c69"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "0f5c405c0192c23d1d6b7049a91f6921"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "65482ea910e957447012da635d0d3a9c"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "2eacaa3d4e7afece5521974a027ecf92"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "68f4866602f82f4593d4f9abcd2f3965"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "52c2dee56df4c1ffb6c73b0d1035e4c3"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "793ac0ed66e443e05a973bf9b4179af3"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "ebda08c946c4c3f0779c508205694f7a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "c78a1492ea0b8a9407ea4571e406f3ad"
  },
  {
    "url": "timeline/index.html",
    "revision": "70d4125423973c115ee4b3bf32b34411"
  },
  {
    "url": "views/about/index.html",
    "revision": "1c78602eb97cb9a011a015b71346cf27"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "b1fac23c85c1a07bf6a62362609da5cf"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "808459ddbe6c729edf40f20bcb1c0e42"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "c0318718f3f4a3ef5a1b814191c288e1"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "fa4a4e1d5005997a9926aa2a3334d112"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "17e278eeae4b8024c4a4956276fbaaae"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "f9f8808f4736583f533abc812bb054d3"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "d61873522735971cc3d8b50fe503081d"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "7a98670ba6ef0f34664a4c50a2dfd714"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "b622ebe4cb5037577cd5a960cf80ed44"
  },
  {
    "url": "views/JavaScript/algorithm-10.html",
    "revision": "ccbace925e3a42d38fe83bb65e383978"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "a57fa33b53c206bc5c51fefcedd987be"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "c9202c7e8b980b669e1d5293c8b15995"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "091d5e5944b1949fe47edbe2a7a0042a"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "d66289199b6b04b4a60fd998d33c8aa6"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "e3c8f3116b3e0a4cfe2a99b8a6c7aa24"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "50c4cca367e9466f7cc68d3c48ccf431"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "3d07f2b1ab058d90218c454a811eea7d"
  },
  {
    "url": "views/JavaScript/commonjs-amd.html",
    "revision": "5d6f412dbf824d54e72280a2980ff2bd"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "14e9f506ab1ef6d4eb83934bdaeeebcc"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "48d757bf505956045d4cf3545d46a510"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "0f10dfbed5d5c709c4efb7b08c848758"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "be4f92f49642c4f857fc5c928efe05c8"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "4d7d976bb468df2bc7eb4d8f5bc8c7c8"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "28dbc12c63647968960367ba9d1a67ab"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "f5c0a838973c7000e1a1edcbc723b97c"
  },
  {
    "url": "views/JavaScript/fetch-synopsis.html",
    "revision": "0214dac41fc2f344e0f078b5db54fb75"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "f637a72f9f1f361e10f23741d937a7c8"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "4c8958756e8d5c9086dbfae523e364a9"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "5a123c8e3de4ce4d6f137d0370360f44"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "d7892c449d4db421950886b8a685ef39"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "ef91aedff8127fe29d0b209e7b4cb9b7"
  },
  {
    "url": "views/JavaScript/initerview-question-list.html",
    "revision": "c811b82b3bd6fe431bc12220b7afe9b3"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "48902aacec2b8a20e209c18583810d6c"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "5d522bbb3b9caae5f236e4ec96733d7e"
  },
  {
    "url": "views/JavaScript/javascript-topic-list.html",
    "revision": "609699757392a507968d4d88b1d25069"
  },
  {
    "url": "views/JavaScript/js-extends.html",
    "revision": "5b6a0228b5755aeb433a06524118ed6d"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "1a2e4093accb20f70c5a6c04273720e7"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "21d64ca9a0f00beed6f51b42d2867e1c"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "540161f7e05ae118d45802a332bc8090"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "aa9f10a13bd6e1b2649d601ab6fbbb10"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "fc3a58e25fd4cb79f124728d719b6034"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "ae5dd293c9f41a83841049bcc2a92933"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "2cd6e9a231d4f48a75736b62efebaac4"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "361fcc86de1cf96c9ee02629c5b3ab3f"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "9a3de07a26aeb2922f2aabcd13b97496"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "f28cb7d9361dafdae416471e9ab83e01"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "b2a9764858b9a60ba7795c290afb4877"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "32dd68271d853f9cb08a6536d2c75269"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "7c39e787e533da76f3ecfec92f977dff"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "dabe2e6ea6c81287394b21be3ca1db53"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "a31181c65a20a67686a8193ffec2e9c7"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "23f49a4d03cb05d4a5abe56057d7775b"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "d868d2d14c80986c059511c8366cab83"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "319cda25f62d319313903db0eab449b2"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "9858701a95d2fe74d34823df9f79bb52"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "813671e02f51c697e73a781c72814a96"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "317c42d272297038e9619852fd622246"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "2f9deddeb855d21f8a8939f3bb82aea1"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "9db68fa5b421c07505541f4bd02b01b7"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "50c72c03cebe25b93893372993bdd530"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "2fcab2b86a60854366375ec2cfe7fc78"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "92e0235210f6cf55cbfab480b36691f5"
  },
  {
    "url": "views/project/index.html",
    "revision": "5ab47c6591aa8add443fb719df214440"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "77172f8713089ea324bb2ac1809f67c9"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "86a2ecd023cf3fd33c6fd5648b5a3f9e"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "8248a5a62525d8602b337a5d5e16fbed"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "086e81cb44a38e947d37fb7c9a775dc7"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "f1dcb7a35022a92f719414b1ad721dfd"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "8b7bab5dcc4bfefb8d980444b62d7573"
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
