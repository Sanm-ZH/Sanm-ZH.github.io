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
    "revision": "7994f105a837f4105883bc27c2bae485"
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
    "url": "assets/js/12.a9aad949.js",
    "revision": "bde690422c8cd4d0a9c72f4816802b48"
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
    "url": "assets/js/16.e1cae165.js",
    "revision": "f37be97a842a81266006886581527266"
  },
  {
    "url": "assets/js/17.8e963cc2.js",
    "revision": "d3668d4d79178fd60a44af8514cfaf34"
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
    "url": "assets/js/22.c3c65816.js",
    "revision": "d8e788cbca5948c0c9baf923a0950817"
  },
  {
    "url": "assets/js/23.9e276286.js",
    "revision": "80ea6b82f10ca485a167b2228164e947"
  },
  {
    "url": "assets/js/24.64307061.js",
    "revision": "636f0d982243390939bfc0a7edf2480c"
  },
  {
    "url": "assets/js/25.4ed3fd12.js",
    "revision": "80ba034e451b04a4eb4d5d0eca9bd12e"
  },
  {
    "url": "assets/js/26.fff7a4a0.js",
    "revision": "efffa0f5e995b9cebc2aa50a74ba9bef"
  },
  {
    "url": "assets/js/27.a001510f.js",
    "revision": "7a72a5f28e7ea5c2b130023576b47f4c"
  },
  {
    "url": "assets/js/28.fa30d598.js",
    "revision": "3bf368061aac906cf96066bf80e414b3"
  },
  {
    "url": "assets/js/29.21992050.js",
    "revision": "d86e64ffe1d46abc6b7079bfcf2fbcf0"
  },
  {
    "url": "assets/js/30.13b9a5ba.js",
    "revision": "8a1e8c3579b8447a660ac8844aa4f00d"
  },
  {
    "url": "assets/js/31.a7f971db.js",
    "revision": "22d5cda04afc60274ac601dff260a888"
  },
  {
    "url": "assets/js/32.27e77aaa.js",
    "revision": "def52475f48382715a46fb92f7da1c7f"
  },
  {
    "url": "assets/js/33.647866d3.js",
    "revision": "5d52f91fc6d9c5306010ed2b4e8186c5"
  },
  {
    "url": "assets/js/34.99c17896.js",
    "revision": "fce981e7502ec58932a2cf9189361073"
  },
  {
    "url": "assets/js/35.4801420c.js",
    "revision": "d75bba05d6564ecf446e409903767f4a"
  },
  {
    "url": "assets/js/36.9c04e547.js",
    "revision": "c5787bcb0298a297c3860f052d3babe4"
  },
  {
    "url": "assets/js/37.489db017.js",
    "revision": "9697acc919d2e9cbaea2d8e67909b486"
  },
  {
    "url": "assets/js/38.1b6702b0.js",
    "revision": "e710022923299a7bb2161e3ffed72fd5"
  },
  {
    "url": "assets/js/39.112b4458.js",
    "revision": "f004413142b6fa087c62bc400ccfbe4e"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.8aa6fe20.js",
    "revision": "7c01a10ba180f232ad6cc830293282e4"
  },
  {
    "url": "assets/js/41.87e5571b.js",
    "revision": "dcda2b135387f109629ac51dde98cda2"
  },
  {
    "url": "assets/js/42.57daec2e.js",
    "revision": "72137093d090b68e091ee10912997af3"
  },
  {
    "url": "assets/js/43.2e12dc46.js",
    "revision": "167832f688ad5ab25b15cfdf37a9bc81"
  },
  {
    "url": "assets/js/44.df3ddb3c.js",
    "revision": "eeba995bc092a769af267c987ba62a73"
  },
  {
    "url": "assets/js/45.9342482d.js",
    "revision": "c09ef6489b1f2656047ff8ae999f3470"
  },
  {
    "url": "assets/js/46.0c4be46d.js",
    "revision": "79d762bfb7aa0a2b72700cc37002823e"
  },
  {
    "url": "assets/js/47.5189cd5a.js",
    "revision": "506f2346a4c2824f1bb7739c26fdb84f"
  },
  {
    "url": "assets/js/48.fe207e24.js",
    "revision": "700d8ad442b9a8fbd3b66ccfed507707"
  },
  {
    "url": "assets/js/49.7605ad49.js",
    "revision": "1df20e2b9f536caf2bfe492d11681500"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.c00b7c48.js",
    "revision": "048b08de0e54f6e82784f1546794c64e"
  },
  {
    "url": "assets/js/51.e5b4d2fe.js",
    "revision": "6309dcdf5cedd80ac13db49b410fe519"
  },
  {
    "url": "assets/js/52.600aa246.js",
    "revision": "f9da61d2d1b8fc528bc8723fc221a0a4"
  },
  {
    "url": "assets/js/53.f7cfeced.js",
    "revision": "cf73d81dd28181e80c5a57d922abeb83"
  },
  {
    "url": "assets/js/54.3db374d9.js",
    "revision": "4c1ca3d726c0897a2e3972ead480c921"
  },
  {
    "url": "assets/js/55.a6433e08.js",
    "revision": "e050c37580e3ac47245090c754ec8b58"
  },
  {
    "url": "assets/js/56.1a1174e4.js",
    "revision": "21d0ae611aae6558a4f275f65bb3465f"
  },
  {
    "url": "assets/js/57.e1e9ed90.js",
    "revision": "48347af2baace44ce525600960921b72"
  },
  {
    "url": "assets/js/58.1fcd6ab4.js",
    "revision": "dbe11b624aac8b6330f172350f0fef8f"
  },
  {
    "url": "assets/js/59.43921433.js",
    "revision": "dd3040763fe11ac8877e4f5753d7ec2a"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.1c147d34.js",
    "revision": "8e584062907cfa5261ca060dd176fbba"
  },
  {
    "url": "assets/js/61.ee807044.js",
    "revision": "0943f431272e97d6b0f18773d42744e3"
  },
  {
    "url": "assets/js/62.379718b5.js",
    "revision": "8abecb56fc152bbe54cd66dc700ff973"
  },
  {
    "url": "assets/js/63.5e0afcee.js",
    "revision": "97a5e5b0ce778439ab3672d2fdfde2cf"
  },
  {
    "url": "assets/js/64.4a209569.js",
    "revision": "3e40f8614bc3a5454f1dbc1dfc04de72"
  },
  {
    "url": "assets/js/65.ea15d5f8.js",
    "revision": "851a94d49d3e8952718efbaff19b40dd"
  },
  {
    "url": "assets/js/66.a0e20949.js",
    "revision": "8aa35bd9f72c58034738e7fc74cfab82"
  },
  {
    "url": "assets/js/67.e18dc1dd.js",
    "revision": "b342a83768661c0e0ce65264581b858a"
  },
  {
    "url": "assets/js/68.26583d0f.js",
    "revision": "cd4c5fb7de03174f1a193efd4f12a397"
  },
  {
    "url": "assets/js/69.569ee396.js",
    "revision": "506511f4745358f3839a43bbcf749188"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.ea509c33.js",
    "revision": "fc374e57489aa43ebf4b937aba8b15ca"
  },
  {
    "url": "assets/js/71.43208532.js",
    "revision": "34dd6314936bb775f8fa21f08bccc881"
  },
  {
    "url": "assets/js/72.11248b2d.js",
    "revision": "0e2a360771ee5bb9fc5aaf5ad38a5b06"
  },
  {
    "url": "assets/js/73.b5d84825.js",
    "revision": "f246b4a1a8328a7559417f1f696133e5"
  },
  {
    "url": "assets/js/74.1653ae33.js",
    "revision": "a238c94a589f0d734c5813f4b4383974"
  },
  {
    "url": "assets/js/75.308e35cd.js",
    "revision": "451056a3850eb689017cd1b195964b04"
  },
  {
    "url": "assets/js/76.f83c6497.js",
    "revision": "95e0e4b441a2391702bac327c29a7e11"
  },
  {
    "url": "assets/js/77.e63b15ae.js",
    "revision": "f29c4233ba4011785e52e1034c249715"
  },
  {
    "url": "assets/js/78.c3743b70.js",
    "revision": "585f683c72273f6c0728811aa2dba5d8"
  },
  {
    "url": "assets/js/79.3b9b5943.js",
    "revision": "9ed64fe11a1d1a5ae5081beab52521fc"
  },
  {
    "url": "assets/js/8.bd50d723.js",
    "revision": "9f653970bc5b97fc7093283ea4650109"
  },
  {
    "url": "assets/js/80.94afb617.js",
    "revision": "f2766b01af330c8811ca85fbfb2daf23"
  },
  {
    "url": "assets/js/81.0649c997.js",
    "revision": "9f35b61d1b6679d8af6755e6d1a43ff3"
  },
  {
    "url": "assets/js/82.c521e848.js",
    "revision": "13b7b93b7d4428a63bfe80ed2cdc5e94"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.65c550aa.js",
    "revision": "97302174a7d606d27af550b770546e57"
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
    "revision": "432bd1eca538703b60ba82cfeb8e491f"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "f9083c4fe1056dcb05e3d6578ca06718"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "7ee411e425496aa376d2848a4002f103"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "6de7af57b0454c60b77232cf67f33221"
  },
  {
    "url": "categories/index.html",
    "revision": "ece0b5a2d9a641e2e9067ccad4751ef8"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "13c253d3098fe4a4a8427256821e4278"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "20cf4ffb57926b213780e050eef5a0b6"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "5448e8f5c05f0fc4d4b58ac25e72d842"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "ed5684e4733539554a9a98b95eeb5d21"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "7c4ecee8fb78f4784bdb7a0cae9382fd"
  },
  {
    "url": "categories/other/index.html",
    "revision": "fa0f2494ac120015476c9efd72637111"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "9e26a6f37c044bc144dc067e45957f72"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "7a6b24e826be9dd5e3e5a4cfaf86c01c"
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
    "revision": "2395ce75ae94f02ecc1f46e94afc982a"
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
    "revision": "ba3121e9857ef2b56207aaeb9706234d"
  },
  {
    "url": "tag/App/index.html",
    "revision": "3825cde8c1ab4a7651598750566914e8"
  },
  {
    "url": "tag/array/index.html",
    "revision": "f092ba6560dace8680180b6dd8ad3992"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "2780f6ee94e266c37104b08b494dfc37"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "3f44ca9051a5e7f5e567ce074f17fb96"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a529655b3fc59fe182141c75b199f32c"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "027e799970e5b9e7a47a1e684a4c865a"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "91567405bcef4ef92e119c8ac7e9b398"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "2819bc370ffba2fb4088c3409d382354"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "04b95a48556f9a9472544a5b5ef9bfce"
  },
  {
    "url": "tag/git/index.html",
    "revision": "07e7b1714c7acad1b80d5c539c21dbf7"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "a2336da52e9bdd1b23fc41cdb9d0b9e5"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "0f3240da886cd5a608bf96db97d44af0"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "c97736785a876d77c7e0072718fb7ba1"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "e2bbad4945f1ad63df25e4f66d1bcbed"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a9b5e49ece605173f3af80d89892b946"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "ed72a724e3b6b6472b60fe6a7fa8b59f"
  },
  {
    "url": "tag/index.html",
    "revision": "367bca6130503e3b8e575e2e5bf1ed4e"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "43ddd6245815afa4fb913adff75c73c3"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "51289b0ffe44cc3298ca15764e32b7f7"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "8042c9372370208d31a2e358e4cc2acf"
  },
  {
    "url": "tag/js/index.html",
    "revision": "b2e155c16c64e880e7641c2b0e03934c"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8147e4ccc0eac3adb28179ee7cf48650"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "e806407bffed80503a64dd6c0f0f2214"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "a0c10d1b255d9170979d811a76e898a4"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "3f0a5890a4a300393b8ad5dd8da4d956"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "bc0a58762fe9d103f53b7d8c1771d490"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "a4542661363a57e2668305515cfa6b80"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "f8db94f69e2fff160c7251c85530b879"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "a90eeb978270f6a6fefc303a53497542"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "ede063f33c0fd649030cd0cfe8396749"
  },
  {
    "url": "tag/project/index.html",
    "revision": "27f528fa627151f57805ccbff5706d2a"
  },
  {
    "url": "tag/react/index.html",
    "revision": "d30f7b88095a55a61b00124fb12be50e"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "5bbbab3edb81fae6797ca44d16767104"
  },
  {
    "url": "tag/router/index.html",
    "revision": "32b92c1171441f533ca5e626636cb923"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "5b3446bdcfe19fe2ae811d3185a8bc32"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "10c824ad6593a3d41b6d766e2886da5f"
  },
  {
    "url": "tag/style/index.html",
    "revision": "01d0acac251045236cd4ea2fa7c474ea"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "87c3a20b0930f5f59091db113fab112e"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "5c4361927788f6033fbb17006bee25d5"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "fa54cea763bb0a2389377b223feadeff"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "435d2180233ce36a7db43cc6f3aa34a5"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "73cf503344400f1ea61fe932614f7ac3"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "aa7bb8e421895f3a0c3231e4eb54be48"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "4461047dab4241b57eea3fdaa57da0aa"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "01d1574013daa8a41d7b547cf4216b41"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c20b0fa574992c214367c401e00aa9fc"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "bd51daebcd14f90964f76cfed6e95713"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "70247095af1e782d07555ef62fe9aa24"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "cc8e7befc163e9a609fb1bc730119f3b"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "f674544d52744e7860df2d8d19d4f1a0"
  },
  {
    "url": "timeline/index.html",
    "revision": "24d3cbe9314b50b3a6c3ff05902b6cea"
  },
  {
    "url": "views/about/index.html",
    "revision": "566365fa7b8e9b7f7580050ae4e6ebda"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "282df79e0a130b94f10b0382e7917efc"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "c5b1e656966f4ad1b18506862c614b44"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "13ba0888633d4448dcc28bacdc2a35c7"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "3d73e1f44a4eabd2b077c1e3d6c6aa88"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "e36c05a6638d09820b4f4adcc3fe33c9"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "22220a0b0d3ccaf3ec0055d3d586f80f"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "89d54432d99b2bc9d48f2e6d148289e4"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "9ef80a48e5827a9102c71b36b68e4ba1"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "c150f0e1f783265af6ff7ad65ebf9f1f"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "33ebc9c4b9d7520a786cfd74edb57ba8"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "d2f92c133e7e9de2695de1ba2b5f3455"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "c2003ff830a0f05709c470c1ab609b1b"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "8762b9268826ed0d120e782bc3dfdec4"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "f120eb9947455687705a353efc63fee4"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "f580a2ad89e49aca5b0e1740d5f91858"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "4525a857e9fecc4b841148993515c200"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "184e0893c37aac3e174b8506b7bbf98e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "850572822c3c4aba231b7a18c03974fe"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "d6d9d103f0cc9b46824f2e7bf52ac122"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "5f1a5c773e4ccd86441b3b406d367eb6"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "41401f7daa4b7671bc48ec460f5a57ba"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "b76f32bfb35b04655506525d1930c963"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "35f329ef86f8fe03c6b308201e2bd2fd"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "b9d55b8ea4371de3fc674bd4e4920b6e"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "5f825aeddf4be0e3d09e1a8dec662195"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "83dcc3a5e976d1878fd319d9e0c52393"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "80cc04ddb68fbc56f847dbd90f7bf3f9"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "1772d286ee6df258e186f54876bdaadd"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "c053790a389490c55b402be1445df0d0"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "f49a8ca89a3d1bfed9b20f60882a9c28"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "7c52bb4200017c74a25bafd12599cbd1"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "ec92c6597298b014fdd47833feae945d"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "993843892f255789de0980bc9a468e17"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "e01f4fdd6580f63d3e3bab3489381161"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "8ae7c8a663e902d78d78dde04c15d991"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "be0d33fcebc8b3e4e814d49fd8fc095f"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "7ada0803955296efea1a503953fe0492"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "5cfb95d4719eff2f4fdfc1137633bead"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "a3b480e84124ad4bfc5843b5ec088483"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "63ef99130b346f58e270720fbe2a1db8"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "0f737258dc73013a3fc0bc838786f262"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "6ad573af8af7bffc530ffb8bd4324f18"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "56c1c7a690e51355ee47f6d0219530e3"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "78485bfb0c57cc2db33d5535dff013c3"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "935887842757080805afac1419579c20"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "cea3ab484d25af2d94cb6cfad8b54eee"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "ac35f533b063aeae6a701b873e1eb71b"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "e68fe4d8c091df667e0f18188ec95467"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "81281c86087c396bdf73cc4331fbeada"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "bfb78329927b806948c7247f8cfd7a59"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "12b1e787285938687cf5932402cd46bc"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "5e6ccf23be7bd55ca5af538c6ad47a08"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "ae770b9f47341f6b2f756fe6983b22f5"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "bcddba5dc31a261c7462f2eea908277c"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "bf58bd8abd708cb3047f6f2a149eaa87"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "a68a14f1b3bed490ffe615331c38b8e0"
  },
  {
    "url": "views/project/index.html",
    "revision": "fc53ea3193d9c38f0e8ae5076a384932"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "fedd7785db9d13857c540139ef88518f"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "9f8f640063d4267913887961a67c74eb"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "5b3caf11f35fa30db7ef41f96236ea96"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "5fbad3d7bf670e93ee9c19723b1eab2c"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "b5a4cb104c1104b3024bf5a5f6bffd60"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "a39c5b8ce8e35b0a45678c413465e529"
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
