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
    "revision": "930e7f2f26ef8bbb8e2538b626b5d3d8"
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
    "url": "assets/img/bubbleSort.33a947c7.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "assets/img/countingSort.827d96b8.gif",
    "revision": "827d96b8ca3682e8775f4916f22b45ac"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/insertSort.366d07ff.jpg",
    "revision": "366d07ffc40fb12aa8780b791cf86b90"
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
    "url": "assets/img/quickSort.c411339b.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "assets/img/quickSort2.c411339b.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "assets/img/radixSort.6690b105.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
  },
  {
    "url": "assets/img/sort-divide.3b37f014.png",
    "revision": "3b37f014fba8e0f89ef690c09ccf29df"
  },
  {
    "url": "assets/img/sort-merge.b5b2bd5e.png",
    "revision": "b5b2bd5e7e6234404a932704eaf2dc69"
  },
  {
    "url": "assets/img/sort-triangle.2b2fe723.png",
    "revision": "2b2fe7233fb2f4f1abfa7d4075006dd8"
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
    "url": "assets/js/10.2dbc2b31.js",
    "revision": "745bd529916b8c32c6e030a2805d25a3"
  },
  {
    "url": "assets/js/11.4a76b79b.js",
    "revision": "29c99ca84927c75e394ef91f86771f61"
  },
  {
    "url": "assets/js/12.e2a12a11.js",
    "revision": "6971ef995197f68cbbea4d89a25ff76e"
  },
  {
    "url": "assets/js/13.24a30a2f.js",
    "revision": "88dce7d53094faa03efb0fe6ab92544d"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.d9827512.js",
    "revision": "a139f52d0638c9ec07d57384aea523a2"
  },
  {
    "url": "assets/js/16.f8c195f4.js",
    "revision": "e4d7d0b52e6b70a3a6ed2107bad49539"
  },
  {
    "url": "assets/js/17.dfaa26b6.js",
    "revision": "981485347094519264f042a57ada6b29"
  },
  {
    "url": "assets/js/18.93ec21e2.js",
    "revision": "3db852903ef3b35ea475bb0a2262ee9f"
  },
  {
    "url": "assets/js/19.b1ff4cd8.js",
    "revision": "b23f32a2ef8e1d86219444e9444688f0"
  },
  {
    "url": "assets/js/2.8da2a3cf.js",
    "revision": "6cc7ef250e62d4461602fc96fe9de15b"
  },
  {
    "url": "assets/js/20.9fbf6fa9.js",
    "revision": "4d2ddc03ae51d4ce6d249d9452754692"
  },
  {
    "url": "assets/js/21.4772d9d8.js",
    "revision": "539da71b7c12c73ee89a3f838ccb0d12"
  },
  {
    "url": "assets/js/22.b51aa478.js",
    "revision": "614345b001892e7f55ab2ad79485c729"
  },
  {
    "url": "assets/js/23.aabd5480.js",
    "revision": "0c442a896af13fcc7db3279aacd37ac3"
  },
  {
    "url": "assets/js/24.c6a1f3e7.js",
    "revision": "dc741d41cb38e62d5fc84e433077e2cd"
  },
  {
    "url": "assets/js/25.532583bb.js",
    "revision": "07d01e04c87bcb1b6ea7769760c0c1fc"
  },
  {
    "url": "assets/js/26.0c960cf5.js",
    "revision": "6f8121c2e125351d7954ea8b74ff47e2"
  },
  {
    "url": "assets/js/27.f25285c4.js",
    "revision": "56644b3e5013359169aea68d3dd1d7d6"
  },
  {
    "url": "assets/js/28.7ada90fc.js",
    "revision": "a99c1f6d09577199868931591bf1587a"
  },
  {
    "url": "assets/js/29.65616335.js",
    "revision": "6190beebed6f680474dc19aac1025e0c"
  },
  {
    "url": "assets/js/30.c23ca791.js",
    "revision": "8337f971a4bc523a3c7714eef7445da3"
  },
  {
    "url": "assets/js/31.c13546d2.js",
    "revision": "afd8872cb81624226c470846311779ed"
  },
  {
    "url": "assets/js/32.126fd9c0.js",
    "revision": "892aaabd9e8401a9c9fc9b1887b2cfa5"
  },
  {
    "url": "assets/js/33.be0a4d24.js",
    "revision": "7e79f21554c63841f950f9ed4445dfa2"
  },
  {
    "url": "assets/js/34.e602b1de.js",
    "revision": "4f6bd0e3d2bf6590240fa0e989719cc5"
  },
  {
    "url": "assets/js/35.f31d876d.js",
    "revision": "1d778ede76fef2a5c8f64021bf5cea62"
  },
  {
    "url": "assets/js/36.fbd99cf6.js",
    "revision": "7b3fac7c4d934a820461d0d75375e3b4"
  },
  {
    "url": "assets/js/37.49158f2b.js",
    "revision": "de8070be35c7ea83199923de304f564f"
  },
  {
    "url": "assets/js/38.fd1d882a.js",
    "revision": "c8a7574e63ffb1073dbfc99a12adfa3b"
  },
  {
    "url": "assets/js/39.746e59ab.js",
    "revision": "ea96d862d06fff97d3bf4604d57defa8"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.86a70a7b.js",
    "revision": "a939f7f249d6ad7310e96a3c7f4a7f2d"
  },
  {
    "url": "assets/js/41.2f60d68a.js",
    "revision": "e9b76935cca814573af45fcf42901c21"
  },
  {
    "url": "assets/js/42.9bec4952.js",
    "revision": "83651d51a3e4bd31fb293ed127fe83a1"
  },
  {
    "url": "assets/js/43.61984a89.js",
    "revision": "dc98617c5705b3df3897d80d4ed7a5a4"
  },
  {
    "url": "assets/js/44.239dc38e.js",
    "revision": "c8f56d03572652caffbafa6f833506a1"
  },
  {
    "url": "assets/js/45.8cf67965.js",
    "revision": "5dd19012c4eae163edcd99267fa2b1c4"
  },
  {
    "url": "assets/js/46.042c966e.js",
    "revision": "99dc13f10b157f6c48b077ff7d4153d7"
  },
  {
    "url": "assets/js/47.99b5677a.js",
    "revision": "46ac17b134b7b12beffd8002a836a591"
  },
  {
    "url": "assets/js/48.459f118a.js",
    "revision": "3070042c554807eef79ab557fcfce72d"
  },
  {
    "url": "assets/js/49.9ceb1223.js",
    "revision": "cb19fa947c2ade5ac797b77f3315cf92"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.e9733c75.js",
    "revision": "b876f40290f063cf94b2a7b356eb6770"
  },
  {
    "url": "assets/js/51.118eaead.js",
    "revision": "a47ff2d42dcaf00448d83120d8924723"
  },
  {
    "url": "assets/js/52.2a026492.js",
    "revision": "42c79117d631904f443e7c566488f592"
  },
  {
    "url": "assets/js/53.81239b01.js",
    "revision": "bb5d4ab7a4c1420b71a30a4ff3e9b119"
  },
  {
    "url": "assets/js/54.4b4a6b3a.js",
    "revision": "77e3ba773dbf2144b4910648de0fe7bc"
  },
  {
    "url": "assets/js/55.e625b191.js",
    "revision": "82ad0cf79fb4b4c4f45e17b37edc9f8a"
  },
  {
    "url": "assets/js/56.e1aba024.js",
    "revision": "d8a68cbb2e834e800bdac46441e46d23"
  },
  {
    "url": "assets/js/57.d590b440.js",
    "revision": "1d98be196ea1138bc7627169310076a8"
  },
  {
    "url": "assets/js/58.2e0dbacf.js",
    "revision": "c89751241f65e204e225a99ac6a84759"
  },
  {
    "url": "assets/js/59.d1e0a3c5.js",
    "revision": "5bb3ff3a866a1c920e4485a175e31e5c"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.9e98b045.js",
    "revision": "8178d7ac787bb95879196540a244e38e"
  },
  {
    "url": "assets/js/61.e39ad6eb.js",
    "revision": "94ebf3bf85fc7517c99afc2007191ed8"
  },
  {
    "url": "assets/js/62.32cf0d65.js",
    "revision": "82e41f6241dd84d31118046b54705b41"
  },
  {
    "url": "assets/js/63.dfb994ed.js",
    "revision": "49285043c6f01b82b912b2ee124eff32"
  },
  {
    "url": "assets/js/64.1e15ed0e.js",
    "revision": "37bfdc8dbe0116eb0f10ac653e746f80"
  },
  {
    "url": "assets/js/65.df9fca1f.js",
    "revision": "2f0df0096ea9d13e197338b14638f03d"
  },
  {
    "url": "assets/js/66.69fd2998.js",
    "revision": "605ba4773a55ebcdde3ff8ce7bc2a738"
  },
  {
    "url": "assets/js/67.141f9f9c.js",
    "revision": "4a3456e8d262fe7bd862062dd20fd678"
  },
  {
    "url": "assets/js/68.53937929.js",
    "revision": "831c79d774f6a15598c3e4b5fed067ae"
  },
  {
    "url": "assets/js/69.aa15ae4f.js",
    "revision": "8e67e6484c62198787ffd528f7fbbe40"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.1e21084c.js",
    "revision": "260ef8b6e4c3ed604ac1250eb4bd4714"
  },
  {
    "url": "assets/js/71.0133e73c.js",
    "revision": "1a714eee7d707d278211bde7a40bd626"
  },
  {
    "url": "assets/js/72.807b01ca.js",
    "revision": "a022fbdaa9d26e8adaac3501686b215b"
  },
  {
    "url": "assets/js/8.038fcf22.js",
    "revision": "d28e56fed8b8740f26c240b353648782"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.26df5a32.js",
    "revision": "65763a8879486910b05afc926a4f699b"
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
    "revision": "1981b0eb5e415f4c207523cccdcd2a70"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "5735ce077127dde1520cac184910e220"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "50bb9d232acafd2d854b10283b451e5b"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "95a38a7b80af52bb2fe86c39fd62caa1"
  },
  {
    "url": "categories/index.html",
    "revision": "ec1695975dd6c2734a044e5c08f988ea"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "3f1972202c8c5451f13104c7a82938fd"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "48a727c2fafab4e0fd8a684c43635289"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "f095ed9d80afc9fd6b93d3d91942e4ca"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "c844ff3829d83b146e9e6840445e9362"
  },
  {
    "url": "categories/other/index.html",
    "revision": "f724d589e6501b147e64b65726049e1d"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "3efc91e7a33b1b122a15ceb6f0374ce7"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "98c8b0ef3a2c42b499678f43ef0ced9a"
  },
  {
    "url": "countingSort.gif",
    "revision": "827d96b8ca3682e8775f4916f22b45ac"
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
    "revision": "43f205d0b2addbdbb0e80669c8012c54"
  },
  {
    "url": "insertSort.jpg",
    "revision": "366d07ffc40fb12aa8780b791cf86b90"
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
    "url": "quickSort.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "quickSort2.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "radixSort.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
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
    "url": "sort-divide.png",
    "revision": "3b37f014fba8e0f89ef690c09ccf29df"
  },
  {
    "url": "sort-merge.png",
    "revision": "b5b2bd5e7e6234404a932704eaf2dc69"
  },
  {
    "url": "sort-triangle.png",
    "revision": "2b2fe7233fb2f4f1abfa7d4075006dd8"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "133d521a1a0ac75a75551d904a245f1a"
  },
  {
    "url": "tag/App/index.html",
    "revision": "eeb0cc25b044bc6e44b8032a53478431"
  },
  {
    "url": "tag/array/index.html",
    "revision": "765e6e69cc1d012ae94d5ad138f34073"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "d6c5ca7a833ca1fe7099e708cbddb5b7"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "a00d44093d6f09c66ed4730c790353df"
  },
  {
    "url": "tag/css/index.html",
    "revision": "57b111e73e4422c2301d419f6387a508"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "10769bb9896d2a62f78c1980f33fb63d"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "be715584d5de3d0e7ea82cb64d2599cb"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "aca967c0fbfbc1e0f9bdbbd38189ad63"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "bd1c47e9e11e7ecf9f1d5f45635aa95b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ae7a931c7eb9c451df4ca4ae4f6a9d2f"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "382e8164058ee9b01d17da2dda1767ba"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "36a546876634f6f4faf360c6b9b30bcb"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "07a2feabb5d021a8b7a767f90d84d4a1"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "1309d19e5706bf571a477171844a7965"
  },
  {
    "url": "tag/html/index.html",
    "revision": "77855eab2945b246cc66abe747a5431f"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "d7d05a0f7b5c2a5d75083b0cfe385301"
  },
  {
    "url": "tag/index.html",
    "revision": "72f5e52f833c21936762f9161489bf10"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "62146bd40a6b9b176c02807673546e24"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "979530b58d81ffe11c82b0491b2e50e4"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "52835564a8884a909644e63c5de74283"
  },
  {
    "url": "tag/js/index.html",
    "revision": "2e66359507acec568d940192f9a92890"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8a297d389e45e9a71f1c3c9acef4e4f9"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "191cf81e721a1207236049b6980f7aed"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "0b4e0b7eba277aa13cba58ce6f0e8ace"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "0f54fcf0c90508c780a048bd0042efa6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "60c2f743560428590345d8c5c2a4e467"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "441d0aca71f9ffee9eec195ce3fd90df"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "6dc780ac357ef90af66a6dbe9aca4aae"
  },
  {
    "url": "tag/project/index.html",
    "revision": "f455511519b124d3ea83d981fa2f99bc"
  },
  {
    "url": "tag/react/index.html",
    "revision": "fea95311144da4a9eceaf85bad390e8f"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "bcbf17b8f27ae4d0cd363fb7c8794304"
  },
  {
    "url": "tag/router/index.html",
    "revision": "4dcc4a2d3d57a5d4462d03a28569faf2"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "0f2284369d4025aebdf907862db81bc6"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "88f67c069ab0eae53df77d301cee4072"
  },
  {
    "url": "tag/style/index.html",
    "revision": "b160e7d0b35f33adb3470a15580b16ef"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "74ba4392fdc323ba6f089ae29c4cd64f"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "5efb951b38a0c7243d8720c636ebc721"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "a627ba29a1f86185ca149171b029afb9"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "42bd847c04659cca9766d13a8b18f1ef"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "3fef05883e8d684cc5df16190e701da4"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "99ca975e489a2861f8f1c893087266ca"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "ada7156b6333c36ce017b650ed6c8d36"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6f62f7dd1eab5bc46cb4782c1d1f1ce0"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "326ffe3db955e05a7aeacd0614bc3a83"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "c103b6ed741f9f969d443a12fc1a4ae0"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "60205fa1af60cac479733f5e2424cdec"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "76d89eed163de30485ccb768b6508862"
  },
  {
    "url": "timeline/index.html",
    "revision": "bfd2ebb97166edf8a354b9e83d7945d4"
  },
  {
    "url": "views/about/index.html",
    "revision": "b7ac6acbf56d95db31c2f027f3543181"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "aff1d39c93f400b68cacafa4ab2e0947"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "202614e6fc2c48496a94e7a841e94afd"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "5eae7b39969abd8a983973ca37cc6184"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "ae6797cf462b1ffc7c68ad5f5547e58d"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "e07d8a51b5333d621d4f0ee82ad703fe"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "4e4e361790fad7be359784c466969e4d"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "1ae929003314ed4df9d8b651382f8eae"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "a329f2d41e839ce0c1c4d945ddc5bf64"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "cc240dbd0448b96c5c35eebbca4ae8ea"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "9edbf04fa5e358e17436ab5165d83481"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "1f42a950e900d216754a11d9ec361341"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "a664a991caaa05cc72373ffc116f4b47"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "5f37ce7a0dc1108c3eabbafcd14e1b58"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "e33dd8490d3360d6969752be0caa7444"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "6e5274caf7d822ebee1864f5faebefb0"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "24568c90f3a7eac84de456bfd07c7c3a"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "81cf52b8341ef801bb654d7e1047a1ea"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "3ff7bac650e10ade8790c6a2d6fe58af"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "f8514267d41b7d2b6df7830d72035a4d"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "be0e61e593b54d2effd060e2ff5fdbf9"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "d6e8156976799defee24dd1664b8c330"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "89542e5694442b4dd217caafcf216aa5"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "d25a067490f00a9499bfb963935407be"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "3dce6b39b90b4ab4e4fb1033497db587"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "4210b32074a44b83faf8f9d764a0a303"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "f77268a2052319dd99d127155ed46b2a"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "4ae65e487b84ae70714bbe4f393f7899"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "35ac5819608a9ffd5da3a42c5c089981"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "f60f745190e92bff0a2101c71510f379"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "33ed079db9c193d534abfbf630e6779e"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "4d39baf7106beeb926dc8fe0f40c6f9e"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "9bf4b29db7a4dcde78d15b906796ed42"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "b7af65df4ef8ac3e514b80bf1fdf1e21"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "30ec2d90a7ec98cbf82900786a370312"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "9807dbbbe4cf911f700cf76b627dce74"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "f05fa986369da53967e8c0aee3500edb"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "3ab1402db7f1fa75aa01e7c16da10a44"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "f6044104777deac94359daae9c149038"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "9fe372bb068b97df2b77551e0c294dc0"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "a95010653129c387fd20c890ce9688f3"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "40e16f236739559bce517579c43135ab"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "da92fb638dd9f99394323a7c83a324e0"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "7fea5e0da6e07dc0c4350fd11c015deb"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "0de884266a5b1b9415d09fa4508b787a"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "85d07f3b3af04097983af1cd3f7cc50d"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "969a44e515071e96cb8fa4ed5ab9022c"
  },
  {
    "url": "views/project/index.html",
    "revision": "e8eb4d11efdb499227551dc246c0e589"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "474ee395f9fa02cd6541270add2ade31"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "7830aca3b5bd677fa04b79e51be47eb5"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "6efc61f98062e8da817f3db9c5ebf7d6"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "640fa8856a3b03857c3d2c39f99e8aa1"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "db9cbf647c576fc9d6320113f7d55c3f"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "28fa4cb95fe508583143aeb675e8e2ce"
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
