'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1a815fe5614052164e2e11ab22b445c0",
"index.html": "d3245abf52114b06d32b89595089c2ca",
"/": "d3245abf52114b06d32b89595089c2ca",
"main.dart.js": "4c9cc84ec81289f7934ec7cb2e4a184d",
"favicon.png": "c2229e09eb65bed359417122cf3994ca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d7d519d408c015da0bb697580b51cb5c",
"assets/AssetManifest.json": "dfe0ac98b72184688198d1cf2ef8e03d",
"assets/NOTICES": "091533cfef76c1472c9c496bb578bde3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/20221112.txt": "a07852dc17399c1457907a0300a7ac63",
"assets/assets/20221106.txt": "82e704969776183c48838958b814455a",
"assets/assets/20221107.txt": "f55af666dbd6210c9a24fba0a2b1dcad",
"assets/assets/20221113.txt": "53fb747439769fa3f5ef3e0a00df001c",
"assets/assets/20221105.txt": "6f5f7f95f484e8da1c386b18629ce945",
"assets/assets/20221111.txt": "40ccf1567c88a21f31066a6541744424",
"assets/assets/20221110.txt": "f4fa56b3e336dc61a68dd4cf1e60f5d4",
"assets/assets/20221104.txt": "8a72e4e2490e980030249029666f4ba1",
"assets/assets/20221128.txt": "4fc2cecd97049bb0aa1d9b4d839c1db2",
"assets/assets/20221114.txt": "42de314949653c08f480b6b2cc2039ab",
"assets/assets/20221115.txt": "23c6e3667aa8faeee1178968c3a80d5c",
"assets/assets/20221101.txt": "f7b45ed5a7bcf45cc94a5ffc4cf3997a",
"assets/assets/20221129.txt": "500480b575eb546f2d44e32438dac0de",
"assets/assets/20221117.txt": "03e2f6113812cc3cbda97baa75fc507d",
"assets/assets/20221103.txt": "6df3d594d794b827d39c2209e5e847df",
"assets/assets/20221102.txt": "fafff14b38febe41ba6f0f5b8bb21323",
"assets/assets/20221116.txt": "850b62a77b74f74eff4831040ea0b430",
"assets/assets/20221026.txt": "241f58c523186d0423829e5e82efb7fa",
"assets/assets/20221127.txt": "77159b5b0774abbe2cc38997e87e9cd1",
"assets/assets/data1.txt": "18bef5354afb14f2312aa36d2e6a00a2",
"assets/assets/20221126.txt": "81e8264a7215494fbd25ab0c024cf796",
"assets/assets/20221124.txt": "0e0e82f6948dc9cd777e76a791b0d2bb",
"assets/assets/20221130.txt": "c7b3a65b35be697a9dd02bf44381279e",
"assets/assets/20221118.txt": "3d408f8f866d1b1344869daac30e6f1d",
"assets/assets/data3.txt": "1aea3635f53a47169a8a836d9041a01c",
"assets/assets/data2.txt": "361ef5e637e96962a06e8ee543f935b9",
"assets/assets/20221119.txt": "a742a8ddc40e27b4f80a8f9efece2b42",
"assets/assets/20221125.txt": "4741065712bb418dbeaf41a7b3ffcf19",
"assets/assets/20221109.txt": "9c94cf8d0e3d0f60d84e74ab5e9b301e",
"assets/assets/20221121.txt": "570a5bc23af794448e45d29929a72300",
"assets/assets/20221120.txt": "9aa287d0e04f9bc24e74fe4d56695c83",
"assets/assets/20221108.txt": "c9938a5818a0dc9e82b54df71cbb9b0e",
"assets/assets/20221122.txt": "d5c52f6bb53085ca0702218e4dc28ca3",
"assets/assets/data4.txt": "d6e9df9813b91e0b6ddf86ee26017185",
"assets/assets/20221123.txt": "293678cb39ed537a9645fa519035e204",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
