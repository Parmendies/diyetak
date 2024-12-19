'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "bb67a95486c44a6dd4ae90b3f5131268",
"/": "bb67a95486c44a6dd4ae90b3f5131268",
"favicon-16x16.png": "1812a33c30233ac988774090c94ee304",
"flutter_bootstrap.js": "b11a075da4d59e054bfb406d6fc24b94",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin": "2a612e58fdab690407dc47a468c366ff",
"assets/FontManifest.json": "2f50b81f4592a42e462cdb0cc342b4ab",
"assets/AssetManifest.bin.json": "59880e6819305894cd68a6205eb95dc0",
"assets/fonts/MaterialIcons-Regular.otf": "ae5bd61fce5f719d4c103c6ba7441e35",
"assets/NOTICES": "80d65a0eb8603677efde519b057dc766",
"assets/asset/icon/latest_bold.svg": "97b6811b8fde46f919b07f10d3d5624f",
"assets/asset/icon/ok.svg": "f23918d3e4571b273f85e76389088047",
"assets/asset/icon/pdf.svg": "58f8ff79421ce10bb674d447aa0df8df",
"assets/asset/icon/chart_up_bold2.svg": "f07a00eeab8735bf20a0ea89d0cb5402",
"assets/asset/icon/star.svg": "025c2b7fdb47a3242ef482ac4e620719",
"assets/asset/icon/create.svg": "894292c9ff5b357ecb06089788b26bc6",
"assets/asset/icon/chart_up.svg": "2dcf8575a19147790e75acece69d0be1",
"assets/asset/icon/elma.png": "069542f60538d0645e6abc402493d5af",
"assets/asset/icon/rev.svg": "7f61143b8fb4d42da654a16a69caf58f",
"assets/asset/icon/history.svg": "6ff742d7959ea2118a3d282a362a68d8",
"assets/asset/icon/cloud.svg": "d821daebf1d004f401824919d55a44a7",
"assets/asset/icon/history_bold.svg": "b4a03a2dd963ec699a400240cf544fb9",
"assets/asset/icon/layer.svg": "f826519bf591e1405da88617c03f61c3",
"assets/asset/icon/latest.svg": "5ee45162a1ae7405726824a06ad39f7a",
"assets/asset/icon/instagram.svg": "c06f4e917187128efb2a7f5213226c33",
"assets/asset/icon/ok_bold.svg": "b1b2ac9125466827c8f3c4f815d19235",
"assets/asset/icon/chart_up_bold.svg": "64a8996d383d25bc33812f151b8cefa4",
"assets/asset/icon/users.svg": "2f8f50d9f9a570d9e5f5e04d574514ce",
"assets/asset/icon/chart.svg": "c20adc98f74fa460932dba08e5ad9aad",
"assets/asset/icon/avacado_white.svg": "6f42b9c9c639970e4a779223aa205dbb",
"assets/asset/icon/cloud_bold.svg": "c2c5996b736940824b2a34f50abd31ff",
"assets/asset/logo.svg": "b7c5d84c8da23738b45a98e1e1533169",
"assets/asset/kari.jpg": "27a26af0a2bb240168770e4eefcbb63f",
"assets/asset/font/TT%2520Interphases%2520Pro%2520Trial%2520Light.ttf": "f6ae0fccd06dcd7ffdc36852f8703d48",
"assets/asset/font/TT%2520Interphases%2520Pro%2520Trial%2520ExtraLight.ttf": "d9058675af0b6603d0f34798c458287a",
"assets/asset/font/TT%2520Interphases%2520Pro%2520Trial%2520Medium.ttf": "c96acedef02e4cbff07352949f21dcca",
"assets/asset/font/TT%2520Interphases%2520Pro%2520Trial%2520Regular.ttf": "9bfdd0fde7f7cc25e74031afd7c37715",
"assets/asset/font/TT%2520Interphases%2520Pro%2520Trial%2520Bold.ttf": "b1e155caf059d8524668de2f5e32c654",
"assets/asset/font/TT%2520Interphases%2520Pro%2520Trial%2520ExtraBold.ttf": "a95bd10fa252270c3b3a2b4847cd1d38",
"assets/asset/font/TT%2520Interphases%2520Pro%2520Trial%2520DemiBold.ttf": "7c1d9691a513dd08ea0b62465217ea2a",
"assets/asset/ss/2.webp": "1ab4a3cc03e7fee2597f4bce9090612c",
"assets/asset/ss/1.webp": "3cf507b949048a276bf5e272eee82f21",
"assets/asset/ss/0.webp": "1f1fb5feb5a9fd2d64d10ce577f9159b",
"assets/asset/logo.png": "d39dfe07d869b53f912d82e636df34d8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "af7ea5681826fbb7f3602fc45901c79b",
"manifest.json": "83ea1b2dbe85a245a4056ab1f90a7bb7",
"apple-touch-icon.png": "f0e97583d5a2f07fc813d6878c081461",
"version.json": "89cd852c2e51bd3ac8021b6a41ed7824",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"android-chrome-512x512.png": "93797a6bd323027458cfb6d843cf70b1",
"main.dart.js": "5133584304387ff412e500d8dcf35b2a",
"favicon-32x32.png": "b722fab131fb0dabd8922660ee242ccc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"android-chrome-192x192.png": "1cfdd160ceea98fef9f0dbf2ab5255be",
"favicon.ico": "d8fc2fc1ccc99bb1c2e5669806413dbe",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}