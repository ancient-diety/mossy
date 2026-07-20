document.addEventListener("DOMContentLoaded", () => {

    const mossySpeak = document.getElementById("mossySpeak");

    if (!mossySpeak) return;

    const thoughts = [
        "I have counted 3 bubbles today.",
        "Pebbles remain suspicious.",
        "The snail definitely knows something.",
        "Bubble acquired.",
        "Today feels particularly fish.",
        "Water is still wet.",
        "I blinked.",
        "The gravel moved.",
        "Glub.",
        "I wonder where the shrimp went.",
        "Baby shark do do do do do doo~",
        "Where did the shrimp go?"
    ];

    function changeThought() {
        mossySpeak.innerText =
            thoughts[Math.floor(Math.random() * thoughts.length)];
    }

    changeThought();

    setInterval(changeThought, 8000);

});
