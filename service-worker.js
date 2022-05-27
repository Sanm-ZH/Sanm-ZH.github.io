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
    "revision": "8227b21ee016e13eae712208ceb8cc87"
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
    "url": "assets/js/12.0501ff08.js",
    "revision": "79b1df9ee4f7fb3ee25b40c367bcfe75"
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
    "url": "assets/js/16.91028841.js",
    "revision": "6d4b4caa6a096f87851038343f01cc60"
  },
  {
    "url": "assets/js/17.4e853ddf.js",
    "revision": "8a5b6852d819d5d8eda8bfbd7b9e23f7"
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
    "url": "assets/js/20.312cf94e.js",
    "revision": "ec4b5f11718fdbe80c593edfb66a9b6c"
  },
  {
    "url": "assets/js/21.616acf77.js",
    "revision": "0e63513b6e8298d9113dfb6281baf929"
  },
  {
    "url": "assets/js/22.903d5858.js",
    "revision": "959df4a0ccb51884f9d5d0c591327459"
  },
  {
    "url": "assets/js/23.437c6963.js",
    "revision": "5af6d6af9ed6fd5ee97164c737d1e21f"
  },
  {
    "url": "assets/js/24.32c981e0.js",
    "revision": "36773262ed2751a0a178d33724098895"
  },
  {
    "url": "assets/js/25.1fcf0b2b.js",
    "revision": "ad4d3ffb397c2c028409c851231d5218"
  },
  {
    "url": "assets/js/26.91ae4a5c.js",
    "revision": "24adfd7cb49e13c33dd0e4b16932ccfe"
  },
  {
    "url": "assets/js/27.7ff51fa2.js",
    "revision": "8c2995ba76cb6f93384dcb1bd581a040"
  },
  {
    "url": "assets/js/28.b7aff4c8.js",
    "revision": "f4d454c7d929465185c50337122bb58e"
  },
  {
    "url": "assets/js/29.9a0735a7.js",
    "revision": "238f6c5fbb89dc2f23e42dd73b3031a9"
  },
  {
    "url": "assets/js/30.516af095.js",
    "revision": "d444bebb2ddf7f1ef683c6fe17d2f4f8"
  },
  {
    "url": "assets/js/31.f0aa78c3.js",
    "revision": "18ecc261e49f94da00f2f46408177070"
  },
  {
    "url": "assets/js/32.ee466c55.js",
    "revision": "de577c164aff4d4c06ee10b8c55dd908"
  },
  {
    "url": "assets/js/33.3bc7454d.js",
    "revision": "fac9e56fa910af8dfd5b2ec15a85f419"
  },
  {
    "url": "assets/js/34.ee57b86b.js",
    "revision": "a7ce2010730044038560b3232475a107"
  },
  {
    "url": "assets/js/35.3fb0c473.js",
    "revision": "28c7aec4133f58e5f7561eba8a6724ab"
  },
  {
    "url": "assets/js/36.e8aee005.js",
    "revision": "a869cdb7421131a412113a1a7c63d7f0"
  },
  {
    "url": "assets/js/37.1f432d60.js",
    "revision": "62bd22a15ca98707796e631d241dab18"
  },
  {
    "url": "assets/js/38.d2fc4c11.js",
    "revision": "ef2287edf33c83c384ad8fd8d43ec9ca"
  },
  {
    "url": "assets/js/39.4354b3e8.js",
    "revision": "72682abee2c02a9ed55f07be689c2fd7"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.755388b6.js",
    "revision": "6e6a77d055ecfc4a8282fe2fda634852"
  },
  {
    "url": "assets/js/41.6d9d1ccf.js",
    "revision": "111f15e980d542635ac15b3fb7e83e3c"
  },
  {
    "url": "assets/js/42.9bff1300.js",
    "revision": "26ee269e1a1d60dd33737fd593a2213f"
  },
  {
    "url": "assets/js/43.c08c4353.js",
    "revision": "fe16376ea0c4370d19c052a6a94607bc"
  },
  {
    "url": "assets/js/44.02fcf314.js",
    "revision": "e9a24ab7f6d8258b9e260dc110c6a350"
  },
  {
    "url": "assets/js/45.030812ed.js",
    "revision": "1c4f7d2e370eb218cf908bf8a54284b1"
  },
  {
    "url": "assets/js/46.a2525a09.js",
    "revision": "2eb46a82edd37bffa899ff5f2b5137a5"
  },
  {
    "url": "assets/js/47.322241b5.js",
    "revision": "08f580f1215347716d19bce5fc2271b6"
  },
  {
    "url": "assets/js/48.0a96035f.js",
    "revision": "4da22b5ee58c2c972584008f369babaa"
  },
  {
    "url": "assets/js/49.4dfada40.js",
    "revision": "93d2a313476717ce18d81f35fa251d2a"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.e48d7859.js",
    "revision": "aa315e92c8d930d96a00d0e8142cfc72"
  },
  {
    "url": "assets/js/51.287c4e77.js",
    "revision": "e89436df7d3d8e9dc4d2c6ec138413e8"
  },
  {
    "url": "assets/js/52.a18adf8a.js",
    "revision": "b312849040f1aee194a9da194511aa1f"
  },
  {
    "url": "assets/js/53.0406552e.js",
    "revision": "c196cded9077998f8bddc97c4abcc6eb"
  },
  {
    "url": "assets/js/54.521234b8.js",
    "revision": "62d0725d5543678c5abf858f0c5d71b4"
  },
  {
    "url": "assets/js/55.9c1d81c4.js",
    "revision": "de5f1c04baa9376fc0a55c1b5393bf74"
  },
  {
    "url": "assets/js/56.b69d390b.js",
    "revision": "e0a682919e8b725d765a695ad6ff997a"
  },
  {
    "url": "assets/js/57.5e174d64.js",
    "revision": "657013f1726c36da1b3bb97c2dac7a47"
  },
  {
    "url": "assets/js/58.e25fa7c1.js",
    "revision": "5eea125f89cb3f7522253ff7613c5d0a"
  },
  {
    "url": "assets/js/59.49dc083f.js",
    "revision": "0c6c5bf40453cfd443b2b2436e7befc5"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.7e5d0121.js",
    "revision": "3dbf9cac6ffdbbd9d3d76776ef5e9336"
  },
  {
    "url": "assets/js/61.b33ee600.js",
    "revision": "09d21228cd6919d013cccefebf10ab67"
  },
  {
    "url": "assets/js/62.d4100827.js",
    "revision": "77d1155d852e98a057c3a0e35ecc0b9a"
  },
  {
    "url": "assets/js/63.5b91743c.js",
    "revision": "fe55c91e33ed9b149f494416d0bca43a"
  },
  {
    "url": "assets/js/64.fde71082.js",
    "revision": "ede658e0956a0d8676a86bcd39fb2351"
  },
  {
    "url": "assets/js/65.c0152773.js",
    "revision": "5419271efe540b8a93290e9ac479ce0d"
  },
  {
    "url": "assets/js/66.8a24aeed.js",
    "revision": "4f771311b99eb9db8e7fba0950db03ed"
  },
  {
    "url": "assets/js/67.565a3819.js",
    "revision": "d2da03851f163f723fc8ee6a819d31a5"
  },
  {
    "url": "assets/js/68.1a28825e.js",
    "revision": "4dec7e810386b7b09b6b7dcf669fac6c"
  },
  {
    "url": "assets/js/69.f158bd6b.js",
    "revision": "f66c8ec9acc0dc8c0750400b90c0981b"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.38f46ec8.js",
    "revision": "fbc0159caf45f79ad2a6837435cd0421"
  },
  {
    "url": "assets/js/71.d93b2005.js",
    "revision": "7bed9f291c42fa3b46b1442807d2f1a4"
  },
  {
    "url": "assets/js/72.2ba452bc.js",
    "revision": "be72f01a81811601f7c652c1622c57d0"
  },
  {
    "url": "assets/js/73.6986c2e0.js",
    "revision": "f78ea4c5d01ac822df8203a77f5262a4"
  },
  {
    "url": "assets/js/74.722cf413.js",
    "revision": "3d3df204ffdfceb7723d59ac7ebca1da"
  },
  {
    "url": "assets/js/75.2a662955.js",
    "revision": "e2d2256104c47b9d57d4c833723599e8"
  },
  {
    "url": "assets/js/76.affd85b7.js",
    "revision": "f7e3a644560694888a8bbcb9dd5863f6"
  },
  {
    "url": "assets/js/77.b5ed9966.js",
    "revision": "981dc5aa441ad7610d76c9dfe5b35ebe"
  },
  {
    "url": "assets/js/78.a04ecfcd.js",
    "revision": "3ce211812a02a17e06ed02c03a3b856a"
  },
  {
    "url": "assets/js/79.87394c87.js",
    "revision": "2043914f2b51c528f71b7e14cc33186b"
  },
  {
    "url": "assets/js/8.d0a11db5.js",
    "revision": "7d37d11592a9ea48a943d72bd0dbb6e1"
  },
  {
    "url": "assets/js/80.ebdb4a91.js",
    "revision": "4d3a016dc4c82bbc252d4e426351a910"
  },
  {
    "url": "assets/js/81.bb0c9f4e.js",
    "revision": "c4befadfe72ee35f7e24103b97790d4f"
  },
  {
    "url": "assets/js/82.a7859779.js",
    "revision": "8c8eab253563acaa6727e9acc7dec200"
  },
  {
    "url": "assets/js/83.37bf74cc.js",
    "revision": "e2a6936c9eb75cf736c7c69567927097"
  },
  {
    "url": "assets/js/84.07fbbfe4.js",
    "revision": "f86300fc2a9ac3dfd4d121b595187ee9"
  },
  {
    "url": "assets/js/85.ac25a797.js",
    "revision": "948ee0911411eb412596c0f7bfda2046"
  },
  {
    "url": "assets/js/86.e9759b33.js",
    "revision": "f795cbcce9fab4e8117a05162468eb64"
  },
  {
    "url": "assets/js/87.9434b3ea.js",
    "revision": "39c8909cf389bcf6e6fc1cdb3a5faf9c"
  },
  {
    "url": "assets/js/88.82d2504d.js",
    "revision": "91261738823a15602e6414c4f5db0bfc"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.13414e09.js",
    "revision": "5a6bd507370f93b9578aab22d14c7cd2"
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
    "revision": "ddd592518f8d2df023bdbc386e94953b"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "49393073cc912266ab99fb42cdbc0670"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "c8de0cde5a4f8291dba7a2ab0d498a03"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "7b54ef5ca1d87d56d9f696afe2a96d03"
  },
  {
    "url": "categories/index.html",
    "revision": "93bc690507be9f76b45379e696b228ff"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "a29c6300696509696cf2e52f460902b7"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "8f1cb24a20df380e9a486b62ac3656d2"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "b9c82e33d5f991a7ffe6ef77714ac7ea"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "276b8912b1854a98323eb16f07975171"
  },
  {
    "url": "categories/JavaScript/page/5/index.html",
    "revision": "5640211e1f7baf460c474ce9bc63eb6a"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "071c03a006893e0f3d25714b12cf0ada"
  },
  {
    "url": "categories/other/index.html",
    "revision": "b476ddb101181bafa808307beaa7df11"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "144d90275fe1cb9f2b96f6f0c6af7e77"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "427a299b537bac7aa46a19a1e079963f"
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
    "revision": "ec1a322a0b7ac77699a49a9cb0c57334"
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
    "revision": "fd703a53390f86ead2de0f575485b7eb"
  },
  {
    "url": "tag/App/index.html",
    "revision": "0842bf065f5159811b20c4d2b2d4c3a5"
  },
  {
    "url": "tag/array/index.html",
    "revision": "8ed9643c7fa32a791ef9124920e3ee24"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "bf044c14265d0532c54d89dba8a82105"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "874942bb4bbd52d7e44cd4cfbe2a1015"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a0d9fa63286f1b6955f1570b3ede65ab"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "f8ba30cf660df38f98fabadc0db0b9bf"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "cf4a2d02a27d3bdf346a8c96f225282b"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "dbf31be344196d2b5ef8cea3b810e974"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "676f9556f0857a6abed1b8fbc8bd046b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "71b43aa9b34928c6bc924addd60bbbf1"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "be6e68cd338d8a8e8ce11b7db66a0e8f"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "814416e0fde8a4fa99185df0564d4440"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "e35544a64187c0bd4be96c330617daf0"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "efef974130a4475e1e8daca5c0bdb7c8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "bfd20688ef5243ac17502b2c8e158148"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "354bd24170d688357af58288d5071556"
  },
  {
    "url": "tag/index.html",
    "revision": "a706cd76f25803724f01cfe3ae0644bd"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "99ad386d61b78ac7d73f55ba60e0ae5d"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "90a4c4ac140c03a1a06307630ad2272b"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "019015cca65091d7aa28fb3b86572762"
  },
  {
    "url": "tag/js/index.html",
    "revision": "2c4b4449c0a4c76fff4587c79d8454d6"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "7ab906c7e65c763eedf0895a45dfb5cf"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "a5e9c6db2d97565705655fdb1a3a0468"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "d2bef7536efa34d9a982bb1ec79587af"
  },
  {
    "url": "tag/js/page/5/index.html",
    "revision": "d3db64fcda5f704158aa6a8314a93e53"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "d327a53a8fd73a36bf29998b7d5c7774"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6608f7fda243b46aa1d2dd64a76a3c16"
  },
  {
    "url": "tag/module/index.html",
    "revision": "4314f28c168fec12b809b954903639df"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "9d7e049321cefda58b666526944363a4"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "ec3506fab8cfda2ea84e28e8d32ba8b2"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "426e35cd314b53f0750680a6a038ddbd"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "8bccb7bd1fa8fca05304e17e6cc06e90"
  },
  {
    "url": "tag/project/index.html",
    "revision": "ce13ac21408358109c89fdc74971fa0b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "0bc42c6c06304196cf922b1f41419747"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "2cc445373578f734eb9588f23c92cc9c"
  },
  {
    "url": "tag/router/index.html",
    "revision": "3100b2366d87e3959b220ab9df137d4c"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "974b27a265af42e24f256748a2342346"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "e35a0518baaaec5464603fda79c90ab3"
  },
  {
    "url": "tag/style/index.html",
    "revision": "62456b4ad2cd7e5fb742bd901e51d9eb"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4d1e49c1e8f566d8ac9e4099a58700de"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "909ab4bdf9987133d89dddc1122d65de"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "0a65948130b08f964ea72c184815ec15"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "550bf6e6b3fb504badd2e5042906c3b9"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "410bc654b3e4b9c616ff50b0a1b48ee2"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "0a3df8d47cc5584ff45e1aa384918427"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "4c28aff684c3b6c52d06c473fcf9f5ac"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "b47e04f2eff0eb74abc7276745cf3702"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c1eabcb112dfb762502e04123ad91965"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "9f3f75b9b695f6a9d932a5ecedf64e79"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "8b7acf41e29cc1dd6cd9beb74c5a62b7"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b3ba2b3686928ae249c87e09f290787d"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "c29f27b8b3fe42c6756e2238c6356318"
  },
  {
    "url": "timeline/index.html",
    "revision": "7f819c4b4d8f6321f9f9029e3770286a"
  },
  {
    "url": "views/about/index.html",
    "revision": "3e17e084d776d4af65751c1414422573"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "a185e5f71241c7e52de14eeed71681eb"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "a9297c49511a6585663725cfec075cce"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "32bf0c8482d79f78d8b2c14128f79bbf"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "d06bb571cfd0b42bfb668245db952859"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "f855816149b2f5bc553d417b24c49cad"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "f42373611f739ce3ea15f168d1706157"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "a5a869fd37447073d96cd09de8268bdf"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "210e7f292bdbca41e1b3f73c0b8fec5a"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "41b682053128fe4cb3adc31a83970ea5"
  },
  {
    "url": "views/JavaScript/algorithm-10.html",
    "revision": "a79ca1c8b87346e8c68fffe98db49c09"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "a591466e7a23c7349cc454c02cf1631e"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "78d3f23b41c59af1fbc20d85bf0650dc"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "9284093a46e77d12d51cacdefde401d7"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "a4162f935b20ed814a26753291dc5036"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "ba04d17aa0bfb1b3433ae512aab6cc14"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "f6853daaf0fd05d628b385fa42a4710a"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "f4bf6a13b321cf345cc96bb0cc7985a6"
  },
  {
    "url": "views/JavaScript/commonjs-amd.html",
    "revision": "8d5ca1f04361b76228d7039c39888c55"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "ba91231b1ac6045ffc86a85174bbef42"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "4a9522653d0de144844581b360852ffe"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "4811f04661b56fa231cc2bab77980676"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "03a638c22efbdbad60c331ccd7987984"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "8a2833f587011e552d1e865d75ee000f"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "89e2a5d01b9df187315d1b24d0330880"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "be0d6e56eb2122fee7ce7878c835cede"
  },
  {
    "url": "views/JavaScript/fetch-synopsis.html",
    "revision": "4a70f651d45ab314c90649b1fead3088"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "3f5a25e080eebe5b068f6e84e3a5ec32"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "62edb36e5c9d21a0bd2634add74ec220"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "f95fc1f4ce4fc7d19372d3f7d6dd74b7"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "ce19869ddfb9caa5d4af92cb7696e061"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "0d267d927013b91cc4e09df2e7e22a26"
  },
  {
    "url": "views/JavaScript/initerview-question-list.html",
    "revision": "816b274ad895f46ead858e8c9b684efc"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "6f79b1d40374019f5b62e89715dc6de2"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "9b18b5bc05f814d4be01188a9e09d1cc"
  },
  {
    "url": "views/JavaScript/javascript-topic-list.html",
    "revision": "da12d37aa859fcc00c5d74f71d2f080e"
  },
  {
    "url": "views/JavaScript/js-extends.html",
    "revision": "6e07d3eae15e1b14952dcffb0f001d04"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "c467202a7593635941ed52730f8c8fbb"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "62c10fdf3585cbf65f6f2e3525e103e3"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "b799c3485539f94eba19caf7d2466b6d"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "1ac1d7be5efc4522b84491d7919a8d92"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "cf6f69dc7e4621a684ca5086a7b444e2"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "e68965e1718c87946aa0bb52992d8ece"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "1b9a011cf3bfaecf04fa70e73f8c01eb"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "6ebbf2b7332a42770eae3fce642dddda"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "eb42686374c452f655fa596261c9983a"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "cf1e78ac4a2e978a0559bc14202716f7"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "68906b01a37d2a0bf1cc6fd3d8f58ced"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "43a47c955b5e6d5c87a2e9763e7d5883"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "a3540539676ea92e0cafb27d7fcb48a6"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "972261aabc2a6ba411225558b22f53a1"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "5144dbde8efe796a3419f2a5b511a1b7"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "6cbb2872f631531f0346237a6f5d566e"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "67dc41d6a1b8f610298949672d4c47c7"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "9a52e50748b30d6d8b1a69599cc4ed33"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "f01ccc1b134185ac424f21fe93a3216b"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "45a467598e7ad1979d7e3a13d8ca7ec7"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "2ff2cb71707f7751d9dd33b57c14e5ac"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "b97ecee0928b05ca9f4546c6df259a59"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "fd7b42a486ffd8e8f8891da61ae22a10"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "c8215367053eb060142e86bdc1686dec"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "372f3e913e4121ba685ca5021b52b5fc"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "f7f09e45cf3e8069929b48eebc9233ec"
  },
  {
    "url": "views/project/index.html",
    "revision": "3300bfc580a7c1ac260777e86838842f"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "9d9fbed13c30c652d2abf338f1c2468b"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "0cda5dd58c6bf65a25ac1dec64003aa4"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "06840222b26a26c71f82955cedd797cf"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "660cb2eacfb069c1ff6936d9a0eaac86"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "70de8682a4b5a5818c3de6ca1bdd949f"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "c9d938a9f6fcc080047b0cc752d9c23c"
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
