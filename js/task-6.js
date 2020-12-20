"use strict";

const validationInput = document.querySelector('#validation-input');
const validLength = Number(validationInput.getAttribute('data-length'));
const validator = () => {
    let inputText = validationInput.value;
    console.log(inputText.length);
    console.log(validLength);
    if(validLength === inputText.length) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else if(inputText.length === 0) {
        validationInput.classList.remove('invalid');
        validationInput.classList.remove('valid'); 
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
}
        

validationInput.addEventListener('blur', validator);