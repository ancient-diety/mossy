const themes = {

    light: {

        "--bg": "#d9f3f6",
        "--bg-accent": "radial-gradient(circle at top,#eafcff,#d9f3f6)",
        "--dot-grid": `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><circle cx='12' cy='12' r='1.5' fill='%2374a6b0' fill-opacity='0.22'/></svg>")`,

        "--text": "#2a4a56",

        "--primary": "#1f4e5f",
        "--accent": "#4a90a4",

        "--surface": "#FFFBF5",
        "--surface-translucent": "rgba(255,251,245,.85)",

        "--bubble-color": "rgba(74,144,164,.12)",

        "--card-shadow": "0 6px 16px rgba(0,0,0,.12)"

    },

    dark: {

    "--bg": "#14161C",

    "--bg-accent":
    "radial-gradient(circle at top,#232B3F,#14161C)",
        
    "--dot-grid": "none",

    "--text": "#E7EEF8",

    "--primary": "#8EA6C1",
        
    "--accent": "#5F7EA5",
        
    "--surface": "#20252F",

    "--surface-translucent":
        "rgba(32,37,47,.85)",

    "--bubble-color":
        "rgba(91,157,255,.15)",

    "--card-shadow":
        "0 8px 20px rgba(0,0,0,.45)"

},

    whimsical: {

        "--bg": "#FDF0F9",

        "--bg-accent":
            "linear-gradient(180deg,#FDF0F9,#FFDCCB)",

        "--dot-grid": "none",

        "--text": "#4E4664",

        "--primary": "#8ED5F3",

        "--accent": "#B5A2D4",

        "--surface": "#FFDCCB",

        "--surface-translucent":
            "rgba(255,220,203,.85)",

        "--bubble-color":
            "rgba(243,185,203,.25)",

        "--card-shadow":
            "0 6px 18px rgba(181,162,212,.22)"

    },

    "mad-hatter": {

    "--bg": "#241929",
    "--bg-accent": "linear-gradient(180deg,#2b1d31,#241929)",
    "--dot-grid": "none",

    "--text": "#E5E6E1",

    "--primary": "#DD1440",
    "--accent": "#F696B3",

    "--surface": "#5A4864",
    "--surface-translucent": "rgba(90,72,100,.82)",

    "--bubble-color": "rgba(246,150,179,.15)",

    "--card-shadow": "0 8px 22px rgba(0,0,0,.45)"

},

    "caramel-fudge": {
        
    "--bg": "#F2F5E2",
    "--bg-accent": "linear-gradient(180deg,#F2F5E2,#E3DEA4)",
    "--dot-grid": "none",
        
    "--text": "#290042",

    "--primary": "#775533",
    "--accent": "#D4954D",

    "--surface": "#FFF9EF",
    "--surface-translucent": "rgba(255,249,239,.85)",

    "--bubble-color": "rgba(212,149,77,.15)",

    "--card-shadow": "0 8px 22px rgba(41,0,66,.15)"

},

    nebula: {

    "--bg": "#0F397A",

    "--bg-accent":
        "linear-gradient(180deg, #580738, #0F397A)",

    "--dot-grid": "none",

    "--text": "#D1E6C3",

    "--primary": "#55CDED",

    "--accent": "#FF5C4C",

    "--surface": "#24467F",

    "--surface-translucent":
        "rgba(36,70,127,.85)",

    "--bubble-color":
        "rgba(85,205,237,.22)",

    "--card-shadow":
        "0 8px 22px rgba(0,0,0,.45)"

},

    mossy: {

    "--bg": "#CDE8D4",

    "--bg-accent":
        "linear-gradient(180deg, #CDE8D4, #97C49E)",

    "--dot-grid": "none",

    "--text": "#657E47",

    "--primary": "#6C9B76",

    "--accent": "#80A32F",

    "--surface": "#BAD17A",

    "--surface-translucent":
        "rgba(186,209,122,.85)",

    "--bubble-color":
        "rgba(151,196,158,.25)",

    "--card-shadow":
        "0 8px 22px rgba(101,126,71,.25)"

},

    "rainbow-mist": {

    "--bg": "#4E4C5E",

    "--bg-accent":
        "linear-gradient(180deg, #572F48, #4E4C5E)",

    "--dot-grid": "none",

    "--text": "#F5E8DD",

    "--primary": "#DC7668",

    "--accent": "#FFA67A",

    "--surface": "#817965",

    "--surface-translucent":
        "rgba(129,121,101,.85)",

    "--bubble-color":
        "rgba(255,166,122,.22)",

    "--card-shadow":
        "0 8px 22px rgba(78,76,94,.35)"

},

    pebble: {

    "--bg": "#F3F2EE",

    "--bg-accent":
        "linear-gradient(180deg, #F3F2EE, #B2B0AC)",

    "--dot-grid": "none",

    "--text": "#21211D",

    "--primary": "#6F6F6B",

    "--accent": "#524D4B",

    "--surface": "#E5E3DE",

    "--surface-translucent":
        "rgba(243,242,238,.85)",

    "--bubble-color":
        "rgba(178,176,172,.25)",

    "--card-shadow":
        "0 8px 22px rgba(33,33,29,.18)"

},

    hyacinth: {

    "--bg": "#482A41",

    "--bg-accent":
        "linear-gradient(180deg,#572E54,#482A41)",

    "--dot-grid": "none",

    "--text": "#E2D2C8",

    "--primary": "#8E7692",

    "--accent": "#E2D2C8",

    "--surface": "#572E54",

    "--surface-translucent":
        "rgba(87,46,84,.82)",

    "--bubble-color":
        "rgba(226,210,200,.10)",

    "--card-shadow":
        "0 8px 22px rgba(0,0,0,.45)"

},

    goldenHour: {

    "--bg": "#FBF5D2",

    "--bg-accent":
        "linear-gradient(180deg,#FBF5D2,#FEE39F)",

    "--dot-grid": "none",

    "--text": "#441004",

    "--primary": "#79380B",

    "--accent": "#EFBB55",

    "--surface": "#FEE39F",

    "--surface-translucent":
        "rgba(254,227,159,.85)",

    "--bubble-color":
        "rgba(239,187,85,.18)",

    "--card-shadow":
        "0 8px 20px rgba(121,56,11,.18)"

},

    raspberry: {

    "--bg": "#F9EBF2",

    "--bg-accent":
        "linear-gradient(180deg,#F9EBF2,#EBA2B9)",

    "--dot-grid": "none",

    "--text": "#260309",

    "--primary": "#BF3054",

    "--accent": "#EBA2B9",

    "--surface": "#FFFFFF",

    "--surface-translucent":
        "rgba(255,255,255,.82)",

    "--bubble-color":
        "rgba(191,48,84,.16)",

    "--card-shadow":
        "0 8px 20px rgba(38,3,9,.18)"

},
    
};

function applyTheme(themeName) {

    const theme = themes[themeName];

    if (!theme) return;

    for (const variable in theme) {

        document.documentElement.style.setProperty(
            variable,
            theme[variable]
        );

    }

}

const selector = document.getElementById("theme-selector");

const savedTheme = localStorage.getItem("theme") || "light";

applyTheme(savedTheme);

selector.value = savedTheme;

selector.addEventListener("change", () => {

    const chosenTheme = selector.value;

    applyTheme(chosenTheme);

    localStorage.setItem("theme", chosenTheme);

});
