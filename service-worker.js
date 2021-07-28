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
    "revision": "3966d1220fc9b1df8c7b52bbb3123cd8"
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
    "url": "assets/js/21.f2a3e9a7.js",
    "revision": "198e4553fd721ccdac1a74a9bc634222"
  },
  {
    "url": "assets/js/22.b1b95053.js",
    "revision": "8c7f01311cd63190a5b4632007115df3"
  },
  {
    "url": "assets/js/23.c2f96094.js",
    "revision": "c6113c56fe3b37e511fc3354dd364419"
  },
  {
    "url": "assets/js/24.223fb68a.js",
    "revision": "dc7cf7eb2502e18a2032552655db2db3"
  },
  {
    "url": "assets/js/25.1e00733c.js",
    "revision": "e61a0a531eac98d467a48b0f419f9ec5"
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
    "url": "assets/js/28.5240d613.js",
    "revision": "0c940ae882388b2c009e475ca5df4fcf"
  },
  {
    "url": "assets/js/29.5c344726.js",
    "revision": "e6d3bdeafca5da56cee1b9a4e121f42e"
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
    "url": "assets/js/34.4d6adc11.js",
    "revision": "6b192f43ba45beb68f9ffe27b2d3bf8f"
  },
  {
    "url": "assets/js/35.977faea4.js",
    "revision": "8bf57a6bb60d8acc18f70e65c7ac9e70"
  },
  {
    "url": "assets/js/36.2cd7210e.js",
    "revision": "a1f584ef14562d04d7a2a36166d447a9"
  },
  {
    "url": "assets/js/37.be1776d0.js",
    "revision": "938d108e4f2b286c8936348bdd71e1e2"
  },
  {
    "url": "assets/js/38.d4f66293.js",
    "revision": "1c44b33349892f40314f7a782955730e"
  },
  {
    "url": "assets/js/39.bc3a84b3.js",
    "revision": "f68b422e628239714a4c6a48a37b0d50"
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
    "url": "assets/js/42.dbc98a13.js",
    "revision": "2ce4d80727d0659c1b4efb0f61a3ae1f"
  },
  {
    "url": "assets/js/43.ace3acad.js",
    "revision": "be4a61761cc7b65c08399bb9c536afac"
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
    "url": "assets/js/58.d86c33d5.js",
    "revision": "06de0f6918696ad52ee1244305397a72"
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
    "url": "assets/js/60.85d72162.js",
    "revision": "51d5e7c3b4029c21905b54bacbefb7af"
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
    "url": "assets/js/app.0bffd089.js",
    "revision": "8123867230ece6736ddaa2efcafc47e1"
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
    "revision": "a47537ff71808bdff316a4c571ad6065"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "23e100847834b76f0ce933c079497489"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "34668ba0a2a66c06fdfb3c45d9ffe583"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "89e57c9131ae4b88f654525886b804ae"
  },
  {
    "url": "categories/index.html",
    "revision": "90b3bcc3ab52cdbd3e6f98611564ddec"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "50a58cba3e3f70e611e2b6562c506564"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "b703f39b130c43be618c70df186aaa1b"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "93a9f243cc34fb74f770c344da456ec3"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "20e21612d7dc67cf442793020cde1b2b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "f51b247dce728bac48cb3cc504622912"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "6643a6e76201e2cc2ec31e22b0609f2d"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "2a1aabc1c83475a0f7467d829efb44d8"
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
    "revision": "9aa488250215504c4170e6f39e8003a7"
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
    "revision": "57cab8e64d55a182c5b1f71b7ceb1408"
  },
  {
    "url": "tag/array/index.html",
    "revision": "4a3879d5be43e426c9c0414e57e82eb3"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "05ea68eced96ca3da4be2bb5577686ab"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "4c127ec39ede7c8250f6a95435f32fd0"
  },
  {
    "url": "tag/css/index.html",
    "revision": "037f116c7a60eb58164923ee4d48e7c9"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "eb9d729bdfcd0e3a10a8f0daf19ed8d0"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "798d9907141467e3c40409f3f56073b6"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "167f2c05ea17a959f3698ef98ff59424"
  },
  {
    "url": "tag/git/index.html",
    "revision": "677ff863ced6747fbc64778bf8683f74"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "9027afeec3cc4da7595399d1c5980243"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "0f833dcc5f6441ba72c2fb63755dffa1"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4f5cf38be5222d165955b620fa66df49"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "02fb1f3aaa2653dc7ef4706d8024253f"
  },
  {
    "url": "tag/index.html",
    "revision": "24cabfe76fd65e71dd26d50527bed53d"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "882be3d1458ca24d098721e732c9cebc"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "5302b4d791a39e6642a663fd0f61a872"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "fd0a592688c4cb5b0328f8651dbadbcf"
  },
  {
    "url": "tag/js/index.html",
    "revision": "283185eab7a9cff200f61abbb4ced563"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "c4c5e890ccb08ff85cb470055979175c"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "a8c12e81a34bc2633c804a1c04d74491"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "9f98215f96f0aca390725e61c98363ae"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ee6fed838c0cacbe89349943ef234acd"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "27f6492e72973de2a6ad67654bb7651c"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "2b72dc4de20976a78bc6a7e8c6510d79"
  },
  {
    "url": "tag/project/index.html",
    "revision": "b792412651e984b4d9f59433489658fa"
  },
  {
    "url": "tag/react/index.html",
    "revision": "e16a492f185ecd8ef4141175e925c033"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "2fa8ccd02f98b6f9cf200fed4a870a18"
  },
  {
    "url": "tag/router/index.html",
    "revision": "e6595bca0abff5e01761219056f581a5"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "5eb33342c69dc37df2c9a5259ad8dd45"
  },
  {
    "url": "tag/style/index.html",
    "revision": "487adff2347bd1da5b7ed957ce953c71"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "31c13945f6ee798184889178e85aee57"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "cea851b497627ee2b02cbde76e5728e0"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "7cace2247fe3221416db0e8badc738b5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9044ead9edb1ca00bee0267282020650"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "84f255eb53efe755b8324a0ac99a4161"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "231058f97a3cc5e17d78a74460448ae0"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "193f966569c09a4e179cfdabe80ba7f4"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "f6ae4821b87246a5b62c5ccb6a169fcb"
  },
  {
    "url": "timeline/index.html",
    "revision": "e6545990da79dac11b22c17dd4521389"
  },
  {
    "url": "views/about/index.html",
    "revision": "768590627b2131d7589010a847d11c60"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "44f6fdde48bbe8c479b84a129a24136e"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "97f733bf2240345be76c319995f524b0"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "3f9960f432c6f09200b7e21ebe4d0995"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "0e87cef3cff9b7c1a70fc5003aab9ee6"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "24fd2ac9f0e1f145cb0329beacd307c3"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "f2d29ccc69f8d8bf2f9775b410f8f34c"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "71fa3b282ba61a3ab0305c2f733a73a0"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "efce394603361aac54625b65381b98c6"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "23b9a8348c52d8e809654280de7e7284"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "c78466ad13510f8411a401d68bf83a5e"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "a4e04daaee10a190dcfcbeb386dcfb6e"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "9a7e362930fa17dfd9706cf4da792054"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "d2899f67f1a5b29dc3df31a78cb90e10"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "e231dabd7491f8c193a0dc74b11724d9"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "7237517e5d184a238f01a28021f025b3"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "bbf5a13a436487d548e89d82a3b600a5"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "85259508a8b0948d9f276bc034f5fff6"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "d7c1a40da4c4271d4413e0146531d99e"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "3c1b70e491891a1edf69121a81acdd00"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "4f2d8cf2bbb5bcaa16c59e1b18458bb4"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "c2ec9225a5a2e6c55d55f394e854f77c"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "b11a965ea0df2a2acec5a0265b42493e"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "2d38d23c8eadbd88a79121d1b31ed250"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "5049ef2875777c8c4d18f0864c11ae4b"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "54e34d0f3f1cb34540b2fea51e6c3564"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "301e3e50ff1f80b44b1ae827885e639f"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "a13520e92d716878616d9e26ed140442"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "c1525fb479eaa91d47682698ccef5ff2"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "536ef954abce5d8a95d00e78b637f404"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "da6bfc6e43a2265b2562c072ade5cbf0"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "8ee93e6a407b8d85881ce5801b3ac07d"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "487edfdc6e6733b63a91662c9e69400d"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "accd349acbf06772ee9124c91c72e003"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "04159e7060e50f45711956f506c7f376"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "8365c2b700ad3e2f5b13c71d73ccbb5f"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "25ea5ca86084b6105dfc85b9d30cb65c"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "543e3f0be15ca881bd22da29fe83495b"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "6afd3ddca51c0aadd31013487dc350ff"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "ec1edf8a36e7d63d7572979eea33601f"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "129e267f5018b230dba06811b20de80c"
  },
  {
    "url": "views/project/index.html",
    "revision": "85fc70ce894eb42fbd3b4a5aa27c635d"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "4602f5c6a5f83b212642d88fac915c8b"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "876390b866a30a1a20104a2d1dc8a6a7"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "b2d5c92b1a5f6256f203c1f47abfb025"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "a52d9253a5a41262df88ed8ecca70092"
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
