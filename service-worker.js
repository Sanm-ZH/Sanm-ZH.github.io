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
    "revision": "7093128ae6759abbab93cf663c00e1a1"
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
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
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
    "url": "assets/js/10.6c8c863b.js",
    "revision": "3d37181c160552c2121a933650ce70ba"
  },
  {
    "url": "assets/js/11.1c166b63.js",
    "revision": "a81d8fbcc1b90bb267c8d77b38207ff8"
  },
  {
    "url": "assets/js/12.197c922f.js",
    "revision": "2715f3d992c129d68c2ac39c4f773de3"
  },
  {
    "url": "assets/js/13.c2fcae97.js",
    "revision": "f843a0e864804ec320b796e201e40a43"
  },
  {
    "url": "assets/js/14.031dae51.js",
    "revision": "c36c1e0f20657b760149b449358c65f5"
  },
  {
    "url": "assets/js/15.ede59df5.js",
    "revision": "5fec3e5652224734042bd2e4eeb04618"
  },
  {
    "url": "assets/js/16.91094f03.js",
    "revision": "480c3abdde52328fb2006f4460d9b374"
  },
  {
    "url": "assets/js/17.aa0e0e4c.js",
    "revision": "b1a255ceda6be5ae41b12a3454f5c4d8"
  },
  {
    "url": "assets/js/18.d7dd8047.js",
    "revision": "3a4af7879b7d377a16a15c8863d01841"
  },
  {
    "url": "assets/js/19.17ae1490.js",
    "revision": "855eb0f1e17b30c0578e35885ccbadcc"
  },
  {
    "url": "assets/js/2.9adac331.js",
    "revision": "cab4cc227c378410a0b07075c0979a27"
  },
  {
    "url": "assets/js/20.a11cc96d.js",
    "revision": "08f932aeeb9ba9dec6813fa4ee0b15ac"
  },
  {
    "url": "assets/js/21.01d972d1.js",
    "revision": "c4a2d0ce085aa387aed474f963899839"
  },
  {
    "url": "assets/js/22.f344a4db.js",
    "revision": "4ae879fd376a92077b99468516d1ed9f"
  },
  {
    "url": "assets/js/23.dc9ebab4.js",
    "revision": "07faebfc1f7373774ca49dd995a5bf05"
  },
  {
    "url": "assets/js/24.0571eb57.js",
    "revision": "926ba19c5613da424ff758034ec68661"
  },
  {
    "url": "assets/js/25.9dcc79f6.js",
    "revision": "9a5c6813976e6fa6c8f724b0684141ca"
  },
  {
    "url": "assets/js/26.d629de57.js",
    "revision": "011b08f002c452106ff2815ab8956b5c"
  },
  {
    "url": "assets/js/27.26bd7d69.js",
    "revision": "1540117a880baffe33da30bf2625c973"
  },
  {
    "url": "assets/js/28.13f12b09.js",
    "revision": "0ae7fd7b30c41a12c5dfb44a709f548c"
  },
  {
    "url": "assets/js/29.c73f1f46.js",
    "revision": "865d174a22182084aa5ab2751547b1b7"
  },
  {
    "url": "assets/js/30.154296b0.js",
    "revision": "37dd2396fa54568c6b38aea127c31bc2"
  },
  {
    "url": "assets/js/31.451a5976.js",
    "revision": "bd1ec8ce2a6b0083d10a4a077bd9036f"
  },
  {
    "url": "assets/js/32.6ef3db49.js",
    "revision": "63a84d10e76e1fc2b9f3e21593f05a77"
  },
  {
    "url": "assets/js/33.0c246c3c.js",
    "revision": "4411a85fb8e56548b08700d712d1b8e2"
  },
  {
    "url": "assets/js/34.6214f502.js",
    "revision": "cac3148b48a151474f08b69312dcfe9b"
  },
  {
    "url": "assets/js/35.594a036d.js",
    "revision": "1264d9bc69e7b0a298794081c2f2bc7b"
  },
  {
    "url": "assets/js/36.cac65367.js",
    "revision": "43d348c47ba7ec47d028b225100afd95"
  },
  {
    "url": "assets/js/37.3061575c.js",
    "revision": "5188badbd7c760378689bc2594dcfdb8"
  },
  {
    "url": "assets/js/38.535858c3.js",
    "revision": "b1d58946dff74a07685a00170992649c"
  },
  {
    "url": "assets/js/39.a9fb9ac8.js",
    "revision": "a5ab3ca1a4744edd0d1e80cc47afddd4"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.506f8f70.js",
    "revision": "65fcdeca365822c086c375d444acd209"
  },
  {
    "url": "assets/js/41.f5eed65e.js",
    "revision": "b5e238355c34e73bd1d2213c51544893"
  },
  {
    "url": "assets/js/42.daedfce4.js",
    "revision": "83ced1e83a38b3c465c396dd0e7c60e7"
  },
  {
    "url": "assets/js/43.d2c26aa4.js",
    "revision": "b086313ec98712fdad89e10a2dcd90ea"
  },
  {
    "url": "assets/js/44.1009f684.js",
    "revision": "2f48886d4f37ec63eaf621b6b33a25a3"
  },
  {
    "url": "assets/js/45.c9f7a7ec.js",
    "revision": "18dd71a5c9b2252ae62fc0259af4882b"
  },
  {
    "url": "assets/js/46.e59478b5.js",
    "revision": "accaac85e6a4a17c9e4be0336778cbc1"
  },
  {
    "url": "assets/js/47.0da4b0ef.js",
    "revision": "cffef5267dad08110df257be10cf4c4e"
  },
  {
    "url": "assets/js/48.c0e3ad3d.js",
    "revision": "b6da1c50cd67d8c83da5d40ef6154856"
  },
  {
    "url": "assets/js/49.f1ba8303.js",
    "revision": "95fe73113605a2fc6f5654926fa41f18"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.4aaa9aa8.js",
    "revision": "0f62c8df8c0b0b4438c256fbbaa34f66"
  },
  {
    "url": "assets/js/51.10889cdb.js",
    "revision": "a6b6b30d3fc420732b1c3d093e5a4577"
  },
  {
    "url": "assets/js/52.b989f7f3.js",
    "revision": "8fae8a444bc02e6984ec0b1bd9281943"
  },
  {
    "url": "assets/js/53.aa77c318.js",
    "revision": "882f7ae029ed396a690a562ecf6ebb17"
  },
  {
    "url": "assets/js/54.0d66d3bd.js",
    "revision": "9f15e7be6a10d5b75adca4efbd98d25a"
  },
  {
    "url": "assets/js/55.d0aff331.js",
    "revision": "c69d5ba9ae5e24a21449ea04d10ca0bb"
  },
  {
    "url": "assets/js/56.5a56a2ab.js",
    "revision": "67665c354ec00a70141855af97c995ff"
  },
  {
    "url": "assets/js/57.6a5ad682.js",
    "revision": "8aab13e8484884efa780775a91c6277a"
  },
  {
    "url": "assets/js/58.956cfced.js",
    "revision": "c68a43fc483a5ebfb5235a2678c70572"
  },
  {
    "url": "assets/js/59.5660e425.js",
    "revision": "203a1ad5d35b552e596cf0740f0d45d1"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.f2daf6b8.js",
    "revision": "43aae2cc6e8820873781170203a063a6"
  },
  {
    "url": "assets/js/61.646905d1.js",
    "revision": "416baf856a3c762f1479204dd6f7c80c"
  },
  {
    "url": "assets/js/62.8d89fd29.js",
    "revision": "669dcde064887c88fd389af937e8285c"
  },
  {
    "url": "assets/js/63.d976b7e1.js",
    "revision": "9fd52cc0414a688cbca8c0d69ccac4b0"
  },
  {
    "url": "assets/js/64.87834a38.js",
    "revision": "255cd9d614f5f77dfd7417588bcef57c"
  },
  {
    "url": "assets/js/65.c3e0d27e.js",
    "revision": "de57628c0d2bc41b61cb7d253132193a"
  },
  {
    "url": "assets/js/66.93ff42a4.js",
    "revision": "840c60f7c81fb4180347e872fa34c8d6"
  },
  {
    "url": "assets/js/67.906378f6.js",
    "revision": "686bb74bc9b818f4cd52dfc00555907f"
  },
  {
    "url": "assets/js/7.dbd27f9e.js",
    "revision": "63df5a9e6928d9c387f70ead9d24e2af"
  },
  {
    "url": "assets/js/8.f86fee8a.js",
    "revision": "ce141b1bfb3d7c27b56b9a783e0413f2"
  },
  {
    "url": "assets/js/9.95bc360c.js",
    "revision": "7c2c4d5f747c42afbef39d09de262a27"
  },
  {
    "url": "assets/js/app.c89d2de4.js",
    "revision": "ded104f344ef81fcd5b24d8b05790985"
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
    "url": "categories/app/index.html",
    "revision": "99ec4ad5e866c0a09736471c80d1fd89"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "d822d8f5477da3ba2177df47aebb9cd2"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "4900a54784df6e9b52479b48a18c411b"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "9d3a2425d2eb7218dd67090acbd5886a"
  },
  {
    "url": "categories/index.html",
    "revision": "1315f08ea4086e37e21a3b2909ec3ae1"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "fba8acfe8f12949f60e0cd0c937caf8e"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "91ce03cf72b5ab8f4af9e8ed3c1509f8"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "9674d5b1cca375233fc82ec4df54b416"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "8b3a23932acc54a09be73f76b7de534a"
  },
  {
    "url": "categories/other/index.html",
    "revision": "a53c8271e18c7fdcb041fd9e3a8da038"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "840d82eec6833f67f4f8395c38a5b790"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "a8b8448f7e73f631ceb1aee4974b5081"
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
    "revision": "0c2bf16b9a6ace8052d6e32d9a31d672"
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
    "url": "self-blog.jpg",
    "revision": "adb6dc7dc0094c1d160cb8fd601514cd"
  },
  {
    "url": "self-resume.jpg",
    "revision": "0b07c2fcf77fb875cd329e73ff1e1f38"
  },
  {
    "url": "tag/App/index.html",
    "revision": "ac8f145fe51b4c8dc4348801b9e10b4a"
  },
  {
    "url": "tag/array/index.html",
    "revision": "afed09065a10da2fc51b5315653e6bd1"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "1e9a556816bda1eefe1522f6b0c82c02"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "676487ac14aa1f7ca4fd0ae0c77ab78e"
  },
  {
    "url": "tag/css/index.html",
    "revision": "73d70a6cf997748822cf647add761ed5"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "29593bad6c114413ca66d0d9dbc7b3fa"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "193b3a8f69d2061e0a09655a71b202f6"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "d614bb84278aa04437f948d4789b95f8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a70c487fb07c35b709d339cfe59c9a6c"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "f98d74df68f1997c153cc47209f13ac9"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "b011e0ad74af449763389421c7119a78"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "7f5e425f057186c4539a8810e8351bad"
  },
  {
    "url": "tag/html/index.html",
    "revision": "336dee8379192c22992d1c25977c1dca"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "e713c589e5058885140fcfa26d724c80"
  },
  {
    "url": "tag/index.html",
    "revision": "bf808a5d4379f7548b025663a9614744"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "bb35b7faa86cfc6ea93477e0a3ffae2c"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "2bfda6553c1ba913224f2a2d55315068"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "7bdcff711b5a891e65a787b3524c6c60"
  },
  {
    "url": "tag/js/index.html",
    "revision": "5c0bfcdfd859925f966bdf6ef984d217"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "3832a4e0d6430a5dd707f0093345c9cb"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "2b5b459762dc2481c74e7b1fae55f93e"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "ce777b11344d99d65bc9663fab10fada"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "b097a656849be7855a93bab515bbaf1f"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "c37c60be198223410eede947adcc72f4"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "ec034c1c1449fccf69d3485393d64028"
  },
  {
    "url": "tag/project/index.html",
    "revision": "cb1ba56d46415a77891d382062fc2714"
  },
  {
    "url": "tag/react/index.html",
    "revision": "10863ee9a0b15f6c7e0c2c4a75510440"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "eb8d7ee6988310565882934925dc939d"
  },
  {
    "url": "tag/router/index.html",
    "revision": "03c813654cb838cea0de9cedbf941744"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "639ff9bfb12ff84650f5b366b6bec88c"
  },
  {
    "url": "tag/style/index.html",
    "revision": "e67bb79882d91cec3764b147ede2e098"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "91fc1619d3e590242617a3418f477952"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "65ac890be7179068b46708d81e34f9dc"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "77a617490e123dfed29f4cd6541b6868"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "668e5bb2e7212b69dbdbb3d9d6417385"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "c5ba4e0d392d08fdae5bd43b943fe345"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "225e7fa99aa2625e71ce6199196e65db"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "1895a04dbcd927b723c80b5eaf419ba0"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9631b51c0b15989c3f9dc0194bec32b1"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "4207e4760eb0bdcfb686b83c9f7aadee"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "c8b1aff17064ea38aa3e2822409e2597"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "988d1dd58d0da8590ab40e9e022d9524"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "a3cf624587732fe38c7bd361f0c48c89"
  },
  {
    "url": "timeline/index.html",
    "revision": "46316b44e7e8b7af6e5d771f314f25ab"
  },
  {
    "url": "views/about/index.html",
    "revision": "30cf01d7faa94acfc1734d80fc89e867"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "ce77ad26acdb40046be3aa5c0ab8f47e"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "fdc0f773add3f7edaa979f24149e3183"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "94ebdc390851ce3b966e15254e200854"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "78d4558e41a66a86ff1912a9968dcea6"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "cc0158247a80dd6347e7cd9ff0133f80"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "3f427b5bbb0026b3fd5b1154bda96bab"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "e2f24441a54cfba502453bc26361a485"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "763987dc8127ec36e4320fb607c5f4d3"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "4f066db595a704a0c3405c138f53432b"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "e2a88e8dbee391d24f8cb38673a0c665"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "d979e8e5e6c715bbc865aba598e54a64"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "38047e455e87cbb22b8b7ade67549acb"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "9da4a0a73cb97499d5b1942afcba4ee4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "50ca2847749d92fdce1c145ad4643c81"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "4810b72d02cf397e13cf0a6fbf0a6d34"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "a244736975f98ef2ce32e70cec6f610a"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "4e5a001e26c74a561833353a62abbd49"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "f7c38912e842db05875848ebf23ccdf6"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "5cc01a8900608caeb15aead293981542"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "cf92ac12b6b11a9c99952d0786c4bea9"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "fae54c2707db025b7f0f788cae73d352"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "32f757036bdb1daff32e32531940cfdf"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "eee33f96dcd26ba6916978932d521ef4"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "b9a4b25c26dfebc4d70e221f82cb3fa4"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "e7a9736da96b299c6a74e05a0134dde7"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "10bd5c4b7c2218091fc24d96050ff786"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "120635d2e600ab3c46f9ed5390bb7d85"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "edc155ad00fc991cf12582eedaf22470"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "1f1b1cdbba2c3ac53142617c6997b830"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "492f98989ad117830c9427cd9643149c"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "6d263e20f4bfe0471cb11a2d28b8d29b"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "9890aac26bf4a89b69b1a6aac1787323"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "25de215af49e6ab206121ed9015eab54"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "f2f3968728c05312687ef499f692d823"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "ce070c64bb528507e06036e73ac1a8d0"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "99208bdd0aa80adfcd8972aa64270644"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "3701ec7bc7feeccc78ead36fc72de569"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "a8bbf727a8ba47c17aa95c4e7771acec"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "1382ad5fec5e5d226d8ac34dd302adc7"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "d82418e6417043a9cde0f850e07c53c2"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "b43be58505572dbb6b8adfaeeb4d199d"
  },
  {
    "url": "views/project/index.html",
    "revision": "b38585d00329517c10f23967586de1bd"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "f846c3a0365ac65ae142fdaf5a84a7ff"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "f28265cb86c1f45c16f6173cf348b4bb"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "2efabae0590216bc73f8c9cb54402ce3"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "34cc3418de62129c266f04f3028969e5"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "fe194dc5d7d10d3eae17692ea2f961bb"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "dfe33f7293f559ce1a042fbd6384695e"
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
