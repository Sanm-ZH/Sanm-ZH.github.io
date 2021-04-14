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
    "revision": "4c24e29037b2e88582bf2603d75f6964"
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
    "url": "assets/js/13.38937048.js",
    "revision": "5341d97470a7e463f2c44228f7325b8c"
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
    "url": "assets/js/16.8a177e02.js",
    "revision": "28864b8062ce487227cacc9310527ee9"
  },
  {
    "url": "assets/js/17.9143969f.js",
    "revision": "b1a8cc3546a7793e255aee78c6598b2e"
  },
  {
    "url": "assets/js/18.a11ce09e.js",
    "revision": "703638cc169295bd287f4f1c934440c1"
  },
  {
    "url": "assets/js/19.c6a4d377.js",
    "revision": "8c29ad771d25bae5d80ff364db67aa09"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.ed04ddee.js",
    "revision": "93786b7435bc4f14929416ef7f5e5220"
  },
  {
    "url": "assets/js/21.e25ebde5.js",
    "revision": "9c0085e9f0bbfc5d3184ca76bfff4b86"
  },
  {
    "url": "assets/js/22.2e6831e6.js",
    "revision": "797676fcf797d8cef27aeb2a0c776b30"
  },
  {
    "url": "assets/js/23.b821efbf.js",
    "revision": "f45f1aaec3f800dda20b69d0b83a7939"
  },
  {
    "url": "assets/js/24.49550695.js",
    "revision": "bca4e1eece3996e9763e5d015b02c9f0"
  },
  {
    "url": "assets/js/25.0dc15757.js",
    "revision": "468a5aafd08dc347e5ffbf4c50038064"
  },
  {
    "url": "assets/js/26.7f104dee.js",
    "revision": "71827c80fa4c9ae39db64f2e1c98261f"
  },
  {
    "url": "assets/js/27.0225bf70.js",
    "revision": "f369632c00be74be30f21a311fd86ad6"
  },
  {
    "url": "assets/js/28.08222342.js",
    "revision": "5b8bbc9b43146d3f5d32e661b82dd396"
  },
  {
    "url": "assets/js/29.e217e01f.js",
    "revision": "41b45c6f1e1d4b78fb40342741e62094"
  },
  {
    "url": "assets/js/30.6f978381.js",
    "revision": "828eba79ed67cf63ae64bc9426f7e06d"
  },
  {
    "url": "assets/js/31.1a191239.js",
    "revision": "cd210923f51f8f79bc066a0b1fc0d1e2"
  },
  {
    "url": "assets/js/32.42896955.js",
    "revision": "0d966681bdd4b66cf75119392024dfcc"
  },
  {
    "url": "assets/js/33.48951ed3.js",
    "revision": "cc3359c0cb0113168c55e07e7193d441"
  },
  {
    "url": "assets/js/34.e367bab4.js",
    "revision": "bd09b099bdeba16103c085cbae5af64b"
  },
  {
    "url": "assets/js/35.44370964.js",
    "revision": "e3b0d83a872c1b15ed4431595a4be379"
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
    "url": "assets/js/app.9b9ee65b.js",
    "revision": "e957abe8c68a9e22e457c9c794d3918f"
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
    "revision": "783ff25bf0ae045785235a864a638f4b"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "51cfa58009804005425c68aebce0c91f"
  },
  {
    "url": "categories/index.html",
    "revision": "da8d95cf2f9902a8973970c910d860ee"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "87dbf6b37c4868891dcebac85b73d474"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "b2f10f308bd694d5a11a96e78a634ca9"
  },
  {
    "url": "categories/other/index.html",
    "revision": "579a9de03ea7514b171cd5ab98b11f82"
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
    "revision": "b229d4b56132d80edaf9adb456d40be7"
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
    "revision": "e45d931a33a89b2e3bd16229f5ae96e3"
  },
  {
    "url": "tag/array/index.html",
    "revision": "64300f0c9acb3bd266a0c912887bb789"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "105140890e02b48d1246a14d79471c38"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fa0477b1a9da4e80db31a46f6ec65c25"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "829d663da1f47f713e8acedbdc306f9f"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "c523501a95a7ce6beb8d46c9a20db322"
  },
  {
    "url": "tag/index.html",
    "revision": "010c3bb581856b649e5c4b957675270b"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "e8c2ba79c34af927cdf0e0db59277ab2"
  },
  {
    "url": "tag/js/index.html",
    "revision": "09c99ab8430d845b33fc2d508e8dd788"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "8a19d3faaa8ede4393f0dcceb04592e8"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "c98a639527d316d636424d60ed55768e"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "bdfd40f8bd2a59451a6471903d48ae86"
  },
  {
    "url": "tag/project/index.html",
    "revision": "6a8acba905c31e4ecbfa5ca8b63890ea"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "6ef4678e4994c6dfa72e60c7bba0b912"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2cee5b94330b87461925307ec23ff0b1"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "a31d5e6c3e7b78ebd05c2aee9877ced5"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "82ccfafdedc786a05def301e52eb39b1"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "e811173c9fa3f54d3bbb38830b1f2756"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "260989fc1c1ed19f3d126b34bf51011f"
  },
  {
    "url": "timeline/index.html",
    "revision": "f17f870e59b676e4fe96852f8206fcbd"
  },
  {
    "url": "views/about/index.html",
    "revision": "7fbe9bba1141ee41b6e16b1e61c10293"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "413ea98487a0f082c2fdb8787b15b74f"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "f9beece063c0756001d5860c2460c84b"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "cd4de154ec543dbdb0754edad5ae1b16"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "0f0337319ba0cf17cf1540edeaa01505"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "2ac85fc0901d0d0b84e06222a1b721b3"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "7c5418cb56bf599d45d5a6305373837c"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "ad2dc43a1ddefc73599c358ea6aa447b"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "a228d798f30b05e0ee6474e34f2483cb"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "6808fc55d43dafafa7f94c3c65e50d2f"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "988105c503678691c7a84d3799a5bc70"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "155b2056afd7b70d97d9bb871ec9fa5d"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "f5e702aa868f4b98114568c181a42f3a"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "c24850fb5afe1c907fe00914ade810a9"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "92b78c7411a55fed88a25736afd621a0"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "5e1530861252a1591cbf2e33d5f8cc2e"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "4981e05c3ba8eb5b82ff124420df0d91"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "31712464f2ce0a1ed46000cd690628a5"
  },
  {
    "url": "views/project/index.html",
    "revision": "78af95f6fc37a7db8e69258a995e8661"
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
