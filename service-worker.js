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
    "revision": "8f44220d427e9e81a6586fd785fc3c8b"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.9a610208.css",
    "revision": "5997dcbc22ff1e78108656c0b684b99d"
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
    "url": "assets/js/1.3ff2a791.js",
    "revision": "c97d5393418422851e4dc6e4011c981d"
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
    "url": "assets/js/14.48e998a7.js",
    "revision": "3fea7d47943b1829c8d8ea0b7fa5cb2f"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.dba25a57.js",
    "revision": "04d57d319c8d89dd1a8a21c6c1c59361"
  },
  {
    "url": "assets/js/17.d5bb031f.js",
    "revision": "d130c344f428e562739b6c19ce966778"
  },
  {
    "url": "assets/js/18.a2384ae8.js",
    "revision": "097b7fcc1da1dacfb58d2876204d4e6c"
  },
  {
    "url": "assets/js/19.86e29277.js",
    "revision": "5bc94e9e0a02b1d0e8701ee1029a762f"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.242b38eb.js",
    "revision": "6f9f64e3ce449913bff2bb0a712c7691"
  },
  {
    "url": "assets/js/21.5828e371.js",
    "revision": "d732ee8649e1ced450758f7a0d76b74a"
  },
  {
    "url": "assets/js/22.6209d085.js",
    "revision": "c4d987ae928dde0f9517bef3e7285450"
  },
  {
    "url": "assets/js/23.b82bd1ac.js",
    "revision": "5f3f72fb14e43e6f03baf64e783a2206"
  },
  {
    "url": "assets/js/24.d3121bfb.js",
    "revision": "0c6ddbb7c19c0616d0a142dd7f1806e6"
  },
  {
    "url": "assets/js/25.fa2dcd33.js",
    "revision": "a6a20ec6084e7d9e37b97d4f89aa5978"
  },
  {
    "url": "assets/js/26.b886feae.js",
    "revision": "4b819c886f6e9b518313964934a62c3e"
  },
  {
    "url": "assets/js/27.a2eae744.js",
    "revision": "3667c6ca7639b211e40077976a16e91b"
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
    "url": "assets/js/30.9877ee80.js",
    "revision": "102eec045a8204e949ef4c5c3195e0f4"
  },
  {
    "url": "assets/js/31.b7b18581.js",
    "revision": "27e1aa57634a4408675604473a8ed287"
  },
  {
    "url": "assets/js/4.a7cb9c0e.js",
    "revision": "0921bcd081d7bad12f794e7a0128699f"
  },
  {
    "url": "assets/js/5.68bc7be6.js",
    "revision": "ab1043338ad66afff7f6ace857336d1f"
  },
  {
    "url": "assets/js/6.b10f5773.js",
    "revision": "133eb7e01ce3fc672f537f9fceb99fdb"
  },
  {
    "url": "assets/js/7.eab5b92e.js",
    "revision": "518e6d8919b365acb3f1830d4c3c492e"
  },
  {
    "url": "assets/js/8.2f7be112.js",
    "revision": "13842b2481c5e6db8cb362b867d4ab2b"
  },
  {
    "url": "assets/js/9.50c146f8.js",
    "revision": "cd295874f8cf29e1f8e3b4d73b656a5b"
  },
  {
    "url": "assets/js/app.5fc483a5.js",
    "revision": "5b49a65cb4babf7b31f7cd9888dfdc01"
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
    "revision": "cc9ea7f60ed10d2c3e8819c6ee7bf662"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "f265a18ffee940133f45f31b76b9fbab"
  },
  {
    "url": "categories/index.html",
    "revision": "0b58bcfe38b1ca4bc70149960d9a3f73"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "df1d1c765d9fe424d364d879f4276cfb"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "ec68a57488f450e250b08720582ca8bf"
  },
  {
    "url": "categories/other/index.html",
    "revision": "621b937343ae9026fc1aa0d95c0489e7"
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
    "revision": "466cc25978855d37ffb3990da74748e9"
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
    "revision": "00bf7507bad0467e00896c22653f6d58"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "0c8cd956e934139f045f13a997500f5b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "970073a2e12b46be9845570492e21e8f"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "e6961ede8530facd9b81aa56718a5dc6"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "5ba66d1c8d01c174eca463f3069cb76b"
  },
  {
    "url": "tag/index.html",
    "revision": "33bea33bf9c68e1e72073378a3025c73"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "a44596b61daf53d6206dd5f4bde106eb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6f1dfeb18e051d42e3dc4357f2f42b85"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "81525e235cf045969854c46a195ca4c3"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "d82f2cad68e3e24a4944591c6e4b6f4e"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "7c437a3a05feb425fa19226e05da8591"
  },
  {
    "url": "tag/project/index.html",
    "revision": "73a84fa1ea2248bd6d0215cff29dc20b"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "f5c8cef83bf50ee96c9a859c3a7ee580"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "7d3c4f30225ac50717598ab05819fc07"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "b9cbf61764b52065b02e68fbe0973cbb"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "18b3fb48d57fb504ec372efceafcf8b3"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "0c2dfb4dbb2e06282a78a8b0620d241a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "ac44d07fdaa940011e7b73f9e20bed3a"
  },
  {
    "url": "timeline/index.html",
    "revision": "fef9c8d9d5263196a0016a6f3f867c90"
  },
  {
    "url": "views/about/index.html",
    "revision": "8cdf57b7e825ab56def03225492a0656"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "07cf592e6abf960eca5310b398888fac"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "1a9d0eba92bdfba14a86a7b712ce161e"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "612157f4eec361f888bf1cb69fe423d9"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "1d67f8334bf44f4b7583fc5002273e21"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "013137bf813b3ba8349241dcc189f59d"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "5aab5e132a9b6745892ff1e3f6db255c"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "f3b8eaa9b7a9d74a86b7440268b69442"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "612aaf301e044470e536978fcc7345db"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "91e6e532dbf2061600f86144c4814b5f"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "2e282d40f9af282f5b0684f2efd1f50b"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "e34a7b82b821b9ca0a076883b5589a27"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "1cd8a0f102f4b6ec7b181b69d95fb0e9"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "0b2f301a321b3ae735d2f091cd235dba"
  },
  {
    "url": "views/project/index.html",
    "revision": "599ced455a6bc14bd98ff2342a6dcb20"
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
