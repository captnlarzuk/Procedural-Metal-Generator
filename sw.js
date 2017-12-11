
var CACHENAME = "metal-o-matic-cache";
var BLACKLIST = [

];

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(CACHENAME).then(function(cache) {
     return cache.addAll([
       './index.html',
        './app.min.js',
        './img/Bender2_400x400.jpg',
        './img/free_metal.jpg',
        './wav/gratteb/HMRhyBChug-E Hi.wav',
        './wav/gratteb/HMRhyBChug-B.wav',
        './wav/gratteb/HMRhyBChug-G.wav',
        './wav/gratteb/HMRhyBChug-D.wav',
        './wav/gratteb/HMRhyBChug-F.wav',
        './wav/gratteb/HMRhyBChug-A.wav',
        './wav/gratteb/HMRhyBChug-C.wav',
        './wav/gratteb/HMRhyBChug-E Lo.wav',
        './wav/Closed-Hi-Hat-6.wav',
        './wav/woob/2_hit_bit.wav',
        './wav/woob/1_hit_bit.wav',
        './wav/woob/6_hit_bit.wav',
        './wav/woob/5_hit_bit.wav',
        './wav/woob/4_hit_bit.wav',
        './wav/woob/3_hit_bit.wav',
        './wav/Korg-N1R-TubeCrunch-C4.wav',
        './wav/Korg-NS5R-Snare-Drum.wav',
        './wav/120_bitz/2_hit_bit.wav',
        './wav/120_bitz/31_hit_bit.wav',
        './wav/120_bitz/7_hit_bit.wav',
        './wav/120_bitz/17_hit_bit.wav',
        './wav/120_bitz/20_hit_bit.wav',
        './wav/120_bitz/16_hit_bit.wav',
        './wav/120_bitz/49_hit_bit.wav',
        './wav/120_bitz/1_hit_bit.wav',
        './wav/120_bitz/29_hit_bit.wav',
        './wav/120_bitz/12_hit_bit.wav',
        './wav/120_bitz/39_hit_bit.wav',
        './wav/120_bitz/24_hit_bit.wav',
        './wav/120_bitz/30_hit_bit.wav',
        './wav/120_bitz/18_hit_bit.wav',
        './wav/120_bitz/32_hit_bit.wav',
        './wav/120_bitz/25_hit_bit.wav',
        './wav/120_bitz/46_hit_bit.wav',
        './wav/120_bitz/48_hit_bit.wav',
        './wav/120_bitz/50_hit_bit.wav',
        './wav/120_bitz/11_hit_bit.wav',
        './wav/120_bitz/44_hit_bit.wav',
        './wav/120_bitz/13_hit_bit.wav',
        './wav/120_bitz/6_hit_bit.wav',
        './wav/120_bitz/38_hit_bit.wav',
        './wav/120_bitz/37_hit_bit.wav',
        './wav/120_bitz/21_hit_bit.wav',
        './wav/120_bitz/45_hit_bit.wav',
        './wav/120_bitz/5_hit_bit.wav',
        './wav/120_bitz/15_hit_bit.wav',
        './wav/120_bitz/35_hit_bit.wav',
        './wav/120_bitz/23_hit_bit.wav',
        './wav/120_bitz/43_hit_bit.wav',
        './wav/120_bitz/34_hit_bit.wav',
        './wav/120_bitz/41_hit_bit.wav',
        './wav/120_bitz/36_hit_bit.wav',
        './wav/120_bitz/22_hit_bit.wav',
        './wav/120_bitz/4_hit_bit.wav',
        './wav/120_bitz/27_hit_bit.wav',
        './wav/120_bitz/19_hit_bit.wav',
        './wav/120_bitz/10_hit_bit.wav',
        './wav/120_bitz/47_hit_bit.wav',
        './wav/120_bitz/40_hit_bit.wav',
        './wav/120_bitz/42_hit_bit.wav',
        './wav/120_bitz/14_hit_bit.wav',
        './wav/120_bitz/8_hit_bit.wav',
        './wav/120_bitz/9_hit_bit.wav',
        './wav/120_bitz/33_hit_bit.wav',
        './wav/120_bitz/26_hit_bit.wav',
        './wav/120_bitz/3_hit_bit.wav',
        './wav/120_bitz/28_hit_bit.wav',
        './wav/grattea/HMRhyB Chug-F.wav',
        './wav/grattea/HMRhyB Chug-E.wav',
        './wav/grattea/HMRhyB Chug-D Hi.wav',
        './wav/grattea/HMRhyB Chug-A.wav',
        './wav/grattea/HMRhyB Chug-D Lo.wav',
        './wav/grattea/HMRhyB Chug-B.wav',
        './wav/grattea/HMRhyB Chug-C.wav',
        './wav/grattea/HMRhyB Chug-G.wav',
        './wav/Ensoniq-ESQ-1-Snare-2.wav',
        './wav/Dry-Kick.wav',
        './wav/symbals/CyCdh_K3Rim-01.wav',
        './wav/symbals/2_hit_symbal.wav',
        './wav/symbals/10_hit_symbal.wav',
        './wav/symbals/CyCdh_K3OpHat-03.wav',
        './wav/symbals/3_hit_symbal.wav',
        './wav/symbals/CyCdh_K3OpHat-02.wav',
        './wav/symbals/5_hit_symbal.wav',
        './wav/symbals/11_hit_symbal.wav',
        './wav/symbals/9_hit_symbal.wav',
        './wav/symbals/CyCdh_K3SdSt-07.wav',
        './wav/symbals/CyCdh_K3SdSt-06.wav',
        './wav/symbals/CyCdh_K3SdSt-02.wav',
        './wav/symbals/CyCdh_K3SdSt-03.wav',
        './wav/symbals/CyCdh_K3SdSt-01.wav',
        './wav/symbals/7_hit_symbal.wav',
        './wav/symbals/6_hit_symbal.wav',
        './wav/symbals/1_hit_symbal.wav',
        './wav/symbals/CyCdh_K3SdSt-05.wav',
        './wav/symbals/8_hit_symbal.wav',
        './wav/symbals/4_hit_symbal.wav',
        './wav/symbals/CyCdh_K3OpHat-01.wav',
        './wav/symbals/CyCdh_K3SdSt-04.wav'
     ]);
   })
 );
});

