// theme.js - dynamically loads a theme stylesheet per selection
(function(){
  const THEMES = [
    'light','sunset-reef','moss-garden','coral-reef','arctic-ocean','deep-sea',
    'bubble-bath','pebble-theme','shrimp-theme','spring-pond','autumn-stream','ancient-aquarium',
    'kelp-forest','artists-studio','jellyfish-lagoon'
  ];
  const storageKey = 'mossy:theme';
  const root = document.documentElement;
  const picker = document.getElementById('themePickerSelect');
  const linkId = 'theme-stylesheet';

  function setTheme(name){
    // remove any theme-* classes to avoid conflicts
    THEMES.forEach(t => root.classList.remove('theme-' + t));

    // Manage dynamic stylesheet: remove for 'light', add for others
    let link = document.getElementById(linkId);
    if(name && name !== 'light'){
      const href = 'themes/' + name + '.css';
      if(!link){
        link = document.createElement('link');
        link.id = linkId;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
      // Only change href if different to avoid reloads
      if(!link.href || !link.href.endsWith(href)) link.href = href;
    } else {
      if(link) link.remove();
    }

    if(picker) picker.value = name;
    try{ localStorage.setItem(storageKey, name); }catch(e){}
  }

  // init: load saved or prefer-color-scheme
  let saved = null;
  try{ saved = localStorage.getItem(storageKey); }catch(e){}
  if(!saved){
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    saved = prefersDark ? 'deep-sea' : 'light';
  }
  setTheme(saved);

  // attach handler if picker exists
  if(picker){
    picker.addEventListener('change', e => setTheme(e.target.value));
  }

})();
