const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

const change = (event) => {
  outputEl.textContent = event.currentTarget.value;
  if(event.currentTarget.value === '') {
    outputEl.textContent = 'Anonymous';
  }
}

inputEl.addEventListener('input', change)