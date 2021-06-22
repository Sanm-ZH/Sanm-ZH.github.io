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
    "revision": "1cc5a5623b9e82d6dfd4bf4e15601fec"
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
    "url": "assets/js/16.1990ec13.js",
    "revision": "53e49ebc8839f689207832a96b373418"
  },
  {
    "url": "assets/js/17.aa0e0e4c.js",
    "revision": "b1a255ceda6be5ae41b12a3454f5c4d8"
  },
  {
    "url": "assets/js/18.bbc82f7e.js",
    "revision": "c984211c7a59d2c17043ebe2b9e249c1"
  },
  {
    "url": "assets/js/19.a488c086.js",
    "revision": "54f969a832619546867dd75a3683dc9c"
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
    "url": "assets/js/21.f2a3e9a7.js",
    "revision": "198e4553fd721ccdac1a74a9bc634222"
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
    "url": "assets/js/24.0571eb57.js",
    "revision": "926ba19c5613da424ff758034ec68661"
  },
  {
    "url": "assets/js/25.1e00733c.js",
    "revision": "e61a0a531eac98d467a48b0f419f9ec5"
  },
  {
    "url": "assets/js/26.948b5892.js",
    "revision": "ab8b9e9df4bf0e8b8844f872b2843356"
  },
  {
    "url": "assets/js/27.07db2fbf.js",
    "revision": "80bec0d7e47b628bb37d878c2b8318b7"
  },
  {
    "url": "assets/js/28.5240d613.js",
    "revision": "0c940ae882388b2c009e475ca5df4fcf"
  },
  {
    "url": "assets/js/29.abd68616.js",
    "revision": "49b42aff7e0ae5e41ab2956df7d33f81"
  },
  {
    "url": "assets/js/30.03ed2304.js",
    "revision": "0cd657c3e3389d55b33ffc50bce07149"
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
    "url": "assets/js/33.d4e2f203.js",
    "revision": "102b5f199b24c5f643fcbc6de5a36d82"
  },
  {
    "url": "assets/js/34.e8306831.js",
    "revision": "f031387bebf58a16d1494473b0d19639"
  },
  {
    "url": "assets/js/35.5958c9a9.js",
    "revision": "97ffdd191123fed695d422fcaf7496e5"
  },
  {
    "url": "assets/js/36.1fa0b963.js",
    "revision": "80cc32f41341194a28fe023023688943"
  },
  {
    "url": "assets/js/37.66575aa9.js",
    "revision": "81054824d1635489f95687876e6ae919"
  },
  {
    "url": "assets/js/38.411116d8.js",
    "revision": "229f14e37a60323e906477f01f4c9795"
  },
  {
    "url": "assets/js/39.50208594.js",
    "revision": "970e09a8dccdec51481e81fa49c5584f"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.2cc6fa08.js",
    "revision": "0c3800ea594316f83460cadb04df659b"
  },
  {
    "url": "assets/js/41.d022b11d.js",
    "revision": "ba550db713e9e97edd5c13746114d310"
  },
  {
    "url": "assets/js/42.66cec1e8.js",
    "revision": "cc3a12b3e9c5b1ee93e7f001e556c8ba"
  },
  {
    "url": "assets/js/43.bc62f6e8.js",
    "revision": "3a858101d9286065bc8fd52c9b6b2e4b"
  },
  {
    "url": "assets/js/44.a026391e.js",
    "revision": "a2f133f73486a3daa133b302ed06bced"
  },
  {
    "url": "assets/js/45.54cf9881.js",
    "revision": "52458acc25a5b72af3dc6c7d0d3ac090"
  },
  {
    "url": "assets/js/46.3f6efac6.js",
    "revision": "79903c11b7ccd02bdc28cb69109598b3"
  },
  {
    "url": "assets/js/47.c60891db.js",
    "revision": "126cc6583e99612fa09fda19e17d0004"
  },
  {
    "url": "assets/js/48.b642355b.js",
    "revision": "c714b433b2bae31f63ee088950ed7a81"
  },
  {
    "url": "assets/js/49.18982891.js",
    "revision": "972e2f60d73e630ed6c8d0787e922879"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.6673fa9c.js",
    "revision": "4018e08ecb6ffb57361c0744a3fc01f9"
  },
  {
    "url": "assets/js/51.e98328d5.js",
    "revision": "ead70151f11376a61f5963420b2b3107"
  },
  {
    "url": "assets/js/52.de7af6ea.js",
    "revision": "2388e274bfc2bba7cc8496539ff8edcb"
  },
  {
    "url": "assets/js/53.afe1fbe4.js",
    "revision": "89807ac5c1d21c0aab17cb50943f467a"
  },
  {
    "url": "assets/js/54.7969f0cf.js",
    "revision": "83ef865b1893bc207a2dcf14d73b57b8"
  },
  {
    "url": "assets/js/55.b5138612.js",
    "revision": "db6b9ca36713af98389180f81a9ead31"
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
    "url": "assets/js/app.4a5bed8a.js",
    "revision": "32405147c2ec8b4758dd9612ccb77583"
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
    "revision": "7f9454442088cd767c1c72e6a0860143"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "d5d22ccc867a7a13ad8181b67ddd631b"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "fa4f7a3cc095d498da6d934a977bfc83"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "2e48183b675f24141a3572bcc3e14212"
  },
  {
    "url": "categories/index.html",
    "revision": "babf02a2808c8cae98183c1e5f572d19"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "1af6175164e839efd7d40d06888d4544"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "6b336c969347eea575cf4437770c5393"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "c037b5311f1778b4e2db30d6d662ce31"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "fa160491509cf0cc97a9c487c258715b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "b016f671869a925055a68461e314fba1"
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
    "revision": "8f01803546275b4e590fd5abff4abeae"
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
    "revision": "96547bef3b96fa24848e90d039150ea1"
  },
  {
    "url": "tag/array/index.html",
    "revision": "fc70fa9ac0b957ee375dce89978ab7e4"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "6cf9d986226c67f03a5367a30f79a947"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "d254b8b894000e525b7ab72ec5024178"
  },
  {
    "url": "tag/css/index.html",
    "revision": "adee72f583ee596bbd5a8da2d6382072"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "412950fab40c5855b46ce2c1a23ad05a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0f92b26235a3ccddabe4bdeaaf88aeff"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "46736763991b5f8d8f5303d07530ded1"
  },
  {
    "url": "tag/html/index.html",
    "revision": "aa76dca4f996dfe1c9f7a35ecb381175"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "5d2b59804537bb2ad63bcef6971714ad"
  },
  {
    "url": "tag/index.html",
    "revision": "5daf0460bc3a9aeecccea3205c2627e9"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "c54f39fee37489b7ee1fabe488937cd7"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "20e51363765a9e2a42065846c6448947"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "899dd1f0482a5227f2d1d934724f8d46"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e36896bcd5ee1c20b3458249078a28b2"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "4a9f68fcbace46a6e05bd2b844fef116"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "e92bbceabc7455606f31daa2f02c227b"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3b2ba1001ed120b02d2340acd9b86100"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "8b1c84612937cbbc84a30b9784c6af2d"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "4c0d9819d9a601885d309d5e98836b4c"
  },
  {
    "url": "tag/project/index.html",
    "revision": "632fc2198f288e47326eaa14749ae3fc"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "95c92a8558b3bdf4171b74eb34ae1148"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "9b1bd2edd53f852be01d7a6796625ff6"
  },
  {
    "url": "tag/style/index.html",
    "revision": "df8969ff00fe4bea6343d1e8c2ed79ba"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "7eb1e6955fdd7f433f97f16620e69203"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "52a09dd9e7d4ae7e4b5bd82e4debce46"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "52e9f3ed99be7af6aebc0afc137931ff"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "def728f4044f66f2c8dcc00335cb8a6f"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d302d4802c89026bd4365a2425a96616"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "e020826752b956639a5fefe2c28246ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "2bd60a81d1352cddfc332a79c244dd08"
  },
  {
    "url": "views/about/index.html",
    "revision": "3e9a8318008838532c69220d85046f71"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "1cf37e1df52487bce4e5261208694160"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "1da968e841c9c40af45ba3035b64b68c"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "44aa5d4f1fbb1f4254707980033345ef"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "764a3a67d54a5ed843730b1a63b20bd5"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "cad826d51d904da207c01a6fd0ee7fb5"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "720afd026e3c0b92e4cb7cbb911551c5"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "e6b48df1d84d809a11997e14e8b840ee"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "ce4888304e55e212fe74ac05b2d84813"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "a1af93622ddccb4824f6ddcd5b9423e3"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "2d938bc196de02103411b4a3574e940f"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "74994cd1ae884f89fc9c7b31b6cc4942"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "dca7c3f9cd471749b02bf5d5a8aa76ce"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "b54673c93911b9d8e833b2ec93c5976e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "3c8d3eef0959029595d3b3e7dbb3c012"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "5ac0f1601cb8d6332be3850d4dd98ab3"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "21d1da1501e7af18553614c03d7b83ef"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "a28bdd7b2f4501c0564a56d37dedff43"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "fb9ca82a69fb1d76d428c1807fc04b69"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "539cd6bf33972b01057018cbcbd575ed"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "88aa042e1fa5c2e1bddef8ac00bb5f48"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "7ccf784f35d1d049647087e59e992d5e"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "e505c792d6f315f506da307c44361de6"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "456385b05b2172a119d252a6b0857050"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "bf6f4eb5ed9f32a9506cc08be1fe78b5"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "863d21ee240c798499591a5d5ad97e6d"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "bc6e0d96d279c0cf145ff1524f6a28e3"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "9dfa7ea150144b1ea5dba7c49c38ac60"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "0c04f72012317ade15738e80be402c81"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "7c2ad329cbc401cf1b2e89029ac624c6"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "45b114bb09a99d0ebe8ed0b4d18deec1"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "f5dcdd50082ca7b69fdba085a9b3fc1c"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "e3f5f9af87ff8a11abaa0a022fad02b2"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "20d3cc364bf00543b7a904e6cdc14732"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "d89955745a8fd7885f93bad8bb51994f"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "bd5d6550d6f81073080bb9361b571fe4"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "b53fafe458082d426bc2d38b408c5190"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "fb4996d627aa76aee0e8528a46988594"
  },
  {
    "url": "views/project/index.html",
    "revision": "d06e2bbe5598b2e21acbd4a789a724fd"
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
