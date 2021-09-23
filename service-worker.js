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
    "revision": "6bc28061cc4eab2fa904b2d61a010a8b"
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
    "url": "assets/js/12.70df4ae2.js",
    "revision": "e3f5eccb5584d199bb528703d7b675ed"
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
    "url": "assets/js/16.72179cf0.js",
    "revision": "b2e6bdc57785bb759f9d4dd194a2d9cc"
  },
  {
    "url": "assets/js/17.ee1c8c98.js",
    "revision": "50c4cd3b4ddf8f23d4b699418a1592f9"
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
    "url": "assets/js/20.9fbf6fa9.js",
    "revision": "4d2ddc03ae51d4ce6d249d9452754692"
  },
  {
    "url": "assets/js/21.38ff7355.js",
    "revision": "ba227481f27a8ec7825ebd8caf4bb410"
  },
  {
    "url": "assets/js/22.8bdcd7d5.js",
    "revision": "d48b59789207476abcb4d1262d0d8a1c"
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
    "url": "assets/js/30.e6bc4c0c.js",
    "revision": "9cd67a591006ed3db122ec838ee73960"
  },
  {
    "url": "assets/js/31.66e52537.js",
    "revision": "e69880b99ca135b14a0f97545c29e359"
  },
  {
    "url": "assets/js/32.0b2fc614.js",
    "revision": "51f552c753c485495853d06ee59a132a"
  },
  {
    "url": "assets/js/33.911b5809.js",
    "revision": "27ab39a283527c714fb5bdf50cc6a7d3"
  },
  {
    "url": "assets/js/34.75defd43.js",
    "revision": "28db8161c067ed51c02c1c45c976ef4a"
  },
  {
    "url": "assets/js/35.dde1274c.js",
    "revision": "ea3500957abd74e78015e21561823830"
  },
  {
    "url": "assets/js/36.33cf97c3.js",
    "revision": "cfe4b6eac4e6d82ecc2b41c42ef01f06"
  },
  {
    "url": "assets/js/37.8e7865f2.js",
    "revision": "8e7fe2cff54fdf74a4872baec3ccd11c"
  },
  {
    "url": "assets/js/38.f78f2b24.js",
    "revision": "ce9ae0c671d74768f990719de15febcc"
  },
  {
    "url": "assets/js/39.ace96afb.js",
    "revision": "dbb5938344a3da2990956d39b4ac5a0a"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.c2f18f42.js",
    "revision": "8ae7dc53ae19952443100f1e96ec1d4b"
  },
  {
    "url": "assets/js/41.37f17c0c.js",
    "revision": "dd07d38a0b90055535ac5a93a03abd62"
  },
  {
    "url": "assets/js/42.5960da10.js",
    "revision": "310560284a07127ff941b1d63ea829e6"
  },
  {
    "url": "assets/js/43.2fe089fe.js",
    "revision": "e7a66d29ba32ddc2ed5986f77957a971"
  },
  {
    "url": "assets/js/44.f1748328.js",
    "revision": "2a811d1cca55b104d49bda0d5afb0169"
  },
  {
    "url": "assets/js/45.c6550bb1.js",
    "revision": "9affe1385c6a999c9ca0a008a3e7e4ac"
  },
  {
    "url": "assets/js/46.bfefe548.js",
    "revision": "9dc45ae6cd97e9a935d58e1fa7ddcfd2"
  },
  {
    "url": "assets/js/47.ebe76221.js",
    "revision": "00390cdb3bae1bc819bc3180ea06edeb"
  },
  {
    "url": "assets/js/48.a99f3289.js",
    "revision": "c5ea8818885ce3e193835292b4b807bc"
  },
  {
    "url": "assets/js/49.c3dbbd5e.js",
    "revision": "1c066aead406f7491362899a45dc9343"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.97eee6e7.js",
    "revision": "cd72e394d8bc9ae07821378ad63d834d"
  },
  {
    "url": "assets/js/51.9e9e7bca.js",
    "revision": "0313658af88f9ad20721815c751e65c9"
  },
  {
    "url": "assets/js/52.bd514700.js",
    "revision": "437b2a7c601ac4407f524500a35620b1"
  },
  {
    "url": "assets/js/53.b59b650f.js",
    "revision": "dff5306291d9fa632d56370fd66906a7"
  },
  {
    "url": "assets/js/54.213e110c.js",
    "revision": "7283d5e1083fecafb6d8bbdf6deec381"
  },
  {
    "url": "assets/js/55.f153b1e2.js",
    "revision": "9e39199d3bbe06fb9eb7bd7ce5874b22"
  },
  {
    "url": "assets/js/56.4b0a5884.js",
    "revision": "c140bd8d67d2306483307e8cdfb00489"
  },
  {
    "url": "assets/js/57.73a2efaf.js",
    "revision": "a9ce87dd6c963e86fce71ef1ea0968c6"
  },
  {
    "url": "assets/js/58.967c2396.js",
    "revision": "46118bfba335cae162abe9f400296e12"
  },
  {
    "url": "assets/js/59.3866edde.js",
    "revision": "c26de784f2b76b87441316efc25e30db"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.9e6c6e61.js",
    "revision": "f9a5b0b8df5f72dc19e5c8ac956bf728"
  },
  {
    "url": "assets/js/61.5fcca3f1.js",
    "revision": "c9f9301cab49cf38d890f9f487740dbb"
  },
  {
    "url": "assets/js/62.4eb5efb0.js",
    "revision": "70f358cf6e1f14b5113b15bb370a5207"
  },
  {
    "url": "assets/js/63.a641eadd.js",
    "revision": "9508bd8adf73c302e5eeb65c1e0b51ff"
  },
  {
    "url": "assets/js/64.65995c9e.js",
    "revision": "c4879daea0a4fac08b10688626f8554e"
  },
  {
    "url": "assets/js/65.e6de1ae6.js",
    "revision": "8ec288aca2bdbf196373bbbd9d695d88"
  },
  {
    "url": "assets/js/66.cb670e70.js",
    "revision": "4e32dc135c31b82599356b91868b0018"
  },
  {
    "url": "assets/js/67.2684a493.js",
    "revision": "f2edc820a5cb80085378bf4fb5a6fe7f"
  },
  {
    "url": "assets/js/68.d7dbed85.js",
    "revision": "10ad0e637b09ac082960c0721dc904f7"
  },
  {
    "url": "assets/js/69.7bd83e28.js",
    "revision": "86b35cd8496e37997e7c3485e1b1dc33"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.10d2c6ff.js",
    "revision": "df6cdaef20a1218f75a3e6efb5b4bf60"
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
    "url": "assets/js/app.8f6bab40.js",
    "revision": "0a6571bf6e503851a291d22b5c7b42ce"
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
    "revision": "e318dca245001352fa94304c8408a82a"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "0ebecb171ffc78c95a17ca3296f5bd56"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "8694173fb5b41fccc2bfde14d75dc6f8"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "d6ad09d6d39a0c3d065c1d7da4a2d932"
  },
  {
    "url": "categories/index.html",
    "revision": "e16b94fc7c349bb7d00666e553893130"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "97dd85970379998441193fe2b768cc18"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "45e02535f0615fe1dfa34667c17847ca"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "1017eecc434f71711fb3c8980bc1fde9"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "901eac30211c7406bec8b1b476c7a14b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "53c46c538f5be102066accf765439319"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "dad85d42aaffc659dcea7e469628b63d"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "9329bde16527280162c683628c8f4ef0"
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
    "revision": "0ee9ebb11b4dbed4b7380355ac3dae96"
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
    "revision": "177f10fce05fea21856518187ab2fabe"
  },
  {
    "url": "tag/App/index.html",
    "revision": "3f38fd7dbfaff0d87dec5401191cfc0a"
  },
  {
    "url": "tag/array/index.html",
    "revision": "fb3f6948a907fe4cfdaa36c1720dc21b"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "2692485115e912c903f64c7856776e36"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "9d427779a6c293c0f6bb5e7418f9bfbb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c42cbde0ba8f351863f7aa5a5a1670be"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "13d1a067e8da00d2fe8f380e8c905db0"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "0e647197caa9d0e24730e760ec607e8c"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "d1adaf6049657ac26bdb00dd5b5b32e6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "668c7ec3ad08a5d5a7c75d92a11778d9"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "1ed30be295a1df681c9e1a1b6bb1d88f"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "538fd76b2e29bdf6273409c74c0fb9e9"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "37411fe8d06723d4d62dc52bb9cded0b"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "623736f04f1f746fd8eda299122c07b7"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a0f444ec6b115501d775abda5e372485"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "99e13d18719a7f9126dc17a7714a2e9e"
  },
  {
    "url": "tag/index.html",
    "revision": "d9b0864a4eb3eb7154a439b802489f59"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "4471b5f44ef8cd18864467459c3a499f"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "e8a9e62f035f8e578153a6604782dbcc"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "4422ea3d237903e3857f808118a48bdb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c4f9de95e46e435bcfc660f0e5f2623e"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "7a15d57c674359256eb6a81a4f3be976"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "04e9cda5719c6502ab94820a1d640d76"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "167026323c8db8ac7d57f5afb80c67af"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "649afc5cb61041b82596d2fec3adcf00"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ea29b0097d1406463b2a6a5a7d651103"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "9e3881fd8e32d11b04744713833a9fdc"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "96a6248ab5e1749bd60733520c65ae09"
  },
  {
    "url": "tag/project/index.html",
    "revision": "19134d8fcc8dccb26d6de38fd62472e7"
  },
  {
    "url": "tag/react/index.html",
    "revision": "0c8866e37abe0831d7600db197e185f0"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "99fd9765d112cef6721d3a40d24d0e37"
  },
  {
    "url": "tag/router/index.html",
    "revision": "d4392a1f238e0b94baa292d3133971c2"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "a0e03c732dd88a89a6d8bd8cfa20d084"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "4f8aabb1cbe6fb1529752c1d8acfd154"
  },
  {
    "url": "tag/style/index.html",
    "revision": "5b57fcb62adb8a17edba288a14274281"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "b4ea9ae832a9bdec9dd57d78e0a3e1b7"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "88e5612c9ff4d625158a8ddf2d6851af"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "20d3130fd2eee1bf74821c014c92a109"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "7c75ac0558b62af49eba86822e9d5fcb"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "5219939b7a594bd4516369a39b638936"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "737cb88aef37997ebce758873c0ae4fb"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "ba115a5989ad4b822b67e5e579b00efe"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "fa97f261b778a6d52f7eafa5d617eda4"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "dbe8572b43433b1cf62e6ad33310e35e"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "3c98691a70bebd07b16397515bb9e6a1"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "25257f6779bf662f513d5d4d11b63af7"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "79da05b4c193585d926840e592ae7ce4"
  },
  {
    "url": "timeline/index.html",
    "revision": "89f137d6c1077b91cd6102a3ef2338ee"
  },
  {
    "url": "views/about/index.html",
    "revision": "b619c9638fe369eda9b39891c3bcf41d"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "792221cdff65c4a1e56cd800ac126669"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "d3cb5f48c24d0aa6ca710ab95709c70f"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "6638e2ad2f85767fbf33d368eb3b76fe"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "83144119b19946c9c3f9dbd6b4783883"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "26c3393bd35ea3c0f827bdbc9ab2bc38"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "fe52fd2208634c144ac0636981b4f0bb"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "0399357e6bf780da4cfbca9c295bcb2f"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "4083823358616bf6de8298e2bb6bae96"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "42dc01759ce361061d971eae452b562b"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "5af0ce9e451b0af195213e653a0cd572"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "cf14167f91c44df1e503102108a66a42"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "cf864a81ecf5530a9a9e00c535b551bc"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "ec4151991d93f86d76fa6c7816fc6364"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "7e20c2496faee2076550a1a4c02e3b15"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "881f5f440955146a62cd8faa2799b9b4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "ec64d6805eeb77a422f3640773a18dce"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "e8494d8a4db1ba4d69c925ec554f6ff6"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "b3d844ec19dcc60fdebb0c2f24e0fab3"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "7704a69a1875ca7b0ef07d761ff02b1c"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "3401c5831b8d79ba4d8745c1ce7a2005"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "9dc3141d06640a5997e99440cb0b85d4"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "de02ad4e4f89e1421ac0971ed71db059"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "df7fd68148243f6363c05ba6e8e7e161"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "b46c0a1483cb8ca2b7bc7c5ea323c4ee"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "59008347070c1a4c6808a7e9e7912a0b"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "93c4b44188c5190d39c6466f6fe8702d"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "7c905924535e9391bfc2075f090675d7"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "d0adb37125794bd1a04cfb5595b9b60d"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "f29c7b4b74e036afa94e66f93fde164b"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "53191c63723b7950b04dd14f1f988d1f"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "037d6316772fe4a435ec5c4f790e8107"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "d88519aea258dc7f41dcde1f777388d7"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "72b823560226ec2dd9eb5f33b0d852b6"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "b5ab4dab6c8e8fbe8f1382595f0d811c"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "34919e7ed13491876bbf817b8d725fa6"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "593f25cb0ba57eb333a2e80c1f2c537b"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "af2469e7a27d713ecb1e97ce5bee0463"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "496059d0308702a9752d2fba94040e6c"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "0dc82b35e699603b3c285adb6d77f0be"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "07b651fd221de4f6ff5b047c3488ff6a"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "eaaba94c6466b6dc7ad1593224342d2c"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "fa8f2e9c3b971d2884623ab0653d38f5"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "a5a7b28a02fb09e737382896d07fca92"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "b03e16073945c67a8d9fa57b80b79ab9"
  },
  {
    "url": "views/project/index.html",
    "revision": "cce7183871f274f0756b03475233d0ea"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "775535a1e4edd9f7727e59ddef433ed5"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "739c63d2ad281722480fa881b1cf028a"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "6eee3bb1b4aeeb9353b8749657850c8c"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "027a60a55461c643d79e520be28f56e4"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "9adb362af732e9c531c0038daea7419a"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "786b862a2001e7445515df4ec68be933"
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
