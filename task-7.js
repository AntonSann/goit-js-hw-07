"use strict";

const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeSize = () => {
    text.style.fontSize = 16 * (fontSize.value / 50) + "px";
};

fontSize.addEventListener("click", changeSize);

