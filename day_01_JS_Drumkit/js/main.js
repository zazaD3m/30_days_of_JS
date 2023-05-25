function playSound(e) {
    // GET keycode of the pressed down key
    const pressedKey = e.keyCode;
    // GET audio file based on pressed down key
    const audio = document.querySelector(`audio[data-key="${pressedKey}"]`);
    const key = document.querySelector(`div[data-key="${pressedKey}"]`);
    // if key pressed isn't part of drumkit return
    if (!audio) return;
    playAudio(audio);
    styleKey(key);
}

// helper function for clean audio output
const playAudio = (audio) => {
    audio.currentTime = 0;
    audio.play();
};

const styleKey = (keyPressed) => {
    keyPressed.classList.add("playing");
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) =>
        key.addEventListener("transitionend", removeTransition)
    );
};

function removeTransition(e) {
    // skip if it is not transform
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
