'use strict';

const message = confirm('Should I calculate the square root?');

if (message){
  const number = parseInt(prompt('Enter a number'));
    if (number < 0) {
      document.querySelector('#target').innerHTML = 'The square root of a negative number is not defined';
    }
    else {const squareroot = [Math.sqrt(number)]
      document.querySelector('#target').innerHTML = `The square root of ${number} is ${squareroot}`;
    }
}
    else {
  document.querySelector('#target').innerHTML = 'The square root is not calculated.';}

