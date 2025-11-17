'use strict'

const dogs =[]

for (let i = 0; i < 6; i++) {
      const dog = prompt(`Enter No. ${i + 1} Dog Name: `);
      dogs.push(dog);
    }
dogs.sort();
dogs.reverse();

let items = '<ul>';
for (let dog of dogs) {
  items += '<li>' + dog + '</li>';
  }

items += '</ul>';
document.querySelector('#target').innerHTML = `List of Dogs: `;
document.querySelector('#listofdogs').innerHTML = items;
