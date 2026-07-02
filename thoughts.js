document.addEventListener("DOMContentLoaded", () => {

    const thoughtsElement = document.getElementById("mossySpeak");

    if (!thoughtsElement) return;

    const thoughts = [

        "I have counted 3 bubbles today!!",
        "The pebbles are plotting.",
        "The snail knows something.",
        "Water remains wet.",
        "I wonder where the shrimp went.",
        "I blinked. Nothing changed.",
        "One bubble looked suspicious.",
        "Today feels fishy.",
        "I should investigate the gravel.",
        "Glub."
        "Fix your posture."

    ];

    function newThought(){

        thoughtsElement.innerText =
            thoughts[Math.floor(Math.random() * thoughts.length)];

    }

    newThought();

    setInterval(newThought, 8000);

});
