
  
  //--------------------------
  //service worker
  // 1. get from web
  // 2. update cache
  // 3. get from cache
  //---------------------------



 this.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).then(function(response) {
      return caches.open("covid19-dynamic-v1").then(function(cache) {
        return cache.put(event.request, response.clone()).then(function() {
          return response
        })
      })
    }).catch(function() {
      return caches.match(event.request)
    })
  )
})
 