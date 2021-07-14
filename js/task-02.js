const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// console.log(ingredients);

const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
   
  return itemEl;
});
 
listEl.append(...elements);

console.log(listEl);
