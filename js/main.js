const displayElem = document.getElementById('display');
document.getElementById('up').addEventListener('click', () => {
    displayElem.style.backgroundImage = "url(img/gameboy-advance-sp.jpg)";
});
document.getElementById('down').addEventListener('click', () => {
    displayElem.style.backgroundImage = "none";
});
