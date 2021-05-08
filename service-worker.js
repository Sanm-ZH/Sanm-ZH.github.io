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
    "revision": "2bea83b09b70e97e8290360a644a4b48"
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
    "url": "assets/js/13.1024a6df.js",
    "revision": "cf0077a41f1157ce2ee7692828bdb57a"
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
    "url": "assets/js/16.9f88736c.js",
    "revision": "51fa32c201dc47d1ec083a133dd0d9d8"
  },
  {
    "url": "assets/js/17.672ec1e8.js",
    "revision": "baaaa74cf862965f6214502e50898171"
  },
  {
    "url": "assets/js/18.9fec13fd.js",
    "revision": "28a82028e8b43ca7c50ea042cb48b02c"
  },
  {
    "url": "assets/js/19.43a9d9c6.js",
    "revision": "3c80b0e34eb6a3b40e8a62376ddbe3d6"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.84985e12.js",
    "revision": "df0a1e0bde18dc0098c352c24c3fa53d"
  },
  {
    "url": "assets/js/21.e95984e9.js",
    "revision": "293011e74905e5f7ffaed7a4f07b559e"
  },
  {
    "url": "assets/js/22.9e9eef4f.js",
    "revision": "7aaf1079b446c289e71d15081cb57a45"
  },
  {
    "url": "assets/js/23.1aec89ae.js",
    "revision": "9a291f4eb2645b51c2a4957c4852cd2f"
  },
  {
    "url": "assets/js/24.493678b4.js",
    "revision": "7511a5c8df872a496f6e7602b3562f24"
  },
  {
    "url": "assets/js/25.db1ec16e.js",
    "revision": "7d16fb3bf07a13608dd21abcadd8cfe2"
  },
  {
    "url": "assets/js/26.53d8199c.js",
    "revision": "6970b575f01472b5f25a6c82d3a11e07"
  },
  {
    "url": "assets/js/27.013a99ad.js",
    "revision": "369ce8c064b7ee2c65d990232a644790"
  },
  {
    "url": "assets/js/28.e87890dc.js",
    "revision": "6646e454929974f1b13697693fdb33dd"
  },
  {
    "url": "assets/js/29.01b54574.js",
    "revision": "88ed55a0981342bea08b2900371199ae"
  },
  {
    "url": "assets/js/30.cc9fbf2e.js",
    "revision": "eb59f55cb349857684a6463b2672108e"
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
    "url": "assets/js/33.4de21ced.js",
    "revision": "8b071b98e9b8d43eae1726b2aa912eff"
  },
  {
    "url": "assets/js/34.be16b397.js",
    "revision": "fd43d9f94c56fbc412639e7917cd89ea"
  },
  {
    "url": "assets/js/35.11aa29fb.js",
    "revision": "f656049f497277e56a69b577c20a20b0"
  },
  {
    "url": "assets/js/36.65af763e.js",
    "revision": "cfb1289f11f2175714a9345fd8973007"
  },
  {
    "url": "assets/js/37.8219b11e.js",
    "revision": "f94c3467b67a3804a7d8f6d110eeb40e"
  },
  {
    "url": "assets/js/38.6917ae90.js",
    "revision": "2969135a13c80e510762e84bdafcf39d"
  },
  {
    "url": "assets/js/39.f6784fbe.js",
    "revision": "9806d40accb5c19aac344752f48dbf0e"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.3a50e333.js",
    "revision": "7624e4daa3b7b325add6f95033ea566a"
  },
  {
    "url": "assets/js/41.7c9a7f1b.js",
    "revision": "095c91892cf2f9f266daff1472ef184d"
  },
  {
    "url": "assets/js/42.b5fb2610.js",
    "revision": "713a8b3ebd9e5f524861c931fd69f581"
  },
  {
    "url": "assets/js/43.3092b4c6.js",
    "revision": "751e96972db5fa9457fd9ac75198c0a2"
  },
  {
    "url": "assets/js/44.1aed9d9b.js",
    "revision": "dd6c2feb91ee47a60b57be3d54a68666"
  },
  {
    "url": "assets/js/45.45c5219c.js",
    "revision": "84f20c16de44b8bab0e6e145a2ab90b2"
  },
  {
    "url": "assets/js/46.c4f99a6e.js",
    "revision": "0fddb829fc09c125c66b513c12f2afbd"
  },
  {
    "url": "assets/js/47.605084b5.js",
    "revision": "9cfc314f4c89a2e7e950c46451ca1cb7"
  },
  {
    "url": "assets/js/48.43a7326f.js",
    "revision": "f4810502bf961aa86c4437eac23954d6"
  },
  {
    "url": "assets/js/49.58aaefd8.js",
    "revision": "29bdbf0dd2b655eab5c39686978a273c"
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
    "url": "assets/js/app.f833da61.js",
    "revision": "a8b855dbbec70708de7b4c2888fb8f83"
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
    "revision": "eb6cf21ce0b08c5f7dcbea9222ca83ef"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "9e4edfbc79cabaf5ef1feea362d997eb"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "0a6bb381a4b124829e182f2c0ca377ae"
  },
  {
    "url": "categories/index.html",
    "revision": "89bd90a05463806ab52fc5cbde6abca2"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "26c0b25f64556e42c97a1a4a5b0e8252"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "f0bfdb98961cbfa1b91ffda2d873e56c"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "f2e4f576f0c73679c043aad7c90ef974"
  },
  {
    "url": "categories/other/index.html",
    "revision": "80ba48e6925ce865399d5022d078f20a"
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
    "revision": "3f0c9766031ef8122238cd9ca68bcb76"
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
    "revision": "26b6f20af76705e859fce2edae664f99"
  },
  {
    "url": "tag/array/index.html",
    "revision": "adf62bbc994f0b924b869d29503d8f80"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "957efec5b871112460e9ee28a8c59d0c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "89596f49b568d28f40ef551699207456"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "34e6be3407a2e14d0a32f461d398c80a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d9df2b1f3c6efda957c446b7b8bad178"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "14b7e87e9a082eedd1a4b29fe0dd6a9f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2f5cea83edca8b599a259c702e944eb3"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "a1c1903c3a5221f8ea3190f81249fd36"
  },
  {
    "url": "tag/index.html",
    "revision": "cd83c0258287853d4eb521642a49115e"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "2c297653997835535ded8fad6fcfe0c3"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "88af1e27814605d73f757c8c3bfb28f1"
  },
  {
    "url": "tag/js/index.html",
    "revision": "90bd3ab4490ab615c385f3a13ed09daa"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "c4eaa654782025f071c5ab92210d736d"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "034b31d500079321e02050d3437df4b3"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "1f0412112ae1ad756ec3f6d0493ad40f"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "1bf85cae06e745bbd3faef1a55359174"
  },
  {
    "url": "tag/project/index.html",
    "revision": "8bc7af37768cb1199e31186a17727581"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "351560dcd34fa9cb98095397baf6ace4"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "e2434b4cb85887971ddf15d88dce6f7b"
  },
  {
    "url": "tag/style/index.html",
    "revision": "ba0246bee5eefeb6d68dbcd3b4ee26d8"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "72503a8b29d940f952ff2f0c5450f7a5"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "85ebf0b74c9f5b25c6fb8ce2f9750065"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1b8d210eb74b086cf2251ce97e0ca1cc"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "4e2e1a6e0917d20521192cc829387c6c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "54b73f74ec1e86b09f0e86d885372b24"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "881b8c83f79c26e6f6571c02f1bc1491"
  },
  {
    "url": "timeline/index.html",
    "revision": "60e7ca7f85a61d7ca9052f4574a822a9"
  },
  {
    "url": "views/about/index.html",
    "revision": "a428102c3c47bf82078854843244862e"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "8e82c39cf0909583a0e4126458fe3ee0"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "36406b2809e642b8a96750cbc8ddaaf6"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "d9a8da1200efabbe9ff222005c3e7773"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "713fec2157961bae99415215a8e9b356"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "0f8a04317fa1bb82140ab0dfe1f63243"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "4c5f427c42d8f22edeb0357f3432bdf6"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "2b7e0e1ad07e69fbfde7cfc3358433f9"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "8c708b5a9c2b49583d4c1e76c4b133c9"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "5ef179222c1b3b82bd562f02a377a6c1"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "73cefb5ab83f85b3668ad5d5795ceee3"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "2d2fbcbdadca0d0aeb1d919d577bacd0"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "5cb67e1e8feeaf81535452cfae785579"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "4d57e6dc0340b7c93c1798f2fe6c88e2"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "ba109f4e5ff026f50b70b4c932a81b70"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "169e882dd10b881bf126126566572114"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "ba55dd6c6a13a8f1cf523b60d16368e7"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "d534a6a613bc14872293565f94d403c9"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "a9b599d32c674ef84df06cd82efc968d"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "9b56f34127120bfd8a7eb464c53c6aa9"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "eb1320214ed9be7db381e7e87ce165c3"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "b2648d14a7056d55117c30f139f18b19"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "400db0a51293b08502ca88cb954671a1"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "1783987c5bc7c855b8e6c53ccc38966b"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "33d73d078c4f0206b57e407bfa82cdb3"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "06f86c024b254648e0acdb5a5777a47f"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "4d129764c232acf7d249498008ff6650"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "abeaa8fc02f29406b7e6ca3ef0dbe151"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "d2ec5ae6c1684511a4c9c6716f458f83"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "1fbf9811001ef5b11d2cc428bd9fbe2f"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "b66a359e4c918d0ecdf5ad61572d1a46"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "a01b8d987e8cd595276af5a8ced47a6a"
  },
  {
    "url": "views/project/index.html",
    "revision": "b079cb9a8d719b63a78d13a3554d41c9"
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
