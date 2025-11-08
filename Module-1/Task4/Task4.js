'use strict';

const randomNumber = Math.floor(Math.random()*4) +1;

const name = prompt('Enter Your Name:');

switch (randomNumber) {
  case 1:
    document.querySelector('#target').innerHTML =(`${name}, you are Gryffindor`);
    break;
  case 2:
    document.querySelector('#target').innerHTML =(`${name}, you are Slytherin`);
    break;
   case 3:
     document.querySelector('#target').innerHTML =(`${name}, you are Hufflepuff`);
     break;
   case 4:
     document.querySelector('#target').innerHTML = (`${name}, you are Ravenclaw`);
     break;
}