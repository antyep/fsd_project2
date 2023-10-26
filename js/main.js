// right: 

const displayElem = document.getElementById('display');
const startButton = document.getElementById('start');
const selectButton = document.getElementById('select');
const rightButton = document.getElementById('right');
const leftButton = document.getElementById('left');
const upButton = document.getElementById('up');
const aButton = document.getElementById('a');
const bButton = document.getElementById('b')



function start() {
    let isImageVisible = false;

    startButton.addEventListener('click', () => {
        if (isImageVisible) {
            displayElem.style.backgroundImage = 'none';
        } else {
            displayElem.style.backgroundImage = 'url(./img/gameboy-advance-sp.jpg)';
            displayElem.style.backgroundSize = 'cover';
        }

        isImageVisible = !isImageVisible;
    });
}

start()



selectButton.addEventListener('click', () => {
    displayElem.style.backgroundImage = 'url(./img/gameboy-advance-sp.jpg)';
    displayElem.style.backgroundSize = 'cover';
    isImageVisible = true;
});



function right() {
    rightButton.addEventListener('click', () => {
        displayElem.style.backgroundImage = 'url(./img/mario-right.png)';
        displayElem.style.backgroundSize = 'cover';
    });
}

right();

function left() {

    leftButton.addEventListener('click', () => {
        displayElem.style.backgroundImage = 'url(./img/mario-left.jpg)';
        displayElem.style.backgroundSize = 'cover';
    });
}

left();

function up() {

    upButton.addEventListener('click', () => {
        displayElem.style.backgroundImage = 'url(./img/mario-jumping.png)';
        displayElem.style.backgroundSize = 'cover';
    });
}

up();

let sound = new Audio('./audio/super-mario-castle-bros.mp3')
aButton.addEventListener('click', () => {
    sound.play();
    displayElem.style.backgroundColor = 'black'
});


bButton.addEventListener('click', () => {
    displayElem.style.backgroundImage = 'url(./video/33HU.gif)';
    displayElem.style.backgroundSize = 'contain';
    displayElem.style.backgroundColor = 'white'
});



