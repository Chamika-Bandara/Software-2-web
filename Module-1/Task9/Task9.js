'use strict'

const number = parseInt(prompt('Please Enter an Integer: '));

let prime = true;

if (number <2) {
  prime = false;
}
else {
  for (let i =2; i <=Math.sqrt(number); i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
}

if (prime) {
  document.querySelector('#target').innerHTML = `The ${number} is a Prime Number.`;
} else {
  document.querySelector('#target').innerHTML = `The ${number} is NOT a Prime Number.`;
}