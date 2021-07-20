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
    "revision": "f5f7a0051499bf83784ed2f905243742"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.6bcaa63f.css",
    "revision": "3245ee944a947158ada9be71fbf6dfd8"
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
    "url": "assets/js/11.4df02501.js",
    "revision": "9a1ebb1a67192f51fc5c48c16a3744d6"
  },
  {
    "url": "assets/js/12.197c922f.js",
    "revision": "2715f3d992c129d68c2ac39c4f773de3"
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
    "url": "assets/js/15.aff55154.js",
    "revision": "d18aba069672fa08a4fe3fffd66c729d"
  },
  {
    "url": "assets/js/16.15f6b3f8.js",
    "revision": "a201bd54e24a00f585286fe5d5f9a8bb"
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
    "url": "assets/js/19.2142c6d2.js",
    "revision": "cd28be68f46d4ee067b87740a8f13d30"
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
    "url": "assets/js/21.f2a3e9a7.js",
    "revision": "198e4553fd721ccdac1a74a9bc634222"
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
    "url": "assets/js/24.223fb68a.js",
    "revision": "dc7cf7eb2502e18a2032552655db2db3"
  },
  {
    "url": "assets/js/25.babf47b7.js",
    "revision": "8026610092770a4e5d14764fc7df0f79"
  },
  {
    "url": "assets/js/26.1cb4a334.js",
    "revision": "081399520be3f086a7abb3960e98b0af"
  },
  {
    "url": "assets/js/27.07db2fbf.js",
    "revision": "80bec0d7e47b628bb37d878c2b8318b7"
  },
  {
    "url": "assets/js/28.51ab5912.js",
    "revision": "7faa243fafc68c20b638df99f9e1eda8"
  },
  {
    "url": "assets/js/29.104eccca.js",
    "revision": "1dbb3cae1e9617674f5038c7e9adc87e"
  },
  {
    "url": "assets/js/30.03ed2304.js",
    "revision": "0cd657c3e3389d55b33ffc50bce07149"
  },
  {
    "url": "assets/js/31.3c1e6ccc.js",
    "revision": "9cc872c8c58051fa55ce51da10198881"
  },
  {
    "url": "assets/js/32.c31d6e5d.js",
    "revision": "9ec7d220eada4300654b5cd19114b4a9"
  },
  {
    "url": "assets/js/33.6c0094b5.js",
    "revision": "bb0f5f62bd98c8717018f5f07064d003"
  },
  {
    "url": "assets/js/34.3ba627f1.js",
    "revision": "115794a90122832081d5f965911a714f"
  },
  {
    "url": "assets/js/35.d17f0a66.js",
    "revision": "af5dbf1e65b26526ae1ba12e9b601b2e"
  },
  {
    "url": "assets/js/36.8e7fec1b.js",
    "revision": "a3fc2b5e31f1b6bd236bf1d8b0045796"
  },
  {
    "url": "assets/js/37.23512576.js",
    "revision": "4bd34a067814c7500e880f55e6c2a51d"
  },
  {
    "url": "assets/js/38.331eeb20.js",
    "revision": "052fd26d1e227d98b0967f4918b10e04"
  },
  {
    "url": "assets/js/39.1ab0772b.js",
    "revision": "a84e68cab9aa2fd7644c6e3f3a7b419d"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.c17e6b29.js",
    "revision": "35b0007e3d40f3177324020ad7b6ada5"
  },
  {
    "url": "assets/js/41.e4a6c381.js",
    "revision": "4cc7762e2ef656ce8d7fe9eca06de490"
  },
  {
    "url": "assets/js/42.bc55a553.js",
    "revision": "9212d73ab5b00e06bc6879fd5e0a5d18"
  },
  {
    "url": "assets/js/43.a8093356.js",
    "revision": "8cff90c25454d604dee3b740eb405270"
  },
  {
    "url": "assets/js/44.b6af62fe.js",
    "revision": "20548dd3d55dfbc1797e4affb93b00a3"
  },
  {
    "url": "assets/js/45.ba909b44.js",
    "revision": "afd250f1d88299becfc899e481c6591b"
  },
  {
    "url": "assets/js/46.c5de1484.js",
    "revision": "8aad2d1ac3716e701ff7d0631b8a67cb"
  },
  {
    "url": "assets/js/47.cbf7fd22.js",
    "revision": "48695583a84bb95fecfadad75c724dcc"
  },
  {
    "url": "assets/js/48.0c6c002a.js",
    "revision": "17c14b3d92243c0af139baed4e2235dd"
  },
  {
    "url": "assets/js/49.1c653c90.js",
    "revision": "a81a7cce3e3497b32e0c37732d0f886c"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.80597c88.js",
    "revision": "89944df123d32b264a3e52a3628f73d6"
  },
  {
    "url": "assets/js/51.ac7c1588.js",
    "revision": "cf954d88d6d237a7223ee02d98f3fc8e"
  },
  {
    "url": "assets/js/52.dcfe6223.js",
    "revision": "08dab7c4b13fc0fb2d7629a82495f835"
  },
  {
    "url": "assets/js/53.a525ecf9.js",
    "revision": "d671dd86e8838b721d861824480b1ed4"
  },
  {
    "url": "assets/js/54.cae4ed53.js",
    "revision": "c05017dc42a273132f20ad8f7dad3235"
  },
  {
    "url": "assets/js/55.6c5dce4e.js",
    "revision": "14358dabe9e93d7c60a3552a55a8bda1"
  },
  {
    "url": "assets/js/56.dfa800f8.js",
    "revision": "c50ba91379116e43145aa3078439995e"
  },
  {
    "url": "assets/js/57.8356ee29.js",
    "revision": "9a6307d4e28cf9635b9df84f20f37538"
  },
  {
    "url": "assets/js/58.c4734cff.js",
    "revision": "b98726168a7c5728401144c05adf4184"
  },
  {
    "url": "assets/js/59.526f9eb5.js",
    "revision": "09f453605a2c6e9b1642e5922d660827"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.8d1a4b3d.js",
    "revision": "acd5b05b634abedeedc562fc9b9743c1"
  },
  {
    "url": "assets/js/61.9a07d141.js",
    "revision": "09cd568daa0aad80783411e0b3fb721d"
  },
  {
    "url": "assets/js/62.0f759690.js",
    "revision": "b4f152fff3318f832d285c8fde8b4ea5"
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
    "url": "assets/js/app.e1acc61c.js",
    "revision": "228f719af39288dd512ad6131081f7c3"
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
    "revision": "60a970ad4b69e27f9cd657b7b4ba69a5"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "7d4fedaef8e15c51e3b32e8513ea4ffc"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "d2c992ed57fac1bcd860d1f76a6f8cc5"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "7af246d5fd80e44bdfe6e0b50d7c0daf"
  },
  {
    "url": "categories/index.html",
    "revision": "dedf6fd8e5c9a592e7d07ff022477cfc"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "81aae5714a2ac148d2edd8a8d433ff79"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "b37a0eb7ed1a2dfe6d38024113768fc0"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "7746403a961c08ade8033d8e6a60a7b4"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "2d35ba56db1fa5fa81b07da40e65c567"
  },
  {
    "url": "categories/other/index.html",
    "revision": "8887f161224a55aa51de4a501ac55cf3"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "44ab5f10eb9dcbf4c060ed9a72730c62"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "cf6fc77360cbedc01f5c227cae61e3c2"
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
    "revision": "f8bec74656d7c42e70ea06a30642cf00"
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
    "url": "self-blog.jpg",
    "revision": "adb6dc7dc0094c1d160cb8fd601514cd"
  },
  {
    "url": "self-resume.jpg",
    "revision": "0b07c2fcf77fb875cd329e73ff1e1f38"
  },
  {
    "url": "tag/App/index.html",
    "revision": "1f94be9f4b80ae18e840d0bde395e7ba"
  },
  {
    "url": "tag/array/index.html",
    "revision": "a934cc8ee0ae296769bce0ff22b9b39a"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "6f2ca3c532a41bbc198eba6decb49f2f"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "ccc132cf2cede8b782043da5b657e53c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0f32c0cf183315f07c5b8b1eb03fbbeb"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "4669622289acb03a3dcdf4f62f31a4a4"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "1186e7a5deb0312ffd356c29c73d07ba"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "b1ef98f87a32e7eb9a658f44b34dddfc"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a3971624768aed7c3bbc137810ebc45b"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "d14b7dbb8b0f2ab00d73ed9eb8a4f3ad"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "e4d73fa2281844103b9460b2ef1a1cfa"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b4a47ca69188d513fc363206bb435af7"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "445838ce9130cab3504af0888eaafcb8"
  },
  {
    "url": "tag/index.html",
    "revision": "1af13b53f200164049576cc7267c2bf7"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "f2f25f90d672c947c0877d474d8ad990"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "db8a4286aa5ddb77e7c055724c212fd4"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "fe3bca8951ae6eb66d995657c7975a54"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1599d919ecf42b1cf383949505f645d4"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "ba00e829fcc46b5a61fe860ad51eb5d9"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "0477371ae885ef20e9d558b58ac2307d"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "bea6a904d35e0499aa630e0d566d2dbb"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4538013d501eabcdcdd7480a5f78e9e4"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "5217bb77394d5f1fa5bfd46350bbc89a"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "20addf3714c40017ca627fc47b2a0b52"
  },
  {
    "url": "tag/project/index.html",
    "revision": "7c9a300033640e41333e44fedc666b95"
  },
  {
    "url": "tag/react/index.html",
    "revision": "5b645d5140f1c598e38fc09435c07212"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "25e360ca3ad87c023cea6b50f6774d29"
  },
  {
    "url": "tag/router/index.html",
    "revision": "002357f132949d67bca7e9017bcfe667"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "8f04d7e95583d1ea4caf401b3ef12224"
  },
  {
    "url": "tag/style/index.html",
    "revision": "c9690386cc2339230b45e91f39c11a54"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "6cd7625fcec1fa1346bc922e2154a7eb"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "ed1d7c8475062489df0e80f936680fc8"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "b7d86623be23d962040df30a52cf1aad"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "342c99e66fbdd8e1cde4c53b88e643a0"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "f22f66fc7282c8d8ccc2f9af3c8d51c7"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "4cea831c9c35abdda57fca3e570ac25e"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "62e02a575c9639c595b7ece30474311c"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "438534aedbe929b6e281bee90df03fe4"
  },
  {
    "url": "timeline/index.html",
    "revision": "41c84fb8c288f956b5813c9828ed7a1f"
  },
  {
    "url": "views/about/index.html",
    "revision": "9b5b4558e6145750a5b05c52e41b6b85"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "10d3a517bb14bc40902a9f9c90a16f91"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "acc386304585a765183d87a267a3e4ef"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "bdd96297b512a374d73b9bdfc68a3962"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "95998d3fd1726b2f399d2a6ea070be3a"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "6695ff15d17d253ff3532b39bcfa1ffe"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "360facfebc7d0a488fcd12f7dc93bf1e"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "99eccbb315a6d1723cf96feddfb40542"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "0851049b3c6b94e2c2f9111a213131df"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "7752145cb30a04b47473939834616803"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "0d9b2812006d7cb7146e10edbd9a62b1"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "7d7f2d6c9aecf233d2db490d10481241"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "153460dddcd8546920de5cc6455a6672"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "8a8dc00ce35eaca71a28f5521509e55e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "a9d07d1a95f8a9917833dc0268a1abd6"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "7deb1a530bb09c13ffe4b8401c90bd08"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "51d7428f6f957d82b08f92511d2a8307"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "9c913e4ce0cea137ee0d219911845dbf"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "d0fab3c29c3118f3900c825ec6a32ded"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "beeb8c022e7d36ded78e28447a163540"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "0609c76a9f7b16c9f5b1ffe382be2d85"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "0c57a701a0e57c296bdf8949490ab53d"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "e1dbecd2caafd962a9effd6782ff333d"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "7f40d8eefcb666caaa50d7d2da8c8cfd"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "534e80b98160ec614deaa82ecd050c4c"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "a4a279afcdb8630072e03827bd10928e"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "b1a6eb625152b2f70b947eb924d6068c"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "2bbc87390c1827f71f0069b059ed551a"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "108527f5a68568d5c819e2652f2f31b0"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "baeb1524e04b5108b6021721b88a5c67"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "cd1712a8b8cec26169aa0649f7b71278"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "870045e9d8f798821679c9bb48ff9d76"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "547eeabe14293c23b0deb053c4c03d97"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "a59ac8a00c1d30b1da8b09ff006bd06b"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "a81c26cf486d274888356d1856dc5ad1"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "bb30ee0ad0bca5e0173cac16b14c7c5d"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "191946da961b96a79d0a1ab1db0012c4"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "57146b0f656160b11847cd7929e97ca2"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "f2af40153277fff86e748572fe773a4e"
  },
  {
    "url": "views/project/index.html",
    "revision": "2111bb77dd0cdd8f31e1b3e7667bb4b1"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "96583109bdcc2ba2ecf4bb7ee17fb7ae"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "e26ca0b2cb1855dd37378cac70aa0161"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "8b91b41c50ce81224a69a63588dd5d0d"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "2dea008ad67148a870bc0c973125a322"
  },
  {
    "url": "vue3-doc.jpg",
    "revision": "21dae5052b51835978e456e993450f4b"
  },
  {
    "url": "vue3-ts-vite.jpg",
    "revision": "4931da9a7dc6b6f08832ef3c4c1bc36e"
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
