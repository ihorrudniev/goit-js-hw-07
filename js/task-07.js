const refs = {
  inputRef: document.querySelector('#font-size-control'),
  textRef: document.querySelector('#text'),
};

function onChangeFontSize(event) {
  const fontSize = +event.currentTarget.value;
  refs.textRef.style.fontSize = `${fontSize}px`;
}

refs.inputRef.addEventListener('input', onChangeFontSize);
