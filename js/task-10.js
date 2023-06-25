const inputValueEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector('div#boxes');


inputValueEl.addEventListener('input', inputValue);
btnCreateEl.addEventListener('click', btnCreate);
btnDestroyEl.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let amount = 0;
function inputValue(event) {
   return amount = event.currentTarget.value;
}

function createBoxes() {
  let sum = 0;

  for (let i = 0; i < amount; i += 1) {
    sum += 10;

    const div = document.createElement('div');
    div.style.width = 20 + sum + 'px';
    div.style.height = 20 + sum + 'px';
    div.style.backgroundColor = getRandomHexColor();

    boxEl.append(div);
  }
}

function btnCreate() {
  createBoxes(amount);
}

function destroyBoxes() {
  boxEl.innerHTML = '';
  inputValueEl.value = '';
}