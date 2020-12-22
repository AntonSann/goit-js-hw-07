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
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid'); 
    }
}
        

validationInput.addEventListener('blur', validator);