self.addEventListener('activate', function(event) {
    return event.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.map(function(k) {
      if (k != CACHENAME && k.indexOf(CACHENAME) == 0) {
        return caches.delete(k);
      } else {
        return Promise.resolve();
      }
    }));
  }));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
                    return response;
        }

        return fetch(event.request).then(function(response) {
          var shouldCache = response.ok;

          for (var i = 0; i < BLACKLIST.length; ++i) {
            var b = new RegExp(BLACKLIST[i]);
            if (b.test(event.request.url)) {
              shouldCache = false;
              break;
            }
          }

          if (event.request.method == 'POST') {
            shouldCache = false;
          }

                    if (shouldCache) {
            return caches.open(CACHENAME).then(function(cache) {
              cache.put(event.request, response.clone());
              return response;
            });
          } else {
            return response;
          }
        });
      })
  );
});



if (!Cache.prototype.add) {

  Cache.prototype.add = function add(request) {
        return this.addAll([request]);
  };
}

if (!Cache.prototype.addAll) {

  Cache.prototype.addAll = function addAll(requests) {
        var cache = this;

        function NetworkError(message) {
      this.name = 'NetworkError';
      this.code = 19;
      this.message = message;
    }
    NetworkError.prototype = Object.create(Error.prototype);

    return Promise.resolve()
        .then(function() {
          if (arguments.length < 1) throw new TypeError();

          requests = requests.map(function(request) {
            if (request instanceof Request) {
              return request;
            } else {
              return String(request);              }
          });

          return Promise.all(requests.map(function(request) {
            if (typeof request === 'string') {
              request = new Request(request);
            }

            return fetch(request.clone());
          }));
        })
        .then(function(responses) {
                              return Promise.all(responses.map(function(response, i) {
            return cache.put(requests[i], response);
          }));
        })
        .then(function() {
          return undefined;
        });
  };
}

if (!CacheStorage.prototype.match) {
  CacheStorage.prototype.match = function match(request, opts) {
    var caches = this;
    return caches.keys().then(function(cacheNames) {
      var match;
      return cacheNames.reduce(function(chain, cacheName) {
        return chain.then(function() {
          return match || caches.open(cacheName).then(function(cache) {
            return cache.match(request, opts);
          }).then(function(response) {
            match = response;
            return match;
          });
        });
      }, Promise.resolve());
    });
  };
}
