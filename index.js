const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input");
keysCheckBox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.mp3")

const playTune = (key) => {
    audio.src = `tunes/${key}.mp3`;
    audio.play();
    // console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active")
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
    // console.log(key.dataset.key);
});


const handleVolume = (e) => {
    audio.volume = e.target.value
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
   if (allKeys.includes(e.key)) playTune(e.key);
}

keysCheckBox.addEventListener('click', showHideKeys)
volumeSlider.addEventListener('input', handleVolume)
document.addEventListener('keydown', pressedKey)