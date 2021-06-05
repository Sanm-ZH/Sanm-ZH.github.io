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
    "revision": "d069e8b084b7f8c2e13ed166b24c2581"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.5eb3d173.css",
    "revision": "177192c4f8209cf81cd17ab4fe29c8bf"
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
    "url": "assets/js/1.8bd2d91b.js",
    "revision": "f4f3ffe9040e5ab8d4bb0086edf2ec86"
  },
  {
    "url": "assets/js/10.6c8c863b.js",
    "revision": "3d37181c160552c2121a933650ce70ba"
  },
  {
    "url": "assets/js/11.c0414757.js",
    "revision": "a33d610587b57cf630e91d71314b7e95"
  },
  {
    "url": "assets/js/12.030bc7e3.js",
    "revision": "5f614d2f259a0a6515dd96260e6e5d5b"
  },
  {
    "url": "assets/js/13.c2fcae97.js",
    "revision": "f843a0e864804ec320b796e201e40a43"
  },
  {
    "url": "assets/js/14.031dae51.js",
    "revision": "c36c1e0f20657b760149b449358c65f5"
  },
  {
    "url": "assets/js/15.ae021954.js",
    "revision": "002ca490abd6f0f144817f5d0b539352"
  },
  {
    "url": "assets/js/16.0f9f7590.js",
    "revision": "c2ecac9e652d0d9b47e539014517c52b"
  },
  {
    "url": "assets/js/17.aa0e0e4c.js",
    "revision": "b1a255ceda6be5ae41b12a3454f5c4d8"
  },
  {
    "url": "assets/js/18.d7dd8047.js",
    "revision": "3a4af7879b7d377a16a15c8863d01841"
  },
  {
    "url": "assets/js/19.b4f5da65.js",
    "revision": "477acb3711b46e252b18fe6241e6b9a1"
  },
  {
    "url": "assets/js/2.9adac331.js",
    "revision": "cab4cc227c378410a0b07075c0979a27"
  },
  {
    "url": "assets/js/20.a11cc96d.js",
    "revision": "08f932aeeb9ba9dec6813fa4ee0b15ac"
  },
  {
    "url": "assets/js/21.3aaa74ea.js",
    "revision": "3418dff06985acbc044650b0aa40d084"
  },
  {
    "url": "assets/js/22.539b1f99.js",
    "revision": "8a8c4166db27ffe9a459d6797603543f"
  },
  {
    "url": "assets/js/23.ed404df8.js",
    "revision": "94492029ec706abe2a383fb3c85cb0ff"
  },
  {
    "url": "assets/js/24.6f7a5098.js",
    "revision": "52bbe8e5ab2292bfde8765a3843bc4e0"
  },
  {
    "url": "assets/js/25.153e9169.js",
    "revision": "4d3a5455db5fe3de127dbbe6117701c7"
  },
  {
    "url": "assets/js/26.9f7add02.js",
    "revision": "3d686a9adb78986c1b2171be2d1be03b"
  },
  {
    "url": "assets/js/27.10923613.js",
    "revision": "137232db15a83edfb8d0b4b2aa04ff92"
  },
  {
    "url": "assets/js/28.21a72b82.js",
    "revision": "05db645423b395a84f6a62bc2a2caa91"
  },
  {
    "url": "assets/js/29.104eccca.js",
    "revision": "1dbb3cae1e9617674f5038c7e9adc87e"
  },
  {
    "url": "assets/js/30.5eba18ab.js",
    "revision": "e8d7fdaf618f25e7e3d6e4b06e8931d5"
  },
  {
    "url": "assets/js/31.4e0319db.js",
    "revision": "3acc90f0eec12c22d90705e0bf7b0a33"
  },
  {
    "url": "assets/js/32.af3f8b8a.js",
    "revision": "e21c12e0ad4f52895934dcd36d0d1419"
  },
  {
    "url": "assets/js/33.6b1b2372.js",
    "revision": "f04ba8aaa87fdf525843fec8e1b238d5"
  },
  {
    "url": "assets/js/34.b8df0b8b.js",
    "revision": "d14079836277cd13f9a1a78e9743fd40"
  },
  {
    "url": "assets/js/35.ca98eef9.js",
    "revision": "ed0011dc475eb53fab555deb13cee509"
  },
  {
    "url": "assets/js/36.ad097650.js",
    "revision": "036312b4ff889b4cec82e2f1ef9e25a9"
  },
  {
    "url": "assets/js/37.d7d14436.js",
    "revision": "f9593ce77abfbed2120be5c303d3ceee"
  },
  {
    "url": "assets/js/38.2e5a0571.js",
    "revision": "81bceedf0a641977bfcf41a5b5b611b7"
  },
  {
    "url": "assets/js/39.dba91c1c.js",
    "revision": "da78720079ff7b471cbf8cc1c3964d1b"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.42070fd9.js",
    "revision": "79f6979c9dc50e884f161522b9c6b6da"
  },
  {
    "url": "assets/js/41.7a450698.js",
    "revision": "6c9e36d2bba4253afcc14bb068dc2b65"
  },
  {
    "url": "assets/js/42.6e1059c0.js",
    "revision": "a3df59a982f5525d68a4a5bca7f9f268"
  },
  {
    "url": "assets/js/43.ed9da260.js",
    "revision": "c47e9d30fa0946ba2c055e7b6c3bf7f4"
  },
  {
    "url": "assets/js/44.98d4d7ea.js",
    "revision": "d0ec9b3f768c9007377e31906a6bab11"
  },
  {
    "url": "assets/js/45.8dc15491.js",
    "revision": "8649f3a11086a403cb1646c30edce35d"
  },
  {
    "url": "assets/js/46.2ba2999e.js",
    "revision": "7a78974f4540fc55f8175dfc29372228"
  },
  {
    "url": "assets/js/47.cf1279d4.js",
    "revision": "061772279a8d7d01496d054829cc99e9"
  },
  {
    "url": "assets/js/48.183ad202.js",
    "revision": "5439d51db9c27e4b66952f6dd290a238"
  },
  {
    "url": "assets/js/49.ada69a55.js",
    "revision": "a50dd380c6c9f5bfc67296385b795c8b"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.266ad661.js",
    "revision": "7d1a025a00e3693e07bd3d8f44e81283"
  },
  {
    "url": "assets/js/51.1a0396d0.js",
    "revision": "e4dea0f572fc9b17c4cc226af0226215"
  },
  {
    "url": "assets/js/52.ae747020.js",
    "revision": "d514ecd3a330c7704d7710e834c00542"
  },
  {
    "url": "assets/js/53.1de1e747.js",
    "revision": "d2424a329d9dc63f2f9d390509bd3e28"
  },
  {
    "url": "assets/js/54.ac1d2bc4.js",
    "revision": "c910d66d6879c98c20d8a8ec4121e5bb"
  },
  {
    "url": "assets/js/55.30bfc8d2.js",
    "revision": "97ab7511172784d8c455c36fd9416b30"
  },
  {
    "url": "assets/js/56.a6b234d9.js",
    "revision": "e051cc3f8f47c422c99a26ff29c416ac"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/7.dbd27f9e.js",
    "revision": "63df5a9e6928d9c387f70ead9d24e2af"
  },
  {
    "url": "assets/js/8.f86fee8a.js",
    "revision": "ce141b1bfb3d7c27b56b9a783e0413f2"
  },
  {
    "url": "assets/js/9.95bc360c.js",
    "revision": "7c2c4d5f747c42afbef39d09de262a27"
  },
  {
    "url": "assets/js/app.a5336291.js",
    "revision": "964bab1ad503ec4df995dde2a2d613a8"
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
    "revision": "cae14477f56901fd23bea1e7ed2d4e6d"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "ff9eed60643def41cbd7af17f1143651"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "04b2b5d8d1987f8437c08315d48e3149"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "408ee9860854375f933d98bbe37fcaf0"
  },
  {
    "url": "categories/index.html",
    "revision": "91d50bee31b87544cb95a1d686f79b5b"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "fed90757b2ec8ca284f897919e6f2a4a"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "f8054235fac611afcb1db857093bd288"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "232db3c64472612b783adde871035046"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "6bc6ce4c55f8f34643b3ef542fa8bfea"
  },
  {
    "url": "categories/other/index.html",
    "revision": "26ced3503ca771e1c97705cb88d15027"
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
    "revision": "72469a4cc5bed8374b8a2bd6526ccc88"
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
    "revision": "828fb0369220f2b46362569b8c344195"
  },
  {
    "url": "tag/array/index.html",
    "revision": "eda5047220eb8e5fbf15872ccadd7b48"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "8d47d74123b206973da9140919d3cb6c"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "bebc1ff0f72ad55dbb1ec0776f71e0e2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "816ab69dab287b74f3e846b6b1306da4"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "d36149c8589f8e62ae3ab25813c2f044"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4c4bd2153ddc821d62c8fd7baad4caec"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "9ca9fbdefc8b987a2b2db365d07d0edf"
  },
  {
    "url": "tag/html/index.html",
    "revision": "311e94ed4199204fcbc84bc07576fb99"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "0723cb3b3db90dadd2d6b5fb3c7fb44d"
  },
  {
    "url": "tag/index.html",
    "revision": "67b15e1114936f834a014a43849d6156"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "44c33177c876d2496a67ac90530f3346"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "674dbefeb316e98a1d599abc68ad8b17"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "dbe3e89c940a11282440a349ee0e9cd7"
  },
  {
    "url": "tag/js/index.html",
    "revision": "38413e5344ea957efea9ae9c62d7827d"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "611f7c4482abef028d89339959d9e6ec"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "6fc23359c447748533cb512f75ad2370"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "363736768a33df9e75f29f19dbc0b490"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "b51f5876584731bda2c32c74346f563d"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "9f5a68a1526b22181663a767792a634e"
  },
  {
    "url": "tag/project/index.html",
    "revision": "9db8382c0f689ac0f273ca8764f47711"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "518e185cf6cd5b4aa9653bd8c43cd052"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "a446704f0963753acbd02b7cc6714916"
  },
  {
    "url": "tag/style/index.html",
    "revision": "bf5fed6a771788d8b126a27e52b80af0"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "0733caf3c16a804982c39d415c560f49"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "52a697f665e9d1672d16431c9509ae59"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "346c8728c097bbe7a70930d49569f1fd"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "9d6fb5262d3f2c6510c6c55e4a3cb169"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "557ca4c83ab28c29bb4ef806b58ec87e"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "5b42cb10fcec9f68b7d8eda380af1b14"
  },
  {
    "url": "timeline/index.html",
    "revision": "f311b56d0ed5a8f40687f7299561d3fb"
  },
  {
    "url": "views/about/index.html",
    "revision": "815100123673cc884681cd04a0e19f46"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "e52281872655ad8a264f54786d160fa7"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "1994d5a57892c2bf8f97fb9a0963ffcb"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "c0e2930da982a1779e145d148941bb17"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "b60ec4908b31857939bcb55b25c80b18"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "d8ec911a83a3e67ac97ae333698cc5d8"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "693b2185b71497f2229685c17ec79b62"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "e960b9c2a622a6e7ec42bb3f6246a8bd"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "9fe0a8ae2a23c892e06aa5f7fd1673b4"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "83d59a7c6cdf7bd7f749d531fbd0b228"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "1ea16d8ab2cf0a888b2b756c6b77ccae"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "94c48a3127adc534eff1c497d3fec29b"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "775bb845ce6d417ee7da0ff77b8b4992"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "f90f5f98c5123f26058bc92cd874cb51"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "8738ab651d23581c296d5a1e3ce9e36d"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "54ad3bc4500a9d09c51954007ef837de"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "c9ca8a5d28600c37d1519e19bce95bed"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "ca45743a65360a9e3e25d87dcaa97e93"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "4dcf04f9de0937570b1eabd938e0a6b5"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "6ff22c8f57b56fbb7eeb4dd7af708e4d"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "549dab160dadc56042d9e74d4c687d04"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "4e1142c3aa1ffce72913bd109a128610"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "f7eadbfedc76d19aa2f75ac98e01c8d2"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "e209a7faadd1e172bed8277b83a8bdac"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "e8f17f72c60e81b8d9f2f22a5b5635c6"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "15dce773aee4601803c58fbbba9ec580"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "3bbb35fc850d0ec7469f678539bfaa16"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "37ad61ec28a6fb74f808b5954ef2018f"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "dbe79fd7ac3ec394b498d6b09ba43718"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "a4ab1889993718b348eeef50a3831e33"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "3dc18b30dbc841cd4d8eced3a47ddd81"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "4f0355d96089b33d42074b6d0da8330e"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "0c9c578b39546ad3d2c098c0119e41d7"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "a57b1d4443c8dafb15a11974d93b3adc"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "6376f092b7318843c29efeebd03a7999"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "fa7d698086c78f941a37368106f21579"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "d3781c9c2aa4b65204e9a2726edf212b"
  },
  {
    "url": "views/project/index.html",
    "revision": "5d45aff708d0a3e8c366d6f759b86b35"
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
