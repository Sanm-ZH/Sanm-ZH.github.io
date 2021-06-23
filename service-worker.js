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
    "revision": "c9cdb8e3542c89f0e8fea19f306a8071"
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
    "url": "assets/js/11.77cd78ea.js",
    "revision": "ac4d69c03fcb5b7793451d9b015f7696"
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
    "url": "assets/js/15.4fa8da19.js",
    "revision": "2f3b7e2e6c52b5e9c52a485b29d28687"
  },
  {
    "url": "assets/js/16.3bc76cf5.js",
    "revision": "35ae54bec3b141c86ec1dd7e8cad9752"
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
    "url": "assets/js/21.9ff39e52.js",
    "revision": "9f240f0a32df7325fd66179efa348601"
  },
  {
    "url": "assets/js/22.f344a4db.js",
    "revision": "4ae879fd376a92077b99468516d1ed9f"
  },
  {
    "url": "assets/js/23.ed404df8.js",
    "revision": "94492029ec706abe2a383fb3c85cb0ff"
  },
  {
    "url": "assets/js/24.223fb68a.js",
    "revision": "dc7cf7eb2502e18a2032552655db2db3"
  },
  {
    "url": "assets/js/25.2a9f12b9.js",
    "revision": "50c9154afa2015ad085ae7fa7c8c6370"
  },
  {
    "url": "assets/js/26.1cb4a334.js",
    "revision": "081399520be3f086a7abb3960e98b0af"
  },
  {
    "url": "assets/js/27.07db2fbf.js",
    "revision": "80bec0d7e47b628bb37d878c2b8318b7"
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
    "url": "assets/js/31.4e0319db.js",
    "revision": "3acc90f0eec12c22d90705e0bf7b0a33"
  },
  {
    "url": "assets/js/32.990901c7.js",
    "revision": "73ee16f91ed3db9c96bb1fce4a87d886"
  },
  {
    "url": "assets/js/33.6b1b2372.js",
    "revision": "f04ba8aaa87fdf525843fec8e1b238d5"
  },
  {
    "url": "assets/js/34.324e559b.js",
    "revision": "b505c9a9e99e84fa006ee4cfedd04433"
  },
  {
    "url": "assets/js/35.5958c9a9.js",
    "revision": "97ffdd191123fed695d422fcaf7496e5"
  },
  {
    "url": "assets/js/36.77d5202f.js",
    "revision": "2cc54e7614f008082ff4e53e5b2d599e"
  },
  {
    "url": "assets/js/37.749ba320.js",
    "revision": "bb3c18fcba0272fe7bfd7282225fe654"
  },
  {
    "url": "assets/js/38.411116d8.js",
    "revision": "229f14e37a60323e906477f01f4c9795"
  },
  {
    "url": "assets/js/39.75d0808e.js",
    "revision": "de31e8c8374b227d46abe0186e0f14e4"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.0ada918b.js",
    "revision": "8181b51959f03451093bddef60b1f284"
  },
  {
    "url": "assets/js/41.d022b11d.js",
    "revision": "ba550db713e9e97edd5c13746114d310"
  },
  {
    "url": "assets/js/42.f18a7438.js",
    "revision": "166d95b0b0a66c36eae10baec64aa70b"
  },
  {
    "url": "assets/js/43.1213e18e.js",
    "revision": "46ed80662fb0e41e19c8b822c18e1804"
  },
  {
    "url": "assets/js/44.ab91031a.js",
    "revision": "d0d6ac3f99e3a581f74078a1bec0a3ac"
  },
  {
    "url": "assets/js/45.be000b00.js",
    "revision": "d6ffacf70d5e970795f8c08410b689a5"
  },
  {
    "url": "assets/js/46.cfd3859d.js",
    "revision": "fb038a9461003270fbb936909a5e9061"
  },
  {
    "url": "assets/js/47.e66b9fe9.js",
    "revision": "1f58e7b6b6c30933d4907a3b6b6d896d"
  },
  {
    "url": "assets/js/48.7cc54164.js",
    "revision": "e74394d8c292fe03f50e6e7bbc068229"
  },
  {
    "url": "assets/js/49.017a6edd.js",
    "revision": "abb034f53048261ca531cbb15fd8a521"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.14e91f55.js",
    "revision": "511f7adc20a133fdc0787cb6640b1649"
  },
  {
    "url": "assets/js/51.026e959d.js",
    "revision": "415b06e972dd28927f5225df02612132"
  },
  {
    "url": "assets/js/52.6a801719.js",
    "revision": "f42d6be5b941ee5106d0576a697b8c1f"
  },
  {
    "url": "assets/js/53.6089f72a.js",
    "revision": "affd5a2e72bf0a7a4b431d775458319c"
  },
  {
    "url": "assets/js/54.7969f0cf.js",
    "revision": "83ef865b1893bc207a2dcf14d73b57b8"
  },
  {
    "url": "assets/js/55.11930e7a.js",
    "revision": "d003e9516af9c7c97c65e660c36ce2f7"
  },
  {
    "url": "assets/js/56.7e8650e4.js",
    "revision": "49fbe8fc7353356fbf7f8250d4eba721"
  },
  {
    "url": "assets/js/57.c727444b.js",
    "revision": "1d31d29b70efd72d5cd30b51ae2d35bc"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
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
    "url": "assets/js/app.2243c461.js",
    "revision": "bc7bccaa82c06c38c248346ac83845a2"
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
    "revision": "68a9a08db31ecefbce15f85884959c54"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "12a3990f9e7022bed7ef100b77820cb4"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "ace07d05ca4f4f7e887745fc233dd810"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "cc9badbed3d4d60b0ea92c11391bc447"
  },
  {
    "url": "categories/index.html",
    "revision": "f82d57dbef6a9be5e28a0afdfb4b7b23"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "d9d95ee63408ccb2f47249d828daa614"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "cbcd869e0326563ec153e8994c4a8690"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "5425bb70c9be2afab3d93c85b85c2778"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "5be72c11af48c3b08ab6ff21f944dfa3"
  },
  {
    "url": "categories/other/index.html",
    "revision": "6a78f2b291a3390a38a5d35fc919bbec"
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
    "revision": "99c432ebeb910c4a1d02c41966fa0aaa"
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
    "revision": "210f4fc60f646eae1f39050264232171"
  },
  {
    "url": "tag/array/index.html",
    "revision": "1652ecb913937e5fe8b8a2aa50ddb232"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "085b2ed2378056901433d2af3cbb89f5"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "c40503268e84bbfebecf402578694425"
  },
  {
    "url": "tag/css/index.html",
    "revision": "45ab5a88f2022b0597f8a9bf1e4ad710"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "07fe1933e8ec72dbc573e16da51e0f95"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8da7aa3735eb8203535730d7a04ae9f2"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "76b070fa51ae7445e0e2205deb7211c4"
  },
  {
    "url": "tag/html/index.html",
    "revision": "5eb5fb4877e68453fe8dd9abcec14364"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "3e1c4b5007b6beaf5f6d620964033840"
  },
  {
    "url": "tag/index.html",
    "revision": "16cff2d391f4277010ed219c3cc0e979"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "614cd984418445f01fab443565a9c355"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "9cca98fb548dfb949ea781f452ca429f"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "0d6c9ed142438a878da607c8ed9ea999"
  },
  {
    "url": "tag/js/index.html",
    "revision": "60042f19f91d6e9de89b598d7cb44d64"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "77c4377cb4d6dd3f2803b4cc2cac1829"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "7c03af64d79448cd6c076ffe6c8febea"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "b5696d006dda53436d6e44e239b7305e"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "de29a8cc8e4c78ba5998dea80df8df07"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "415b79b04fa606d675d6dba4c3fd2dc7"
  },
  {
    "url": "tag/project/index.html",
    "revision": "c5d47dddb46f58050bb4aef3374ebb10"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "89856fb755b800593692ecf0f3607593"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "d309e4248cb60e17a7cd0ed4f9402772"
  },
  {
    "url": "tag/style/index.html",
    "revision": "477bed8eae43f1b7da458693410fdc78"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "b27be062ddf993408d32643cfbb0b74b"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "d3057ed5c020aa761050e899b516ef63"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e6b2f07980e637b9b0165234a0bd9d80"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "9c06e518ca29a6f761c462f881e98382"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d5a3c7b65c24a489e596281ad47c5a3f"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "69366c1f9c3a8992dfc5397e405b247b"
  },
  {
    "url": "timeline/index.html",
    "revision": "01a47ee58cf12face53ebc463e7eafe9"
  },
  {
    "url": "views/about/index.html",
    "revision": "9a62da5c18a021ecd21c965bf3d7a97a"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "a8f494fb4cb01f71f4b10986b6f964be"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "0d6a62e0466a30ccc8b263f4fce39d37"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "fdcf23502ddce6e34518aeb13512e915"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "357f7250ebc9d740500b1f6099f1c10a"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "9926fc265f0dbeebc6051af67a0e14cf"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "97d3a00b40cfc0a4fa8e3940fefccd06"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "c078a15820eedd404d810ef03c87b5fb"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "fe69a91d32e309d682a427ab3ddebd30"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "2c376f9faf607a4f923d2c525bac0b91"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "7f3f98a1d21ba1b257421824f19cc7ec"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "66927e438d5d0b7205ed836c0d54b325"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "9a25d93bf26329a516b9f143071b3769"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "624985fe1e72f20a57b4788828ea3aea"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "6cc61bd31ba9e0a245a9afcdb8697791"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "5116b4fb961691cf86030ee7b422b6ac"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "b42601b9f2735d01056f11a10e0deb01"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "62523179cc14f257dd3d3f0f153735c4"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "b1c866a6787500dc0a97a8a35abbf179"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "76501f552966a7e5fa4c648b89f93685"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "586733c2f26c292d8e19f2c510b3d159"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "6a7ee2aa5ec4e44d0a1c4230e46d6ffb"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "8651e52191e6de15178251ddc9e51add"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "daeb3e1d47abd9060dea90aa89c1cad5"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "d494590d67db5334b2a902fe5d13532c"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "23cca6af6c2fdb6580c8d6a9cd845d68"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "9391557a6f889e26591b37fdca7a8c6c"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "a338c42583b0432ba0de3b82a1dbe927"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "a51ba1646924d5513255b350eb387eef"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "3b3ea6495fa943ae44b3232385114ae7"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "6c4b24cb92fff99458a3149a4783b2de"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "78c76f6bf1a4dba7c9e8538f0f87c10d"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "eac5e506abba4a8ff9608193a2345a62"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "0517ee70c3a829bcb4ad14b59176db38"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "63c4447441ad00728114ab68dcf448a7"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "727124c18f84d5c8e26a70806fae1aa0"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "8f1874f74a23f6ec2fc30dca19e70f24"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "999d63873f479dcb6ded09546aed0bc6"
  },
  {
    "url": "views/project/index.html",
    "revision": "7a08ea903621ca7bced874ad411cb87b"
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
