'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b4a80cc80345f34a2b503e8cb25d47c2",
"/": "b4a80cc80345f34a2b503e8cb25d47c2",
"manifest.json": "67be732a77cfa43993514d2629799605",
"main.dart.js": "5cf865713c476848c78285508619040e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "5ad7a2d24ccbd8f2dbfc88fa4bc1c65b",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/web.iml": "d727c2a632366bca02af30b0f290fd69",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/workspace.xml": "ca42a229be4ca08e3091e3d15a60df10",
"assets/NOTICES": "438d5354e3087a8e59204cf2e435b1ac",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/verify.png": "1f93d89256d0e33054f07a0d9a2462a8",
"assets/assets/icons/google_drive.svg": "9a3005a58d47a11bfeffc11ddd3567c1",
"assets/assets/icons/unknown.svg": "b2f3cdc507252d75dea079282f14614f",
"assets/assets/icons/excle_file.svg": "dc91b258ecf87f5731fb2ab9ae15a3ec",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/menu_task.svg": "1a02d1c14f49a765da34487d23a3093b",
"assets/assets/icons/Documents.svg": "51896b51d35e28711cf4bd218bde185d",
"assets/assets/icons/menu_doc.svg": "09673c2879de2db9646345011dbaa7bb",
"assets/assets/icons/pdf_file.svg": "ca854643eeee7bedba7a1d550e2ba94f",
"assets/assets/icons/menu_profile.svg": "fe56f998a7c1b307809ea3653a1b62f9",
"assets/assets/icons/menu_dashbord.svg": "b2cdf62e9ce9ca35f3fc72f1c1fcc7d4",
"assets/assets/icons/drop_box.svg": "3295157e194179743d6093de9f1ff254",
"assets/assets/icons/media_file.svg": "2ac15c968f8a8cea571a0f3e9f238a66",
"assets/assets/icons/Figma_file.svg": "0ae328b79325e7615054aed3147c81f9",
"assets/assets/icons/menu_notification.svg": "460268d6e4bdeab56538d7020cc4b326",
"assets/assets/icons/xd_file.svg": "38913b108e39bcd55988050d2d80194c",
"assets/assets/icons/folder.svg": "40a82e74e930ac73aa6ccb85d8c5a29c",
"assets/assets/icons/menu_setting.svg": "d0e24d5d0956729e0e2ab09cb4327e32",
"assets/assets/icons/menu_tran.svg": "6c95fa7ae6679737dc57efd2ccbb0e57",
"assets/assets/icons/doc_file.svg": "552a02a5a3dbaee682de14573f0ca9f3",
"assets/assets/icons/menu_store.svg": "2fd4ae47fd0fca084e50a600dda008cd",
"assets/assets/icons/media.svg": "059dfe46bd2d92e30bf361c2f7055c3b",
"assets/assets/icons/Search.svg": "396d519c18918ed763d741f4ba90243a",
"assets/assets/icons/sound_file.svg": "fe212d5edfddd0786319edf50601ec73",
"assets/assets/icons/one_drive.svg": "aa908c0a29eb795606799385cdfc8592",
"assets/assets/otp.flr": "d3d963fe06685dadb72b305c8e51c62c",
"assets/assets/otp.gif": "e43409b4d81b20d31994baac31eccf97",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/AssetManifest.json": "6ec7563af4f2eb430289cf563087afe7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/refs/heads/master": "164dae44c55e7b46582d24c3930556e5",
".git/refs/remotes/origin/master": "164dae44c55e7b46582d24c3930556e5",
".git/logs/refs/heads/master": "209534d4c5db7b1102c0f2339ad6d2b3",
".git/logs/refs/remotes/origin/master": "5c132664e25a550dffa02599cc0028a5",
".git/logs/HEAD": "209534d4c5db7b1102c0f2339ad6d2b3",
".git/config": "d5e1834cfbb8cea4c62f1b277d49449a",
".git/index": "89b4e35eb6080f1848c8f094b79e8f61",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "e75da040ef2e83e18095f258b9f4eb8c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/87/d2099248b985dc286c74a43da958d955f4d8ce": "45ef82a6cd2d242383a8075185910d94",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "5b8300ef1ff0bb87202a552c442b000b",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "99dccca73b685156138bcbd196b764bc",
".git/objects/aa/f44a43260cf0ffb4b34b09491287357431b953": "f99dcb4f90b2564558eac6e7c2f753ee",
".git/objects/2b/059bd7566a845700c83a04a3f311f9b0fb1237": "a660e087a61b4ac9ab932b7354010b97",
".git/objects/f7/34242e96eed03ce0021ecb58a741b4fd332b78": "7d7bafe92cbcf3c7d9ea8ec9e86a658d",
".git/objects/d9/0b3c0cb088bce8c93ed9de73f9983c3901fb8b": "d20259402886b3038e52f8a22dfa9fbe",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/bd4cb7c1fc0285029f8730d75091dd98825f0a": "2adeb45f55831364b5e6a3b05aaf2f65",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "77088728c61a5277337149b70ce24b2d",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "31a8a12c6eee4fc4b934fbb92e012cac",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "9585b5036e8a82f81142ed85fd7aa730",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "753828343629218655ed5d0f1268daae",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "2be56abc04500e6cae2cd8d5585581d3",
".git/objects/19/979038d55f7cdb9aa777989910fe25c277f26f": "2ebc1fc60da929c839fb7017fa745683",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "73fc0311ad536cf030585eaef5009c5c",
".git/objects/53/48e88e16d7335c558b27a6d120519ffa6d43c6": "602adc2e01fec468541e72ae05a4e9a7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "2bf9e456605aa1d76e5f42ef8aadcdae",
".git/objects/fd/54e566c7654ad2fbd30ceb509e0ac64d297481": "656d1ef396782002a9ee85037018c939",
".git/objects/04/ed88752c94edcd002f29c5956ed9861a3b9112": "8bb433ffbf876cae9a5e04b26796bbe4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "f79ec6640a6c2e60ecb0799988bf0d53",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "255bcff5aee7b673d792ad19736de4a4",
".git/objects/0f/09fc58558c0200729bd1b8d5ae83b81506eaad": "c839c7e69196abe273880d0a9177fbc6",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "f5ec9701de6e200cc3dbe58166453f99",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6c/df42c98f7ec3e610d14f289d11cad376428cc7": "47d61a1b8a024d326504931d4724bf62",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "c73cf22dfec359a08bce7fc4993d73ca",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "5988c44d91d20fdb56c841de749259c6",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "75474261660675106c81a9141d1e277b",
".git/objects/b7/2f191305123cc1296db4c83a4ad2deee46e688": "c84f2a225cd6736bb50cbc59780aaa23",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/7d/64a9598c73f405785e8d1c8cebf9bc6ecf0f1c": "7b807c556a5061fbdc2f8f5f55004dee",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/c5/23ef718ddbe534b478c1aca194224ea76f4a67": "72f1d0df8f558564cf4881bc1207788a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "86bdf95698c2ebe316fa7d68916dd83e",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "eac621e118bf970016fe794f3ae0a97b",
".git/objects/43/d7a284a1f64ebd10f41895705418d52bf6d020": "f4127ea763abdac7ee3692149d410485",
".git/objects/8c/63cf31f901d05070088b57df15b88669f1682f": "a317f93395ca3958b560173c0f323e4b",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "47259018fbcfd3b65fcb7d27c6704e68",
".git/objects/ed/2bb328800f9756ce808f65c8f0fff12cd7f8df": "cc41fcbd8f184883567cc6a9de18456f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/ea/7a84a0807c6cdfaaf81b227d8fdc10ff69e84c": "e6d660424aa1b55c9f19542b9f0527a0",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "291ac00ff0c237db97c1a1add0551ba8",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "9c7bb9c736b80fd0388611991ef894bc",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "11948a92de4e381b95ecb021ecdb2960",
".git/objects/6b/24ca3b2b00bb88efa3754f5985590f1f91aeda": "ded42e6bf5c7ecd86a11d21011d2ce9b",
".git/objects/5a/205563cec5672a33915c7ab5cf6c9f08727b3a": "2ab5d216c594cbcb572512708fa92824",
".git/objects/2c/38e06a3ff8f8a739ca71a7dec6eef812165ba3": "960294e97e1833b7eb32717b0464f55a",
".git/objects/1b/f70a072477f8eb9b3b83a520da3f819e3b8174": "c0219546607f0b8d0d3810c2a1974bb1",
".git/objects/a8/4dab487121372a1be6e25af20ea1152b486987": "39172b8205fc32a911e2a794677ea6af",
".git/objects/a8/131148501be69e07eeffc415dd168589552b3a": "ff7239e52d423f2c1c464c4c9f43945e",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "20d977a7a224dbf6f6508b32b7169308",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "3c41db162090cf4e7a97b53dfc19dc26",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "8f2dec63fa7fad905b84b3c56bc2ccf9",
".git/objects/49/18479e8d421e7697dad09d8d4419d667cf85aa": "66e6f7e970e3ffdae0ff5a3810334af1",
".git/objects/70/194436fdf37848dbc15bc6117d1f454370b502": "1470c2b4d9b6ac41144915bca806ac91",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
