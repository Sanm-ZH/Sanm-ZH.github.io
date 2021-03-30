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
    "revision": "4457aeebdf880cf338badeb59fa98f1e"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.3ce87cf1.css",
    "revision": "fedccbff341828abf450c2282f7674de"
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
    "url": "assets/js/1.263d8b86.js",
    "revision": "2d45fbd8277933e2b14e04bc43cade63"
  },
  {
    "url": "assets/js/10.23a73a95.js",
    "revision": "cbb3bcc0b02d8da88d9736095ed297ff"
  },
  {
    "url": "assets/js/11.e6b4c602.js",
    "revision": "ec8dd5aab4db60a98838b3b6c41193b1"
  },
  {
    "url": "assets/js/12.f8855228.js",
    "revision": "31e133eba4e677b0dfc19b089086a4e4"
  },
  {
    "url": "assets/js/13.4237214f.js",
    "revision": "24458556579a3f80037ed100e6681c62"
  },
  {
    "url": "assets/js/14.d5210f8d.js",
    "revision": "9965ba1584bd16b06558275fa2c1e1bf"
  },
  {
    "url": "assets/js/15.dc2a595b.js",
    "revision": "6b30f5f17eb695d5b55cea903325420d"
  },
  {
    "url": "assets/js/16.dba25a57.js",
    "revision": "04d57d319c8d89dd1a8a21c6c1c59361"
  },
  {
    "url": "assets/js/17.6092bd98.js",
    "revision": "9b6d7f3b8dc675d7f3628d25151ffc8e"
  },
  {
    "url": "assets/js/18.fe703e20.js",
    "revision": "bb4dd5df771c633ec5197690866e4a56"
  },
  {
    "url": "assets/js/19.61e7f473.js",
    "revision": "382397c161c1ff3f3069b916d432d113"
  },
  {
    "url": "assets/js/2.f486cf1f.js",
    "revision": "4bbc3750c83275f5e7bcf990cb493135"
  },
  {
    "url": "assets/js/20.234b668f.js",
    "revision": "6f6470b973d97f8857c031801e70f22f"
  },
  {
    "url": "assets/js/21.adfda222.js",
    "revision": "9fe671016ec967af402ccc7aa4d5853c"
  },
  {
    "url": "assets/js/22.6209d085.js",
    "revision": "c4d987ae928dde0f9517bef3e7285450"
  },
  {
    "url": "assets/js/23.3a1ea202.js",
    "revision": "3041a3862b18dae897cc4a5047b8ec37"
  },
  {
    "url": "assets/js/24.42f00b95.js",
    "revision": "ad8ce61120da0b85a94d439fc46b4bc4"
  },
  {
    "url": "assets/js/25.db7e0bbf.js",
    "revision": "bb5af5f6346a191138e81e837200e8b1"
  },
  {
    "url": "assets/js/26.98e7dcb9.js",
    "revision": "7cf85bd2fed9085195c9a1f2bdafbb78"
  },
  {
    "url": "assets/js/27.07d1af9c.js",
    "revision": "6132eaff56d6a5243efed6fc8ababb7d"
  },
  {
    "url": "assets/js/28.72f1abe3.js",
    "revision": "e25cc5856c71a5d30210f78029ea0201"
  },
  {
    "url": "assets/js/29.a65c6753.js",
    "revision": "7e7b5704d14425af643b303ce21566f8"
  },
  {
    "url": "assets/js/30.ca41c19f.js",
    "revision": "a6e5a73941dfbbf4dd311fec9b919ece"
  },
  {
    "url": "assets/js/4.d04ef7a2.js",
    "revision": "4c6575f3f61149988da11a8d6e0ec0e0"
  },
  {
    "url": "assets/js/5.4550bf5d.js",
    "revision": "31b26a08673127fa0579ab9cd9b7d524"
  },
  {
    "url": "assets/js/6.4a6790f8.js",
    "revision": "a57ad78ac65fb98fd8b593c7fceb1054"
  },
  {
    "url": "assets/js/7.2cec05cd.js",
    "revision": "42c187897b7d04be2beb4e7d2d4c0639"
  },
  {
    "url": "assets/js/8.34921347.js",
    "revision": "1796ba4ed8ae5cc3078bb3bc45e18c63"
  },
  {
    "url": "assets/js/9.d73f523c.js",
    "revision": "dfd5fb91679a89cc5edbd0509a5c33ce"
  },
  {
    "url": "assets/js/app.ccedb80d.js",
    "revision": "adee8c99894d4c9745a3413d6ae09c85"
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
    "revision": "9ed32d5f6cab3c2cc2e9894647a4a3a1"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "bb965f9d780c61702e550806a28077da"
  },
  {
    "url": "categories/index.html",
    "revision": "6c0526c9120c3ff8952a39ea1b715278"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "9d5da2832e1fc374c541eaf7c24502b4"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "8d36565910572b684db411b85809bfda"
  },
  {
    "url": "categories/other/index.html",
    "revision": "5cf7a1c735d6a7f163822ad59ad8341c"
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
    "revision": "2e3ad8c085edb96ea5e640e58805eb05"
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
    "revision": "524932fa843417280d02e1a17279381a"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "aacd9ae7f95fd4a7b1e732fba0308f63"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1da55635202dc6811b20699b12f15284"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "0decdcaaad13c97aab1d79f230091f59"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "d585ba86c37b88863f560aac9adfb407"
  },
  {
    "url": "tag/index.html",
    "revision": "2121dafabee8e27d263185565529497b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f90659b94fad175f21dc11c434fdc0e1"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "ac9028a5f1bb878d16f4080835805fe9"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "24707c6b5e619010e0886b3afeba36f8"
  },
  {
    "url": "tag/project/index.html",
    "revision": "f6edd068c44e10a50d428b0774beb0cc"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "0c410484e223a32c77e56c464f56ab15"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "f62de169a2d735b4ed04c36daa7688f1"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "c781c35157a2fad39db3c4fe9c5e149d"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "9848618cedee4fd889dfac8ff240b0dc"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "a580419b7662fa43694ed0d10c9f4436"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "19b7ceecfd47cca7c55a68d1cdfb91c4"
  },
  {
    "url": "timeline/index.html",
    "revision": "8f3614a8fa5a95996e3791758fb64442"
  },
  {
    "url": "views/about/index.html",
    "revision": "24bbfc3d52b23e54867e3f618f647e81"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "8f77bb4cccec652b16e14a69f58acb2a"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "16f20e84adb0e470c5a0a1fb74dfa456"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "adb49b2bb96268bd57b5e590a580fdfc"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "4cc3e7c181fa80d6123ad2505920ef99"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "891e41ad7ebb2e10b203c8c22be957b3"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "aa416f6eaa486ae2ffb3f6b9d2af543a"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "69f45f8c0538fd14958ee06b00c6e1a5"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "986dd1983d1dadc54bf0cd2f72a9524d"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "524eadf8f9fbf59ad0c367bcfda43c7c"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "24568762a3af8cd4a5e7824a6f6f29f4"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "bfb5c5a88c0943334b6cef7ea91c007d"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "69dc05ab46fd8ed80c39d02d32d050cd"
  },
  {
    "url": "views/project/index.html",
    "revision": "613edb9c2f7907cabc53a60a92922797"
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
