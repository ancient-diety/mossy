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
