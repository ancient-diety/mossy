// Theme Selector - Manages theme switching and persistence
const THEMES = {
  light: {
    name: 'Light',
    class: 'theme-light'
  },
  dark: {
    name: 'Dark',
    class: 'theme-dark'
  },
  'ancient-aquarium': {
    name: 'Ancient Aquarium',
    class: 'theme-ancient-aquarium'
  },
  'arctic-ocean': {
    name: 'Arctic Ocean',
    class: 'theme-arctic-ocean'
  },
  'artists-studio': {
    name: "Artist's Studio",
    class: 'theme-artists-studio'
  },
  'autumn-stream': {
    name: 'Autumn Stream',
    class: 'theme-autumn-stream'
  },
  'bubble-bath': {
    name: 'Bubble Bath',
    class: 'theme-bubble-bath'
  },
  'coral-reef': {
    name: 'Coral Reef',
    class: 'theme-coral-reef'
  },
  'deep-sea': {
    name: 'Deep Sea',
    class: 'theme-deep-sea'
  },
  'jellyfish-lagoon': {
    name: 'Jellyfish Lagoon',
    class: 'theme-jellyfish-lagoon'
  },
  'kelp-forest': {
    name: 'Kelp Forest',
    class: 'theme-kelp-forest'
  },
  'moss-garden': {
    name: 'Moss Garden',
    class: 'theme-moss-garden'
  },
  'pebble-theme': {
    name: 'Pebble Theme',
    class: 'theme-pebble-theme'
  },
  'shrimp-theme': {
    name: 'Shrimp Theme',
    class: 'theme-shrimp-theme'
  },
  'spring-pond': {
    name: 'Spring Pond',
    class: 'theme-spring-pond'
  },
  'sunset-reef': {
    name: 'Sunset Reef',
    class: 'theme-sunset-reef'
  }
};

// Initialize theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem('mossy-theme') || 'light';
  loadTheme(savedTheme);
}

// Load a theme by name
function loadTheme(themeName) {
  // Remove all theme classes from html element
  Object.values(THEMES).forEach(theme => {
    document.documentElement.classList.remove(theme.class);
  });
  
  // Add the selected theme class
  if (THEMES[themeName]) {
    document.documentElement.classList.add(THEMES[themeName].class);
  }
  
  // Save to localStorage
  localStorage.setItem('mossy-theme', themeName);
  
  // Update the selector to show the current theme
  const selector = document.getElementById('theme-selector');
  if (selector) {
    selector.value = themeName;
  }
}

// Create and populate the theme selector
function createThemeSelector() {
  const container = document.getElementById('theme-selector-container');
  if (!container) return;
  
  // Create select dropdown
  const selector = document.createElement('select');
  selector.id = 'theme-selector';
  selector.style.width = '100%';
  selector.style.padding = '8px 12px';
  selector.style.borderRadius = '8px';
  selector.style.border = '2px solid #1f4e5f';
  selector.style.backgroundColor = 'var(--surface)';
  selector.style.color = 'var(--text)';
  selector.style.fontFamily = 'inherit';
  selector.style.fontSize = '14px';
  selector.style.cursor = 'pointer';
  selector.style.marginBottom = '16px';
  selector.style.fontWeight = '500';
  
  // Create optgroups for organization
  const lightGroup = document.createElement('optgroup');
  lightGroup.label = '🌞 Light Themes';
  
  const darkGroup = document.createElement('optgroup');
  darkGroup.label = '🌙 Dark Themes';
  
  const oceanGroup = document.createElement('optgroup');
  oceanGroup.label = '🌊 Ocean Themes';
  
  // Add light themes
  ['light', 'dark'].forEach(theme => {
    const option = document.createElement('option');
    option.value = theme;
    option.textContent = THEMES[theme].name;
    if (theme === 'light') lightGroup.appendChild(option);
    else darkGroup.appendChild(option);
  });
  
  // Add ocean/color themes
  const oceanThemes = [
    'ancient-aquarium', 'arctic-ocean', 'artists-studio', 'autumn-stream',
    'bubble-bath', 'coral-reef', 'deep-sea', 'jellyfish-lagoon',
    'kelp-forest', 'moss-garden', 'pebble-theme', 'shrimp-theme',
    'spring-pond', 'sunset-reef'
  ];
  
  oceanThemes.forEach(theme => {
    const option = document.createElement('option');
    option.value = theme;
    option.textContent = THEMES[theme].name;
    oceanGroup.appendChild(option);
  });
  
  selector.appendChild(lightGroup);
  selector.appendChild(darkGroup);
  selector.appendChild(oceanGroup);
  
  // Set the current theme
  const savedTheme = localStorage.getItem('mossy-theme') || 'light';
  selector.value = savedTheme;
  
  // Add change event listener
  selector.addEventListener('change', (e) => {
    loadTheme(e.target.value);
  });
  
  // Append to container
  container.innerHTML = '';
  container.appendChild(selector);
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    createThemeSelector();
  });
} else {
  initTheme();
  createThemeSelector();
}
