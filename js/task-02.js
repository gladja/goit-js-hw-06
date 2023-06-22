const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');

const newArr = ingredients.map(itm => {
  const listEl = document.createElement('li');
  listEl.classList.add('item');
  listEl.append(itm);
  // console.log(listEl);
  return listEl;
});

// console.log(newArr);
ingredientsEl.append(...newArr);
