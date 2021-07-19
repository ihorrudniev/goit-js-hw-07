const refs = {
  inputRef: document.querySelector('#font-size-control'),
  textRef: document.querySelector('#text'),
};

function onChangeFontSize(event) {
  const fontSize = +event.currentTarget.value;
  refs.textRef.style.fontSize = `${fontSize}px`;
}

refs.inputRef.addEventListener('input', onChangeFontSize);

// вириант решения 2 ==================

// const refs = {
//   inputRef: document.getElementById('font-size-control'),
//   textRef: document.getElementById('text'),
// };

// refs.inputRef.oninput = function () {
//   refs.textRef.style.fontSize = refs.inputRef.value + 'px';
// };

// вириант решения 3 ==================

// const input = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');
// // console.log(input);
// // console.log(text);
// input.addEventListener('input', function () {
//   text.style.fontSize = input.value + 'px';
// });
