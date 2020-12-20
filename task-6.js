"use strict";

/* Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>
Сколько символов должно быть в инпуте, указывается 
в его атрибуте data-length.
Если введено подходящее количество, то border инпута
становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

 */


const validationInput = document.querySelector('#validation-input');
const validLength = validationInput.getAttribute('data-length');
const validator = () => {
    let inputText = validationInput.value.trim();
    
    validationInput.classList.remove('invalid');
    validationInput.classList.remove('valid');

    if(validLength == inputText.length){
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } 
    if(validLength != inputText.length && inputText.length > 0) {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
}
        

validationInput.addEventListener('blur', validator);