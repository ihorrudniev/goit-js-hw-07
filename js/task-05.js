// const input = document.querySelector('#name-input');
// const nameLabel = document.querySelector('#name-output');


const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value; 
} 