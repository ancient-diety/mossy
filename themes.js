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

    }

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
