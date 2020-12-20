"use strict";

const controls = document.querySelector('#controls');
const buttonRender = document.querySelector('[data-action="render"]');
const buttonDestroy = document.querySelector('[data-action="destroy"]');
const divBoxes = document.querySelector('#boxes');
let sizes = 30;

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

const createBoxes = (amount) => {
    // метод fill() тут используется для создания пустого массива, который можно перебрать
    const array = Array(amount).fill();
    
    array.map(item => {
        item = `<div style="background-color: ${randColor()}; width: ${sizes}px; height: ${sizes}px;"></div>`;
        divBoxes.insertAdjacentHTML('beforeend', item);
        sizes += 10;
    }); 
};

const destroyBoxes = () => {
    divBoxes.innerHTML = '';
    controls.querySelector('input').value = 0;
    sizes = 30;
};

const render = () => {
    let number = controls.querySelector('input');
    createBoxes(Number(number.value));
}

buttonRender.addEventListener('click', render);
buttonDestroy.addEventListener('click', destroyBoxes);

