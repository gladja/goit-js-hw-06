const bodyEl = document.querySelector('body');
const colorHexEl= document.querySelector('.color');
const btnChangeColorEl = document.querySelector('.change-color');

btnChangeColorEl.addEventListener('click', onChangeColorBody)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColorBody () {
  colorHexEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorHexEl.textContent;
}