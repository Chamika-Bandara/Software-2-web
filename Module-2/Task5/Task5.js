'use strict'

const numbers =[]

let number = parseInt(prompt(`Enter a Number: `));


while (!numbers.includes(number)){
  numbers.push(number)
  number = parseInt(prompt(`Enter a Number: `));
}

console.log(`The number ${number} has already been given!`);


numbers.sort((a, b) => a - b);

console.log('Numbers in ascending order:');
for (let num of numbers) {
  console.log(num);
}