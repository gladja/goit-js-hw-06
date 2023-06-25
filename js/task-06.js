const inputEl = document.querySelector('input[data-length="6"]');

inputEl.addEventListener('change', onInputChange);

function onInputChange(event)  {
  const dataLength = Number(inputEl.dataset.length)
  const currentLength = event.currentTarget.value.length

  inputEl.classList.add('invalid');

  dataLength === currentLength ?
    inputEl.classList.replace('invalid','valid') :
    inputEl.classList.replace('valid','invalid');
}