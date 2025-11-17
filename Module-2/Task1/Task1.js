'use strict';

const numbers =[]

for (let i = 0; i < 5; i++) {
      const number = parseInt(prompt(`Enter Number ${i + 1}: `));
      numbers.push(number);

    }

console.log(`Numbers in reverse order: `);
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}