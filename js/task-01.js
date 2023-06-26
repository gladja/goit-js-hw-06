const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

// const nameEl = document.querySelectorAll('li.item h2');
// console.log(nameEl[0].textContent);
// const elementEl = document.querySelectorAll('.item ul')
// console.log(elementEl[0].children.length);

categoriesEl.forEach(itm => {
   const nameEl = itm.firstElementChild.textContent;
   const elementEl = itm.lastElementChild.children.length;

   console.log(`Category: ${nameEl}`);
   console.log(`Elements: ${elementEl}`);
});