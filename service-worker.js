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
    "revision": "b45b6b3d2eb744e55cba652e82ea92a7"
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
    "url": "assets/js/13.3136e5ff.js",
    "revision": "5726125898959d39066d83edd3d94226"
  },
  {
    "url": "assets/js/14.4d42b055.js",
    "revision": "79892d2ff296de0aaa9ceb03fbe1b7b3"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.1bbfccec.js",
    "revision": "4307c22b9b9108f8c9760c9b940dd4fc"
  },
  {
    "url": "assets/js/17.9ee0a70c.js",
    "revision": "e97ed30047e596c3aa00eca4c2e00f0e"
  },
  {
    "url": "assets/js/18.7a73e6b2.js",
    "revision": "f23a83a2872a571d255006306b08595e"
  },
  {
    "url": "assets/js/19.2c664ac7.js",
    "revision": "c1ee01657ace065e09df0e14a9a66020"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.d1b482d0.js",
    "revision": "7a09e810fcf4aa144cad9eed0cd0f1cf"
  },
  {
    "url": "assets/js/21.9d3eba18.js",
    "revision": "ae19b86393d1a2aca31be485cfb915c3"
  },
  {
    "url": "assets/js/22.6a96f739.js",
    "revision": "0a91349c370b123ad68626343786668a"
  },
  {
    "url": "assets/js/23.05e39e84.js",
    "revision": "722ffb504c4441fab41b9d18f5800cad"
  },
  {
    "url": "assets/js/24.68ce6e0a.js",
    "revision": "47cf5991b784c82d8d13c4688e5e986b"
  },
  {
    "url": "assets/js/25.fe217bad.js",
    "revision": "d73239502d1d0242c8cc630135f49a32"
  },
  {
    "url": "assets/js/26.41a10dee.js",
    "revision": "f834c08fa6f05fba750e21426501ac57"
  },
  {
    "url": "assets/js/27.e2546b54.js",
    "revision": "642a2b01b7808c9fe45a40f145a932fa"
  },
  {
    "url": "assets/js/28.cb9272db.js",
    "revision": "da1dc19be57b38cab53e66024069905c"
  },
  {
    "url": "assets/js/29.e53ed2c3.js",
    "revision": "28f34ed148bf12e1d3eb92ac387751a6"
  },
  {
    "url": "assets/js/30.f4729ae2.js",
    "revision": "687149458b137b1138e2b118e4620492"
  },
  {
    "url": "assets/js/31.b7b18581.js",
    "revision": "27e1aa57634a4408675604473a8ed287"
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
    "url": "assets/js/app.f1ed7d5a.js",
    "revision": "827bdb0964e4a44cc34405ea8fb6a2f6"
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
    "revision": "7037c71c6aa5753df77777a2748f72c2"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "c06294c5bdccb2bb0e10dded5522eaa5"
  },
  {
    "url": "categories/index.html",
    "revision": "c390cc613f9a026ddf7bc571e2ffba10"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "ca595e9420a65a4f658491ef6af1a943"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "6eaf9b687116fc30b4027e650ae1a703"
  },
  {
    "url": "categories/other/index.html",
    "revision": "85a16e7d4f02d3834e95944ec4de3943"
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
    "revision": "b6e9f0ace6b128bf81a9c7dbaeb3f62d"
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
    "revision": "9b6a68bf57356ccebfe640deef2bc4f4"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "890bba94716c42c074ea4d43b86dfd39"
  },
  {
    "url": "tag/git/index.html",
    "revision": "37224211ac5c9a990bfd519d3cd2640a"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "87d7792001568c3e71ab285ed21b2c7f"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "1bd91e087585ed442b8c0e3178dbe9e7"
  },
  {
    "url": "tag/index.html",
    "revision": "b3782b9a17fc7514f23feb0f5982dc5d"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "0ea6197e219c40dc9e6010e84ed1417b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1dd2e2a66d967dc75ac76234dca9fe10"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "642966d941e2ccc0fd182a6eec0020ad"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "42a0d2520b78ef94abc688e23e440c7e"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "6f5c229c53fffa71dd517ddd043fcddf"
  },
  {
    "url": "tag/project/index.html",
    "revision": "8d7fcd8c192e0acd631949e57e7fcaaf"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "bb170e4e7f7b83854e4b70db16ed6337"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2498daf1f06aab80cf52cc12bab2deba"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "59a40cdc2cd3a71983c5e3712f363861"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "99091a61fe7816c00c0105daba378e10"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "de5e291eb41732969c179eeced5f7e7f"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "6a6377ddc98a683ae67b610c2fa2abd7"
  },
  {
    "url": "timeline/index.html",
    "revision": "bc18d31f39652cff970c6de0fdbdae1f"
  },
  {
    "url": "views/about/index.html",
    "revision": "ab67c4996b4272260cd2b9fecc78cedc"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "39cb097cad531658a0dcfb6a5662ea40"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "829320a8c33c3ddff05d6be969dccff1"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "76e67934b1c6e93d3c758e1e0ac481db"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "189a8100f5d6e13865f450b69206a3f7"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "ec91b2d59f7b090b3e79ac65c79e5f60"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "43786157eda4a878226ff742eb55457e"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "2a2055aee4ea5ff6c989356d7790539c"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "9e32f21e9f82bec24f0bbea634503a6c"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "2c675260dd70a3d6a21f07851504f083"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "58556721a65581f0563d3496adbe1157"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "554fbc741c69154a985711c506b9be15"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "71bb21248317ebdf4d7279cda62a2270"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "2a6c2353dd6623947a7f2108539c924c"
  },
  {
    "url": "views/project/index.html",
    "revision": "002a5e03924ca4319457d792bd327f34"
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
