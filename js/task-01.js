const categoriesListEl = document.querySelectorAll('.item')

console.log(`В списке ${categoriesListEl.length} категории.`);

const showCategories = element => element.forEach(el =>
    console.log(`Категория: ${el.querySelector(`h2`).textContent}. Количество элементов: ${el.querySelectorAll(`li`).length}.`))

showCategories(categoriesListEl);