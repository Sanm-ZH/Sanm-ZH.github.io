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
    "revision": "742839f952114b74859b35eb6b961a76"
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
    "url": "assets/js/12.bc270c2c.js",
    "revision": "5836caac95e500d395e558b1c45916aa"
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
    "url": "assets/js/16.78c85eeb.js",
    "revision": "cef37685232b5de38aee67b007a10165"
  },
  {
    "url": "assets/js/17.5842b2d7.js",
    "revision": "3821b731da105b1596b94fb0babdb8bd"
  },
  {
    "url": "assets/js/18.93ec21e2.js",
    "revision": "3db852903ef3b35ea475bb0a2262ee9f"
  },
  {
    "url": "assets/js/19.46c43b77.js",
    "revision": "3a84c9f6b315cebb6cd994049203c287"
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
    "url": "assets/js/21.911cd16b.js",
    "revision": "547c51e8d047eb985008a648f37a36e4"
  },
  {
    "url": "assets/js/22.87ed77d0.js",
    "revision": "fc9a1bc72ae294605a23ff595327a495"
  },
  {
    "url": "assets/js/23.f07ca881.js",
    "revision": "b3788de624d2922a87f5658f06651a52"
  },
  {
    "url": "assets/js/24.0a3790b7.js",
    "revision": "5d057e17f46259dc6404176516d8d939"
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
    "url": "assets/js/27.c5da92e3.js",
    "revision": "419f514f921a81d27e6f54bfa3038bd2"
  },
  {
    "url": "assets/js/28.689e6af9.js",
    "revision": "e96f5469703edef135289c83391b796d"
  },
  {
    "url": "assets/js/29.9a0735a7.js",
    "revision": "238f6c5fbb89dc2f23e42dd73b3031a9"
  },
  {
    "url": "assets/js/30.3621bbdd.js",
    "revision": "288e1b2162f5a5595744734df2b07d23"
  },
  {
    "url": "assets/js/31.8f70eb26.js",
    "revision": "ef9b16b35264b920914a6fda46f3d1dd"
  },
  {
    "url": "assets/js/32.1c52eadd.js",
    "revision": "4a49ea36a60e922af25f4a685f9c3095"
  },
  {
    "url": "assets/js/33.c09a7c80.js",
    "revision": "8056d14a43058952eed74c186504e2d1"
  },
  {
    "url": "assets/js/34.22615c8e.js",
    "revision": "d5fa232424fc9aeb5d5156054d41b46a"
  },
  {
    "url": "assets/js/35.8086e334.js",
    "revision": "a81e8fd5d6439fc6005c80838f84c371"
  },
  {
    "url": "assets/js/36.61976d83.js",
    "revision": "6dfe4d5faa1e9ab8c31dbfd25fdbc3f5"
  },
  {
    "url": "assets/js/37.231f76e3.js",
    "revision": "2d3bba867d0c7fe2459df418e0297774"
  },
  {
    "url": "assets/js/38.bff3f7d5.js",
    "revision": "1cf9735fa75c0020a638504784b7d729"
  },
  {
    "url": "assets/js/39.6d8c000f.js",
    "revision": "8f176434d78dc84c0015d0d68266c137"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.67ede6bf.js",
    "revision": "e50539d845d8545cc3ae8eec7d800645"
  },
  {
    "url": "assets/js/41.38b72106.js",
    "revision": "77b2c2dc3136ebe98805df8af85fad37"
  },
  {
    "url": "assets/js/42.102e4588.js",
    "revision": "26e03a529aface0454dffa772bc14c00"
  },
  {
    "url": "assets/js/43.d9aaf73b.js",
    "revision": "b5e4b645a624083dff06694d4b2c88a9"
  },
  {
    "url": "assets/js/44.c289d602.js",
    "revision": "45c72d1685633c4aae84e7640a805854"
  },
  {
    "url": "assets/js/45.f9692fa4.js",
    "revision": "8b52a44e68b2cbf33689aac3efe89e12"
  },
  {
    "url": "assets/js/46.6205d764.js",
    "revision": "38656e38f64a91ee6a2a9ba62db1b89f"
  },
  {
    "url": "assets/js/47.ba7d25c4.js",
    "revision": "49fcb578d04e9e42ccaf8dadb3e4775b"
  },
  {
    "url": "assets/js/48.3fa06988.js",
    "revision": "d41fe2834e2a960c6daff948f2bfa7b0"
  },
  {
    "url": "assets/js/49.24873294.js",
    "revision": "a8baea93cb7695f7319d325068238fd6"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.5da5256c.js",
    "revision": "a834fbf72475994b144c9c08a8f8435a"
  },
  {
    "url": "assets/js/51.60fdbd32.js",
    "revision": "aed658c68f60837fff7dabbfbf984a76"
  },
  {
    "url": "assets/js/52.cb9d8fe8.js",
    "revision": "c693596caad5f3ce68ea4f75600fb2c7"
  },
  {
    "url": "assets/js/53.28959d4d.js",
    "revision": "a67cc6106f2683932eb99a0c3cc99110"
  },
  {
    "url": "assets/js/54.f49359bf.js",
    "revision": "4f4cbf808494019724bd039b5d18120e"
  },
  {
    "url": "assets/js/55.5b840bca.js",
    "revision": "30fd98f0852cd2a0bd5178de795c6d90"
  },
  {
    "url": "assets/js/56.fa3bcb55.js",
    "revision": "0cc6abf99d998c08af77f2a6e32becaa"
  },
  {
    "url": "assets/js/57.5100ea7d.js",
    "revision": "8fd8fdeee3325b83737617365ba9a58d"
  },
  {
    "url": "assets/js/58.c06422a4.js",
    "revision": "1544be60396e49ba2db2edac38963601"
  },
  {
    "url": "assets/js/59.4b7ec358.js",
    "revision": "657286b99ee5e3c9462fb384bef19cfc"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.7e381574.js",
    "revision": "c3eb4336fac7f097b110872a356924f8"
  },
  {
    "url": "assets/js/61.be2b7c70.js",
    "revision": "121b0d6a3f313eadfecb3233aaa797fb"
  },
  {
    "url": "assets/js/62.4b9d1b51.js",
    "revision": "a88016502cbe70410f4875451c1f6765"
  },
  {
    "url": "assets/js/63.15a41875.js",
    "revision": "16955af7923e0897989ef1f6372f9c27"
  },
  {
    "url": "assets/js/64.e9b6a76f.js",
    "revision": "ffea23e67cfc3091243161d442559d78"
  },
  {
    "url": "assets/js/65.4194c48a.js",
    "revision": "9c07b037f1d7948dd2028bc9f5ed454e"
  },
  {
    "url": "assets/js/66.b8d27d2d.js",
    "revision": "f96f912e71e4196cda683a5abaf9a5d6"
  },
  {
    "url": "assets/js/67.4d5d1383.js",
    "revision": "ad9232270e801bdf2431461e8b6dccdb"
  },
  {
    "url": "assets/js/68.129f0651.js",
    "revision": "f4b21a47815ea700d8fe4f28f7f10cd9"
  },
  {
    "url": "assets/js/69.acff5b75.js",
    "revision": "d377fa44b9feeb5ee90671237ff8bc7b"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.7f13b181.js",
    "revision": "4c50bbac0ee77cb008d1813610bcdb6d"
  },
  {
    "url": "assets/js/71.dbbb0ed4.js",
    "revision": "6c46c5c05803d298553172c24bc269f1"
  },
  {
    "url": "assets/js/72.5a99f9e4.js",
    "revision": "3ee776f24ae7eb269815e4b01488cfb5"
  },
  {
    "url": "assets/js/73.0d62b1bd.js",
    "revision": "1d62b469d7e77c49e5e487a87eeec287"
  },
  {
    "url": "assets/js/74.e508e619.js",
    "revision": "c869183d558457dcb918abf76d7c9ca3"
  },
  {
    "url": "assets/js/75.47e21442.js",
    "revision": "61f7994331fdd6fa050c65e93260a3c9"
  },
  {
    "url": "assets/js/76.60510056.js",
    "revision": "e12bcc8f3287ebbdc41455d76f6396f6"
  },
  {
    "url": "assets/js/77.d9659a2d.js",
    "revision": "a069fafc24a74ffa1cf4880f651efcd6"
  },
  {
    "url": "assets/js/78.67de0d88.js",
    "revision": "13d40e2a1e9763dbb9a3fb48e9957daa"
  },
  {
    "url": "assets/js/79.7c7f85cd.js",
    "revision": "1e9d7ec3c32c5536e354f0311e4d438f"
  },
  {
    "url": "assets/js/8.d0a11db5.js",
    "revision": "7d37d11592a9ea48a943d72bd0dbb6e1"
  },
  {
    "url": "assets/js/80.c65770a9.js",
    "revision": "fb0192f8094f856627f5794cc767ab85"
  },
  {
    "url": "assets/js/81.2e66957a.js",
    "revision": "bc7f7e4e318cea05ca1a01c6d51b540e"
  },
  {
    "url": "assets/js/82.1b59286d.js",
    "revision": "bd5012beb545177ec7abda12bd356961"
  },
  {
    "url": "assets/js/83.8738286f.js",
    "revision": "264d5fa0fbe8c4eca9ff86e6a322671a"
  },
  {
    "url": "assets/js/84.e2893447.js",
    "revision": "0a2a0337cef048dabadc457aac53cb13"
  },
  {
    "url": "assets/js/85.5079192d.js",
    "revision": "c86aaca5adcb1ee12e138bbcbafe5ade"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.e06f2e2d.js",
    "revision": "a47dbb03ffe7fc176d3021ffba797f93"
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
    "revision": "20d23e5cbf6fd7b61720cb51b56fb485"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "b772930d20e6df284686fd7a3a3eeb22"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "8aee124ae075f4fe4e0942623eb586c9"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "d68e89c685640f6e661b6c0deaccc612"
  },
  {
    "url": "categories/index.html",
    "revision": "2daa7cc7bfb5dbd7972a990742835053"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "caec8f425ace7e482e6c045ea6d5e250"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "3c884bb9d2cd23b2cb51e831cebedec9"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "4eff879c219454499a9806d3267eb949"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "64478aeaa3cf7aa6ed4ff38b90321fe4"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "26b789a1ca0e8f0603f592940c2ef3d3"
  },
  {
    "url": "categories/other/index.html",
    "revision": "be5590eeded9da2000252988530ca942"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "b170d7becd2195cd1e51e44b07afdcdf"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "304237508b10ee0a4a9d1d7a2c561af4"
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
    "revision": "a1c0c76024edff3954346a31bdfefa42"
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
    "revision": "9b5d8aa9704e69beb509be94b30b72cc"
  },
  {
    "url": "tag/App/index.html",
    "revision": "4d2e6b24a1fc9eb6162f27b1a85c82ce"
  },
  {
    "url": "tag/array/index.html",
    "revision": "e4fcf08d439f04586cb50fb7817e928d"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "6094f9a52ce7dc2d87b700fa7e06121b"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "ed696f595529d60b330acb96e974f272"
  },
  {
    "url": "tag/css/index.html",
    "revision": "58c505f0bbebdd6c1803b632927def87"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "da0db1957d33d955cbb61e444e0635b4"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "fa8d017d3379bc88c49c6bd6f152174d"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "87f9dcf5699b2f814caaa043d842e909"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "aea01bdbc8ecb212fc0bb312fab7ee1e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ac257ef31155671edf2d90f65771be08"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "e796239492ef78264ac23f4ca48f4d2b"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "a06cab6eb3159611581d6927380bc407"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "f038c233dea6aebc607c70190734cad6"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "f633eaf2fe348cc042ceec07bab68009"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a9d0fc7152c3dca24a8b1007ddcdcebd"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "148cf2f2a9a3f0c16d31f9a19c2308ac"
  },
  {
    "url": "tag/index.html",
    "revision": "5434bad50fcb9abc1ff04fed781b712c"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "ef521b074524a85fba6b3145b6e51286"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "f9eb24224cf739ce271577383526eb5b"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "1a96609d7f6908144af23ca8dbf6026d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1d46f719aca85cf2e41b96da9d376f36"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "b5050556219f302a3b5ef6f6c968fb63"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "f52a3c5431d631f8b9474dfcab7c5b24"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "aee6eb00168444d06d5dbd90cccaa69b"
  },
  {
    "url": "tag/js/page/5/index.html",
    "revision": "c42dbc3715b913c592b3b9042ae11573"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "8d87c67799b660c357f3d106b7bbe4c5"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6599575a49a97d7e6b98eede34507d3b"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "4d8b407f2409f79e95d42d9e8096ad58"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "a0cc818b6ad45fd083779e56ad44143a"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "61cb5d1655a92cef9409e00f53701c58"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "68dc18d93fdd625b7f9a14f30332336c"
  },
  {
    "url": "tag/project/index.html",
    "revision": "d2f34bc776bab4241e3815fef19d3c43"
  },
  {
    "url": "tag/react/index.html",
    "revision": "31b05b9a6bdeda44553c21e82e525608"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "99c45641e3e66bb545e4479562f5a220"
  },
  {
    "url": "tag/router/index.html",
    "revision": "fe6a4fc9795ed2e32d24d5a713f7c830"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "6abc9f236bdfc8f58b8fb01c678e74e9"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "36e55984c09021dcd3cc45a55e6419dc"
  },
  {
    "url": "tag/style/index.html",
    "revision": "b614748d2c79d1edb457e30b265e4050"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "3c231f565517b328551888e52a42382a"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "27517d4fffd011599b0473578df7d2be"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "66f4a63fe131abf8fa6efcf987794c4f"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "3b856b9d45a81944e059b12499092e33"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "d467114250f0e7ccd471b6b347e7a5de"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "e45326f6acde4f6a381b46fa4a2d24b1"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "7601c77571948019d955cda82b20b0f5"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "13d50e08487eefa2d01c6480558563ee"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "dab24036a964d1f761294ce8a0e41898"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "6d116e887c454ef1379a7011ce98b2fa"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "cdf5706c4fa618999139f31b9e697a7e"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "ccda39f0806d819d0b76d524521dc0fd"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "e0b0980acc6f6bc3a1bd5c0ad852bd09"
  },
  {
    "url": "timeline/index.html",
    "revision": "d55a4abf3de4de24ec459629d001ac09"
  },
  {
    "url": "views/about/index.html",
    "revision": "8674e27562002f771ef1da36c3dbdea4"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "d64800d87f13ac26a102766794ac12c7"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "93607a5f5bbcb41fc1c4c1c66c057beb"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "8f170e241f8d33e2a825fd696e9071ff"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "07b86ac56f26fda8fbc41f44df7382ee"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "5313313f187f231b831f59de1b6a555d"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "04e90dfc5a445a671057917168709bbf"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "0b596513714d00aec2db413b7c7927bc"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "f0c37d0301eac0be6d9204dbf75ec2a1"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "37cc1428dabf36ebd193e964fc115e76"
  },
  {
    "url": "views/JavaScript/algorithm-10.html",
    "revision": "c0700e245dd7dd46231c3836dc04b030"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "001cb4822b87c9f280f1a31855b27f3d"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "ead08d0e123be45bde773aede156ee36"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "e20c27976446ca4a026f96c6fbaa8c2b"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "9ea069524a42469fc7e89b6e1daa5960"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "771a48cc998d72f8188e54981be06589"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "d480c6a39c1ddec3b4b48f7d76d84688"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "caacd7cf9ff2614df324634f21ae337b"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "87f5459169ad8a6174590d85a6e436bd"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "0a046c67380d0e4a95853058a2fbbf34"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "a1b17a57959947425c5934704023548b"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "e03998f354c9fcbe2ba7d847aedd2a48"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "0add6ab00119dc564c31643f6d0ffc3a"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "6aa29f46e983afd2e96e0e786025a8d2"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "299e5c7ac967c77a7fcb5e1e712e86c1"
  },
  {
    "url": "views/JavaScript/fetch-synopsis.html",
    "revision": "834c51d24f116e4b90bae1bfe3c5e8eb"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "84bdd99339e3e988a456da2b772e4d61"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "d5b0f4b13bdcfb296197b75a2dada31f"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "4264ef8da79e895dca80b13c956099b3"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "9afb5d88dc6d906499ed2c54f899c6ce"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "c514939b12979f825c9fa37c142dc2d8"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "3eecb15d271d52cab1899b5e10f2ccdb"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "08c9df3f5aedd24f6359bf9b924370f9"
  },
  {
    "url": "views/JavaScript/javascript-topic-list.html",
    "revision": "c8d3307173020afbc654147b9efc8dae"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "916cd5744ad7141aff64fde205b76b3f"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "699a4f4fc2fc8bb97fc050fee8376377"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "506da2dff9923b1d45a274f10485e8e3"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "ebff5633766894b254e87c8c2c0316e1"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "fd25f83c20245fe1c59b237782b363d5"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "baf52063c5a397cdf5a396531d0d3fa2"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "f5d01e2132b8239a6c080c63ff5f5634"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "bbbd0c227fe1c73b1d4360f154814374"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "66851f7ea068beb768370d6efcd96b81"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "4ea2348931432904da240b4ae29a758a"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "7df88df9957605fc5cced63fc9088bf5"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "10cf12e760186e890ea13adbd8e9ba32"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "1f57b0849c8662d91f4f7e463408252b"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "4fb30df34c4b67f31065ebd0914df030"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "bbad73d4a47702c79758bfb7b2b3cb40"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "55da240f6b7025ef29fa50c014382e15"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "11b0e7a90eb2368b6c27b8466b1fc3d9"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "2d31f6dd6dc5c7f47716c74105d924c2"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "462015de4eec46b3ae65b0cb15bc0132"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "4c488eb9aee079e850d937e2f0f88777"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "7706399ad47469a9ae7369389415c432"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "8afa73e7b7f956bc40733a5aaa65dcb9"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "c11f03b179716c14d4cddde79a71fc5f"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "b3d212b539c87f1f99b274054232e8cc"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "866ef62395f271f27eb2b8fcf893f8e4"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "a2f9be52e6753bb5381577e68201db5a"
  },
  {
    "url": "views/project/index.html",
    "revision": "4e7fe87230ba3565b54283bc36ff0bc7"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "80459163cac2c52292af69c2673b5b0a"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "88fd24c7a421a573e8f679d0826ee3bc"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "71f5f371e74e9362137e36d1ddd034ab"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "4377474a24c7482aeb90ead8944ebe64"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "e7b6af590589aa6407dc11cf40ffc690"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "d6d703e7e5968d25765057cbbddc7854"
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
