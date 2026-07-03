const mossy = document.querySelector(".mossy");

const moods = {

    calm:{
        name:"Calm 🌊",
        thoughts:[
            "The water feels nice today.",
            "Everything is peaceful.",
            "Just floating."
        ],
        poses:[
            {img:"mossystare.png",left:50,top:50},
            {img:"mossyleft.png",left:42,top:52},
            {img:"mossyright.png",left:58,top:48}
        ]
    },

    curious:{
        name:"Curious 👀",
        thoughts:[
            "Pebble detected.",
            "Something moved...",
            "Investigating..."
        ],
        poses:[
            {img:"mossypog.png",left:55,top:46},
            {img:"mossytiltup.png",left:62,top:38},
            {img:"mossystare.png",left:50,top:44}
        ]
    },

    hungry:{
        name:"Hungry 🍤",
        thoughts:[
            "Food?",
            "Where flakes.",
            "I require snacks."
        ],
        poses:[
            {img:"mossypog.png",left:52,top:49},
            {img:"mossyleft.png",left:40,top:47},
            {img:"mossyright.png",left:60,top:47}
        ]
    },

    sleepy:{
        name:"Sleepy 😴",
        thoughts:[
            "five more minutes...",
            "zzzz...",
            "too eepy..."
        ],
        poses:[
            {img:"mossynap.png",left:50,top:60},
            {img:"mossynap.png",left:48,top:58}
        ]
    },

    happy:{
        name:"Happy 🫧",
        thoughts:[
            "glub!!",
            "Today is a good fish day.",
            "I love bubbles."
        ],
        poses:[
            {img:"mossypog.png",left:50,top:48},
            {img:"mossytiltup.png",left:60,top:42},
            {img:"mossystare.png",left:45,top:46}
        ]
    },

    awe:{
    name:"Awe 🥹",
    thoughts:[
        "This... for me?",
        "It's so shiny...",
        "I'll treasure this forever.",
        "Nobody has ever given me a pebble this pretty.",
        "I don't know what to say..."
    ],
    poses:[
        {img:"mossypog.png",left:50,top:48},
        {img:"mossytiltup.png",left:50,top:45},
        {img:"mossystare.png",left:50,top:50}
    ]
}
    
};

let currentMood = "calm";

function chooseMood(){

    const keys = ["calm","curious","hungry","sleepy","happy"];

    currentMood = keys[Math.floor(Math.random()*keys.length)];

    document.getElementById("mood").innerText =
        "Mood: " + moods[currentMood].name;

}

function animateMossy(){

    const behaviour = moods[currentMood];

    const pose =
        behaviour.poses[
            Math.floor(Math.random()*behaviour.poses.length)
        ];

    mossy.src = pose.img;

    mossy.style.left = pose.left + "%";

    mossy.style.top = pose.top + "%";

    document.getElementById("mossySpeak").innerText =
        behaviour.thoughts[
            Math.floor(Math.random()*behaviour.thoughts.length)
        ];

}

chooseMood();

animateMossy();

setInterval(animateMossy,4000);

setInterval(() => {

    if (!isFed) {
        chooseMood();
    }

}, 20000);

    let isFed = false;

function pokeMossy(){

    const feedText = document.getElementById("feedText");

    const reactions = [

        "Mossy looks confused. 👀",
        "Mossy bonks your finger and swims away. 🐟",
        "Mossy stares directly into your soul.",
        "Mossy performs one dramatic spin.",
        "Mossy has decided you are suspicious."

    ];

    feedText.innerText =
        reactions[Math.floor(Math.random()*reactions.length)];

    animateMossy();

    setTimeout(() => {

        feedText.innerText = "";

    },4000);

}

function petMossy(){

    const feedText = document.getElementById("feedText");

    currentMood = "happy";

    document.getElementById("mood").innerText =
        "Mood: " + moods[currentMood].name;

    animateMossy();

    feedText.innerText =
        "Mossy happily wiggles around the bowl! 🫧💚";

    setTimeout(() => {

        feedText.innerText = "";

    },4000);

}

function feedMossy(){

    const feedText = document.getElementById("feedText");

    if(currentMood === "hungry"){

        isFed = true;
        currentMood = "happy";

        document.getElementById("mood").innerText =
            "Mood: " + moods[currentMood].name;

        animateMossy();

        feedText.innerText = "Mossy is VERY happy!! 🍤✨";

        setTimeout(() => {

            isFed = false;
            chooseMood();
            animateMossy();
            feedText.innerText = "";

        },8000);

    }else{

        feedText.innerText =
            "Mossy is not hungry... but appreciated the snack anyway 🐟";

        setTimeout(() => {

            feedText.innerText = "";

        },4000);

    }

    function giftPebble(){

    const feedText = document.getElementById("feedText");

    currentMood = "awe";

    document.getElementById("mood").innerText =
        "Mood: " + moods[currentMood].name;

    animateMossy();

    const reactions = [

        "Mossy gently hugs the pebble. 🪨💚",

        "Mossy stares at the pebble for a very long time before carefully placing it beside his favourite rock.",

        "Mossy swims tiny circles around the pebble like it's the greatest treasure in the ocean.",

        "Mossy looks at you... then at the pebble... then back at you. He seems genuinely touched. 🥹",

        "Mossy has officially declared this pebble 'extra shiny' and will protect it forever."
    ];

    feedText.innerText =
        reactions[Math.floor(Math.random()*reactions.length)];

    setTimeout(() => {

        chooseMood();
        animateMossy();

        feedText.innerText = "";

    },8000);

}

}
