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
    "revision": "0345b1c67190fe6541cf3da10577c0fa"
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
    "url": "assets/js/12.990a84b4.js",
    "revision": "8310f0535ef4eaa26fd0eb2a32c59a76"
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
    "url": "assets/js/16.51e9592f.js",
    "revision": "5b92b649a786ae4229fc476529829a50"
  },
  {
    "url": "assets/js/17.5b4a3c89.js",
    "revision": "5564723e5d1d6b0160e8ee9a814f55a0"
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
    "url": "assets/js/20.1dce0569.js",
    "revision": "4f99e99a10d42843634f6040a4b73b0c"
  },
  {
    "url": "assets/js/21.da422fb6.js",
    "revision": "4ed336510310dc742c8ade38d71bea08"
  },
  {
    "url": "assets/js/22.87ed77d0.js",
    "revision": "fc9a1bc72ae294605a23ff595327a495"
  },
  {
    "url": "assets/js/23.2946bf1b.js",
    "revision": "be3c4975956d57cafb9262b4213c3cb5"
  },
  {
    "url": "assets/js/24.0a3790b7.js",
    "revision": "5d057e17f46259dc6404176516d8d939"
  },
  {
    "url": "assets/js/25.182aac8a.js",
    "revision": "4239767c469f1f6f29f39a88e37e6177"
  },
  {
    "url": "assets/js/26.06757a2f.js",
    "revision": "c45883129b6fabdcdcaedd10dcc846b5"
  },
  {
    "url": "assets/js/27.c5da92e3.js",
    "revision": "419f514f921a81d27e6f54bfa3038bd2"
  },
  {
    "url": "assets/js/28.09c0c60d.js",
    "revision": "b0b446819b26063c91d5dcd6d60fbbff"
  },
  {
    "url": "assets/js/29.ccf5eeac.js",
    "revision": "9c9a69a713921fcbe5b725ab2cf55473"
  },
  {
    "url": "assets/js/30.4d102764.js",
    "revision": "b97ff6a057322b9c9a68efa9aa83c7d1"
  },
  {
    "url": "assets/js/31.8f70eb26.js",
    "revision": "ef9b16b35264b920914a6fda46f3d1dd"
  },
  {
    "url": "assets/js/32.46c4c46c.js",
    "revision": "ac796b7e9f10f39a719da02916d5f636"
  },
  {
    "url": "assets/js/33.c09a7c80.js",
    "revision": "8056d14a43058952eed74c186504e2d1"
  },
  {
    "url": "assets/js/34.a7d79b40.js",
    "revision": "4fb9e68eb8948de1bf75753ebd2f2ecd"
  },
  {
    "url": "assets/js/35.ff4f42a4.js",
    "revision": "be6d4f7b487aff677d77e06b7547d591"
  },
  {
    "url": "assets/js/36.cf71a789.js",
    "revision": "6d71d1d29368a16c73b5bc683e86ca81"
  },
  {
    "url": "assets/js/37.55179c10.js",
    "revision": "02f98b29a2d04f312ca65d00924f1d18"
  },
  {
    "url": "assets/js/38.4b10c147.js",
    "revision": "5b22a500dbdda0b2510ae4edee24ec47"
  },
  {
    "url": "assets/js/39.d0e5a134.js",
    "revision": "5bf48e4fa8107f8e110614bffe057c1f"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.d7c1e8a4.js",
    "revision": "5e11e78f39e75e6f77b59d0db1f26e9c"
  },
  {
    "url": "assets/js/41.dbf8c539.js",
    "revision": "19d6c8efced482dd006b97ea3a33677f"
  },
  {
    "url": "assets/js/42.f11f60c6.js",
    "revision": "8bed9e45702381212f04cae538004846"
  },
  {
    "url": "assets/js/43.32650c1d.js",
    "revision": "f124fc3e6a503e687ea65530ce373aee"
  },
  {
    "url": "assets/js/44.2bb94349.js",
    "revision": "ef5904b50fbe756d5700305fe4590fb3"
  },
  {
    "url": "assets/js/45.610c07ad.js",
    "revision": "fd2f3e69c69404d2311adf526fb41128"
  },
  {
    "url": "assets/js/46.1e208aef.js",
    "revision": "8e9159f9da447ac99521e116d8a83e8c"
  },
  {
    "url": "assets/js/47.c45b9c74.js",
    "revision": "35534bc5100b0db8a23f3573ac57c689"
  },
  {
    "url": "assets/js/48.0ee7c759.js",
    "revision": "ee9ebc48737e022f250ec0579a53dc4e"
  },
  {
    "url": "assets/js/49.0a8673b5.js",
    "revision": "bfa77586ea63b8af36717a39a2b70a97"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.71ed403e.js",
    "revision": "5e413d04ae5fe325ea83100aae2d3ff1"
  },
  {
    "url": "assets/js/51.d4b6160c.js",
    "revision": "7693adb67f8bc22cfe88c25bcb0c9b57"
  },
  {
    "url": "assets/js/52.e82b73d9.js",
    "revision": "524c73193dc96fadc839232611102f33"
  },
  {
    "url": "assets/js/53.d029e050.js",
    "revision": "c90835dd3d44a5179c9725e33c587b4c"
  },
  {
    "url": "assets/js/54.fc68ff51.js",
    "revision": "fc3fc6ee95ea727c526354f3a0a21d6c"
  },
  {
    "url": "assets/js/55.300dfaa3.js",
    "revision": "f7ee2a91a52f54dcbf206971132ec363"
  },
  {
    "url": "assets/js/56.a9b86387.js",
    "revision": "22924a2b5857b9ff68fb9c68732efc42"
  },
  {
    "url": "assets/js/57.e08ba46e.js",
    "revision": "807364466ab513aa11547661e816772c"
  },
  {
    "url": "assets/js/58.4b142071.js",
    "revision": "d94b79321cb8d0f5e7bcdb4496bf07b3"
  },
  {
    "url": "assets/js/59.a27792e4.js",
    "revision": "aa1aac3f250acf6b075fd8c4e04291f8"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.3f48ee62.js",
    "revision": "f804dec2a66d5ec5f10f53264ec2bf36"
  },
  {
    "url": "assets/js/61.d7203618.js",
    "revision": "3f8882409dacde0eb3a94eab937a178f"
  },
  {
    "url": "assets/js/62.55ed3dee.js",
    "revision": "5c1e4a7d50295b35138cd68aa689d3f6"
  },
  {
    "url": "assets/js/63.3a15912b.js",
    "revision": "d3f7d5321963d2d24ce85348fa062f6a"
  },
  {
    "url": "assets/js/64.b8ac8958.js",
    "revision": "4d96235ee4fcc2d0881d63b1c6aada71"
  },
  {
    "url": "assets/js/65.23759675.js",
    "revision": "1852d791e8927801280c382f0d544034"
  },
  {
    "url": "assets/js/66.8452182e.js",
    "revision": "846b1506eda78b4fe293edf030298e3e"
  },
  {
    "url": "assets/js/67.223bca0a.js",
    "revision": "5e6d175f71fdd976c5df72aa85a4381e"
  },
  {
    "url": "assets/js/68.15178950.js",
    "revision": "2d5f2eb4cc7615e8c6317a67552c9728"
  },
  {
    "url": "assets/js/69.63b8082f.js",
    "revision": "74ec51db8032aa93963b37ea72deec44"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.a6324126.js",
    "revision": "39d8a046d70f8b20cccbc524194d8428"
  },
  {
    "url": "assets/js/71.75e0955f.js",
    "revision": "7e5b71320c3b95cc0f702d5362c2d3ea"
  },
  {
    "url": "assets/js/72.dfa58f91.js",
    "revision": "1ff3da643e60e3e82a57d4fcdb494483"
  },
  {
    "url": "assets/js/73.c1b035c1.js",
    "revision": "366c1011431ecb4bd4fb36fffa54f5ce"
  },
  {
    "url": "assets/js/74.ecd69149.js",
    "revision": "b08c5cd1ca41f5e5c3132fffd7380b9b"
  },
  {
    "url": "assets/js/75.b390f466.js",
    "revision": "726d3d54ae7c936421fc1ec628564f8b"
  },
  {
    "url": "assets/js/76.ed7e23d2.js",
    "revision": "e6e07c3464b9bec1ec9ce1c1ac99cc76"
  },
  {
    "url": "assets/js/77.d8bec3c9.js",
    "revision": "f1ff40a7028169827f811b3ea4b24d5d"
  },
  {
    "url": "assets/js/78.599f8d74.js",
    "revision": "55bc6391bb0f199188475062ff851c35"
  },
  {
    "url": "assets/js/79.fa69f561.js",
    "revision": "c76220163703eb334106d73a2a670dc7"
  },
  {
    "url": "assets/js/8.fb700b15.js",
    "revision": "17f0fb49dc4b2e419c612efdc0d2f447"
  },
  {
    "url": "assets/js/80.d1b0f2ca.js",
    "revision": "d39be2184cb58a712157e04dcd4348fe"
  },
  {
    "url": "assets/js/81.95c7fafc.js",
    "revision": "0b3afc9f22350fde4446efde993e5785"
  },
  {
    "url": "assets/js/82.4681aebd.js",
    "revision": "4d0304441e69b03298cc64297ce58dc0"
  },
  {
    "url": "assets/js/83.d0860b42.js",
    "revision": "c6db1da6cc095ae4e23cbd0de20fddee"
  },
  {
    "url": "assets/js/84.b3dfbd7d.js",
    "revision": "069b7973c46d97912ba51815a36873d1"
  },
  {
    "url": "assets/js/85.89dbd474.js",
    "revision": "9749f1f0e1be0215c036ebdc811a7770"
  },
  {
    "url": "assets/js/86.df2636d1.js",
    "revision": "965928b64424ef9052585c74a8a4c490"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.f240f88b.js",
    "revision": "736e44d75a8a87bfcc3beafca4fb2194"
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
    "revision": "f0ea24d2c393ff4363436aff57ca4ff1"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "444ddf221b3e2bf4ae6774ff0fb63bca"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "c906143dd4300544f2af2ae8ce72e805"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "6c479bdd6a2fa49311ae1fbfc0e76da6"
  },
  {
    "url": "categories/index.html",
    "revision": "cf148e7ed4e4ff49ada81f85c43f11bf"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "f6ec3a24f8a90ab4fbd3eb1877042430"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "83e3db44d495f11c88d340adcd30500b"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "d9e11c2b139dacf73a47f8ae9a953ada"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "201da4935eeaa998ef3bb3750a1ddf69"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "464a1a71d7f81ad3f4bfade72b29c496"
  },
  {
    "url": "categories/other/index.html",
    "revision": "e8762542ff69ea8cf4a08fad1e33c348"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "dfa04cef77959c5077d958c8791fa2ee"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "776bb288fcbc8103d2e206aaa2c496ac"
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
    "revision": "cddb7df5962cfa823fcd8ed042e93fe4"
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
    "revision": "3cf9db2ed7e37d9e9879d15f2f77c1f4"
  },
  {
    "url": "tag/App/index.html",
    "revision": "4771d59471262c8604427dcbd2e413ad"
  },
  {
    "url": "tag/array/index.html",
    "revision": "44466ed3cc9365d271cfba06565301cf"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "ff36ad0478fc4802271364d26937a0f1"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "14cf64b44109259d21d7e22d940563ea"
  },
  {
    "url": "tag/css/index.html",
    "revision": "852d5f917ec7086a90dc511a06035474"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "aa28dffea619ae1f98faf97c078a61a4"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "063754bfc417651d8f9eaa7a3aafd640"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "012751bacf9cfd42e98d1db2baa291d8"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "5a54d266a4951808dc01cdc2c9f813de"
  },
  {
    "url": "tag/git/index.html",
    "revision": "51163a146d99380d7b6758a3b9a804d8"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "c7dc5ef970fcc0c435e4c36175809331"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "511a4129d3d80663f86c76fc25d7ac11"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "fa8f2d0ae753f7eb0202930404cce5a9"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "3927c8741fce90387e25a63feebe6a27"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a32a687eb9d5895ba84c22a6e022632d"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "b14a35e3c08f303055de500ef57951ef"
  },
  {
    "url": "tag/index.html",
    "revision": "2b7581938ebbd9744ef4bd3480696686"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "98139e4cee96df6ff185b39898153fa7"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "8f38c945e7659f5dbda5475160658cd5"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "afd246eab94d9ddeeedc8087159f264e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "fc5d89bdb1c9a2f7c3d795d3b4cc5ed5"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "86bd2f83453e50d667deadcfde35b70e"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "3e55d453866190bdf06f84987057845d"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "52a65f9a1c6b3fb00ac3d4ad425621ba"
  },
  {
    "url": "tag/js/page/5/index.html",
    "revision": "d7feaa76d20d9a8674d26c462171ef70"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "df94d2ebad5a9c1e4dcd081b39be51e3"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "c3f5655d67d1fe9acaf336d3a521bfac"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "53b886f556911854a8b695b52c23dc76"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "3a1085e931092944eb9cece78567228b"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "e6122c6a168b15730732e47a545fe911"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "cda474054ff6b8ce5a164fe69c8d4ef0"
  },
  {
    "url": "tag/project/index.html",
    "revision": "be43a372d7daf72b95f3945b2e183250"
  },
  {
    "url": "tag/react/index.html",
    "revision": "5fa77c96f18ec52a207fd9f3356f49a6"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "c4c5514178a4608feeeba8788fba5a04"
  },
  {
    "url": "tag/router/index.html",
    "revision": "7e993fe4dcf5c3fa6843b53379b7c1e5"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "717e2f0db099a8dfeb541550a36a50c5"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "aee5ed983d9df4b80b5aed1fa01b7c00"
  },
  {
    "url": "tag/style/index.html",
    "revision": "9507ea2d91ab689541a0a029eca2caec"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "0c3306fa0390d416f3c92ee901e6a445"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "35eb39404a27a9539909b7971e10e8db"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "7f1508f508e236f17d9aa593bb674d39"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "5d276e617008eda5b9223044a200cd91"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "e24709021d230683559072a5383f13d8"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "0ecff897db0c7012f06fab1cbbd0ac9a"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "f29ea55257e8a3c7d80c6725be4b94f5"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "966505a5c3968bfdf6695cae599132d7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1b114860d820b667644003ccb291b578"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "fa0d7d09c7d0ebd9940ffc57f681f354"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "b8892a2f450b0f4b46ef2ba800827a2b"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "91e381b09171d06eec9bc1512644f23c"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "891f58f2795f9639be02e1e9f9c9faa7"
  },
  {
    "url": "timeline/index.html",
    "revision": "429246f7992e41f1307b43eb52dc7295"
  },
  {
    "url": "views/about/index.html",
    "revision": "a3980efbea0cb2d0ec52d2e9845b99fa"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "6500402100fbb0bd9cd35bae713823d9"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "a309386854cccea45cc4904429ca1304"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "e64c82693e0bead03043d48d5de8203c"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "2f9fb3a1ad4682fdf9d562b11cf4532e"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "b90ba328408773a46ead4f1990fa0a13"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "b35c5c9865e2d13a244b9b538e5ddb5a"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "dcd009b28a057613e497b77f55cc56f2"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "d77416a447abe33ed85184b2db7dde6a"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "b6542d412ad40253fa3e2cb11966b56f"
  },
  {
    "url": "views/JavaScript/algorithm-10.html",
    "revision": "7d650d7f00c216e03bddda90a18e789d"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "bbc8ee007bdafd7805fde910ab731c58"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "69b9182e1d152a84990cfc17eea53958"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "ec58897b5ce929c957827568184469d1"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "60ff85a09255403a80c2bb3b43780118"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "6c98b7ca687ec8196610443d58b1bb64"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "4b6190fc87d9430b52bfb55730e509c6"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "0b6d7cfa690633fb0c05a890a8d02aff"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "444cda757f96221259d61a1de48b81cd"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "b7f7d11bc604801610d1c4506acd2e6f"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "fb9f43db29acf93e1970b02390af4b3a"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "ae16b4ca67211038028bb686bb88e385"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "51c8d6a8be04b073974e826462825018"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "065a65296b4a449ec7440e69bc10aeb7"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "4cf995ce6bc0bca278ccfaf18877f5c3"
  },
  {
    "url": "views/JavaScript/fetch-synopsis.html",
    "revision": "fc170b02ee09045d2ab6648fd0b79129"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "9204c7ff2202f012f801cb58309fbde8"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "ddbf47bf07aea1c4e35a2a0be691c9cb"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "c051958aeeee4e3a13e8bad1274b93f3"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "28cee0daf05f701d874135ab0ce82d81"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "496977d1625ad4492e4c93c93a0de4fd"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "dfced1b744acc7c83992c575f60d4091"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "89031db0275fa40eed4716e6ca438f50"
  },
  {
    "url": "views/JavaScript/javascript-topic-list.html",
    "revision": "ea1886579778e526fe9283064989dd2f"
  },
  {
    "url": "views/JavaScript/js-extends.html",
    "revision": "ddf2d775b926f17873f080505c9e64e0"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "fd172169b16801d72e01e99e33ded2b1"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "e8b9f633b39ae53ddf909b20c30dee3e"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "c008ccfb046495eb98990a1b60b88492"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "9dad99c7bf4e14da87e0d6a0e5259302"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "e7495b3677fe71d965f025ebe8ca0831"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "91660b1e2b9351d275c2d37120776815"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "d46028cc469a3302aa86eeb249f9fb93"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "54cf820356d45952c589daefe03d62b6"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "0c3d0c9de8cc0d0d79632457ba1c6b0b"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "87b447fa306c7f4acea9b18d619bb7b2"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "71d9af37d1f9cef51d7c4ee7ca6cae81"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "6764b48f3d052645f85fd5810a6a7e36"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "4bb7a9d6d6b837358f783a76ea8aa8f5"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "b64f2cfee2db0c7b7c81faffc5c99a51"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "023ac5097e5cf5a30721f064af09f231"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "38a02fa49a96bf932fed7bb9e71a47e1"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "60f9c6c6efaa61e78243d79161883c57"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "9c07552c000bd88602f8b9d950349211"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "250cd448076c3f1c8db31a2d33187b4a"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "48662e9e7d56573b51cac3274d83c719"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "0dd470020550d45a4723670d5482323f"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "a57b7280f7ec2c419b838086e6692cfe"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "25021a6f59a89fba317646abac8c7d49"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "b6cb82fa0f11cd968c8d2339eae3f623"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "8d225f2cce0aa56e94bc3ac43ea7082f"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "62e5fb9ded76b24d759011ec93c6b838"
  },
  {
    "url": "views/project/index.html",
    "revision": "fbe338c37a113a814a7286fd71c7df98"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "4fd5b6418ae4f9442bdd536d7790965f"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "9d2896bb0e36c7b9b232e6d80a8c031d"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "a98cfb132a9c0b2a34662f2fc4e765f5"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "bb89820df1f050b4af6860aec342e919"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "7df6ba0c63ad6c3a6741519cb046f2de"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "cfbc2e5a01a028161ad162291d6fc6af"
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
