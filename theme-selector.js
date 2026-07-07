// Theme Selector - Manages theme switching and persistence
const THEMES = [
  'ancient-aquarium',
  'arctic-ocean',
  'artists-studio',
  'autumn-stream',
  'bubble-bath',
  'coral-reef',
  'deep-sea',
  'jellyfish-lagoon',
  'kelp-forest',
  'moss-garden',
  'pebble-theme',
  'shrimp-theme',
  'spring-pond',
  'sunset-reef'
];

// Initialize theme on page load
function initTheme() {
  // Create theme link if it doesn't exist
  if (!document.getElementById('theme-link')) {
    const link = document.createElement('link');
    link.id = 'theme-link';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  
  const savedTheme = localStorage.getItem('mossy-theme');
  const themeToLoad = savedTheme || 'moss-garden'; // Default theme
  
  loadTheme(themeToLoad);
}

// Load a theme by name
function loadTheme(themeName) {
  const themeLink = document.getElementById('theme-link');
  if (!themeLink) return;
  
  themeLink.href = `themes/${themeName}.css`;
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
  
  // Create wrapper for flexbox layout
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.alignItems = 'center';
  wrapper.style.gap = '8px';
  wrapper.style.padding = '12px 16px';
  wrapper.style.marginBottom = '16px';
  wrapper.style.borderRadius = '8px';
  wrapper.style.backgroundColor = 'var(--surface)';
  wrapper.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  
  // Create label
  const label = document.createElement('label');
  label.htmlFor = 'theme-selector';
  label.textContent = '🎨';
  label.style.fontSize = '18px';
  label.style.fontWeight = 'bold';
  label.style.cursor = 'pointer';
  
  // Create select dropdown
  const selector = document.createElement('select');
  selector.id = 'theme-selector';
  selector.style.padding = '6px 12px';
  selector.style.borderRadius = '4px';
  selector.style.border = '2px solid var(--primary)';
  selector.style.backgroundColor = 'var(--bg)';
  selector.style.color = 'var(--text)';
  selector.style.fontFamily = 'inherit';
  selector.style.fontSize = '14px';
  selector.style.cursor = 'pointer';
  selector.style.transition = 'all 0.2s ease';
  
  // Add hover effect
  selector.addEventListener('mouseover', () => {
    selector.style.boxShadow = '0 0 8px rgba(0, 0, 0, 0.15)';
  });
  
  selector.addEventListener('mouseout', () => {
    selector.style.boxShadow = 'none';
  });
  
  // Populate with themes
  THEMES.forEach(theme => {
    const option = document.createElement('option');
    option.value = theme;
    // Convert kebab-case to Title Case
    option.textContent = theme
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    selector.appendChild(option);
  });
  
  // Set the current theme
  const savedTheme = localStorage.getItem('mossy-theme') || 'moss-garden';
  selector.value = savedTheme;
  
  // Add change event listener
  selector.addEventListener('change', (e) => {
    loadTheme(e.target.value);
  });
  
  // Append to wrapper
  wrapper.appendChild(label);
  wrapper.appendChild(selector);
  
  // Clear and append wrapper to container
  container.innerHTML = '';
  container.appendChild(wrapper);
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
