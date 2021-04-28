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
    "revision": "32aa52b7b673d1e64abd3cf126b00911"
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
    "url": "assets/js/13.be29fae4.js",
    "revision": "9245a271fc74d14402bc1b0aef36b8b9"
  },
  {
    "url": "assets/js/14.71d6e3ee.js",
    "revision": "3e8173c1729c338b5b6262e17dcef5da"
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
    "url": "assets/js/17.1154bca2.js",
    "revision": "b237dad9ce9b26265d6ce61657594b7f"
  },
  {
    "url": "assets/js/18.b310694b.js",
    "revision": "c1f1173e704b7aa16e4f13b6e0dc15be"
  },
  {
    "url": "assets/js/19.c25d9645.js",
    "revision": "957eeb76a4e5d9cbbba06a692a1daa53"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.c0462edf.js",
    "revision": "316a39ed4371690f7290b82d1a6da3f7"
  },
  {
    "url": "assets/js/21.aebabd0d.js",
    "revision": "4be25a95ee74a832a41aa34ba343d5af"
  },
  {
    "url": "assets/js/22.f88784c0.js",
    "revision": "1d005792be59c99ec2e093d6efdb2a11"
  },
  {
    "url": "assets/js/23.6652c914.js",
    "revision": "d5fd76451944e5a0e8ac05abc3c87953"
  },
  {
    "url": "assets/js/24.d4b24d6d.js",
    "revision": "28448af50f6b50892d7fcd805e7689df"
  },
  {
    "url": "assets/js/25.ce5cc369.js",
    "revision": "ce04fec839dbe904b97db87f1fa99743"
  },
  {
    "url": "assets/js/26.153fcc2d.js",
    "revision": "dc45492fdd0eb95ce094c44bf76b1554"
  },
  {
    "url": "assets/js/27.2abb6b5b.js",
    "revision": "35a092cefd1748b930b8fefa6791e8eb"
  },
  {
    "url": "assets/js/28.41cf9789.js",
    "revision": "60aa3daa718a67202f34595d75788667"
  },
  {
    "url": "assets/js/29.b51299fd.js",
    "revision": "e5c6b2cae10dedc1211c17ad3f1b2c9e"
  },
  {
    "url": "assets/js/30.90c65033.js",
    "revision": "574837d5a5a799e1ecf7ba0d7b357def"
  },
  {
    "url": "assets/js/31.1d10d7e9.js",
    "revision": "5e78579c310ad03e0d76ff833fc79d9e"
  },
  {
    "url": "assets/js/32.10c0122e.js",
    "revision": "3468609e1ba596626ff1e1bd5ee6e730"
  },
  {
    "url": "assets/js/33.af2af213.js",
    "revision": "b205cb8199c2af9e383af6fb8c8770b5"
  },
  {
    "url": "assets/js/34.ee727bf5.js",
    "revision": "e2670d52f740524e380e9215380d54e0"
  },
  {
    "url": "assets/js/35.cf487c5a.js",
    "revision": "1f03a456fbac508a0682644e3a6d33dd"
  },
  {
    "url": "assets/js/36.b04bb95b.js",
    "revision": "b52985d2c87793ba138577bdc485e96e"
  },
  {
    "url": "assets/js/37.314f57cb.js",
    "revision": "fdf588aeaccd2d2a51d5f8b7394e0674"
  },
  {
    "url": "assets/js/38.49a8f536.js",
    "revision": "304ababacb05f495a83695a7be387bc7"
  },
  {
    "url": "assets/js/39.ab387f45.js",
    "revision": "907a51946271507aec0d18c842518a57"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.394312eb.js",
    "revision": "9d395510b6b3fa2ff1b7f569f9e4322f"
  },
  {
    "url": "assets/js/41.158ef0bb.js",
    "revision": "573d0abdcdacbea83df2f9208d813933"
  },
  {
    "url": "assets/js/42.87ac44d2.js",
    "revision": "4fcec34b14c8a9dafe7382a34383e94d"
  },
  {
    "url": "assets/js/43.2766672b.js",
    "revision": "05868a0de9da3fbe0e4c44a80a9116b9"
  },
  {
    "url": "assets/js/44.bb9b1a6c.js",
    "revision": "1e93c981662ecf187b9df5f031f5d894"
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
    "url": "assets/js/app.c2ccbde0.js",
    "revision": "044d1486cb5bff8bba6ae8b044cdf874"
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
    "revision": "7d3b87fb233d2fb9018a2be2b6ce60a3"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "ccf050be66287740c3286a1b9c027c25"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "1c85dfe23f3660c9e780119c5be107f7"
  },
  {
    "url": "categories/index.html",
    "revision": "6e7972fc8822113c8d08643ad2ca7780"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "034e996f6be05652d1bb417c2a126c1a"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "88c707eae5975c26656418f77b8946a9"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "d8da02b308836a2c02a68af1db9c9522"
  },
  {
    "url": "categories/other/index.html",
    "revision": "0ca942b35ee94f8cb978c72350c12340"
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
    "revision": "2fe352d8dbddcacd51f34b292c586bdd"
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
    "revision": "0ea6e76f3e282b238c3781b6388f4d75"
  },
  {
    "url": "tag/array/index.html",
    "revision": "f3ad9803f05a705427079094cde662ee"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "13223b499c3e1a9e3e4e5d5e99c79abb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "cc7ffc2e787cc2892cdb3def90697c6e"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "3faaec25cbb27a6ef3e6d874ae5e6a77"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2c7e7345a5eec18768f57e8c49bf3f73"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "622d0d7b662fdcbb2c30d7108d1d9a2f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "655797d1684be006fed6e77d5b68afab"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "e5b18a3eab176ac8a832ba5a5ad1a0bb"
  },
  {
    "url": "tag/index.html",
    "revision": "c7ba27fc35e2a5d427f751483faa5a9c"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "fa4e3449e4a950d5e3d88b5a52aabbdf"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "f92f8bb1676ec908366dc77b0453ecec"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ca47dac161021ff3c90ec6e1d0746221"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "84913312fc223031e7bd7da7a578dca7"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "ab1e7a715d488146135ad01e2fe22bc1"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "b56612492155ecb2e98adb7366fc832c"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "92847991aaeb8f883e6fac492c98204b"
  },
  {
    "url": "tag/project/index.html",
    "revision": "e37236788d35d7f122068cc8728ef1e8"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "8397122622f96fdccdfbabafc2ffe68c"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2720fc3c377896dc7aeb28f30bd01c75"
  },
  {
    "url": "tag/style/index.html",
    "revision": "02a2583b1416f7aeb9ded73689a25022"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "0a7005cf64ebc938b0e02d194d2bb554"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "6a7291b5ddc70a4b98091dfce6d8bbd8"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "47bb1722646e9ff05753173886ac05e5"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "52fb086de42acac312f9cde36f217dbe"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "4792dae66e08723b1eef688994c47d6b"
  },
  {
    "url": "timeline/index.html",
    "revision": "0cc0447dc5f47b785916f4dd09b92601"
  },
  {
    "url": "views/about/index.html",
    "revision": "6f823a2e00e9efbdc4c097d2378f7303"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "8f8bb34fda45b3b08125e2f25f5ef006"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "b9eb671acab31c8d0134dec19b4d68a9"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "e7a677c8aba06bdfb7cba3d7001e9974"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "52a913dab179aefb4b817eb78cd0a766"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "540880e6b193c606163a3f512aaa7aa2"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "400baba637744c66cd53091b42591f99"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "bca499f3723068aa6daf5f51c1f57e37"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "8556c55a78015d0b170066d8989d2b70"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "09aece7da7a868540a6cc3d74c44823d"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "bbb10022219b806704f00667c5e4dcef"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "1d9ebbfdffe83768ca0a3dfefd7f86b3"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "faf7a534e7edcd462ad62153f183fae8"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "de732b375e9c860b4bf8bcefc28097ae"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "cf1da66bd3037d000fa4243ceec67039"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "a14692313f5c6062940d978022ce79c8"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "aef00a75289213ae146df0ba246d1a50"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "0faabd3b103094b88cc0d319f7ea1183"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "a9e826f95478a7ccf28594f6b976273e"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "5cfb7d72af9d6d3629c6181e9e80daba"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "e7ca6034be633b322a3d43ccd761b449"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "45e134859e90d535ec83628fe278c92e"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "8d65a00724b65e9a4c17a960dc2476f2"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "364b9c150c5beb1183fa779f6353aff2"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "5c2e5e1bb22ffbb1d262ebe4506f3ea9"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "e3577494f4a7205a825fd74c613cc0ab"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "98ade6f79a4a8c399cb5644fe01010ed"
  },
  {
    "url": "views/project/index.html",
    "revision": "f8c88dc66ae0d5e327da23320b377fa5"
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
