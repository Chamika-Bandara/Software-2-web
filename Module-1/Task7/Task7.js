'use strict'

const rolls = parseInt(prompt('Enter the Number of dice rolls you want: '));

let sum = 0;

for (let i = 0; i < rolls; i++) {
  const randomNumber = Math.floor(Math.random()*6) +1;
  sum += randomNumber;
}

document.querySelector('#target').innerHTML = `The sum after ${rolls} is ${sum}.`;
