const categoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesEl.length}`);

const nameEl = document.querySelectorAll('li.item h2');
// console.log(nameEl[0].textContent);

const elementEl = document.querySelectorAll('.item ul')
// console.log(elementEl[0].children.length);

nameEl.forEach((itm, idx) => {
    console.log(`Category: ${nameEl[idx].textContent}`);
    console.log(`Elements: ${elementEl[idx].children.length}`);
})