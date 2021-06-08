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
    "revision": "165a29c672dfae2ddfbc547fddaac2ac"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.7a130922.css",
    "revision": "f5a8017875bf3a0c2ac5ed66d8ddc61a"
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
    "url": "assets/js/11.c0414757.js",
    "revision": "a33d610587b57cf630e91d71314b7e95"
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
    "url": "assets/js/15.ae021954.js",
    "revision": "002ca490abd6f0f144817f5d0b539352"
  },
  {
    "url": "assets/js/16.23efce52.js",
    "revision": "c4bf3849bf23463112504c2301a51af0"
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
    "url": "assets/js/19.b4f5da65.js",
    "revision": "477acb3711b46e252b18fe6241e6b9a1"
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
    "url": "assets/js/21.3aaa74ea.js",
    "revision": "3418dff06985acbc044650b0aa40d084"
  },
  {
    "url": "assets/js/22.11a569d4.js",
    "revision": "089e62a5ae860fc79e95a74da2541210"
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
    "url": "assets/js/25.9dcc79f6.js",
    "revision": "9a5c6813976e6fa6c8f724b0684141ca"
  },
  {
    "url": "assets/js/26.ed77d084.js",
    "revision": "9c720725678669880d242c475ae54602"
  },
  {
    "url": "assets/js/27.0e8d5059.js",
    "revision": "74acf35d07c5ac70118e66f250875019"
  },
  {
    "url": "assets/js/28.51ab5912.js",
    "revision": "7faa243fafc68c20b638df99f9e1eda8"
  },
  {
    "url": "assets/js/29.104eccca.js",
    "revision": "1dbb3cae1e9617674f5038c7e9adc87e"
  },
  {
    "url": "assets/js/30.5e553f1c.js",
    "revision": "3a18b9565e0872f5b70a21d3a075d914"
  },
  {
    "url": "assets/js/31.c328de59.js",
    "revision": "2c877163fa326621e40abd0448f62d67"
  },
  {
    "url": "assets/js/32.990901c7.js",
    "revision": "73ee16f91ed3db9c96bb1fce4a87d886"
  },
  {
    "url": "assets/js/33.d4e2f203.js",
    "revision": "102b5f199b24c5f643fcbc6de5a36d82"
  },
  {
    "url": "assets/js/34.b8df0b8b.js",
    "revision": "d14079836277cd13f9a1a78e9743fd40"
  },
  {
    "url": "assets/js/35.ca98eef9.js",
    "revision": "ed0011dc475eb53fab555deb13cee509"
  },
  {
    "url": "assets/js/36.ad097650.js",
    "revision": "036312b4ff889b4cec82e2f1ef9e25a9"
  },
  {
    "url": "assets/js/37.d27100d0.js",
    "revision": "e925beefdcf4233fd88d73803158f4fe"
  },
  {
    "url": "assets/js/38.1223202c.js",
    "revision": "5632c95b85a3e04d6db663bf22004f00"
  },
  {
    "url": "assets/js/39.89c66fdb.js",
    "revision": "7d58e4e1bf24e7f762133554e30217ea"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.b863a912.js",
    "revision": "83b3b8150195a62154fb25028c370cca"
  },
  {
    "url": "assets/js/41.bd593eed.js",
    "revision": "8206226e1ca5a561916bafdfd380d948"
  },
  {
    "url": "assets/js/42.f93158d5.js",
    "revision": "0b7ea18f197a9dee8ffbeb68bf7f848c"
  },
  {
    "url": "assets/js/43.7b061dd1.js",
    "revision": "0f88b4dc212e4009cc776c3fba4c9aff"
  },
  {
    "url": "assets/js/44.deac52b5.js",
    "revision": "020adc5056b0335e16a0a88ccd1e4846"
  },
  {
    "url": "assets/js/45.0c2951c1.js",
    "revision": "2f1b386d703371e1328c8a6308695c1e"
  },
  {
    "url": "assets/js/46.c8278d3a.js",
    "revision": "5c9940a48c094819b0d5913622752928"
  },
  {
    "url": "assets/js/47.de56eb6f.js",
    "revision": "4c01222d508715d3556b43ab62491f7c"
  },
  {
    "url": "assets/js/48.3074f59c.js",
    "revision": "822fa368bb04ddd0ae1822d2b8dec67b"
  },
  {
    "url": "assets/js/49.71ad0017.js",
    "revision": "d89d5e46176b7dfca1b13eac124f62e5"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.0b2f5f10.js",
    "revision": "9f6ce6b7c1cd0bfdf90527458003c227"
  },
  {
    "url": "assets/js/51.821a53dc.js",
    "revision": "7085e6d68ab0de2b4a734d834d03038a"
  },
  {
    "url": "assets/js/52.e0f28c50.js",
    "revision": "07221be80155ce5149642f2b8d0593a3"
  },
  {
    "url": "assets/js/53.ec307fc9.js",
    "revision": "1897d234edbbed42fb7067c3b9c182a4"
  },
  {
    "url": "assets/js/54.0334dbe3.js",
    "revision": "56388c31543cd0f22cd019d09bf815b3"
  },
  {
    "url": "assets/js/55.30bfc8d2.js",
    "revision": "97ab7511172784d8c455c36fd9416b30"
  },
  {
    "url": "assets/js/56.a6b234d9.js",
    "revision": "e051cc3f8f47c422c99a26ff29c416ac"
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
    "url": "assets/js/app.b5cc26ce.js",
    "revision": "a736f388f2a29048a23a2230150265a2"
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
    "revision": "b0f4c4a9cf382cc50f6577adac4db3c2"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "9ccf92b06a56988008cb86ec4c4c9dd1"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "3a03490e7abff30809c30cc1c14f4f1f"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "87558fe43934b77995f577b27d439e47"
  },
  {
    "url": "categories/index.html",
    "revision": "539c9befa73783046815740e42b9b061"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "1c5c20ac3c2a88e647395f9a6fe0d407"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "e3fd916b8d60d977f6221b74f8e290ff"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "e370f56517a8006c338acd5e2cb330b0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "118406d1bcefc8bc523e4d44c10398fb"
  },
  {
    "url": "categories/other/index.html",
    "revision": "a042532cb370da082ee23a231f027ba1"
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
    "revision": "e23f791d0982b4ad985eca594055968d"
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
    "revision": "02d82d6879e4fd6f35ce604bfdcede90"
  },
  {
    "url": "tag/array/index.html",
    "revision": "c386c6efd2179a78a9f7fbcb99a1f3ba"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "c7f9914b6ef8bd33b128482b6d9c14c5"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "e7d7e978867a6cbfbee1dce4527f10ee"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b1385d8133dc50f1d3a7abb693253ca9"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "e3a53b357b26c17267250481e14c5953"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1418682d73ae74371d2f25608ab18782"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "5548ce7b46f0981a07bd42d594d7ab93"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f23c45d4d74638dd4d4e55cf7a7022a0"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "204b752d92795b78cbe557ce251e17ef"
  },
  {
    "url": "tag/index.html",
    "revision": "086c1f3fed730bac48c149dcd5f1f4aa"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "b2e8e2f81d5dbfca387be8c8f4f26e63"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "b668cdd140ac0aa7dc1cf35024a1bdaf"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "e87f29f2255f3e9b970cd6737b13e328"
  },
  {
    "url": "tag/js/index.html",
    "revision": "90bd912e35aa62299203964491e7f13b"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8c3318fd57c774e013e73dee6ca85833"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "7438844ea4dff16a163d560c69a448b6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ffa1c8769be76da51ed1db4703ddf8e2"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "734804ec4a758cf4d70c8e1eeecb4b2b"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "f626df2b79c56dbf8b088daa3ed1313b"
  },
  {
    "url": "tag/project/index.html",
    "revision": "67261748dddf3999445dc9275a399535"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "f69b43d742eda2d81ce8e0eb61ffdbc6"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "07f71a7ee8254f2be766d79daf9d2715"
  },
  {
    "url": "tag/style/index.html",
    "revision": "fa54d395776c8f6daf8f7c69ce54eaa9"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "7c92853165eee7fe930aa46447d9864f"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "167080ddb4bf4b60a1841e66c7d4d528"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a9fe9ae185797fd3673fa6dc560712ac"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "752f2fa830c2c6183ebcfa25717d7292"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b47912b1b104d8a142fa0d9c50b0cafb"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "bade90e269bbc77c46b5adb769ae990a"
  },
  {
    "url": "timeline/index.html",
    "revision": "b28742af5a177f9be4a1b85c28cdfa89"
  },
  {
    "url": "views/about/index.html",
    "revision": "82bc88d750399906a07e117ee575dc26"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "34f7ace2e23cf4a6fafd8476767f8ace"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "0c8af6d29533a2edb1c41c8a3718a815"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "f1fd63913e4acf3dffb987521595c82f"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "f517ee43213662ec956fb7adbb430bec"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "f3235bc50888d8916db158a6b47d40d6"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "7bdb39ec7b161e51097bf1703005346b"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "0e60f0bd298926f3f575bf49eb8da39d"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "d71e01639921d3672c31727d5f2afb82"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "9a258d23c8a7ee74040f05de36abcb7b"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "cfe882bafa36041c2f1c8fe87b07c0e1"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "ecb0e5f6c60bb0c0a1b264790f274b00"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "a81e76ea5359d3211e7d0ad336180402"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "0fd27ac99fe62281963ad336c1b6bc16"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "e2337a0c8ced3d0de8813f51e67e0cd9"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "acc68dc271a57d3e41348e56b961a130"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "227df7f42003fe55b67a8ecab31cdced"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "2d4225bf890e83a2b69e575d41f13be8"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "a679fa3b6af2e4c707c589a10b9ec1a1"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "846190a01fed0c1f49cbc1e2d0f70e83"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "f97af2abd32a214c590428b3e34148bb"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "5a7833d3a629862350570ac649cd1205"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "5c73f954284ca263b51b15234e2ea1da"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "26e6d4cc922ab17e6dd98cdb7ee6c891"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "c05b7e85f8a9137efd0e76850ca49780"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "66eafb08e65f24a39cc1719c81ea0c63"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "d867359b5f8820044838f53fa1d563df"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "cf454432633ed08409364ffa56dea787"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "9cfc10c6e51bd8aeef3e4861bbaf5b30"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "7e63faaa294a34c6cd0e9e8847ffbc79"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "764aeea027557cfc0d9aaedf4470fbc4"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "45e98c688d95190df1a81dff66429bc3"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "9f18c023040d76cf98110009cc594e85"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "0a2b03b86f018aad5279546dab88544e"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "10b764e80894e54e02c5e2adb9bc58e3"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "9e0110ae7f050fe0653c974671d6338a"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "ea4fb39ece94c3367687a362bad923f3"
  },
  {
    "url": "views/project/index.html",
    "revision": "a952807ef0fb8d631030b71f156f8cbc"
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
