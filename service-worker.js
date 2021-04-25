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
    "revision": "bab5ecdc9e5ae6de980fbfbb4ef74529"
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
    "url": "assets/js/13.04007d1a.js",
    "revision": "3b81c0a28f0589980fee66d7635433f0"
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
    "url": "assets/js/16.2edcdbf1.js",
    "revision": "b2f541ea95b38eb471cdb4601118ee66"
  },
  {
    "url": "assets/js/17.0f284829.js",
    "revision": "d1015e7915e85b47252b96eb6939f447"
  },
  {
    "url": "assets/js/18.20e483fe.js",
    "revision": "39b505d32d58bbf4350d896e5082d7b1"
  },
  {
    "url": "assets/js/19.610b171e.js",
    "revision": "141b413093a88a26b28d3dfa36f9559a"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.fa8e7c3f.js",
    "revision": "3d55b742c1d7b72882922ef0013d54a5"
  },
  {
    "url": "assets/js/21.e1b91c86.js",
    "revision": "7855e8cab6076e1b58ef4b2bca6eac17"
  },
  {
    "url": "assets/js/22.61c11aab.js",
    "revision": "976d9f04e3d7f30843bc7e8583e71a4f"
  },
  {
    "url": "assets/js/23.7e05b828.js",
    "revision": "eab3cee9dc9d420a3169988e0b4d759d"
  },
  {
    "url": "assets/js/24.48d1c278.js",
    "revision": "2d8def05cb30b21c3ce33b9cd2c8e5be"
  },
  {
    "url": "assets/js/25.b5f3b49c.js",
    "revision": "258063781d87e1dd69a56c05a162a9dd"
  },
  {
    "url": "assets/js/26.e4b89fb8.js",
    "revision": "168d78b8d0bd69ff462052da16d68be4"
  },
  {
    "url": "assets/js/27.72dd8002.js",
    "revision": "8616c67e14871ea2833e559656dd0461"
  },
  {
    "url": "assets/js/28.ffdf5092.js",
    "revision": "650b27ec1c5827dc5ec15b21beaa8783"
  },
  {
    "url": "assets/js/29.28a9b624.js",
    "revision": "9d9c6e7ea263e85cdf01c558bb872970"
  },
  {
    "url": "assets/js/30.f091efe6.js",
    "revision": "e61b6bdbfeaa3d77cbfe7709c5862497"
  },
  {
    "url": "assets/js/31.675377fe.js",
    "revision": "8b84009020b6c412d4dee1e9127f2006"
  },
  {
    "url": "assets/js/32.7ee028d8.js",
    "revision": "da69672bdcd7129f8699e49d53b0ed6d"
  },
  {
    "url": "assets/js/33.280249a3.js",
    "revision": "044391893c77a48e7fce68684dced33a"
  },
  {
    "url": "assets/js/34.a132f0a4.js",
    "revision": "5be65e2ba18bcc5ad9d7165653150ab2"
  },
  {
    "url": "assets/js/35.ec32e3fe.js",
    "revision": "a45d55d952e70f780860abbac594fd55"
  },
  {
    "url": "assets/js/36.a93d2ca2.js",
    "revision": "42c4d35d343709fdf2a789e717afc7a7"
  },
  {
    "url": "assets/js/37.f602ac8e.js",
    "revision": "2cf90cb7c1d01446e93a2711ca0e1e1d"
  },
  {
    "url": "assets/js/38.b03f0557.js",
    "revision": "4da4929e0bd5760f533edc520a565af0"
  },
  {
    "url": "assets/js/39.ea8a6a90.js",
    "revision": "d36288f1104405105e3b7acddf88a5d6"
  },
  {
    "url": "assets/js/4.9399de0a.js",
    "revision": "97d0bdc814204324e0107e18e6ab7f92"
  },
  {
    "url": "assets/js/40.f64ed694.js",
    "revision": "985ccd607fea743166b97d362a079a3a"
  },
  {
    "url": "assets/js/41.97dffa50.js",
    "revision": "a0d6117e8535fe8b88a99a94139f39a7"
  },
  {
    "url": "assets/js/42.66d6e3c0.js",
    "revision": "a8a45ac67838092f8c7ac6925483c295"
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
    "url": "assets/js/app.a97bd357.js",
    "revision": "b3afea6254505d32efaff99143afdb26"
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
    "revision": "a8148c22ac8495a21d30e3f1f5f0b1ca"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "8dfcd39d3dc4d2e215be2b97f086421e"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "f8e2eaae26392382ca37f6498f115b3d"
  },
  {
    "url": "categories/index.html",
    "revision": "99f83330c0bfbfebd4b883b8d241cb52"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "423d35703be4125ed5faf35e1740d0ff"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "96decf9f1c436e3275b3a1472f2926b8"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a13171ab4ddec84cca585a8f40e120fe"
  },
  {
    "url": "categories/other/index.html",
    "revision": "4994d405d831497a5eb7c44465679fab"
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
    "revision": "e9362228418a443c8191b2220624b488"
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
    "revision": "07e4181cb897c50763435297311c3c77"
  },
  {
    "url": "tag/array/index.html",
    "revision": "d332ab211945c14710824c74e88a0918"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "9ef62aae07027f317ffcedb9e7953749"
  },
  {
    "url": "tag/css/index.html",
    "revision": "db0147abdcd3767d3160f63ae624e2c9"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "a443c47c381cb17db5df72cdd281b11c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e6cd352d257b438807ea74d204b94170"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "b9c5e944277a9f398f524fc692636a03"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1eac20f25d0cfbaba0552fc19be5dc67"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "320e83fe2518bca55f3840c6b58a54f7"
  },
  {
    "url": "tag/index.html",
    "revision": "244fab27d2a659e80f6508fb2658b7d9"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "7857ca4d3e514be5ab3cb432ca35e495"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "d61b587903cb38bf6b1091fc51215184"
  },
  {
    "url": "tag/js/index.html",
    "revision": "641c470a8e03b5eb6087210035f5b787"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "2f9181de900cc6e5e01aa508660fef37"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "319caa0a9044bca9314af8472f9ad7be"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "aa870664e6cdac25c02c8cda64aaa62c"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "f9235cda9666c2c5660679611ab0cb43"
  },
  {
    "url": "tag/project/index.html",
    "revision": "53ef851e356419bb7dbb1e328b617fbe"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "5456f48284f84931f0644b8a2b2ece7b"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "cb3bd71170755ecff57296651bae8069"
  },
  {
    "url": "tag/style/index.html",
    "revision": "f092057d74f30d70ef0e287807de5c13"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "dbb8732318c88a0167c0766ba26004ab"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "4fb5f71f7619dc3a0e1736c1ef9afb6e"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "521063aeec673095188822ef60de3c9a"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9f0a85a69426a9dbb813bdb4efe22b66"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "02db82996958dbfdf3b3df4da1c652e9"
  },
  {
    "url": "timeline/index.html",
    "revision": "a2dc545b72467f02d14ac548d2b763f3"
  },
  {
    "url": "views/about/index.html",
    "revision": "6525aa98c299bde66906a1d7246ca861"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "c457a585fe17b86130365fd2048bc872"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "e8eaa2a65c0d0447afdf67d94150de7d"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "032026c955b0cf81312c8aa0403e4ee9"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "deb8fc675259a7c9759440cd8d60a00c"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "cf8387caf65e8f8b4541a768469b11bb"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "94153168de423d6180910f813d6ae71a"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "6934686de93973fce8788586d5e89fbd"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "15db54a102ad7bc272b4f3ddab157e7c"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "0ffcbb737330f853b90772c0e4d31037"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "32dfaae2016c10031e3367686da3e90d"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "192e802df4c35530384df4611d7ecd33"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "97c8c48259424094a928b4ff75000f50"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "77ad5033f93ae71278cd0fc5f4057331"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "844d07fb9e97bfe3c8378e3e7dc122d0"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "d976b3c51c9e2c8049e8c1ccedf3c772"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "9130147b825f863f89e819658db7a9bf"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "fcebc4020f4a89c1fff30ef93553230d"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "3d5a318fed2fc7a061f7483989ecab61"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "0744ff066082550435438b40041d51fb"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "cd7e7f376b1668eda3d2d0bb6e233231"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "2bcd006bcea8fbb5ca351758545993ef"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "3cf3355dd31216e651297ad070e3f728"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "dcc95964676cad92c26524bbf5741977"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "2a94d9366d64293338ee76c5139ad593"
  },
  {
    "url": "views/project/index.html",
    "revision": "6a4551922327a8fc93d654bdff0ee1b1"
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
