'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


const rolls = [];
let result;


do {
  result = rollDice();
  rolls.push(result);
} while (result !== 6);


let items = '<ul>';
for (let roll of rolls) {
  items += '<li>' + roll + '</li>';
}
items += '</ul>';


document.querySelector('#target').innerHTML = 'Dice Rolls:';
document.querySelector('#rollsList').innerHTML = items;


