// theme.js - implements theme picker and persistence
(function(){
  const THEMES = [
    'light','sunset-reef','moss-garden','coral-reef','arctic-ocean','deep-sea',
    'bubble-bath','pebble-theme','shrimp-theme','spring-pond','autumn-stream','ancient-aquarium',
    'kelp-forest','artists-studio','jellyfish-lagoon'
  ];
  const storageKey = 'mossy:theme';
  const root = document.documentElement;
  const picker = document.getElementById('themePickerSelect');

  function setTheme(name){
    // remove any theme- classes and add the chosen one (except 'light' -> no class)
    THEMES.forEach(t => root.classList.remove('theme-' + t));
    if(name && name !== 'light') root.classList.add('theme-' + name);
    // update select state
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
