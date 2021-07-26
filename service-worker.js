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
    "revision": "b582bdeafdf789ac121eef92e3b38379"
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
    "url": "assets/js/11.bf68bf50.js",
    "revision": "c26f29b21c6691694b715f3f81ead3ec"
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
    "url": "assets/js/15.ab582b69.js",
    "revision": "50b9fe149214a2d077d377bb50fa592c"
  },
  {
    "url": "assets/js/16.874ad97c.js",
    "revision": "ef79eb5b5de7f73ea3ff1158db18003f"
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
    "url": "assets/js/21.9ff39e52.js",
    "revision": "9f240f0a32df7325fd66179efa348601"
  },
  {
    "url": "assets/js/22.b1b95053.js",
    "revision": "8c7f01311cd63190a5b4632007115df3"
  },
  {
    "url": "assets/js/23.cf8354d2.js",
    "revision": "17eb2acdef4d0148698a1907cf9cb899"
  },
  {
    "url": "assets/js/24.c34eee95.js",
    "revision": "2fc11384a343ff30ed69780fa46bd53d"
  },
  {
    "url": "assets/js/25.153e9169.js",
    "revision": "4d3a5455db5fe3de127dbbe6117701c7"
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
    "url": "assets/js/28.21a72b82.js",
    "revision": "05db645423b395a84f6a62bc2a2caa91"
  },
  {
    "url": "assets/js/29.104eccca.js",
    "revision": "1dbb3cae1e9617674f5038c7e9adc87e"
  },
  {
    "url": "assets/js/30.5e553f1c.js",
    "revision": "3a18b9565e0872f5b70a21d3a075d914"
  },
  {
    "url": "assets/js/31.3c1e6ccc.js",
    "revision": "9cc872c8c58051fa55ce51da10198881"
  },
  {
    "url": "assets/js/32.f790af6e.js",
    "revision": "2c7d2303acf4da0ff9c1ea4ed402ec6f"
  },
  {
    "url": "assets/js/33.0c246c3c.js",
    "revision": "4411a85fb8e56548b08700d712d1b8e2"
  },
  {
    "url": "assets/js/34.a9907de8.js",
    "revision": "dd77f677d57a50201024d7b5ce4038cf"
  },
  {
    "url": "assets/js/35.f0b92c6e.js",
    "revision": "a3bc58c78c9f420e29424dbcc7b3873b"
  },
  {
    "url": "assets/js/36.7ed03905.js",
    "revision": "26e884752c5fc05a8acc9fb336bea1a5"
  },
  {
    "url": "assets/js/37.b2697327.js",
    "revision": "7bb0cee63a204c9ed27d65a7b2893bef"
  },
  {
    "url": "assets/js/38.77521288.js",
    "revision": "47a58922810cb13453be5cc44f793080"
  },
  {
    "url": "assets/js/39.a4d9428d.js",
    "revision": "51fd547905ecef8c0b4daf41a2196bc7"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.aa4a1e83.js",
    "revision": "874ae824268733ee66e99839e8b1be24"
  },
  {
    "url": "assets/js/41.58624492.js",
    "revision": "b2e3f0e28db1666d998d555bc742327d"
  },
  {
    "url": "assets/js/42.dfa014b7.js",
    "revision": "09d9791c8d36d8995bf4401ee6af4d0a"
  },
  {
    "url": "assets/js/43.b4405c72.js",
    "revision": "23033842c39706a639111fb8bb2be63e"
  },
  {
    "url": "assets/js/44.4a6ad25b.js",
    "revision": "782be7969ad526242939ba6a60cf634f"
  },
  {
    "url": "assets/js/45.de35d5cb.js",
    "revision": "73bbba1265f2126275ae3d1b9bb16356"
  },
  {
    "url": "assets/js/46.3b493c7a.js",
    "revision": "874f2278fe67c3e91e8781cec2828e11"
  },
  {
    "url": "assets/js/47.35a13e20.js",
    "revision": "a406b68580f7fd91db3e768f34dd64b5"
  },
  {
    "url": "assets/js/48.83a5f738.js",
    "revision": "c5a7cb4b946b05c3f4844537e12c9eb4"
  },
  {
    "url": "assets/js/49.b3d03bb5.js",
    "revision": "8fdf91026196f88151f1b96ee2a5d225"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.9a640fa5.js",
    "revision": "eecc841ec1b07161c89361b419dd738c"
  },
  {
    "url": "assets/js/51.dd439c37.js",
    "revision": "6bc0af4ac39c87960269eccaffe28639"
  },
  {
    "url": "assets/js/52.5af6c879.js",
    "revision": "34cfff32c1d4ba50a7c9a1254060eb2b"
  },
  {
    "url": "assets/js/53.e8a803cb.js",
    "revision": "5facb8e4c130523e571e2c4f2cc343c9"
  },
  {
    "url": "assets/js/54.e8ed8b39.js",
    "revision": "fbe1295a49996652d5048535900d3d64"
  },
  {
    "url": "assets/js/55.ded7884f.js",
    "revision": "2bdd20b1510947f3e06c94c10857a4ae"
  },
  {
    "url": "assets/js/56.d54b2d17.js",
    "revision": "129c54cabb884418f5301228f5e13ac0"
  },
  {
    "url": "assets/js/57.8ef279dc.js",
    "revision": "98f92e4ded30d1256e0c3cdff7e403af"
  },
  {
    "url": "assets/js/58.c5b09ce0.js",
    "revision": "fb30b5a9939641aead9d41cc80a2551a"
  },
  {
    "url": "assets/js/59.a41d3193.js",
    "revision": "0de69169249eea90666ea691ed49aa1b"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.84470219.js",
    "revision": "38545f59e049994d5549cbc3735bd0ac"
  },
  {
    "url": "assets/js/61.92d2e606.js",
    "revision": "0940b5e609a2dac7ca315753adf2413a"
  },
  {
    "url": "assets/js/62.7b497b6f.js",
    "revision": "0acdca556c9258ede80a2e8faa5c7e43"
  },
  {
    "url": "assets/js/63.55b860b3.js",
    "revision": "2369a0371ea5881803172bc6165d5489"
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
    "url": "assets/js/app.11178999.js",
    "revision": "7f710bc0383f7ff26ec705a3b45d21a5"
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
    "revision": "7003c8f024d12f210ac1b777959bffff"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "653031167f2815226d08ecb68b021e61"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "d14bb89a408992719d19384fe0d67505"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "7b68d57fd790542542e56b647ab55aea"
  },
  {
    "url": "categories/index.html",
    "revision": "286e4633ef9b2ee541ae410201f1aa94"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "6714735234aa3257533421268852eef2"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "d7276e5008e2a8e43d2fa8637086d6c6"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "dc1b4bd2727da0de9205000c50e5bb43"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "7d0febae2e0e8e7faf6ad8ec2ca7d482"
  },
  {
    "url": "categories/other/index.html",
    "revision": "08319128240397d3551c74ae61371b02"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "9e6f88f96bad2711e12763568c46e1f4"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "7d7d1b7b97c46c7b7df756798b77a548"
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
    "revision": "173c1b034fee1c579895b579124e9910"
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
    "revision": "a14a798327fc0992725c1cebefe16606"
  },
  {
    "url": "tag/array/index.html",
    "revision": "05ddcce69b148d0feb3bbc9d9fc75764"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "244852e539b6e5eb59f9c0b3cf217962"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "8548d304728f138fabf1dca50cdaa691"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8b01c725bf7407502cdb64e5b9457c14"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "4d213468e27c7f762ba7037bc95e841a"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "55ec6d18c2b88b9a8b822ea6229c123a"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "cb27ed0e48e4480da5a9d51aff099c31"
  },
  {
    "url": "tag/git/index.html",
    "revision": "186390425c3614b6600520140325f156"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "dd4ae4be04450fbf335aecaacf970b45"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "756d4f6e4834606e329316eff4c7faa2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a6d306f8f0d4aaf534de5621a09c729a"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "bc41192f5e13e21489301cfc1546898d"
  },
  {
    "url": "tag/index.html",
    "revision": "54516ac6ba0847974246e06051f7ec78"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "b06b67e31b3f17fedc43eaa4444768f3"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "50707f6140d429b75ccbd6cac773aa86"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "8cc4b91a61eb300fdd8ac3199a3219c2"
  },
  {
    "url": "tag/js/index.html",
    "revision": "325e5b955183153a0fc32202fcd5a0b9"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "9a444a02ae6d8333389d7f9f5ab5a35a"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "f8ea22b9134e2f8aead00c9b1b792b09"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "439ac8ed6a93f92c36c5a7a924431fc3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "a2685bdf4b075f49fb3fe497cae18a41"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "f9cfb56cd1c8a1f8c35e7b1096f57ae4"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "08fd8ceb0d5974506bd60900733d7202"
  },
  {
    "url": "tag/project/index.html",
    "revision": "85866ab8367ef0b898f7590a3ce12715"
  },
  {
    "url": "tag/react/index.html",
    "revision": "f846b3271ab2fc09c2c67d7b211e2252"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "5eab6fdb148819b704cfc6fee955b29d"
  },
  {
    "url": "tag/router/index.html",
    "revision": "0791e2449a157b83776ec354d1254f38"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "0fd2f0581d9d141429b953cbc97e4b28"
  },
  {
    "url": "tag/style/index.html",
    "revision": "ee65ed790ddb6325f9167772036b779f"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "a31088c54450f8f5acdab35baa923aab"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "fa278df120b0922a2cad6af4051bd198"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "db62a0676078c4ec298d7ff142ee9908"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c6477d2a3b386d46b02acc8c672af12d"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "6dcc76185a53a2e1a60d2ae4f38c6757"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "8e518d934526245a2a0f8f9e18153669"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "3d72576195d4052923d4d8f17317afd6"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "9377dd00715f015d2e12b3f8d7b000c6"
  },
  {
    "url": "timeline/index.html",
    "revision": "08a30fc781b22b1fad5bd2a250ff88e7"
  },
  {
    "url": "views/about/index.html",
    "revision": "28c2be26f8136f66348152cc67d3198a"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "69fd737974aee43f683fda4692a8ac31"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "2d2b25c03459c0bd77f835573dbcd33f"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "2e2ff2f64487bb389db97f465511602e"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "76ce5398d01890cebdb7ed54e3a48aa3"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "9d32d4c78bf6edbbffa17b75110471ed"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "875adbc80d7d0bfdbeca637621840a2e"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "1aefbe4d4b7e12441328101b5e50aea2"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "6456e507bdbda83c88615aeb11732aac"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "5d2062e88510d11c20a667ae0fc5dbe2"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "eab7e6ce1f70bdd43f46910bda9e29f0"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "74d3ae8b8cba379fb1aa08607b1f0222"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "a53727a373c4d0cb807a3bd038d519d2"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "174e7a07b10a9fc509c03692a36f939a"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "bed192a7af22b643011285c3e48114e0"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "ee2b617e28eb3b1d077fe29f94b1d664"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "d734488e3b4b800eec430e4bad356ad0"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "0828949d6c409aea23c0427621a57ceb"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "e81f61017a8dea4130076d8445da9ef1"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "c08fc2ccbe7646ff9d6d68177918e0e9"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "c79627890d1d23bdc619a80544f69b8f"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "4adfdce1eaa6b2142ad8f293c86ed2ca"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "8656dde3fdbf4c1696abba9155605d88"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "ad96efe7d074e8619264620d5a340d25"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "b88dc513df2a9dacc3f1c6a627143443"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "e9187330bf625f0d5f4e89ec51ab4c66"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "56f8c9b04a967d29330c57c4bebbea23"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "977abea84022d08db4b337ebff074f74"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "24f47df23e3700a1696c62e76b52c4ab"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "f24a5dda98d14c1415ea2cffd725a7a4"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "e67152081b19515e50c3ad048cf97ccf"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "e1c5ec5148394c70283f65bf0315a5be"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "5ed6d5ba78efd695155b4b6e09d7f6d5"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "58676fc8160b381160cc288de25f2f28"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "b9036318738dc11426a91a64618d0289"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "8263021502fcc01db98064f26a81af0d"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "80367ccd758bd1ec3a31d0bf3ef34e97"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "cb89f7d31726accb74881ad4d7e6ea06"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "9cd7c4cd7c26a51fb9d63aa72a44fdcc"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "19e3249b48c3ad27aad437467e23815d"
  },
  {
    "url": "views/project/index.html",
    "revision": "5d23a159f1fe724b46a866bad646d1bd"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "79a3b3b0459980d9e33b69d1f733d717"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "74cfad430d9bc6a1677aae43f5e1255a"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "18873b38b562f1e9844580abb51cefdb"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "d6a11008e27bdeedccb42f42fb3e3069"
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
