// Kablammo offline cache.
//
// The app SHELL (the page itself — index.html's redirect + kablammo.html, which is the file that
// actually changes with every new build) is network-FIRST: always try the network first so a
// deployed update is visible on the very next load, and only fall back to the cached copy if the
// network fails (offline). Cache-first for the shell was the bug — once kablammo.html was cached
// once, it would keep being served forever, since nothing ever told the browser to look again.
//
// tracks.json (the preset-music manifest) is treated the same way — the live app should always see
// the freshest track listing when online.
//
// Everything else (the actual music files, favicon, etc.) stays cache-first: those are large,
// rarely change, and re-fetching them on every load would only cost bandwidth for no benefit.
const C = 'kablammo-v2';   // bump only if you ever need to force a truly clean slate — shouldn't be needed going forward

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(C).then(c => c.addAll(['./', './index.html']).catch(() => {}))
      .then(() => syncMusicCache())     // proactively grab the built-in tracks on first install too
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== C).map(k => caches.delete(k))))  // drop any old cache version
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const isShell = e.request.mode === 'navigate' || e.request.url.endsWith('/') ||
    e.request.url.endsWith('index.html') || e.request.url.endsWith('kablammo.html') ||
    e.request.url.endsWith('tracks.json');

  if (isShell) {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(C).then(c => c.put(e.request, copy).catch(() => {}));
        return res;
      }).catch(() => caches.match(e.request).then(cached => cached || caches.match('./')))
    );
    if (e.request.url.endsWith('tracks.json')) e.waitUntil(syncMusicCache());  // check for new/removed tracks in the background
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(C).then(c => c.put(e.request, copy).catch(() => {}));
        return res;
      }))
    );
  }
});

/* Keeps the built-in music tracks available offline, without re-downloading anything that hasn't
   actually changed. Compares the freshly-fetched tracks.json against whatever copy is currently
   cached: if they're byte-identical, there's nothing to do — the tracks that are already cached
   stay cached. If the manifest DID change, any track no longer listed gets dropped from the cache,
   and any newly-listed track (not already cached) gets fetched and cached. */
async function syncMusicCache(){
  try{
    const freshRes=await fetch('./tracks.json',{cache:'no-store'});
    if(!freshRes.ok) return;
    const freshText=await freshRes.clone().text();
    const cache=await caches.open(C);
    const oldRes=await cache.match('./tracks.json');
    const oldText=oldRes ? await oldRes.text() : null;
    if(oldText===freshText) return;                    // manifest unchanged — nothing to dump or re-fetch

    await cache.put('./tracks.json',freshRes.clone());
    const parseUrls=txt=>{ try{ return (JSON.parse(txt)||[]).map(t=>t.url).filter(Boolean); }catch(e){ return []; } };
    const oldUrls=new Set(parseUrls(oldText)), newUrls=parseUrls(freshText);

    await Promise.all([...oldUrls].filter(u=>!newUrls.includes(u)).map(u=>cache.delete(u).catch(()=>{})));  // dump removed tracks
    await Promise.all(newUrls.map(async u=>{                // fetch only the tracks not already cached
      if(await cache.match(u)) return;
      try{ const r=await fetch(u); if(r.ok) await cache.put(u,r); }catch(e){}
    }));
  }catch(e){ /* offline, or tracks.json missing — fine, ordinary cache-fill-on-play still covers it */ }
}
