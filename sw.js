const VERSION='gps-rando-v3';
const ASSETS=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(VERSION);
 const results=await Promise.allSettled(ASSETS.map(async url=>{
  const res=await fetch(new Request(url,{cache:'reload'}));
  if(!res.ok)throw Error(url+' : '+res.status);
  await cache.put(new URL(url,self.registration.scope).href,res);
 }));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(k=>k.startsWith('gps-rando-')&&k!==VERSION).map(k=>caches.delete(k)));
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(VERSION);
  const cached=await cache.match(req,{ignoreSearch:true});
  if(req.mode==='navigate'){
   try{const fresh=await fetch(req);if(fresh.ok)await cache.put(new URL('./index.html',self.registration.scope).href,fresh.clone());return fresh;}
   catch(e){return cached||await cache.match(new URL('./index.html',self.registration.scope).href)||Response.error();}
  }
  if(cached)return cached;
  try{const res=await fetch(req);if(res.ok)await cache.put(req,res.clone());return res;}
  catch(e){return Response.error();}
 })());
});
