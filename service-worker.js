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
    "revision": "9cae36024960632cfe6036eb9f0eef57"
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
    "url": "assets/js/13.ee0ad890.js",
    "revision": "94a0674933e290e51b17bc6e57142986"
  },
  {
    "url": "assets/js/14.76faab7f.js",
    "revision": "124cc20ca7ac62c93543fa1d275d2004"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.b0f89ca4.js",
    "revision": "c07a9ce9ebb6f56e745d62c30ada1e4f"
  },
  {
    "url": "assets/js/17.e954ed32.js",
    "revision": "a6b5dbd40e4c113bdbc649125a3efb87"
  },
  {
    "url": "assets/js/18.f77d7f53.js",
    "revision": "4e99fa101a1aea701fb90283e51da4c7"
  },
  {
    "url": "assets/js/19.2583b20d.js",
    "revision": "3d72e40d1dfeab18bd768f76cce326c2"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.5b0f2def.js",
    "revision": "cb6613bc2e82688f57169c755f3e0ac8"
  },
  {
    "url": "assets/js/21.3ae6ddf3.js",
    "revision": "0c2b5cb4f6804cf88cf5865a31a4298d"
  },
  {
    "url": "assets/js/22.c2e2ef09.js",
    "revision": "df17745321d85c092fb2e67955a8eacb"
  },
  {
    "url": "assets/js/23.fba7be1b.js",
    "revision": "7bbaec3e9c4cdba88c54216db2ab03e4"
  },
  {
    "url": "assets/js/24.f29773f3.js",
    "revision": "3630da4e1e7c02c470742cccd8e3e99d"
  },
  {
    "url": "assets/js/25.816336e0.js",
    "revision": "c3dddb0a8332f29006e00c9cfb464a13"
  },
  {
    "url": "assets/js/26.ec97e7b6.js",
    "revision": "a8877f9e290bd85a9974b1bcf60c0738"
  },
  {
    "url": "assets/js/27.6c6c3fb8.js",
    "revision": "6d52ca901ff1e6c955941873b93a9887"
  },
  {
    "url": "assets/js/28.f5df6bcf.js",
    "revision": "7891af914a7b4cca4efdb3fb13608f39"
  },
  {
    "url": "assets/js/29.a7b20653.js",
    "revision": "0e74838e3d127b2d861de4fd36ccce7c"
  },
  {
    "url": "assets/js/30.ade43d24.js",
    "revision": "42225340a2735178c4ed96a5abf01cba"
  },
  {
    "url": "assets/js/31.bf0ec872.js",
    "revision": "b90222999ee2989af83f9cf449e3f20d"
  },
  {
    "url": "assets/js/32.3c2fa8d5.js",
    "revision": "4058bc96b373f30463cb2b439c8b14e3"
  },
  {
    "url": "assets/js/33.6ea13980.js",
    "revision": "946756127f2e2330b86470055ecf5609"
  },
  {
    "url": "assets/js/34.eef67be1.js",
    "revision": "629f11c332438b8c20bdcc41f3a404ae"
  },
  {
    "url": "assets/js/35.fd84bf8d.js",
    "revision": "e10654860e99fa4918834a734991bb37"
  },
  {
    "url": "assets/js/36.e812ce2a.js",
    "revision": "7436376b79c74ee001167944eb64d0a6"
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
    "url": "assets/js/app.f704a947.js",
    "revision": "6737533394d63a44719e02e174e4827a"
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
    "revision": "310ffccf19a17fafec466ac01e4efbb0"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "9488a70f4f8a3d26ffeb12ba5bbf7ba2"
  },
  {
    "url": "categories/index.html",
    "revision": "0afa84b1db3dffb806842ae5c86d2511"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "67689e9c4974c238f3f2a5720e0d57f9"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "126167269c382d255c7a377e492ee951"
  },
  {
    "url": "categories/other/index.html",
    "revision": "21e7bd5b954cee1660a03f34a30ff94c"
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
    "revision": "602406f2f6e4957fd69f51600ea5cef5"
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
    "revision": "fe87ecf8bf5ce96b7bc93fcedce2d45f"
  },
  {
    "url": "tag/array/index.html",
    "revision": "079eb5f025178077b6cb7e7af30dacee"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "839951b0e41e0b00ec6ad1bef6ca3e43"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9cb0c8411ef9dd6fad16a4e3f20548c3"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "ae197f4d8c5830830dd1e7b57d81da70"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "f120444ca3194b4c67a491da6c2d35cd"
  },
  {
    "url": "tag/index.html",
    "revision": "d629c41a1a7c4c6adf9b216a473a0c1a"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "608e8202181340994bcfe41f9fc14033"
  },
  {
    "url": "tag/js/index.html",
    "revision": "14940608667a9a2e18d4a6836a303aae"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "1942741fe7a64db3c7e354195b8b3334"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "228ed63dde57027e344d6ed28c730dcd"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e01b934b9ce786472490acc1aa0c0717"
  },
  {
    "url": "tag/project/index.html",
    "revision": "0ef606ee614bcbf3f58f89750fc49f49"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "a727db5f57a9f6cf8359a7b0065001ec"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "dfcade8cd9f3db1337e8863e07bdab86"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "a8c5bba550f71c3362274197679db10f"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "99644ece080e9b3788e94b2fea815f59"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "3a6d78e7e9089524d12fe39bc6cc42ae"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "388e9d765a1048154c493a3838c3214f"
  },
  {
    "url": "timeline/index.html",
    "revision": "52d84d08033b4b3a2e3c4cc9aa79338d"
  },
  {
    "url": "views/about/index.html",
    "revision": "424868f3ab08155bcc4ab3b309a25b27"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "9d56b3e93e1d39508bba271cb23fb5c1"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "e6e2d463a4750862f420f2dbf2febdf0"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "14c88b3f3eef3e6bf576c63c4ac9f505"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "67abe5fa9ee96eaec6b069c2836f9c4e"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "1197c4315892104ea937e4976dd33198"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "e8537207be901ee241d410b805fd244c"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "a839475f172b6e8fa876402572a91599"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "16377dd58c42c04d6ebf8833dba8bea8"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "11599cf6512ecf7a70bfd7fa14f6d087"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "4a9a42b5bc9b9fd2a0e685c153430d2e"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "be9ce1d0900cf986c600b853ebda66a7"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "4731af65643fe3670345bed9943de9c1"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "6dd7f5f71ccc67a490ebe143e8d3fa2f"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "0eeb13f338f2657e878c71e5953fe89f"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "03936ec7e732eb454146ed0f3bd04154"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "c62a31e6067bcc690d1105151d654496"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "8a931122f69662fa56a064b9da10d022"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "b106ec99ec2932516aacb64112791a5c"
  },
  {
    "url": "views/project/index.html",
    "revision": "ee946b18d520ffd91381b7343ed374ab"
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
