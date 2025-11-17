'use strict'

const numbers =[]

let number = parseInt(prompt(`Enter a Number: `));
      numbers.push(number);

while (number !== 0){
  numbers.push(number)
  number = parseInt(prompt(`Enter a Number: `));
}

numbers.sort((a, b) => b - a);

console.log('Numbers from largest to smallest:');
for (let num of numbers) {
  console.log(num);
}

