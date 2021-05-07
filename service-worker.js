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
    "revision": "56ec53cedb691864cc438344d69e7afa"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.bb34b5fa.css",
    "revision": "ae3d6bae98654aa1133f4c49f35ebc97"
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
    "url": "assets/js/13.64eaf1be.js",
    "revision": "7da6cdda865cbe730c9ba55fe58d1460"
  },
  {
    "url": "assets/js/14.e42f856a.js",
    "revision": "1d4f29323a5837d19d218ed8ebff270e"
  },
  {
    "url": "assets/js/15.25ee8ace.js",
    "revision": "53d1de72c7fe68ed4af1f86040ba82fb"
  },
  {
    "url": "assets/js/16.21f45953.js",
    "revision": "a960a15b3dc9747acbefaaef3344de12"
  },
  {
    "url": "assets/js/17.ba6bb235.js",
    "revision": "32b2776dc175f7225b3459ee74169179"
  },
  {
    "url": "assets/js/18.27fa268e.js",
    "revision": "d39f03b4d30d5b424177f8eb3ec71080"
  },
  {
    "url": "assets/js/19.2c01303c.js",
    "revision": "1860657513c2a9749cd07217515b5c9d"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.5b5c86df.js",
    "revision": "f96ed99bb5806ac82fe65409798d84a0"
  },
  {
    "url": "assets/js/21.c84f758b.js",
    "revision": "18bb58a4151da46ac562d66b616f5376"
  },
  {
    "url": "assets/js/22.5c8020b3.js",
    "revision": "096b4572a360d3a4fb2ea05d316f0406"
  },
  {
    "url": "assets/js/23.6652c914.js",
    "revision": "d5fd76451944e5a0e8ac05abc3c87953"
  },
  {
    "url": "assets/js/24.493678b4.js",
    "revision": "7511a5c8df872a496f6e7602b3562f24"
  },
  {
    "url": "assets/js/25.60bf9772.js",
    "revision": "97b7c6897be19cc9b4d6082a20bee4f9"
  },
  {
    "url": "assets/js/26.7e1c0d6f.js",
    "revision": "6f6417fcaaa5657c55abfaedc2fa1c70"
  },
  {
    "url": "assets/js/27.517737ac.js",
    "revision": "00f30547a3ce786c0c5e210cc1ea19a9"
  },
  {
    "url": "assets/js/28.1858b04d.js",
    "revision": "5b115711d0277ebadfe8681b6e9a1bd1"
  },
  {
    "url": "assets/js/29.3c64bf9e.js",
    "revision": "2b6762a4da32a6719dec3a01e73247ce"
  },
  {
    "url": "assets/js/30.c8b59f63.js",
    "revision": "235aab3c6c0da9b443a631a6cce28d9e"
  },
  {
    "url": "assets/js/31.ef3925f9.js",
    "revision": "392cfb4fe3511ba93922f11908c9e7d3"
  },
  {
    "url": "assets/js/32.c923d325.js",
    "revision": "8a578d63d450bf0ba92381e71129e27e"
  },
  {
    "url": "assets/js/33.365f7d3a.js",
    "revision": "163fe1c243517b1b445fded2d1eb4018"
  },
  {
    "url": "assets/js/34.3b11de9b.js",
    "revision": "6bda36a258c8bd3ed932a5f340d12030"
  },
  {
    "url": "assets/js/35.6e31b007.js",
    "revision": "0b112e5a8e96922135dd0c4c9e4dc064"
  },
  {
    "url": "assets/js/36.6f3b9788.js",
    "revision": "94ac48773caacff912606eb6982b01f5"
  },
  {
    "url": "assets/js/37.bfd0913c.js",
    "revision": "40e628eb18568b6543730d5b7b5826ac"
  },
  {
    "url": "assets/js/38.dd2edb5f.js",
    "revision": "687d08c5901e1c7c4170fcc136cd9ce0"
  },
  {
    "url": "assets/js/39.76fb2869.js",
    "revision": "1ade2143ed84cba52d7ee685a3dae129"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.18c32201.js",
    "revision": "fd32f4a3a462c0c231460e1d32a1327f"
  },
  {
    "url": "assets/js/41.bc794442.js",
    "revision": "7a9dde9397a5780bf75ff327371fdcdf"
  },
  {
    "url": "assets/js/42.1f6220c9.js",
    "revision": "ef8f38a6c0129a03c274fd5ecc4f0c0c"
  },
  {
    "url": "assets/js/43.341b1c08.js",
    "revision": "1a5785a474e2a579692a5c193f8a6c16"
  },
  {
    "url": "assets/js/44.560dcd2b.js",
    "revision": "b5245c3f3d5787b79fe3bf131977aa23"
  },
  {
    "url": "assets/js/45.456f7e70.js",
    "revision": "50625617b329dea2701033dd425bb97a"
  },
  {
    "url": "assets/js/46.ed848806.js",
    "revision": "2fcac94425aa8b8c7c4c63d0cd82a7fe"
  },
  {
    "url": "assets/js/47.7046644d.js",
    "revision": "516b6b39909c64b161020b3dcc53c6fb"
  },
  {
    "url": "assets/js/5.12dbfa45.js",
    "revision": "155722c896205ba3d5c5ac1e113fd56f"
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
    "url": "assets/js/app.cfde18d5.js",
    "revision": "c5ffcfa85a4b9e2427ee7a079c19acb5"
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
    "revision": "46d6957453d28fce58fb462770e3653a"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "03f345a648fb9f9c8696bbff08308718"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "980c6b1bae7b3add6df65232b451a63b"
  },
  {
    "url": "categories/index.html",
    "revision": "0af81f90c8894695aa8d0d20f111ad7d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5f70917dbdd3e85f91679f847b8af9fb"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "968a297a987ade654b11ae29693bbdbb"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "0363b8a6f5c8f2a44a38cfe994b6714f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "58e010c538bdaa95c4fd9c3861934c24"
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
    "revision": "575e101e799d8cd92c1865d45ed7f683"
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
    "revision": "989d3a652ae2411e7b1477eb731394b6"
  },
  {
    "url": "tag/array/index.html",
    "revision": "2397f9fdbded5245eccbf91f96e5433f"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "a6cabdd601d56c1c6cdb02e5f6e30b23"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9f801c040f98e5132e1535217ee5ea72"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "514e4e5bc6ddda953240cb6361d77812"
  },
  {
    "url": "tag/git/index.html",
    "revision": "db04e32922c79fa18c5d79e793d1a9f2"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "78b8bb6e2f3ead23548695489c82e6ab"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7cf9620a2aec9bcf2d520c16e164641b"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "1c792e9997875791df2928167482576f"
  },
  {
    "url": "tag/index.html",
    "revision": "d3a64ff82be9826a664c645c930130f6"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "eca9e20a25e49ce887120385980fd78b"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "96b1052ee3e108419127c3cf19302216"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8158877ef0e7d65ff016bb8e89db97f4"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8711ba8f0b443600582018b2bb62821d"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "d038c7723f6e312004d5099eadac1e0e"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "5606a70fcf88f6afd19e13bf3d1fbeec"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "3bc0436f813e84c330d1395bb4cd69a5"
  },
  {
    "url": "tag/project/index.html",
    "revision": "c4cc3af5cc981c9dbca6f75be4cd04ba"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "3223b1902a8a2459c2884c0449564887"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "d814d131d3234630514cc3124bd20aec"
  },
  {
    "url": "tag/style/index.html",
    "revision": "1a7dd8b295e28df98fe70a175fdcd470"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "fcc49fecb7839e1a96954f59cda230ab"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "52e8343ab489031e64b0657f7531f70c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "ee57b431c5b442fe0580b44170d2e41b"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "40387c0b1f3edda57370bf3b6b4d6fb1"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "491a0178096c5f4e8ddbbe7e2f34308d"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "2c5052108597370c62a4f14ced88aeff"
  },
  {
    "url": "timeline/index.html",
    "revision": "0277e9a833b143805e3e0c1ce99adb9b"
  },
  {
    "url": "views/about/index.html",
    "revision": "a54e7fcda20e722e066f6240badcf836"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "f498bab8c66bcb28018371bfd53f1cc2"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "c473e61b68dd2cbf526e39d30f22a78f"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "8df22b9eb61a3ff91bdc240d9b1bb568"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "161ad2c873c676c00527863e5c38fd1e"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "e5aaf5b7df5685acfaffb04f21cb58f2"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "98b1251d7124ca5c30cee2d582fd5fd9"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "83357d817be9b65b84d0c4d2ec091df3"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "6c9611717a499f34755bee0efb55192e"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "1146b8e53c9c327016e7f8ea56a70fc4"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "414cfb8de642093a09acb33563a86c47"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "0cd03ef71b002c8740b2e1e6bda441cb"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "e5c62886eefe6e99d840d64aab779655"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "f508f5967fc5aa1671506a6e74c64c77"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "4fd260d5b668a7a7643d916443627d4b"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "f86ede32a716770e6c6e681297deb315"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "ed98ff86f3673c410bf5c7a3a7f34aa1"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "5d0b047727c9eafb1cc11b0a94ac9aed"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "ed98ff86f3673c410bf5c7a3a7f34aa1"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "69372813d1fe59b42a58bb70cfcbd8ed"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "de735db8292d515b7f70c0c8c1cfd99a"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "9c884889e7c4d49ce68b7455ac7cb42a"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "0d7b0338da0f534b46be25e33ee36135"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "cd2651036a0fcc43dacb2bfdb13409f1"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "f6c61e7f7732ae97dd4e69162fef3a3a"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "2f3c454aa38110963d5bcd91caf28af8"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "2d7311c1f09dfdebf382d983a05e812e"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "90b589ac624717672f6bbad05cd90e43"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "0edc3dfbc579d328072d3386c6e8709d"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "c9acef8c91efdf678fbed462109208ac"
  },
  {
    "url": "views/project/index.html",
    "revision": "a7b748b2388141d648fd5263d05fe5a5"
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
