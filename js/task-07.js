const inputFontSizeEl = document.querySelector('input#font-size-control');
const changeFont = document.querySelector('span#text');

inputFontSizeEl.addEventListener('input', onInputChangeFont);
changeFont.style.fontSize = '56px'; //
function onInputChangeFont(event) {
  changeFont.style.fontSize = event.currentTarget.value + 'px';
}