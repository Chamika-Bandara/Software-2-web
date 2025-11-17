'use strict';

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}


const sides = parseInt(prompt('Enter the number of sides on the dice:'));
const rolls = [];
let result;


do {
  result = rollDice(sides);
  rolls.push(result);
} while (result !== sides);


let items = '<ul>';
for (let roll of rolls) {
  items += '<li>' + roll + '</li>';
}
items += '</ul>';


document.querySelector('#target').innerHTML = `Rolled a ${sides}-sided dice until getting ${sides}:`;
document.querySelector('#rollsList').innerHTML = items;


console.log(`Rolled a ${sides}-sided dice until getting ${sides}:`);
for (let roll of rolls) {
  console.log(roll);
}