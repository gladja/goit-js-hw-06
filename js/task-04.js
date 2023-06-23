const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('span#value')

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

btnDecrementEl.addEventListener('click', decrement);
btnIncrementEl.addEventListener('click', increment);



// const counter = {
//   counterValue: 0,
//
//   decrement() {
//     return this.counterValue -= 1;
//   },
//   increment() {
//     return this.counterValue += 1;
//   },
// };
//
// btnDecrementEl.addEventListener('click', () => {
//   counter.decrement();
//   valueEl.textContent = counterValue;
// });