'use strict';

function concat(array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const concatenated = concat(names);

document.querySelector('#target').innerHTML = `Array: ${names.join(', ')}`;
document.querySelector('#result').innerHTML = `Concatenated Result: <strong>${concatenated}</strong>`;