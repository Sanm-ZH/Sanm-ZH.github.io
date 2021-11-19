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
    "revision": "b6859c3990fc5e70fb4d5c9c18e76fc3"
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
    "url": "assets/js/12.12992447.js",
    "revision": "f820eb1cd0c625ad43a9034c7ab1c55f"
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
    "url": "assets/js/16.bab43f3d.js",
    "revision": "e941e75e6e351fc26badb1fa11925011"
  },
  {
    "url": "assets/js/17.e13b6984.js",
    "revision": "a990c39743688808f9de859a7b79f2bc"
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
    "url": "assets/js/20.ce9579e9.js",
    "revision": "fdce7117046a36aad810b78f4e566689"
  },
  {
    "url": "assets/js/21.da422fb6.js",
    "revision": "4ed336510310dc742c8ade38d71bea08"
  },
  {
    "url": "assets/js/22.c3c65816.js",
    "revision": "d8e788cbca5948c0c9baf923a0950817"
  },
  {
    "url": "assets/js/23.9e276286.js",
    "revision": "80ea6b82f10ca485a167b2228164e947"
  },
  {
    "url": "assets/js/24.7336338c.js",
    "revision": "23746d35c3a703c7e0094bd1c041538c"
  },
  {
    "url": "assets/js/25.d0d1c7bd.js",
    "revision": "cf569d1078c8a36bf8b04d5b8f97fafa"
  },
  {
    "url": "assets/js/26.797814e2.js",
    "revision": "84101be3f438026bc94bf391b1cae587"
  },
  {
    "url": "assets/js/27.3da3c0c7.js",
    "revision": "c2002b2401329ceee2ebc221817d148c"
  },
  {
    "url": "assets/js/28.7ac2100b.js",
    "revision": "0d401e546c01a87557b219f679701882"
  },
  {
    "url": "assets/js/29.6e7d4a07.js",
    "revision": "10743c53d5d1ced324ea2a2a93a412ef"
  },
  {
    "url": "assets/js/30.15ff18e4.js",
    "revision": "b19eb1674ff2a6b7b1546cb7ab25a531"
  },
  {
    "url": "assets/js/31.0d6bb297.js",
    "revision": "6302e21df5103ad8058cf9d9291fc15e"
  },
  {
    "url": "assets/js/32.994988cc.js",
    "revision": "2a7124ac0402c96702dabb0346a739b0"
  },
  {
    "url": "assets/js/33.6139e9e1.js",
    "revision": "2c578b24ea981a80e0b77ebf8debf8ea"
  },
  {
    "url": "assets/js/34.eb05570c.js",
    "revision": "7c0d4784a15db40741d040b7947f259e"
  },
  {
    "url": "assets/js/35.3cc38155.js",
    "revision": "83fca7d59fb98c41e5db46cb1de85ea2"
  },
  {
    "url": "assets/js/36.8ef94ad4.js",
    "revision": "375083762c4d8446ff120a8a710aa1a2"
  },
  {
    "url": "assets/js/37.b5dbcdcd.js",
    "revision": "0c9e54945093bd7c516737637f4413bb"
  },
  {
    "url": "assets/js/38.6059d4d4.js",
    "revision": "3c7158d0186dc6c8a898e22cc1d20ba3"
  },
  {
    "url": "assets/js/39.2c1ca5c0.js",
    "revision": "9ff9d0d01c12e11a1ff528ea0637845f"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.7a06bbed.js",
    "revision": "8bdb9659d28c1d0ab5a3c79b8f54e5c5"
  },
  {
    "url": "assets/js/41.327d2525.js",
    "revision": "85f389a91d48f36b3cc0ff3e439db6b7"
  },
  {
    "url": "assets/js/42.df2bc57a.js",
    "revision": "f319db8adc1aafa7cc14ef130ca6d796"
  },
  {
    "url": "assets/js/43.42e583a5.js",
    "revision": "5489dc29c0fecbf0c5b2a063036ecb09"
  },
  {
    "url": "assets/js/44.b88fa8d9.js",
    "revision": "ce0a11bd0b4d172457c0766cd0c21d0b"
  },
  {
    "url": "assets/js/45.1841f638.js",
    "revision": "2452a98326affd661419397768ecf76f"
  },
  {
    "url": "assets/js/46.7f3453df.js",
    "revision": "8ea26c1ab3ab04c186030c11998bfc9a"
  },
  {
    "url": "assets/js/47.84236d74.js",
    "revision": "c5b00e2135684b26e289da2e88c999f2"
  },
  {
    "url": "assets/js/48.abb2c649.js",
    "revision": "63ae134e7d1512adba00550206306be8"
  },
  {
    "url": "assets/js/49.4b77bb04.js",
    "revision": "980574e0412e8460484406a2a01a46e4"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.aca9a236.js",
    "revision": "45e1a987c965b7bbbf7c0e0e4838813d"
  },
  {
    "url": "assets/js/51.46222e7c.js",
    "revision": "4852397aa33d4b36b65c0b57d4865937"
  },
  {
    "url": "assets/js/52.7eb58266.js",
    "revision": "a9182531f7c096fa8bd79ebaae05804f"
  },
  {
    "url": "assets/js/53.350fe9a8.js",
    "revision": "033bc46318a9098b46111d27fbc473e1"
  },
  {
    "url": "assets/js/54.9e439deb.js",
    "revision": "b63162bb0f4579b27ded1a5ac6413fec"
  },
  {
    "url": "assets/js/55.499b1986.js",
    "revision": "b865d99362f4b809f817162e65402af5"
  },
  {
    "url": "assets/js/56.a0be314b.js",
    "revision": "ca2290171997fe08a312410b7501c2ad"
  },
  {
    "url": "assets/js/57.fd79cb53.js",
    "revision": "2d595a2601d2d5df746751072bfe9753"
  },
  {
    "url": "assets/js/58.ee833bb0.js",
    "revision": "2e259923c17ba213d76e1ae1ed379a39"
  },
  {
    "url": "assets/js/59.5ebec9c5.js",
    "revision": "7edfe13c019873d08ff32f6db1066b8f"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.6573d2a9.js",
    "revision": "93b31405d461fb0599e3de2ce255b496"
  },
  {
    "url": "assets/js/61.2ce19f17.js",
    "revision": "4dce3ad02a73245c15e1817b75c93dde"
  },
  {
    "url": "assets/js/62.0c2378a4.js",
    "revision": "948141f424f2049720e631a36c97c7ef"
  },
  {
    "url": "assets/js/63.c55b8b94.js",
    "revision": "4930cc2083607b48e66c2080194a4b29"
  },
  {
    "url": "assets/js/64.1349eacc.js",
    "revision": "579e5ae7a26b2deec3231bebad227f3d"
  },
  {
    "url": "assets/js/65.9a61610c.js",
    "revision": "da7b6fab04b4575cc301b1c8c40b0335"
  },
  {
    "url": "assets/js/66.4be2e29d.js",
    "revision": "4a25a382ea753289a8d35285fea7123d"
  },
  {
    "url": "assets/js/67.c0c0db90.js",
    "revision": "8f37d57f398a2fadf2d007f4cbb4932e"
  },
  {
    "url": "assets/js/68.40e89887.js",
    "revision": "eff1dd2621cd79b7b5ce957b83774d9b"
  },
  {
    "url": "assets/js/69.694198d0.js",
    "revision": "88bd31c7b748e6943969e0151ee33f21"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.a76986c1.js",
    "revision": "3aa9b698614152b37ad7267450af321f"
  },
  {
    "url": "assets/js/71.acb4ba7d.js",
    "revision": "9b60dd6f83a75f1d8527bc6b1fba0011"
  },
  {
    "url": "assets/js/72.43071fb3.js",
    "revision": "f110e3017192d0488db0e779234230ea"
  },
  {
    "url": "assets/js/73.4335d355.js",
    "revision": "c0732b49e7b1bc9b445f0ed6bd5cdb22"
  },
  {
    "url": "assets/js/74.40709346.js",
    "revision": "3902936721d43c8f4a6e4374920653c2"
  },
  {
    "url": "assets/js/75.2b21a6d7.js",
    "revision": "fecad56946b961f4e6b5abd4ed0a3aeb"
  },
  {
    "url": "assets/js/76.af23fff3.js",
    "revision": "967fc38cbdc020db20dba7ace63a1a1d"
  },
  {
    "url": "assets/js/77.f820c9fe.js",
    "revision": "dfd22ceb172405e095668010c8f81d24"
  },
  {
    "url": "assets/js/78.b16491d9.js",
    "revision": "662c9ef7e78bfa5532f3549be5a4a647"
  },
  {
    "url": "assets/js/79.fd7988c2.js",
    "revision": "851a26f338d050e32b61b1f53f273705"
  },
  {
    "url": "assets/js/8.e26e9a59.js",
    "revision": "7b8c5e30e55d846d9330c265dd331029"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.83ebf02b.js",
    "revision": "372430990bef1b43270ad67d25bfe5f8"
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
    "revision": "515a90e594a1949593da414c2ffe9d31"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "18d8ee82a4e9dba3bcd16dddc502f9d4"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "a601712a9c204ca88be466a308174df8"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "b339e8a3b2287ce6be8a7ca5bcf5822c"
  },
  {
    "url": "categories/index.html",
    "revision": "66df9d1df2f56f781cc8b56fe2883ea0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8a0c42f28c503ecc3787230c3c5991b9"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "471a5ec9d3d8b77b245ec6ad8878d8d4"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "d7ed1e8d12933b4a8d808d094c3c414b"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "daeeec0591d96de4ac696fb04d8798c6"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "b1276980ad83bc131638586bef12bbab"
  },
  {
    "url": "categories/other/index.html",
    "revision": "be20b853773d70047b28470e0eac7b43"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "fb50f68ca018240e0adf105268782ceb"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "0ac8781497f19bf31de3131baaeab9fb"
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
    "revision": "df6c344aab4ed9cccfa7d3a0964ae43d"
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
    "revision": "1a9cc1ebe93b84778bb38155b8ea5382"
  },
  {
    "url": "tag/App/index.html",
    "revision": "87ebe5b0ce9c6a090dbdbea7c3da2c53"
  },
  {
    "url": "tag/array/index.html",
    "revision": "e616a00645209f509208d35c251990a7"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "0834125c74d1f28b2034a661a59e27e7"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "1ee2d854342462f2f9ddbcedbfedfb31"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8c4c98b836028984d96fd75f1151cbd9"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "da3a1c451180789947c5e6d03c6bab83"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "b22605bb3a15ca54501a8ce3768fda02"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "8df72168b83a0790585aea12d87ac0d9"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "3e35b8ae8f508bf3dbc66b0dc5be5425"
  },
  {
    "url": "tag/git/index.html",
    "revision": "32736221629c848941d0a46f9e7c7a5a"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "0c375e4d52fe50ae2982f6473ec9c04e"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "afde2420f40b73ff2e61772a5c7c0387"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "d806efb36d819a1463933dd0c0019edf"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "e7e4aca17b1393a2fa0fcaaf14a7faa2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7221792a1ab4c2fa68f892af8114bf52"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "d439dbffdab41a2a1f3c40712ce61327"
  },
  {
    "url": "tag/index.html",
    "revision": "67f50179f552e7b2b9f8be8c669db2a6"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "3493510c6c8e72c0c813637ab9cb0789"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "d9012cf6e9010c6d65c0cc4015b9ebac"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "a6f53a91e564aa10555a9acc29f8bec7"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d19d7324c9b676e370e89d2a652afa92"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "3d5122bb531f4a0f5ee32dfc8b51a0cd"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "c03e6e77a94cca71473e3cf33297e619"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "62b061ec7f8f111a01a5a3b9b54b1fa9"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "74561c0e2e82fb8d4906c584e0bb6d56"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "48c18acbb3479441a05b47d4aee4e2f6"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "63c57b99eb1161fbcdfaa9f1473d6574"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "a7d2f6114e627b893eac71d4698d7813"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "886ca4ce2a3e249a0c77cc341c54470d"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "c86700bcee1d54fc5ada04d748211f67"
  },
  {
    "url": "tag/project/index.html",
    "revision": "a37c5c84fcebded55745af13e45486c5"
  },
  {
    "url": "tag/react/index.html",
    "revision": "2e65cbfe6cba552d088ce974d83a7d42"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "53b29b2abe42fb27a9e0a3870f5fc2dd"
  },
  {
    "url": "tag/router/index.html",
    "revision": "dfe1ba8d10fdc60a7589223651039177"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "e70a69dc6106d62867be7a2b710d3787"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "09bfa0b165b3fd2522411795819d7fb3"
  },
  {
    "url": "tag/style/index.html",
    "revision": "ad30df742dd817e72c500d6de0f5455b"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "01a57e671cbee45cd330f4a92e2d7e85"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "48ae4132f2bc412021ae1e1ee9c4aaee"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "0748e5f5961e22e9a2223657e124a52c"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "fc8dbaf10c8a27681d9487ea88458c25"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "74dfaaf50b5af992ab0c8845e9664821"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "b8300ea91082ccbcc199d1cd8da16ce9"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "1b3aa9f0d3714e6e54c4947e6968fb81"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "051c6ce22d8add79871667469325d810"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e0b56fe4507766be8c884ba24cfe5922"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "12e5a9dd4421d850762a37b15ef5018d"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "c5d771e07e68c8859056c44317d81a7d"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "e8bfa481bc7fe3fc5ec10a57d2cf36d0"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "1dc469d36fa17b56674a286dd878c03c"
  },
  {
    "url": "timeline/index.html",
    "revision": "fed9551af52262bce87073a75154fed5"
  },
  {
    "url": "views/about/index.html",
    "revision": "90d8aae25342d404444050bfd5c3d487"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "033301d1cb79d9b4b1c92674d289b412"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "1da21426e9fa703f05ccbf063264a0dd"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "b882fd62758280f074fd303630b1fedc"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "8050851839245195a5a16ad12cb4a5a0"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "379be85626a95e9d3f53d8e5649f28cc"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "d39168fba42dc8bb147a5f735d64238c"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "2ca59d8079bdb27974ffc72a94768ad6"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "a8de100dbbf1f161bb884ea9fa862d79"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "865568e59ddc5f1f992f75521b625066"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "dc78ea051691e4c3e5ccd51ff893b69e"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "4fa6006cd284790f31b6aae1e89270fa"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "4daaec156e22a1e13c04cf82282e2ccf"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "abe805d8e374ca9c046bd20e43838660"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "9fdbc6b8de0e4b7a180c3f617bb7b93b"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "f2c7af2005901c95bff432ddee3843f3"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "b2e8c41daae9aee1f71038ab49af4053"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "02ac859b732d8d3c76f1652568fc99d0"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "a2ddb0dd8102d950eb12a7b147fab20b"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "9dc3ea3384f725bee2aa2b3dceac8724"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "7c5fd0ef5fd150e0651054b9b479b66c"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "fcaa86e12184c60d55ae57a69be0066c"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "c4c5df55d4afe617e8db79f2767ec9b2"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "ecabeeaa76b17e8e3012f888e7c739e4"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "87717f031c9682814d352b6e4cf2b733"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "f75e7adc14fd1cd5e49365fcb099b7ea"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "c30cf4eeb30416875ecf97b3b159f6a9"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "5953260fba3931318dfe946e98623728"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "3a4a3b85d65d5ceb9a9ab9361e0c5d3c"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "d7b3fe81c87a9e0535687a4e728cabbe"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "4fdd19bffc652bc6a7d4bfd07753962b"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "22e5639155c4b760b040fd75bb81ad72"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "c5f3c7aed3f0a7e063c48f0c4c72129e"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "fc9c499d086ba189bb487ae8db0c38aa"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "523aabe057e580a350f82890ca12f964"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "f7958e2c1624ae1933f56324f53a552a"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "ec2681aab8626dba82eae45c1c0fcc34"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "4b7fdec1d1edb4a088f427737f8b1532"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "5f66bf4828f38ae269c4f7caef209ab3"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "34d63edd29ed5d7d8e24891cda7fd801"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "0dcdc0058c6f22a1689587c112620dfb"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "4d38827d684c062d95639fa016c31e2d"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "4605523d1e909ce43f8cea54ad4702d0"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "a92c894b1679fc0d6fb94c0808151efb"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "2f3a106af06ff10fb76a34078db49713"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "554608b9eaabad971c7507327b31439a"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "ce94c33dd3e4cd324bb7faddec56b884"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "31a3952c15c03d7216a5484e9361315e"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "67fb2f807405730649405a8dcfe693a3"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "7e2a3eb7a943ea775f7859ea2bbcb061"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "ea6c391373a2f41260ba32144aec963c"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "090bfaceae4b2f00f5ded8424c51a694"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "2c550468ca6f293e3470d7609ad6b5f5"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "0b4b843d775705a99830b3999a283cee"
  },
  {
    "url": "views/project/index.html",
    "revision": "2da4c95e55dcf10e5a8b6ec15c846834"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "ca53dc61923ff86c0a1ba91195f7fae1"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "1f2219a56ef1056eb7e7daffa9bc7d40"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "f558591a544c86c271c4a44f6ae8f3ba"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "dd4e63a4fabe0ec44e6135a4a5dd4882"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "8fc4585c742f74f04e1c4cb2cda33181"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "a309428bfcd3322c6be2ab7ebe0e2b4d"
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
