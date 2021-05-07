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
    "revision": "758bd661948adf3bc21206ff748c04ee"
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
    "url": "assets/js/13.64eaf1be.js",
    "revision": "7da6cdda865cbe730c9ba55fe58d1460"
  },
  {
    "url": "assets/js/14.844d81b9.js",
    "revision": "14ea23b593cf0c328f76c707f3477198"
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
    "url": "assets/js/17.1547ca7b.js",
    "revision": "a3264fe0e052fb64c86e5969b041b756"
  },
  {
    "url": "assets/js/18.9fec13fd.js",
    "revision": "28a82028e8b43ca7c50ea042cb48b02c"
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
    "url": "assets/js/21.292323ea.js",
    "revision": "5811e66751ff7badf63725118ca737c3"
  },
  {
    "url": "assets/js/22.f88784c0.js",
    "revision": "1d005792be59c99ec2e093d6efdb2a11"
  },
  {
    "url": "assets/js/23.d7584533.js",
    "revision": "7164a1a5bb9bcc11b2c27b379b3c9ad6"
  },
  {
    "url": "assets/js/24.d3cf067f.js",
    "revision": "9b820f3fe1c2418d78205ced817942e0"
  },
  {
    "url": "assets/js/25.d40bed94.js",
    "revision": "93b1f337916a451ca578f5ca54964c19"
  },
  {
    "url": "assets/js/26.4016cce2.js",
    "revision": "869ac69f6e785a5676353e3e75d1f059"
  },
  {
    "url": "assets/js/27.cb14c4b5.js",
    "revision": "e1b5d2b4750bb772ba5d7c9250c93bd7"
  },
  {
    "url": "assets/js/28.62b43d57.js",
    "revision": "4959b4d44d1971beb88de9af315b26d5"
  },
  {
    "url": "assets/js/29.a477a624.js",
    "revision": "14a261df0e58d31206095cb13914459f"
  },
  {
    "url": "assets/js/30.a5c40a01.js",
    "revision": "f44af478435268de0dc464874d8b86a2"
  },
  {
    "url": "assets/js/31.c4e914f9.js",
    "revision": "da352af82794f707954162589c312c8a"
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
    "url": "assets/js/35.6e31b007.js",
    "revision": "0b112e5a8e96922135dd0c4c9e4dc064"
  },
  {
    "url": "assets/js/36.7d024b82.js",
    "revision": "bfe867f3ade7769d254fea1f7a403835"
  },
  {
    "url": "assets/js/37.f250150f.js",
    "revision": "b7fbe02786712ed44684375f2bfdc380"
  },
  {
    "url": "assets/js/38.0435234f.js",
    "revision": "977086d9e1d3f25d3600984ef647d490"
  },
  {
    "url": "assets/js/39.d49a047e.js",
    "revision": "0ab90ca2a99279f4a106e8420a1bb0c8"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.18c32201.js",
    "revision": "fd32f4a3a462c0c231460e1d32a1327f"
  },
  {
    "url": "assets/js/41.bc794442.js",
    "revision": "7a9dde9397a5780bf75ff327371fdcdf"
  },
  {
    "url": "assets/js/42.0427cdf0.js",
    "revision": "6083c0e07e53cc2884c06dcaaede97de"
  },
  {
    "url": "assets/js/43.4e3d7f82.js",
    "revision": "32fd13573026f948c62cfe7c68990451"
  },
  {
    "url": "assets/js/44.560dcd2b.js",
    "revision": "b5245c3f3d5787b79fe3bf131977aa23"
  },
  {
    "url": "assets/js/45.456f7e70.js",
    "revision": "50625617b329dea2701033dd425bb97a"
  },
  {
    "url": "assets/js/46.ed848806.js",
    "revision": "2fcac94425aa8b8c7c4c63d0cd82a7fe"
  },
  {
    "url": "assets/js/47.7046644d.js",
    "revision": "516b6b39909c64b161020b3dcc53c6fb"
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
    "url": "assets/js/app.c9508875.js",
    "revision": "752a5bca158a1bd46434ef5ddc312e9b"
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
    "revision": "9ed7d50222328b9ef4b06ed560836e0f"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "9f2df32ba22a6d47bb6f1c56380601a0"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "67359155300b14d1242042b36e5277fd"
  },
  {
    "url": "categories/index.html",
    "revision": "26b3f8d2f6e64a54dc8768a2bc0a9042"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "cffecb0ee3a88d2af7e8ca52c58c0515"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "cb10eb806a40f10a3fe14fed173b669a"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a66b1d484a28a1a57f1921289cc89d68"
  },
  {
    "url": "categories/other/index.html",
    "revision": "5a948a2957373ede99d50b9aab90d5c4"
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
    "revision": "5ca00ddd64befb511d590d99efc8f19b"
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
    "revision": "92e5ee2c57b4459bb104dc9362fb44ab"
  },
  {
    "url": "tag/array/index.html",
    "revision": "ceb333304e3b315165acd6dabe3b4b38"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "cff08e701df04c36a530d983a04d6fd4"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b991b8262fc301f168ad3658db8fbe5a"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "9a317ff586a59764103281c5862ef0bd"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c131029bc59a9950871d0bfa77588eee"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "03a2ff87f318f1376031748b96b8ea3c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e275f5220e11eb09cdefb88b7f505881"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "2c13dbdeb96728dda1e3b7a1697c66b3"
  },
  {
    "url": "tag/index.html",
    "revision": "4555ed881ad686f422f1a3b222d59629"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "f30d53de3e4110c8a54b8d1d07395421"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "d0993bd1d2c6103f8d6f23f99d039512"
  },
  {
    "url": "tag/js/index.html",
    "revision": "fc0ae012a006bbb1c721bd2c12f82cf3"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f76eed9c507eefbd399c8d9c44b9ccde"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "0a073540e5459c398d37d9d629b71d48"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "b33b965130af247ab880f072cbffc5ed"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "3f3ce5f6cb004750e2fd81a7d1f2b375"
  },
  {
    "url": "tag/project/index.html",
    "revision": "2a042ab80333d04e492bd2fc8d952053"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "b2dcb909a82b0e1f4d6af2431ce71b75"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "d9ffd95fb4c940c3687a2e3ae0ab1529"
  },
  {
    "url": "tag/style/index.html",
    "revision": "6b06656a49d1f10e8fea9b5672f590f1"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "61d5889fa53aeacb28fea7642db7000b"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "5e8ff3cffc70da580a6e2c1b193d0cea"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3f7af26fe2b8831c84b76866c22f896d"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "ecb8b30779da636e6a4aaa5994a1f875"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "cf6f266fd68c1619961ba9bcd4bb8ad3"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "a6b3fc64893e1c4fc45436bac77a7194"
  },
  {
    "url": "timeline/index.html",
    "revision": "25ad88059a45152149d9b9774e0521eb"
  },
  {
    "url": "views/about/index.html",
    "revision": "7ecc9e906f634e0a462656a4aaf5cbb1"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "64f839c5290f8e35c3beecc3905afe23"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "fe08da1ffa69f5df86873bb2e5a2ccf2"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "f65dc7ef8c145b2bf914637d6cb02298"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "ebec8c851888e7d5d162576fbaa7ebcb"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "675fdec063794d7bb9e5436c7d31deff"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "c8dde36b39b26ac0ff8380ba8f7bdd67"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "05462fd09da4a605cb6408cafde15484"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "c40339e6b6f49c161fa16c338981e981"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "b4ef3f7d2cbecb50201a4afc96027e99"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "5b649b406a1ae8967a8303409a522e3a"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "1046445f38daea7d7ff19c7da42869c8"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "f3b663bc1e4962aaef25767778a53529"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "8745545299c381b041b7067cfe003031"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "435c87b15cbeaf971cd15ad0d9babf54"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "c68f939e5b1c6a607d72b2e974b0b4af"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "83fa2f1dd4b8a8adafddd84cc8e5b8a0"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "7cc8a4b09783eaaa982ea80579d6d308"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "c695c603abfadba87c241a2aa718ddb0"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "920d4894d3aed49c216c571d62603b8a"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "ca6411038cbac4631d42b622689c1978"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "474ade7166589221017b54b097d3b532"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "cc00bc576967caed969c010d4fbc5059"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "ec1eb751b15db5ca454bda204c3dc0ed"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "73d03dd04f0a4146d82a6d148794ec64"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "626b8ad5844b4a1ef8d749b5b0ee0f59"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "fbf8c21d801003e0c5d794e51244fda0"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "759a18ddb5570c8a83b51735c26e469e"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "cc3e2d4593c8ce8c55c24e0b10918837"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "fc2bb55db53e9802e227e96bb480a791"
  },
  {
    "url": "views/project/index.html",
    "revision": "d4c5f8c39db55ed8ef54cacf7b97ea64"
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
