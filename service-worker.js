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
    "revision": "978357bf67e8f529a3b4fd26b3a01c70"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.0f208eb6.css",
    "revision": "835688273ddd64c1b110c21f4c9f1f60"
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
    "url": "assets/js/1.806e9581.js",
    "revision": "8cec8d948a1b929ab5156b259262abc6"
  },
  {
    "url": "assets/js/10.a299d969.js",
    "revision": "eb988c81432f888a51fc608e74e30b6d"
  },
  {
    "url": "assets/js/11.d94e9d5e.js",
    "revision": "070b480506ccff00f8924f4432bebabb"
  },
  {
    "url": "assets/js/12.44ed928c.js",
    "revision": "6911108564bad548f3d756384bdee12f"
  },
  {
    "url": "assets/js/13.48884b59.js",
    "revision": "30e1a7cedd9397f34acedcb067a327d9"
  },
  {
    "url": "assets/js/14.a5de5701.js",
    "revision": "6d63624db0c68e0003509ffc3eb7c46c"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.52b6a9b9.js",
    "revision": "cff845dffc1d56f7b86356e1c3be9a84"
  },
  {
    "url": "assets/js/17.96fe1808.js",
    "revision": "0826e09e151d68ec592d32d43087bafe"
  },
  {
    "url": "assets/js/18.76f9df93.js",
    "revision": "a2c4411461b5a6258e09a36335c63d69"
  },
  {
    "url": "assets/js/19.b3d016b2.js",
    "revision": "3dd5f8419b39cce0ec84158836b56d78"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.f431ff04.js",
    "revision": "4404facc8a39469b15641ec1485a82ef"
  },
  {
    "url": "assets/js/21.faee23a3.js",
    "revision": "69c5a67ff5d979bd80185d1f325d50da"
  },
  {
    "url": "assets/js/22.8e2156e9.js",
    "revision": "df83ca9104e062df44bab16fcc1e1b07"
  },
  {
    "url": "assets/js/23.5ca789c4.js",
    "revision": "2b68b84d7986b7f2a9044adfdc12c0cc"
  },
  {
    "url": "assets/js/24.14046656.js",
    "revision": "38ea0cc40472ab042ac710f46a096e39"
  },
  {
    "url": "assets/js/25.f953efee.js",
    "revision": "5b025c0f4ef088cfd47cb76759e4ea56"
  },
  {
    "url": "assets/js/26.fffce91c.js",
    "revision": "ba84801155c9ab11764f4349d5a6943e"
  },
  {
    "url": "assets/js/27.d11cd953.js",
    "revision": "bc55eaed7684c91dc78d18279d951f4e"
  },
  {
    "url": "assets/js/28.9c4871da.js",
    "revision": "611062bc191304f8dd7964644607c9fe"
  },
  {
    "url": "assets/js/29.02c5aeca.js",
    "revision": "98e43f924e1b10c26fd73e3c90da8b39"
  },
  {
    "url": "assets/js/30.ceef208e.js",
    "revision": "4fac8a2202aba28ec8945c60a7a786e9"
  },
  {
    "url": "assets/js/31.270976fd.js",
    "revision": "547fd07c8aac85abf0cdf1bdf5cdcb91"
  },
  {
    "url": "assets/js/32.8903597b.js",
    "revision": "876041d3d16207a00ae0114298fd9c3c"
  },
  {
    "url": "assets/js/33.15c7c718.js",
    "revision": "89ecf23967a997455ddac0149c51b3de"
  },
  {
    "url": "assets/js/34.61d3d2ff.js",
    "revision": "563ef273cd7e1a9ae04257f3d6cdd9fc"
  },
  {
    "url": "assets/js/35.fb506a27.js",
    "revision": "021bf3411d98819b08cbe72848a241cb"
  },
  {
    "url": "assets/js/36.41006ea7.js",
    "revision": "31fdbeae5d413b899024012f0695e4f4"
  },
  {
    "url": "assets/js/37.f5d256de.js",
    "revision": "3aeaa6dafa6f87659241a3719897d5d6"
  },
  {
    "url": "assets/js/38.c2ebe4a0.js",
    "revision": "c9b143e8261ebbf91ab7e1f24d453705"
  },
  {
    "url": "assets/js/39.1a1db749.js",
    "revision": "4a3b2e7ab800157c0272432c6d30bfa8"
  },
  {
    "url": "assets/js/4.9399de0a.js",
    "revision": "97d0bdc814204324e0107e18e6ab7f92"
  },
  {
    "url": "assets/js/5.dac2baa2.js",
    "revision": "2411297477d1bcdd266e4e76d795b550"
  },
  {
    "url": "assets/js/6.c4317521.js",
    "revision": "5dfc767c0cdb33595b49b64560ec8398"
  },
  {
    "url": "assets/js/7.0fac8c34.js",
    "revision": "a0c08cef35c778d83d26509104244329"
  },
  {
    "url": "assets/js/8.2f7be112.js",
    "revision": "13842b2481c5e6db8cb362b867d4ab2b"
  },
  {
    "url": "assets/js/9.b48d5daf.js",
    "revision": "03065e9bc3bfc6528af085131235ce28"
  },
  {
    "url": "assets/js/app.3aea9510.js",
    "revision": "ab81b837351a1c995ab38cff256fb590"
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
    "revision": "557d3002bffa4e71eb25b5081adc818e"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "083ca9dc1157e9e5abd7f82ebac17256"
  },
  {
    "url": "categories/index.html",
    "revision": "2af8d9879a17ea22d5e36213b1462e16"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "75b07b86e85a382abf62361e0285ef42"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "ebe4db3b9436d4903abf32f4b7cbc23b"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "b11ded72a46455fcd54c3bbb76c35ac6"
  },
  {
    "url": "categories/other/index.html",
    "revision": "1750262451ffdf0ef40e8f8a335f8c32"
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
    "revision": "8f96708ddbd33c1afaff3655929cc14e"
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
    "revision": "d0874d5dc50654971ba22c62317e0655"
  },
  {
    "url": "tag/array/index.html",
    "revision": "ae84ce8e457d07fada2650b051fb8703"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "2761753b04c2036654521ebc2ae9363f"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "3c3aa65b9fe9dccbbe5acaed4a47a326"
  },
  {
    "url": "tag/git/index.html",
    "revision": "09543f8db03ca932eb297e6bf675c819"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "0a2336b6f105c1d9b078f0564924488f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2e22f578d4dbcffbdf6b04f8008ee31c"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "dbacb2fe2c3d8ef2a827279e5e467452"
  },
  {
    "url": "tag/index.html",
    "revision": "68db359c3fb581e8905c58bb6e2e6f9f"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "5f6f7b6b1ac0c925d70151732b51950f"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "8a0b6b5968f34f16c6dc20a7542e355b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "de60e5eb64f48a73626ebca7fd662674"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "679ca0a7646a91b9123752ada0fc053a"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "22625f69d50c94a1986a83fd1c386cd3"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "6bfd305b509bbf73fc08aaea74898339"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "2af8f1ab1f575140011d7855c6678e4c"
  },
  {
    "url": "tag/project/index.html",
    "revision": "b4455658c9609671aee1ebece3f33cf9"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "842038290806ef74c4106e3c8c7455e3"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "bea7b94692c0754244abddab1bd7e031"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "ee5e2b3d6e40024fb8cf61dfb81b1160"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "9340ad9e4e3bf9db998f6eafa54929c9"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "745cb40db78d693f4d3bd2de87a32ee9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "5eb40844a4981b981959fdf149f09ccb"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "d0f8e4aa96c3e2d87d5f52d1123347d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "b30e07150a444f61e12d0eb9bf0e1f07"
  },
  {
    "url": "views/about/index.html",
    "revision": "9fb8b3409b201093798d05af622136c0"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "f836b1d1d13c8a10471360b132f4ce41"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "cc16f72f8fb43a6034a67cdf398e382f"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "9b6279e1605d8e060bc78376b096bdb7"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "b642d161cc8d9c8722f056f6cf9afcb3"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "ee19e83bd3167ee7a3b0382850a227d3"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "837ba71cc521d788589087d1bf003b73"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "4454d9124204966f8b3215a19e12e258"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "5607f4a9e6470e8e10bee10f39f94715"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "4766aba240b24ea76cc1765782e51341"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "14ff657a2e079c65222dbcfa50f78cae"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "41c6f61d65e1e61c6b1ab3e1d263dc6d"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "359c0b498c1cea08baae952ec901fd2b"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "4fe86b02e58ac59064d7ac68696e831c"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "899b97982f87d59f237c6d6c4e45b7da"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "d6854bc8df3fa7c40f92088d926e3379"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "3ec3513012edc28a0ebc6518c64d88c6"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "d5cccd39a8a87b4312f9b336213c2c53"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "d5cccd39a8a87b4312f9b336213c2c53"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "8cc4c7bb6e31154d5024dbc65408c3da"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "016155422769a16e66cd4eedf8bf2a41"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "698dc5ce102be377838398d36e497312"
  },
  {
    "url": "views/project/index.html",
    "revision": "c8b937b8d17e88d6cfb584832ff102b2"
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
