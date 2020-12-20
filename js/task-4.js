"use strict";

const valueBlock = document.querySelector('#value');
const buttonInc = document.querySelector('[data-action="increment"]');
const buttonDec = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    valueBlock.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  valueBlock.textContent = counterValue;
};

buttonInc.addEventListener('click', increment);
buttonDec.addEventListener('click', decrement);