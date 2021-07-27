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
    "revision": "c472cae59b29c2cd297c7b01aabf33bf"
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
    "url": "assets/js/11.c8a1e606.js",
    "revision": "100cf5082bb33e56eb3f0fbe42567ee9"
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
    "url": "assets/js/15.38b0c83f.js",
    "revision": "1d186df9bd98074b2e8acbe918fc5e95"
  },
  {
    "url": "assets/js/16.4c6d1f6c.js",
    "revision": "0aa8ce68d990b0b8966a943f48bd2632"
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
    "url": "assets/js/19.dad0b2e0.js",
    "revision": "ffe2db2b662eb23d17040d75ea2aa4fb"
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
    "url": "assets/js/21.9ff39e52.js",
    "revision": "9f240f0a32df7325fd66179efa348601"
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
    "url": "assets/js/24.223fb68a.js",
    "revision": "dc7cf7eb2502e18a2032552655db2db3"
  },
  {
    "url": "assets/js/25.1e00733c.js",
    "revision": "e61a0a531eac98d467a48b0f419f9ec5"
  },
  {
    "url": "assets/js/26.9f7add02.js",
    "revision": "3d686a9adb78986c1b2171be2d1be03b"
  },
  {
    "url": "assets/js/27.6b915a4f.js",
    "revision": "ada236ca38b41793bb96426a4c94bfb6"
  },
  {
    "url": "assets/js/28.13f12b09.js",
    "revision": "0ae7fd7b30c41a12c5dfb44a709f548c"
  },
  {
    "url": "assets/js/29.213b1e1c.js",
    "revision": "c2262f6bdcb873c51fb4e1b4fc6630d3"
  },
  {
    "url": "assets/js/30.5eba18ab.js",
    "revision": "e8d7fdaf618f25e7e3d6e4b06e8931d5"
  },
  {
    "url": "assets/js/31.3c1e6ccc.js",
    "revision": "9cc872c8c58051fa55ce51da10198881"
  },
  {
    "url": "assets/js/32.6ef3db49.js",
    "revision": "63a84d10e76e1fc2b9f3e21593f05a77"
  },
  {
    "url": "assets/js/33.59ed93f2.js",
    "revision": "8e90130dff7602f82b93d94a149b7104"
  },
  {
    "url": "assets/js/34.e53d691a.js",
    "revision": "59391a1350574b94d37d4296c313078e"
  },
  {
    "url": "assets/js/35.8d5d0af0.js",
    "revision": "06d33cfe21499d3ded228067408869dd"
  },
  {
    "url": "assets/js/36.2cd7210e.js",
    "revision": "a1f584ef14562d04d7a2a36166d447a9"
  },
  {
    "url": "assets/js/37.be1776d0.js",
    "revision": "938d108e4f2b286c8936348bdd71e1e2"
  },
  {
    "url": "assets/js/38.d4f66293.js",
    "revision": "1c44b33349892f40314f7a782955730e"
  },
  {
    "url": "assets/js/39.bc3a84b3.js",
    "revision": "f68b422e628239714a4c6a48a37b0d50"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.f2cd75d3.js",
    "revision": "12fcb8ba7adede5d16eb4d3d4042ea19"
  },
  {
    "url": "assets/js/41.e02f459c.js",
    "revision": "5e52ae60a4112446ecabd47080420392"
  },
  {
    "url": "assets/js/42.7319c23e.js",
    "revision": "9f19b0fa32f3650a3befb8417a0d4cdc"
  },
  {
    "url": "assets/js/43.5d96c646.js",
    "revision": "1eab4cb24dcf8daf852c47d4c60a7237"
  },
  {
    "url": "assets/js/44.e4d572fa.js",
    "revision": "21067de477f0e61acf386fee4c4d49e1"
  },
  {
    "url": "assets/js/45.c76a7af8.js",
    "revision": "ce0a7a88460694e45d2215df39f83a6f"
  },
  {
    "url": "assets/js/46.b4951ed6.js",
    "revision": "1e7e2739200e677b7a3450de6c939bb1"
  },
  {
    "url": "assets/js/47.36365584.js",
    "revision": "1e8cb40e2bf513803c6c5134dc1db9da"
  },
  {
    "url": "assets/js/48.fb6074c4.js",
    "revision": "713b5e37139d74525ee6e110c8d2e1e2"
  },
  {
    "url": "assets/js/49.405aa650.js",
    "revision": "5e8e64b209ab0548df109e5427a62dcc"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.2960f528.js",
    "revision": "40a3c6a0c35420019b4e7cd414cbe918"
  },
  {
    "url": "assets/js/51.a209ba4d.js",
    "revision": "1a68d31a290a827855b542df648069b1"
  },
  {
    "url": "assets/js/52.85fe5350.js",
    "revision": "d2509ac5630813da7d2d8871da56e229"
  },
  {
    "url": "assets/js/53.5a3180dd.js",
    "revision": "da77fbb9c3ad7eb29126e2103f2fde30"
  },
  {
    "url": "assets/js/54.8e075350.js",
    "revision": "e5b13b90f8239f6591406022f4549786"
  },
  {
    "url": "assets/js/55.66cd2cb9.js",
    "revision": "98ae992d6fda38608418814a1ce90f5d"
  },
  {
    "url": "assets/js/56.2f34c9ce.js",
    "revision": "186c9b840895099cea556d3aaed504e1"
  },
  {
    "url": "assets/js/57.ea079650.js",
    "revision": "f3dbd67985878dd75b571bbddf41b0a4"
  },
  {
    "url": "assets/js/58.e319ef9f.js",
    "revision": "647137175734e28bcafa6974b49a698c"
  },
  {
    "url": "assets/js/59.35ed6f22.js",
    "revision": "bf9522a525e27ac4eb343f5991393e05"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.0ca6b52f.js",
    "revision": "7a0b579fbb3743128502622dab5a9ea6"
  },
  {
    "url": "assets/js/61.490d350f.js",
    "revision": "08b33408074637e3aab4a0c8252aad5c"
  },
  {
    "url": "assets/js/62.522cbe53.js",
    "revision": "25fc791f891bc8316d83954b05ef4db6"
  },
  {
    "url": "assets/js/63.28388dca.js",
    "revision": "84e33602ec7a28578d958aaca830ad24"
  },
  {
    "url": "assets/js/64.2480716f.js",
    "revision": "adba45159667531c8b65f30f0411bdbb"
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
    "url": "assets/js/app.165e812c.js",
    "revision": "77904234f2e0fe045fa4354dd902cd29"
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
    "revision": "6d1fb1e1146712cffd309e3d40e6c805"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "b9011ff2b266d7d67e9e2b85c21e66f3"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "2394a34861bef23c2e8c23a292a0075e"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "5a7b45412e63e0707ef0ea745846608f"
  },
  {
    "url": "categories/index.html",
    "revision": "8e43c742547ff9fcdc9fe6b4b63c6eb8"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "7364b41fe3961a39290982a019c61201"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "86c737cafbb9b98be1558ef08ccaf81e"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "04639522c29b18f43ff24464c7e8d629"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a6ce7c568051765c6219fd50d492a7ae"
  },
  {
    "url": "categories/other/index.html",
    "revision": "5f3650f615841f2dbea7185ca0fe7333"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "9c70a4465bb05ed329a66f175040749b"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "b12753a58cd422f97c85edaf92dcada0"
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
    "revision": "b6acd29771989c3525e4163f70f156dd"
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
    "revision": "45df2850fc6fc7c1a3501b964f6376ef"
  },
  {
    "url": "tag/array/index.html",
    "revision": "5693d3b131872105f4f805634c60512f"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "b85de4b109853a0a20e908a673e518aa"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "e27ae2fb9d078b7f9408f2bd2138c449"
  },
  {
    "url": "tag/css/index.html",
    "revision": "60ae8b9f6abb5214e7453da0c53c86eb"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "ded914bd04a3826396b5bcc6768de8bf"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "1f152a96f2ca843eec118fcb74a11ddc"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "0a6fe0d0a6a8a4c05552a041bf497c89"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2423ab37843fd42b6653eb39fb50e60d"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "edffacb4e37939f166f8f2025357eda4"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "2b86a026daf5065301c7294769af1242"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7e413a2c283d9ace38861ea8477dcf6d"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "1bb7582feac6fd7b2e4cca5cbb5c697b"
  },
  {
    "url": "tag/index.html",
    "revision": "ea4a2cdc0e591ceb085d27c146528ad8"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "b1893a42f4770f0d1c8ea97354d6083a"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "ea930e99706d1a06c5597346d8a72bfb"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "4a4e0520f5f268a470c1f410e846c9f3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3e3a69b26be60f3c7dbd9f7862649752"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "c75ec884a2d4d10abfaa2f6b454280c1"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "1ac0421a32486c82782e57bb55519b02"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "61e8eb6c47b141454c056bf9c13c26e1"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "03db079586a9d531851a1eaab7a5a8b2"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "b36f97eb0c9f6cf41aa8a987e1ef5c86"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "c00a40718f54b762e292dbce60219b8e"
  },
  {
    "url": "tag/project/index.html",
    "revision": "9d671835ae1c53ca2697bd9b5d0c5d72"
  },
  {
    "url": "tag/react/index.html",
    "revision": "352c845caadeb25c50b0b57485ace877"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "92df0cea1fb0477eeaa4ca902147909a"
  },
  {
    "url": "tag/router/index.html",
    "revision": "6942743d3d2c85da9a27c78d64dadf2a"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "496545f1410487da41c9e6a7c12b3cf3"
  },
  {
    "url": "tag/style/index.html",
    "revision": "0eaadc03dd811e910a449054284cf58e"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "038855159d4d15a494565724fcef55a4"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "7b74f76599ef6a950b583d08a126b566"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "f585aed095382f7ce51899bd43495822"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d4577d31d5a18e89505efb65462d1b9d"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "101a19caa49167b9b96fab67e4f1f499"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "c63da54226787dc3036190841b3b8b83"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "892aa54efa91c607cf16f879f5a12aee"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "c4490fd41ff5816f0b96bb95f2535bc6"
  },
  {
    "url": "timeline/index.html",
    "revision": "6ee86a49ca4517302c5fe8feabeb29d8"
  },
  {
    "url": "views/about/index.html",
    "revision": "fa81eaafd302783f9164b77f245208b1"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "c0c46e0bf2b68ecde3cce02180c06dc5"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "dd5b8bdc75e3e6459d6769125c786559"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "14589333a019c83e727cf1469ca7058d"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "975b56bdee313b1d779fe44cff267888"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "87de89a75adade65339765a8fe6eeab1"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "eb6286ecf4aa69f4bdaf61c7a893c2cd"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "7c2957a8ae79db779d69f7c575095b43"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "0a29a49cd32926e5cbba2a6af0b32437"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "c480c2b7b2d4eeb746ff457c7f0389cf"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "fb853b8c09d432ba639f50728b4bf4f5"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "991e9ee40cb737461e2de2b9558d1b27"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "210ddbee138f72ffd03f7b21c2ecc26a"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "f3e74a12a8c86a2e3ed87fd4ed1a3054"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "a796a843433f77046fbee7aacea7c889"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "fb591a01ddbb9c695859f7225021a94c"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "2abdfaea55818dd1e807a778c17aab9d"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "f2f15d9b6a822b794c2e362a4c53e28e"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "38664e337c1964217dfc7e3667e32a40"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "54af132011e115abaa5ee18794504f60"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "5db5de26b74f06be6613420c112be666"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "49182822b1e18814e943282b9c256d68"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "e97d25105b3c36e49b2990cc9b0bbe22"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "ad31f13b6daeea0894d375a08156e01c"
  },
  {
    "url": "views/JavaScript/premise.html",
    "revision": "aab34ad71bbf573e3ef18634f7f8b25e"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "42a2bfc22758568283c32f8b86ba0a6c"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "12c9e3fbedd54e75ae30e5b619bd7d59"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "297094c39a098dfe6227cb31894fdbb3"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "52461f267a59b8c48fa992c3526023bf"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "c89c397de37e5b5ade4ada702aca6ec3"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "0371676b394d1b8a0b464eed895e1dd8"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "dfd085364203962c0bdf391dc9468f0f"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "ba341d8a7d2ee868734d8a9e6559d505"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "eaf5f306b1bd436c370a96c53b1b5a94"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "ecbfc82ffc849e8d2f48bef6baeea40c"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "d0494bada6ac5c0abc3b92c80182a081"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "4a02dad7cc61a8fb733954d2c48f17aa"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "a5bf14505059fd000b4b728bb59a0d68"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "55668a2687eb134770ebb922b2127285"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "e54c0eecf6f382d627bd43caa128d368"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "b4eb0d9995c2e7faa2e7c7a2bbb536ed"
  },
  {
    "url": "views/project/index.html",
    "revision": "74a135de05cf2783c2833885eba66542"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "c1f2ee8fab363e2faac36b66c4cba11a"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "04e251a0d1adc575f52c85f841fe8c1a"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "a107cb0b20a7fb880f69e3495fe92a59"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "7df7368077aa4d4b867431bd8e4bd840"
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
