const wrap = document.querySelector('.wrapper');
let valOne; //value select  "Откуда"
let valTwo; //value select  "Куда"
let checkRes; // var for validation
let objDateForSend = {}; //the object to send data to the server after filling out the form on the order
const options = ['Выберите город', 'Харьков', 'Кириловка', 'Скадовск', 'Лазурное'];

const createElem = (wrapTagName, tagName) => wrapTagName.appendChild(document.createElement(tagName));
const defineElem = (nameElem, nameClass) => customElements.define(nameElem, nameClass);