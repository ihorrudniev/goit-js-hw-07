const targetBtnEl = document.querySelectorAll('#counter button');
const decrementBtnEl = targetBtnEl[0];
const incrementBtnEl = targetBtnEl[1];

const valueEl = document.querySelector('#value');

const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

decrementBtnEl.addEventListener('click', function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});
  
incrementBtnEl.addEventListener('click', function () {
  counter.increment();
   valueEl.textContent = counter.value;
});