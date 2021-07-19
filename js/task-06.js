const inputRef = document.querySelector('#validation-input');

const changeNumber = function (event) {
  event.currentTarget.value.length === +inputRef.dataset.length
    ? toggleClass('valid', 'invalid')
    : toggleClass('invalid', 'valid')
  };

function toggleClass(add, remove) {
  inputRef.classList.add(add);
  inputRef.classList.remove(remove);
}

inputRef.addEventListener('blur', changeNumber);
