function start() {
    const displayElem = document.getElementById('display');
    const startButton = document.getElementById('start');
    let isImageVisible = false;

    startButton.addEventListener('click', () => {
        if (isImageVisible) {
            displayElem.style.backgroundImage = 'none';
        } else {
            displayElem.style.backgroundImage = 'url(img/gameboy-advance-sp.jpg)';
            displayElem.style.backgroundSize = 'cover';
        }

        isImageVisible = !isImageVisible;
    });
}

start();

const displayElem = document.getElementById('display');
const startButton = document.getElementById('start');
const selectButton = document.getElementById('select');
let isImageVisible = false;

startButton.addEventListener('click', () => {
    if (isImageVisible) {
        displayElem.style.backgroundImage = 'none';
    } else {
        displayElem.style.backgroundImage = 'url(img/gameboy-advance-sp.jpg)';
        displayElem.style.backgroundSize = 'cover';
    }

    isImageVisible = !isImageVisible;
});

selectButton.addEventListener('click', () => {
    displayElem.style.backgroundImage = 'url(img/gameboy-advance-sp.jpg)';
    displayElem.style.backgroundSize = 'cover';
    isImageVisible = true;
});

let sound = new Audio ('./audio/super-mario-castle-bros.mp3')

a.addEventListener('click', ()=>{
    sound.play();
});

b.addEventListener('click', ()=>{
    sound.pause();
});