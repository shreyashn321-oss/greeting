const opening =
    document.getElementById("opening");

const rakhiScene =
    document.getElementById("rakhiScene");

const memoryScene =
    document.getElementById("memoryScene");

const letterScene =
    document.getElementById("letterScene");

const finalScene =
    document.getElementById("finalScene");


const beginBtn =
    document.getElementById("beginBtn");

const memoryBtn =
    document.getElementById("memoryBtn");

const letterBtn =
    document.getElementById("letterBtn");

const openLetter =
    document.getElementById("openLetter");

const envelope =
    document.getElementById("envelope");

const typingText =
    document.getElementById("typingText");

const progressDots =
    document.querySelectorAll(
        ".progress span"
    );

const stars =
    document.getElementById("stars");


/* STARS */

for (let i = 0; i < 100; i++) {

    const star =
        document.createElement("span");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    star.style.animationDuration =
        2 + Math.random() * 4 + "s";

    stars.appendChild(star);
}


/* SCENE CHANGE */

function changeScene(current, next, index) {

    current.style.transition =
        "opacity .5s ease, transform .5s ease";

    current.style.opacity = "0";

    current.style.transform =
        "scale(.97)";

    setTimeout(() => {

        current.classList.add("hidden");

        next.classList.remove("hidden");

        next.style.opacity = "0";

        next.style.transform =
            "scale(1.03)";

        requestAnimationFrame(() => {

            next.style.transition =
                "opacity .8s ease, transform .8s ease";

            next.style.opacity = "1";

            next.style.transform =
                "scale(1)";

        });

        updateProgress(index);

    }, 500);
}


/* OPENING */

beginBtn.addEventListener(
    "click",
    () => {

        changeScene(
            opening,
            rakhiScene,
            1
        );

    }
);


/* RAKHI → MEMORY */

memoryBtn.addEventListener(
    "click",
    () => {

        changeScene(
            rakhiScene,
            memoryScene,
            2
        );

    }
);


/* MEMORY → LETTER */

letterBtn.addEventListener(
    "click",
    () => {

        changeScene(
            memoryScene,
            letterScene,
            3
        );

    }
);


/* LETTER */

let letterOpened = false;

openLetter.addEventListener(
    "click",
    () => {

        if (!letterOpened) {

            letterOpened = true;

            envelope.classList.add("open");

            openLetter.textContent =
                "Continue the surprise →";

            setTimeout(
                typeMessage,
                700
            );

        } else {

            changeScene(
                letterScene,
                finalScene,
                3
            );

        }

    }
);


/* TYPEWRITER */

const message =
    "We may fight, irritate each other and sometimes pretend that we don't care. But honestly, life would be a lot less fun without you. Thank you for all the memories, all the laughs and even all those annoying moments. No matter how old we get, you'll always have a special place in my life.";

let typingStarted = false;

function typeMessage() {

    if (typingStarted) {
        return;
    }

    typingStarted = true;

    let index = 0;

    typingText.textContent = "";

    const interval =
        setInterval(() => {

            typingText.textContent +=
                message[index];

            index++;

            if (
                index >=
                message.length
            ) {

                clearInterval(interval);

            }

        }, 25);
}


/* PROGRESS */

function updateProgress(index) {

    progressDots.forEach(
        (dot, i) => {

            dot.classList.toggle(
                "active",
                i === index
            );

        }
    );
}


/* CURSOR */

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");


document.addEventListener(
    "mousemove",
    (event) => {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

        cursorDot.style.left =
            event.clientX + "px";

        cursorDot.style.top =
            event.clientY + "px";

    }
);


/* CURSOR HOVER */

const interactive =
    document.querySelectorAll(
        "button, .memory-universe, .envelope"
    );

interactive.forEach(
    (element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursor.style.width =
                    "55px";

                cursor.style.height =
                    "55px";

            }
        );

        element.addEventListener(
            "mouseleave",
            () => {

                cursor.style.width =
                    "35px";

                cursor.style.height =
                    "35px";

            }
        );

    }
);