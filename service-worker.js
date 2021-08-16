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
    "revision": "6e0a51583cec0ddec663033ed814fb3d"
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
    "url": "assets/img/bubbleSort.33a947c7.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
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
    "url": "assets/img/mergeSort.cdda3f11.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
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
    "url": "assets/js/10.72027cf5.js",
    "revision": "fe870b6edbeff7ce6d48b0a5f31f19fd"
  },
  {
    "url": "assets/js/11.7330b554.js",
    "revision": "e58bb18fcf483a785fbd72a8eab727ce"
  },
  {
    "url": "assets/js/12.621766ae.js",
    "revision": "3abd14ba014abd3dc139c96239aaff58"
  },
  {
    "url": "assets/js/13.687a7d7d.js",
    "revision": "752398222d814d969388783e852e850f"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.a340dfb1.js",
    "revision": "e7c4a10908a81d5970868fb1e2db072a"
  },
  {
    "url": "assets/js/16.c778b12c.js",
    "revision": "599aeed1594b3a587654ee12dfa1d2ba"
  },
  {
    "url": "assets/js/17.1deb21a9.js",
    "revision": "944670edebd58ac73dec91c4d4d1b5b1"
  },
  {
    "url": "assets/js/18.39d35373.js",
    "revision": "43da764ad37682f5cc19b9bf91251ee2"
  },
  {
    "url": "assets/js/19.8dc74c58.js",
    "revision": "1929cdf0ce14db1d06874365b1a74960"
  },
  {
    "url": "assets/js/2.619a8525.js",
    "revision": "40224473ccc02c5dd118ec62dc3e7880"
  },
  {
    "url": "assets/js/20.b0be8197.js",
    "revision": "e762a2509ff636ddcdfb782e6f8a02c1"
  },
  {
    "url": "assets/js/21.6dc9c73e.js",
    "revision": "4d21f62398d43588c705a1bc6dc099d2"
  },
  {
    "url": "assets/js/22.452ff4c6.js",
    "revision": "f587abbc1be72dc29aa5936d51647f5d"
  },
  {
    "url": "assets/js/23.21c32688.js",
    "revision": "1869e4f7b9def153c6ecf2d1977e7cc9"
  },
  {
    "url": "assets/js/24.3be0aa32.js",
    "revision": "119cc71fae96942a671595138611c000"
  },
  {
    "url": "assets/js/25.4ad980f9.js",
    "revision": "d2841ffc2db8d99e30fbc36e72b87aef"
  },
  {
    "url": "assets/js/26.2fbbce26.js",
    "revision": "b83647c25ad3e8e3da667cc444324655"
  },
  {
    "url": "assets/js/27.b4bf1697.js",
    "revision": "2e1c60fe8b3faca690f8d31015f89528"
  },
  {
    "url": "assets/js/28.2db14bd1.js",
    "revision": "11d39825a0345e8258aff9096b0d736b"
  },
  {
    "url": "assets/js/29.ed22249f.js",
    "revision": "5069fbf6d7cbcb453712dcb7158fbf08"
  },
  {
    "url": "assets/js/30.ed8d795e.js",
    "revision": "19d972d7d43545fb94eaac3209f428bc"
  },
  {
    "url": "assets/js/31.695b01c3.js",
    "revision": "6e8ff6d3875f878f20bee351b7bf6c6b"
  },
  {
    "url": "assets/js/32.1702ad84.js",
    "revision": "6721fbbd4498613a1cef8124eb73f662"
  },
  {
    "url": "assets/js/33.716af1ae.js",
    "revision": "319d62ab94b4c5105a4a48ed8cca3ce9"
  },
  {
    "url": "assets/js/34.9a8ea76f.js",
    "revision": "bc8b02701e992c0f4fc6030ccf0cb221"
  },
  {
    "url": "assets/js/35.9c4e1a7d.js",
    "revision": "c36d7019909a9862721ba70a8ae207af"
  },
  {
    "url": "assets/js/36.0f71e58e.js",
    "revision": "8f872494a1646709511c4280a0b5fe2f"
  },
  {
    "url": "assets/js/37.d146fb08.js",
    "revision": "84d68241ad723f274515ce71dfb8a4a7"
  },
  {
    "url": "assets/js/38.6b105c82.js",
    "revision": "b646b93b7439f3c0024146837efa1efd"
  },
  {
    "url": "assets/js/39.79c11dd3.js",
    "revision": "2d4a9cf26be08953ae555b97d80b5f4f"
  },
  {
    "url": "assets/js/4.79d6d2e1.js",
    "revision": "f25e7d0641e446d22a0a43330a4c9223"
  },
  {
    "url": "assets/js/40.9a7b2869.js",
    "revision": "3629921e7b4bd520c6c88692b76c7046"
  },
  {
    "url": "assets/js/41.f6017874.js",
    "revision": "75b2d99729caf4ad104d83c28578c929"
  },
  {
    "url": "assets/js/42.3ae0898c.js",
    "revision": "44d5a6be2e8db27464221eb28c960b3a"
  },
  {
    "url": "assets/js/43.cf832c31.js",
    "revision": "ff09b5eef16b57fc294d4f9039d68006"
  },
  {
    "url": "assets/js/44.9ac1d134.js",
    "revision": "321c650331eddbd304dfd981b66f8703"
  },
  {
    "url": "assets/js/45.f90be785.js",
    "revision": "29346a0f141bf3454b3e71e02d77595c"
  },
  {
    "url": "assets/js/46.bbfa8aa3.js",
    "revision": "c87f3a2a9eb00a77ae134858d184813b"
  },
  {
    "url": "assets/js/47.37498a0d.js",
    "revision": "5eb2101cc220fc5bc433aa25efd6ec52"
  },
  {
    "url": "assets/js/48.a9de4938.js",
    "revision": "74c262dd633a7037fdefe4e300448fb2"
  },
  {
    "url": "assets/js/49.ed1f1506.js",
    "revision": "b5ce7eb5bf75e70241cf95a540c262b4"
  },
  {
    "url": "assets/js/5.f2ef66f9.js",
    "revision": "093767b37b78d413fd4c0fbaeeb1c7f8"
  },
  {
    "url": "assets/js/50.62e4e4cf.js",
    "revision": "deee9d4559780c9ff5913eee0e174b3d"
  },
  {
    "url": "assets/js/51.60f35917.js",
    "revision": "c81cfad4fa28d1f8c879284357d7c0a8"
  },
  {
    "url": "assets/js/52.5b35827e.js",
    "revision": "b307321037a604124980b9b5979ea551"
  },
  {
    "url": "assets/js/53.2798071e.js",
    "revision": "ef236f3c0ffc579be042fe98a7497948"
  },
  {
    "url": "assets/js/54.4cc441da.js",
    "revision": "b857c9823ee935a5882cf1c5e0b05230"
  },
  {
    "url": "assets/js/55.5e6e7dd8.js",
    "revision": "32d0538a0e1ac37a199a5f1ec3977e38"
  },
  {
    "url": "assets/js/56.5241a442.js",
    "revision": "325c6140f06d8df55b4ed819bd931dae"
  },
  {
    "url": "assets/js/57.a52b846b.js",
    "revision": "103c9c80e5a30b8144e2f37e2af0b11f"
  },
  {
    "url": "assets/js/58.43472dc1.js",
    "revision": "8e013523e12016921977aea10859dc60"
  },
  {
    "url": "assets/js/59.6ad2cbd3.js",
    "revision": "ad0b71a09dac93e12eb390c162f5a6bd"
  },
  {
    "url": "assets/js/6.d342ea68.js",
    "revision": "792926563ac5c33fb88a571d87318d19"
  },
  {
    "url": "assets/js/60.41dd26c2.js",
    "revision": "8f46c1ce1fc5b31c58a2e8a9d3c11ed7"
  },
  {
    "url": "assets/js/61.c5dbab2e.js",
    "revision": "411d3cea232e613b463fb67598b10b90"
  },
  {
    "url": "assets/js/62.e55690eb.js",
    "revision": "46721a2bafc5c7c03dc1eed6b52d6afb"
  },
  {
    "url": "assets/js/63.f329dbae.js",
    "revision": "d3389db811683f7482ee6f6b2c9ea242"
  },
  {
    "url": "assets/js/64.ec61af2c.js",
    "revision": "6d77b33226854443a2070d76427ceb69"
  },
  {
    "url": "assets/js/65.6278f967.js",
    "revision": "a1a71f617b4e28590b119eb2ac3bf061"
  },
  {
    "url": "assets/js/66.648db6ac.js",
    "revision": "0f31b02c0517c14b5435832a1491382e"
  },
  {
    "url": "assets/js/67.03fe0c22.js",
    "revision": "99a1c0e949b9e0126bfb1aa919c17259"
  },
  {
    "url": "assets/js/68.15e141ff.js",
    "revision": "bed728d443596e025277e8476cf993c7"
  },
  {
    "url": "assets/js/7.59a38e1a.js",
    "revision": "a3311a794a5c1a22ecd24820f72b8d4c"
  },
  {
    "url": "assets/js/8.4553a682.js",
    "revision": "9d33dc13647ff2284b52d267cb56a8ff"
  },
  {
    "url": "assets/js/9.744191d0.js",
    "revision": "066fa2cba7f930c891ffcbc8079c6f19"
  },
  {
    "url": "assets/js/app.ffa00904.js",
    "revision": "a6f9fcd2905f89acc4daacecb5299518"
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
    "url": "bubbleSort.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "categories/app/index.html",
    "revision": "d509bdc7fbd0ad47bb6c1ec91f248026"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "c1142c65a08285789afbcd5caec81573"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "6df426ef1b22caa4ee5edca692c860e8"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "44a401bb8ffea1702c33471b4a1cb54a"
  },
  {
    "url": "categories/index.html",
    "revision": "eaf100232aa566be70ef00c5224768db"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "0cc3d124803f31b5579530f4361aa596"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "2fa15fcdfeebf9ec01da1cffad2c99a5"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "f2d5430f3ec4461d69160c94cf064cba"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "dee4cc2f594d912580b2d1642dfd6fef"
  },
  {
    "url": "categories/other/index.html",
    "revision": "042916ba586e797b616a6b2c8ae5630a"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "72f3691779a61b6f99bb6f1c43cdd33d"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "25ab1eba3f3ca5876dea192d49412b5e"
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
    "revision": "fdd49e07e3a6f1313424300bc049b002"
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
    "url": "mergeSort.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
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
    "url": "tag/algorithm/index.html",
    "revision": "1e719b05a59647a3b9d81a4a7580929c"
  },
  {
    "url": "tag/App/index.html",
    "revision": "a4cb24ff194ad8a4e2405e76673ab445"
  },
  {
    "url": "tag/array/index.html",
    "revision": "819e111c87d528cfd60ac1523351a714"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "fa75f6cf2921674162711bcf3e3616d3"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "3cfb40aae6d42fc08b3a8f8ee91f9a28"
  },
  {
    "url": "tag/css/index.html",
    "revision": "51530a337d16494f688d0d66867b36f4"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "0a927d7715517af4ef7f826ded99a186"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "2254e3022fdf6c11f5dfda0373d77fa5"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "8b9af83dff1cc8f1457086a3182c21d7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a05bdc0122613e3623c42e0f3a8cb064"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "99d49a14852815c2eaea55ccb9179398"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "a00e00628bc8a5d232a4fcd79677177a"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "801ed68a1ff38a53ed1b62dc7b75664a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a887a86e46d2f95bbb487ef1d1b86396"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "26650b4cd2f7d3f03481ca9623777768"
  },
  {
    "url": "tag/index.html",
    "revision": "0f6fc925da1ff9e946256644cf887882"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "430f2482a76dbf0b61edc3a1a45a6188"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "9b57f029cd35b7c85655a852a9fa0a73"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "998b6e8a43ee3c3f9d823349b7188273"
  },
  {
    "url": "tag/js/index.html",
    "revision": "dc0e0c23a7dd717bbcc2fbe3a8ee4063"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "64bf9e23ac6bdab8720daab9e426f560"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "1a75da6f08f966df771cb1b707b962e5"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "3d803c0178f26f7e7df981071666b01f"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "8c6d83243da04fd3ecec6299fd29e4f3"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "bcf78fc09800e024b984061d22e5c513"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "8783c85b092911a81724bfcf1e044795"
  },
  {
    "url": "tag/project/index.html",
    "revision": "18bcc3d9aa80b9ebfeceb74cb3a2d501"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8da54618e9c0b04a2dfcf35efb2efaf4"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "c8828f2736cb0f9ca272127614b7cd07"
  },
  {
    "url": "tag/router/index.html",
    "revision": "0aed4a5d5afca4c009149f8e367298a9"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "9e51572dcab4023ad8da10299b718275"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "e2eb10405afae8983939dccedbbed90d"
  },
  {
    "url": "tag/style/index.html",
    "revision": "131e756db51fc793a3aea75d35eebd3c"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "7211f4625b3b6c9d074588c96bfee780"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "878eae8b1d5014735b531125ce64809e"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "80d571a7ad3d3ae51421c5d4b15790ad"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "198edb4f0623730588a2c212aff51e49"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "97b98593461f5222d54c703dd44fe9cb"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "2447b3f95088cfcc71314b29aabaa49c"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "6ef8cc34e65cfb2cf59ab38279e6f492"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "57473241b1a67e7a2a851a39574dd3fa"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "10fcb13dcd3431e3ffff475aa1ee43bf"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "4454522843b7f9dbeb85490139d255f6"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "f4b1133cc7b74399fbfb9f0fa38cb019"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "77c9748751536d71c8f43e774d897eff"
  },
  {
    "url": "timeline/index.html",
    "revision": "a5a35259351f56326e945a2577232dc8"
  },
  {
    "url": "views/about/index.html",
    "revision": "b7026b8081c26e2f4326765ccf4f79b9"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "c8d84cdb6c76975c5d8caf52fca82ee1"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "67ee0cb7e8dc299bfef0392b55ae6a9a"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "3d0de74dddf075496c1a6e42e928f0cc"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "f6247c5cb6493f58cd48b4fbff52f7ac"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "2796634a2a89427c4248e9125d5e5e69"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "ccfc22ad54d93e7aa3879b77ae62369e"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "f81fa816550b65cb581090700c4a02cf"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "c8128d31b4a3c8172701aa4361619588"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "1e83d8e48b57c05b39b62439d9d67f8e"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "fd01df055635d469a0f1f9150af168d0"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "8af72bf49fe5072443fdaa9524445623"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "859a539fdd225d6ba2379ccaa1f13f7a"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "0a5b7771ee6ecc4c1e2a92bc88a6de74"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "f77ea2016ebe0a3c7cec4f3504d97f4b"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "c1c83c2b017c30928da6316a69222e8c"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "25489a4e366c93ab4ead968baa9c9060"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "0fb2dd49d558f88dcb814ce2a32088d9"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "06584eca4fecc2e547453d53052d38cb"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "0e78523474c0c35e1042ae768fab0ff3"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "ddb9e10188eae84923b8e42d232ed6e4"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "ae586e40b7c1f42f752301ef507d0c5c"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "47afc5ff0bd638fb5145e9a9ac8e2dc2"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "b6f0d5f090b7e0fb9d3c20fe1d4b7d45"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "29952f68e99d04f0b16fe7d28251d7f5"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "32627a9c3004b98e33bc1ba62f6fe4f2"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "3c58e21ac393ed448ae4d2aff12f8318"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "6550507de027eff0fee871189bf08f9f"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "795251ce7505d23223b3d4bbf6437c21"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "4b21be22172fb36ddadb27fb1e046381"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "582d5648297faa253c7229f3c2fe6bf1"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "63106a44672e1be38fc888d9955e3ce5"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "c2a1a52a5e8339d805c3be5b84713866"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "7aa77ba34a4dd3b64cac1965ad2e8f65"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "fd5489f447d6b3acd0b93127a34ff869"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "c2f0f5ce9b2ee41a215c9c33225e9366"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "7ebd56fa3250053f769be1fed4d6ffe0"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "d368158c35ae78c17b5ec79d6d10f84c"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "abe6953cb13b92cb5e669ce985141f21"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "ea93531c50812172e91d247985c6e7a7"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "e5f935944d438b086f7a9a386cea4341"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "98d004da59e077aa04ee0569489a9520"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "9b13e3d82e8b8b11394996845f06ac9a"
  },
  {
    "url": "views/project/index.html",
    "revision": "7cb6551e8d7fd8d62a7279f5fa1cdc2f"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "7a6c78e0fada9ead867a0c02a21f2932"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "0f7209e552d040ac5d3e5414472f56f9"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "889f3bcc38983fc8e7e37a696e6b2790"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "53ed1f7100328e1437e3e79a3baaec11"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "90ccaf57baa686c81faf59f3b3c55cea"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "35c6e52c4e55340791f8026e24690a7b"
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
