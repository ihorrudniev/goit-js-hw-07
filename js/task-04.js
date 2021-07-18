const targetBtnEl = document.querySelectorAll('#counter button');
const decrementBtnEl = targetBtnEl[0];
// console.log(decrementBtnEl);
const incrementBtnEl = targetBtnEl[1];
// console.log(incrementBtnEl);

const valueEl = document.querySelector('#value');
// console.log(valueEl);

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
  console.log('Click decrement');
  
  counter.decrement();
  // console.log(counter);

  valueEl.textContent = counter.value;
});
  
incrementBtnEl.addEventListener('click', function () {
  console.log('Click increment');
  
  counter.increment();
  // console.log(counter);

  valueEl.textContent = counter.value;
});


