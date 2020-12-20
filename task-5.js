"use strict";

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const getName = () => {
    outputName.textContent = 'незнакомец';
    if(inputName.value.trim()){
        outputName.textContent = inputName.value.trim();
    };
};

inputName.addEventListener('input', getName);