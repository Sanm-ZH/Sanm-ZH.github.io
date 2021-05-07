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
    "revision": "5a122f1ee528a52898aa7d9ccd71657b"
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
    "url": "assets/js/13.92b294df.js",
    "revision": "87d402140b672c710db2e3b621e3c8c2"
  },
  {
    "url": "assets/js/14.912b17d3.js",
    "revision": "7ce7978f45373b0c42c910a39183f942"
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
    "url": "assets/js/17.1154bca2.js",
    "revision": "b237dad9ce9b26265d6ce61657594b7f"
  },
  {
    "url": "assets/js/18.9fec13fd.js",
    "revision": "28a82028e8b43ca7c50ea042cb48b02c"
  },
  {
    "url": "assets/js/19.c9ee01fe.js",
    "revision": "938453510a38e97efadea19c9c88fd02"
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
    "url": "assets/js/22.5c8020b3.js",
    "revision": "096b4572a360d3a4fb2ea05d316f0406"
  },
  {
    "url": "assets/js/23.d6022600.js",
    "revision": "d434b27e93a7371067a1092d4b3aa7b6"
  },
  {
    "url": "assets/js/24.d4b24d6d.js",
    "revision": "28448af50f6b50892d7fcd805e7689df"
  },
  {
    "url": "assets/js/25.db1ec16e.js",
    "revision": "7d16fb3bf07a13608dd21abcadd8cfe2"
  },
  {
    "url": "assets/js/26.3d702bd3.js",
    "revision": "9f66b1f47592fdb14596734b95c02636"
  },
  {
    "url": "assets/js/27.c6cb4b31.js",
    "revision": "bf25f3cfc6302e0b94e3d947463f884b"
  },
  {
    "url": "assets/js/28.92f1afd4.js",
    "revision": "29e5b6c4812adc7fa6c33e6768116f4c"
  },
  {
    "url": "assets/js/29.f4d48da0.js",
    "revision": "6ae5b2279ffa6f1e5255b655ba480e14"
  },
  {
    "url": "assets/js/30.e7ae3acd.js",
    "revision": "a75d7426df0c19f95c85114c00f28556"
  },
  {
    "url": "assets/js/31.c2ca3b07.js",
    "revision": "cd8d5032e0230a76b1fed786ae288d47"
  },
  {
    "url": "assets/js/32.59189cb3.js",
    "revision": "fdc268003326a335ea8cfad826bc1b1c"
  },
  {
    "url": "assets/js/33.9014c08c.js",
    "revision": "a281cde41383ca5f50d5a9bb47f10a41"
  },
  {
    "url": "assets/js/34.cc53249e.js",
    "revision": "8bbe13cdc20104e5507ed0c200484baa"
  },
  {
    "url": "assets/js/35.1b289ebe.js",
    "revision": "9cb17aa02fb144ae9764a4f00fd55193"
  },
  {
    "url": "assets/js/36.dacee357.js",
    "revision": "7ccfb8c260d47227cadf0904d3f6c849"
  },
  {
    "url": "assets/js/37.4cfb67d3.js",
    "revision": "602b9186bdc3cc2d605fc019367fc869"
  },
  {
    "url": "assets/js/38.d35448d1.js",
    "revision": "80c62a9d738597e936fd119844473a96"
  },
  {
    "url": "assets/js/39.e0b34139.js",
    "revision": "bfcaac75b1ecedc693fc7f0078f30566"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.104f7116.js",
    "revision": "4550089dfd0561849f76dface381e1de"
  },
  {
    "url": "assets/js/41.9f631cf0.js",
    "revision": "7034e41f1b428417d3c70581155caf11"
  },
  {
    "url": "assets/js/42.3ce0e4c2.js",
    "revision": "c6720dd0fde515fe9b3599a2958b560b"
  },
  {
    "url": "assets/js/43.cb743bec.js",
    "revision": "18e372768305dcebc5f19d881b4f17eb"
  },
  {
    "url": "assets/js/44.2d6609de.js",
    "revision": "d4282ceeaad3ab7621ab0e74320a3e2b"
  },
  {
    "url": "assets/js/45.bb3866ab.js",
    "revision": "d9e26bc9a89f363ebccd8371c326bf98"
  },
  {
    "url": "assets/js/46.bbfbe228.js",
    "revision": "adb90e896400ddf4d90d727c2f06a32c"
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
    "url": "assets/js/app.ea27530e.js",
    "revision": "dd9b40ca0e3f85b41f09a7a64118c33e"
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
    "revision": "7b34111d0d242889cfcec2bb17ec53a6"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "6c2299953b4d4e6d4a0147eee38261ef"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "5655ad6b8999726b73e6737c85ec7549"
  },
  {
    "url": "categories/index.html",
    "revision": "e1843083789aa9d467e00cd1c5b7d9b7"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "2614c51709e15319d11a6a3d688049ff"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "3d485d8e9a1c3951a5add5506942de71"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "3ee6fc7bb08691e4f223ac7673a3833c"
  },
  {
    "url": "categories/other/index.html",
    "revision": "ed25e1f42ab04e5cfd6c66a426cece6c"
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
    "revision": "482c2725b8e28aa00cc11a11c3106f66"
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
    "revision": "f37fd2a35e3a0c20407326ab5cfbd6cf"
  },
  {
    "url": "tag/array/index.html",
    "revision": "3c46137d5db0593574dd01a6efa5bc1e"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "b7631d4f96e7b0a485a6e1a96f155e88"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d936eecfd3481cd5d6b9f016080cd926"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "6f0e9dae90395f767c3aac6386a99fe0"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1e36957d7719c8239b2c3fde67d4e44a"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "24596250393a892d22c601ff375744dd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "382d6d6eefa386f24dbb4defb1dcffdd"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "158b8c64e48ccf4645403bf5c2c3587e"
  },
  {
    "url": "tag/index.html",
    "revision": "6b8a22b6307237346e4f4e64ba8f4a6e"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "90ad3f1051eaa12a2092f92388885a57"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "8c0db2fcf010568196c77bd8d8a65477"
  },
  {
    "url": "tag/js/index.html",
    "revision": "68daa5a405c5561eecfb816e013cf027"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "47f32965d5862558df97bd055e6882a6"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "3094b118e49f044ca5b3cf03d3675217"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "121ec47e8a2da74df45f014057ea53fe"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "f9baaac9770044c93444cf4d1833d16f"
  },
  {
    "url": "tag/project/index.html",
    "revision": "705f32af0be0316fe6bdb1305d2a797a"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "5a932d428bfe81baf0989579cac4d36b"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "3dcfeec287d91ddd554dd923c0a1425b"
  },
  {
    "url": "tag/style/index.html",
    "revision": "d90e6ce5756cfdf17c7461f7c3ec27d6"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "c6c14358a4162b812a42140d5db9cd8d"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "a0aff0476d1c841a7eef2a02c85ce87b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a9fab37e57812eeb42644b0a61298574"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "d5f5b90b37da7b53367852010c607e52"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d0eb605bb74b44a8ebadaa13b68bea90"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "de1a33dac6fa02cb8843e0fc88ae86d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "7b89da3196d8d2d28fdc597009161ae9"
  },
  {
    "url": "views/about/index.html",
    "revision": "0777ea247dbb9d38e57498ba081e0dfb"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "de181524bb828f2c0fe18a57feb1c220"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "6bdfd888084dfee4448b09812157c8e3"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "3bf6c806beb222962ad0c3caff6bfef4"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "ed06803178093db98afcc31cdc948677"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "5bed8ddb8d2b5d98c1cd55c9b521ebcb"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "9d6df8a1f2080661256a1ee3c5e30618"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "ed4ffe7d6bc466bcf660ac7d38778c95"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "4004f3cb582f607b17f9666b30ca693e"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "b47bd2e100c75fdf4ec644a08b986c7a"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "21e4c7282392184e7cbb035964810f37"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "5d5ac32c3c5fd0340a97659bda5f8999"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "96f868ae901ee8d2f3e1a28d0add11da"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "94c2460fa34fc7829bccb2d39da88623"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "cccd60d838feb029bcc615f640d66675"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "a0c869bba81e99b7be20fd4c8827d477"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "6ca24b940e1da0712ee5408d4f678f8a"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "6a2a29bc443cb6583d829f6a1e68d0f1"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "515be93c1248d70f169d96674e46bcef"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "35303ba393144b86fe36a26c18182df5"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "e1be206902e226d4a676a8a11c1daaab"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "1073cc34e82963b04ecec26ae8e5319c"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "22dee113dfacc74f722f029e1adbb230"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "d2f942392dabbe60d45b9a4a70158f01"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "7571cd6276a474de818aba366cbf95ba"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "190e234131215b5ee3d0208cdd25a208"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "5258fd7fadc51a29d40e268eee133b2a"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "3826799cf626464faea6721def2b7fe1"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "323a85116e8c3e2a673170b1eda9a2ae"
  },
  {
    "url": "views/project/index.html",
    "revision": "b60d677b09feeca3ab926bc60d923059"
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
