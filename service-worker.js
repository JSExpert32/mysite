"use strict";var precacheConfig=[["/mysite/index.html","3db33d03c8ccfd1fac96115abc45e112"],["/mysite/static/css/main.d38678f2.css","92269b68fc6f10d5fa6dbe614702c07d"],["/mysite/static/js/main.4c3e6a95.js","5769876f00009e72d1fae3d3e06d2567"],["/mysite/static/media/Roboto-Black.59eb3601.woff2","59eb3601394dd87f30f82433fb39dd94"],["/mysite/static/media/Roboto-Black.8f766bb9.woff","8f766bb9720fe9b3fe48362d3dc31acf"],["/mysite/static/media/Roboto-BlackItalic.83b2c7d0.woff","83b2c7d031cda66aadb97cd0fd29c1f4"],["/mysite/static/media/Roboto-BlackItalic.f75569f8.woff2","f75569f8a5fab0893fa712d8c0d9c3fe"],["/mysite/static/media/Roboto-Bold.b52fac2b.woff2","b52fac2bb93c5858f3f2675e4b52e1de"],["/mysite/static/media/Roboto-Bold.eb43b4c3.woff","eb43b4c3b3b6cac224f76c0a524946a1"],["/mysite/static/media/Roboto-BoldItalic.563c4bd6.woff","563c4bd6da24f5ce46e7aee2aace04f9"],["/mysite/static/media/Roboto-BoldItalic.94008e69.woff2","94008e69aaf05da75c0bbf8f8bb0db41"],["/mysite/static/media/Roboto-Italic.4357beb8.woff2","4357beb823a5f8d65c260f045d9e019a"],["/mysite/static/media/Roboto-Italic.6521f388.woff","6521f388081e84791dba294c9e7cfb4e"],["/mysite/static/media/Roboto-Light.c8405cfa.woff","c8405cfa0df9fb2e47ef1c516cef59a8"],["/mysite/static/media/Roboto-Light.d26871e8.woff2","d26871e8149b5759f814fd3c7a4f784b"],["/mysite/static/media/Roboto-LightItalic.e8eaae90.woff2","e8eaae902c3a4dacb9a5062667e10576"],["/mysite/static/media/Roboto-LightItalic.f6dd13d5.woff","f6dd13d54d88ff5668074e3ea6d7932a"],["/mysite/static/media/Roboto-Medium.7b225d4d.woff","7b225d4d9324ee54ce6d9ec50e339668"],["/mysite/static/media/Roboto-Medium.90d16760.woff2","90d1676003d9c28c04994c18bfd8b558"],["/mysite/static/media/Roboto-MediumItalic.13ec0eb5.woff2","13ec0eb5bdb821ff4930237d7c9f943f"],["/mysite/static/media/Roboto-MediumItalic.5df7f053.woff","5df7f0532c1c39e04011b2ab0be1fe3c"],["/mysite/static/media/Roboto-Regular.73f0a88b.woff2","73f0a88bbca1bec19fb1303c689d04c6"],["/mysite/static/media/Roboto-Regular.878ad715.woff","878ad7158f6fa9136d796d4bad613bc2"],["/mysite/static/media/Roboto-Thin.03fb3a93.woff","03fb3a93c4a33abb815862cd83b3940a"],["/mysite/static/media/Roboto-Thin.ad538a69.woff2","ad538a69b0e8615ed0419c4529344ffc"],["/mysite/static/media/Roboto-ThinItalic.4ced2a97.woff","4ced2a97efbc5f12663c750fbc318e83"],["/mysite/static/media/Roboto-ThinItalic.5b4a33e1.woff2","5b4a33e176ff736a74f0ca2dd9e6b396"],["/mysite/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/mysite/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/mysite/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/mysite/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/mysite/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/mysite/static/media/me.888cc1e3.jpg","888cc1e33e277fa36319b0a20cf7701e"],["/mysite/static/media/raleway-bold-webfont.1ad917ee.woff2","1ad917eea8b4c921992d925cac64490f"],["/mysite/static/media/raleway-bold-webfont.474c1ebf.woff","474c1ebf2a0a463d9a03a29a065ae8f2"],["/mysite/static/media/raleway-regular-webfont.50a248dc.woff2","50a248dc33ced2bbd235a7a9a473825b"],["/mysite/static/media/raleway-regular-webfont.dda65b55.woff","dda65b551e6241174edd384d2a44085b"],["/mysite/static/media/raleway-semibold-webfont.1d574968.woff2","1d574968db21bd1eb692175bbe77dd32"],["/mysite/static/media/raleway-semibold-webfont.34173a45.woff","34173a45af2c9b30a252fbe77c5364c8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),i=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var i="/mysite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});