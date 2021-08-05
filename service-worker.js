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
    "revision": "c3c2f88dce4d2528b9d6423cb12b586e"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.112ab001.css",
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
    "url": "assets/js/11.54b67f12.js",
    "revision": "0c8da0018182286dd7b0a9851222b23b"
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
    "url": "assets/js/15.2678c6ba.js",
    "revision": "5548e5f22e23904d5b0f9646acaa9c83"
  },
  {
    "url": "assets/js/16.91094f03.js",
    "revision": "480c3abdde52328fb2006f4460d9b374"
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
    "url": "assets/js/24.223fb68a.js",
    "revision": "dc7cf7eb2502e18a2032552655db2db3"
  },
  {
    "url": "assets/js/25.246d9a40.js",
    "revision": "2d15a5286ed82d9ae4f030a79811e796"
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
    "url": "assets/js/28.5240d613.js",
    "revision": "0c940ae882388b2c009e475ca5df4fcf"
  },
  {
    "url": "assets/js/29.7c8f6907.js",
    "revision": "6d80048e1d266d709816131aa6bdf195"
  },
  {
    "url": "assets/js/30.154296b0.js",
    "revision": "37dd2396fa54568c6b38aea127c31bc2"
  },
  {
    "url": "assets/js/31.88b563eb.js",
    "revision": "ec2a47b15cf0de88fab0ed99bf514c73"
  },
  {
    "url": "assets/js/32.6ef3db49.js",
    "revision": "63a84d10e76e1fc2b9f3e21593f05a77"
  },
  {
    "url": "assets/js/33.cff39eea.js",
    "revision": "d39e633d744d4378ae278475568d4f06"
  },
  {
    "url": "assets/js/34.fe857f3f.js",
    "revision": "4d59c4031e06a43023b5f7caa06f00c8"
  },
  {
    "url": "assets/js/35.594a036d.js",
    "revision": "1264d9bc69e7b0a298794081c2f2bc7b"
  },
  {
    "url": "assets/js/36.44355dac.js",
    "revision": "87d6128558c9510a020b3397a7b3272f"
  },
  {
    "url": "assets/js/37.f370b59a.js",
    "revision": "3c532bd5b7101d7cd8706649cc3e7014"
  },
  {
    "url": "assets/js/38.e3c0b2ee.js",
    "revision": "5402d70e5e098b2df73b12fc6afa0010"
  },
  {
    "url": "assets/js/39.a9fb9ac8.js",
    "revision": "a5ab3ca1a4744edd0d1e80cc47afddd4"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.ea72cceb.js",
    "revision": "60bdcc9051fda6686f86078ade9e8b85"
  },
  {
    "url": "assets/js/41.f5eed65e.js",
    "revision": "b5e238355c34e73bd1d2213c51544893"
  },
  {
    "url": "assets/js/42.85eb3bf3.js",
    "revision": "1f6bd7386f8c87197c9b41f375d568d2"
  },
  {
    "url": "assets/js/43.89dae105.js",
    "revision": "5fd084cb6e402acce98b350aba7602ef"
  },
  {
    "url": "assets/js/44.9f8503ca.js",
    "revision": "525c49ddbf0cda2a873fc04f7f13c8ea"
  },
  {
    "url": "assets/js/45.201f3597.js",
    "revision": "173b6350c4ed451850f62fae8c637f16"
  },
  {
    "url": "assets/js/46.e59478b5.js",
    "revision": "accaac85e6a4a17c9e4be0336778cbc1"
  },
  {
    "url": "assets/js/47.abdb637a.js",
    "revision": "3c0e88c818bedf98714b698c48917d74"
  },
  {
    "url": "assets/js/48.79851c01.js",
    "revision": "171bbc0b41c29522b4eeb5b174e56756"
  },
  {
    "url": "assets/js/49.4da09759.js",
    "revision": "88fa190710213099d147780e87329f2b"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.06fc1782.js",
    "revision": "f228de609d7fab8080a3117dd62def60"
  },
  {
    "url": "assets/js/51.baf3d3a3.js",
    "revision": "09785b0f4b7c526b2dfeb1ff2c24b886"
  },
  {
    "url": "assets/js/52.29aa5ac9.js",
    "revision": "5b2eb43b82ed31e4371278fd04f9088e"
  },
  {
    "url": "assets/js/53.721fa0d5.js",
    "revision": "c33d3879e6c910d2827ea26150045e6c"
  },
  {
    "url": "assets/js/54.71e1133e.js",
    "revision": "9b021dff22df963d9b2e4ba0222762c1"
  },
  {
    "url": "assets/js/55.4f1474f8.js",
    "revision": "d1ec5ebcc2365ff62316927fa6244e8c"
  },
  {
    "url": "assets/js/56.7388d179.js",
    "revision": "68313bf49bf7128e710d2317a4cf0d69"
  },
  {
    "url": "assets/js/57.0885bde2.js",
    "revision": "7f0ed9d7c1cca76c34967cc000eee56c"
  },
  {
    "url": "assets/js/58.6b3b46e2.js",
    "revision": "0bd843db632d8ae69aa019b5e2b8dc62"
  },
  {
    "url": "assets/js/59.9fe2469d.js",
    "revision": "a2e10df5aaf635f7d30f55f4a7b56ed1"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.6b2c91bf.js",
    "revision": "b67e9fb6ae005809d5f635f0dde4e967"
  },
  {
    "url": "assets/js/61.00f77114.js",
    "revision": "8b6f4a810d9bc2884eb0f42e7054a0ca"
  },
  {
    "url": "assets/js/62.98004ad4.js",
    "revision": "29de431ec839217ccfee6154c75bdeb8"
  },
  {
    "url": "assets/js/63.5708d2a4.js",
    "revision": "dc19a49a0a332f71e63f4ed5adc384ea"
  },
  {
    "url": "assets/js/64.24f4d422.js",
    "revision": "bba857898706f0c6afa31379a1d68740"
  },
  {
    "url": "assets/js/65.6cf576e9.js",
    "revision": "944bd4d3c6442f518e6543ba3117fcff"
  },
  {
    "url": "assets/js/66.518f7cd0.js",
    "revision": "8abac987491a7dabf6c2159a69ef9a97"
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
    "url": "assets/js/app.8799ca01.js",
    "revision": "19ce333cc30c4328d63db772f7129b76"
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
    "revision": "f4b937f99f042e7f43f2df9154f6c753"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "c7a8935f9187560f33bfa58fd6679ced"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "269f9a4e6bf2e83e2a820a9bd1a3a8c7"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "c611117506ea16a3a196590f868a9387"
  },
  {
    "url": "categories/index.html",
    "revision": "5e0bc1549137d1537814bcd798bd78cc"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "005f18b3caee261a899445463b45a9c5"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "5c07d3829088b8b66e81545297cd6930"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "e0184e900d737a9d54ed3fe02206cc4e"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "bb1d747bffd334a93f3927574d9665df"
  },
  {
    "url": "categories/other/index.html",
    "revision": "57ef32c340d732de4187edc55e2bbf05"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "379d7108d30e8b9f43ca597afb9a30d8"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "366bee8aa7d55e43735b337f632f5d9c"
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
    "revision": "6850a1579b7a868e1d28a89861dd5322"
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
    "revision": "acdf86fc8b37abd4bf3a725bb18b1bc4"
  },
  {
    "url": "tag/array/index.html",
    "revision": "64dc936766c8dba92693187fdbb3e9ca"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "458f2bdef136896d674e7c6d2e98b81e"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "0682b4c0f371e88c5c0e9cdedfb0a41a"
  },
  {
    "url": "tag/css/index.html",
    "revision": "70c167b368cf032d2a83c0452cdc943e"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "ed8cea33efd9b858cceb897b65341306"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "2443fdaaf004bb15b83162b78f42006f"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "06fddbb50926a548a7e2ea7527f8164c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "218e0fd973a429c1aa6b15873ac05461"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "1204463b9f71284f9ef02de1b94bd5b2"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "6b050fd46f06deeeb3f1aaa2a271afa7"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "742ef403fcf0b16de3d583931cca5263"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8c1f2352b6dd6779142e1c64a9d39825"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "29f7d37805e0c3ce7ca858737f2b6187"
  },
  {
    "url": "tag/index.html",
    "revision": "0c250d290307243bcf437df75e4f3106"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "96f352665d64aa98ae26bba22c779de3"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "3881924a387b4c9c3427dce514b556f2"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "ba40f63906c803a9e4735a4f9e4125c6"
  },
  {
    "url": "tag/js/index.html",
    "revision": "6ec50d71f683239fd1cfb7803e9fc5ae"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "6d7023d68b1d4203900429bbb6e0e6c5"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "698ce3c120f2049e9b03080bb78dedd8"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "bc3ca0255f674f119a11780d9e089a0e"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "1725209cbbe82e2a3ce14b65b44447d5"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "e555ad184cf737584960280c2e1cd242"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "178f70dd230cc6787c078c862e24d5b8"
  },
  {
    "url": "tag/project/index.html",
    "revision": "a5ba4897892328bab1bd59617dc569cb"
  },
  {
    "url": "tag/react/index.html",
    "revision": "b49393abf6773c0af6a93dc3eaa377b3"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "96d360b33c921d78e0c64ef1d1b2fb0a"
  },
  {
    "url": "tag/router/index.html",
    "revision": "e0c1b1acb180918d37db62a9f7a488f5"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "70ce93957cbfac61ab14bc6bd1e90ca9"
  },
  {
    "url": "tag/style/index.html",
    "revision": "9fe84d016a574c0d48e17745b88888f7"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "8c2343c20f6b4b6dc3de85cb90295c96"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "d67992626b7a3140b7ed6f121b00ed53"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "1aaced0f24c1a6eb913c076d770faaa1"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "18cb6d131962cb09bcf71ae38c81d14c"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "8dc45ba401bb4dfcb5ea1cebd69699b6"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "3194a991fcd4989520ca9659367b5ab9"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "dea83b92675ee76d91acbd83b4602295"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "bba4d004a1b044fa37704bccb3e3343d"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "d8a07c511ff006d92ea512fb2e33791f"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "4abe128c4b3086b48a808a316b246729"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d694d11c88b991d22acd2b089da9e328"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "59ffbe000f3ce34a5bf43659544fa5ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "ee376501348dc5cc97feac6cbcdd250b"
  },
  {
    "url": "views/about/index.html",
    "revision": "3043688571c6602dd4f213d1e077165e"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "f3b98d39097c8a709c0ec3276bb9b596"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "8644039b8bde5ec224728f455877a45c"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "d0387ca5eeeefdcdd4506fcd78fcfaf9"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "6c274d051b67a49ebd80ae6078a99b90"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "1f786fe68f382300ed1c6d989af69456"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "2643da2e81920a60ff5056e4a1115d0c"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "b93262846065be47cf9e1eda3e836705"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "e5c23f73cd9ab028d5668e520a78b432"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "a33afa5ee4cc0038a5dbaa5802e5ddeb"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "ddcdb3a8c65dbf3fcc6b934df49dcc6a"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "a508dd6621c0d8d0317c3fc69db78870"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "0b893aaeea6f10d08c0a1e41c2a52959"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "659e05514e5655f69e290be42a53e36c"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "4a21b93cd3de190cee3c9af4203d96bd"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "71ab0a110c417bf5736b87b459de42ff"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "fc3b354dc2e96bd0ba9c84cd671c9495"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "944d541fbd3ffd9a8b5fb2046d8f6332"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "fcff33874c6493349cf939e54ba8cfcb"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "00e82d218223cd4a298c9d966e2a7653"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "d45be7567d5eb4ba8f4c190fc572b7ac"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "136f293be6a5dee399de9ee05fd5b991"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "09e8104298308a226653b3eba09a4414"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "f45b0a45379c98f07ebde2726ded18b7"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "e74106f28571b098fc5c55632ae66f94"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "133903c028f913e330a25b50a41d7c2f"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "101a421e36d8b9641ba429c41d16df48"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "923cdde4395d4fe946d5d33fbc4c51f6"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "9e8c4d0a999ce92fe4c296e56de860d0"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "5ddc8e720b41de3f5e0f2e20b517b74a"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "4342de178e07397867999ded85253db2"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "21956d210fcd93383a019b1ca93cb38d"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "ca9c461537868eafed3686b4985d7c05"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "abbd9c59f738569dbdbe99fd256e60c4"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "f799a5920792fe4578b7bca5ef92887d"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "e7fa045dfb0332efe1bdbd17581066e0"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "1c43bfec14ed41f99dfebc8bbf0cd61a"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "3c2005462c4973cf84a7a749d18fb10e"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "ce48ede68a66d89762927ef7b831bcbf"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "efc418dea92fd2f42c1f72744bbe82a4"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "f96ac196152168270afc62d50eaa6427"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "d1d7d688eb4761e5b0a3eae4eaed5dbe"
  },
  {
    "url": "views/project/index.html",
    "revision": "cf585bf1e55e2c3d82d4f5ad48803e46"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "e8ca1550e5efe91536e2ee58f2049baf"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "8cca9f04a967a4df1ef398bcd5a39f51"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "88a1a7bd177cbd0a18c5195e2f1178e3"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "e22dd066754b3406246e3a4b7c6c431c"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "1f0a6799cab77c4bbd73cf4615be817d"
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
