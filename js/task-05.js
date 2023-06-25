const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

const change = (event) => {
  outputEl.textContent = event.currentTarget.value;
}

inputEl.addEventListener('input', change)