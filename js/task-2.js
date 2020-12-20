"use strict"; 

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsList = document.querySelector('#ingredients');
  const listAdd = ingredients.map(ingredient => {
    const item = `<li>${ingredient}</li>`;
    return item;
  }).join('');
  
  ingredientsList.insertAdjacentHTML('afterbegin', listAdd);  