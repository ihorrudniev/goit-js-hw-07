const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsRef = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
   
  return itemEl;
});
 
listIngredientsRef.append(...elements);

console.log(listIngredientsRef);
