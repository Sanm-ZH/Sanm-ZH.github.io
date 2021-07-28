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
    "revision": "16615dfbd5342f0b39a379b287bcb599"
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
    "url": "assets/js/11.c8a1e606.js",
    "revision": "100cf5082bb33e56eb3f0fbe42567ee9"
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
    "url": "assets/js/15.38b0c83f.js",
    "revision": "1d186df9bd98074b2e8acbe918fc5e95"
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
    "url": "assets/js/19.e1e39252.js",
    "revision": "5153640166d283e686682e57f0b1bcf4"
  },
  {
    "url": "assets/js/2.9adac331.js",
    "revision": "cab4cc227c378410a0b07075c0979a27"
  },
  {
    "url": "assets/js/20.acafdc59.js",
    "revision": "e4dfd314caa4268d7931e6bb3914a41f"
  },
  {
    "url": "assets/js/21.01d972d1.js",
    "revision": "c4a2d0ce085aa387aed474f963899839"
  },
  {
    "url": "assets/js/22.f344a4db.js",
    "revision": "4ae879fd376a92077b99468516d1ed9f"
  },
  {
    "url": "assets/js/23.1932dea1.js",
    "revision": "5a3c44ac5a9156d512c26b71076070e3"
  },
  {
    "url": "assets/js/24.0571eb57.js",
    "revision": "926ba19c5613da424ff758034ec68661"
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
    "url": "assets/js/27.6b915a4f.js",
    "revision": "ada236ca38b41793bb96426a4c94bfb6"
  },
  {
    "url": "assets/js/28.211246a7.js",
    "revision": "641a50172801fdfb0ae3cda6fa63970f"
  },
  {
    "url": "assets/js/29.c4eda9b1.js",
    "revision": "4388b81d0cda28a18bc9ace1f010c015"
  },
  {
    "url": "assets/js/30.154296b0.js",
    "revision": "37dd2396fa54568c6b38aea127c31bc2"
  },
  {
    "url": "assets/js/31.451a5976.js",
    "revision": "bd1ec8ce2a6b0083d10a4a077bd9036f"
  },
  {
    "url": "assets/js/32.f658733c.js",
    "revision": "543c66dac769b846c6dae0dbada26f54"
  },
  {
    "url": "assets/js/33.edc30b80.js",
    "revision": "bed800d52b6541948c11c3fbacac5810"
  },
  {
    "url": "assets/js/34.dfb762ae.js",
    "revision": "260ee8fed5de5f7843dec567cd82e5e4"
  },
  {
    "url": "assets/js/35.8d5d0af0.js",
    "revision": "06d33cfe21499d3ded228067408869dd"
  },
  {
    "url": "assets/js/36.0e577ee4.js",
    "revision": "6cfaca4dde622bdafe47250d900c6a09"
  },
  {
    "url": "assets/js/37.be1776d0.js",
    "revision": "938d108e4f2b286c8936348bdd71e1e2"
  },
  {
    "url": "assets/js/38.9507c7ff.js",
    "revision": "279d6280a38ccd290bb44d31f668abaf"
  },
  {
    "url": "assets/js/39.f2ce1a2a.js",
    "revision": "be4b12422bc108d93ac0d4b0f50ff282"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.fa33fd1b.js",
    "revision": "f5cd9473d0dc21b1c8524f6c38a9a76f"
  },
  {
    "url": "assets/js/41.38e03c56.js",
    "revision": "0a8167ab37399d146f6bf74896b05874"
  },
  {
    "url": "assets/js/42.7319c23e.js",
    "revision": "9f19b0fa32f3650a3befb8417a0d4cdc"
  },
  {
    "url": "assets/js/43.5d96c646.js",
    "revision": "1eab4cb24dcf8daf852c47d4c60a7237"
  },
  {
    "url": "assets/js/44.f0a6232c.js",
    "revision": "a60222b5654a7046c84e662913e8ac6c"
  },
  {
    "url": "assets/js/45.c76a7af8.js",
    "revision": "ce0a7a88460694e45d2215df39f83a6f"
  },
  {
    "url": "assets/js/46.ca268d05.js",
    "revision": "78d694997e9d590ceea6f143b9daf0fe"
  },
  {
    "url": "assets/js/47.89f9c80a.js",
    "revision": "9c8963024875c2ed72f1cc37b320bfa4"
  },
  {
    "url": "assets/js/48.fb6074c4.js",
    "revision": "713b5e37139d74525ee6e110c8d2e1e2"
  },
  {
    "url": "assets/js/49.97f1945a.js",
    "revision": "829d3f7fe2abfbbc8ac4049c78f216b8"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.6ee88d11.js",
    "revision": "8650a98b904a357506d6b9f222444a4e"
  },
  {
    "url": "assets/js/51.c6f21555.js",
    "revision": "50fd94390dc43bad06a74a31b64d4a78"
  },
  {
    "url": "assets/js/52.801bfde0.js",
    "revision": "84119f8556af7bfc40527e73e0956d38"
  },
  {
    "url": "assets/js/53.c2ca834c.js",
    "revision": "49110a78b70173416d293ccb8b02fc21"
  },
  {
    "url": "assets/js/54.4c97c1aa.js",
    "revision": "0a46d0c1ca575caf908e6cf2f2ff81af"
  },
  {
    "url": "assets/js/55.fc2ffa8a.js",
    "revision": "7b84081fca2a50629a0216fcab6b6339"
  },
  {
    "url": "assets/js/56.4bb8d1fa.js",
    "revision": "afa0140f725472a6cb14996637e0a41d"
  },
  {
    "url": "assets/js/57.e0572c7a.js",
    "revision": "c566331349dcf80a74441bda009820e8"
  },
  {
    "url": "assets/js/58.5ddf152a.js",
    "revision": "585742eab9d2b31533b2c324502acb31"
  },
  {
    "url": "assets/js/59.35ed6f22.js",
    "revision": "bf9522a525e27ac4eb343f5991393e05"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.19f63a00.js",
    "revision": "264f34b10129bba97c0e7836cfe14b0a"
  },
  {
    "url": "assets/js/61.09298ebd.js",
    "revision": "d90556c6d3a3d18331d4ace9207ea929"
  },
  {
    "url": "assets/js/62.0d9a4572.js",
    "revision": "e69ce9ec8bd85053bd523db324203bcb"
  },
  {
    "url": "assets/js/63.28388dca.js",
    "revision": "84e33602ec7a28578d958aaca830ad24"
  },
  {
    "url": "assets/js/64.2480716f.js",
    "revision": "adba45159667531c8b65f30f0411bdbb"
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
    "url": "assets/js/app.390ef0b3.js",
    "revision": "4e992a5838a8e0b608835a41e0af70c5"
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
    "revision": "2d4aa1f16e9e7f038d2b96d86a55c0b5"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "6bd6355ca6cb1a493d8aac82a5f8f032"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "46ccd61a81d280bde2b34ca1482483d2"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "a0147577a6732eecc9229c9aa70c5551"
  },
  {
    "url": "categories/index.html",
    "revision": "8656ef75b6f38eb37e01c29c1ee00611"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "1ad0d6c71b799248cbd0ea9f215c5faf"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "800824b907f1f95517a02cf4ca0840bf"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "38100575fcc148cb1dd16db2ce15db1a"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "9649257a4eccbbe58369d9afca5eab58"
  },
  {
    "url": "categories/other/index.html",
    "revision": "f70ee37fdbcf3ba18568f621b79cf8b6"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "13f857ed262b6e7fd293e5016aff891f"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "c44006f587b651505aa9bbca1acd1a29"
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
    "revision": "c9c22ca873ed25723789578255253607"
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
    "revision": "44c6cdf0f47d0eba674b531386bccba5"
  },
  {
    "url": "tag/array/index.html",
    "revision": "8133951091af2084d2f72c310dc136a3"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "cb38b89528dcec105252f376148c9896"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "ce9c0e9c08a0701b65f73a2866a87f43"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9f96817a10fd2af97bd398f97ac375bd"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "87cf0ca74c91be5db22de973513aa4af"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "a7c6f7e45dd9fe61ceed1d0e63adf414"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "5b9ea76646855d06c29d4cd3e6913a1e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5de1d0e1afa2b42f5ec8dd663c2df9ff"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "2da059e386955db671fdb3eb21ceb01c"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "de7c2a499e731207f552ba4d80fb6f32"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7f5856433118c7c99f5f100bbb445aaa"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "87256f0eff024d8a64049da68ca19303"
  },
  {
    "url": "tag/index.html",
    "revision": "fce59a66ded38c81c39cecb2d6a1f914"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "fa03102f2830d80e2cf03ac4014d30e0"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "55966b7ead6cc8491ac26ac7b8a7d9b0"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "b52574b21fa9bd195d4404d4f9902ff3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "62e3399e3d3151e90c5c5952fb663f83"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "279b4e851d2de67973e1d8a5bd8f431e"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "fece8ec016c7225bf1cf6791210cc09d"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "21623f86f2e96e8150e015b903765bd9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "c36a7c0dbecd9c9cc7056a04605ebd26"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "9241c3b2c0031cae67436e814d6936af"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "b076d053c549e6665006a3b001b104a7"
  },
  {
    "url": "tag/project/index.html",
    "revision": "d7fcf31e57f8b1adfc49bd622d3142fe"
  },
  {
    "url": "tag/react/index.html",
    "revision": "bac5f18ff7289c260c5994f6829119b4"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "196318e595e550dd073d17f497392519"
  },
  {
    "url": "tag/router/index.html",
    "revision": "f053a7babd51290fa2504a5df47c2e05"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "f55300cb3ee0c604b9a33f582558f43e"
  },
  {
    "url": "tag/style/index.html",
    "revision": "21e51442af68cb717f0805f1f0fe68b3"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "699fe7f0ffe4f65592ab53992abf175f"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "bb129ec72721a3df31d933d559ecd07b"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "d0e119a6a8a46089672a2ee58c5c6ebf"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4fb189ba147a25df8031572b3a30b30d"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "54338f5c41a38e02e377e510f0069f2a"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "4b56ed032fb13e37706b2005e400273b"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8913b6de03d8cd74dfb5f560ccb57092"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "89b633be7653ba43adaaca548f9e09c8"
  },
  {
    "url": "timeline/index.html",
    "revision": "3a135ab2d51c1c9eb6710bbd1c34f665"
  },
  {
    "url": "views/about/index.html",
    "revision": "4423099239e4ab22b2331df3ec83cdcb"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "c5b31663935d71bbebd7e26a9e089794"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "efd088d488840a5d267fdc1a265471bc"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "3fc35ffee6096955f811a0ea3a8086aa"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "856ce9694a5fc5a655cda9b62fca7f39"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "b9814c0dd40dd510ba56e0d1063e37e4"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "017516499bda2e9b7ba0d123f0bd74e0"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "f5fbd426f1eb2dd8004adb7e5aa62937"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "0c01b1b0bbd4d7f9ab4afbfb6aa38e88"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "c5d4f14d9277d0ee4a1a4ee0c96bdfcb"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "9e3b1afb78568ed2f873cc989ad1074c"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "f0c37fab0d7703a8d17625d748aff983"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "b933862bd086547a92de6b2b8ee1f702"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "0eda5a24ef3d86d0c5f8c35c92d7af5f"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "078c2e4e59dd664a4fa694beb720a1f3"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "5054d7827539371850dfdef43f8dcb5d"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "446544d4b23a9c836493898df29c87bd"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "199cff962d1d5560d90d67b2157ef1e9"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "b30502b31e7141875202c97588138eb4"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "80ea8a2d8708bd8497ac9ae878b5f199"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "d69a1a125f168e569096044a3b98c074"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "5ded35553628bf5eca05ddae6e44b4ab"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "f8354fc2d150f8246a2e6d894b8e8867"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "51a48f5acc3cc02f0f3cc6218b4bb649"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "449d22a7687dad8a7168f1d94c29ca9b"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "47c7e198689b0f682c4ce92eb889ebf5"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "1354a91ab3737bfb7be5fe49420c15a5"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "285f11e6e27aa0b75f07ad107f1695b5"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "aa12934b4e7a7c71235719b06a0024d1"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "4726cd96a9380ddc0fee055223441f52"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "add2b29276b8bf3f1af343ebfefb241d"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "d4cc947102ba949e0da3a464ed9f3b45"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "2df37a6fdf71c85099ac743d5912c277"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "360f2c9bfdccc2ed6472c20e166b1124"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "a8bcbb13b36bfc3879021682ef05b2da"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "2ed666e603a6defe29eba09976d338e7"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "3db86e5a3436f04b7c018b08a4660ecf"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "f6be8ec9287ede62e596d9aa88575de9"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "eef0f382172456260d3961349d908d48"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "637de88325fe191e1e90ca8c94f0348a"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "f482252818da653f5606c5de7144e2ec"
  },
  {
    "url": "views/project/index.html",
    "revision": "8956c5acd21f4ab59bfe7b38a031de0e"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "99c3e2b25eca7d82c6205b8177d54ece"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "f012173f9386f8b8a422cc5c2eff4ead"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "314e7e061c8511615e96cc2dd7753e95"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "a65000c8fc5a0be17246d4ab378e2b52"
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
