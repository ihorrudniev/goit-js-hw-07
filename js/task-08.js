
const inputNumber = document.querySelector('input[type="number"]');
const btnRander = document.querySelector('button[data-action="render"]');
const btnClear = document.querySelector('button[data-action="destroy"]');
const boxGallary = document.querySelector('#boxes');

btnRander.addEventListener('click', onBtnRanderClick);
btnClear.addEventListener('click', onBtnClearClick);

let defaultSizeBox = 30;

function onBtnRanderClick () {
  const amount = +inputNumber.value;
  createBoxes(amount);
}

const createBoxes = (amount) => {
  const collectionBoxes = [];

  for (let i = 0; i < amount; i += 1){
    const div = document.createElement('div');
    div.style.backgroundColor = createRandomColor();
    div.style.width = defaultSizeBox + 'px';
    div.style.height = defaultSizeBox + 'px';
    defaultSizeBox += 10;

    collectionBoxes.push(div);
  }
  boxGallary.append(...collectionBoxes);
}

function onBtnClearClick () {
  boxGallary.innerHTML = '';
  defaultSizeBox = 30;
   inputNumber.value = '';
}

function createRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
 }
 
