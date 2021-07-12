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
    "revision": "9fe7f615f69d5aa3bd0832ada64af377"
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
    "url": "assets/js/11.881904ba.js",
    "revision": "a4e357f213ab8d6f675543fb3ef23bc3"
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
    "url": "assets/js/15.5c2ade55.js",
    "revision": "7f1dc278a05674baa0db19b0921a4d6a"
  },
  {
    "url": "assets/js/16.dae2be3c.js",
    "revision": "34c985508fed6f059ff263076ccec63a"
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
    "url": "assets/js/19.e1e39252.js",
    "revision": "5153640166d283e686682e57f0b1bcf4"
  },
  {
    "url": "assets/js/2.9adac331.js",
    "revision": "cab4cc227c378410a0b07075c0979a27"
  },
  {
    "url": "assets/js/20.acafdc59.js",
    "revision": "e4dfd314caa4268d7931e6bb3914a41f"
  },
  {
    "url": "assets/js/21.f2a3e9a7.js",
    "revision": "198e4553fd721ccdac1a74a9bc634222"
  },
  {
    "url": "assets/js/22.539b1f99.js",
    "revision": "8a8c4166db27ffe9a459d6797603543f"
  },
  {
    "url": "assets/js/23.ed404df8.js",
    "revision": "94492029ec706abe2a383fb3c85cb0ff"
  },
  {
    "url": "assets/js/24.6f7a5098.js",
    "revision": "52bbe8e5ab2292bfde8765a3843bc4e0"
  },
  {
    "url": "assets/js/25.153e9169.js",
    "revision": "4d3a5455db5fe3de127dbbe6117701c7"
  },
  {
    "url": "assets/js/26.9eb76e63.js",
    "revision": "37092b799a132bf8df341724f76f8c84"
  },
  {
    "url": "assets/js/27.07db2fbf.js",
    "revision": "80bec0d7e47b628bb37d878c2b8318b7"
  },
  {
    "url": "assets/js/28.211246a7.js",
    "revision": "641a50172801fdfb0ae3cda6fa63970f"
  },
  {
    "url": "assets/js/29.c4eda9b1.js",
    "revision": "4388b81d0cda28a18bc9ace1f010c015"
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
    "url": "assets/js/32.f658733c.js",
    "revision": "543c66dac769b846c6dae0dbada26f54"
  },
  {
    "url": "assets/js/33.edc30b80.js",
    "revision": "bed800d52b6541948c11c3fbacac5810"
  },
  {
    "url": "assets/js/34.cf3f64e0.js",
    "revision": "adc97a539a199053da1019a28bc5fd5d"
  },
  {
    "url": "assets/js/35.d17f0a66.js",
    "revision": "af5dbf1e65b26526ae1ba12e9b601b2e"
  },
  {
    "url": "assets/js/36.07aa76bd.js",
    "revision": "c9261557f152b33873db127ac6cbb7a0"
  },
  {
    "url": "assets/js/37.77832327.js",
    "revision": "bcf7e0ef79fe993044d957a0e8b0ed55"
  },
  {
    "url": "assets/js/38.e63a1bd2.js",
    "revision": "80b7cf1e1972355da26484324c4172ac"
  },
  {
    "url": "assets/js/39.adef3be1.js",
    "revision": "1b82b5d210037214d651820205a35ea4"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.c17e6b29.js",
    "revision": "35b0007e3d40f3177324020ad7b6ada5"
  },
  {
    "url": "assets/js/41.e4a6c381.js",
    "revision": "4cc7762e2ef656ce8d7fe9eca06de490"
  },
  {
    "url": "assets/js/42.b6bb84b8.js",
    "revision": "f297fe913aa06555e0a3a041729dbab7"
  },
  {
    "url": "assets/js/43.a8093356.js",
    "revision": "8cff90c25454d604dee3b740eb405270"
  },
  {
    "url": "assets/js/44.d35a284a.js",
    "revision": "e43c152bd78e1fe068a91c337bb97425"
  },
  {
    "url": "assets/js/45.b7dcf1ea.js",
    "revision": "c48b33c79b1e177a91045ca94e1f52d7"
  },
  {
    "url": "assets/js/46.92695d97.js",
    "revision": "c7627634d957c2d0ff24033a9d1e9abc"
  },
  {
    "url": "assets/js/47.2d3cb970.js",
    "revision": "4ab566be1c97ce1708c1245add66741a"
  },
  {
    "url": "assets/js/48.c7c1e144.js",
    "revision": "6de50dc5c88af85f3c70539b450e8d9d"
  },
  {
    "url": "assets/js/49.c05a4178.js",
    "revision": "d39df502d5af8f1737eb94a42b3ca50d"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.b331b22b.js",
    "revision": "2f292365e7906277b950e296e9437a4c"
  },
  {
    "url": "assets/js/51.d81160f4.js",
    "revision": "e20540bbde2f044d33029ceefb17fef9"
  },
  {
    "url": "assets/js/52.d45cff00.js",
    "revision": "bb59b84cb5d22bb4245aa61def87e882"
  },
  {
    "url": "assets/js/53.b2fc3c30.js",
    "revision": "d2851f3e9aa187739c9ba7f8f79107f7"
  },
  {
    "url": "assets/js/54.73e03765.js",
    "revision": "92a67cffe954fad6f36c6d9f8a9e489d"
  },
  {
    "url": "assets/js/55.8ff6192c.js",
    "revision": "9d063de6884a058224b5e2f5da3a3c63"
  },
  {
    "url": "assets/js/56.0dda1a7a.js",
    "revision": "723bb55934a1b460e760261101aecabc"
  },
  {
    "url": "assets/js/57.6f60168d.js",
    "revision": "fd910f4b31f4f8108143648da6999b2b"
  },
  {
    "url": "assets/js/58.5a39bc6b.js",
    "revision": "444fced921aab7ade701eb10fe157a5a"
  },
  {
    "url": "assets/js/59.53a02d23.js",
    "revision": "7509c56635a9e8af25b00499c0058682"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.df424ecb.js",
    "revision": "2ce2625f831bfdde3a66af5f5308eaf9"
  },
  {
    "url": "assets/js/61.a865af36.js",
    "revision": "838aa6284c0d7df163bcf2f705114eae"
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
    "url": "assets/js/app.7967fb18.js",
    "revision": "4147623dace872eeff7c5e51c2f36552"
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
    "revision": "51310d176f1d325908993981208c2989"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "7a6b1fc59521a58df8c4a90758c981f8"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "256757e7d97ef0fe35c86cd6fcdb4179"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "d691dad725dc1e35bc21a6853f352f09"
  },
  {
    "url": "categories/index.html",
    "revision": "ecbfcba1e120b8687d7dea170b3e33e1"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5df0bc1e1abab3c51009390d9bc13205"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "4e6f36a8730a86e6d4a3c0cbf4237c40"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "a443e6e6e05f6c35d06c14cd70accc66"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a704aa9dc258db25a28e7bcdea898dd5"
  },
  {
    "url": "categories/other/index.html",
    "revision": "6ec8ed0f9ee9db287cbf14db7ed0e17e"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "5bf22e4d08610b4d3391f13cf1116802"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "103e3e75eb037e4a1888e46f007fb47a"
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
    "revision": "948b2ce9b75ba4992049d720ebd25aba"
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
    "revision": "68b236c534337e58075e6aa26f356721"
  },
  {
    "url": "tag/array/index.html",
    "revision": "29164b745157ee98a2c4864fddfe42c4"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "73e793ac2e4f98f08183314a075051a8"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "b1389c6018515eccba7b483f2749222e"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0753a14aa59399a88585c129c0ffadc8"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "562b3c1059561fec6718e0d3871e5a03"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5b8cffbd03eec2d02632a73be3850c5e"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "50321e04e288b822109010bdbd8cf1a7"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "9d59e64be95dac1b2b9a2236840a5d2d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "62e11e149ad84d1509dc436a828f9f98"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "9047263ed6496639d65d0ac528323fc7"
  },
  {
    "url": "tag/index.html",
    "revision": "059aa0aef206902a08b961e33f8eb95b"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "3f913bbcdf8308bd4b30f99e7e489e32"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "b1eed044bfe55e2cdbb2c4d4ee4ac196"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "5852cfaf0ae88bbc09c4bea6e55c4201"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c78da3db9e04d0bcc18f5050251beb4c"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "edf339fa223498f748d8889be63449f7"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "515b858e82fe6a0c7e94a581a276ae97"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "f3c67a5f6b9f9ee1559b3f088c7a7006"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3548c864d315f92d33277951e6ce39e2"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "95375841618747670d884cf9d84ea784"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "c7118a568dc1812f1a25d5b667596748"
  },
  {
    "url": "tag/project/index.html",
    "revision": "60212d7937cbb7a81570aa59766e777b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "27d6f47122508662be35ba3a8dec3fd0"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "65e6db23d1b4b76a23365e9fcacbb020"
  },
  {
    "url": "tag/router/index.html",
    "revision": "8b17f9c53d5fe84103ee80619e3e19c1"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "81c48ba2f083010d021609bb1c9aace6"
  },
  {
    "url": "tag/style/index.html",
    "revision": "1254bd3db80ac317eae24d1e7b920a8a"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "960262eca50f29a3ae39c73ef6492d58"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "7cf6b05a0ebea9f3da4f2fef90a81e45"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "04d7c2e0783fe90313ee9365ac0deb12"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4160e874a035c761d7addeb70de5faa3"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "30a89e0e08ba77eda54738a760636729"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "99a9fc45bba365e7cb497d6fc7877129"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "4241a734236942a1a6baa843a5fd974f"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "c8d84812f42d9ec348ca159e557b98df"
  },
  {
    "url": "timeline/index.html",
    "revision": "f19cae3f8895e9116204e189d756dd54"
  },
  {
    "url": "views/about/index.html",
    "revision": "d22aad570a13797b90af8b614b1e9ee0"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "36914f76973d6480dc5889f3decbb60e"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "3d9f0a29845e616cd99a7cdcb32b8e6a"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "df39caf38fb7e489a209de2ab8dab81a"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "7aabe7329db5da380511f67c27df8994"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "6281157f8813f98023f995dc7312e162"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "0f8300eea5f5b3eee86e76ff185d2655"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "f3c999d9270492974a90cc6edd1c1efc"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "10aacaf273ceddd1268be861e02f756d"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "ec60b70915e08fc80c7c0416a5f00ca8"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "5ac4fe2464e8d5d9a7740530312528e1"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "2a97bc073d0aa289978ac28d15ecbe65"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "d4d78bd3e63117cb5211fb71fd72095b"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "1ac9b3596aac4f94edb63eaff6130580"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "f7bceabe16f3f2cde30527aaf725c36b"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "d8166788c93b6828bf265774b0c825df"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "60dc7eb8b2be0657fd99877910a30d8d"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "36c5572326c915bea0521fee168c9161"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "8d3d9921e8bd8640919d8f728d5a6667"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "99c2537a7544542aa8da38b0a646885d"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "c83c7c3572ce1ecfd637156ed717ae41"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "87556f83c3696fcafc96812e47d284cb"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "e9cc2f95040ef336701cea93fa96bd3d"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "2c608ff6cff2d483d4de77bf5389007d"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "6bfeb9820296aa32ee55d41ed004a150"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "8ed6324eb4cd2ce0882be907aa04b8e0"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "a9e25c43a330f7b1ea3f55d73555f32c"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "3de95703bb704c48698396baf6d93f98"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "087d15b5cac2bbd329bc640e19ae3c1c"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "9666c3279f817cafcefcd64eb127421b"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "aac16f7dab515b0ccb8fee846d2bc8ba"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "5cde44fde36ace656ace2e5aa6170b59"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "1caf03b4f19ef3a431faf473e895443e"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "7d93b6f1af0c1d16e60e43d0fe64e1c2"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "8c0598c05ab09f7ab8fd7dd78ce0b396"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "71efb14edadf5c76e7e25a67d32197e2"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "9fd15648c8ba4f39e8b2c16421d0c2d1"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "6a42e0086aebe037fb0a7e024bd28393"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "c6d29387790325eeff0f82cd925a1c28"
  },
  {
    "url": "views/project/index.html",
    "revision": "ae9b424dd2450ca190fee1b9e7273a69"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "f70a14b98abb1860d67d8ada9cd89cea"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "c8d75180d583dc904752e562a4ba9506"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "429020f9febc00f73cb77107f8a50731"
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
