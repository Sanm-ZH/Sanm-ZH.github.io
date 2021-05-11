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
    "revision": "77cc0ce0840bb6c2c2739abc9824be0e"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.2b1ec754.css",
    "revision": "bbb5bec38babcddeb804427aea7b9a8e"
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
    "url": "assets/js/1.650b4186.js",
    "revision": "f8418141f41614155406525eeb8b4334"
  },
  {
    "url": "assets/js/10.70acf79f.js",
    "revision": "96c72a058d362119db6c5080319bc9b3"
  },
  {
    "url": "assets/js/11.9a7089d4.js",
    "revision": "c1e62285faf0693ff10811ca427fe769"
  },
  {
    "url": "assets/js/12.dae79cbd.js",
    "revision": "7d70747f712995252e632ebd94e8c65f"
  },
  {
    "url": "assets/js/13.e80dfafe.js",
    "revision": "f13a8c3cb3cd619aa5ead7d9a93e8e0e"
  },
  {
    "url": "assets/js/14.d278818a.js",
    "revision": "4627881bbbb4f42e7ee7b180dd25b069"
  },
  {
    "url": "assets/js/15.25ee8ace.js",
    "revision": "53d1de72c7fe68ed4af1f86040ba82fb"
  },
  {
    "url": "assets/js/16.64c7b502.js",
    "revision": "2140c23074ac59d2dedb6016bf12ecf2"
  },
  {
    "url": "assets/js/17.672ec1e8.js",
    "revision": "baaaa74cf862965f6214502e50898171"
  },
  {
    "url": "assets/js/18.90996ff3.js",
    "revision": "829f74423396790cc7316a6eddb306df"
  },
  {
    "url": "assets/js/19.7b51cc51.js",
    "revision": "be7cd50e9698931580d7c14d41588fb9"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.b07510fa.js",
    "revision": "f9fb3f25796c134ecdd8a1ed9d1634a1"
  },
  {
    "url": "assets/js/21.28d2daa2.js",
    "revision": "fcee4d436324a67aed333b3111ef4963"
  },
  {
    "url": "assets/js/22.b8a48b33.js",
    "revision": "68ae9e2d92139dbb3df148823abe9688"
  },
  {
    "url": "assets/js/23.d84cd2db.js",
    "revision": "234c7c71da242e31348b98aeef77a5e1"
  },
  {
    "url": "assets/js/24.83b153fb.js",
    "revision": "3c3ea878948a7dfc42c6277a017396e8"
  },
  {
    "url": "assets/js/25.32c42952.js",
    "revision": "ee5d042fac21d15e9ec1d96962e11281"
  },
  {
    "url": "assets/js/26.8492706f.js",
    "revision": "4d1cf6ca7e2d3b99648e1c450554ebf1"
  },
  {
    "url": "assets/js/27.feccda5c.js",
    "revision": "dd49b3d34601e95fb7a44be94d0ff1b3"
  },
  {
    "url": "assets/js/28.fc8bf3fa.js",
    "revision": "f19a0ee5bd7f81e7c1e8666d56e5f80a"
  },
  {
    "url": "assets/js/29.e09ed680.js",
    "revision": "dc66eeaae5feb13b6e9bf01deb47ded4"
  },
  {
    "url": "assets/js/30.26a9d865.js",
    "revision": "7cadeb2c9189b70db0cccd87d5d79dd8"
  },
  {
    "url": "assets/js/31.1615d292.js",
    "revision": "39d935208882c7f4b2db799f63f841c2"
  },
  {
    "url": "assets/js/32.b0fcb385.js",
    "revision": "5220b689974e9325555ee333c2d920e2"
  },
  {
    "url": "assets/js/33.4e88ae77.js",
    "revision": "cf92508c4d702984006d8a37213911f2"
  },
  {
    "url": "assets/js/34.e9fb17ec.js",
    "revision": "933e29431aa9685d41a6dc1525b17c3f"
  },
  {
    "url": "assets/js/35.d3c2fcc8.js",
    "revision": "8e3f3cf704dd1f200ad2990a1eca7273"
  },
  {
    "url": "assets/js/36.33171cae.js",
    "revision": "4bd9afe1aa3b4bae3c4ade1a3e9ebb53"
  },
  {
    "url": "assets/js/37.dca7b0fb.js",
    "revision": "a568d732ddab58c830f7849db26ad841"
  },
  {
    "url": "assets/js/38.c217cfbf.js",
    "revision": "b031f84e4ac47b9645715e402c6f6a8c"
  },
  {
    "url": "assets/js/39.36ecb40f.js",
    "revision": "76163a6a75df4cf153a72bde427949e0"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.bd26aa5b.js",
    "revision": "9277348f7691017ffa3db0fd05bf1b78"
  },
  {
    "url": "assets/js/41.cdeec977.js",
    "revision": "2d67d894f2466528bad91c1b3dd899c5"
  },
  {
    "url": "assets/js/42.cfbea425.js",
    "revision": "79a8af6de6008322cd0ce7cf29b24876"
  },
  {
    "url": "assets/js/43.a06eeed3.js",
    "revision": "7c29a0769b5e1d345d4d8ce01fa2e4bd"
  },
  {
    "url": "assets/js/44.8979bcf5.js",
    "revision": "6711ab9ca618ef6fb773d8612df99a32"
  },
  {
    "url": "assets/js/45.182b5790.js",
    "revision": "c8000b3fcaa16b022439eb6e1af4b902"
  },
  {
    "url": "assets/js/46.c993c01d.js",
    "revision": "97c573bfe5031dce95e3638b8eec40be"
  },
  {
    "url": "assets/js/47.14b0100c.js",
    "revision": "8a31cb6dfc913062adf04ae26536f8cd"
  },
  {
    "url": "assets/js/48.bd53863d.js",
    "revision": "8fbbe61f9efa874117271170dc4c6c64"
  },
  {
    "url": "assets/js/49.15de5350.js",
    "revision": "ee33d64d97046440ccdd05dd61af992c"
  },
  {
    "url": "assets/js/5.12dbfa45.js",
    "revision": "155722c896205ba3d5c5ac1e113fd56f"
  },
  {
    "url": "assets/js/50.0fefc14a.js",
    "revision": "316885bc5ce5ab89873fed37db9c350e"
  },
  {
    "url": "assets/js/51.aeebeae6.js",
    "revision": "b8813c2c90672c8682d340f78ba45652"
  },
  {
    "url": "assets/js/52.882ab1de.js",
    "revision": "2fab3bfb11016a82b1212dbc3f85a4b8"
  },
  {
    "url": "assets/js/6.269d5922.js",
    "revision": "232e26c579028b946ac9097554b328b5"
  },
  {
    "url": "assets/js/7.9d35b2f6.js",
    "revision": "1b547d164df16e5e7fbf0d5282da315a"
  },
  {
    "url": "assets/js/8.a1b874c8.js",
    "revision": "da6fc8a99a45bf458840332ae398e381"
  },
  {
    "url": "assets/js/9.bb076b48.js",
    "revision": "322f3db24f9315fcee2aae4ed469f53d"
  },
  {
    "url": "assets/js/app.a627779d.js",
    "revision": "c7785e8d1c283102cb7d47f582041218"
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
    "revision": "f787ea02f327e74ecf1a4c53e9d3e584"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "8ef6eeed25ca29aecb5bb5fdbe675906"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "9c53f09bad9a691925e56aebca8953f8"
  },
  {
    "url": "categories/index.html",
    "revision": "24601281ba618e4362f965d989a00de3"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "38ebc387d3d1b69c6ddcce1108c74d88"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "2f406025c4dd4ec7ef32c8c74d000bd8"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "625a8e2b2baa8db06918cd65bc6ac8c6"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "e982f10a774df5d219803e7160636821"
  },
  {
    "url": "categories/other/index.html",
    "revision": "6d8d6b8ccc737f68d5d3473d0e7287d4"
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
    "revision": "6c621d5a9eb4bbf756e63845dc253a34"
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
    "url": "tag/App/index.html",
    "revision": "6989df5930f8757f55743e0d3f16c674"
  },
  {
    "url": "tag/array/index.html",
    "revision": "917bb16dfcc12c711c75361695e1eb96"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "63427ec6b09ea6c78b0a1069d0f8c69a"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b838e93e6ffffb21ee6c3c3d921caeb6"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "9da034faccddee92600341214bf49bd9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "42a4a283ce20ea026c676c2f41cbfdc5"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "76e3324c61abf7d85aa174c014df1a1b"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d2e886304efa83e07fe5659530aea376"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "6b255294e8fdcdef090f2e71e4a68bab"
  },
  {
    "url": "tag/index.html",
    "revision": "fc26a9d12bad7a8c5b4d1855e793c9a3"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "816a269c5cdf34f2451e3d3953d1948d"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "48181d328ac1394c2794a532545306ad"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "47f5c76c7aa983e37ee05d1ac96ed915"
  },
  {
    "url": "tag/js/index.html",
    "revision": "23f955d534d7d24d664b1a74f044e658"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8abb9d2b46704ff30ab7c4ea2e9054fb"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "59d363069ef9b33db4b8277026e38327"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "7f1b0bf69c018e52dec88727acba3c48"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "7169dcdd406e66e28c7a127144665f71"
  },
  {
    "url": "tag/project/index.html",
    "revision": "4a797b936254d6073c5ce43d9a77a5f3"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "b3a68b7fd2d93d11f7d1ce1c4ca35c10"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "53ef19010d6211267385430589fd0e67"
  },
  {
    "url": "tag/style/index.html",
    "revision": "63745c050b90cceee61df09032274961"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "3120adfd26f7c156d4f5d6b07a7de59a"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "d7e2d91b882046163635921c82d9653b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2eac6a9548dbc97d4a452272c2913b55"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "1fc8a00ddb744cdf9c57d869ed0de291"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "4731f7f47882895a82bfcdb4e78107f0"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "0e61b9e0681815af9686d80a0b812b3b"
  },
  {
    "url": "timeline/index.html",
    "revision": "a61ad4b20538838e28dd5df5b837b5f6"
  },
  {
    "url": "views/about/index.html",
    "revision": "f97e8825d605031bdc728b999a4b8180"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "e55b05e5a3b79f05eadd13227ae9dcb3"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "a81c4a41c8f17dd805da494e710c9186"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "403bd272a03e2ae746a12b8b5d65c570"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "de41150c4b1c1163042ed578fff92c40"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "f8fe14e38209fa8a8ad1e23842346d1f"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "a529beac6b972460f37ebb7c97eb94fa"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "7a74927484d0d62091a0534f31a597ca"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "f7277e184fcfd17c3496c5628548d881"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "7104eefd4f6b47d4cb9975666eacee2a"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "0aa80feb55a0e7f1df8d82c151020082"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "df98644e7086c506023cdfa0c39dc027"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "7a4d3e3336afee33d907483313acca09"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "0ae4f617808a4f57630be598e0e0e817"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "f2e1979085f82833fe26ea750b040dc7"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "3b4c50740acc658ddc8e5edc409b9aca"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "67b275f354a7eeb973e0e782e003deec"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "27929f279f6e7813753f813c2a01f468"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "5c3d281bb6b9b1804b5b59d703b3a509"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "8fd0b6d44cd442f223e5224a37ec629f"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "3c3a2b662f80e3a15c23bd3276997c12"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "c70e3795d1f46098210c149464fd6dfc"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "f2cd4b9f727aafcce78ae5f3efe6323e"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "8897b64f813dd99b84012838918fef0c"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "f38d57d81b5516f1b2829675a93bdcb9"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "f626eff6e43706518f7e214e80c1c87c"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "453a9f0ad45a6039ab5f0eb7d7c0885f"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "9d7fd1c89c62056e7b2f30575e61b150"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "1ba888c1e0ff550f3a1f51002cdc3d68"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "ce2772c0f12f56cd7e4752f99f8810c6"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "108818661ef24d4b08d47c6b8ae0fb0e"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "3c3d458ec858d97193071f2dfbb80903"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "35884ae85b59026dda323d3dd5c2ebda"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "81276ebe31a80b848a899185d3b28942"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "d8ea5ec6a32115686222646a4597394a"
  },
  {
    "url": "views/project/index.html",
    "revision": "f503d2e2dc306e650de511ef5be1d660"
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
