document.addEventListener("DOMContentLoaded", () => {

    const snail = document.getElementById("snail");

    if (!snail) return;

    function snailVisit() {

        const minX = window.innerWidth <= 768 ? 20 : 260;
        const maxX = window.innerWidth - 80;
        const maxY = window.innerHeight - 100;

        const x = Math.random() * (maxX - minX) + minX;
        const y = Math.random() * (maxY - 40) + 40;

        snail.style.left = x + "px";
        snail.style.top = y + "px";
        snail.style.opacity = "1";

        setTimeout(() => {
            snail.style.opacity = "0";
        }, 600 + Math.random() * 600);

    }

    setInterval(() => {

        if (Math.random() < 0.35) {
            snailVisit();
        }

    }, 30000);

});
